/**
 * Dependencies
 */

import { createLogger } from 'redux-logger';

/**
 * Logger middleware
 */

const loggerMiddleware = createLogger({
  collapsed: true,
  predicate: () => process.env.NODE_ENV !== 'production',
  duration: true,
});

/**
 * Interface
 */

export default loggerMiddleware;
