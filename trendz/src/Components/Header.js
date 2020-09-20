import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import '../index.css';
import { Hidden } from '@material-ui/core';
import './Header.css';


const useStyles = makeStyles((theme) => ({
}));


function getDateString(){
    let d = new Date()
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d)
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
    return `${mo} ${da}, ${ye}`
}



function barExpand(isActive, time){
    // console.log("here")
    
    let bar = document.getElementsByClassName("bar")[0];
    let lastUpdate = document.getElementById("lastUpdateString");
    console.log("last update", lastUpdate);
    if(isActive){
        //expand
        bar.style.height = "300px";
        // lastUpdate.textContent = "Last updated at 2:51pm";
        // console.log(data.time);
        let today = new Date();

        let update = Math.abs( today - time) / (36e5/60);
        lastUpdate.textContent = "Last updated " + Math.round(update) + " minutes ago";
        
    }
    else{
        //close
        bar.style.height = "150px";
        lastUpdate.textContent = "";

    }
}

function Header(time) {
    const classes = useStyles();

    const [toggle, setToggle] = useState(false);
    let newTime = new Date(time.time);
    return (
        <div className="root">
        
            {/* // <div className="tester">
            // </div> */}
             <div id="testing" className="bar" onClick={() => {
                    setToggle(!toggle);
                    barExpand(toggle, newTime);               
                 }}>
            
                <Toolbar>
                    <Grid container spacing={0} >
                        <Grid item xs={12}>
                            <div className="title">
                                <div>
                                
                                trends
        
                                </div>
                                
                                {/* <span style={{"display": "inline"}}>
                                <IconButton edge="start" className={classes.menuButton} aria-label="menu"> */}
                                {/* <MenuIcon style={{'color': 'white'}} /> */}
                                {/* </IconButton>
                                </span> */}
                            </div>
                        
                        </Grid>
                        <Grid item xs={12}>
                            <p className= "date">
                                {getDateString()}
                            </p>
                        </Grid>
                        <Grid item xs={12}>
                            {/* <button className="filterButton">Filter</button> */}
                            <span id="lastUpdateString" className="date">
                            </span>
                        </Grid>
                    </Grid>
                </Toolbar>
             </div>
             

        </div>
    )
}

export default Header
