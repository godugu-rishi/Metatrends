import React, { useEffect, useState } from 'react';
import './Component.css'
import Divider from '@material-ui/core/Divider';
import mulan from './mulan.jpeg'


function MovieBlock(data) {
    useEffect(()=>{
        console.log(data.data)
    }, [])
    return (
        <div className="Block">
            <img src={data.data.image} alt="Mulan Poster" className="posterPhoto" align="left"/>

            <span className="mediaType movie">Movie</span>
            <span className="trendingNum">#1 Trending</span>

            <span className="blockTitle">{data.data.original_title}</span>
            <span className="description">{data.data.overview}</span>

            <Divider variant="middle" style={{marginBottom: '15px'}} />
        </div>
    )
}

export default MovieBlock