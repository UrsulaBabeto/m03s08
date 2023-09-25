const app = require('express')();
const cors = require('cors')

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

app.use(cors())

app.get('/list', (req, res) => {
  const users = [
    { id: 1, email: "email@email.com", password: "email" },
    { id: 2, email: "arroba@arroba.com", password: "arroba" },
    { id: 3, email: "nome@nome.com", password: "nome" },
    { id: 4, email: "batata@batata.com", password: "batata" }

  ]

  if (!users) return res.status(401).send({ message: "Usuario não encontrado" })
  res.send(users)
});



app.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}/`);
});