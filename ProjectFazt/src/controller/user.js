const userController = {}

userController.signIn = (req, res) => {
    res.render('./users/signin.hbs')
}

userController.signup = (req, res) => {
    res.render("./users/signup.hbs")
}

module.exports = userController;