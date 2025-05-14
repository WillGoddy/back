const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Test API MERN' });
});

app.get('/api/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Tu as demandé l’élément avec l’ID ${id}`);
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch((err) => console.error('Erreur de connexion MongoDB :', err));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
