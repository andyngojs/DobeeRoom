const initState = {
  newUser: {},
  userCurr: {},
  isLogged: false
}

export default function userSlice(state = initState, action) {
  switch (action.type) {
    case 'authSuccess': 
    return {
      ...state,
      newUser: { ...action.payload }
    }
    case 'authFailure':
      return state
    case 'getUserIDSuccess': 
      return {
        ...state,
        userCurr: action.payload 
      }
    case 'getUserIDFailure':
      return state
    case 'LOGIN': 
      return {
        ...state,
        isLogged: action.payload
      }
    default: 
    return state
  }
}