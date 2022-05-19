const userController = {};

userController.getUsers = (req, res) => {
    res.send({
        message: 'Hello'
    });
}

module.exports = userController;