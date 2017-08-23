import React from 'react'
import PropTypes from 'prop-types'

export default class AddHouse extends React.Component {
    handleSubmit(e) {
          e.preventDefault();
          let refs = this.refs;
          let id = refs.id.value;
          let title = refs.title.value;
          let address = refs.address.value;
          let price = refs.price.value;
          this.props.addHouse(id, title, address, price);
          refs.addHouse.reset();
        }
    render() {
          return (
	          <div>
	            <form ref="addHouse" onSubmit={this.handleSubmit.bind(this)}>
	              <label for="id">ID</label>
	              <input id="id" type="text" ref="id" />
	              <label for="title">Title</label>
	              <input id="title" type="text" ref="title" />
	              <label for="address">Address</label>
	              <input id="address" type="text" ref="address" />
	              <label for="price">Price</label>
	              <input id="price" type="text" ref="price" />
	              
	              <button type="submit" className="button">Add house</button>
	            </form>  
	          </div>
	        )
        }
}
