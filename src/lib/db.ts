import { createConnection } from 'typeorm';

import User from './model/user';
import Auth from './model/auth';
import Article from './model/article';
import Comment from './model/comment';

const initConnection = async () => {
  await createConnection({
    type: 'sqlite',
    name: 'default',
    database: ':memory:',
    entities: [
      User,
      Auth,
      Article,
      Comment,
    ],
    synchronize: true,
    logging: 'all',
  });
};

export default initConnection;
