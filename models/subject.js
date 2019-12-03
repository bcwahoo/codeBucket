module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define("Subject", {
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Subject.associate = function(models) {
    // Associating Subject with Posts
    // When an Subject is deleted, also delete any associated Posts
    Subject.hasMany(models.Card, {
      onDelete: "cascade"
    });
  };
  Subject.associate = function(models) {
    // We're saying that a Subject should belong to an Topic
    // A Subject can't be created without an Topic due to the foreign key constraint
    Subject.belongsTo(models.Topic, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Subject;
};
