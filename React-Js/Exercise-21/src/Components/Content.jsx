import { useState } from "react";

const Content = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const courses = [
    {
      id: 1,
      name: "React Fundamentals",
      progress: 75,
      instructor: "Sarah Wilson",
      nextLesson: "Components & Props",
      color: "yellow",
    },
    {
      id: 2,
      name: "JavaScript Advanced",
      progress: 45,
      instructor: "Mike Johnson",
      nextLesson: "Async/Await",
      color: "green",
    },
    {
      id: 3,
      name: "UI/UX Design",
      progress: 90,
      instructor: "Emily Chen",
      nextLesson: "Color Theory",
      color: "pink",
    },
  ];

  const assignments = [
    {
      id: 1,
      title: "Build a Todo App",
      course: "React Fundamentals",
      dueDate: "2024-03-20",
      status: "pending",
    },
    {
      id: 2,
      title: "API Integration",
      course: "JavaScript Advanced",
      dueDate: "2024-03-18",
      status: "completed",
    },
    {
      id: 3,
      title: "Design System",
      course: "UI/UX Design",
      dueDate: "2024-03-25",
      status: "in-progress",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Course Progress Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Course Progress
          </h2>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium text-gray-800">{course.name}</h3>
                  <span className="text-sm text-gray-500">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`h-2.5 rounded-full`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                  <span className="text-gray-500">
                    Next: {course.nextLesson}
                  </span>
                  <span className="text-gray-500">{course.instructor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="space-y-6">
        {/* Upcoming Assignments */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Upcoming Assignments
          </h2>
          <div className="space-y-4">
            {assignments.map((assignment) => (
              <div
                key={assignment.id}
                className="flex items-center justify-between"
              >
                <div>
                  <h3 className="font-medium text-gray-800">
                    {assignment.title}
                  </h3>
                  <p className="text-sm text-gray-500">{assignment.course}</p>
                </div>
                <div className="text-right">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${
                          assignment.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : assignment.status === "in-progress"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                  >
                    {assignment.status}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">
                    Due {assignment.dueDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Announcements
          </h2>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border-l-4 border-blue-500 pl-4"
              >
                <h3 className="font-medium text-gray-800">
                  {announcement.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {announcement.message}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {announcement.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
