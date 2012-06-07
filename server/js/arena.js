var cls = require("./lib/class"),
    Types = require("../../shared/js/types"),
    Chong = require("./chong");

module.exports = Arena = cls.Class.extend({
    init: function(player) {
        this.players = [player];
        this.ups = 33;
        
        this.chongs = {};
        this.allColors = Types.Colors;
        //Spawn enemies
        this.spawnChongs();
        
    },
    
    connect : function(player) {
        this.players.push(player);
        
    },
    
    spawnChongs : function() {
        var self = this;
        availableColor = _.intersection(_.toArray(this.allColors),
                                        _.pluck(this.players, 'color'));
        var x = 0, y = 0;
        _.each(_.range(25), function() {
            var color = availableColors[Math.floor(Math.random() * availableColors.length)];
            self.chongs.push(new Chong(self.chongs.length, color, x, y));
        });
        

    },
    
    run : function() {
        setInterval(function() {
           
        }, 1000 / this.ups);
    }
});