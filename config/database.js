import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'CCINOV8',
  password: 'password',
  database: 'salary_db'
});
 
export default db;