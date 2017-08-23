const houseArray = [
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
          id: 3,
          title: 'House no.3',
          address: 'Iasi',
          price: 40000
        },
      {
	    id: 4,
	    title: 'House no.4',
	    address: 'Timisoara',
	    price: 64000
	  },
      {
	    id: 5,
	    title: 'House no.5',
	    address: 'Brasov',
	    price: 24000
	  }
];

const houses = (state = houseArray, action) => {
    switch (action.type) {
            case 'CARD_REMOVE':
	      return state.filter(house => house.id !== action.id)
	    default:
	      return state;
	  }
};

export default houses 
