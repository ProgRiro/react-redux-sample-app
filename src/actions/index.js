export const COUNTUP = "COUNTUP";
export const COUNTDOWN = "COUNTDOWN";

export const countup = () => {
  return {
    type: COUNTUP
  };
};

export const countdown = () => {
  return {
    type: COUNTDOWN
  };
};
