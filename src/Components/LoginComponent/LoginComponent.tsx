import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import { TextField, makeStyles, createStyles, Theme, Button } from '@material-ui/core'
import { ersLogin } from '../../Remote/ers-0/ers-login';
import { Route, Router, Redirect, RouteComponentProps } from 'react-router';
import { ProfileComponent } from '../ProfileComponent/ProfileComponent';
import { User } from '../../Models/Users';
import { useSelector, useDispatch } from 'react-redux';
import { ILoginState, IState } from '../../Reducers';
import { updateLoginUser } from '../../ActionMappers/login-action-mapper';




const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);

interface ILoginProps extends RouteComponentProps{
  changeCurrUser:(newUser:any) => void

}

export const LoginComponent: FunctionComponent <ILoginProps> = (props) => {

    const classes = useStyles();

    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')
    
 
    const updateUsername = (event : any) => {
        event.preventDefault()
        changeUsername(event.currentTarget.value)
    }

    const updatePassword = (event : any) => {
        event.preventDefault()
        changePassword(event.currentTarget.value)
    }

    const dispatch = useDispatch()

    const loginSubmit = async (e:SyntheticEvent) => {
        e.preventDefault()
        let res = await ersLogin(username, password)
        props.changeCurrUser(res)
        changePassword('')
        props.history.push(`/profile/${res.userId}`)

        dispatch(updateLoginUser)
        
        
    }

    const login = useSelector((state:IState) => {
      return state.loginState.user
    })

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="username-basic" label="Username" value ={username} onChange = {updateUsername}/>
                <br/>
                <TextField id="password-basic" label="Password" type = 'password' value = {password} onChange = {updatePassword}/>
                <br/>
                <Button type = 'submit' variant = 'contained' color = 'primary' onClick = {loginSubmit}> Login </Button>
            </form>
        </div>
    )

}