import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { requestRoutes } from './src/routes/requests'; // Ensure this path is correct

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/api/requests', requestRoutes); // Make sure to use the router

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
