import React from "react"
import { Link } from "gatsby"

const HeaderImage = (props) => {
  return (
    <div class="header-image">
      <h1>{props.header}</h1>
    </div>
  )
}

export default HeaderImage
