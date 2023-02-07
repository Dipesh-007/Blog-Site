import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img,post}) {

  const pf='http://localhost:5000/images/'
  // console.log(post)
  return (
    <div className="post">
     { post.photo && (
      <img
        className="postImg"
        src={pf+post.photo}
        alt=""
      />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.category.map((c)=>{

          <span className="postCat">
            <Link className="link" to={`/posts?cat=${c.category}`}>
              {c.category}
            </Link>
          </span>
          })}
          {/* <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span> */}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toString().slice(0,16)}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}
