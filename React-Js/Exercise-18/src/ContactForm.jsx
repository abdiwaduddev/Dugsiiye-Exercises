import { useState, useEffect } from "react";

const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {
  const [contact, setContact] = useState(
    editingContact || { id: null, name: "", email: "", phone: "" },
  );

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
      setIsEditing(true);
    }
  }, [editingContact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.name && contact.email && contact.phone) {
      if (isEditing) {
        dispatch({ type: "edit", payload: contact });
        setIsEditing(false);
      } else {
        dispatch({
          type: "add",
          payload: { ...contact, id: Date.now(), favorite: false },
        });
      }
      setContact({ id: null, name: "", email: "", phone: "" });
    }
  };

  const handleCancelEdit = () => {
    setContact({ id: null, name: "", email: "", phone: "" });
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? "Edit Contact" : "Add New Contact"}</h3>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
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
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">{isEditing ? "Update" : "Add"}</button>
      {isEditing && <button onClick={handleCancelEdit}>Cancel</button>}
    </form>
  );
};

export default ContactForm;
