db.students.insertMany([
  {
    name: "Alice Smith",
    email: "alice@example.com",
    points: 92,
    courses: ["Math", "Physics", "Computer Science"],
  },
  {
    name: "Bob Jones",
    email: "bob@example.com",
    points: 88,
    courses: ["Math", "Chemistry"],
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    points: 75,
    courses: ["History", "English", "Math"],
  },
  {
    name: "Diana Prince",
    email: "diana@example.com",
    points: 95,
    courses: ["Physics", "Computer Science", "Biology"],
  },
  {
    name: "Evan Wright",
    email: "evan@example.com",
    points: 80,
    courses: ["Computer Science", "History"],
  },
]);

db.students.aggregate([
  // Step 1: Filter students scoring strictly above 85
  {
    $match: {
      points: { $gt: 85 },
    },
  },

  // Step 2: Separate course elements into individual documents
  {
    $unwind: "$courses",
  },

  // Step 3: Group by course and count top performers
  {
    $group: {
      _id: "$courses",
      topPerformersCount: { $sum: 1 },
    },
  },

  // Step 4: Sort courses from highest to lowest count
  {
    $sort: {
      topPerformersCount: -1,
    },
  },

  // Step 5: Format output fields cleanly
  {
    $project: {
      _id: 0,
      courseName: "$_id",
      topPerformersCount: 1,
    },
  },
]);