module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define("Card", {
    cardName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cardFront: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cardBack: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });
  Card.associate = function(models) {
    // We're saying that a Card should belong to an Author
    // A Card can't be created without an Author due to the foreign key constraint
    Card.belongsTo(models.Subject, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Card;
};
