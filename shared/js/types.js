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
        CHONG: 1,
        PROJECTILE: 2,
        POWERUP: 3
    }
};

if(!(typeof exports === 'undefined')) {
    module.exports = Types;
}