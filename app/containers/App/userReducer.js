function evalState(actions,action,state){
    if(Object.keys(actions).indexOf(action.type)>-1){
      return actions[action.type]();
    }
    else {
      return state;
    }
  }
  
export default function userReducer(state=initialState,action){
    const actions={
      'FETCHING_USER':()=>{
        return {
          ...state,
          isFetching:true,
        }
      },
      'FETCHING_USER_SUCCESS':()=>{
        return {
          ...state,
          isFetching:false,
          user:action.data
        }
      },
      'FETCHING_USER_ERROR':()=>{
        return {
          ...state,
          isFetching:false,
          error:true
        }
      }
    }
  
    return evalState(actions,action,state);
  }