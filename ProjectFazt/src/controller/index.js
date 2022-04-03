const indexController = {};

indexController.home = (req, res) => {
    res.render('index.hbs');
}

indexController.about = (req, res) => {
    res.render("about.hbs");
}

module.exports = indexController;