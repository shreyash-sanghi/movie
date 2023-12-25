import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Popular from './Popular';
import Upcomming from './Upcomming';
import TopRated from './TopRated';

const Router =()=>{
    return(
        <>
      <Routes>
            <Route exact path='/popular' Component={Popular} />
            <Route exact path='/toprated' Component={TopRated} />
            <Route exact path='/upcomming' Component={Upcomming} />
      </Routes>
        </>
    )
}

export default Router;