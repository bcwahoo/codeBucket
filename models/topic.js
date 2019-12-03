module.exports = function(sequelize, DataTypes) {
  const Topic = sequelize.define("Topic", {
    topicName: {
      type: DataTypes.STRING,
      allowNull: false
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
