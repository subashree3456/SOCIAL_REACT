import "./online.css";

export default function Online({user}) {
  return (
    <li className="rightBarFriend">
    <div className="rightbarProfileImgContainer">
      <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
      <span className="righrbarOnline"></span>
    </div>       
<span className="rightbarUserName">{user.username}
</span>
  </li>    
  )
}
