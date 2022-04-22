const initState = {}

export default function userSlice(state = initState, action) {
  switch (action.type) {
    case 'authSuccess': 
    return {
      ...state,
      ...action.payload
    }
    case 'authFailure':
      return {
        ...state,
        ...action.payload
      }
    default: 
    return state
  }
}