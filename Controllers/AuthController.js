var authService = require('../Services/AuthService');
exports.register = function (req, res) {
    let register = authService.Register(req.body, function (err, result) {
        if (err)
            res.send(err);
        res.send(result);
    })
}


exports.login = function (req, res) {
    let login = authService.Login(req.body, function (err, result) {
        if (err)
            res.send(err)
        res.send(result);
    })
}

exports.validate_token = function (req, res) {
    let validate = authService.Validate(req.body.token, function (err, result) {
        if (err)
            res.send(err.message);
        res.send(result);
    })
}

exports.verifyUser = function (req, res) {
    let validate = authService.verifyUser(req.body, function (err, result) {
        if (err)   res.send(err);
        res.send(result);
    })
}

exports.simple_hello = function (req, res) {
    res.send("Hello from our node server");
}