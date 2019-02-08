class GameObject {
  constructor(info) {
    (this.createdAt = info.createdAt), (this.dimensions = info.dimensions);
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}
// function GameObject(info) {
//     (this.createdAt = info.createdAt), (this.dimensions = info.dimensions);
//   }
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };

class CharacterStats extends GameObject {
  constructor(stats) {
    super(stats);
    (this.healthPoints = stats.healthPoints), (this.name = stats.name);
  }

  takeDamage() {
    if (this.healthPoints > 0) {
      this.healthPoints--;
      if (this.healthPoints === 0) {
        return this.destroy();
      } else {
        return `${this.name} took damage. ${this.healthPoints} remaining`;
      }
    }
  }
}
//   function CharacterStats(stats) {
//     GameObject.call(this, stats),
//       (this.healthPoints = stats.healthPoints),
//       (this.name = stats.name);
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function() {
//     if (this.healthPoints > 0) {
//       this.healthPoints--;
//       if (this.healthPoints === 0) {
//         return this.destroy();
//       } else {
//         return `${this.name} took damage. ${this.healthPoints} remaining`;
//       }
//     }
//   };

class Humanoid extends CharacterStats {
  constructor(info) {
    super(info);
    (this.team = info.team),
      (this.weapons = info.weapons),
      (this.language = info.language);
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}
// function Humanoid(info) {
//   CharacterStats.call(this, info),
//     (this.team = info.team),
//     (this.weapons = info.weapons),
//     (this.language = info.language);
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}.`;
// };

class Hero extends Humanoid {
  constructor(info) {
    super(info);
    this.role = info.role;
  }

  fireball(target) {
    if (target.healthPoints > 0) {
      console.log(`${this.name} cast fireball on ${target.name}!`);
      return target.takeDamage();
    } else {
      return `${target.name} is destroyed, pick a new target!`;
    }
  }
}
// function Hero(info) {
//   Humanoid.call(this, info), (this.role = info.role);
// }
// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.fireball = function(target) {
//   if (target.healthPoints > 0) {
//     console.log(`${this.name} cast fireball on ${target.name}!`);
//     return target.takeDamage();
//   } else {
//     return `${target.name} is destroyed, pick a new target!`;
//   }
// };

class Villain extends Humanoid {
  constructor(info) {
    super(info);
    this.role = info.role;
  }

  archerShot(target) {
    if (target.healthPoints > 0) {
      console.log(`${this.name} shot arrows at ${target.name}!`);
      return target.takeDamage();
    } else {
      return `${target.name} is destroyed, pick a new target!`;
    }
  }
}
// function Villain(info) {
//   Humanoid.call(this, info), (this.role = info.role);
// }
// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.archerShot = function(target) {
//   if (target.healthPoints > 0) {
//     console.log(`${this.name} shot arrows at ${target.name}!`);
//     return target.takeDamage();
//   } else {
//     return `${target.name} is destroyed, pick a new target!`;
//   }
// };

const mage = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue",
  role: "Hero"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 5,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish",
  role: "Villain"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log(mage.fireball(archer));
console.log(archer.archerShot(mage));
console.log(mage.fireball(archer));
console.log(mage.fireball(archer));
console.log(archer.archerShot(mage));
console.log(mage.fireball(archer));
console.log(mage.fireball(archer));
console.log(mage.fireball(archer));
