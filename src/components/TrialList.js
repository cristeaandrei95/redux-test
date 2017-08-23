import React from 'react'
import PropTypes from 'prop-types'

const TrialList = ({ trialList }) => (
   <ul className="trials" style={{display: 'flex', margin: 0}}>
   {
    trialList.map((trial, i) => (
     <li key={i} style={{flex: 1}}>
       <p>House NR: {trial.id}</p>
       <p>Title: {trial.title}</p>
       <p>Address: {trial.address}</p>
       <p>Price: {trial.price}</p>
     </li>) 
    )
   }  
  </ul> 
)

export default TrialList 

