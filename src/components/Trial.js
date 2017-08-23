import React from 'react'
import PropTypes from 'prop-types'

export default class Trial extends React.Component {
    render() {
          return (            
	          <div>
	            <p>ID: {this.props.trial.id}</p>
	          </div>
	          )
         }
}
