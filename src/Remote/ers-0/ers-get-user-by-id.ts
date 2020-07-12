import { ersClient } from "."

export const ersGetUserById = async (userId: number) => {
    try{
        let response = await ersClient.get(`/users/${userId}`)
        return response.data
    }catch (err){
        console.log(err)
    }
}