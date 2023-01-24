
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  })

  users.associate = function(models){
    users.belongsToMany(models.products, {
      through: {
        model: 'cart',
        key: 'id'
      },
      foreignKey: 'user_id',
    })
  }
  return users;
};

// username: DataTypes.STRING,
// email: DataTypes.STRING,
// password: DataTypes.STRING,
// role: DataTypes.STRING