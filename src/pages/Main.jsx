import React from 'react'
import {About, Contact, Events, Home, Products, Error} from '../components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Main = () => <>
        <BrowserRouter>
            <div className= "main">
                <Switch>
                    <Route exect path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Redirect from={"/history"} to={"/about/history"}/>
                    <Redirect from={"/service"} to={"/about/service"}/>
                    <Redirect from={"/location"} to={"/about/location"}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/events" component={Events}/>
                    <Route path="/products" component={Products}/>
                    <Route component={Error}/>
                </Switch>
            </div>
        </BrowserRouter>
    </>

export default Main