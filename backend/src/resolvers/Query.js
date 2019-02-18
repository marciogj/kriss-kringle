const db = require('../memory-db.js');
const { APP_SECRET, getUserId } = require('../security/jwt-user.js');

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


function getAllUsers(root, args, context, info) {
    return db.users;
}

function getAllPersonAnimals(root, args, context, info) {
  return db.personAnimals;
}

function krisskringle(root, args, context, info) {
    return db.krisskringle;
}

function mySecretAnimal(root, args, context, info) {
    console.log('mySecretAnimal');
    console.log(JSON.stringify(context));
    let user = context.user;
    console.log('User: ' + user);
    let secretAnimalsResult = db.secretAnimals.filter( sa => sa.person.id === user.id);
    if (secretAnimalsResult.length == 1) {
      return secretAnimalsResult[0];
    }
   
    throw new Error('No secret animal associated'); 
}
  
  module.exports = {
    mySecretAnimal,
    krisskringle,
    getAllUsers,
    getAllPersonAnimals
  }