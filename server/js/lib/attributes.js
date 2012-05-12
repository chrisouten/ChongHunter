var Types = require("../../shared/js/types");

var Attributes = {
    Enemies: {
        chong: {
            speed: 100,
            hp: 50,
            weapon: gun
        }
    },
    Weapons: {
        gun: {
            firerate: 20,
            projectile: bullet
        }
    },
    Projectiles: {
        bullet: {
            damage : 25
        }
    }
};

Attributes.getEnemySpeed = function(enemyType) {
    try {
        return Attribute.Enemies[enemyType].speed;
    } catch(e) {
        console.log("Enemy not found :: " + enemyType;
    }
};


Properties.getHitPoints = function(kind) {
    return Properties[Types.getKindAsString(kind)].hp;
};

module.exports = Attributes;