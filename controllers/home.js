const HomeController = {
  Index: (req, res) => {
    res.render("home/index", {title: "Makers' List"});
  },
};

module.exports = HomeController;