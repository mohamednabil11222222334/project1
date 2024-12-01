import { Router } from "express"; 

import { addPost, deleteUser, getAllPosts, getSinglPosts, getUserPosts, updateUser } from "./posts.controller.js";

const postsRouter=Router()

postsRouter.post('/',addPost)
postsRouter.get('/',getAllPosts)
postsRouter.get('/:id',getSinglPosts)
postsRouter.get('/me/:id',getUserPosts)
postsRouter.put('/:id',updateUser)
postsRouter.delete('/:id',deleteUser)
export default postsRouter