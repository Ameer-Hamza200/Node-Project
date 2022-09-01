const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Sociallink extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
      //    */
    // static associate(models) {
    //   // define association here
    // }
  }
  Sociallink.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    appName: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    url: {
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
    modelName: "Sociallink",
    tableName: "socialLinks",
  });
  return Sociallink;
};
