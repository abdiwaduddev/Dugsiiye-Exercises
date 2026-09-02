import UserList from "./userList";

const App = () => {
 const UsersList = [
   { id: 1, name: "Abdiwadud", email: "abdiwadud@example.com" },
   { id: 2, name: "Leo", email: "leo@example.com" },
 ];
  return (
    <div>
      <UserList UsersList = {UsersList}/>
    </div>
  );
};

export default App;
