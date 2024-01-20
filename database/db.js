// database/db.js

const { Pool } = require('pg');

// Replace with your actual RDS connection details
const pool = new Pool({
  user: 'postgres',
  host: 'rds-1.c0y5itfvr2es.us-east-1.rds.amazonaws.com',
  database: 'database-1',
  password: 'waelWTF#92',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
