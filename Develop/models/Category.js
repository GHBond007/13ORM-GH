const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {

  static tableName = "categories";

  async findAll() {
    const categories = await this.query("SELECT * FROM categories");
    return categories;
  }

}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

Category.associate = function (models) {
  Category.hasMany(models.Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });
}
module.exports = Category;