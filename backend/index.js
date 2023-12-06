const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Require the cors package

 require('dotenv').config();
const waitingListRoutes = require('./routes/waitingListRoutes'); // Adjust the path as necessary


const app = express();

// Enable CORS for all routes
app.use(cors());


const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT;

const mongoURI = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}`;
console.log('MongoDB URI:', mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Middleware for parsing JSON bodies (built-in with Express)
app.use(express.json());

app.use('/api', waitingListRoutes);


app.get('/', (req, res) => res.send('Server is running'));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Global error handler:', err);
    res.status(500).json({ message: err.message });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
