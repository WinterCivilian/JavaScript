const tree = { x: 6, y: 7, hitpoints: 30, name : "tree" };
const rock = { x: 3, y : 11, hitpoints: 90, name : "rock" };
const damage = 15;


function DamageTree(dmg){
    tree.hitpoints -= dmg;
    console.log("Tree has " + tree.hitpoints + " HP left");
}

function DamageRock(dps){
    rock.hitpoints -= dps;
    console.log("Rock has " + rock.hitpoints + " HP left");
}

function Damage(hitTarget, damageAmount){
    hitTarget.hitpoints -= damageAmount;
    console.log(hitTarget.name + " has " + hitTarget.hitpoints + " HP left")
}


DamageTree(damage);
DamageRock(damage);


(Damage(tree, damage));
(Damage(rock, damage));