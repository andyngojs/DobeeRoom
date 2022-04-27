const initState = {
  newUser: {},
  userCurr: {}
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
    default: 
    return state
  }
}