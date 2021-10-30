/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Blog from '/src/images/blog.png'

const Bio = () => {
  return (
    <div className="bio" style={
      {
        display: "grid",
        gridTemplateColumns: "70% 10%", 
        gridTemplateRows: "15rem",
        gridColumnGap: "1rem",
      }
    }>
      <h1> 
      Learn about Computer Science along with me! 
      </h1>
      <img
          src={Blog} 
          alt="Blog cartoon"
          style ={
            {
              height:"15rem",
            }
          }
      />
    </div>
  )
}

export default Bio
