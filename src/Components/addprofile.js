import React from "react";
import whatsapp from '../Images/whatsapp.png';
import gmail from '../Images/gmail.png';
import insta from '../Images/insta.png';
import youtube from '../Images/youtube.png';

function AddProfile({setPopped,profileAdded,profileIns}){
      return(
        profileAdded?
        (
          <div className="profilecont">
          <div className="name"><h2>{profileIns[0]}</h2></div>
          <div className="profiledata">
            <div><img src={whatsapp}></img><p>{profileIns[2]}</p></div>
            <div><img src={insta}></img><p>{profileIns[3]}</p></div>
            <div><img src={gmail}></img><p>{profileIns[1]}</p></div>
            <div><img src={youtube}></img><p>{profileIns[4]}</p></div>
          </div>
        </div>
          
        )
        :
        (

          <div className='profilecont'>
          <div className="addIcon" onClick={()=>setPopped(true)}>
          <span class="material-icons">add</span>
          </div>
          <p>Add Profile</p>
          </div>
        )
        


      )
}

export default AddProfile;