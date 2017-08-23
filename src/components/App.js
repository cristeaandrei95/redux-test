import React from 'react'

import HouseContainerList from '../containers/HouseContainerList' 
import TrialContainerList from '../containers/TrialContainerList' 

const App = () => (
  <div style={{display:'flex'}}>
    <div className="containerLeft" style={{flex: 3}}>
      <TrialContainerList /> 
    </div>
    <div className="containerRight" style={{flex: 1}}>
      <HouseContainerList />
    </div>
  </div> 
) 

export default App
