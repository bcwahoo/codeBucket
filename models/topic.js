module.exports = function(sequelize, DataTypes) {
  const Topic = sequelize.define("Topic", {
    topicName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Topic;
};
