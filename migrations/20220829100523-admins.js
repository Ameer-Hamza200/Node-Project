module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("admins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        // unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      welcomeLine: {
        allowNull: false,
        type: Sequelize.STRING
      },
      about: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      jobStatus: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contact: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      catagories: {
        allowNull: false,
        type: Sequelize.STRING
      },
      projectsList: {
        allowNull: false,
        type: Sequelize.STRING
      },
      recentProject: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("admins", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      photo: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        // unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      welcomeLine: {
        allowNull: false,
        type: Sequelize.STRING
      },
      about: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      jobStatus: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contact: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      catagories: {
        allowNull: false,
        type: Sequelize.STRING
      },
      projectsList: {
        allowNull: false,
        type: Sequelize.STRING
      },
      recentProject: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  }
};
