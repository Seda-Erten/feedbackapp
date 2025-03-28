import React from 'react'
import PropTypes from 'prop-types'; 

function Card({children,reverse}) {
  return (
    <div className='card'
    style={{
        backgroundColor:reverse? 'black':'white',
        color:reverse?'white':'black',
    }}
    >
        {children}
    </div>
  )
}

Card.defaultProps={
    reverse:false,
}

Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}

export default Card
