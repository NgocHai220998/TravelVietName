let postModel = require("../models/postModel.js");

module.exports = function(app) {
  app.get("/detail/:id", (req, res) => {
    res.render("post.ejs");
  });

  app.get("/api/getDetailById/:id", (req, res) => {
    postModel.findOne({ _id: req.params.id }, (err, post) => {
      if (err) {
        console.log(err + "");
        throw err;
      } else {
        res.json(post);
      }
    });
  });

  app.put("/api/addComment/:id", async (req, res) => {
    try {
      let post = await postModel.findById(req.params.id);

      const newComment = {
        name: req.body.name,
        star: parseInt(req.body.star),
        content: req.body.content
      };
      post.post.comments.push(newComment);
      let newPost = await post.save();
      res.json(newPost);
    } catch (error) {
      res.send(error + "");
    }
  });
};
