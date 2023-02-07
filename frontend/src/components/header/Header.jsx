import "./header.css";
import back from'./back2.jpg'

export default function Header() {
  return (
  <div className="contain">
    <div className="header">
      <div className="header2">
        <div  className="headerTitleLg "><h1 className="blog ">BLOG</h1></div>
        </div>
      {/* <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
      </div> */}
      <img
        className="headerImg"
        src={back}
        alt=""
      />
    </div>
    </div>
  
  );
}
