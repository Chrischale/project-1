import { ersClient } from "."


export const ersLogin = async (username:String, password:String) => {
    let credentials = {
        username,
        password
    }

    try{
        let response =  await ersClient.post('/login', credentials)

    }catch (err) {
        console.log(err)
    }

}