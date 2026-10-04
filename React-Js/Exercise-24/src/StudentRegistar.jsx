import { useForm } from "react-hook-form";

const StudentRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to a server
    alert("Registration successful!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Student Registration</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Student Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Student Name</label>
          <input
            {...register("studentName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.studentName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.studentName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Grade Level */}
        <div>
          <label className="block text-sm font-medium mb-1">Grade Level</label>
          <select
            {...register("gradeLevel", {
              required: "Please select a grade",
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>
          {errors.gradeLevel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gradeLevel.message}
            </p>
          )}
        </div>

        {/* Subjects Interest */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Subjects Interest
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects", {
                  required: "Select at least one subject",
                })}
                value="math"
                className="mr-2"
              />
              Mathematics
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="science"
                className="mr-2"
              />
              Science
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                {...register("subjects")}
                value="english"
                className="mr-2"
              />
              English
            </label>
          </div>
          {errors.subjects && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subjects.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
