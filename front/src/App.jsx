import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/list")
      .then((res) => {
        console.log("Dados da resposta:", res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  }, []);

  return (
    <>
      <h1>Lista de dados</h1>
      <ul>
        {users.map((user) => (
          <li style={{ listStyle: "none" }} key={user.id}>
            Email: {user.email}, Senha: {user.password}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
