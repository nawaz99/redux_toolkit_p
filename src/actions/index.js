const INCREMENT = "increment";
const DECREMENT = "decrement";

function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount,
  };
}

function decrement(amount) {
  return {
    type: DECREMENT,
    payload: amount,
  };
}

export { increment, decrement };
