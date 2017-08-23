import React from 'react'
import PropTypes from 'prop-types'

export default class House extends React.Component {
    render() {
          return (            
	          <div>
	            <p>ID: {this.props.house.id}</p>
	            <p>Title: {this.props.house.title}</p>
	            <p>Address: {this.props.house.address}</p>
	            <p>Price: {this.props.house.price}</p>
	          </div>
	          )
         }
}
