module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define("Topic", {
    subjectList: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  Topic.associate = function(models) {
    // Associating Topic with Posts
    // When an Topic is deleted, also delete any associated Posts
    Topic.hasMany(models.Subject, {
      onDelete: "cascade"
    });
  };
  return Topic;
};
