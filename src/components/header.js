import React from 'react';
import { Helmet } from "react-helmet/es/Helmet"

function Header({ siteTitle }) {
  return (
  <header>
    <Helmet>
      <title>{siteTitle}</title>
    </Helmet>
    <nav>Navigation</nav>
  </header>
  )}
export default Header;

