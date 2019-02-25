var credentials = require('./credentials.json');

var mysql=require("mysql");

credentials.host="ids";
var connection = mysql.createConnection(credentials);

// connect to the sql database
connection.connect(function(err){
  if(err){
    console.log("Problems with MySQL: "+err);
  } else {
    console.log("Connected to Database.");
  }
});

// query for the names of all the databases
connection.query('SHOW DATABASES',function(err,rows,fields){
  if(err){
    console.log('Error looking up databases');
  } else {
    console.log('Returned values were ',rows);
}
});
connection.end()
console.log("All done now.");
