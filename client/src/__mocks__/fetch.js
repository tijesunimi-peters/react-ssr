module.exports = jest.fn().mockImplementation(() => {
  const response = new Promise((resolve, reject) => {
    resolve({
      json: jest.fn().mockImplementation(() => {
        return new Promise((resolve, reject) => {
          resolve([
            {
              id: 1,
              name: 'First Dummy Recipe',
            },
          ]);
        });
      }),
    });
  });

  return response;
});
