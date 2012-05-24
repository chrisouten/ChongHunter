Types = {
    Messages :{
        HELLO: 0,
        WELCOME: 1,
        WHO: 2,
        GAMES: 3
    },
    
    Colors : {
        BLUE:   "rgb(0,0,255)",
        RED:    "rgb(255,0,0)",
        GREEN:  "rgb(0,255,0)"
    },
    
    ObjectTypes : {
        PLAYER: 0,
        MOB: 1,
        WEAPON: 2,
        PROJECTILE: 3,
        POWERUP: 4
    },

};



if(!(typeof exports === 'undefined')) {
    module.exports = Types;
}