
var cls = require("./lib/class"),
    Types = require("../../shared/js/types");

module.exports = Projectile = GameObject.extend({
    init: function(id, owner, color, speed, rotation, x, y) {
        
        this._super(id, Types.ObjectTypes.PROJECTILE, color, speed, rotation, x, y);
        this.owner = owner;
        
    },
    
});