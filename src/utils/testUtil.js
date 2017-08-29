const storeFake = state => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: jest.fn(),
    getState: () => {
      return { ...state };
    },
  };
};

export default storeFake;
