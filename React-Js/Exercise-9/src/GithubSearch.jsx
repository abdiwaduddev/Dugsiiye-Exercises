import React, { useState, useEffect } from "react";

const GitHubUserSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Log any errors to the console whenever "error" changes
  useEffect(() => {
    if (error) {
      console.error("Error fetching GitHub user:", error);
    }
  }, [error]);

  const handleSearch = async () => {
    if (!searchTerm) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      // 1-second delay before fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const response = await fetch(
        `https://api.github.com/users/${searchTerm.toLowerCase()}`,
      );

      if (!response.ok) {
        throw new Error("GitHub user not found");
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <h3>{userData.name || userData.login}</h3>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <p>Location: {userData.location || "N/A"}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default GitHubUserSearch;
