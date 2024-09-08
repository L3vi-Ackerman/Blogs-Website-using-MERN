const Blog = require('../Schema/Model');
const getHomeContents = (req,res)=>{
    res.status(200).json({msg:'home page reached~'})
}

const getdbData = async(req,res)=>{
    try {
        const blogs = await Blog.find({});
        res.json(blogs);
    } catch (error) {
        console.log('Error in getdbData: ',error)
    }
}

module.exports = {getHomeContents,getdbData}