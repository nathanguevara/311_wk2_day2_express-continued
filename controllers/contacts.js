const contacts = require("../data/contacts");

const list = (req, res) => {
  return res.json(contacts);
};

const show = (req, res) => {
  let find = contacts.find(
    (contact) => contact._id === parseInt(req.params.id)
  );
  return res.json(find);
};

const create = (req, res) => {
  let counter = contacts.length + 1;
  let newContact = req.body;
  newContact._id = counter;
  newContact.postId = 1;
  contacts.push(newContact);
  return res.json(contacts);
};

module.exports = {
  list,
  show,
  create,
};
