import React, { FunctionComponent, useState } from 'react'
import Button from '@material-ui/core/Button'
import { TitleComponent } from '../TitleComponent/TitleComponent'

export const StatefulComponent: FunctionComponent <any> = (props) => {
    const [click, changeClicks] = useState(0);



    return (
        <div>
            <TitleComponent size = 'small' title = {`click button ${click} times`}/>
            <Button variant="contained" onClick = {() => (changeClicks(click + 1))}>click me</Button>
        </div>
    )
    
}