db.Students.insertMany([
  {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    age: 28,
    courses: ["React", "Tailwindcss"],
  },
  {
    name: "Sarah Chen",
    email: "sarah.chen@example.com",
    age: 34,
    courses: ["React", "Tailwindcss"],
  },
  {
    name: "David Kim",
    email: "david.kim@example.com",
    age: 22,
    courses: ["React", "Tailwindcss"],
  },
  {
    name: "Elena Rostova",
    email: "elena.rostova@example.com",
    age: 41,
    courses: ["React", "Tailwindcss"],
  },
  {
    name: "Samennyo",
    age: 41,
    courses: ["React", "Tailwindcss"],
  },
]);

db.Students.find({ age: { $gt: 22 } });

db.Students.find({ courses: "React" });

db.Students.find({ name: { $regex: /^S/ } });

db.Students.find({ age: { $in: [18, 21] } });

db.Students.find({ email: { $not: /@gmail\\.com$/ } });

db.Students.find({ age: { $gt: 20 }, courses: "React" });

db.Students.find({
  $or: [{ courses: "React" }, { courses: "Tailwindcss" }],
});

db.Students.find({
  $or: [{ name: { $regex: /X/ } }, { email: { $regex: /\\.edu$/ } }],
});
