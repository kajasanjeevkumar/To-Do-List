import React from 'react'
import PropTypes from 'prop-types'
export default function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">{props.title}</a>
  
    
  </div>
</nav>
    </div>
  )
}
//applies a default value if not passed
Header.defaultProps={
  title:"Yout Title Here",
  searchBar:true
}
//
Header.propTypes={
  title:PropTypes.string,
  searchBar:PropTypes.bool.isRequired
}