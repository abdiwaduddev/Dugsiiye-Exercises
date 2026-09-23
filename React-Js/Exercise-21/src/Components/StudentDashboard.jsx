import Content from "./Content";
import Header from "./Header";
import States from "./States";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Header />

        {/* Stats Grid */}
        <States />
        {/* Main Content Grid */}
        <Content />
      </div>
    </div>
  );
}

export default StudentDashboard;
