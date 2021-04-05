import { MOBILE_NAVIGATION_CLOSE, MOBILE_NAVIGATION_OPEN } from "./types";

export const openMobileNavigation = () => async (dispatch) => {
  console.log("hello");
  dispatch({ type: MOBILE_NAVIGATION_OPEN });
};
export const closeMobileNavigation = () => async (dispatch) => {
  console.log("nope");
  dispatch({ type: MOBILE_NAVIGATION_CLOSE });
};
