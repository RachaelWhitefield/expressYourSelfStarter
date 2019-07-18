var feelings = require("../data/feelings");
var responses = require("../data/responses");

module.exports = function(app) {
    app.get("/api/feelings", function(req, res) {
        res.send(feelings);
    })

    app.get("/api/responses", function(req, res) {
        res.send(responses);
    })

    app.post("/api/response", function(req, res) {
        responses.push(req.body);
        res.send(true);
    })
}