const States = () => {
  const stats = [
    { label: "Average Grade", value: "88%", icon: "📊" },
    { label: "Courses", value: "3", icon: "📚" },
    { label: "Study Hours", value: "45h", icon: "⏰" },
    { label: "Assignments", value: "12", icon: "✍️" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center">
            <div className="text-2xl mr-4">{stat.icon}</div>
            <div>
              <div className="text-sm text-gray-500">{stat.label}</div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.value}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default States
;
