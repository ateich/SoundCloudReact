import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
    default:
      return actionTypes.TRACKS_SET
  }
}

function setTracks(state, action) {
  const { tracks } = action;
  return [ ...state, ...tracks ];
}
