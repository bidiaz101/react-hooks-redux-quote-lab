// Action Creators
// TODO: Create action creators as defined in tests

export const addQuote = (quote) => {
  return {
    type: 'quotes/add',
    payload: quote
  }
}

export const removeQuote = (id) => {
  return {
    type: "quotes/remove",
    payload: id
  }
}

export const upvoteQuote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id
  }
}

export const downvoteQuote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id
  }
}

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch(action.type){
    case 'quotes/add':
      return [...state, action.payload]
    case 'quotes/remove':
      return state.filter(quote => quote.id !== action.payload)
    case 'quotes/upvote':
      const toBeUpvoted = state.find(quote => quote.id === action.payload)
      const upIndex = state.indexOf(toBeUpvoted)
      const upvoted = { ...toBeUpvoted, votes: toBeUpvoted.votes + 1 }
      const upState = [...state]
      upState.splice(upIndex, 1, upvoted)
      return upState
    case 'quotes/downvote':
      const toBeDownvoted = state.find(quote => quote.id === action.payload)
      const downIndex = state.indexOf(toBeDownvoted)
      if(toBeDownvoted.votes > 0){
        const downvoted = { ...toBeDownvoted, votes: toBeDownvoted.votes - 1 }
        const downState = [...state]
        downState.splice(downIndex, 1, downvoted)
        return downState
      } else {
        return state
      }
    default:
      return state;
  }
}
