import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Grid, Paper, TextField, Button } from '@material-ui/core'
import axios from 'axios'

export default function Home() {
    const [textInput, setTextInput] = useState('')
    let history = useHistory()

    const handleChange = (e) => {
        setTextInput(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/convert/', {
            link: textInput
        }).then(res => {
            history.push({
                pathname: '/done',
                encodedUrl: res.data.encodedUrl
            })
        })
    }

    return (
        <Grid container justify="center">
            <Paper elevation={3} style={{margin: '2rem', minWidth: '80%', padding: '1rem'}} >
            <form noValidate autoComplete="off" onSubmit={e => handleSubmit(e)} justify="center">
                <Grid container justify="center">
                    <TextField onChange={e => handleChange(e)} id="url-input" label="Post your URL" variant="outlined" style={{width: '100%'}}/>
                    <Button type="submit" variant="contained" style={{height: 'auto', margin: '1rem 0 1rem 0', }}>Go!</Button>
                </Grid>
            </form>
            </Paper>
        </Grid>
    )
}
