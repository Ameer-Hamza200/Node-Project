const {
  Model
} = require("sequelize");
const db = require("./index");
db.review = require("./Review");

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
      db.Admin.hasMany(db.review, { foreignKey: "adminId" });
    }
  }
  Admin.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: sequelize.INTEGER
    },
    userName: {
      allowNull: false,
      type: sequelize.STRING
    },
    photo: {
      allowNull: false,
      type: sequelize.TEXT,
    },
    email: {
      allowNull: false,
      type: sequelize.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: sequelize.STRING,
    },
    welcomeLine: {
      allowNull: false,
      type: sequelize.STRING
    },
    about: {
      allowNull: false,
      type: sequelize.TEXT
    },
    jobStatus: {
      allowNull: false,
      type: sequelize.STRING
    },
    contact: {
      allowNull: false,
      type: sequelize.INTEGER,
    },
    catagories: {
      allowNull: false,
      type: sequelize.STRING
    },
    projectsList: {
      allowNull: false,
      type: sequelize.STRING
    },
    recentProject: {
      allowNull: false,
      type: sequelize.STRING
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
    modelName: "Admin",
  });
  return Admin;
};
