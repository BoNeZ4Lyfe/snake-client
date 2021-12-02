
const net = require("net");

// establishes a connection with the game server
const { IP, PORT } = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  
  conn.on("connect", () => {
    console.log('"Successfully connected to game server"');

    conn.write("Name: MN");
    conn.write(" Say: HEY");
    
  
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};





module.exports = {connect};
  
