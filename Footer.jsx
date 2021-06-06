import React from "react";
import "../../public/styles.css";
function Footer(){
  var currYear=new Date().getFullYear();
  return (<div className="footer">
   <p>
    copyright @ {currYear};
    </p>
    </div>);
}

export default Footer;
