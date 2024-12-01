import { dbConnection } from "../../database/dbConnection.js"

const connection=dbConnection()
const addPost=(req,res)=>{
 connection.query(`insert into posts set?`,req.body)
 res.status(201).json({message:"success"})

}
const getAllPosts=(req,res)=>{
connection.execute('select users.id as usersId,users.name,posts.id as postsId,posts.title,posts.description from users join posts on users.id=posts.user_id',(err,data)=>{
res.status(200).json({message:"success.",allPosts:data})

})

}
const getSinglPosts=(req,res)=>{
    connection.execute(`select users.id as usersId,users.name,posts.id as postsId,posts.title,posts.description from users join posts on users.id=posts.user_id where posts.id=${req.params.id}`,(err,data)=>{
    res.status(200).json({message:"success.",allPosts:data})
    
    })
}  
const getUserPosts=(req,res)=>{
    connection.execute(`select users.id as usersId,users.name,posts.id as postsId,posts.title,posts.description from users join posts on users.id=posts.user_id where users.id=${req.params.id}`,(err,data)=>{
    res.status(200).json({message:"success.",Posts:data})
    
    })
  
    
}  
const updateUser=(req,res)=>{
    connection.query('update posts set? where id=?',[req.body,req.params.id])
    res.status(200).json({message:"success."})
    
    }
    const deleteUser=(req,res)=>{
        connection.execute(`delete from posts where id=${req.params.id}`)
        res.status(200).json({message:"success."})
        
        
    }
export{
    addPost,
    getAllPosts,
    getSinglPosts,
    getUserPosts,
    updateUser,
    deleteUser
}