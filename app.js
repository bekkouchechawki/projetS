import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import coursRouter from './routes/cours.routes.js';
import membreRouter from './routes/membre.routes.js';
import abonnementRouter from './routes/abonnement.routes.js';
import detailsRouter from './routes/details_Abonnement.routes.js';
import likesRouter from './routes/Likes.routes.js';
import commentairesRouter from './routes/commentaires.routes.js';
import gestionnaireRouter from './routes/gestionnaire.routes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { sequelize } from './config/config.js';
import { config } from 'dotenv';

config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/fit4you', coursRouter, membreRouter, abonnementRouter,detailsRouter,likesRouter,commentairesRouter,gestionnaireRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
});
