const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "https://github.com/sadiyasaiya36-netizen/SadiyaBOT.git",
  MONGODB: process.env.MONGODB || "mongodb://mongo:vZVLTItrftcStrwqNgeozAWFituNnycx@mongodb.railway.internal:27017",
  OWNER_NUM: process.env.OWNER_NUM || "94729581028",
};
