import express from'express'
import { dbConnection } from './database/dbConnection.js'
import userRouter from './modules/posts/users.routes.js'
import postsRouter from './modules/posts/posts.routes.js'
import { getSinglPosts } from './modules/posts/posts.controller.js'
import cors from "cors"


const app = express()
const port = process.env.port||3000
app.use(express.json())
app.use(cors())
app.use('/auth',userRouter)
app.use('/posts',postsRouter)
app.use('/posts',getSinglPosts)
 dbConnection()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))