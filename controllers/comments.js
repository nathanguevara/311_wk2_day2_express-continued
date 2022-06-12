const comments = require("../data/comments");

const list = (req, res) => {
  return res.json(comments);
};

const show = (req, res) => {
  let find = comments.find(
    (comment) => comment._id === parseInt(req.params.id)
  );
  return res.json(find);
};

const create = (req, res) => {
  let counter = comments.length + 1;
  let newComment = req.body;
  newComment._id = counter;
  newComment.postId = 1;
  comments.push(newComment);
  return res.json(comments);
};

module.exports = { 
    list, 
    show, 
    create 
};
