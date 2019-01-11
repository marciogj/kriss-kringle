const db = require('../memory-db.js')

function user(root, args, context, info) {

    users.array.forEach(user => {
        if (user.id === root.user.id) {
            return user;
        }
    });

    //return context.db.query.user({ where: { id: root.user.id } }, info)
}
  
module.exports = { user }