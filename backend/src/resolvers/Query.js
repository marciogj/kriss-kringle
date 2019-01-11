const db = require('../memory-db.js')

//function feed(parent, args, context, info) {
//    return context.db.query.links({}, info)
//}

/*
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    users: () => users,
    krisskringle: () => krisskrigle,
    mySecretAnimal: (root, args, context, info)  => {
      return secretAnimals[0]
    }
  }

  */


function getAllusers(root, args, context, info) {
    return db.users
}

function krisskringle(root, args, context, info) {
    return db.krisskringle
}

function mySecretAnimal(root, args, context, info) {
    return db.secretAnimals[0]
}
  
  module.exports = {
    mySecretAnimal,
    krisskringle,
    getAllusers
  }