import { ersClient } from "."

export const ersGetAllUsers = async () => {
    try{
        let response = await ersClient.get('/users')
        return response.data

    }catch (err){
        console.log(err)
        console.log("get all users error")
    }
}