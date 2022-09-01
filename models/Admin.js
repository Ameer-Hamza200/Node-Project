/* eslint-disable no-unused-vars */
const {
  Model
} = require("sequelize");

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Admin.hasMany(models.Review, { foreignKey: "adminId" });
      // Admin.hasMany(models.Category, { foreignKey: "id" });
      // Admin.hasMany(models.Sociallink, { foreignKey: "id" });
      // Admin.hasMany(models.Projects, { foreignKey: "id" });
    }
  }
  Admin.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    photo: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      // unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    welcomeLine: {
      allowNull: false,
      type: DataTypes.STRING
    },
    about: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    jobStatus: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contact: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    createdAt: {
      // allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      // allowNull: true,
      type: DataTypes.DATE
    }

  }, {
    sequelize,
    modelName: "Admin",
    tableName: "admins",
  });
  return Admin;
};
