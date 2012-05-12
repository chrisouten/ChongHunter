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

    GameClasses : {
        // Baddies
        chong: {
            name: 'chong',
            type: Types.ObjectTypes.MOB
        },
        megachong: {
            name: 'mega chong',
            type: Types.ObjectTypes.MOB
        },

        // Weapons
        rifle: {
            name: 'rifle',
            type: Types.ObjectTypes.WEAPON
        }

        // Projectiles
        bullet: {
            name: 'bullet',
            type: Types.ObjectTypes.PROJECTILE
        }

    }
};



if(!(typeof exports === 'undefined')) {
    module.exports = Types;
}