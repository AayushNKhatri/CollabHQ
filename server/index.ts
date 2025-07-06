import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database'; // ✅ use .js if using ES Modules

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

// Async function to start server after DB connection
const startServer = async () => {
  try {
    await sequelize.authenticate(); // ✅ MUST await this since it's async
    console.log('✅ Connection has been established successfully.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

startServer();
