
const initialState = {
  results:[]
};

const reducer = (state = initialState, action) => {
 
  if(action.type === 'STORE_RESULT'){
    return {
      ...state,
      results:state.results.concat({id:new Date(),value:action.result}),
    };
  }
  if(action.type === 'DELETE_RESULT'){
    // const id = 2;
    // const newArray = [...this.state.results]
    // results:newArray.splice(id,1)
    const newArray = state.results.filter(res=>res.id!==action.resultElmId)
    return {
      ...state,
      results:newArray
      
    };
  }

  return state;
};

export default reducer;
