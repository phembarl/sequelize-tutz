module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    done: DataTypes.BOOLEAN,
    description: DataTypes.TEXT
  }, {});
  Task.associate = (models) => {
    // associations can be defined here
  };
  return Task;
};
