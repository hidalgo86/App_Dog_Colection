//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
// const { connectToDatabase } = require("./src/database/db");
const { sequelize } = require("./src/models");
require("dotenv").config();

// Syncing all the models at once.

  server.listen(process.env.PORT, async () => {
    sequelize.sync({force:true});
    console.log(`%s listening at ${process.env.PORT}`)
  });


  // "production": {
  //   "username": "postgres",
  //   "password": "D1oEErUOlGa4KQhPFkYb",
  //   "database": "railway",
  //   "host": "containers-us-west-16.railway.app",
  //   "dialect": "postgres",
  //   "port":7778
  // }