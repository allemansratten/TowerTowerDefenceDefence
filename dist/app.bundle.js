/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bullet.ts":
/*!***********************!*\
  !*** ./src/bullet.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bullet = exports.RADIUS = void 0;
var playerInfo_1 = __webpack_require__(/*! ./playerInfo */ "./src/playerInfo.ts");
exports.RADIUS = 10;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet(scene) {
        var _this = _super.call(this, scene, 0, 0) || this;
        _this.dx = 0;
        _this.dy = 0;
        _this.lifespan = 0;
        _this.dx = 0;
        _this.dy = 0;
        _this.lifespan = 0;
        _this.speed = Phaser.Math.GetSpeed(600, 1);
        _this.bulletImage = _this.scene.add.image(0, 0, 'bullet');
        return _this;
    }
    Bullet.prototype.fire = function (x, y, angle, damage, towerRange, speedMod) {
        this.damage = damage;
        this.speed = Phaser.Math.GetSpeed(towerRange * speedMod, 1);
        this.add(this.bulletImage);
        this.particles = this.scene.add.particles('particle_red');
        this.setActive(true);
        this.setVisible(true);
        //  Bullets fire from the middle of the screen to the given x/y
        this.bulletImage.setPosition(x, y);
        //  we don't need to rotate the bullets as they are round
        //  this.setRotation(angle);
        // TODO: figure out how to bring to front
        this.dx = Math.cos(angle);
        this.dy = Math.sin(angle);
        this.lifespan = 1000 / speedMod;
        this.emitter = this.particles.createEmitter({
            speed: 100,
            scale: { start: 0.3, end: 0 },
            blendMode: 'ADD',
            lifespan: 100,
        });
        this.emitter.startFollow(this.bulletImage);
    };
    Bullet.prototype.hit = function () {
        this.setActive(false);
        this.setVisible(false);
        this.emitter.explode(10, this.bulletImage.x, this.bulletImage.y);
    };
    Bullet.prototype.update = function (_, delta) {
        delta *= playerInfo_1.PlayerInfo.timeScale;
        this.lifespan -= delta;
        this.bulletImage.x += this.dx * (this.speed * delta);
        this.bulletImage.y += this.dy * (this.speed * delta);
        this.body.setCircle(exports.RADIUS, this.bulletImage.x, this.bulletImage.y);
        if (this.lifespan <= 0) {
            this.setActive(false);
            this.setVisible(false);
            this.particles.destroy(); // disable emittor (also could explode it)
        }
    };
    return Bullet;
}(Phaser.GameObjects.Container));
exports.Bullet = Bullet;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TOWER_CONFIGS = exports.Multishot = exports.Sniper = exports.Basic = exports.ENEMY_CONFIGS = exports.Splitter = exports.Fast = exports.Armoured = exports.Fat = exports.Weak = exports.WaveConfig = exports.RANGE_INDICATOR_CONFIG = exports.PLAYER_HEALTH_REGEN = exports.PAUSE_AFTER_WAVE_TIME = exports.TOWER_HEALTH_REGEN = exports.DAMAGE_TO_TOWER_HEALTH_COEF = void 0;
var enem = __webpack_require__(/*! ./enemy */ "./src/enemy.ts");
// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
exports.DAMAGE_TO_TOWER_HEALTH_COEF = 0.3;
exports.TOWER_HEALTH_REGEN = 0.00001 * 2;
exports.PAUSE_AFTER_WAVE_TIME = 3000;
exports.PLAYER_HEALTH_REGEN = 0; // how much health per wave, can be < 1
exports.RANGE_INDICATOR_CONFIG = {
    'colour': 0xbbbbff,
    'alpha': 210,
    'edgeColour': 0x8080ff,
    'edgeWidth': 4
};
exports.WaveConfig = {
    // ------------------- outer -----------------------
    // How much time between consecutive spawns in a wave
    outerEnemyInterval: 500,
    // How much danger in a wave
    outerWaveDanger: function (wave) { return wave * 40; },
    // ------------------- inner -----------------------
    // How much danger per second is generatee in inner depths?
    dangerPerSec: function (level) { return 20 + level * 15; },
};
exports.Weak = {
    'name': 'Weak',
    'class': enem.WeakEnemy,
    'hp': function (wave) { return 25; },
    'speed': 1 / 20000,
    'money': 1,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 20,
    'spriteName': 'enemy1',
    'tint': 0xffffff,
};
exports.Fat = {
    'name': 'Fat',
    'class': enem.FatEnemy,
    'hp': function (wave) { return 100; },
    'speed': 1 / 40000,
    'money': 2,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 240,
    'spriteName': 'fatEnemy',
    'tint': 0xffffff,
};
exports.Armoured = {
    'name': 'Armoured',
    'class': enem.ArmouredEnemy,
    'hp': function (wave) { return 30; },
    'speed': 1 / 30000,
    'money': 2,
    'damage': 1,
    'armour': function (wave) { return 4; },
    'danger': 160,
    'spriteName': 'armouredEnemy',
    'tint': 0xffffff,
};
exports.Fast = {
    'name': 'Fast',
    'class': enem.FastEnemy,
    'hp': function (wave) { return 15; },
    'speed': 1 / 10000,
    'money': 1,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 80,
    'spriteName': 'fastEnemy',
    'tint': 0xffffff,
};
exports.Splitter = {
    'name': 'Splitter',
    'class': enem.SplitterEnemy,
    'hp': function (wave) { return 15; },
    'speed': 1 / 30000,
    'money': 1,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 60,
    'spriteName': 'enemy1',
    'tint': 0xff7070,
    'split': {
        'cfg': exports.Weak,
        'amount': 2
    }
};
exports.ENEMY_CONFIGS = [exports.Weak, exports.Fat, exports.Armoured, exports.Fast, exports.Splitter];
exports.Basic = {
    'name': "Basic",
    'damage': function (level) { return 10 + 15 * (level - 1); },
    'firerate': function (level) { return Math.max(1500 - 50 * level, 1000); },
    'range': function (level) { return 125; },
    'bulletSpeedMod': 4,
    'price': 5,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 0,
    'tintBase': 0xffffff,
    'tintMid': 0xffffff,
    'tintTop': 0xaaaaff,
    'description': "Nothing fancy. Damage and fire rate grow with level.",
};
exports.Sniper = {
    'name': "Sniper",
    'damage': function (level) { return 25 + 50 * (level - 1); },
    'firerate': function (level) { return 4000; },
    'range': function (level) { return 200 + 35 * level; },
    'bulletSpeedMod': 5,
    'price': 20,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 1,
    'tintBase': 0xbbffbb,
    'tintMid': 0xffffff,
    'tintTop': 0x00ff00,
    'description': "Long range, but fires slowly. Damage and range grow with level.",
};
exports.Multishot = {
    'name': "Multishot",
    'damage': function (level) { return 5 + 10 * (level - 1); },
    'firerate': function (level) { return Math.max(1300 - 50 * level, 1000); },
    'range': function (level) { return 90; },
    'bulletSpeedMod': 4,
    'price': 10,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 2,
    'tintBase': 0xffffff,
    'tintMid': 0xffffff,
    'tintTop': 0xff0000,
    'description': "Can shoot at multiple enemies at once. Damage and fire rate grow with level.",
};
exports.TOWER_CONFIGS = [exports.Basic, exports.Multishot, exports.Sniper];


/***/ }),

/***/ "./src/enemy.ts":
/*!**********************!*\
  !*** ./src/enemy.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitterEnemy = exports.FastEnemy = exports.ArmouredEnemy = exports.FatEnemy = exports.WeakEnemy = exports.EnemyBase = void 0;
var playerInfo_1 = __webpack_require__(/*! ./playerInfo */ "./src/playerInfo.ts");
var cfg = __webpack_require__(/*! ./config */ "./src/config.ts");
var EnemyBase = /** @class */ (function (_super) {
    __extends(EnemyBase, _super);
    function EnemyBase(scene, stats) {
        var _this = _super.call(this, scene, 0, 0, stats.spriteName) || this;
        _this.yOffset = Phaser.Math.RND.integerInRange(-20, 20);
        _this.xOffset = Phaser.Math.RND.integerInRange(-20, 20);
        _this.stats = stats;
        _this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
        return _this;
    }
    EnemyBase.prototype.update = function (_, delta) {
        delta *= playerInfo_1.PlayerInfo.timeScale;
        // move the t point along the path, 0 is the start and 1 is the end
        this.follower.t += this.speed * delta;
        // get the new x and y coordinates in vec
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);
        if (this.follower.vec.x > this.x - this.xOffset) {
            this.flipX = false;
        }
        if (this.follower.vec.x < this.x - this.xOffset) {
            this.flipX = true;
        }
        // update enemy x and y to the newly obtained x and y
        this.setPosition(this.follower.vec.x + this.xOffset, this.follower.vec.y + this.yOffset);
        // if we have reached the end of the path, remove the enemy
        if (this.follower.t >= 1) {
            this.reachEnd();
        }
        this.alpha = 1;
        this.angle = 0;
        this.scale = 1;
    };
    EnemyBase.prototype.reachEnd = function () {
        this.scene.waveManager.remainingDanger += this.stats.danger;
        this.setActive(false);
        this.setVisible(false);
        if (this.scene.sceneLevel === 0) {
            var hudScene = this.scene.scene.get("hudScene");
            playerInfo_1.PlayerInfo.hp -= this.stats.damage;
            hudScene.hpRedness = 1;
            var metaScene = this.scene.scene.get("metaScene");
            metaScene.getActiveScene().cameras.main.shake(200, 0.005);
            this.scene.waveManager.respawn(this.stats);
        }
        if (this.scene.enemyEndCallback) {
            this.scene.enemyEndCallback(this.stats.damage);
        }
    };
    EnemyBase.prototype.startOnPath = function (wave, start_t) {
        if (start_t === void 0) { start_t = 0; }
        // set the t parameter at the start of the path
        this.follower.t = start_t;
        this.hp = this.stats.hp(wave);
        this.speed = this.stats.speed;
        this.tint = this.stats.tint;
        // get x and y of the given t point
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);
        // set the x and y of our enemy to the received from the previous step
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
        var frameRate = Math.min(60, this.stats.speed * 40000 * 15);
        if (this.stats.spriteName == "fatEnemy") { // hack
            frameRate *= 0.5;
        }
        this.anims.play({
            key: this.stats.spriteName + "_walk",
            frameRate: frameRate
        });
    };
    EnemyBase.prototype.receiveDamage = function (damage) {
        this.hp -= damage - this.stats.armour(this.scene.waveManager.currentWave);
        // if hp drops below 0 we deactivate this enemy
        if (this.hp <= 0) {
            this.setActive(false);
            // this.setVisible(false);
            this.onDeath();
        }
    };
    EnemyBase.prototype.onDeath = function () {
        this.onDeathAbility();
        if (this.scene.sceneLevel === 0) { // Add gold in base layer only
            this.scene.waveManager.deadDanger += this.stats.danger;
            playerInfo_1.PlayerInfo.money += this.stats.money;
        }
        this.scene.tweens.add({
            targets: this,
            alpha: 0,
            angle: playerInfo_1.PlayerInfo.RNG.sign() * 180,
            scale: 0.5,
            duration: playerInfo_1.PlayerInfo.RNG.integerInRange(600, 800),
            ease: 'Power2'
        });
    };
    EnemyBase.prototype.onDeathAbility = function () {
    };
    return EnemyBase;
}(Phaser.GameObjects.Sprite));
exports.EnemyBase = EnemyBase;
var WeakEnemy = /** @class */ (function (_super) {
    __extends(WeakEnemy, _super);
    function WeakEnemy(scene) {
        return _super.call(this, scene, cfg.Weak) || this;
    }
    return WeakEnemy;
}(EnemyBase));
exports.WeakEnemy = WeakEnemy;
var FatEnemy = /** @class */ (function (_super) {
    __extends(FatEnemy, _super);
    function FatEnemy(scene) {
        return _super.call(this, scene, cfg.Fat) || this;
    }
    return FatEnemy;
}(EnemyBase));
exports.FatEnemy = FatEnemy;
var ArmouredEnemy = /** @class */ (function (_super) {
    __extends(ArmouredEnemy, _super);
    function ArmouredEnemy(scene) {
        return _super.call(this, scene, cfg.Armoured) || this;
    }
    return ArmouredEnemy;
}(EnemyBase));
exports.ArmouredEnemy = ArmouredEnemy;
var FastEnemy = /** @class */ (function (_super) {
    __extends(FastEnemy, _super);
    function FastEnemy(scene) {
        return _super.call(this, scene, cfg.Fast) || this;
    }
    return FastEnemy;
}(EnemyBase));
exports.FastEnemy = FastEnemy;
var SplitterEnemy = /** @class */ (function (_super) {
    __extends(SplitterEnemy, _super);
    function SplitterEnemy(scene) {
        return _super.call(this, scene, cfg.Splitter) || this;
    }
    SplitterEnemy.prototype.onDeathAbility = function () {
        if (!this.stats.split) {
            console.log('ERROR missing split config on ' + this.constructor.name);
            return;
        }
        for (var i = 0; i < this.stats.split.amount; i++) {
            var newEnemy = this.scene.allEnemies[this.stats.split.cfg.name].get();
            newEnemy.setVisible(true);
            newEnemy.setActive(true);
            this.scene.waveManager.deadDanger -= this.stats.split.cfg.danger;
            newEnemy.startOnPath(this.scene.waveManager.currentWave, this.follower.t);
        }
    };
    return SplitterEnemy;
}(EnemyBase));
exports.SplitterEnemy = SplitterEnemy;


/***/ }),

/***/ "./src/healthBar.ts":
/*!**************************!*\
  !*** ./src/healthBar.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthBar = void 0;
var HealthBar = /** @class */ (function (_super) {
    __extends(HealthBar, _super);
    function HealthBar(scene) {
        var _this = _super.call(this, scene, 0, 0) || this;
        _this._health = 1; // 0 to 1
        return _this;
    }
    HealthBar.prototype.make = function (x, y, width, health) {
        if (health === void 0) { health = 0; }
        this.x = x;
        this.y = y;
        this.width = width;
        // health bar base/background
        this.bgBar = this.scene.add.rectangle(0, 0, width + 4, 6, 0x000000);
        this.add(this.bgBar);
        // visualization of health losses
        this.slowHealthBar = this.scene.add.rectangle(0, 0, width, 4, HealthBar.HEALTH_LOSS_COLOR);
        this.add(this.slowHealthBar);
        // health bar itself
        this.healthBar = this.scene.add.rectangle(0, 0, width, 4, HealthBar.HEALTH_COLOR);
        this.add(this.healthBar);
        this.health = health;
        this.slowHealth = health;
    };
    Object.defineProperty(HealthBar.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (h) {
            this._health = Math.max(0, Math.min(1, h));
        },
        enumerable: false,
        configurable: true
    });
    HealthBar.prototype.levelUp = function () {
        this.slowHealth = 0;
        this.health = 0;
    };
    HealthBar.prototype.update = function (delta) {
        var coef = Math.pow(0.99, delta / 1000 * 60);
        this.slowHealth = coef * this.slowHealth + (1 - coef) * this.health;
        this.healthBar.width = this.width * this.health;
        this.slowHealthBar.width = this.width * this.slowHealth;
    };
    HealthBar.HEALTH_COLOR = 0xf8ff36; //0xff4444
    HealthBar.HEALTH_LOSS_COLOR = 0x7d7d7d; // 0x44ff44
    return HealthBar;
}(Phaser.GameObjects.Container));
exports.HealthBar = HealthBar;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var hudScene_1 = __webpack_require__(/*! ./scenes/hudScene */ "./src/scenes/hudScene.ts");
var MetaScene_1 = __webpack_require__(/*! ./scenes/MetaScene */ "./src/scenes/MetaScene.ts");
var tdScene_1 = __webpack_require__(/*! ./scenes/tdScene */ "./src/scenes/tdScene.ts");
var metaScene = new MetaScene_1.MetaScene();
var hudScene = new hudScene_1.HudScene(metaScene);
var levels = [
    metaScene,
    hudScene,
];
var gameConfig = {
    type: Phaser.AUTO,
    parent: 'content',
    width: tdScene_1.TD_SCENE_WIDTH + hudScene_1.HUD_WIDTH * 2,
    height: tdScene_1.TD_SCENE_HEIGHT,
    physics: {
        default: 'arcade'
    },
    scene: levels,
    seed: ["42"]
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ "./src/playerInfo.ts":
/*!***************************!*\
  !*** ./src/playerInfo.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInfo = void 0;
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var PlayerInfo = /** @class */ (function () {
    function PlayerInfo() {
    }
    PlayerInfo.waveHealthRegen = function () {
        PlayerInfo.regenProgress += config_1.PLAYER_HEALTH_REGEN;
        var restored = Math.floor(PlayerInfo.regenProgress);
        PlayerInfo.hp += restored;
        PlayerInfo.regenProgress -= restored;
    };
    PlayerInfo.money = 10;
    PlayerInfo.hp = 10;
    PlayerInfo.timeScale = 1;
    PlayerInfo.RNG = new Phaser.Math.RandomDataGenerator(["42"]);
    PlayerInfo.regenProgress = 0;
    return PlayerInfo;
}());
exports.PlayerInfo = PlayerInfo;


/***/ }),

/***/ "./src/scenes/MetaScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/MetaScene.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaScene = void 0;
var terrain_1 = __webpack_require__(/*! ../terrain */ "./src/terrain.ts");
var tdScene_1 = __webpack_require__(/*! ./tdScene */ "./src/scenes/tdScene.ts");
var tdSceneConfig_1 = __webpack_require__(/*! ./tdSceneConfig */ "./src/scenes/tdSceneConfig.ts");
var sceneConfig = {
    active: true,
    visible: true,
    key: 'metaScene',
};
var MetaScene = /** @class */ (function (_super) {
    __extends(MetaScene, _super);
    function MetaScene() {
        var _this = _super.call(this, sceneConfig) || this;
        _this.scenes = [];
        return _this;
    }
    MetaScene.prototype.create = function () {
        this.activeScene = this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.scene.start("hudScene");
        this.mainSound = this.sound.add("main_music", { "loop": true, "volume": 0.1 });
        this.mainSound.play();
        this.anims.create({
            key: 'enemy1_walk',
            frames: this.anims.generateFrameNumbers('enemy1', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'fastEnemy_walk',
            frames: this.anims.generateFrameNumbers('fastEnemy', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'fatEnemy_walk',
            frames: this.anims.generateFrameNumbers('fatEnemy', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'armouredEnemy_walk',
            frames: this.anims.generateFrameNumbers('armouredEnemy', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
    };
    // Creates new Scene, enables it, and sets it invisible
    MetaScene.prototype.addScene = function (parentSceneKey) {
        var _a;
        var parentScene = this.getSceneByKey(parentSceneKey);
        var sceneLevel = ((_a = parentScene === null || parentScene === void 0 ? void 0 : parentScene.sceneLevel) !== null && _a !== void 0 ? _a : -1) + 1;
        var sceneIndex = this.scenes.length;
        var sceneKey = "tdScene" + sceneIndex;
        var newScene = new tdScene_1.TDScene(new tdSceneConfig_1.TDSceneConfig(new terrain_1.Terrain(10, 8), sceneLevel, parentSceneKey, sceneKey), this);
        this.scene.add(sceneKey, newScene, true);
        this.scenes.push(newScene);
        newScene.scene.setVisible(false);
        this.scene.bringToTop('hudScene');
        return newScene;
    };
    MetaScene.prototype.getSceneByKey = function (key) {
        if (key) {
            return this.scene.get(key);
        }
    };
    // makes current scene invisible, makes new scene visible; doesn't change activness
    MetaScene.prototype.switchToScene = function (newSceneKey, goingInside, i, j) {
        var _this = this;
        var _a;
        if (i === void 0) { i = 0; }
        if (j === void 0) { j = 0; }
        (_a = this.activeScene) === null || _a === void 0 ? void 0 : _a.setIsForeground(false, goingInside, i, j);
        var newScene = this.getSceneByKey(newSceneKey);
        newScene.time.addEvent({
            delay: tdScene_1.SCENE_TRANSITION_MS,
            loop: false,
            callback: function () {
                var _a;
                (_a = _this.activeScene) === null || _a === void 0 ? void 0 : _a.scene.setVisible(false);
                newScene.scene.setVisible(true);
                _this.activeScene = newScene;
                newScene.setIsForeground(true, goingInside, i, j);
            }
        });
        // 1.05946309436 ~ 2^(1/12), i.e. one semitone
        this.sound.setRate(1 / (Math.pow(1.05946309436, newScene.sceneLevel)));
    };
    MetaScene.prototype.preload = function () {
        // load the game assets
        this.load.setBaseURL('assets/');
        this.load.spritesheet('enemy1', 'enemy.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('fastEnemy', 'fastenemy.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('armouredEnemy', 'armoredenemy.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('fatEnemy', 'chonk.png', { frameWidth: 56, frameHeight: 56 });
        this.load.image('bullet', 'bullet.png');
        this.load.spritesheet('tileset', 'tileset.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('towertops', 'towertop.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('towermids', 'towermid.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('towerbases', 'towerbase.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('particle_red', 'particle_red.png');
        this.load.audio("main_music", "gamejam_LD48.ogg");
    };
    MetaScene.prototype.getActiveScene = function () {
        return this.activeScene;
    };
    MetaScene.prototype.getParentScenesToRoot = function () {
        var parentScenes = [];
        var scene = this.getActiveScene();
        while (scene === null || scene === void 0 ? void 0 : scene.sceneParentKey) {
            var parent_1 = this.getSceneByKey(scene.sceneParentKey);
            parentScenes.push(parent_1);
            scene = parent_1;
        }
        return parentScenes;
    };
    MetaScene.prototype.getRootTDScene = function () {
        var scene = this.getActiveScene();
        while (scene === null || scene === void 0 ? void 0 : scene.sceneParentKey) {
            scene = this.getSceneByKey(scene.sceneParentKey);
        }
        return scene;
    };
    return MetaScene;
}(Phaser.Scene));
exports.MetaScene = MetaScene;


/***/ }),

/***/ "./src/scenes/hudScene.ts":
/*!********************************!*\
  !*** ./src/scenes/hudScene.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HudScene = exports.HUD_WIDTH = void 0;
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var playerInfo_1 = __webpack_require__(/*! ../playerInfo */ "./src/playerInfo.ts");
var terrain_1 = __webpack_require__(/*! ../terrain */ "./src/terrain.ts");
var tdScene_1 = __webpack_require__(/*! ./tdScene */ "./src/scenes/tdScene.ts");
var HUD_BG_COLOR = 0xff8a6d; //0xffaa7d
exports.HUD_WIDTH = terrain_1.TILE_SIZE * 3;
var HudScene = /** @class */ (function (_super) {
    __extends(HudScene, _super);
    function HudScene(metaScene) {
        var _this = _super.call(this, {
            active: false,
            visible: true,
            key: "hudScene",
        }) || this;
        _this.lastTime = 0;
        _this.metaScene = metaScene;
        return _this;
    }
    HudScene.prototype.create = function () {
        var _this = this;
        var w = exports.HUD_WIDTH;
        var h = terrain_1.TILE_SIZE * terrain_1.MAX_HEIGHT;
        var xLeft = w / 2;
        var xRight = w + tdScene_1.TD_SCENE_WIDTH + w / 2;
        this.add.rectangle(w / 2, h / 2, w, h, HUD_BG_COLOR);
        this.add.rectangle(xRight, h / 2, w, h, HUD_BG_COLOR);
        this.moneyText = this.add.text(xLeft, 20, "", { fontSize: '20px' });
        this.moneyText.setOrigin(0.5);
        this.hpText = this.add.text(xLeft, 40, "", { fontSize: '20px' });
        this.hpText.setOrigin(0.5);
        this.hpRedness = 0;
        this.waveText = this.add.text(xLeft, 60, "", { fontSize: '20px' });
        this.waveText.setOrigin(0.5);
        this.depthText = this.add.text(xRight, 20, "Depth: ", { fontSize: '20px' });
        this.depthText.setOrigin(0.5);
        this.goUpText = this.add.text(xRight, 50, "Go up to:", { fontSize: '20px' });
        this.goUpText.setOrigin(0.5);
        this.goUpText.setVisible(false);
        this.descriptionText = this.add.text(5, 300, "Description", { fontSize: '10pt' });
        this.descriptionText.setWordWrapWidth(exports.HUD_WIDTH - 10, false);
        this.buyTowerIcons = [];
        var towerTypeIndex = 0;
        for (var _i = 0, TOWER_CONFIGS_1 = config_1.TOWER_CONFIGS; _i < TOWER_CONFIGS_1.length; _i++) {
            var towerConfig = TOWER_CONFIGS_1[_i];
            this.buyTowerIcons.push(new BuyTowerIcon(this, w / 2, 110 + 70 * towerTypeIndex, towerConfig));
            towerTypeIndex++;
        }
        var pad = 3;
        this.slowSpeedText = this.add.text(xLeft, 450, ">Slow<", {
            fontSize: '20px',
            backgroundColor: "#000",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.fastSpeedText = this.add.text(xLeft, 475, "Fast", {
            fontSize: '20px',
            backgroundColor: "#000",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.slowSpeedText.setInteractive().setOrigin(0.5);
        this.fastSpeedText.setInteractive().setOrigin(0.5);
        this.slowSpeedText.on('pointerdown', function () {
            playerInfo_1.PlayerInfo.timeScale = 1, null;
            _this.slowSpeedText.setText(">Slow<");
            _this.fastSpeedText.setText("Fast");
        });
        this.fastSpeedText.on('pointerdown', function () {
            playerInfo_1.PlayerInfo.timeScale = 4, null;
            _this.slowSpeedText.setText("Slow");
            _this.fastSpeedText.setText(">Fast<");
        });
        this.scene.bringToTop('hudScene');
        this.parentScenesImages = [];
    };
    HudScene.prototype.update = function (_, delta) {
        delta *= playerInfo_1.PlayerInfo.timeScale;
        this.lastTime += delta;
        this.moneyText.setText('Money: ' + playerInfo_1.PlayerInfo.money);
        var currentWave = this.metaScene.getRootTDScene().waveManager.currentWave;
        this.waveText.setText("Wave: " + currentWave);
        this.hpText.setText('HP: ' + playerInfo_1.PlayerInfo.hp);
        this.hpText.setColor(Phaser.Display.Color.RGBToString(255, 255 * (1 - this.hpRedness), 255 * (1 - this.hpRedness)));
        var secsToWhite = 0.5;
        this.hpRedness = Math.max(0, this.hpRedness - delta / 1000 / secsToWhite);
        this.updateInfoBasedOnActiveScene();
        for (var _i = 0, _a = this.buyTowerIcons; _i < _a.length; _i++) {
            var icon = _a[_i];
            icon.update(this.lastTime, delta);
        }
    };
    HudScene.prototype.updateInfoBasedOnActiveScene = function () {
        var _this = this;
        var activeScene = this.metaScene.getActiveScene();
        if (!activeScene) {
            return;
        }
        if (activeScene == this.lastActiveScene) {
            return;
        }
        this.lastActiveScene = activeScene;
        this.depthText.setText("Depth: " + activeScene.sceneLevel);
        var parentScenes = this.metaScene.getParentScenesToRoot();
        for (var i = 0; i < this.parentScenesImages.length; i++) {
            var element = this.parentScenesImages[i];
            element.destroy();
        }
        this.goUpText.setVisible(parentScenes.length > 0);
        var _loop_1 = function (i) {
            var sceneIndex = (parentScenes.length - 1) - i;
            var scale = 0.1;
            var maxImagesNormalScaleFit = 7;
            if (parentScenes.length > maxImagesNormalScaleFit) {
                scale /= ((parentScenes.length / maxImagesNormalScaleFit) * 1.022); // NOTE: Drifts, hence re-scale by this magic number, idk why; no time to figure out
            }
            var newButton = this_1.add.image(tdScene_1.TD_SCENE_WIDTH + exports.HUD_WIDTH * 1.5, 100 + sceneIndex * scale * tdScene_1.TD_SCENE_HEIGHT * 1.2, "snap-" + parentScenes[i].scene.key);
            newButton.scaleX = scale;
            newButton.scaleY = scale;
            newButton.setInteractive();
            newButton.on('pointerdown', function () { return _this.metaScene.switchToScene(parentScenes[i].scene.key, false); }, this_1.metaScene);
            this_1.parentScenesImages.push(newButton);
        };
        var this_1 = this;
        for (var i = parentScenes.length - 1; i >= 0; i--) {
            _loop_1(i);
        }
    };
    HudScene.prototype.setDescription = function (config, tower) {
        if (tower === void 0) { tower = null; }
        var level = 1;
        var text = "";
        if (tower === null) {
            text = config.name + ": " + config.description + "\n";
        }
        else {
            text = "Level " + tower.level + " " + config.name + " tower.\n";
            level = tower.level;
        }
        text += "Damage: " + config.damage(level) + ".\n";
        text += "Fire rate: " + config.firerate(level) / 1000 + "s.\n";
        text += "Range: " + config.range(level) + ".\n";
        this.descriptionText.setText(text);
    };
    return HudScene;
}(Phaser.Scene));
exports.HudScene = HudScene;
var BuyTowerIcon = /** @class */ (function () {
    function BuyTowerIcon(hudScene, x, y, config) {
        var _this = this;
        this.hudScene = hudScene;
        this.origX = x;
        this.origY = y;
        this.towerName = config.name;
        this.towerConfig = config;
        var towerBase = hudScene.add.sprite(0, 0, 'towerbases', config.spriteBase);
        towerBase.setTint(config.tintBase);
        var towerMid = hudScene.add.sprite(0, 0, 'towermids', config.spriteMid);
        towerMid.setTint(config.tintMid);
        var towerTop = hudScene.add.sprite(0, 0, 'towertops', config.spriteTop);
        towerTop.setTint(config.tintTop);
        var towerRange = hudScene.add.circle(0, 0, config.range(1), config_1.RANGE_INDICATOR_CONFIG.colour, config_1.RANGE_INDICATOR_CONFIG.alpha);
        towerRange.setStrokeStyle(config_1.RANGE_INDICATOR_CONFIG.edgeWidth, config_1.RANGE_INDICATOR_CONFIG.edgeColour);
        towerRange.setVisible(false);
        var sprites = [
            towerBase,
            towerMid,
            towerTop,
            towerRange,
        ];
        this.spriteContainer = hudScene.add.container(x, y, sprites);
        this.spriteContainer.getAll();
        var pad = 3;
        this.priceText = hudScene.add.text(x + 15, y, "" + this.towerConfig.price, {
            fontSize: "20px",
            color: "white",
            backgroundColor: "black",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.spriteContainer.setSize(terrain_1.TILE_SIZE, terrain_1.TILE_SIZE);
        this.spriteContainer.setInteractive();
        // this.input.on('pointerdown', () => console.log("foobar"), this);
        hudScene.input.setDraggable(this.spriteContainer);
        this.spriteContainer.on('pointerover', function () {
            _this.hudScene.setDescription(config);
        });
        hudScene.input.on('dragstart', function (pointer, gameObject) {
            if (gameObject != _this.spriteContainer) {
                return;
            }
            // This makes range indicator visible
            _this.spriteContainer.list[3].setVisible(true);
            gameObject.list.forEach(function (sprite) {
            });
        }, this);
        hudScene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            if (gameObject != this.spriteContainer) {
                return;
            }
            gameObject.x = dragX;
            gameObject.y = dragY;
        }, this);
        hudScene.input.on('dragend', function (pointer, gameObject) {
            if (gameObject != this.spriteContainer) {
                return;
            }
            // This makes range indicator visible
            this.spriteContainer.list[3].setVisible(false);
            gameObject.list.forEach(function (sprite) {
            });
            var scene = hudScene.metaScene.getActiveScene();
            scene.towerManager.placeTower(pointer, this.towerName);
            gameObject.x = this.origX;
            gameObject.y = this.origY;
        }, this);
    }
    BuyTowerIcon.prototype.resetTint = function () {
        this.spriteContainer.list[0].setTint(this.towerConfig.tintBase);
        this.spriteContainer.list[1].setTint(this.towerConfig.tintMid);
        this.spriteContainer.list[2].setTint(this.towerConfig.tintTop);
    };
    BuyTowerIcon.prototype.setShopIconTint = function (tint) {
        this.spriteContainer.list[0].setTint(tint & this.towerConfig.tintBase);
        this.spriteContainer.list[1].setTint(tint & this.towerConfig.tintMid);
        this.spriteContainer.list[2].setTint(tint & this.towerConfig.tintTop);
    };
    BuyTowerIcon.prototype.update = function (time, delta) {
        // Uncomment to prevent negative money:
        // this.hudScene.input.setDraggable(this.spriteContainer, PlayerInfo.money >= this.towerConfig.price)
        if (playerInfo_1.PlayerInfo.money >= this.towerConfig.price) {
            this.priceText.setTint(0x00ff00);
            this.resetTint();
        }
        else {
            this.priceText.setTint(0xff0000);
            this.setShopIconTint(0x995555);
        }
    };
    return BuyTowerIcon;
}());


/***/ }),

/***/ "./src/scenes/tdScene.ts":
/*!*******************************!*\
  !*** ./src/scenes/tdScene.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDScene = exports.TD_SCENE_HEIGHT = exports.TD_SCENE_WIDTH = exports.SCENE_TRANSITION_MS = void 0;
var towers_1 = __webpack_require__(/*! ../towers */ "./src/towers.ts");
var bullet_1 = __webpack_require__(/*! ../bullet */ "./src/bullet.ts");
var waves_1 = __webpack_require__(/*! ../waves */ "./src/waves.ts");
var towerManager_1 = __webpack_require__(/*! ../towerManager */ "./src/towerManager.ts");
var terrain_1 = __webpack_require__(/*! ../terrain */ "./src/terrain.ts");
var hudScene_1 = __webpack_require__(/*! ./hudScene */ "./src/scenes/hudScene.ts");
var healthBar_1 = __webpack_require__(/*! ../healthBar */ "./src/healthBar.ts");
var playerInfo_1 = __webpack_require__(/*! ../playerInfo */ "./src/playerInfo.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
exports.SCENE_TRANSITION_MS = 500;
exports.TD_SCENE_WIDTH = terrain_1.MAX_WIDTH * terrain_1.TILE_SIZE;
exports.TD_SCENE_HEIGHT = terrain_1.MAX_HEIGHT * terrain_1.TILE_SIZE;
var TDScene = /** @class */ (function (_super) {
    __extends(TDScene, _super);
    function TDScene(config, metaScene) {
        var _this = _super.call(this, {
            active: false,
            visible: false,
            key: config.sceneKey,
        }) || this;
        _this.allEnemies = {};
        _this.nextEnemy = 0;
        _this.frameNumber = 0;
        _this.terrain = config.terrain;
        _this.metaScene = metaScene;
        _this.sceneLevel = config.sceneLevel;
        _this.sceneParentKey = config.sceneParentKey;
        return _this;
    }
    TDScene.prototype.create = function () {
        // this graphics element is only for visualization,
        // its not related to our path
        var graphics = this.add.graphics();
        this.terrain.create(this);
        this.terrain.draw(graphics);
        // the path for our enemies
        // parameters are the start x and y of our path
        this.waveManager = new waves_1.WaveManager(this);
        this.towerManager = new towerManager_1.TowerManager(this);
        for (var _i = 0, ENEMY_CONFIGS_1 = config_1.ENEMY_CONFIGS; _i < ENEMY_CONFIGS_1.length; _i++) {
            var enemy = ENEMY_CONFIGS_1[_i];
            this.allEnemies[enemy.name] = this.physics.add.group({ classType: enemy.class, runChildUpdate: true });
        }
        this.towers = this.add.group({ classType: towers_1.Tower, runChildUpdate: true });
        this.input.on('pointerdown', this.onClick, this);
        this.bullets = this.physics.add.group({ classType: bullet_1.Bullet, runChildUpdate: true });
        for (var eName in this.allEnemies) {
            this.physics.add.overlap(this.allEnemies[eName], this.bullets, this.damageEnemy);
        }
        this.waveManager = new waves_1.WaveManager(this);
        var cam = this.cameras.main;
        cam.scrollX = -hudScene_1.HUD_WIDTH;
    };
    // Only foreground scene has input enabled & is visible; all scenes are being updated
    TDScene.prototype.setIsForeground = function (isForegroundScene, goingInside, i, j) {
        if (i === void 0) { i = null; }
        if (j === void 0) { j = null; }
        this.input.enabled = isForegroundScene;
        if (!isForegroundScene) {
            this.fadeOut(goingInside, i, j);
        }
        else {
            this.fadeIn(goingInside, i, j);
        }
    };
    TDScene.prototype.fadeIn = function (goingInside, i, j) {
        this.cameras.main.pan(this.terrain.w * terrain_1.TILE_SIZE / 2, this.terrain.h * terrain_1.TILE_SIZE / 2, 1);
        this.cameras.main.setZoom((goingInside ? 1 / 3 : 3));
        this.cameras.main.fadeIn(exports.SCENE_TRANSITION_MS, 0, 0, 0);
        this.cameras.main.zoomTo(1, exports.SCENE_TRANSITION_MS, "Linear");
    };
    TDScene.prototype.fadeOut = function (goingInside, i, j) {
        var _this = this;
        // Take a screenshot
        this.game.renderer.snapshotArea(-this.cameras.main.scrollX, -this.cameras.main.scrollY, exports.TD_SCENE_WIDTH, exports.TD_SCENE_HEIGHT, function (image) {
            var snapKey = "snap-" + _this.scene.key;
            if (_this.textures.exists(snapKey)) {
                _this.textures.remove(snapKey);
            }
            _this.textures.addImage(snapKey, image);
            // debugging: show the screenshot
            // document.body.appendChild(image)
        });
        this.cameras.main.fadeOut(exports.SCENE_TRANSITION_MS, 0, 0, 0);
        if (goingInside) {
            var _a = this.terrain.fromGridPos(i, j), x = _a[0], y = _a[1];
            this.cameras.main.zoomTo(3, exports.SCENE_TRANSITION_MS, "Linear");
            this.cameras.main.pan(x, y, exports.SCENE_TRANSITION_MS, "Linear");
        }
        else {
            this.cameras.main.zoomTo(1 / 3, exports.SCENE_TRANSITION_MS, "Linear");
        }
    };
    TDScene.prototype.damageEnemy = function (enemy, bullet) {
        // only if both enemy and bullet are alive
        if (enemy.active === true && bullet.active === true) {
            // we remove the bullet right away
            bullet.hit();
            // decrease the enemy hp with bullet damage
            enemy.receiveDamage(bullet.damage);
        }
    };
    TDScene.prototype.update = function (_, delta) {
        delta *= playerInfo_1.PlayerInfo.timeScale;
        this.frameNumber++;
        this.waveManager.update(delta);
        if (this.frameNumber % 60 == 0) {
            // console.log(`Update th: ${this.scene.key} e: ${this.input.enabled} | l: ${this.sceneLevel} | p: ${this.sceneParent?.scene.key}`)
        }
        if (this.endHealthBar) {
            this.endHealthBar.health = this.towerParent.healthBar.health;
            this.endHealthBar.update(delta);
        }
    };
    TDScene.prototype.addBullet = function (x, y, angle, damage, range, bulletSpeedMod) {
        var bullet = this.bullets.get();
        if (bullet) {
            bullet.fire(x, y, angle, damage, range, bulletSpeedMod);
        }
    };
    TDScene.prototype.toGridPos = function (x, y) {
        var i = Math.floor((x + this.cameras.main.scrollX) / terrain_1.TILE_SIZE);
        var j = Math.floor((y + this.cameras.main.scrollY) / terrain_1.TILE_SIZE);
        return [i, j];
    };
    TDScene.prototype.onClick = function (pointer) {
        var _a = this.toGridPos(pointer.x, pointer.y), i = _a[0], j = _a[1];
        var potentialExistingTower = this.terrain.tryGetExistingTower(i, j);
        if (potentialExistingTower) {
            this.metaScene.switchToScene(potentialExistingTower.getInnerTowerSceneKey(), true, i, j);
        }
        var end = this.terrain.pathTiles[this.terrain.pathTiles.length - 1];
        if (i === end[0] && j === end[1] && this.sceneParentKey) {
            this.metaScene.switchToScene(this.sceneParentKey, false, i, j);
        }
    };
    TDScene.prototype.onEnemyReachedEnd = function (callback) {
        this.enemyEndCallback = callback;
    };
    TDScene.prototype.setTowerParent = function (parent) {
        this.towerParent = parent;
        this.endHealthBar = new healthBar_1.HealthBar(this);
        var _a = this.terrain.pathTiles[this.terrain.pathTiles.length - 1], i = _a[0], j = _a[1];
        var _b = this.terrain.fromGridPos(i, j), x = _b[0], y = _b[1];
        this.endHealthBar.make(x, y, terrain_1.TILE_SIZE - 14, 0.5);
        this.add.container(0, 0, this.endHealthBar);
    };
    TDScene.prototype.getTowerParent = function () {
        return this.towerParent;
    };
    return TDScene;
}(Phaser.Scene));
exports.TDScene = TDScene;


/***/ }),

/***/ "./src/scenes/tdSceneConfig.ts":
/*!*************************************!*\
  !*** ./src/scenes/tdSceneConfig.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TDSceneConfig = void 0;
var TDSceneConfig = /** @class */ (function () {
    function TDSceneConfig(terrain, sceneLevel, sceneParentKey, sceneKey) {
        this.terrain = terrain;
        this.sceneLevel = sceneLevel;
        this.sceneParentKey = sceneParentKey;
        this.sceneKey = sceneKey;
    }
    return TDSceneConfig;
}());
exports.TDSceneConfig = TDSceneConfig;


/***/ }),

/***/ "./src/terrain.ts":
/*!************************!*\
  !*** ./src/terrain.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Terrain = exports.MAX_HEIGHT = exports.MAX_WIDTH = exports.LEVEL_OFFSET = exports.TILE_SIZE = exports.TileType = void 0;
var playerInfo_1 = __webpack_require__(/*! ./playerInfo */ "./src/playerInfo.ts");
var TileType;
(function (TileType) {
    TileType[TileType["Start"] = 0] = "Start";
    TileType[TileType["Path"] = 1] = "Path";
    TileType[TileType["End"] = 2] = "End";
    TileType[TileType["Occupied"] = 3] = "Occupied";
    TileType[TileType["Buildable"] = 4] = "Buildable";
})(TileType = exports.TileType || (exports.TileType = {}));
exports.TILE_SIZE = 64;
exports.LEVEL_OFFSET = 15 * exports.TILE_SIZE;
exports.MAX_WIDTH = 10;
exports.MAX_HEIGHT = 8;
var N_TILESET_SPRITES = 10; // how many sprites are in the tileset?
var Terrain = /** @class */ (function () {
    // todo: generate/load terrain
    function Terrain(width, height) {
        this.w = width;
        this.h = height;
    }
    Terrain.prototype.create = function (scene) {
        this.generate();
        this.setupSprites(scene);
        this.towers = init2DArray(this.w, this.h, null);
    };
    Terrain.prototype.setupSprites = function (scene) {
        var _a;
        var _this = this;
        this.tileSprites = init2DArray(this.w, this.h, TileType.Buildable);
        for (var i = 0; i < this.w; i++) {
            for (var j = 0; j < this.h; j++) {
                this.tileSprites[i][j] = randomFreeSprite();
            }
        }
        var getDir = function (pi) {
            // console.log(this.pathTiles, pi)
            var _a = _this.pathTiles[pi], i1 = _a[0], j1 = _a[1];
            var _b = _this.pathTiles[pi + 1], i2 = _b[0], j2 = _b[1];
            var _c = [i2 - i1, j2 - j1], di = _c[0], dj = _c[1];
            if (di == 1) {
                return 0;
            }
            else if (dj == -1) {
                return 1;
            }
            else if (di == -1) {
                return 2;
            }
            else if (dj == 1) {
                return 3;
            }
            console.error("getDir failed");
            return null;
        };
        for (var pi = 0; pi < this.pathTiles.length; pi++) {
            var _b = this.pathTiles[pi], i1 = _b[0], j1 = _b[1];
            if (pi == 0) {
                this.tileSprites[i1][j1] = 6;
            }
            else if (pi == this.pathTiles.length - 1) {
                this.tileSprites[i1][j1] = 7;
            }
            else {
                var d1 = (getDir(pi - 1) + 2) % 4;
                var d2 = getDir(pi);
                if (d1 > d2) {
                    _a = [d2, d1], d1 = _a[0], d2 = _a[1];
                }
                // Order of sprites (02 meaning d1=0, d2=2):
                // 01 02 03 12 13 23
                if (d1 == 0) {
                    this.tileSprites[i1][j1] = d2 - 1;
                }
                else if (d1 == 1) {
                    this.tileSprites[i1][j1] = d2 + 1;
                }
                else if (d1 == 2) {
                    this.tileSprites[i1][j1] = 5; // only 23 left
                }
            }
        }
        this.tint = Phaser.Display.Color.GetColor(playerInfo_1.PlayerInfo.RNG.integerInRange(180, 255), playerInfo_1.PlayerInfo.RNG.integerInRange(180, 255), playerInfo_1.PlayerInfo.RNG.integerInRange(180, 255));
        for (var i = 0; i < this.w; i++) {
            for (var j = 0; j < this.h; j++) {
                var _c = this.fromGridPos(i, j), x = _c[0], y = _c[1];
                var sprite = scene.add.sprite(x, y, 'tileset', this.tileSprites[i][j]);
                if (this.tiles[i][j] == TileType.Buildable) {
                    sprite.setTint(this.tint);
                }
            }
        }
    };
    Terrain.prototype.draw = function (graphics) {
        // this.drawGrid(graphics)
        graphics.lineStyle(3, 0xffffff, 1);
        // visualize the path
        this.path.draw(graphics);
    };
    Terrain.prototype.drawGrid = function (graphics) {
        graphics.lineStyle(1, 0x0000ff, 0.8);
        for (var i = 0; i <= this.h; i++) {
            graphics.moveTo(0, i * exports.TILE_SIZE);
            graphics.lineTo(exports.TILE_SIZE * 10, i * exports.TILE_SIZE);
        }
        for (var j = 0; j <= this.w; j++) {
            graphics.moveTo(j * exports.TILE_SIZE, 0);
            graphics.lineTo(j * exports.TILE_SIZE, exports.TILE_SIZE * 8);
        }
        graphics.strokePath();
    };
    Terrain.prototype.canPlaceTower = function (i, j) {
        return this.inBounds(i, j) && this.tiles[i][j] === TileType.Buildable;
    };
    Terrain.prototype.tryGetExistingTower = function (i, j) {
        if (i < 0 || j < 0 || i >= this.w || j >= this.h)
            return null;
        return this.towers[i][j];
    };
    Terrain.prototype.placeTower = function (i, j, tower) {
        if (i < 0 || j < 0 || i >= this.w || j >= this.h)
            return null;
        this.tiles[i][j] = TileType.Occupied;
        return this.towers[i][j] = tower;
    };
    Terrain.prototype.generate = function () {
        var path = [];
        var edges = [];
        for (var i = 1; i < this.w - 1; i++) {
            edges.push([i, 0]);
            edges.push([i, this.h - 1]);
        }
        for (var j = 1; j < this.h - 1; j++) {
            edges.push([0, j]);
            edges.push([this.w - 1, j]);
        }
        var success = false;
        var attempts = 0;
        while (!success) {
            var from = randomItem(edges);
            var to = void 0;
            do {
                to = randomItem(edges);
            } while (to == from);
            path = this.randomWalk(from, to);
            var minLength = 25;
            if (path !== null && path.length >= minLength) {
                success = true;
            }
            attempts++;
            if (attempts == 400)
                break;
        }
        console.log("Generated in", attempts, "attempts");
        this.tiles = init2DArray(this.w, this.h, TileType.Buildable);
        for (var i = 0; i < path.length; i++) {
            var _a = this.fromGridPos(path[i][0], path[i][1]), x = _a[0], y = _a[1];
            if (i == 0) {
                // altenatively: this.path = new Phaser.Curves.Path(...)
                // this.path = scene.add.path(x, y)
                this.path = new Phaser.Curves.Path(x, y);
                // scene.addObject(this.path)
            }
            else {
                this.path.lineTo(x, y);
            }
            var setTo = TileType.Path;
            if (i == 0) {
                setTo = TileType.Start;
            }
            else if (i == path.length - 1) {
                setTo = TileType.End;
            }
            this.tiles[path[i][0]][path[i][1]] = setTo;
        }
        console.log("Generated terrain.");
        this.pathTiles = path;
        return path.length;
    };
    Terrain.prototype.randomWalk = function (from, to) {
        var _this = this;
        var path = [];
        var seen = new Set();
        var addToPath = function (pos) {
            if (path.length > 0) {
                for (var _i = 0, _a = _this.neighbors(path[path.length - 1]); _i < _a.length; _i++) {
                    var banned = _a[_i];
                    seen.add(banned.toString());
                }
            }
            path.push(pos);
            seen.add(pos.toString());
        };
        addToPath(from);
        var steps = 0;
        while (path[path.length - 1] != to) {
            steps++;
            if (steps == 100)
                break;
            var pos = path[path.length - 1];
            if (pos.toString() === to.toString()) {
                return path; // Success!
            }
            var cands = this.neighbors(pos);
            cands = cands.filter(function (p) { return !seen.has(p.toString()); });
            if (cands.length === 0) {
                return null; // Fail!
            }
            var next = randomItem(cands);
            addToPath(next);
        }
        return path;
    };
    Terrain.prototype.neighbors = function (pos, pad) {
        var _this = this;
        if (pad === void 0) { pad = 0; }
        var res = [
            [pos[0] + 1, pos[1]],
            [pos[0] - 1, pos[1]],
            [pos[0], pos[1] + 1],
            [pos[0], pos[1] - 1],
        ];
        res = res.filter(function (p) { return _this.inBounds(p[0], p[1]); });
        return res;
    };
    Terrain.prototype.fromGridPos = function (i, j) {
        return [(i + 0.5) * exports.TILE_SIZE, (j + 0.5) * exports.TILE_SIZE];
    };
    Terrain.prototype.inBounds = function (i, j, pad) {
        if (pad === void 0) { pad = 0; }
        return (i >= pad
            && i < this.w - pad
            && j >= pad
            && j < this.h - pad);
    };
    return Terrain;
}());
exports.Terrain = Terrain;
function randomItem(array) {
    return array[Math.floor(playerInfo_1.PlayerInfo.RNG.frac() * array.length)];
}
function randomFreeSprite() {
    var nSpecialSprites = 8;
    return nSpecialSprites + Math.floor(playerInfo_1.PlayerInfo.RNG.frac() * (N_TILESET_SPRITES - nSpecialSprites));
}
function init2DArray(dim1, dim2, value) {
    return new Array(dim1)
        .fill(false)
        .map(function () { return new Array(dim2)
        .fill(value); });
}


/***/ }),

/***/ "./src/towerManager.ts":
/*!*****************************!*\
  !*** ./src/towerManager.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TowerManager = void 0;
var cfg = __webpack_require__(/*! ./config */ "./src/config.ts");
var playerInfo_1 = __webpack_require__(/*! ./playerInfo */ "./src/playerInfo.ts");
var towers = __webpack_require__(/*! ./towers */ "./src/towers.ts");
var TowerManager = /** @class */ (function () {
    function TowerManager(scene) {
        this.towerTypes = {
            'Basic': [towers.BasicTurret, cfg.Basic],
            'Multishot': [towers.MultishotTurret, cfg.Multishot],
            'Sniper': [towers.SniperTurret, cfg.Sniper],
        };
        this.scene = scene;
    }
    TowerManager.prototype.placeTower = function (pointer, towerType) {
        var _a = this.scene.toGridPos(pointer.x, pointer.y), i = _a[0], j = _a[1];
        if (this.scene.terrain.canPlaceTower(i, j)) {
            var tower = this.scene.towers.get();
            var newScene = this.scene.metaScene.addScene(this.scene.scene.key);
            if (tower) {
                tower.make(i, j, newScene.scene.key, this.towerTypes[towerType][1], this.towerTypes[towerType][0]);
                playerInfo_1.PlayerInfo.money -= tower.config.price;
                newScene.setTowerParent(tower);
            }
        }
    };
    return TowerManager;
}());
exports.TowerManager = TowerManager;


/***/ }),

/***/ "./src/towers.ts":
/*!***********************!*\
  !*** ./src/towers.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { GridPosition } from "./terrain";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SniperTurret = exports.MultishotTurret = exports.BasicTurret = exports.Tower = void 0;
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var healthBar_1 = __webpack_require__(/*! ./healthBar */ "./src/healthBar.ts");
var terrain_1 = __webpack_require__(/*! ./terrain */ "./src/terrain.ts");
var config_2 = __webpack_require__(/*! ./config */ "./src/config.ts");
var playerInfo_1 = __webpack_require__(/*! ./playerInfo */ "./src/playerInfo.ts");
// todo: move to scene?
function getEnemy(x, y, range, enemies, numToGet) {
    var outEnemies = [];
    for (var enemyGroup in enemies) {
        var enemyUnits = enemies[enemyGroup].getChildren();
        for (var i = 0; i < enemyUnits.length; i++) {
            if (enemyUnits[i].active && Phaser.Math.Distance.Between(x, y, enemyUnits[i].x, enemyUnits[i].y) <= range) {
                outEnemies.push(enemyUnits[i]);
            }
        }
    }
    if (outEnemies.length > 0) {
        outEnemies.sort(function (a, b) { return b.follower.t - a.follower.t; });
        outEnemies.length = Math.min(numToGet, outEnemies.length);
        return outEnemies;
    }
    return null;
}
var Tower = /** @class */ (function (_super) {
    __extends(Tower, _super);
    function Tower(towerScene) {
        var _this = _super.call(this, towerScene, 0, 0) || this;
        _this.healthBar = new healthBar_1.HealthBar(towerScene);
        _this.scene = towerScene;
        return _this;
    }
    Tower.prototype.make = function (i, j, innerTowerSceneKey, config, towerClassName) {
        var _this = this;
        this.config = config;
        this.stats = this.config;
        this.towerTurret = new towerClassName(this.scene, this.config, this);
        this.towerTurret.setActive(true);
        this.towerTurret.setVisible(true);
        var xCoord = i * terrain_1.TILE_SIZE + terrain_1.TILE_SIZE / 2;
        var yCoord = j * terrain_1.TILE_SIZE + terrain_1.TILE_SIZE / 2;
        this.towerBase = this.scene.add.sprite(xCoord, yCoord, 'towerbases', this.config.spriteBase);
        this.towerBase.setTint(this.config.tintBase);
        this.add(this.towerBase);
        this.towerMid = this.scene.add.sprite(xCoord, yCoord, 'towermids', this.config.spriteMid);
        this.towerMid.setTint(this.config.tintMid);
        this.add(this.towerMid);
        this.rangeIndicator = this.scene.add.circle(xCoord, yCoord, config.range(1), config_2.RANGE_INDICATOR_CONFIG.colour, config_2.RANGE_INDICATOR_CONFIG.alpha);
        this.rangeIndicator.setStrokeStyle(config_2.RANGE_INDICATOR_CONFIG.edgeWidth, config_2.RANGE_INDICATOR_CONFIG.edgeColour);
        this.rangeIndicator.setVisible(false);
        this.add(this.rangeIndicator);
        this.towerBase.setInteractive();
        this.towerBase.on('pointerover', function () {
            _this.scene.children.bringToTop(_this);
            _this.scene.children.list.forEach(function (child) {
                if (child.constructor.name.match(/^.+Enemy$/)) {
                    _this.scene.children.bringToTop(child);
                }
            });
            _this.rangeIndicator.setVisible(true);
            var hudScene = _this.scene.scene.get("hudScene");
            hudScene.setDescription(_this.config, _this);
        });
        this.towerBase.on('pointerout', function () { _this.rangeIndicator.setVisible(false); });
        this.towerTurret.place(i, j, this.scene.terrain);
        this.scene.terrain.placeTower(i, j, this);
        this.add(this.towerTurret);
        this.healthBar.make(xCoord, yCoord + terrain_1.TILE_SIZE / 2 - 8, terrain_1.TILE_SIZE - 14);
        this.add(this.healthBar);
        this.level = 1;
        var pad = 3;
        this.levelText = this.scene.add.text(xCoord + 15, yCoord - 4, "" + this.level, {
            fontSize: "20px",
            color: "white",
            backgroundColor: "black",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.add(this.levelText);
        this.innerTowerSceneKey = innerTowerSceneKey;
        var innerTowerScene = this.scene.scene.get(innerTowerSceneKey);
        innerTowerScene.onEnemyReachedEnd(function (damage) {
            _this.healthBar.health -= damage * config_1.DAMAGE_TO_TOWER_HEALTH_COEF;
        });
    };
    Tower.prototype.update = function (_, delta) {
        delta *= playerInfo_1.PlayerInfo.timeScale;
        this.towerTurret.update(delta);
        this.healthBar.health += config_1.TOWER_HEALTH_REGEN * delta;
        if (this.healthBar.health >= 1.0) {
            this.healthBar.levelUp();
            this.level++;
            this.levelText.setText("" + this.level);
            if (this.stats.range(this.level - 1) < this.stats.range(this.level)) {
                var rangeScale = this.stats.range(this.level) / this.stats.range(1);
                this.rangeIndicator.setScale(rangeScale);
            }
        }
        this.healthBar.update(delta);
    };
    Tower.prototype.getInnerTowerSceneKey = function () {
        return this.innerTowerSceneKey;
    };
    return Tower;
}(Phaser.GameObjects.Container));
exports.Tower = Tower;
var _TowerTurret = /** @class */ (function (_super) {
    __extends(_TowerTurret, _super);
    function _TowerTurret(scene, sprite, tint, parent) {
        var _this = _super.call(this, scene, 0, 0, 'towertops', sprite) || this;
        _this.lastTime = 0;
        _this.parent = parent;
        _this.setTint(tint);
        _this.nextTic = 0;
        return _this;
    }
    // we will place the tower according to the grid
    _TowerTurret.prototype.place = function (i, j, terrain) {
        var _a;
        _a = terrain.fromGridPos(i, j), this.x = _a[0], this.y = _a[1];
    };
    _TowerTurret.prototype.fire = function () {
        var enemies = getEnemy(this.x, this.y, this.parent.stats.range(this.parent.level), this.scene.allEnemies, 1);
        if (enemies) {
            var enemy = enemies[0];
            var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            this.scene.addBullet(this.x, this.y, angle, this.parent.stats.damage(this.parent.level), this.parent.stats.range(this.parent.level), this.parent.stats.bulletSpeedMod);
            this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
            return true;
        }
        return false;
    };
    _TowerTurret.prototype.update = function (delta) {
        this.lastTime += delta;
        if (this.lastTime > this.nextTic) {
            if (this.fire())
                this.nextTic = this.lastTime + this.parent.stats.firerate(this.parent.level);
            else
                this.nextTic = this.lastTime + 50;
        }
    };
    return _TowerTurret;
}(Phaser.GameObjects.Image));
var BasicTurret = /** @class */ (function (_super) {
    __extends(BasicTurret, _super);
    function BasicTurret(scene, config, parent) {
        return _super.call(this, scene, config.spriteTop, config.tintTop, parent) || this;
    }
    return BasicTurret;
}(_TowerTurret));
exports.BasicTurret = BasicTurret;
var MultishotTurret = /** @class */ (function (_super) {
    __extends(MultishotTurret, _super);
    function MultishotTurret(scene, config, parent) {
        return _super.call(this, scene, config.spriteTop, config.tintTop, parent) || this;
    }
    MultishotTurret.prototype.fire = function () {
        var enemies = getEnemy(this.x, this.y, this.parent.stats.range(this.parent.level), this.scene.allEnemies, 3);
        if (enemies && enemies.length > 0) {
            for (var _i = 0, enemies_1 = enemies; _i < enemies_1.length; _i++) {
                var enemy = enemies_1[_i];
                var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
                this.scene.addBullet(this.x, this.y, angle, this.parent.stats.damage(this.parent.level), this.parent.stats.range(this.parent.level), this.parent.stats.bulletSpeedMod);
                this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
            }
            return true;
        }
        return false;
    };
    return MultishotTurret;
}(_TowerTurret));
exports.MultishotTurret = MultishotTurret;
var SniperTurret = /** @class */ (function (_super) {
    __extends(SniperTurret, _super);
    function SniperTurret(scene, config, parent) {
        return _super.call(this, scene, config.spriteTop, config.tintTop, parent) || this;
    }
    return SniperTurret;
}(_TowerTurret));
exports.SniperTurret = SniperTurret;


/***/ }),

/***/ "./src/waves.ts":
/*!**********************!*\
  !*** ./src/waves.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WaveManager = void 0;
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var playerInfo_1 = __webpack_require__(/*! ./playerInfo */ "./src/playerInfo.ts");
// import { Enemy, FatEnemy} from "./enemy";
var WaveManager = /** @class */ (function () {
    function WaveManager(scene) {
        this.currentWave = 0;
        this.nextEnemy = 0;
        this.spawnedEnemies = 0;
        this.deadDanger = 0;
        this.remainingDanger = 0;
        this.waveDifficulty = 0;
        this.nextWaveTime = 0;
        this.respawnQueue = [];
        this.lastTime = 0;
        this.scene = scene;
        // set false for nested behavior in update()
        this.waveActive = (this.scene.sceneLevel > 0);
        if (this.scene.sceneLevel === 0)
            this.getWaveDifficulty();
        else {
            this.lastTime = 1e9; // a lot
        }
    }
    WaveManager.prototype.getWaveDifficulty = function () {
        //TODO: add difficulty scaling and balancing for waves
        this.waveDifficulty = config_1.WaveConfig.outerWaveDanger(this.currentWave);
        this.remainingDanger = this.waveDifficulty;
        this.enemyInterval = config_1.WaveConfig.outerEnemyInterval;
    };
    WaveManager.prototype.nextWave = function () {
        this.waveActive = true;
        this.currentWave++;
        this.getWaveDifficulty();
        playerInfo_1.PlayerInfo.waveHealthRegen();
        console.log('Starting wave ' + this.currentWave + ', wave difficulty: ' + this.waveDifficulty);
    };
    WaveManager.prototype.spawnEnemy = function () {
        var _this = this;
        // TODO: respawning shouldn't reset health
        if (this.respawnQueue.length > 0) {
            var respawn = this.respawnQueue.shift();
            this.remainingDanger -= respawn.danger;
            return this.scene.allEnemies[respawn.name].get();
        }
        var randEnemy = this.getRandEnemy(function (enemy) { return enemy.danger <= _this.remainingDanger; });
        if (randEnemy) {
            this.remainingDanger -= randEnemy.danger;
            return this.scene.allEnemies[randEnemy.name].get();
        }
        this.remainingDanger = 0;
        return null;
    };
    WaveManager.prototype.respawn = function (respawn) {
        this.respawnQueue.push(respawn);
    };
    WaveManager.prototype.update = function (delta) {
        this.lastTime += delta;
        var enemy;
        if (this.scene.sceneLevel === 0) {
            if (!this.waveActive && this.lastTime > this.nextWaveTime) {
                this.nextWave(); // no waves in nested layers
            }
            if (this.remainingDanger > 0 && this.lastTime > this.nextEnemy) {
                enemy = this.spawnEnemy();
            }
            if (this.deadDanger === this.waveDifficulty) {
                console.log("Wave " + this.currentWave + " complete! Next wave in " + config_1.PAUSE_AFTER_WAVE_TIME);
                this.deadDanger = 0;
                this.waveActive = false;
                this.nextWaveTime = this.lastTime + config_1.PAUSE_AFTER_WAVE_TIME;
            }
        }
        else {
            if (!this.queuedEnemy) {
                this.queuedEnemy = this.getRandEnemy(function () { return true; });
            }
            var a = this.lastTime * (config_1.WaveConfig.dangerPerSec(this.scene.getTowerParent().level) * 0.001);
            var b = (this.queuedEnemy.danger * 1.0);
            if (a > b) {
                enemy = this.scene.allEnemies[this.queuedEnemy.name].get();
                // console.log(this.lastTime, b)
                this.queuedEnemy = null;
                this.lastTime = 0;
            }
        }
        if (enemy) {
            enemy.setActive(true);
            enemy.setVisible(true);
            // place the enemy at the start of the path
            enemy.startOnPath(this.currentWave);
            this.spawnedEnemies++;
            this.nextEnemy = this.lastTime + this.enemyInterval;
        }
    };
    WaveManager.prototype.getRandEnemy = function (filter_fn) {
        var availEnemies = [];
        for (var _i = 0, ENEMY_CONFIGS_1 = config_1.ENEMY_CONFIGS; _i < ENEMY_CONFIGS_1.length; _i++) { // Select all enemies that can be spawned
            var enemy = ENEMY_CONFIGS_1[_i];
            if (filter_fn(enemy))
                availEnemies.push(enemy);
        }
        if (availEnemies.length > 0) {
            // Pick a random one of them
            var randEnemy = availEnemies[Math.floor(playerInfo_1.PlayerInfo.RNG.frac() * availEnemies.length)];
            return randEnemy;
        }
        else {
            return null;
        }
    };
    return WaveManager;
}());
exports.WaveManager = WaveManager;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaHVkU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVycmFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90b3dlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q0FBQyxFQUFFLENBQUMsRUFDSixZQUFZLENBQ2Y7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzVC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RUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sU0FBUztTQUNuQjthQUFNO1lBQ0gsT0FBTyxJQUFJO1NBQ2Q7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBbElZLGtDQUFXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXG5cbmV4cG9ydCBjb25zdCBSQURJVVMgPSAxMFxuXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgZHg6IG51bWJlciA9IDBcbiAgICBkeTogbnVtYmVyID0gMFxuICAgIGxpZmVzcGFuOiBudW1iZXIgPSAwXG4gICAgc3BlZWQ6IG51bWJlclxuICAgIGRhbWFnZTogaW50ZWdlclxuXG4gICAgYnVsbGV0SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICAgIHBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyXG4gICAgZW1pdHRlcjogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcblxuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg2MDAsIDEpO1xuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMCwgMCwgJ2J1bGxldCcpXG4gICAgfVxuXG4gICAgZmlyZSh4LCB5LCBhbmdsZSwgZGFtYWdlLCB0b3dlclJhbmdlLCBzcGVlZE1vZCkge1xuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKHRvd2VyUmFuZ2UgKiBzcGVlZE1vZCwgMSk7XG5cblxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJ1bGxldEltYWdlKVxuXG4gICAgICAgIHRoaXMucGFydGljbGVzID0gdGhpcy5zY2VuZS5hZGQucGFydGljbGVzKCdwYXJ0aWNsZV9yZWQnKTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIC8vICBCdWxsZXRzIGZpcmUgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4gdG8gdGhlIGdpdmVuIHgveVxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlLnNldFBvc2l0aW9uKHgsIHkpO1xuXG4gICAgICAgIC8vICB3ZSBkb24ndCBuZWVkIHRvIHJvdGF0ZSB0aGUgYnVsbGV0cyBhcyB0aGV5IGFyZSByb3VuZFxuICAgICAgICAvLyAgdGhpcy5zZXRSb3RhdGlvbihhbmdsZSk7XG4gICAgICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgaG93IHRvIGJyaW5nIHRvIGZyb250XG5cbiAgICAgICAgdGhpcy5keCA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgdGhpcy5keSA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgICAgICB0aGlzLmxpZmVzcGFuID0gMTAwMC9zcGVlZE1vZDtcblxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLnBhcnRpY2xlcy5jcmVhdGVFbWl0dGVyKHtcbiAgICAgICAgICAgIHNwZWVkOiAxMDAsXG4gICAgICAgICAgICBzY2FsZTogeyBzdGFydDogMC4zLCBlbmQ6IDAgfSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXG4gICAgICAgICAgICBsaWZlc3BhbjogMTAwLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLnN0YXJ0Rm9sbG93KHRoaXMuYnVsbGV0SW1hZ2UpO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZXhwbG9kZSgxMCwgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpXG4gICAgfVxuXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xuXG4gICAgICAgIHRoaXMubGlmZXNwYW4gLT0gZGVsdGE7XG5cbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS54ICs9IHRoaXMuZHggKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS55ICs9IHRoaXMuZHkgKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcblxuICAgICAgICAodGhpcy5ib2R5IGFzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5KS5zZXRDaXJjbGUoUkFESVVTLCB0aGlzLmJ1bGxldEltYWdlLngsIHRoaXMuYnVsbGV0SW1hZ2UueSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLmRlc3Ryb3koKTsgLy8gZGlzYWJsZSBlbWl0dG9yIChhbHNvIGNvdWxkIGV4cGxvZGUgaXQpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuL2VuZW15XCI7XG5cbi8vIGVuZW15IGRhbWFnZSAqIERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiA9IGhvdyBtdWNoIGhlYWx0aCB0b3dlciBsb3Nlc1xuLy8gKHRvd2VyIGhlYWx0aCBpcyBmcm9tIDAgdG8gMSlcbmV4cG9ydCBjb25zdCBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSAwLjNcblxuZXhwb3J0IGNvbnN0IFRPV0VSX0hFQUxUSF9SRUdFTiA9IDAuMDAwMDEgKiAyXG5cbmV4cG9ydCBjb25zdCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUgPSAzMDAwO1xuXG5leHBvcnQgY29uc3QgUExBWUVSX0hFQUxUSF9SRUdFTjogbnVtYmVyID0gMDsgIC8vIGhvdyBtdWNoIGhlYWx0aCBwZXIgd2F2ZSwgY2FuIGJlIDwgMVxuXG5leHBvcnQgY29uc3QgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyA9IHtcbiAgICAnY29sb3VyJzogMHhiYmJiZmYsXG4gICAgJ2FscGhhJzogMjEwLFxuICAgICdlZGdlQ29sb3VyJzogMHg4MDgwZmYsXG4gICAgJ2VkZ2VXaWR0aCc6IDRcbn07XG5cbmV4cG9ydCBjb25zdCBXYXZlQ29uZmlnID0ge1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gb3V0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIb3cgbXVjaCB0aW1lIGJldHdlZW4gY29uc2VjdXRpdmUgc3Bhd25zIGluIGEgd2F2ZVxuICAgIG91dGVyRW5lbXlJbnRlcnZhbDogNTAwLFxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBpbiBhIHdhdmVcbiAgICBvdXRlcldhdmVEYW5nZXI6ICh3YXZlKSA9PiB3YXZlICogNDAsXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIGlubmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG93IG11Y2ggZGFuZ2VyIHBlciBzZWNvbmQgaXMgZ2VuZXJhdGVlIGluIGlubmVyIGRlcHRocz9cbiAgICBkYW5nZXJQZXJTZWM6IChsZXZlbCkgPT4gMjArIGxldmVsKjE1LFxufVxuXG5leHBvcnQgdHlwZSBFbmVteUNvbmZpZyA9IHtcbiAgICBuYW1lOiBzdHJpbmcgIC8vIG11c3QgYmUgc2FtZSBhcyBjb25maWcgb2JqZWN0IG5hbWVcbiAgICBjbGFzczogYW55ICAvLyBjbGFzcyBvZiB0aGUgZW5lbXkgYXMgZGVmaW5lZCBpbiAuL2VuZW15LnRzXG4gICAgaHA6IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBjYW4gc2NhbGUgd2l0aCB3YXZlXG4gICAgc3BlZWQ6IG51bWJlciAgLy8gZnJhY3Rpb24gb2YgcGF0aFxuICAgIG1vbmV5OiBpbnRlZ2VyICAvLyBvbi1raWxsIHJld2FyZFxuICAgIGRhbWFnZTogaW50ZWdlciAgLy8gZGFtYWdlIGRlYWx0IG9uIHJlYWNoaW5nIGVuZFxuICAgIGFybW91cjogKGludGVnZXIpID0+IGludGVnZXIgIC8vIGZsYXQgcmVkdWN0aW9uIG9mIGluY29taW5nIGRhbWFnZVxuICAgIGRhbmdlcjogaW50ZWdlciAgLy8gZm9yIGNhbGN1bGF0aW5nIHdhdmUgZGlmZmljdWx0eVxuICAgIHNwcml0ZU5hbWU6IHN0cmluZyAgLy8gc3ByaXRlIGFzIGltcG9ydGVkIGluIG1ldGFTY2VuZS5wcmVsb2FkXG4gICAgdGludDogaW50ZWdlclxuICAgIHNwbGl0PzogeyAgLy8gb3B0aW9uYWwgc3BsaXQgaW5mb1xuICAgICAgICBjZmc6IEVuZW15Q29uZmlnICAvLyBUT0RPOiBtYWtlIHNwbGl0IGludG8gbXVsdGlwbGUgdHlwZXMgcG9zc2libGU/XG4gICAgICAgIGFtb3VudDogaW50ZWdlclxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFdlYWs6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ1dlYWsnLFxuICAgICdjbGFzcyc6IGVuZW0uV2Vha0VuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAyNSxcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXG4gICAgJ21vbmV5JzogMSxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDIwLFxuICAgICdzcHJpdGVOYW1lJzogJ2VuZW15MScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbn1cblxuZXhwb3J0IGNvbnN0IEZhdDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnRmF0JyxcbiAgICAnY2xhc3MnOiBlbmVtLkZhdEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxMDAsXG4gICAgJ3NwZWVkJzogMSAvIDQwMDAwLFxuICAgICdtb25leSc6IDIsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxuICAgICdkYW5nZXInOiAyNDAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZmF0RW5lbXknLFxuICAgICd0aW50JzogMHhmZmZmZmYsXG59XG5cbmV4cG9ydCBjb25zdCBBcm1vdXJlZDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnQXJtb3VyZWQnLFxuICAgICdjbGFzcyc6IGVuZW0uQXJtb3VyZWRFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMzAsXG4gICAgJ3NwZWVkJzogMSAvIDMwMDAwLFxuICAgICdtb25leSc6IDIsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiA0LFxuICAgICdkYW5nZXInOiAxNjAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnYXJtb3VyZWRFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbn1cblxuZXhwb3J0IGNvbnN0IEZhc3Q6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ0Zhc3QnLFxuICAgICdjbGFzcyc6IGVuZW0uRmFzdEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxNSxcbiAgICAnc3BlZWQnOiAxIC8gMTAwMDAsXG4gICAgJ21vbmV5JzogMSxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDgwLFxuICAgICdzcHJpdGVOYW1lJzogJ2Zhc3RFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbn1cblxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyOiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdTcGxpdHRlcicsXG4gICAgJ2NsYXNzJzogZW5lbS5TcGxpdHRlckVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxNSxcbiAgICAnc3BlZWQnOiAxIC8gMzAwMDAsXG4gICAgJ21vbmV5JzogMSxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDYwLFxuICAgICdzcHJpdGVOYW1lJzogJ2VuZW15MScsXG4gICAgJ3RpbnQnOiAweGZmNzA3MCxcbiAgICAnc3BsaXQnOiB7XG4gICAgICAgICdjZmcnOiBXZWFrLFxuICAgICAgICAnYW1vdW50JzogMlxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEVORU1ZX0NPTkZJR1MgPSBbV2VhaywgRmF0LCBBcm1vdXJlZCwgRmFzdCwgU3BsaXR0ZXJdXG5cblxuZXhwb3J0IHR5cGUgVG93ZXJDb25maWcgPSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgZGFtYWdlOiAoaW50ZWdlcikgPT4gbnVtYmVyXG4gICAgZmlyZXJhdGU6IChpbnRlZ2VyKSA9PiBudW1iZXIgIC8vIG1pbGlzZWNvbmRzIGJldHdlZW4gZWFjaCBzaG90XG4gICAgcmFuZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcbiAgICBidWxsZXRTcGVlZE1vZDogbnVtYmVyICAvLyBidWxsZXQgd2lsbCByZWFjaCByYW5nZSBpbiAxL2J1bGxldFNwZWVkTW9kIHNlY29uZHNcbiAgICBwcmljZTogbnVtYmVyXG4gICAgc3ByaXRlQmFzZTogaW50ZWdlclxuICAgIHNwcml0ZU1pZDogaW50ZWdlclxuICAgIHNwcml0ZVRvcDogaW50ZWdlclxuICAgIHRpbnRCYXNlOiBpbnRlZ2VyXG4gICAgdGludE1pZDogaW50ZWdlclxuICAgIHRpbnRUb3A6IGludGVnZXJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgQmFzaWM6IFRvd2VyQ29uZmlnID0ge1xuICAgICduYW1lJzogXCJCYXNpY1wiLFxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiAxMCArIDE1ICogKGxldmVsLTEpLFxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IE1hdGgubWF4KCAxNTAwIC0gNTAgKiBsZXZlbCwgMTAwMCksXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gMTI1LFxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXG4gICAgJ3ByaWNlJzogNSxcbiAgICAnc3ByaXRlQmFzZSc6IDAsXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXG4gICAgJ3Nwcml0ZVRvcCc6IDAsXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRNaWQnOiAweGZmZmZmZixcbiAgICAndGludFRvcCc6IDB4YWFhYWZmLFxuICAgICdkZXNjcmlwdGlvbic6IFwiTm90aGluZyBmYW5jeS4gRGFtYWdlIGFuZCBmaXJlIHJhdGUgZ3JvdyB3aXRoIGxldmVsLlwiLFxufVxuXG5cbmV4cG9ydCBjb25zdCBTbmlwZXI6IFRvd2VyQ29uZmlnID0ge1xuICAgICduYW1lJzogXCJTbmlwZXJcIixcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMjUgKyA1MCAqIChsZXZlbC0xKSxcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiA0MDAwLFxuICAgICdyYW5nZSc6IGxldmVsID0+IDIwMCArIDM1ICogbGV2ZWwsXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNSxcbiAgICAncHJpY2UnOiAyMCxcbiAgICAnc3ByaXRlQmFzZSc6IDAsXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXG4gICAgJ3Nwcml0ZVRvcCc6IDEsXG4gICAgJ3RpbnRCYXNlJzogMHhiYmZmYmIsXG4gICAgJ3RpbnRNaWQnOiAweGZmZmZmZixcbiAgICAndGludFRvcCc6IDB4MDBmZjAwLFxuICAgICdkZXNjcmlwdGlvbic6IFwiTG9uZyByYW5nZSwgYnV0IGZpcmVzIHNsb3dseS4gRGFtYWdlIGFuZCByYW5nZSBncm93IHdpdGggbGV2ZWwuXCIsXG59XG5cblxuZXhwb3J0IGNvbnN0IE11bHRpc2hvdDogVG93ZXJDb25maWcgPSB7XG4gICAgJ25hbWUnOiBcIk11bHRpc2hvdFwiLFxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiA1ICsgMTAqKGxldmVsLTEpLFxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IE1hdGgubWF4KDEzMDAgLSA1MCpsZXZlbCwgMTAwMCksXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gOTAsXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNCxcbiAgICAncHJpY2UnOiAxMCxcbiAgICAnc3ByaXRlQmFzZSc6IDAsXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXG4gICAgJ3Nwcml0ZVRvcCc6IDIsXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRNaWQnOiAweGZmZmZmZixcbiAgICAndGludFRvcCc6IDB4ZmYwMDAwLFxuICAgICdkZXNjcmlwdGlvbic6IFwiQ2FuIHNob290IGF0IG11bHRpcGxlIGVuZW1pZXMgYXQgb25jZS4gRGFtYWdlIGFuZCBmaXJlIHJhdGUgZ3JvdyB3aXRoIGxldmVsLlwiLFxufVxuXG5leHBvcnQgY29uc3QgVE9XRVJfQ09ORklHUyA9IFtCYXNpYywgTXVsdGlzaG90LCBTbmlwZXJdIiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uLCBQb3NpdGlvbiwgVGVycmFpbiB9IGZyb20gXCIuL3RlcnJhaW5cIjtcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcbmltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IEh1ZFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2h1ZFNjZW5lXCI7XG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvTWV0YVNjZW5lXCI7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xuICAgIHN0YXRzOiBjZmcuRW5lbXlDb25maWc7XG5cbiAgICBmb2xsb3dlcjogYW55XG4gICAgaHA6IGludGVnZXJcbiAgICB5T2Zmc2V0OiBudW1iZXIgPSBQaGFzZXIuTWF0aC5STkQuaW50ZWdlckluUmFuZ2UoLTIwLCAyMCk7XG4gICAgeE9mZnNldDogbnVtYmVyID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKC0yMCwgMjApO1xuICAgIHNjZW5lOiBURFNjZW5lIC8vIHR5cGUgYXNzZXJ0aW9uXG4gICAgc3BlZWQ6IG51bWJlcjtcblxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIHN0YXRzKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCBzdGF0cy5zcHJpdGVOYW1lKTtcblxuICAgICAgICB0aGlzLnN0YXRzID0gc3RhdHM7XG4gICAgICAgIHRoaXMuZm9sbG93ZXIgPSB7IHQ6IDAsIHZlYzogbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoKSB9O1xuICAgIH1cblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcbiAgICAgICAgLy8gbW92ZSB0aGUgdCBwb2ludCBhbG9uZyB0aGUgcGF0aCwgMCBpcyB0aGUgc3RhcnQgYW5kIDEgaXMgdGhlIGVuZFxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xuXG4gICAgICAgIC8vIGdldCB0aGUgbmV3IHggYW5kIHkgY29vcmRpbmF0ZXMgaW4gdmVjXG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KHRoaXMuZm9sbG93ZXIudCwgdGhpcy5mb2xsb3dlci52ZWMpO1xuXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnZlYy54ID4gdGhpcy54IC0gdGhpcy54T2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA8IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IHRydWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBlbmVteSB4IGFuZCB5IHRvIHRoZSBuZXdseSBvYnRhaW5lZCB4IGFuZCB5XG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5mb2xsb3dlci52ZWMueCArIHRoaXMueE9mZnNldCwgdGhpcy5mb2xsb3dlci52ZWMueSArIHRoaXMueU9mZnNldCk7XG5cbiAgICAgICAgLy8gaWYgd2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdGgsIHJlbW92ZSB0aGUgZW5lbXlcbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWNoRW5kKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxXG4gICAgfVxuXG4gICAgcmVhY2hFbmQoKSB7XG4gICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIucmVtYWluaW5nRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGh1ZFNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJodWRTY2VuZVwiKSBhcyBIdWRTY2VuZVxuXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmhwIC09IHRoaXMuc3RhdHMuZGFtYWdlO1xuICAgICAgICAgICAgaHVkU2NlbmUuaHBSZWRuZXNzID0gMVxuXG4gICAgICAgICAgICBjb25zdCBtZXRhU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcIm1ldGFTY2VuZVwiKSBhcyBNZXRhU2NlbmVcbiAgICAgICAgICAgIG1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpLmNhbWVyYXMubWFpbi5zaGFrZSgyMDAsIDAuMDA1KVxuXG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlc3Bhd24odGhpcy5zdGF0cyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zY2VuZS5lbmVteUVuZENhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmVuZW15RW5kQ2FsbGJhY2sodGhpcy5zdGF0cy5kYW1hZ2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydE9uUGF0aCh3YXZlLCBzdGFydF90ID0gMCkge1xuICAgICAgICAvLyBzZXQgdGhlIHQgcGFyYW1ldGVyIGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgPSBzdGFydF90O1xuXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLnN0YXRzLmhwKHdhdmUpO1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zdGF0cy5zcGVlZDtcbiAgICAgICAgdGhpcy50aW50ID0gdGhpcy5zdGF0cy50aW50O1xuXG4gICAgICAgIC8vIGdldCB4IGFuZCB5IG9mIHRoZSBnaXZlbiB0IHBvaW50XG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KHRoaXMuZm9sbG93ZXIudCwgdGhpcy5mb2xsb3dlci52ZWMpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgeCBhbmQgeSBvZiBvdXIgZW5lbXkgdG8gdGhlIHJlY2VpdmVkIGZyb20gdGhlIHByZXZpb3VzIHN0ZXBcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmZvbGxvd2VyLnZlYy54LCB0aGlzLmZvbGxvd2VyLnZlYy55KTtcblxuICAgICAgICBsZXQgZnJhbWVSYXRlID0gTWF0aC5taW4oNjAsIHRoaXMuc3RhdHMuc3BlZWQgKiA0MDAwMCAqIDE1KVxuICAgICAgICBpZiAodGhpcy5zdGF0cy5zcHJpdGVOYW1lID09IFwiZmF0RW5lbXlcIikgeyAvLyBoYWNrXG4gICAgICAgICAgICBmcmFtZVJhdGUgKj0gMC41XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoe1xuICAgICAgICAgICAga2V5OiBgJHt0aGlzLnN0YXRzLnNwcml0ZU5hbWV9X3dhbGtgLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiBmcmFtZVJhdGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZURhbWFnZShkYW1hZ2U6IGludGVnZXIpIHtcbiAgICAgICAgdGhpcy5ocCAtPSBkYW1hZ2UgLSB0aGlzLnN0YXRzLmFybW91cih0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlKTtcblxuICAgICAgICAvLyBpZiBocCBkcm9wcyBiZWxvdyAwIHdlIGRlYWN0aXZhdGUgdGhpcyBlbmVteVxuICAgICAgICBpZiAodGhpcy5ocCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5vbkRlYXRoKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVhdGgoKSB7XG4gICAgICAgIHRoaXMub25EZWF0aEFiaWxpdHkoKTtcblxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7ICAvLyBBZGQgZ29sZCBpbiBiYXNlIGxheWVyIG9ubHlcbiAgICAgICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuZGVhZERhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlclxuICAgICAgICAgICAgUGxheWVySW5mby5tb25leSArPSB0aGlzLnN0YXRzLm1vbmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgICAgIGFuZ2xlOiBQbGF5ZXJJbmZvLlJORy5zaWduKCkgKiAxODAsXG4gICAgICAgICAgICBzY2FsZTogMC41LFxuICAgICAgICAgICAgZHVyYXRpb246IFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDYwMCwgODAwKSxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGVhdGhBYmlsaXR5KCkgeyAgLy8gb3ZlcnJpZGUgdGhpcyBmb3Igc3BlY2lhbCBvbi1kZWF0aCBhYmlsaXRpZXNcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWFrRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuV2VhaylcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYXRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5GYXQpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJtb3VyZWRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5Bcm1vdXJlZClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYXN0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuRmFzdClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdHRlckVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyKVxuICAgIH1cblxuICAgIG9uRGVhdGhBYmlsaXR5KCkge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdHMuc3BsaXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUiBtaXNzaW5nIHNwbGl0IGNvbmZpZyBvbiAnICsgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0cy5zcGxpdC5hbW91bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IG5ld0VuZW15ID0gdGhpcy5zY2VuZS5hbGxFbmVtaWVzW3RoaXMuc3RhdHMuc3BsaXQuY2ZnLm5hbWVdLmdldCgpXG4gICAgICAgICAgICBuZXdFbmVteS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgbmV3RW5lbXkuc2V0QWN0aXZlKHRydWUpO1xuXG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmRlYWREYW5nZXIgLT0gdGhpcy5zdGF0cy5zcGxpdC5jZmcuZGFuZ2VyO1xuICAgICAgICAgICAgbmV3RW5lbXkuc3RhcnRPblBhdGgodGhpcy5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZSwgdGhpcy5mb2xsb3dlci50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXG5pbXBvcnQgeyBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCJcblxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuICAgIHN0YXRpYyBIRUFMVEhfQ09MT1IgPSAweGY4ZmYzNiAvLzB4ZmY0NDQ0XG4gICAgc3RhdGljIEhFQUxUSF9MT1NTX0NPTE9SID0gMHg3ZDdkN2QgLy8gMHg0NGZmNDRcblxuICAgIHNjZW5lOiBURFNjZW5lXG5cbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlciA9IDEgIC8vIDAgdG8gMVxuICAgIHNsb3dIZWFsdGg6IG51bWJlclxuXG4gICAgYmdCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBoZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBzbG93SGVhbHRoQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG5cbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgbWF4SGVhbHRoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKVxuICAgIH1cblxuICAgIG1ha2UoeCwgeSwgd2lkdGgsIGhlYWx0aD0wKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcblxuICAgICAgICAvLyBoZWFsdGggYmFyIGJhc2UvYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmJnQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoICsgNCwgNiwgMHgwMDAwMDApXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYmdCYXIpXG5cbiAgICAgICAgLy8gdmlzdWFsaXphdGlvbiBvZiBoZWFsdGggbG9zc2VzXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICB3aWR0aCwgNCxcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfTE9TU19DT0xPUixcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLnNsb3dIZWFsdGhCYXIpXG4gICAgICAgIFxuICAgICAgICAvLyBoZWFsdGggYmFyIGl0c2VsZlxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICB3aWR0aCwgNCxcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfQ09MT1IsXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXG5cbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGhcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gaGVhbHRoXG4gICAgfVxuXG4gICAgc2V0IGhlYWx0aChoKSB7XG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGgpKVxuICAgIH1cblxuICAgIGdldCBoZWFsdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGhcbiAgICB9XG5cbiAgICBwdWJsaWMgbGV2ZWxVcCgpIHtcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YSkge1xuICAgICAgICBjb25zdCBjb2VmID0gTWF0aC5wb3coMC45OSwgZGVsdGEvMTAwMCAqIDYwKVxuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSBjb2VmICogdGhpcy5zbG93SGVhbHRoICsgKDEgLSBjb2VmKSAqIHRoaXMuaGVhbHRoXG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5oZWFsdGhcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2xvd0hlYWx0aFxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IHsgSHVkU2NlbmUsIEhVRF9XSURUSCB9IGZyb20gJy4vc2NlbmVzL2h1ZFNjZW5lJztcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gJy4vc2NlbmVzL01ldGFTY2VuZSc7XG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZSdcbmltcG9ydCB7IFREU2NlbmVDb25maWcgfSBmcm9tICcuL3NjZW5lcy90ZFNjZW5lQ29uZmlnJztcbmltcG9ydCB7IFRlcnJhaW4gfSBmcm9tICcuL3RlcnJhaW4nO1xuXG5sZXQgbWV0YVNjZW5lID0gbmV3IE1ldGFTY2VuZSgpXG5sZXQgaHVkU2NlbmUgPSBuZXcgSHVkU2NlbmUobWV0YVNjZW5lKTtcblxubGV0IGxldmVscyA9IFtcbiAgbWV0YVNjZW5lLFxuICBodWRTY2VuZSxcbl1cblxuY29uc3QgZ2FtZUNvbmZpZyA9IHtcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHBhcmVudDogJ2NvbnRlbnQnLFxuICB3aWR0aDogVERfU0NFTkVfV0lEVEggKyBIVURfV0lEVEggKiAyLFxuICBoZWlnaHQ6IFREX1NDRU5FX0hFSUdIVCxcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnXG4gIH0sXG4gIHNjZW5lOiBsZXZlbHMsXG4gIHNlZWQ6IFtcIjQyXCJdXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBQTEFZRVJfSEVBTFRIX1JFR0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbmZvIHtcbiAgICBzdGF0aWMgbW9uZXk6IG51bWJlciA9IDEwO1xuICAgIHN0YXRpYyBocDogbnVtYmVyID0gMTA7XG4gICAgc3RhdGljIHRpbWVTY2FsZTogbnVtYmVyID0gMTtcbiAgICBzdGF0aWMgUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoW1wiNDJcIl0pXG5cbiAgICBzdGF0aWMgcmVnZW5Qcm9ncmVzczogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBzdGF0aWMgd2F2ZUhlYWx0aFJlZ2VuKCkge1xuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgKz0gUExBWUVSX0hFQUxUSF9SRUdFTjtcbiAgICAgICAgbGV0IHJlc3RvcmVkID0gTWF0aC5mbG9vcihQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MpO1xuICAgICAgICBQbGF5ZXJJbmZvLmhwICs9IHJlc3RvcmVkO1xuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgLT0gcmVzdG9yZWQ7XG4gICAgfVxufSIsImltcG9ydCB7IFRlcnJhaW4gfSBmcm9tIFwiLi4vdGVycmFpblwiXG5pbXBvcnQgeyBTQ0VORV9UUkFOU0lUSU9OX01TLCBURFNjZW5lIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xuaW1wb3J0IHsgVERTY2VuZUNvbmZpZyB9IGZyb20gXCIuL3RkU2NlbmVDb25maWdcIlxuXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcbiAgICBhY3RpdmU6IHRydWUsXG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBrZXk6ICdtZXRhU2NlbmUnLFxufTtcblxuZXhwb3J0IGNsYXNzIE1ldGFTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cbiAgICBwdWJsaWMgc2NlbmVzOiBURFNjZW5lW11cbiAgICBwdWJsaWMgYWN0aXZlU2NlbmU6IFREU2NlbmVcbiAgICBtYWluU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xuICAgICAgICB0aGlzLnNjZW5lcyA9IFtdO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSB0aGlzLmFkZFNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmVzWzBdLnNjZW5lLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJodWRTY2VuZVwiKTtcblxuICAgICAgICB0aGlzLm1haW5Tb3VuZCA9IHRoaXMuc291bmQuYWRkKFwibWFpbl9tdXNpY1wiLCB7IFwibG9vcFwiOiB0cnVlLCBcInZvbHVtZVwiOiAwLjEgfSk7XG4gICAgICAgIHRoaXMubWFpblNvdW5kLnBsYXkoKTtcblxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdlbmVteTFfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2VuZW15MScsIHsgc3RhcnQ6IDAsIGVuZDogNyB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdmYXN0RW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2Zhc3RFbmVteScsIHsgc3RhcnQ6IDAsIGVuZDogNyB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdmYXRFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZmF0RW5lbXknLCB7IHN0YXJ0OiAwLCBlbmQ6IDkgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnYXJtb3VyZWRFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnYXJtb3VyZWRFbmVteScsIHsgc3RhcnQ6IDAsIGVuZDogNyB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZXMgbmV3IFNjZW5lLCBlbmFibGVzIGl0LCBhbmQgc2V0cyBpdCBpbnZpc2libGVcbiAgICBwdWJsaWMgYWRkU2NlbmUocGFyZW50U2NlbmVLZXk/OiBzdHJpbmcpOiBURFNjZW5lIHtcbiAgICAgICAgbGV0IHBhcmVudFNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHBhcmVudFNjZW5lS2V5KVxuICAgICAgICBsZXQgc2NlbmVMZXZlbCA9IChwYXJlbnRTY2VuZT8uc2NlbmVMZXZlbCA/PyAtMSkgKyAxO1xuXG4gICAgICAgIGxldCBzY2VuZUluZGV4ID0gdGhpcy5zY2VuZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY2VuZUtleSA9IGB0ZFNjZW5lJHtzY2VuZUluZGV4fWBcblxuICAgICAgICBsZXQgbmV3U2NlbmUgPSBuZXcgVERTY2VuZShcbiAgICAgICAgICAgIG5ldyBURFNjZW5lQ29uZmlnKG5ldyBUZXJyYWluKDEwLCA4KSwgc2NlbmVMZXZlbCwgcGFyZW50U2NlbmVLZXksIHNjZW5lS2V5KSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoXG4gICAgICAgICAgICBzY2VuZUtleSxcbiAgICAgICAgICAgIG5ld1NjZW5lLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKG5ld1NjZW5lKVxuICAgICAgICBuZXdTY2VuZS5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xuXG4gICAgICAgIHJldHVybiBuZXdTY2VuZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0U2NlbmVCeUtleShrZXk/OiBzdHJpbmcpOiBURFNjZW5lIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuZ2V0KGtleSkgYXMgVERTY2VuZVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyBtYWtlcyBjdXJyZW50IHNjZW5lIGludmlzaWJsZSwgbWFrZXMgbmV3IHNjZW5lIHZpc2libGU7IGRvZXNuJ3QgY2hhbmdlIGFjdGl2bmVzc1xuICAgIHB1YmxpYyBzd2l0Y2hUb1NjZW5lKG5ld1NjZW5lS2V5OiBzdHJpbmcsIGdvaW5nSW5zaWRlOiBib29sZWFuLCBpID0gMCwgaiA9IDApIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZT8uc2V0SXNGb3JlZ3JvdW5kKGZhbHNlLCBnb2luZ0luc2lkZSwgaSwgaik7XG4gICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShuZXdTY2VuZUtleSlcblxuICAgICAgICBuZXdTY2VuZS50aW1lLmFkZEV2ZW50KHtcbiAgICAgICAgICAgIGRlbGF5OiBTQ0VORV9UUkFOU0lUSU9OX01TLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNjZW5lLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSBuZXdTY2VuZVxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldElzRm9yZWdyb3VuZCh0cnVlLCBnb2luZ0luc2lkZSwgaSwgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMS4wNTk0NjMwOTQzNiB+IDJeKDEvMTIpLCBpLmUuIG9uZSBzZW1pdG9uZVxuICAgICAgICB0aGlzLnNvdW5kLnNldFJhdGUoMSAvIChNYXRoLnBvdygxLjA1OTQ2MzA5NDM2LCBuZXdTY2VuZS5zY2VuZUxldmVsKSkpXG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIC8vIGxvYWQgdGhlIGdhbWUgYXNzZXRzXG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdhc3NldHMvJylcblxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2VuZW15MScsICdlbmVteS5wbmcnLCB7IGZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDggfSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZmFzdEVuZW15JywgJ2Zhc3RlbmVteS5wbmcnLCB7IGZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDggfSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYXJtb3VyZWRFbmVteScsICdhcm1vcmVkZW5lbXkucG5nJywgeyBmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4IH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2ZhdEVuZW15JywgJ2Nob25rLnBuZycsIHsgZnJhbWVXaWR0aDogNTYsIGZyYW1lSGVpZ2h0OiA1NiB9KTtcblxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdidWxsZXQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndGlsZXNldCcsXG4gICAgICAgICAgICAndGlsZXNldC5wbmcnLFxuICAgICAgICAgICAgeyBmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0IH1cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcnRvcHMnLFxuICAgICAgICAgICAgJ3Rvd2VydG9wLnBuZycsXG4gICAgICAgICAgICB7IGZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjQgfVxuICAgICAgICApXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJtaWRzJyxcbiAgICAgICAgICAgICd0b3dlcm1pZC5wbmcnLFxuICAgICAgICAgICAgeyBmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0IH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VyYmFzZXMnLFxuICAgICAgICAgICAgJ3Rvd2VyYmFzZS5wbmcnLFxuICAgICAgICAgICAgeyBmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0IH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BhcnRpY2xlX3JlZCcsICdwYXJ0aWNsZV9yZWQucG5nJyk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKFwibWFpbl9tdXNpY1wiLCBcImdhbWVqYW1fTEQ0OC5vZ2dcIilcbiAgICB9XG5cbiAgICBnZXRBY3RpdmVTY2VuZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlU2NlbmU7XG4gICAgfVxuXG4gICAgZ2V0UGFyZW50U2NlbmVzVG9Sb290KCkge1xuICAgICAgICBsZXQgcGFyZW50U2NlbmVzOiBURFNjZW5lW10gPSBbXVxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldEFjdGl2ZVNjZW5lKCk7XG5cbiAgICAgICAgd2hpbGUgKHNjZW5lPy5zY2VuZVBhcmVudEtleSkge1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U2NlbmVCeUtleShzY2VuZS5zY2VuZVBhcmVudEtleSlcbiAgICAgICAgICAgIHBhcmVudFNjZW5lcy5wdXNoKHBhcmVudCk7XG4gICAgICAgICAgICBzY2VuZSA9IHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRTY2VuZXM7XG4gICAgfVxuXG4gICAgZ2V0Um9vdFREU2NlbmUoKSB7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0QWN0aXZlU2NlbmUoKTtcblxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50S2V5KSB7XG4gICAgICAgICAgICBzY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShzY2VuZS5zY2VuZVBhcmVudEtleSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzY2VuZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUb3dlckNvbmZpZywgVE9XRVJfQ09ORklHUywgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgTUFYX0hFSUdIVCwgTUFYX1dJRFRILCBUZXJyYWluLCBUSUxFX1NJWkUgfSBmcm9tIFwiLi4vdGVycmFpblwiO1xuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi4vdG93ZXJzXCI7XG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9NZXRhU2NlbmVcIjtcbmltcG9ydCB7IFREU2NlbmUsIFREX1NDRU5FX0hFSUdIVCwgVERfU0NFTkVfV0lEVEggfSBmcm9tIFwiLi90ZFNjZW5lXCI7XG5cbmNvbnN0IEhVRF9CR19DT0xPUiA9IDB4ZmY4YTZkICAvLzB4ZmZhYTdkXG5leHBvcnQgY29uc3QgSFVEX1dJRFRIID0gVElMRV9TSVpFICogM1xuXG5leHBvcnQgY2xhc3MgSHVkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuXG4gICAgbW9uZXlUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIHdhdmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGhwVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBocFJlZG5lc3M6IG51bWJlciAvLyAwIHRvIDFcbiAgICBkZXB0aFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgZ29VcFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgZGVzY3JpcHRpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmU7XG4gICAgYmFja1RvUm9vdFNjZW5lQnV0dG9uOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBidXlUb3dlckljb25zOiBCdXlUb3dlckljb25bXVxuXG4gICAgbGFzdEFjdGl2ZVNjZW5lOiBURFNjZW5lXG4gICAgcGFyZW50U2NlbmVzSW1hZ2VzOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VbXVxuICAgIHNsb3dTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICAgIGZhc3RTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuXG4gICAgY29uc3RydWN0b3IobWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBrZXk6IFwiaHVkU2NlbmVcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IHcgPSBIVURfV0lEVEhcbiAgICAgICAgbGV0IGggPSBUSUxFX1NJWkUgKiBNQVhfSEVJR0hUXG4gICAgICAgIGNvbnN0IHhMZWZ0ID0gdyAvIDJcbiAgICAgICAgY29uc3QgeFJpZ2h0ID0gdyArIFREX1NDRU5FX1dJRFRIICsgdyAvIDJcblxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUodyAvIDIsIGggLyAyLCB3LCBoLCBIVURfQkdfQ09MT1IpXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIHhSaWdodCwgaCAvIDIsXG4gICAgICAgICAgICB3LCBoLFxuICAgICAgICAgICAgSFVEX0JHX0NPTE9SLFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5tb25leVRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCAyMCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLm1vbmV5VGV4dC5zZXRPcmlnaW4oMC41KVxuICAgICAgICB0aGlzLmhwVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMuaHBUZXh0LnNldE9yaWdpbigwLjUpXG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gMFxuXG4gICAgICAgIHRoaXMud2F2ZVRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA2MCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLndhdmVUZXh0LnNldE9yaWdpbigwLjUpXG5cbiAgICAgICAgdGhpcy5kZXB0aFRleHQgPSB0aGlzLmFkZC50ZXh0KHhSaWdodCwgMjAsIFwiRGVwdGg6IFwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMuZGVwdGhUZXh0LnNldE9yaWdpbigwLjUpXG5cbiAgICAgICAgdGhpcy5nb1VwVGV4dCA9IHRoaXMuYWRkLnRleHQoeFJpZ2h0LCA1MCwgXCJHbyB1cCB0bzpcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldE9yaWdpbigwLjUpXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgMzAwLCBcIkRlc2NyaXB0aW9uXCIsIHsgZm9udFNpemU6ICcxMHB0JyB9KTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0V29yZFdyYXBXaWR0aChIVURfV0lEVEggLSAxMCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucyA9IFtdO1xuICAgICAgICBsZXQgdG93ZXJUeXBlSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0b3dlckNvbmZpZyBvZiBUT1dFUl9DT05GSUdTKSB7XG4gICAgICAgICAgICB0aGlzLmJ1eVRvd2VySWNvbnMucHVzaChuZXcgQnV5VG93ZXJJY29uKHRoaXMsIHcgLyAyLCAxMTAgKyA3MCAqIHRvd2VyVHlwZUluZGV4LCB0b3dlckNvbmZpZykpXG4gICAgICAgICAgICB0b3dlclR5cGVJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFkID0gM1xuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NTAsIFwiPlNsb3c8XCIsIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NzUsIFwiRmFzdFwiLCB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gMSwgbnVsbFxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCI+U2xvdzxcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiRmFzdFwiKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgUGxheWVySW5mby50aW1lU2NhbGUgPSA0LCBudWxsXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIlNsb3dcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiPkZhc3Q8XCIpXG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG4gICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzID0gW11cbiAgICB9XG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGE7XG5cbiAgICAgICAgdGhpcy5tb25leVRleHQuc2V0VGV4dCgnTW9uZXk6ICcgKyBQbGF5ZXJJbmZvLm1vbmV5KVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXYXZlID0gdGhpcy5tZXRhU2NlbmUuZ2V0Um9vdFREU2NlbmUoKS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZVxuICAgICAgICB0aGlzLndhdmVUZXh0LnNldFRleHQoYFdhdmU6ICR7Y3VycmVudFdhdmV9YClcblxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRUZXh0KCdIUDogJyArIFBsYXllckluZm8uaHApXG5cbiAgICAgICAgdGhpcy5ocFRleHQuc2V0Q29sb3IoUGhhc2VyLkRpc3BsYXkuQ29sb3IuUkdCVG9TdHJpbmcoXG4gICAgICAgICAgICAyNTUsIDI1NSAqICgxIC0gdGhpcy5ocFJlZG5lc3MpLCAyNTUgKiAoMSAtIHRoaXMuaHBSZWRuZXNzKVxuICAgICAgICApKVxuICAgICAgICBjb25zdCBzZWNzVG9XaGl0ZSA9IDAuNVxuICAgICAgICB0aGlzLmhwUmVkbmVzcyA9IE1hdGgubWF4KDAsIHRoaXMuaHBSZWRuZXNzIC0gZGVsdGEgLyAxMDAwIC8gc2Vjc1RvV2hpdGUpXG5cbiAgICAgICAgdGhpcy51cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpY29uIG9mIHRoaXMuYnV5VG93ZXJJY29ucykge1xuICAgICAgICAgICAgaWNvbi51cGRhdGUodGhpcy5sYXN0VGltZSwgZGVsdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCkge1xuICAgICAgICBsZXQgYWN0aXZlU2NlbmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpO1xuICAgICAgICBpZiAoIWFjdGl2ZVNjZW5lKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoYWN0aXZlU2NlbmUgPT0gdGhpcy5sYXN0QWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5sYXN0QWN0aXZlU2NlbmUgPSBhY3RpdmVTY2VuZTtcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0VGV4dChgRGVwdGg6ICR7YWN0aXZlU2NlbmUuc2NlbmVMZXZlbH1gKVxuXG4gICAgICAgIGNvbnN0IHBhcmVudFNjZW5lcyA9IHRoaXMubWV0YVNjZW5lLmdldFBhcmVudFNjZW5lc1RvUm9vdCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUocGFyZW50U2NlbmVzLmxlbmd0aCA+IDApXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudFNjZW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHNjZW5lSW5kZXggPSAocGFyZW50U2NlbmVzLmxlbmd0aCAtIDEpIC0gaTtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDAuMVxuICAgICAgICAgICAgY29uc3QgbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQgPSA3O1xuICAgICAgICAgICAgaWYgKHBhcmVudFNjZW5lcy5sZW5ndGggPiBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkge1xuICAgICAgICAgICAgICAgIHNjYWxlIC89ICgocGFyZW50U2NlbmVzLmxlbmd0aCAvIG1heEltYWdlc05vcm1hbFNjYWxlRml0KSAqIDEuMDIyKSAvLyBOT1RFOiBEcmlmdHMsIGhlbmNlIHJlLXNjYWxlIGJ5IHRoaXMgbWFnaWMgbnVtYmVyLCBpZGsgd2h5OyBubyB0aW1lIHRvIGZpZ3VyZSBvdXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5ld0J1dHRvbiA9IHRoaXMuYWRkLmltYWdlKFxuICAgICAgICAgICAgICAgIFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMS41LFxuICAgICAgICAgICAgICAgIDEwMCArIHNjZW5lSW5kZXggKiBzY2FsZSAqIFREX1NDRU5FX0hFSUdIVCAqIDEuMixcbiAgICAgICAgICAgICAgICBgc25hcC0ke3BhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVggPSBzY2FsZVxuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWSA9IHNjYWxlXG4gICAgICAgICAgICBuZXdCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXksIGZhbHNlKSwgdGhpcy5tZXRhU2NlbmUpXG4gICAgICAgICAgICB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ld0J1dHRvblxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihjb25maWc6IFRvd2VyQ29uZmlnLCB0b3dlcjogVG93ZXIgPSBudWxsKSB7XG4gICAgICAgIGxldCBsZXZlbCA9IDFcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiXG5cbiAgICAgICAgaWYgKHRvd2VyID09PSBudWxsKSB7XG4gICAgICAgICAgICB0ZXh0ID0gYCR7Y29uZmlnLm5hbWV9OiAke2NvbmZpZy5kZXNjcmlwdGlvbn1cXG5gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ID0gYExldmVsICR7dG93ZXIubGV2ZWx9ICR7Y29uZmlnLm5hbWV9IHRvd2VyLlxcbmBcbiAgICAgICAgICAgIGxldmVsID0gdG93ZXIubGV2ZWxcbiAgICAgICAgfVxuXG4gICAgICAgIHRleHQgKz0gYERhbWFnZTogJHtjb25maWcuZGFtYWdlKGxldmVsKX0uXFxuYFxuICAgICAgICB0ZXh0ICs9IGBGaXJlIHJhdGU6ICR7Y29uZmlnLmZpcmVyYXRlKGxldmVsKS8xMDAwfXMuXFxuYFxuICAgICAgICB0ZXh0ICs9IGBSYW5nZTogJHtjb25maWcucmFuZ2UobGV2ZWwpfS5cXG5gXG5cbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0VGV4dCh0ZXh0KVxuICAgIH1cbn1cblxuY2xhc3MgQnV5VG93ZXJJY29uIHtcbiAgICB0b3dlck5hbWU6IHN0cmluZ1xuICAgIHRvd2VyQ29uZmlnOiBUb3dlckNvbmZpZ1xuXG4gICAgc3ByaXRlQ29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcHJpY2VUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGh1ZFNjZW5lOiBIdWRTY2VuZVxuXG4gICAgb3JpZ1g6IG51bWJlclxuICAgIG9yaWdZOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKGh1ZFNjZW5lOiBIdWRTY2VuZSwgeCwgeSwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuaHVkU2NlbmUgPSBodWRTY2VuZVxuICAgICAgICB0aGlzLm9yaWdYID0geFxuICAgICAgICB0aGlzLm9yaWdZID0geVxuICAgICAgICB0aGlzLnRvd2VyTmFtZSA9IGNvbmZpZy5uYW1lXG4gICAgICAgIHRoaXMudG93ZXJDb25maWcgPSBjb25maWdcblxuICAgICAgICBsZXQgdG93ZXJCYXNlID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJiYXNlcycsIGNvbmZpZy5zcHJpdGVCYXNlKTtcbiAgICAgICAgdG93ZXJCYXNlLnNldFRpbnQoY29uZmlnLnRpbnRCYXNlKTtcbiAgICAgICAgbGV0IHRvd2VyTWlkID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJtaWRzJywgY29uZmlnLnNwcml0ZU1pZCk7XG4gICAgICAgIHRvd2VyTWlkLnNldFRpbnQoY29uZmlnLnRpbnRNaWQpO1xuICAgICAgICBsZXQgdG93ZXJUb3AgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcnRvcHMnLCBjb25maWcuc3ByaXRlVG9wKTtcbiAgICAgICAgdG93ZXJUb3Auc2V0VGludChjb25maWcudGludFRvcCk7XG5cbiAgICAgICAgbGV0IHRvd2VyUmFuZ2UgPSBodWRTY2VuZS5hZGQuY2lyY2xlKFxuICAgICAgICAgICAgMCwgMCwgY29uZmlnLnJhbmdlKDEpLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXG4gICAgICAgICk7XG4gICAgICAgIHRvd2VyUmFuZ2Uuc2V0U3Ryb2tlU3R5bGUoXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VXaWR0aCxcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91clxuICAgICAgICApO1xuICAgICAgICB0b3dlclJhbmdlLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzcHJpdGVzID0gW1xuICAgICAgICAgICAgdG93ZXJCYXNlLFxuICAgICAgICAgICAgdG93ZXJNaWQsXG4gICAgICAgICAgICB0b3dlclRvcCxcbiAgICAgICAgICAgIHRvd2VyUmFuZ2UsXG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIgPSBodWRTY2VuZS5hZGQuY29udGFpbmVyKHgsIHksIHNwcml0ZXMpXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLmdldEFsbCgpXG5cbiAgICAgICAgY29uc3QgcGFkID0gM1xuICAgICAgICB0aGlzLnByaWNlVGV4dCA9IGh1ZFNjZW5lLmFkZC50ZXh0KFxuICAgICAgICAgICAgeCArIDE1LCB5LCBcIlwiICsgdGhpcy50b3dlckNvbmZpZy5wcmljZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldFNpemUoVElMRV9TSVpFLCBUSUxFX1NJWkUpO1xuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAgIC8vIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gY29uc29sZS5sb2coXCJmb29iYXJcIiksIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5zcHJpdGVDb250YWluZXIpXG5cbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5odWRTY2VuZS5zZXREZXNjcmlwdGlvbihjb25maWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgcmFuZ2UgaW5kaWNhdG9yIHZpc2libGVcbiAgICAgICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzNdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSkuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdC5saXN0LmZvckVhY2goKHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkgPT4ge1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZycsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpIHtcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xuXG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdC5saXN0LmZvckVhY2goKHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkgPT4ge1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gaHVkU2NlbmUubWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKClcbiAgICAgICAgICAgIHNjZW5lLnRvd2VyTWFuYWdlci5wbGFjZVRvd2VyKHBvaW50ZXIsIHRoaXMudG93ZXJOYW1lKTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gdGhpcy5vcmlnWFxuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gdGhpcy5vcmlnWVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldFRpbnQoKSB7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzBdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50TWlkKTtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRUb3ApO1xuICAgIH1cblxuICAgIHNldFNob3BJY29uVGludCh0aW50OiBudW1iZXIpIHtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMF0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aW50ICYgdGhpcy50b3dlckNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzJdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgICAgIC8vIFVuY29tbWVudCB0byBwcmV2ZW50IG5lZ2F0aXZlIG1vbmV5OlxuICAgICAgICAvLyB0aGlzLmh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lciwgUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKVxuICAgICAgICBpZiAoUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnByaWNlVGV4dC5zZXRUaW50KDB4MDBmZjAwKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByaWNlVGV4dC5zZXRUaW50KDB4ZmYwMDAwKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvcEljb25UaW50KDB4OTk1NTU1KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuLi9lbmVteVwiO1xuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi4vdG93ZXJzXCI7XG5pbXBvcnQgeyBCdWxsZXQgfSBmcm9tIFwiLi4vYnVsbGV0XCI7XG5pbXBvcnQgeyBXYXZlTWFuYWdlciB9IGZyb20gXCIuLi93YXZlc1wiXG5pbXBvcnQgeyBUb3dlck1hbmFnZXIgfSBmcm9tIFwiLi4vdG93ZXJNYW5hZ2VyXCJcbmltcG9ydCB7IE1BWF9IRUlHSFQsIE1BWF9XSURUSCwgVGVycmFpbiwgVElMRV9TSVpFIH0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcbmltcG9ydCB7IFREU2NlbmVDb25maWcgfSBmcm9tIFwiLi90ZFNjZW5lQ29uZmlnXCI7XG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9NZXRhU2NlbmVcIjtcbmltcG9ydCB7IEhVRF9XSURUSCB9IGZyb20gXCIuL2h1ZFNjZW5lXCI7XG5pbXBvcnQgeyBVVUlEIH0gZnJvbSBcIi4uL3V0aWxzL2d1aWRcIjtcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gXCIuLi9oZWFsdGhCYXJcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgRU5FTVlfQ09ORklHUyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IFNDRU5FX1RSQU5TSVRJT05fTVMgPSA1MDBcbmV4cG9ydCBjb25zdCBURF9TQ0VORV9XSURUSCA9IE1BWF9XSURUSCAqIFRJTEVfU0laRVxuZXhwb3J0IGNvbnN0IFREX1NDRU5FX0hFSUdIVCA9IE1BWF9IRUlHSFQgKiBUSUxFX1NJWkVcblxuZXhwb3J0IGNsYXNzIFREU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHBhdGg6IFBoYXNlci5DdXJ2ZXMuUGF0aFxuICAgIGFsbEVuZW1pZXM6IHsgW2tleTogc3RyaW5nXTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIH0gPSB7fVxuICAgIG5leHRFbmVteTogbnVtYmVyID0gMFxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lXG5cbiAgICB0b3dlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxuICAgIGJ1bGxldHM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cFxuXG4gICAgdGVycmFpbjogVGVycmFpblxuXG4gICAgd2F2ZU1hbmFnZXI6IFdhdmVNYW5hZ2VyXG4gICAgdG93ZXJNYW5hZ2VyOiBUb3dlck1hbmFnZXJcblxuICAgIHNjZW5lUGFyZW50S2V5OiBzdHJpbmc7XG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb25cblxuICAgIHByaXZhdGUgdG93ZXJQYXJlbnQ6IFRvd2VyICAvLyB0byB3aGF0IHRvd2VyIGRvZXMgdGhpcyBzY2VuZSBjb3JyZXNwb25kPyB1bmRlZmluZWQgZm9yIHJvb3RcbiAgICBwcml2YXRlIGVuZEhlYWx0aEJhcjogSGVhbHRoQmFyXG5cbiAgICAvLyBoYXBwZW5zIHdoZW4gYW4gZW5lbXkgcmVhY2hlcyB0aGUgZW5kXG4gICAgZW5lbXlFbmRDYWxsYmFjazogKG51bWJlcikgPT4gdm9pZFxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBURFNjZW5lQ29uZmlnLCBtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6IGNvbmZpZy5zY2VuZUtleSwgLy9gdGRTY2VuZSR7VVVJRC51dWlkdjQoKX1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRlcnJhaW4gPSBjb25maWcudGVycmFpbjtcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XG5cbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gY29uZmlnLnNjZW5lTGV2ZWw7XG4gICAgICAgIHRoaXMuc2NlbmVQYXJlbnRLZXkgPSBjb25maWcuc2NlbmVQYXJlbnRLZXk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gdGhpcyBncmFwaGljcyBlbGVtZW50IGlzIG9ubHkgZm9yIHZpc3VhbGl6YXRpb24sXG4gICAgICAgIC8vIGl0cyBub3QgcmVsYXRlZCB0byBvdXIgcGF0aFxuICAgICAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcygpO1xuXG4gICAgICAgIHRoaXMudGVycmFpbi5jcmVhdGUodGhpcylcbiAgICAgICAgdGhpcy50ZXJyYWluLmRyYXcoZ3JhcGhpY3MpXG5cbiAgICAgICAgLy8gdGhlIHBhdGggZm9yIG91ciBlbmVtaWVzXG4gICAgICAgIC8vIHBhcmFtZXRlcnMgYXJlIHRoZSBzdGFydCB4IGFuZCB5IG9mIG91ciBwYXRoXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XG4gICAgICAgIHRoaXMudG93ZXJNYW5hZ2VyID0gbmV3IFRvd2VyTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBmb3IgKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7XG4gICAgICAgICAgICB0aGlzLmFsbEVuZW1pZXNbZW5lbXkubmFtZV0gPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHsgY2xhc3NUeXBlOiBlbmVteS5jbGFzcywgcnVuQ2hpbGRVcGRhdGU6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvd2VycyA9IHRoaXMuYWRkLmdyb3VwKHsgY2xhc3NUeXBlOiBUb3dlciwgcnVuQ2hpbGRVcGRhdGU6IHRydWUgfSk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjbGFzc1R5cGU6IEJ1bGxldCwgcnVuQ2hpbGRVcGRhdGU6IHRydWUgfSk7XG4gICAgICAgIGZvciAobGV0IGVOYW1lIGluIHRoaXMuYWxsRW5lbWllcykge1xuICAgICAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuYWxsRW5lbWllc1tlTmFtZV0sIHRoaXMuYnVsbGV0cywgdGhpcy5kYW1hZ2VFbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyID0gbmV3IFdhdmVNYW5hZ2VyKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGNhbSA9IHRoaXMuY2FtZXJhcy5tYWluXG4gICAgICAgIGNhbS5zY3JvbGxYID0gLUhVRF9XSURUSFxuICAgIH1cblxuICAgIC8vIE9ubHkgZm9yZWdyb3VuZCBzY2VuZSBoYXMgaW5wdXQgZW5hYmxlZCAmIGlzIHZpc2libGU7IGFsbCBzY2VuZXMgYXJlIGJlaW5nIHVwZGF0ZWRcbiAgICBwdWJsaWMgc2V0SXNGb3JlZ3JvdW5kKGlzRm9yZWdyb3VuZFNjZW5lLCBnb2luZ0luc2lkZTogYm9vbGVhbiwgaSA9IG51bGwsIGogPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGlzRm9yZWdyb3VuZFNjZW5lO1xuXG4gICAgICAgIGlmICghaXNGb3JlZ3JvdW5kU2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dChnb2luZ0luc2lkZSwgaSwgailcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFkZUluKGdvaW5nSW5zaWRlLCBpLCBqKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVJbihnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5wYW4odGhpcy50ZXJyYWluLncgKiBUSUxFX1NJWkUgLyAyLCB0aGlzLnRlcnJhaW4uaCAqIFRJTEVfU0laRSAvIDIsIDEpXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldFpvb20oKGdvaW5nSW5zaWRlID8gMSAvIDMgOiAzKSlcblxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlSW4oU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDEsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVPdXQoZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGksIGopIHtcbiAgICAgICAgLy8gVGFrZSBhIHNjcmVlbnNob3RcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnNuYXBzaG90QXJlYShcbiAgICAgICAgICAgIC10aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxYLFxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFksXG4gICAgICAgICAgICBURF9TQ0VORV9XSURUSCxcbiAgICAgICAgICAgIFREX1NDRU5FX0hFSUdIVCxcbiAgICAgICAgICAgIChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBLZXkgPSBgc25hcC0ke3RoaXMuc2NlbmUua2V5fWBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlcy5leGlzdHMoc25hcEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5yZW1vdmUoc25hcEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMuYWRkSW1hZ2Uoc25hcEtleSwgaW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnaW5nOiBzaG93IHRoZSBzY3JlZW5zaG90XG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcbiAgICAgICAgaWYgKGdvaW5nSW5zaWRlKSB7XG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy50ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMywgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih4LCB5LCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDEgLyAzLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGFtYWdlRW5lbXkoZW5lbXksIGJ1bGxldCkge1xuICAgICAgICAvLyBvbmx5IGlmIGJvdGggZW5lbXkgYW5kIGJ1bGxldCBhcmUgYWxpdmVcbiAgICAgICAgaWYgKGVuZW15LmFjdGl2ZSA9PT0gdHJ1ZSAmJiBidWxsZXQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyB3ZSByZW1vdmUgdGhlIGJ1bGxldCByaWdodCBhd2F5XG4gICAgICAgICAgICBidWxsZXQuaGl0KClcblxuICAgICAgICAgICAgLy8gZGVjcmVhc2UgdGhlIGVuZW15IGhwIHdpdGggYnVsbGV0IGRhbWFnZVxuICAgICAgICAgICAgZW5lbXkucmVjZWl2ZURhbWFnZShidWxsZXQuZGFtYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZyYW1lTnVtYmVyID0gMDtcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG5cbiAgICAgICAgdGhpcy5mcmFtZU51bWJlcisrO1xuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyLnVwZGF0ZShkZWx0YSlcblxuICAgICAgICBpZiAodGhpcy5mcmFtZU51bWJlciAlIDYwID09IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBVcGRhdGUgdGg6ICR7dGhpcy5zY2VuZS5rZXl9IGU6ICR7dGhpcy5pbnB1dC5lbmFibGVkfSB8IGw6ICR7dGhpcy5zY2VuZUxldmVsfSB8IHA6ICR7dGhpcy5zY2VuZVBhcmVudD8uc2NlbmUua2V5fWApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5kSGVhbHRoQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5oZWFsdGggPSB0aGlzLnRvd2VyUGFyZW50LmhlYWx0aEJhci5oZWFsdGhcbiAgICAgICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEJ1bGxldCh4LCB5LCBhbmdsZSwgZGFtYWdlLCByYW5nZSwgYnVsbGV0U3BlZWRNb2QpIHtcbiAgICAgICAgdmFyIGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXQoKTtcbiAgICAgICAgaWYgKGJ1bGxldCkge1xuICAgICAgICAgICAgYnVsbGV0LmZpcmUoeCwgeSwgYW5nbGUsIGRhbWFnZSwgcmFuZ2UsIGJ1bGxldFNwZWVkTW9kKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvR3JpZFBvcyh4LCB5KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5mbG9vcigoeCArIHRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgpIC8gVElMRV9TSVpFKTtcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSkgLyBUSUxFX1NJWkUpO1xuICAgICAgICByZXR1cm4gW2ksIGpdXG4gICAgfVxuXG4gICAgb25DbGljayhwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlcikge1xuICAgICAgICBjb25zdCBbaSwgal0gPSB0aGlzLnRvR3JpZFBvcyhwb2ludGVyLngsIHBvaW50ZXIueSlcblxuICAgICAgICBsZXQgcG90ZW50aWFsRXhpc3RpbmdUb3dlciA9IHRoaXMudGVycmFpbi50cnlHZXRFeGlzdGluZ1Rvd2VyKGksIGopO1xuICAgICAgICBpZiAocG90ZW50aWFsRXhpc3RpbmdUb3dlcikge1xuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuc3dpdGNoVG9TY2VuZShwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyLmdldElubmVyVG93ZXJTY2VuZUtleSgpLCB0cnVlLCBpLCBqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmIChpID09PSBlbmRbMF0gJiYgaiA9PT0gZW5kWzFdICYmIHRoaXMuc2NlbmVQYXJlbnRLZXkpIHtcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUodGhpcy5zY2VuZVBhcmVudEtleSwgZmFsc2UsIGksIGopXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkVuZW15UmVhY2hlZEVuZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVuZW15RW5kQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIH1cblxuICAgIHNldFRvd2VyUGFyZW50KHBhcmVudDogVG93ZXIpIHtcbiAgICAgICAgdGhpcy50b3dlclBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodGhpcylcblxuICAgICAgICBsZXQgW2ksIGpdID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcblxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5tYWtlKHgsIHksIFRJTEVfU0laRSAtIDE0LCAwLjUpXG4gICAgICAgIHRoaXMuYWRkLmNvbnRhaW5lcigwLCAwLCB0aGlzLmVuZEhlYWx0aEJhcilcbiAgICB9XG5cbiAgICBnZXRUb3dlclBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJQYXJlbnRcbiAgICB9XG59IiwiaW1wb3J0IHsgVGVycmFpbiB9IGZyb20gXCIuLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgVERTY2VuZUNvbmZpZyB7XG4gICAgdGVycmFpbjogVGVycmFpbjtcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvbiBcbiAgICBzY2VuZVBhcmVudEtleTogc3RyaW5nO1xuICAgIHNjZW5lS2V5OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHRlcnJhaW46IFRlcnJhaW4sIHNjZW5lTGV2ZWw6IG51bWJlciwgc2NlbmVQYXJlbnRLZXk6IHN0cmluZywgc2NlbmVLZXk6IHN0cmluZyl7XG4gICAgICAgIHRoaXMudGVycmFpbiA9IHRlcnJhaW47XG5cbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gc2NlbmVMZXZlbDtcbiAgICAgICAgdGhpcy5zY2VuZVBhcmVudEtleSA9IHNjZW5lUGFyZW50S2V5O1xuICAgICAgICB0aGlzLnNjZW5lS2V5ID0gc2NlbmVLZXlcbiAgICB9XG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIlxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vdG93ZXJzXCJcblxuZXhwb3J0IGVudW0gVGlsZVR5cGUge1xuICAgIFN0YXJ0LCBQYXRoLCBFbmQsIE9jY3VwaWVkLCBCdWlsZGFibGVcbn1cblxuZXhwb3J0IGNvbnN0IFRJTEVfU0laRSA9IDY0XG5leHBvcnQgY29uc3QgTEVWRUxfT0ZGU0VUID0gMTUgKiBUSUxFX1NJWkVcbmV4cG9ydCBjb25zdCBNQVhfV0lEVEggPSAxMFxuZXhwb3J0IGNvbnN0IE1BWF9IRUlHSFQgPSA4XG5cbmNvbnN0IE5fVElMRVNFVF9TUFJJVEVTID0gMTAgIC8vIGhvdyBtYW55IHNwcml0ZXMgYXJlIGluIHRoZSB0aWxlc2V0P1xuXG50eXBlIEdyaWRQb3MgPSBbaW50ZWdlciwgaW50ZWdlcl1cblxuZXhwb3J0IGNsYXNzIFRlcnJhaW4ge1xuICAgIHRvd2VyczogVG93ZXJbXVtdXG4gICAgdGlsZXM6IFRpbGVUeXBlW11bXVxuXG4gICAgdGlsZVNwcml0ZXM6IGludGVnZXJbXVtdXG5cbiAgICBwYXRoOiBQaGFzZXIuQ3VydmVzLlBhdGggIC8vIFRoZSBQaGFzZXIgcGF0aCAoZm9yIGVuZW15IG1vdmVtZW50KVxuICAgIHBhdGhUaWxlczogR3JpZFBvc1tdICAvLyBUaGUgc2VxdWVuY2Ugb2YgdGlsZXMgbWFraW5nIHVwIHRoZSBwYXRoXG5cbiAgICB0aW50OiBpbnRlZ2VyIC8vIGNvbG9yIGFzIGEgMjQtYml0IGludFxuXG4gICAgdzogbnVtYmVyXG4gICAgaDogbnVtYmVyXG5cbiAgICAvLyB0b2RvOiBnZW5lcmF0ZS9sb2FkIHRlcnJhaW5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogaW50ZWdlciwgaGVpZ2h0OiBpbnRlZ2VyKSB7XG4gICAgICAgIHRoaXMudyA9IHdpZHRoXG4gICAgICAgIHRoaXMuaCA9IGhlaWdodFxuICAgIH1cblxuICAgIGNyZWF0ZShzY2VuZTogVERTY2VuZSkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlKClcbiAgICAgICAgdGhpcy5zZXR1cFNwcml0ZXMoc2NlbmUpXG5cbiAgICAgICAgdGhpcy50b3dlcnMgPSBpbml0MkRBcnJheTxUb3dlcj4odGhpcy53LCB0aGlzLmgsIG51bGwpXG4gICAgfVxuXG4gICAgc2V0dXBTcHJpdGVzKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHRoaXMudGlsZVNwcml0ZXMgPSBpbml0MkRBcnJheSh0aGlzLncsIHRoaXMuaCwgVGlsZVR5cGUuQnVpbGRhYmxlKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdID0gcmFuZG9tRnJlZVNwcml0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXREaXIgPSAocGk6IGludGVnZXIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGF0aFRpbGVzLCBwaSlcbiAgICAgICAgICAgIGxldCBbaTEsIGoxXSA9IHRoaXMucGF0aFRpbGVzW3BpXVxuICAgICAgICAgICAgbGV0IFtpMiwgajJdID0gdGhpcy5wYXRoVGlsZXNbcGkgKyAxXVxuXG4gICAgICAgICAgICBsZXQgW2RpLCBkal0gPSBbaTIgLSBpMSwgajIgLSBqMV1cbiAgICAgICAgICAgIGlmIChkaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGogPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gM1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImdldERpciBmYWlsZWRcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwaSA9IDA7IHBpIDwgdGhpcy5wYXRoVGlsZXMubGVuZ3RoOyBwaSsrKSB7XG4gICAgICAgICAgICBsZXQgW2kxLCBqMV0gPSB0aGlzLnBhdGhUaWxlc1twaV1cblxuICAgICAgICAgICAgaWYgKHBpID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA2XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBpID09IHRoaXMucGF0aFRpbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA3XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBkMSA9IChnZXREaXIocGkgLSAxKSArIDIpICUgNFxuICAgICAgICAgICAgICAgIGxldCBkMiA9IGdldERpcihwaSlcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMikge1xuICAgICAgICAgICAgICAgICAgICBbZDEsIGQyXSA9IFtkMiwgZDFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9yZGVyIG9mIHNwcml0ZXMgKDAyIG1lYW5pbmcgZDE9MCwgZDI9Mik6XG4gICAgICAgICAgICAgICAgLy8gMDEgMDIgMDMgMTIgMTMgMjNcbiAgICAgICAgICAgICAgICBpZiAoZDEgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSBkMiAtIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgKyAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkMSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDUgLy8gb25seSAyMyBsZWZ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW50ID0gUGhhc2VyLkRpc3BsYXkuQ29sb3IuR2V0Q29sb3IoXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgIClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhpLCBqKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgJ3RpbGVzZXQnLCB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5CdWlsZGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldFRpbnQodGhpcy50aW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xuICAgICAgICAvLyB0aGlzLmRyYXdHcmlkKGdyYXBoaWNzKVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgzLCAweGZmZmZmZiwgMSk7XG4gICAgICAgIC8vIHZpc3VhbGl6ZSB0aGUgcGF0aFxuICAgICAgICB0aGlzLnBhdGguZHJhdyhncmFwaGljcyk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgMHgwMDAwZmYsIDAuOCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5oOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbygwLCBpICogVElMRV9TSVpFKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhUSUxFX1NJWkUgKiAxMCwgaSAqIFRJTEVfU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy53OyBqKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhqICogVElMRV9TSVpFLCAwKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhqICogVElMRV9TSVpFLCBUSUxFX1NJWkUgKiA4KTtcbiAgICAgICAgfVxuICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhblBsYWNlVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbkJvdW5kcyhpLCBqKSAmJiB0aGlzLnRpbGVzW2ldW2pdID09PSBUaWxlVHlwZS5CdWlsZGFibGU7XG4gICAgfVxuXG4gICAgcHVibGljIHRyeUdldEV4aXN0aW5nVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0b3dlcjogVG93ZXIpIHtcbiAgICAgICAgaWYgKGkgPCAwIHx8IGogPCAwIHx8IGkgPj0gdGhpcy53IHx8IGogPj0gdGhpcy5oKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIHRoaXMudGlsZXNbaV1bal0gPSBUaWxlVHlwZS5PY2N1cGllZDtcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJzW2ldW2pdID0gdG93ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgcGF0aCA9IFtdXG5cbiAgICAgICAgbGV0IGVkZ2VzOiBHcmlkUG9zW10gPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudyAtIDE7IGkrKykge1xuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgMF0pXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFtpLCB0aGlzLmggLSAxXSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMuaCAtIDE7IGorKykge1xuICAgICAgICAgICAgZWRnZXMucHVzaChbMCwgal0pXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFt0aGlzLncgLSAxLCBqXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2VcblxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXG4gICAgICAgIHdoaWxlICghc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGZyb20gPSByYW5kb21JdGVtKGVkZ2VzKVxuICAgICAgICAgICAgbGV0IHRvO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHRvID0gcmFuZG9tSXRlbShlZGdlcylcbiAgICAgICAgICAgIH0gd2hpbGUgKHRvID09IGZyb20pXG5cbiAgICAgICAgICAgIHBhdGggPSB0aGlzLnJhbmRvbVdhbGsoZnJvbSwgdG8pXG5cbiAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IDI1XG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCAmJiBwYXRoLmxlbmd0aCA+PSBtaW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMrK1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID09IDQwMCkgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIGluXCIsIGF0dGVtcHRzLCBcImF0dGVtcHRzXCIpXG5cbiAgICAgICAgdGhpcy50aWxlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhwYXRoW2ldWzBdLCBwYXRoW2ldWzFdKVxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGFsdGVuYXRpdmVseTogdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCguLi4pXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYXRoID0gc2NlbmUuYWRkLnBhdGgoeCwgeSlcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGggPSBuZXcgUGhhc2VyLkN1cnZlcy5QYXRoKHgsIHkpXG4gICAgICAgICAgICAgICAgLy8gc2NlbmUuYWRkT2JqZWN0KHRoaXMucGF0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoLmxpbmVUbyh4LCB5KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2V0VG8gPSBUaWxlVHlwZS5QYXRoXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VG8gPSBUaWxlVHlwZS5TdGFydFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IHBhdGgubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNldFRvID0gVGlsZVR5cGUuRW5kXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGlsZXNbcGF0aFtpXVswXV1bcGF0aFtpXVsxXV0gPSBzZXRUb1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgdGVycmFpbi5cIilcblxuICAgICAgICB0aGlzLnBhdGhUaWxlcyA9IHBhdGhcbiAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5kb21XYWxrKGZyb206IEdyaWRQb3MsIHRvOiBHcmlkUG9zKTogQXJyYXk8R3JpZFBvcz4ge1xuICAgICAgICBsZXQgcGF0aCA9IFtdXG4gICAgICAgIGxldCBzZWVuID0gbmV3IFNldCgpXG5cbiAgICAgICAgY29uc3QgYWRkVG9QYXRoID0gKHBvczogR3JpZFBvcykgPT4ge1xuICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFubmVkIG9mIHRoaXMubmVpZ2hib3JzKHBhdGhbcGF0aC5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vlbi5hZGQoYmFubmVkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aC5wdXNoKHBvcylcbiAgICAgICAgICAgIHNlZW4uYWRkKHBvcy50b1N0cmluZygpKVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9QYXRoKGZyb20pXG5cbiAgICAgICAgbGV0IHN0ZXBzID0gMFxuICAgICAgICB3aGlsZSAocGF0aFtwYXRoLmxlbmd0aCAtIDFdICE9IHRvKSB7XG4gICAgICAgICAgICBzdGVwcysrXG4gICAgICAgICAgICBpZiAoc3RlcHMgPT0gMTAwKSBicmVha1xuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXVxuXG4gICAgICAgICAgICBpZiAocG9zLnRvU3RyaW5nKCkgPT09IHRvLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aCAgLy8gU3VjY2VzcyFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNhbmRzID0gdGhpcy5uZWlnaGJvcnMocG9zKVxuICAgICAgICAgICAgY2FuZHMgPSBjYW5kcy5maWx0ZXIocCA9PiAhc2Vlbi5oYXMocC50b1N0cmluZygpKSlcblxuICAgICAgICAgICAgaWYgKGNhbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsICAvLyBGYWlsIVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5leHQgPSByYW5kb21JdGVtKGNhbmRzKVxuICAgICAgICAgICAgYWRkVG9QYXRoKG5leHQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aFxuICAgIH1cblxuICAgIHByaXZhdGUgbmVpZ2hib3JzKHBvczogR3JpZFBvcywgcGFkID0gMCkge1xuICAgICAgICBsZXQgcmVzID0gW1xuICAgICAgICAgICAgW3Bvc1swXSArIDEsIHBvc1sxXV0sXG4gICAgICAgICAgICBbcG9zWzBdIC0gMSwgcG9zWzFdXSxcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSArIDFdLFxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdIC0gMV0sXG4gICAgICAgIF1cbiAgICAgICAgcmVzID0gcmVzLmZpbHRlcihwID0+IHRoaXMuaW5Cb3VuZHMocFswXSwgcFsxXSkpXG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cblxuICAgIGZyb21HcmlkUG9zKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcbiAgICAgICAgcmV0dXJuIFsoaSArIDAuNSkgKiBUSUxFX1NJWkUsIChqICsgMC41KSAqIFRJTEVfU0laRV1cbiAgICB9XG5cbiAgICBpbkJvdW5kcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCBwYWQgPSAwKSB7XG4gICAgICAgIHJldHVybiAoaSA+PSBwYWRcbiAgICAgICAgICAgICYmIGkgPCB0aGlzLncgLSBwYWRcbiAgICAgICAgICAgICYmIGogPj0gcGFkXG4gICAgICAgICAgICAmJiBqIDwgdGhpcy5oIC0gcGFkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tSXRlbShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIGFycmF5Lmxlbmd0aCldXG59XG5cbmZ1bmN0aW9uIHJhbmRvbUZyZWVTcHJpdGUoKSB7XG4gICAgY29uc3QgblNwZWNpYWxTcHJpdGVzID0gOFxuICAgIHJldHVybiBuU3BlY2lhbFNwcml0ZXMgKyBNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIChOX1RJTEVTRVRfU1BSSVRFUyAtIG5TcGVjaWFsU3ByaXRlcykpXG59XG5cbmZ1bmN0aW9uIGluaXQyREFycmF5PFRWYWw+KGRpbTEsIGRpbTIsIHZhbHVlOiBUVmFsKTogVFZhbFtdW10ge1xuICAgIHJldHVybiBuZXcgQXJyYXkoZGltMSlcbiAgICAgICAgLmZpbGwoZmFsc2UpXG4gICAgICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KGRpbTIpXG4gICAgICAgICAgICAuZmlsbCh2YWx1ZSkpO1xufSIsImltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCAqIGFzIHRvd2VycyBmcm9tIFwiLi90b3dlcnNcIjtcblxuZXhwb3J0IGNsYXNzIFRvd2VyTWFuYWdlciB7XG4gICAgc2NlbmU6IFREU2NlbmVcbiAgICB0b3dlclR5cGVzOiB7IFtrZXk6c3RyaW5nXTogYW55fSA9IHtcbiAgICAgICAgJ0Jhc2ljJzogW3Rvd2Vycy5CYXNpY1R1cnJldCwgY2ZnLkJhc2ljXSxcbiAgICAgICAgJ011bHRpc2hvdCc6IFt0b3dlcnMuTXVsdGlzaG90VHVycmV0LCBjZmcuTXVsdGlzaG90XSxcbiAgICAgICAgJ1NuaXBlcic6IFt0b3dlcnMuU25pcGVyVHVycmV0LCBjZmcuU25pcGVyXSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYWNlVG93ZXIocG9pbnRlciwgdG93ZXJUeXBlKSB7XG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMuc2NlbmUudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxuICAgICAgICBpZiAodGhpcy5zY2VuZS50ZXJyYWluLmNhblBsYWNlVG93ZXIoaSwgaikpIHtcbiAgICAgICAgICAgIHZhciB0b3dlcjogdG93ZXJzLlRvd2VyID0gdGhpcy5zY2VuZS50b3dlcnMuZ2V0KCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFkZFNjZW5lKHRoaXMuc2NlbmUuc2NlbmUua2V5KVxuICAgICAgICAgICAgaWYgKHRvd2VyKSB7XG4gICAgICAgICAgICAgICAgdG93ZXIubWFrZShpLCBqLCBuZXdTY2VuZS5zY2VuZS5rZXksIHRoaXMudG93ZXJUeXBlc1t0b3dlclR5cGVdWzFdLCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVswXSk7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5tb25leSAtPSB0b3dlci5jb25maWcucHJpY2VcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zZXRUb3dlclBhcmVudCh0b3dlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBpbXBvcnQgeyBHcmlkUG9zaXRpb24gfSBmcm9tIFwiLi90ZXJyYWluXCI7XG5cbmltcG9ydCB7IERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiwgVE9XRVJfSEVBTFRIX1JFR0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9oZWFsdGhCYXJcIjtcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xuaW1wb3J0IHsgVGVycmFpbiwgVElMRV9TSVpFIH0gZnJvbSBcIi4vdGVycmFpblwiO1xuaW1wb3J0IHsgVG93ZXJDb25maWcsIFJBTkdFX0lORElDQVRPUl9DT05GSUcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcblxuXG4vLyB0b2RvOiBtb3ZlIHRvIHNjZW5lP1xuZnVuY3Rpb24gZ2V0RW5lbXkoeCwgeSwgcmFuZ2UsIGVuZW1pZXMsIG51bVRvR2V0KTogRW5lbXlCYXNlW10ge1xuICAgIGxldCBvdXRFbmVtaWVzOiBFbmVteUJhc2VbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgZW5lbXlHcm91cCBpbiBlbmVtaWVzKSB7XG4gICAgICAgIGxldCBlbmVteVVuaXRzID0gZW5lbWllc1tlbmVteUdyb3VwXS5nZXRDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15VW5pdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbmVteVVuaXRzW2ldLmFjdGl2ZSAmJiBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHgsIHksIGVuZW15VW5pdHNbaV0ueCwgZW5lbXlVbml0c1tpXS55KSA8PSByYW5nZSkge1xuICAgICAgICAgICAgICAgIG91dEVuZW1pZXMucHVzaChlbmVteVVuaXRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdXRFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3V0RW5lbWllcy5zb3J0KChhLCBiKSA9PiBiLmZvbGxvd2VyLnQgLSBhLmZvbGxvd2VyLnQpXG4gICAgICAgIG91dEVuZW1pZXMubGVuZ3RoID0gTWF0aC5taW4obnVtVG9HZXQsIG91dEVuZW1pZXMubGVuZ3RoKVxuICAgICAgICByZXR1cm4gb3V0RW5lbWllc1xuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufVxuXG5cbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuICAgIGNvbmZpZzogVG93ZXJDb25maWdcbiAgICBzdGF0czogVG93ZXJDb25maWdcblxuICAgIHNjZW5lOiBURFNjZW5lXG5cbiAgICB0b3dlclR1cnJldDogX1Rvd2VyVHVycmV0XG4gICAgdG93ZXJNaWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcbiAgICB0b3dlckJhc2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBoZWFsdGhCYXI6IEhlYWx0aEJhclxuICAgIHJhbmdlSW5kaWNhdG9yOiBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGVcblxuICAgIGxldmVsOiBpbnRlZ2VyXG4gICAgbGV2ZWxUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gICAgcHJpdmF0ZSBpbm5lclRvd2VyU2NlbmVLZXk6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IodG93ZXJTY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcih0b3dlclNjZW5lLCAwLCAwKVxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodG93ZXJTY2VuZSlcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRvd2VyU2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIG1ha2UoaTogbnVtYmVyLCBqOiBudW1iZXIsIGlubmVyVG93ZXJTY2VuZUtleTogc3RyaW5nLCBjb25maWc6IFRvd2VyQ29uZmlnLCB0b3dlckNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xuICAgICAgICB0aGlzLnN0YXRzID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgdGhpcy50b3dlclR1cnJldCA9IG5ldyB0b3dlckNsYXNzTmFtZSh0aGlzLnNjZW5lLCB0aGlzLmNvbmZpZywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICBsZXQgeENvb3JkID0gaSAqIFRJTEVfU0laRSArIFRJTEVfU0laRSAvIDJcbiAgICAgICAgbGV0IHlDb29yZCA9IGogKiBUSUxFX1NJWkUgKyBUSUxFX1NJWkUgLyAyXG5cbiAgICAgICAgdGhpcy50b3dlckJhc2UgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoeENvb3JkLCB5Q29vcmQsICd0b3dlcmJhc2VzJywgdGhpcy5jb25maWcuc3ByaXRlQmFzZSk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldFRpbnQodGhpcy5jb25maWcudGludEJhc2UpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnRvd2VyQmFzZSk7XG4gICAgICAgIHRoaXMudG93ZXJNaWQgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoeENvb3JkLCB5Q29vcmQsICd0b3dlcm1pZHMnLCB0aGlzLmNvbmZpZy5zcHJpdGVNaWQpO1xuICAgICAgICB0aGlzLnRvd2VyTWlkLnNldFRpbnQodGhpcy5jb25maWcudGludE1pZCk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJNaWQpO1xuXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3IgPSB0aGlzLnNjZW5lLmFkZC5jaXJjbGUoXG4gICAgICAgICAgICB4Q29vcmQsIHlDb29yZCwgY29uZmlnLnJhbmdlKDEpLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0U3Ryb2tlU3R5bGUoUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91cik7XG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMucmFuZ2VJbmRpY2F0b3IpO1xuXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4ubGlzdC5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZihjaGlsZC5jb25zdHJ1Y3Rvci5uYW1lLm1hdGNoKC9eLitFbmVteSQvKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgICAgICBsZXQgaHVkU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcImh1ZFNjZW5lXCIpIGFzIEh1ZFNjZW5lXG4gICAgICAgICAgICBodWRTY2VuZS5zZXREZXNjcmlwdGlvbih0aGlzLmNvbmZpZywgdGhpcylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4geyB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpIH0pO1xuXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQucGxhY2UoaSwgaiwgdGhpcy5zY2VuZS50ZXJyYWluKTtcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBsYWNlVG93ZXIoaSwgaiwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlclR1cnJldCk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIubWFrZSh4Q29vcmQsIHlDb29yZCArIFRJTEVfU0laRSAvIDIgLSA4LCBUSUxFX1NJWkUgLSAxNClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXG5cbiAgICAgICAgdGhpcy5sZXZlbCA9IDFcblxuICAgICAgICBjb25zdCBwYWQgPSAzXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgICAgICAgIHhDb29yZCArIDE1LCB5Q29vcmQgLSA0LCBcIlwiICsgdGhpcy5sZXZlbCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLmxldmVsVGV4dClcblxuICAgICAgICB0aGlzLmlubmVyVG93ZXJTY2VuZUtleSA9IGlubmVyVG93ZXJTY2VuZUtleVxuICAgICAgICBcbiAgICAgICAgbGV0IGlubmVyVG93ZXJTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KGlubmVyVG93ZXJTY2VuZUtleSkgYXMgVERTY2VuZVxuICAgICAgICBpbm5lclRvd2VyU2NlbmUub25FbmVteVJlYWNoZWRFbmQoKGRhbWFnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuaGVhbHRoIC09IGRhbWFnZSAqIERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcblxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnVwZGF0ZShkZWx0YSlcblxuICAgICAgICB0aGlzLmhlYWx0aEJhci5oZWFsdGggKz0gVE9XRVJfSEVBTFRIX1JFR0VOICogZGVsdGFcblxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIuaGVhbHRoID49IDEuMCkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIubGV2ZWxVcCgpO1xuICAgICAgICAgICAgdGhpcy5sZXZlbCsrXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5zZXRUZXh0KFwiXCIgKyB0aGlzLmxldmVsKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsIC0gMSkgPCB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlU2NhbGUgPSB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpIC8gdGhpcy5zdGF0cy5yYW5nZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFNjYWxlKHJhbmdlU2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxuICAgIH1cblxuICAgIGdldElubmVyVG93ZXJTY2VuZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJUb3dlclNjZW5lS2V5XG4gICAgfVxufVxuXG5cbmFic3RyYWN0IGNsYXNzIF9Ub3dlclR1cnJldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XG4gICAgbmV4dFRpYzogbnVtYmVyXG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgcGFyZW50OiBUb3dlclxuXG4gICAgc2NlbmU6IFREU2NlbmVcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBzcHJpdGU6IHN0cmluZywgdGludDogbnVtYmVyLCBwYXJlbnQ6IFRvd2VyKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAndG93ZXJ0b3BzJywgc3ByaXRlKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuc2V0VGludCh0aW50KTtcbiAgICAgICAgdGhpcy5uZXh0VGljID0gMDtcbiAgICB9XG5cbiAgICAvLyB3ZSB3aWxsIHBsYWNlIHRoZSB0b3dlciBhY2NvcmRpbmcgdG8gdGhlIGdyaWRcbiAgICBwbGFjZShpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0ZXJyYWluOiBUZXJyYWluKSB7XG4gICAgICAgIFt0aGlzLngsIHRoaXMueV0gPSB0ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXG4gICAgfVxuXG4gICAgZmlyZSgpIHtcbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteShcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIDFcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGVuZW1pZXMpIHtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGVuZW1pZXNbMF1cbiAgICAgICAgICAgIGxldCBhbmdsZSA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmRhbWFnZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmJ1bGxldFNwZWVkTW9kXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5hbmdsZSA9IChhbmdsZSArIE1hdGguUEkgLyAyKSAqIFBoYXNlci5NYXRoLlJBRF9UT19ERUc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHVwZGF0ZShkZWx0YSkge1xuICAgICAgICB0aGlzLmxhc3RUaW1lICs9IGRlbHRhXG5cbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRUaWMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcmUoKSlcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWMgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5wYXJlbnQuc3RhdHMuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGljID0gdGhpcy5sYXN0VGltZSArIDUwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFzaWNUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE11bHRpc2hvdFR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xuICAgIH1cblxuXG4gICAgZmlyZSgpIHtcbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteSh0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLCB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIDMpO1xuXG4gICAgICAgIGlmIChlbmVtaWVzICYmIGVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgZW5lbWllcykge1xuICAgICAgICAgICAgICAgIHZhciBhbmdsZSA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkQnVsbGV0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmRhbWFnZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAoYW5nbGUgKyBNYXRoLlBJIC8gMikgKiBQaGFzZXIuTWF0aC5SQURfVE9fREVHO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbmlwZXJUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmVteUNvbmZpZywgUEFVU0VfQUZURVJfV0FWRV9USU1FLCBFTkVNWV9DT05GSUdTLCBXYXZlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XG4vLyBpbXBvcnQgeyBFbmVteSwgRmF0RW5lbXl9IGZyb20gXCIuL2VuZW15XCI7XG5cblxuZXhwb3J0IGNsYXNzIFdhdmVNYW5hZ2VyIHtcbiAgICBzY2VuZTogVERTY2VuZVxuICAgIGN1cnJlbnRXYXZlOiBpbnRlZ2VyID0gMFxuICAgIG5leHRFbmVteTogaW50ZWdlciA9IDBcbiAgICBzcGF3bmVkRW5lbWllczogaW50ZWdlciA9IDBcbiAgICBkZWFkRGFuZ2VyOiBpbnRlZ2VyID0gMFxuICAgIHJlbWFpbmluZ0RhbmdlcjogaW50ZWdlciA9IDBcbiAgICB3YXZlRGlmZmljdWx0eTogaW50ZWdlciA9IDBcblxuICAgIHdhdmVBY3RpdmU6IGJvb2xlYW4gIC8vIGZhbHNlIGZvciBuZXN0ZWQgd2F2ZXNcbiAgICBuZXh0V2F2ZVRpbWU6IGludGVnZXIgPSAwXG4gICAgcmVzcGF3blF1ZXVlOiBFbmVteUNvbmZpZ1tdID0gW107XG5cbiAgICBlbmVteUludGVydmFsOiBpbnRlZ2VyXG5cbiAgICBxdWV1ZWRFbmVteTogYW55XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICAgICAgLy8gc2V0IGZhbHNlIGZvciBuZXN0ZWQgYmVoYXZpb3IgaW4gdXBkYXRlKClcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA+IDApO1xuXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApXG4gICAgICAgICAgICB0aGlzLmdldFdhdmVEaWZmaWN1bHR5KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDFlOSAvLyBhIGxvdFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFdhdmVEaWZmaWN1bHR5KCkge1xuICAgICAgICAvL1RPRE86IGFkZCBkaWZmaWN1bHR5IHNjYWxpbmcgYW5kIGJhbGFuY2luZyBmb3Igd2F2ZXNcbiAgICAgICAgdGhpcy53YXZlRGlmZmljdWx0eSA9IFdhdmVDb25maWcub3V0ZXJXYXZlRGFuZ2VyKHRoaXMuY3VycmVudFdhdmUpXG4gICAgICAgIHRoaXMucmVtYWluaW5nRGFuZ2VyID0gdGhpcy53YXZlRGlmZmljdWx0eVxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSBXYXZlQ29uZmlnLm91dGVyRW5lbXlJbnRlcnZhbFxuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFdhdmUoKSB7XG4gICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFdhdmUrKztcbiAgICAgICAgdGhpcy5nZXRXYXZlRGlmZmljdWx0eSgpO1xuICAgICAgICBQbGF5ZXJJbmZvLndhdmVIZWFsdGhSZWdlbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgd2F2ZSAnICsgdGhpcy5jdXJyZW50V2F2ZSArICcsIHdhdmUgZGlmZmljdWx0eTogJyArIHRoaXMud2F2ZURpZmZpY3VsdHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25FbmVteSgpIHtcbiAgICAgICAgLy8gVE9ETzogcmVzcGF3bmluZyBzaG91bGRuJ3QgcmVzZXQgaGVhbHRoXG4gICAgICAgIGlmICh0aGlzLnJlc3Bhd25RdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzcGF3biA9IHRoaXMucmVzcGF3blF1ZXVlLnNoaWZ0KClcbiAgICAgICAgICAgIHRoaXMucmVtYWluaW5nRGFuZ2VyIC09IHJlc3Bhd24uZGFuZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyZXNwYXduLm5hbWVdLmdldCgpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZEVuZW15ID0gdGhpcy5nZXRSYW5kRW5lbXkoXG4gICAgICAgICAgICAoZW5lbXkpID0+IGVuZW15LmRhbmdlciA8PSB0aGlzLnJlbWFpbmluZ0RhbmdlclxuICAgICAgICApXG5cbiAgICAgICAgaWYgKHJhbmRFbmVteSkge1xuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmFuZEVuZW15LmRhbmdlcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbcmFuZEVuZW15Lm5hbWVdLmdldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgPSAwO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzcGF3bihyZXNwYXduOiBFbmVteUNvbmZpZykge1xuICAgICAgICB0aGlzLnJlc3Bhd25RdWV1ZS5wdXNoKHJlc3Bhd24pO1xuICAgIH1cblxuXG4gICAgbGFzdFRpbWU6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhKSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGFcbiAgICAgICAgbGV0IGVuZW15XG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy53YXZlQWN0aXZlICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRXYXZlVGltZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmUoKTsgIC8vIG5vIHdhdmVzIGluIG5lc3RlZCBsYXllcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ0RhbmdlciA+IDAgJiYgdGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dEVuZW15KSB7XG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNwYXduRW5lbXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRlYWREYW5nZXIgPT09IHRoaXMud2F2ZURpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhdmUgXCIgKyB0aGlzLmN1cnJlbnRXYXZlICsgXCIgY29tcGxldGUhIE5leHQgd2F2ZSBpbiBcIiArIFBBVVNFX0FGVEVSX1dBVkVfVElNRSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWFkRGFuZ2VyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLndhdmVBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXZlVGltZSA9IHRoaXMubGFzdFRpbWUgKyBQQVVTRV9BRlRFUl9XQVZFX1RJTUU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucXVldWVkRW5lbXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZEVuZW15ID0gdGhpcy5nZXRSYW5kRW5lbXkoKCkgPT4gdHJ1ZSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYSA9IHRoaXMubGFzdFRpbWUgKiAoV2F2ZUNvbmZpZy5kYW5nZXJQZXJTZWModGhpcy5zY2VuZS5nZXRUb3dlclBhcmVudCgpLmxldmVsKSAqIDAuMDAxKVxuICAgICAgICAgICAgY29uc3QgYiA9ICh0aGlzLnF1ZXVlZEVuZW15LmRhbmdlciAqIDEuMClcbiAgICAgICAgICAgIGlmIChhID4gYikge1xuICAgICAgICAgICAgICAgIGVuZW15ID0gdGhpcy5zY2VuZS5hbGxFbmVtaWVzW3RoaXMucXVldWVkRW5lbXkubmFtZV0uZ2V0KCk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sYXN0VGltZSwgYilcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZEVuZW15ID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5lbXkpIHtcbiAgICAgICAgICAgIGVuZW15LnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgICAgIGVuZW15LnNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgICAgIC8vIHBsYWNlIHRoZSBlbmVteSBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhdGhcbiAgICAgICAgICAgIGVuZW15LnN0YXJ0T25QYXRoKHRoaXMuY3VycmVudFdhdmUpO1xuICAgICAgICAgICAgdGhpcy5zcGF3bmVkRW5lbWllcysrO1xuICAgICAgICAgICAgdGhpcy5uZXh0RW5lbXkgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5lbmVteUludGVydmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kRW5lbXkoZmlsdGVyX2ZuKTogRW5lbXlDb25maWcge1xuICAgICAgICBsZXQgYXZhaWxFbmVtaWVzID0gW11cbiAgICAgICAgZm9yKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7ICAvLyBTZWxlY3QgYWxsIGVuZW1pZXMgdGhhdCBjYW4gYmUgc3Bhd25lZFxuICAgICAgICAgICAgaWYgKGZpbHRlcl9mbihlbmVteSkpXG4gICAgICAgICAgICAgICAgYXZhaWxFbmVtaWVzLnB1c2goZW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF2YWlsRW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIG9uZSBvZiB0aGVtXG4gICAgICAgICAgICBsZXQgcmFuZEVuZW15ID0gYXZhaWxFbmVtaWVzW01hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogYXZhaWxFbmVtaWVzLmxlbmd0aCldO1xuICAgICAgICAgICAgcmV0dXJuIHJhbmRFbmVteVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=