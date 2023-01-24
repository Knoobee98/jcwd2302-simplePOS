
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    prices: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    discount: DataTypes.INTEGER
  })

  products.associate = function(models){
    products.belongsToMany(models.users, {
      through: {
        model: 'cart',
        key: 'id'
      },
      foreignKey: 'product_id',
    })
  }
  
  return products;
};

// name: DataTypes.STRING,
//     prices: DataTypes.INTEGER,
//     stock: DataTypes.INTEGER,
//     discount: DataTypes.INTEGER