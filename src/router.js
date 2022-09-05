import React from 'react';
// import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PageA from './pages/page-a/index';
import PageB from './pages/page-b/index';


export default class router  extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Router>
                    <Routes>
                        <Route index path="/" component={ PageB } />
                        <Route  path="/page-a" component={ PageA } />
                        <Route  path="/page-b" component={ PageB } />
                </Routes>
                </Router>
            </BrowserRouter>
            
            
        );
    }
}
