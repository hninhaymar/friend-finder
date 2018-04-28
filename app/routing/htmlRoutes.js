var path = require("path");
var htmlRoutes = {
    getHome : function(req,res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    },
    getSurvey : function(req,res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    }

};

module.exports = htmlRoutes;