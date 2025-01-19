const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');  // MySQL klient pre Node.js

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Pripojenie k MySQL databáze cez XAMPP
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // Predvolený používateľ MySQL v XAMPP
  password: '',     // Predvolené heslo je prázdne v XAMPP
  database: 'nabytok_riziky',
});

db.connect((err) => {
  if (err) {
    console.error('Chyba pri pripojení k databáze:', err);
    process.exit(1);
  }
  console.log('Pripojenie k databáze úspešné');
});

// Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'martinrizling@gmail.com',  // Tvoj Gmail
    pass: 'sretjetvhoyruain',         // Tvoje App Password
  },
});

// Endpoint na získanie hodnotení
app.get('/ratings', (req, res) => {
  db.query('SELECT * FROM ratings', (err, results) => {
    if (err) {
      console.error('Chyba pri načítaní hodnotení:', err);
      return res.status(500).send('Chyba pri načítaní hodnotení');
    }
    console.log('Načítané hodnotenia:', results);
    res.json(results); // Posielame hodnotenia v JSON formáte
  });
});


// Endpoint na uloženie hodnotenia
app.post('/ratings', (req, res) => {
  const { projectId, rating } = req.body;

  const query = 'INSERT INTO ratings (projectId, rating) VALUES (?, ?)';
  db.query(query, [projectId, rating], (err, result) => {
    if (err) {
      console.error('Chyba pri ukladaní hodnotenia:', err);
      return res.status(500).send('Chyba pri ukladaní hodnotenia');
    }
    console.log('Hodnotenie uložené:', result);
    res.status(200).send('Hodnotenie uložené');
  });
});


// Endpoint na spracovanie formulára
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'martinrizling@gmail.com',  // Tvoj e-mail
    subject: `Správa od ${name}`,
    text: `Od: ${name}\nEmail: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Chyba pri odosielaní e-mailu:', error);
      res.status(500).send('Chyba pri odosielaní e-mailu.');
    } else {
      console.log('E-mail odoslaný:', info.response);
      res.status(200).send('E-mail úspešne odoslaný!');
    }
  });
});

// Spustenie servera
app.listen(PORT, () => {
  console.log(`Server beží na http://localhost:${PORT}`);
});
