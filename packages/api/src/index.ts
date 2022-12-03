import express from 'express';
import cors from 'cors';
import pinoHTTP from 'pino-http';
import { nanoid } from 'nanoid';
import logger from './logger';
import authController from './modules/auth/controllers';
import userController from './modules/users/controllers';
import { errorHandler } from './modules/common/middlewares';
import { AppDataSource } from './datasources';

const port = process.env.PORT || 5000;

const baseApi = '/api/v1';

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(
      pinoHTTP({
        genReqId: () => nanoid(),
        formatters: {
          level: (label) => {
            return { level: label };
          },
        },
      }),
    );

    app.use(express.json(), express.urlencoded({ extended: true }), cors());

    app.use(baseApi, authController);

    app.use(baseApi, userController);

    app.use(errorHandler);

    app.listen(port, () => {
      logger.info(`Listening on port ${port}`);
    });
  })
  .catch((err) => {
    logger.error(err, 'Error during Data Source initialization');
  });
