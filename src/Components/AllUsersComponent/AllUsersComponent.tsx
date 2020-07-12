import Reat, { FunctionComponent, useEffect, useState } from 'react'
import { ersGetAllUsers } from '../../Remote/ers-0/ers-get-all-users'
import React from 'react'
import { UserDisplayComponent } from '../UserDisplayComponent/UserDisplayComponent'
import { User } from '../../Models/Users'

export const AllUsersComponent:FunctionComponent<any> = (props) => {
    //get all the user infomation 
    let [allUsers, changeAllUsers] = useState<User[]>([])

    useEffect(() => {
        const getUsers = async ()=>{
            let response = await ersGetAllUsers()
            changeAllUsers(response)
        }
        if(allUsers.length === 0){
            getUsers()   
        }
    })

    let userDisplays = allUsers.map((user) => {
        return <UserDisplayComponent key={'user-key-' + user.userId} user = {user} />

    })

    return(
        //make a grid here instead for neatness sake
        <div>
            {userDisplays}
        </div>
    )
    
}