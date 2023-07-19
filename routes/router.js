const route = require("express").Router();
const controller = require("../controllers/controller.js")


route.get('/', controller.index)
route.post('/post', controller.createPost)
route.get('/post/:id',controller.postById )
route.get('/post', controller.post)
route.put('/post/:id', controller.updatepost)
route.delete('/post/:id', controller.deletepost)

module.exports = route;
