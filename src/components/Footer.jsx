import React from "react";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      
     
      <p>no ⓒ{year} issue feel free to copy  <a href = "https://github.com/Siddharth189"><GitHubIcon /></a><a href = "https://linkedin.com"><LinkedInIcon /></a></p>
    </footer>
  );
}

export default Footer;
