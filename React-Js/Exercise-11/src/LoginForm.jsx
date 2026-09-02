import { useState } from "react";

const LoginForm = () => {
  const [username, setUsernme] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUsernme("");
    setPassword("");
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="text"
          value={username}
          onChange={(e) => setUsernme(e.target.value)}
        />{" "}
        <br /> <br />
        <label htmlFor="Password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br /> <br />
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
