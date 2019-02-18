const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../security/jwt-user')
const db = require('../memory-db.js')

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)

    //const user = await context.db.mutation.createUser({
    //  data: { ...args, password },
    //}, `{ id }`)
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    return {
      token,
      user,
    }
  }
  
  async function login(parent, args, context, info) {
    console.log('User Login');
    console.log(args);

    //const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
    let userResult = db.users.filter( u => u.email === args.email);
    
    if (userResult.length != 1) {
      throw new Error('No such user found');
    }
    let user = userResult[0];
    console.log(user);
    
    const isValid = await bcrypt.compare(args.password, user.password);
    if (!isValid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET) 
    return {
      token,
      user,
    }
  }
  
  module.exports = {
      signup,
      login
  }