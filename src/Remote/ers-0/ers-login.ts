import { ersClient } from "."
import { User } from "../../Models/Users"


export const ersLogin = async (username:String, password:String) => {
    let credentials = {
        username,
        password
    }

    try{
        let response =  await ersClient.post('/login', credentials)
        console.log(response)
        return response.data 

    }catch (err) {
        console.log(err)
    }

}