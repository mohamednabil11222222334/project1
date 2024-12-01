
import mysql from "mysql2"

export const dbConnection= () =>{

const conn= mysql.createConnection('mysql://uc0gxcftzuzyh97h:uXGfqgr8SkuGJVTYDQkQ@buog97rya1nebcypues6-mysql.services.clever-cloud.com:3306/buog97rya1nebcypues6')
conn.connect((err)=>{
    if(err) return console.log("databaase error");

    console.log("database connected successfully");

})
return conn
}