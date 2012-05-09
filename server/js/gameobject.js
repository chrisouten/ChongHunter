var cls = require("./lib/class");

module.exports = GameObject = cls.Class.extend({
    init: function(id, gameType, color, speed, rotation, x, y) {
        this.id = parseInt(id);
        this.gameType = gameType;
        this.color = color;
        this.speed = speed;
        this.rotation = rotation;
        this.x = x;
        this.y = y;
    },
    
    destroy: function() {

    },
        
});