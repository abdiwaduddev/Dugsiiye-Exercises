// ContactForm.jsx
import UseForm from "./UseForm";

const ContactForm = () => {
  const { values, handleChange } = UseForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", values);
    // Handle form submission (e.g., send data to a server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message:
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
