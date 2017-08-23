let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const cardRemove = id => {
  return {
    type: 'CARD_REMOVE',
    id
  }
}

export const cardPush = (index, house) => {
  return {
    type: 'CARD_PUSH',
    index,
    house
  }
}
