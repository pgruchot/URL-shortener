import React,   { useState, useEffect } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import axios from 'axios'


export default function RedirectComponent( props ) {
    const [ errorMSG, setErrorMSG] = useState(null)

    useEffect(() => {
        axios.get(`/convert/${props.match.params.id}`)
            .then((res) => {
                if(!res.data.err)
                    window.location.replace(`//${res.data.url}`)
                else
                    setErrorMSG(res.data.err)
            })
      });
    return errorMSG ? 
        <Grid container justify="center">
            <Paper elevation={3} style={{margin: '2rem', minWidth: '80%', padding: '1rem'}} >
                <Typography variant="h5" style={{margin: '1rem'}} style={{textAlign: 'center'}}>
                    {errorMSG}
                </Typography>
            </Paper>
        </Grid> :
        <Grid container justify="center">
            <Paper elevation={3} style={{margin: '2rem', minWidth: '80%', padding: '1rem'}} >
                <Typography variant="h5" style={{margin: '1rem'}} style={{textAlign: 'center'}}>
                    Working...
                </Typography>
            </Paper>
        </Grid>
}
