// const admin = require("../models/Admin");

// module.exports.create_admin = async (req, res) => {
//   console.log(req.body);
//   const { paymentId, img } = req.body;
//   try {
//     const Admin = await admin.create({
//       createdAt: new Date(),
//       updatedAt: new Date(),
//     });
//     res.status(200).json({
//       message: "Invoice Uploaded!",
//     });
//   } catch (err) {
//     if (err.name === "SequelizeValidationError") {
//       return res.status(400).json({
//         error: err.errors.map((e) => e.message),
//       });
//     }
//     res.status(400).json({
//       message: err.message,
//     });
//   }
// };
