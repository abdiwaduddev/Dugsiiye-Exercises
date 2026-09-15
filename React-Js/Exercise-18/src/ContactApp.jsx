// ContactApp.jsx
import { useReducer, useState } from "react";
import { reducer, initialState } from "./reducer";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);

  return (
    <div>
      <h2>Contact Management App</h2>
      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />
      <ContactList
        contacts={state}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
};

export default ContactApp;
