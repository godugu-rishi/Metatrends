import React, { useEffect, useState } from 'react';
import Divider from '@material-ui/core/Divider';
import './Component.css'

function fixImage(imageLink)
{
   let extension = imageLink.split('.').pop();
   if(imageLink.indexOf('normal')!=-1)
   {
    imageLink = imageLink.substring(0, imageLink.indexOf("normal"))+"400x400."
    imageLink += extension
    return imageLink
   }
   return imageLink
   
}

function Tweet( data ) {
    useEffect(()=>{
        console.log(data)
    }, [])
    return (
        <div className="Block" >
        <a href={data.data.link} target='_blank'>

            <img src={fixImage(data.data.profile_image)} alt="Twitter" align="left" className="circlePhoto"/> 

            <span className="mediaType twitterPost">Tweet</span>
            <span className="trendingNum">#{data.data.position+1} Trending</span>
            
            <span className="blockTitle">{data.data.user_name}  <span className="Handle">@{data.data.screen_name} · {data.data.created_at.substring(0,10)}{/*Date(data.data.created_at).getFullYear() + '-' + (data.data.created_at.getMonth() + 1) + '-' + data.data.created_at.getDate()*/}</span></span>
            
            
            <span className="description">{data.data.text} <a className="hashtag" href="https://twitter.com/hashtag/tellmeaboutyou?src=hash" target='_blank'>#Hashtag</a></span>
            <Divider variant="middle" style={{marginBottom: '15px', "width": '90%', 'margin': '0 auto'}} />
         </a>
        </div>
    )
}

export default Tweet
