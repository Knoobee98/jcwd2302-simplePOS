
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    prices: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    discount: DataTypes.INTEGER
  })

  products.associate = function(models){
    products.hasMany(models.cart, {
      foreignKey: 'product_id',
    })
  }
  
  return products;
};

// name: DataTypes.STRING,
//     prices: DataTypes.INTEGER,
//     stock: DataTypes.INTEGER,
//     discount: DataTypes.INTEGER