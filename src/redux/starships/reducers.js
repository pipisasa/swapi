import { 
  GET_DATA, 
  GET_DATA_SUCCESS, 
  GET_DATA_FAILED, 
  GET_DETAIL_SUCCESS,
  GET_DETAIL,
  GET_NEXT,
  GET_NEXT_SUCCESS
} from './constants';

const INIT_STATE = {
  previous: null,
  next: null,
  data: [],
  currentItem: null,
  loading: false,
  error: null,
}

const Starships = (state = INIT_STATE, action)=>{
  switch(action.type){
    case GET_DATA: return {...state, loading: true, error: null};
    case GET_DATA_SUCCESS: return {...state, data: action.payload.results, next:action.payload.next, loading: false, error: null};
    case GET_DATA_FAILED: return {...state, loading: false, error: action.payload};

    case GET_DETAIL: return {...state, loading: true, error: null};
    case GET_DETAIL_SUCCESS: return {...state, currentItem: action.payload, loading: false, error: null};

    case GET_NEXT: return {...state, loading: true, error: null};
    case GET_NEXT_SUCCESS: return {...state, loading: false, error: null, data: [...state.data, ...action.payload.results], next: action.payload.next}

    default: return state;
  }
}

export default Starships;