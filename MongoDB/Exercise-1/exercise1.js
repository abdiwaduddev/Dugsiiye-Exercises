db.Dugsiiye.insertMany([
  {
    name: "Abdiwadud",
    age: 30,
    Email: "abdiwadud@gmail.com",
    Courses: ["React", "Node.js"],
  },
  {
    name: "Ahme",
    age: 20,
    Email: "ahmed@gmail.com",
    Courses: ["Next.js", "Node.js"],
  },
  {
    name: "Mohamud",
    age: 23,
    Email: "mohamud@gmail.com",
    Courses: ["React", "Tailwindcss"],
  },
]);

db.Dugsiiye.find();

db.Dugsiiye.updateOne(
  { name: "Abdiwadud" },
  { $set: { Email: "abdiwadud3@gmail.com" } },
);

// Updating one student

db.Dugsiiye.updateOne(
  { name: "Abdiwadud" },
  { $unset: { email: "abdiwadud3@gmail.com" } },
);

// Deleting One Student

db.Dugsiiye.deleteOne({ name: "Mohamud" });
