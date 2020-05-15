import { pageConstants } from "../constants/pageConstants";

export const redirectTo = (link) => {
  return {
    type: pageConstants.REDIRECT_TO,
    link,
  };
};

export const updateTable = (json) => {
  return {
    type: pageConstants.UPDATE_TABLE,
    json,
  };
};
