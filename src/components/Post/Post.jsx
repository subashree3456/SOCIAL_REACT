import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({post}) {

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);


  const likeHandler = ()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  // const user = Users.filter(u=>u.id===1)
  // console.log(user[0].username);
  // console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src={Users.filter((u)=>u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
            <span className="postUserName">{Users.filter((u)=>u.id===post?.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
<MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc} </span>
       <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
    <img src="assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
    <img src="assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
    <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
<span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}



// old codings

// import "./post.css";
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// export default function Post({post}) {
//   console.log(post);
//   return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
//             <span className="postUserName">Safak Kocaoglu</span>
//             <span className="postDate">5 mins ago</span>
//           </div>
//           <div className="postTopRight">
// <MoreVertIcon />
//           </div>
//         </div>
//         <div className="postCenter">
//           <span className="postText"> Hey its my first post : </span>
//        <img src="assets/post/1.jpeg" alt="" className="postImg" />
//         </div>
//         <div className="postBottom">
//           <div className="postBottomLeft">
//     <img src="assets/like.png" alt="" className="likeIcon" />
//     <img src="assets/heart.png" alt="" className="likeIcon" />
//     <span className="postLikeCounter">32 people like it</span>
//           </div>
//           <div className="postBottomRight">
// <span className="postCommentText">9 comments</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// old codings
{/* <img src="assets/like.png" alt="" className="likeIcon" />
<img src="assets/heart.png" alt="" className="likeIcon" />
<span className="postLikeCounter">{post.like}</span>
      </div> */}