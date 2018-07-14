export default () => Promise.resolve({
  ref: jest.fn().mockImplementation(key => ({
    push: jest.fn.mockImplementation(() => ({
      description: 'mouse',
      amount: 3400,
      note: 'bad',
      createdAt: 1000,
    })),
  })),
});
