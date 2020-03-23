import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { useLocation } from "react-router-dom";

export default function Done(props) {
    const location = useLocation();
    return (
        <Grid container justify="center">
            <Paper elevation={3} style={{margin: '2rem', minWidth: '80%', padding: '1rem'}} >
                <Typography variant="h5" style={{margin: '1rem'}} style={{textAlign: 'center'}}>
                    Your link has been generated! Now go to:
                </Typography>
                <Typography variant="h4" style={{margin: '1rem'}} style={{textAlign: 'center'}}>
                    http://localhost:5000/redir/{location.encodedUrl}
                </Typography>
            </Paper>
        </Grid>
    )
}
