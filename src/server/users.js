/**
 * @type {import('../api/users').User[]}
 */
const users = [{
  name: 'Klaus',
  role: 'admin'
}, {
  name: 'Lola',
  role: 'author'
}, {
  name: 'Olaf',
  role: 'guest'
}]

/**
 * @param {import("express").Express} app
 */
function routes(app) {
  app.get('/users', function(req, res) {
    res.status(200).send(users)
  })
}
module.exports = routes
