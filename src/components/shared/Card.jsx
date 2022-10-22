import React from 'react'
import PropTypes from 'prop-types'


function Card({children, reverse}) {
  // return (
  //   <div className={`card ${reverse && 'reverse'}`}>
  //     {children}
  //   </div>
  // )

  return (
    <div className="card"
     style={{
      backgoundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
      Color: reverse ? '#fff' : '#000'
    }}>
      {children}
    </div>
  )
}

Card.defaultProps = {
  reveres: false
}

Card.PropTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
}

export default Card
