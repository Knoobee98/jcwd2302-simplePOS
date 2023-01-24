
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    total_price: DataTypes.INTEGER,
  })

  transactions.associate = function(models){
    transactions.belongsTo(models.cart, {
      foreignKey: 'cart_id',
    })
  }
  return transactions;
};