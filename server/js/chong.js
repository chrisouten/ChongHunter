
var cls = require("./lib/class"),
    Types = require("../../shared/js/types");

module.exports = Weapon = GameObject.extend({
    init: function(id, color, x, y) {
        
        this._super(id, Types.ObjectTypes.CHONG, color, x, y);
        this.target = null;
    },
    
});