import { 
  GET_DATA, 
  GET_DATA_SUCCESS, 
  GET_DATA_FAILED, 
  GET_DETAIL,
  GET_DETAIL_SUCCESS,
  GET_NEXT,
  GET_NEXT_SUCCESS
} from "./constants";

export const getData = (type, query = null)=>({
  type: GET_DATA,
  payload: {type, query}
})
export const getDataSuccess = (data)=>({
  type: GET_DATA_SUCCESS,
  payload: data
})
export const getDataFailed = (error)=>({
  type: GET_DATA_FAILED,
  payload: error
})

export const getDetail = ({type, id})=>({
  type: GET_DETAIL,
  payload: {type, id}
})
export const getDetailSuccess = (data)=>({
  type: GET_DETAIL_SUCCESS,
  payload: data
})

export const getNext = (url)=>({
  type: GET_NEXT,
  payload: {url}
})
export const getNextSuccess = (data)=>({
  type: GET_NEXT_SUCCESS,
  payload: data
})