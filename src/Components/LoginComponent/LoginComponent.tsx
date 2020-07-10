import React, { FunctionComponent, useState, SyntheticEvent } from 'react'
import { TextField, makeStyles, createStyles, Theme, Button } from '@material-ui/core'




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



export const LoginComponent: FunctionComponent <any> = (props) => {

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

    const loginSubmit = (e:SyntheticEvent) => {
        e.preventDefault()
        
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Username" value ={username} onChange = {updateUsername}/>
                <TextField id="standard-basic" label="Password" type = 'password' value = {password} onChange = {updatePassword}/>
                <Button type = 'submit' variant = 'contained' color = 'primary'> Login </Button>
            </form>
        </div>
    )

}