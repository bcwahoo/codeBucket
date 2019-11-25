module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    cardName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    defintion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    example: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  Card.associate = function(models) {
    // We're saying that a Card should belong to a "Subject"
    // A Card can't be created without a Subject due to the foreign key constraint
    Card.belongsTo(models.Subject, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Card;
};
