const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
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
    //const user = await context.db.query.user({ where: { email: args.email } }, ` { id password } `)
    let user = undefined;
    db.users.forEach(u => {
      if (u.email === args.email) {
          user = u;
      }
    });

    if (!user) {
      throw new Error('No such user found')
    }
  
    const valid = await bcrypt.compare(args.password, user.password)
    
    if (!valid) {
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