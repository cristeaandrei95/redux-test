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
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id) 
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default houses 
