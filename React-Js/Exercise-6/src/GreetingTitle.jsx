import { useState, useEffect } from "react";

const GreetingTitle = () => {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("Hello");
  useEffect(() => {
    if (name == "") {
      document.title = "Welcome!";
    } else {
      document.title = `${greet}, ${name}`;
    }
    // console.log(name);
  }, [name]);
  return (
    <div>
      <h2>Choose Your name</h2>
      <input
        type="text"
        name="text"
        placeholder="name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      <h2>choose you Greet</h2>
      <input
        type="text"
        name="text"
        placeholder="greeting..."
        value={greet}
        onChange={(e) => setGreet(e.target.value)}
      />
    </div>
  );
};

export default GreetingTitle;
