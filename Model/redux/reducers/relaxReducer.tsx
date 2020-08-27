import { UPDATE_RELAX } from "../actions";


const relax = (state = { credit: 0 }, action) => {
  switch (action.type) {
    case UPDATE_RELAX:      
      return {...state, credit:(state.credit + action.payload.credit)};

    default:
      return state;
  }
}

export default relax
