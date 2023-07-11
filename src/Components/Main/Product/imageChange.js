import React, { useEffect, useState } from "react";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const fadeImages=[
   { url: "https://cdn.downtoearth.org.in/library/large/2019-03-05/0.89399200_1551782137_fast1.jpg",
  
},
    {
        url:"https://b.zmtcdn.com/data/pictures/chains/9/6709/9718f691bbbaf3a267cafa2ab2a538fd.jpg"
    },

   
    {
        url:"https://st4.depositphotos.com/1003940/25295/i/600/depositphotos_252955714-stock-photo-various-indian-dishes-on-a.jpg"
    },
    {
        url:"https://secureservercdn.net/45.40.150.54/ihr.09f.myftpupload.com/wp-content/uploads/2018/01/best-south-indian-food-wedding-breakfast.jpg?time=1659995476"
    },
    {
        url:"https://www.tastingtable.com/img/gallery/20-italian-dishes-you-need-to-try-at-least-once/l-intro-1643403830.jpg",
      
    }
  ]
  let count=0;
export default function ImageChange() {
    
  return (
  <>
      <div  style={{width:"auto",height:600,color:"black",marginTop:100}}>
            
      <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container ade-in-image" >
              <img className="img1" width="100%" height="600px"   src={fadeImage.url} />
            </div>
          
          </div>
        ))}
      </Fade>
    </div>
            </div>
  </>
  )
}
