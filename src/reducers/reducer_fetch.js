import {FETCH_DATA} from '../actions/index';

export default function(state=null,action)
{
   switch(action.type)
   {
     case FETCH_DATA:
     console.log('Data from server',action.payload.data);
     return action.payload.data;
     default:
     return state;
   }
}
