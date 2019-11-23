module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define("Topic", {
    subjectList: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Topic;
};
