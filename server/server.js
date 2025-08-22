import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

class User {
  constructor(username, birthdate, age, email, password, valid = true) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = valid;
  }
}

const users = [
  new User("Sam", "2004-08-02", 30, "sam@gmail.com", "pass123"),
  new User("Rebecca", "2004-10-02", 32, "rebecca@gmail.com", "pass123"),
  new User("Lizzie", "2000-05-03", 27, "lizzie@gmail.com", "pass123")
];

app.post('/api/auth', (req, res) => {
  const { email, password } = req.body;
  const match = users.find(u => u.email === email && u.password === password);

  if (!match) {
    return res.json({ valid: false });
  }

  const { password: _, ...safeUser } = match;
  res.json({ ...safeUser, valid: true });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
