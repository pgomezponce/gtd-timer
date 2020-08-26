import { UPDATE_SPRINT } from "../actions";


const sprint = (state = { credit: 0 }, action) => {
  switch (action.type) {
    case UPDATE_SPRINT:      
      return {...state, credit:(state.credit + action.payload.credit)};

    default:
      return state;
  }
}

export default sprint
