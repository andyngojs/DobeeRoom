const initState = {
  postSaved: []
}

export default function savedPostSlice(state = initState, action) {
  switch (action.type) {
    case 'getSavedListSuccess':
      return {
        ...state,
        postSaved: action.payload
      }
    case 'savePostSuccess':
      return {
        ...state,
        postSaved: [ 
          ...action.payload
        ]
      }
      case 'savePostFailure':
        return state
      case 'deleteSavedPostSuccess':
        return {
          ...state,
          postSaved:  state.postSaved.filter((item) => item._id !== action.payload)
        }
      case 'deleteSavedPostFailure':
        return state
      default:
        return state
  }
}