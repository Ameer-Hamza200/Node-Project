const {
  Model
} = require("sequelize");
const db = require("./index");

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static associate() {
      // define association here
      db.Review.hasOne(db.Admin, { foreignKey: "adminId", as: "admin" });
    }
  }
  Review.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER
    },

    userName: {
      allowNull: false,
      type: sequelize.STRING,
    },
    email: {
      allowNull: false,
      type: sequelize.STRING,
      unique: true,
    },
    feedback: {
      allowNull: false,
      type: sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: sequelize.DATE
    }

  }, {
    sequelize,
    modelName: "Review",
  });
  return Review;
};
