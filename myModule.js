var a = require('http');

function Welcome(nameIn) {
    this.name = nameIn;
}

Welcome.prototype = {
    showName: function () {
        console.log("Hi" + this.name);
    },
    updateName: function(nameIn) {
        this.name = nameIn;
    }
};

module.exports = Welcome;