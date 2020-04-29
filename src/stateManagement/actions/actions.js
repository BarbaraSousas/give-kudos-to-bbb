export const subtractToILearned = (store, amount) => {
  const { state } = store;

  if (state.iLearned > 0) {
    const iLearned = store.state.iLearned - amount;
    store.setState({ iLearned });
  }
};

export const subtractToImGrateful = (store, amount) => {
  const { state } = store;

  if (state.imGrateful > 0) {
    const imGrateful = store.state.imGrateful - amount;
    store.setState({ imGrateful });
  }
};

export const subtractToWasAwesome = (store, amount) => {
  const { state } = store;

  if (state.wasAwesome > 0) {
    const wasAwesome = store.state.wasAwesome - amount;
    store.setState({ wasAwesome });
  }
};

export const updateBrothersKudos = (store, receivedValue) => {
  console.log('updatebrother',store, receivedValue)
}