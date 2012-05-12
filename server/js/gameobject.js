var cls = require("./lib/class");

module.exports = GameObject = cls.Class.extend({
    init: function(id, gameType, color, x, y) {
        this.id = parseInt(id);
        this.gameType = gameType;
        this.color = color;
        this.speed = 0;
        this.rotation = 0;
        this.x = x;
        this.y = y;
    },
    
    destroy: function() {

    },
        
});