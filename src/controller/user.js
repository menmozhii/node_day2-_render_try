const users =[{
    name:"menmozhi",
    email:"mozhi@gmail.com",
    username:"men",
    password:"1234",
    status:true
}]
const getAllUser = (req,res)=>{
    try{
        res.status(200).send({
            message:"user fetched succesfully",
            users
        })

    }
    catch(error){
        res.status(500).send({
            message:"internal server error"
        })
    }
}
export default {
    getAllUser
}