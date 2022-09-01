const {
  Model
} = require("sequelize");
// const db = require("./index");

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
    //    */
    //   static associate(models) {
    //     // define association here

  //   }
  }
  Review.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      // unique: true,
    },
    feedback: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      // allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      // allowNull: false,
      type: DataTypes.DATE
    }

  }, {
    sequelize,
    modelName: "Review",
    tableName: "reviews",
  });
  return Review;
};
