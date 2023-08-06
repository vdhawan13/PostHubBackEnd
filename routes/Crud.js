import express from 'express';
const router = express.Router();
import Post from "../models/Post.js";

router.post("/", async (req, res) => {
  try {
    let { name, text, image } = req.body;
    let post = new Post({ name, text, image });
    await post.save();
    res.status(200).json({ msg: "Post created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Something went wrong" });
  }
});

router.put("/:postId", async (req, res) => {
    try {
      const { name, text, image } = req.body;
      const postObj = {
        name: name,
        image: image,
        text: text,
      };
  
      const updatedPost = await Post.findOneAndUpdate(
        { _id: req.params.postId },
        postObj,
        { new: true }
      );
  
      res.status(200).json({ msg: "Post updated successfully", post: updatedPost });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Something went wrong!" });
    }
  });  

router.get("/",async(req,res)=>{
    try{
        let posts=await Post.find();
        res.status(200).json({posts:posts});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Something Went Wrong!"});
    }
})

router.get("/:postId",async(req,res)=>{
    try{
        let post=await Post.findById(req.params.postId);
        res.status(200).json({post:post});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Something Went Wrong!"});
    }
})

router.delete("/:postId",async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.postId);
        res.status(200).json({msg:"post deleted"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Something Went Wrong!"});
    }
})

export default router;