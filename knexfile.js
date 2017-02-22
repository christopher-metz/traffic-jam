'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/traffic_jam_dev'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
