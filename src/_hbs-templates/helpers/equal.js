
module.exports.register = function (handlebars) {
    handlebars.registerHelper('equal', require("handlebars-helper-equal"))
};
