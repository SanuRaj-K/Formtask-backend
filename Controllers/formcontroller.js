const formModel = require("../Models/Schema");

const post = async (req, res) => {
  const { name, rating, dd, mm, yy, subject,university } = req.body.formvalues;

  const dob = `${dd}/ ${mm}/${yy}`;

  const user = new formModel({
    name: name,
    subject: subject,
    university: university,
    rating: rating,
    dob: dob,
  });

  const newUser = await formModel.create(user);
  res.send(newUser);
};

const getData = async (req, res) => {
  const data = await formModel.find();
  res.send(data);
};
module.exports = { post, getData };
