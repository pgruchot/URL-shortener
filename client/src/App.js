import React, { Fragment } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from '@material-ui/icons'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import Home from './Components/Home'
import Done from './Components/Done'
import RedirectComponent from './Components/RedirectComponent'

export default function App() {
    return (
        <Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Link />
                    <Typography variant="h5" style={{margin: '1rem'}}>
                    URL Shortener
                    </Typography>
                </Toolbar>
            </AppBar>
            <Route exact path='/' component={Home} />
            <Route exact path='/done' component={Done} />
            <Route exact path='/redir/:id' component={RedirectComponent} />

        </Fragment>
    )
}
