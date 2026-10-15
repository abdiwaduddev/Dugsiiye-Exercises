db.students.insertMany([
  {
    name: "Alice Smith",
    email: "alice@example.com",
    points: 85,
    courses: ["Math", "Physics"],
  },
  {
    name: "Bob Jones",
    email: "bob@example.com",
    points: 90,
    courses: ["Chemistry", "Biology"],
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    points: 75,
    courses: ["History", "English"],
  },
]);


db.students.updateOne(
  { name: "Alice Smith" },
  { $set: { email: "alice.smith@newdomain.com" } },
);

db.students.updateOne({ name: "Bob Jones" }, { $inc: { points: 10 } });

db.students.updateOne({ name: "Charlie Brown" }, { $push: { courses: "Art" } });

db.students.updateOne(
  { name: "Alice Smith" },
  { $pull: { courses: "Physics" } },
);

db.students.updateOne(
  { name: "Bob Jones" },
  {
    $set: { email: "bob.updated@example.com" },
    $inc: { points: 5 },
    $push: { courses: "Computer Science" },
  },
);