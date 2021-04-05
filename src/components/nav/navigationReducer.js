import { MOBILE_NAVIGATION_CLOSE, MOBILE_NAVIGATION_OPEN } from "./types";

const initialState = {
  show: false,
};

export const navigationReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case MOBILE_NAVIGATION_OPEN:
      return { show: true };
    case MOBILE_NAVIGATION_CLOSE:
      return { show: false };
    default:
      return state;
  }
};
