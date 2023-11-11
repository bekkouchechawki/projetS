import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import taskRouter from './routes/task.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { sequelize } from './config/config.js';
import { config } from 'dotenv';

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', taskRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
