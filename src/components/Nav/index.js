import React from "react";
import "./style.css";

function Nav(props) {
  return  <nav>
<div className="navbar ">
<a href="/clicky-game/">{props.Title}</a>
<div id="rw">{props.rightWrong}</div>
<div>
  Score: {props.score} <span className="pipe">|</span> High Score: {props.topScore}
</div>
</div> 
</nav>


}

export default Nav;
