let mysql = require('mysql');
// set up connection info to mysql database
let con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'burger_db'
});

// connect to burger database
con.connect(err => {
  if (err) {
    console.error('error connection: ' + err.stack);
    return;
  }
  console.log('connected as id ' + con.threadId);
});

// export connection for use elsehwere
module.exports = con;
