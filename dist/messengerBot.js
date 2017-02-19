var setupBotmaster = require('./botmaster');
var MessengerBot = require('botmaster').botTypes.MessengerBot;

module.exports = function(RED) {
    function MessengerBotNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        var botmaster = setupBotmaster(RED);
        var messengerBot = new MessengerBot(config);
        botmaster.addBot(messengerBot);

        this.on('input', function(msg) {
            messengerBot.sendMessage(msg);
        });

        messengerBot.on('update', node.send);

    }
    RED.nodes.registerType('messengerBot', MessengerBotNode);
};
