import { createStore }  from 'redux'; 

const initialState = {
    fixtures: [],
    round: 10,
    user: "teste",
}

function rounds(state = initialState, action){
    switch (action.type) {
        case 'ADD':
            return {...state, fixtures: [...state.fixtures, action.newItem]}
        case 'USER':
            return{...state, user: action.newUser}
        default:
          return state
      }
}

const store = createStore(rounds)

export default store;