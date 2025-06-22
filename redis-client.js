const Redis = require("ioredis");
require("dotenv").config();

const objRedis = new Redis({ password: process.env.REDIS_PASSWORD });

module.exports = objRedis;
