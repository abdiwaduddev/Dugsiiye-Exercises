const UserList = ({ UsersList }) => {
  return (
    <div>
      <h2>Users List</h2>
      {UsersList.length > 0 ? (
        <ul>
          {UsersList.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;
