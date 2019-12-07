import React from 'react';

function Footer({ metaData }) {
  return(
   <footer>
     {metaData.title },
     { new Date().getFullYear()}. Brought by {metaData.author}
   </footer>
  )
}

export default Footer;
