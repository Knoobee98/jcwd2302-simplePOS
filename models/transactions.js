
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    products_name: DataTypes.STRING,
    products_price: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
  })

  // transactions.associate = function(models){
  //   transactions.belongsTo(models.cart, {
  //     foreignKey: 'cart_id',
  //   })
  // }
  return transactions;
};