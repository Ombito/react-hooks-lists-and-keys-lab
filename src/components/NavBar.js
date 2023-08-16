import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const Getlinks = links.map((i) => (
    <a key={i} href={"#" + i}>{i}</a> 
  )
  
  )
  return <nav>{Getlinks}</nav>
}

export default NavBar;
