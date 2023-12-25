import React, { useEffect, useState } from "react";
import './card.css'

const Card = () => {
 const [initial,final] =useState([]);
   const movidetail = document.getElementById('mdetail');
    const displaytext =()=>{
    let dis = movidetail.style.display;
    if(dis==null || dis=='none'){
        movidetail.style.display ='flex';
    }
    else{
        movidetail.style.display ='none';
    }
    console.log(dis)
    }
   
     const callapi = async ()=>{
        try {
                  let data =await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US");
                    data = await data.json();
                      final(data.results)
                } catch (error) {
                    console.log(error)
                }
     }

     useEffect(()=>{
        callapi()
     },[])

    return (
        <>
        <div  className="container" >
        {initial.map((info)=>{
            console.log(info);
            return(
            <div onClick={displaytext} className="card" >
                        <div className="rating">{info.vote_average}</div>
                    <div  ><img className="mimage"  src ={`https://image.tmdb.org/t/p/original${info && info.backdrop_path}`}  /></div>
                   <div  className="movname">
                    <div >{info.original_title}</div> 
                   </div> 
                    <div  id="mdetail" className="moviedetail" >{info.overview}</div>
            </div>
            )
            })}            
            </div>

        </>
    )
}
export default Card;