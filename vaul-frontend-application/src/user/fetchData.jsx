import { useEffect , useState } from "react";

function FetchFromAPI() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/users/getall")
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);
  return (

    <div>
      {users.map(user => (
          <p key={user.id}>{user.name} - {user.email}</p>
      ))}
    </div>
  )
}
export default FetchFromAPI;