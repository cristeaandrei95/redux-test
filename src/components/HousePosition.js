import React from 'react'
import PropTypes from 'prop-types'

export default class HousePosition extends React.Component {
      handleOnClick() {
	      let housePosition = this.props.housePosition;
	      console.log(housePosition);
	    }
      render() {
	        return (
	          <div>
	              <button onClick={this.handleOnClick.bind(this)}>1</button>
	              <button onClick={this.handleOnClick.bind(this)}>2</button>
	              <button onClick={this.handleOnClick.bind(this)}>3</button>
	            </div>
	          )
	    }
}
