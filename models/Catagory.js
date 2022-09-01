const {
  Model
} = require("sequelize");
  // const db = require("./index");

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
      //    */
    static associate(models) {
      Category.hasMany(models.Project, { foreignKey: "categoryId" });
    }
  }
  Category.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }

  }, {
    sequelize,
    modelName: "Category",
    tableName: "categories",
  });
  return Category;
};
