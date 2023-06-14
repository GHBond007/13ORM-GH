const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { associate } = require('./Tag');

class Product extends Model { }

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

Product.associate = function (models) {
  Product.belongsTo(models.Category, {
    foreignKey: 'category_id',
    targetKey: 'id',
    as: 'category',
  });
  Product.belongsToMany(models.Tag, {
    through: models.ProductTag,
    foreignKey: 'product_id',
  });
};
module.exports = Product;
