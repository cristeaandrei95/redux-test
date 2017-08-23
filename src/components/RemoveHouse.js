import React from 'react'
import PropTypes from 'prop-types'

export default class RemoveHouse extends React.Component {
      handleOnClick() {
	      let index = this.props.index;
	      this.props.removeHouse(index);
	    }
      render() {
	        return (
		              <button onClick={this.handleOnClick.bind(this)}>X</button>
		          )
	    }
}
