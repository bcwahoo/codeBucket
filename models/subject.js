module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define("Subject", {
    subjectList: {
      type: DataTypes.STRING,
      allowNull: true
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
    // We're saying that a Subject should belong to an Author
    // A Subject can't be created without an Author due to the foreign key constraint
    Subject.belongsTo(models.Subject, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Subject;
};
