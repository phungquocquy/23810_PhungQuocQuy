const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Kết nối MongoDB Atlas thành công!'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// API Routes
app.use('/api/employees', employeeRoutes);

app.get('/', (req, res) => {
  res.send('HR Management API 23810 Phung Quoc Quy is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
