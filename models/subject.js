module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define("Subject", {
    subjectList: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Subject;
};
