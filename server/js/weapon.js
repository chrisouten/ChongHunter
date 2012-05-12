
var cls = require("./lib/class"),
    Types = require("../../shared/js/types");

module.exports = Weapon = GameObject.extend({
    init: function(id, owner, color, speed, rotation, x, y, firerate) {
        
        this._super(id, Types.ObjectTypes.WEAPON, color, speed, rotation, x, y);
        this.owner = owner;
        this.firerate = firerate;
        
    },
    
});