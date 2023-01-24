
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    quantity: DataTypes.INTEGER
  })

  cart.associate = function(models){
    // cart.hasOne(models.transactions, {
    //   foreignKey: 'cart_id',
    // }),
    cart.belongsTo(models.users, {
      foreignKey: 'user_id',
    }),
    cart.belongsTo(models.products, {
      foreignKey: 'product_id',
    })
  }
  return cart;
};

// product_name: DataTypes.STRING,
// products_price: DataTypes.INTEGER,
// quantity: DataTypes.INTEGER