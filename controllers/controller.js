const db = require("../models")
const Post = db.posts

// const index = (req, res)=>{
//     res.send("Assalamualaikum!")
// }

// const post = async (req, res) =>{
//     const post = await Post.findAll({})
//     res.sendStatus('200').send(post)

// }

// const createPost = async (req, res) =>{
//     const data = {
//         id : req.body.id,
//         body: req.body.body
//     }
//     const post = await Post.create(data)
//     res.sendStatus(200).send(post)
//     console.log(post)
// }

// module.exports = {
//     index,
//     post,
//     createPost
// }

const index = function(req, res){
    res.send('done')
}

const createPost = async (req, res)=>{
    const data = {
        id:req.body.id,
        body:req.body.body
    }
    const post = await Post.create(data)
    res.status(200).send(post)
    console.log(data)
}

const postById = async (req, res)=>{
    console.log(req.params.id)
    const post = await Post.findOne({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.status(200).json(post)
}
const post = async (req, res)=>{
    const post = await Post.findAll()
    res.status(200).json(post)
}
const updatepost = async (req, res)=>{
    const update = await Post.update(req.body, {where:{id:req.params.id}})
    res.status(200).json(update)
}
const deletepost = async (req, res)=>{
    
    await Post.destroy({where:{id:req.params.id}})
    res.status(200).json("post deleted")
}

module.exports = {
    index,
    createPost,
    postById,
    post,
    updatepost,
    deletepost
}