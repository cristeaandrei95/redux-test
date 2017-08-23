const INITIAL_STATE =  [
    {
          id: 1,
          title: 'House no.1',
          address: 'Constanta',
          price: 30000
        },
    {
          id: 2,
          title: 'House no.2',
          address: 'Bucuresti',
          price: 50000
        },
      {
	    id: 5,
	    title: 'House no.5',
	    address: 'Brasov',
	    price: 24000
	  }
];
const trialList = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       case 'CARD_PUSH':
	return  [
	          ...state.slice(0, action.index)
		  .concat(action.house),
	          ...state.slice(action.index+1)
	      ]; 

	  default:
	      return state;
    }
}

export default trialList
