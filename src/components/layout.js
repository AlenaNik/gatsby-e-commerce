import React from 'react';
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from 'gatsby'

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title,
                description,
                author,
                company
            }
        }
    }
    `)
  return(
  <>
  <div>
    <Header siteTitle={data.site.siteMetadata.title}/>
    <main>
      {children}
    </main>
    <Footer metaData={data.site.siteMetadata}/>
  </div>
  </>)
}

export default Layout;
