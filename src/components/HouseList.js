import React from 'react'
import PropTypes from 'prop-types'



const HouseList = ({ houses, cardRemove, cardPush }) => (
  <ul>
    {houses.map((house, i) => (
      <li key={i}> 
       <p>House NR: {house.id}</p>
       <p>Title: {house.title}</p>
       <p>Address: {house.address}</p>
       <p>Price: {house.price}</p>
       <button onClick={() => {
	 cardRemove(house.id)} 
       }>X</button>
       <button onClick={() => {
	 cardPush(0, house)} 
       }>1</button>
       <button onClick={() => {
	 cardPush(1, house)} 
       }>2</button>
       <button onClick={() => {
	 cardPush(2, house)} 
       }>3</button>

      <br/>
      </li>
    ))}
  </ul>
)




export default HouseList
