const jwt = require('jsonwebtoken')
const APP_SECRET = 'kriss-kringle-is-evolving'
const db = require('../memory-db.js')

function getUserId(authorization) {
  
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    const userId = jwt.verify(token, APP_SECRET)
    return userId;
  }

  throw new Error('Not authenticated')
}

function getUser(userId) {
  console.log('getUser by id ' + userId);
  const usersResult = db.users.filter( user => user.id === userId);
  if (usersResult == 1) {
    return usersResult[0];
  }
  throw new Error('Invalid user with id ' + userId )
}

module.exports = {
    APP_SECRET,
    getUserId,
    getUser,
}