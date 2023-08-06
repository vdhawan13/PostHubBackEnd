import mongoose from "mongoose";

const PostSchema=new mongoose.Schema({
    text: {type: String, required: true},
    name: {type: String, required: true},
    image: {type: String, required: true}
}, {timestamp: true});

const Post=mongoose.model("post", PostSchema);
// module.exports=Post;
export default Post