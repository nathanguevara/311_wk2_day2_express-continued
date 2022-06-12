const vehicles = require("../data/vehicles");

const list = (req, res) => {
  return res.json(vehicles);
};

const show = (req, res) => {
  let find = vehicles.find(
    (vehicle) => vehicle._id === parseInt(req.params.id)
  );
  return res.json(find);
};

const create = (req, res) => {
  let counter = vehicles.length + 1;
  let newVehicle = req.body;
  newVehicle._id = counter;
  newVehicle.postId = 1;
  vehicles.push(newVehicle);
  return res.json(vehicles);
};

module.exports = {
  list,
  show,
  create,
};
