module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'People',
    [
      {
        name: 'John Doe',
        isBetaMember: false,
      },
    ],
    {},
  ),

  down: () => {},
};
