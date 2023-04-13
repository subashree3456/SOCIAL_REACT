import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../online/Online";


export default function Rightbar({profile}) {

const HomeRightBar = () =>{
  return (
    <>
    
    <div className="birthdayContainer">
      <img src="assets/gift.png" alt="" className="birthdayImg" />
      <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
    </div>
  <img src="assets/ad.png" alt="" className="rightbarAd" />
  <h4 className="rightbarTitle">Online Friends</h4>
  <ul className="rightbarFriendList">
   
   {Users.map((u)=>(
    <Online key ={u.id} user={u} />
   ))}     

  </ul>    
    </>
  )
}
  
const ProfileRightBar = () =>{
  return(
    <>
    <h4 className="rightBarTitle">user Information</h4>
    <div className="rightBarInfo">
      <div className="rightBarInfoItem">
        <span className="rightBarInfoKey">City:</span>
        <span className="rightBarInfoValue">New York</span>
      </div>
      <div className="rightBarInfoItem">
        <span className="rightBarInfoKey">From:</span>
        <span className="rightBarInfoValue">Madrid</span>
      </div>
      <div className="rightBarInfoItem">
        <span className="rightBarInfoKey">RelationShip:</span>
        <span className="rightBarInfoValue">Single</span>
      </div>
    </div>
    <h4 className="rightBarTitle">user Friends</h4>
    <div className="rightBarFollowings">
      <div className="rightBarFollowing">
        <img src="assets/person/1.jpeg" alt="" className="rightBarFollowingImg" />
        <span className="rightBarFollowingName">John Carter</span>
      </div>

<div className="rightBarFollowing">
        <img src="assets/person/2.jpeg" alt="" className="rightBarFollowingImg" />
        <span className="rightBarFollowingName">John Carter</span>
      </div>


      <div className="rightBarFollowing">
        <img src="assets/person/3.jpeg" alt="" className="rightBarFollowingImg" />
        <span className="rightBarFollowingName">John Carter</span>
      </div>

      <div className="rightBarFollowing">
        <img src="assets/person/4.jpeg" alt="" className="rightBarFollowingImg" />
        <span className="rightBarFollowingName">John Carter</span>
      </div>

      <div className="rightBarFollowing">
        <img src="assets/person/5.jpeg" alt="" className="rightBarFollowingImg" />
        <span className="rightBarFollowingName">John Carter</span>
      </div>


      <div className="rightBarFollowing">
        <img src="assets/person/6.jpeg" alt="" className="rightBarFollowingImg" />
        <span className="rightBarFollowingName">John Carter</span>
      </div>

    </div>
    </>
  )
}


return (
    <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightBar /> : <HomeRightBar />}
    </div>
    </div>
  )
}



/// old coding

// import "./rightbar.css";

// export default function Rightbar() {
//   return (
//     <div className="rightbar">
//     <div className="rightbarWrapper">
//       <div className="birthdayContainer">
//         <img src="assets/gift.png" alt="" className="birthdayImg" />
//         <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
//       </div>

//     <img src="assets/ad.png" alt="" className="rightbarAd" />
//     <h4 className="rightbarTitle">Online Friends</h4>
//     <ul className="rightbarFriendList">
//       <li className="rightBarFriend">
//         <div className="rightbarProfileImgContainer">
//           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
//           <span className="righrbarOnline"></span>
//         </div>       
// <span className="rightbarUserName">John Carter
// </span>
//       </li>


//       <li className="rightBarFriend">
//         <div className="rightbarProfileImgContainer">
//           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
//           <span className="righrbarOnline"></span>
//         </div>       
// <span className="rightbarUserName">John Carter
// </span>
//       </li>



//       <li className="rightBarFriend">
//         <div className="rightbarProfileImgContainer">
//           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
//           <span className="righrbarOnline"></span>
//         </div>       
// <span className="rightbarUserName">John Carter
// </span>
//       </li>



//       <li className="rightBarFriend">
//         <div className="rightbarProfileImgContainer">
//           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
//           <span className="righrbarOnline"></span>
//         </div>       
// <span className="rightbarUserName">John Carter
// </span>
//       </li>



//       <li className="rightBarFriend">
//         <div className="rightbarProfileImgContainer">
//           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
//           <span className="righrbarOnline"></span>
//         </div>       
// <span className="rightbarUserName">John Carter
// </span>
//       </li>


//       <li className="rightBarFriend">
//         <div className="rightbarProfileImgContainer">
//           <img src="assets/person/3.jpeg" alt="" className="rightbarProfileImg" />
//           <span className="righrbarOnline"></span>
//         </div>       
// <span className="rightbarUserName">John Carter
// </span>
//       </li>







//     </ul>
//     </div>
//     </div>
//   )
// }



///old codings

// return (
//   <div className="rightbar">
//   <div className="rightbarWrapper">
//     <div className="birthdayContainer">
//       <img src="assets/gift.png" alt="" className="birthdayImg" />
//       <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today</span>
//     </div>
//   <img src="assets/ad.png" alt="" className="rightbarAd" />
//   <h4 className="rightbarTitle">Online Friends</h4>
//   <ul className="rightbarFriendList">
   
//    {Users.map((u)=>(
//     <Online key ={u.id} user={u} />
//    ))}     

//   </ul>
//   </div>
//   </div>
// )
// }