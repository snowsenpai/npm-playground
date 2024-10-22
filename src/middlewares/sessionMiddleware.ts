import session from 'express-session';
import { knexInstance } from '../utils/databases/knex/knex'; // Adjust this import path as needed
import { ConnectSessionKnexStore } from 'connect-session-knex';

export function sessionMiddleware() {
  const store = new ConnectSessionKnexStore({
    knex: knexInstance,
    tableName: 'sessions',
    createTable: true,
    cleanupInterval: 1000 * 60 * 60, // Clear expired sessions every hour
  });

  return session({
    store,
    secret: process.env.SESSION_SECRET || 'your_session_secret',
    resave: false, // research on use cases depending on session store
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    },
  });
}
