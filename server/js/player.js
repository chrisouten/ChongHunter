
var cls = require("./lib/class"),
    GameObject = require("./gameobject"),
    Types = require("../../shared/js/types");

module.exports = Player = GameObject.extend({
    init: function(connection) {
        var self = this;
        
        this.connection = connection;
        this._super(this.connection.id, Types.ObjectTypes.PLAYER, null, 0, 0);
        
        this.name = "dummy name";
        
        this.connection.listen(function(message) {
            var messageType = message.type;
            // If you are not logged in I need to say hello first
            if (!self.loggedIn && messageType != Types.Messages.HELLO) {
                self.connection.close("Are you not going to say hello first?");
                return;
            }
            // Can only say hello once, we've already met you know
            if (self.loggedIn && messageType == Types.Messages.HELLO) {
                self.connection.close("We've already met once...");
                return;
            }
            
            if (messageType == Types.Messages.HELLO) {
                self.setColor(message.color);
                self.setName(message.name);
                
                self.arena = self.connection._server.getArena(self);
                self.arena.addPlayer(self);
            }
        });
    },
    
    setColor : function(color) {
        this.color = color;
    },
    
    setName : function(name) {
        this.name = name;
    }
    
});