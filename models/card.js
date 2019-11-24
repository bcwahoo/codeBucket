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
  return Card;
};
