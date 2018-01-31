import axios from 'axios';

const root_url = `http://farmbazaar.co.in:8080/service/get/getShareDetail/`;
export const FETCH_DATA="fetchdata";

export function fetchData(id)
{
  let request = axios.get(`${root_url}${id}`);

  request.catch((e)=> {
    let error=e.message;
    console.log(error);
  })
  return (
    {
      type:FETCH_DATA,
      payload:request
    }
  )
}
