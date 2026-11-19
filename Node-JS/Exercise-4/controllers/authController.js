import User from '../models/userSchema.js'
import { generateToken } from '../utils/generateToken.js'

// Create user 

export const register = async(req, res, next) => {
    let {name, email, password} = req.body

    try {
        const exists = await User.findOne({email})
        if(exists)  return res.status(400).json({ message: "Email already in use" });

        const newUser = await User.create ({name,email,password})

        const token = generateToken(newUser._id)
        res.status(201).json({token})

    } catch (error) {
        console.error("Register Error:", error)
    }
}


// Login Student

export const login = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = generateToken(user._id);

    res.json({token});
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
};