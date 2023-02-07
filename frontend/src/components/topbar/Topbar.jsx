import { Link } from "react-router-dom";
import "./topbar.css";
// import { useHistory} from "react-router-dom";


export default function Topbar() {
  const user = true;
  // const history = useHistory();

 const handleclick=(e)=>{
  e.preventDefault()
  
  localStorage.removeItem('success')
  localStorage.removeItem('User')
  window.location.replace("/login")


 }

 const User=JSON.parse(localStorage.getItem('User'))

 
 



  return (
    <div className="contain">
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (<Link className="topListItem link" to='/login' onClick={handleclick}>LOGOUT</Link>)}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={User && User.profilepic}
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    </div>
  );
}
