import { useState } from "react";

const Form = () => {
  const [Dataform, setDataForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDataForm((prevData) => ({ ...Dataform, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Dataform);
    console.log(isChecked);
    console.log(selectedOption);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="username..."
        value={Dataform.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={Dataform.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={Dataform.password}
        onChange={handleChange}
      />

      <div>
        <label htmlFor="checked">Checked</label>

        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </div>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select a Country</option>
        <option value="option1">USA</option>
        <option value="option2">IRAN</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
