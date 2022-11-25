import express from 'express';
import authController from './modules/auth/controllers';
import userController from './modules/users/controllers';
import { errorHandler } from './modules/common/middlewares';

const port = process.env.PORT || 5000;

const baseApi = '/api/v1';

const app = express();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(baseApi, authController);

app.use(baseApi, userController);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
