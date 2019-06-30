module.exports = (sequelize, DataTypes) => {
  const Context = sequelize.define('Context', {
    name: DataTypes.STRING
  }, {});
  Context.associate = (models) => {
    // associations can be defined here
  };
  return Context;
};
