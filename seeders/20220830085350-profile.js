module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "admins",
      [{
        userName: "Ameer Hamza",
        photo: "path",
        email: "hamza@test.com",
        password: "123456",
        welcomeLine: "Welcome to profile",
        about: "This is my about",
        jobStatus: "Intern",
        contact: "1234",
        catagories: "Cat 1 , cat 2",
        projectsList: "N/A",
        recentProject: "Node js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: " Hamza",
        photo: "path",
        email: "hamza2@test.com",
        password: "4444",
        welcomeLine: "Welcome to profile",
        about: "This is my about",
        jobStatus: "Intern",
        contact: "3214",
        catagories: "Cat 1 , cat 2",
        projectsList: "N/A",
        recentProject: "Node js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ]
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete(
      "admins",
      [{
        userName: "Ameer Hamza",
        photo: "path",
        email: "hamza@test.com",
        password: "123456",
        welcomeLine: "Welcome to profile",
        about: "This is my about",
        jobStatus: "Intern",
        contact: "2332",
        catagories: "Cat 1 , cat 2",
        projectsList: "N/A",
        recentProject: "Node js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: " Hamza",
        photo: "path",
        email: "hamza2@test.com",
        password: "123456",
        welcomeLine: "Welcome to profile",
        about: "This is my about",
        jobStatus: "Intern",
        contact: "2345",
        catagories: "Cat 1 , cat 2",
        projectsList: "N/A",
        recentProject: "Node js",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      ]
    );
  }
};
