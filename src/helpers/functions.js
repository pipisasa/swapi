export const parseUrl = (url)=>{
  const arr = url.split('/');
  return [arr[arr.length-3],arr[arr.length-2]]
}