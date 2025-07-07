import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import './model/model'; // your models & associations

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');

    await sequelize.sync(); // Use `force: true` only in development to drop tables and recreate them
    console.log('✅ Database synced successfully.');

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    process.exit(1); // exit process with failure code
  }
};

startServer();
