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
exports.TOWER_CONFIGS = exports.Multishot = exports.Sniper = exports.Basic = exports.ENEMY_CONFIGS = exports.Fast = exports.Armoured = exports.Fat = exports.Weak = exports.WaveConfig = exports.RANGE_INDICATOR_CONFIG = exports.PAUSE_AFTER_WAVE_TIME = exports.TOWER_HEALTH_REGEN = exports.DAMAGE_TO_TOWER_HEALTH_COEF = void 0;
var enem = __webpack_require__(/*! ./enemy */ "./src/enemy.ts");
// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
exports.DAMAGE_TO_TOWER_HEALTH_COEF = 0.3;
exports.TOWER_HEALTH_REGEN = 0.00001 * 2;
exports.PAUSE_AFTER_WAVE_TIME = 3000;
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
    'armor': 0,
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
    'armor': 0,
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
    'armor': 4,
    'danger': 160,
    'spriteName': 'enemy1',
    'tint': 0xaaaaff,
};
exports.Fast = {
    'name': 'Fast',
    'class': enem.FastEnemy,
    'hp': function (wave) { return 15; },
    'speed': 1 / 10000,
    'money': 1,
    'damage': 1,
    'armor': 0,
    'danger': 80,
    'spriteName': 'enemy1',
    'tint': 0xff00aa,
};
exports.ENEMY_CONFIGS = [exports.Weak, exports.Fat, exports.Armoured, exports.Fast];
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
exports.FastEnemy = exports.ArmouredEnemy = exports.FatEnemy = exports.WeakEnemy = exports.EnemyBase = void 0;
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
    EnemyBase.prototype.startOnPath = function (wave) {
        // set the t parameter at the start of the path
        this.follower.t = 0;
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
        this.hp -= damage - this.stats.armor;
        // if hp drops below 0 we deactivate this enemy
        if (this.hp <= 0) {
            this.setActive(false);
            // this.setVisible(false);
            this.onDeath();
        }
    };
    EnemyBase.prototype.onDeath = function () {
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
var PlayerInfo = /** @class */ (function () {
    function PlayerInfo() {
    }
    PlayerInfo.money = 10;
    PlayerInfo.hp = 10;
    PlayerInfo.timeScale = 1;
    PlayerInfo.RNG = new Phaser.Math.RandomDataGenerator(["42"]);
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
            key: 'fatEnemy_walk',
            frames: this.anims.generateFrameNumbers('fatEnemy', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
    };
    // Creates new Scene, enables it, and sets it invisible
    MetaScene.prototype.addScene = function (parentScene) {
        var _a;
        var sceneLevel = ((_a = parentScene === null || parentScene === void 0 ? void 0 : parentScene.sceneLevel) !== null && _a !== void 0 ? _a : -1) + 1;
        var sceneIndex = this.scenes.length;
        var newScene = new tdScene_1.TDScene(new tdSceneConfig_1.TDSceneConfig(new terrain_1.Terrain(10, 8), sceneLevel, parentScene), this);
        this.scene.add("tdScene" + sceneIndex, newScene, true);
        this.scenes.push(newScene);
        newScene.scene.setVisible(false);
        this.scene.bringToTop('hudScene');
        return newScene;
    };
    // makes current scene invisible, makes new scene visible; doesn't change activness
    MetaScene.prototype.switchToScene = function (switchToScene, goingInside, i, j) {
        var _this = this;
        var _a;
        if (i === void 0) { i = 0; }
        if (j === void 0) { j = 0; }
        (_a = this.activeScene) === null || _a === void 0 ? void 0 : _a.setIsForeground(false, goingInside, i, j);
        switchToScene.time.addEvent({
            delay: tdScene_1.SCENE_TRANSITION_MS,
            loop: false,
            callback: function () {
                var _a;
                (_a = _this.activeScene) === null || _a === void 0 ? void 0 : _a.scene.setVisible(false);
                switchToScene.scene.setVisible(true);
                _this.activeScene = switchToScene;
                switchToScene.setIsForeground(true, goingInside, i, j);
            }
        });
        // 1.05946309436 ~ 2^(1/12), i.e. one semitone
        this.sound.setRate(1 / (Math.pow(1.05946309436, switchToScene.sceneLevel)));
    };
    MetaScene.prototype.preload = function () {
        // load the game assets
        this.load.setPath("../../assets/");
        this.load.spritesheet('enemy1', 'enemy.png', { frameWidth: 48, frameHeight: 48 });
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
        while (scene === null || scene === void 0 ? void 0 : scene.sceneParent) {
            var parent_1 = scene.sceneParent;
            parentScenes.push(parent_1);
            scene = parent_1;
        }
        return parentScenes;
    };
    MetaScene.prototype.getRootTDScene = function () {
        var scene = this.getActiveScene();
        while (scene === null || scene === void 0 ? void 0 : scene.sceneParent) {
            scene = scene.sceneParent;
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
            newButton.on('pointerdown', function () { return _this.metaScene.switchToScene(parentScenes[i], false); }, this_1.metaScene);
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
var guid_1 = __webpack_require__(/*! ../utils/guid */ "./src/utils/guid.ts");
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
            key: "tdScene" + guid_1.UUID.uuidv4(),
        }) || this;
        _this.allEnemies = {};
        _this.nextEnemy = 0;
        _this.frameNumber = 0;
        _this.terrain = config.terrain;
        _this.metaScene = metaScene;
        _this.sceneLevel = config.sceneLevel;
        _this.sceneParent = config.sceneParent;
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
            this.metaScene.switchToScene(potentialExistingTower.innerTowerScene, true, i, j);
        }
        var end = this.terrain.pathTiles[this.terrain.pathTiles.length - 1];
        if (i === end[0] && j === end[1] && this.sceneParent) {
            this.metaScene.switchToScene(this.sceneParent, false, i, j);
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
    function TDSceneConfig(terrain, sceneLevel, sceneParent) {
        this.terrain = terrain;
        this.sceneLevel = sceneLevel;
        this.sceneParent = sceneParent;
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
            var newScene = this.scene.metaScene.addScene(this.scene);
            if (tower) {
                tower.make(i, j, newScene, this.towerTypes[towerType][1], this.towerTypes[towerType][0]);
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
    Tower.prototype.make = function (i, j, innerTowerScene, config, towerClassName) {
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
        this.levelText = this.scene.add.text(xCoord + 15, yCoord, "" + this.level, {
            fontSize: "20px",
            color: "white",
            backgroundColor: "black",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.add(this.levelText);
        this.innerTowerScene = innerTowerScene;
        this.innerTowerScene.onEnemyReachedEnd(function (damage) {
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

/***/ "./src/utils/guid.ts":
/*!***************************!*\
  !*** ./src/utils/guid.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UUID = void 0;
var playerInfo_1 = __webpack_require__(/*! ../playerInfo */ "./src/playerInfo.ts");
var UUID = /** @class */ (function () {
    function UUID() {
    }
    UUID.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = playerInfo_1.PlayerInfo.RNG.frac() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return UUID;
}());
exports.UUID = UUID;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvTWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvaHVkU2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjZW5lcy90ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZUNvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVycmFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90b3dlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2d1aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFD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QUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RixPQUFPLFNBQVM7U0FDbkI7YUFBTTtZQUNILE9BQU8sSUFBSTtTQUNkO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQWpJWSxrQ0FBVyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxuXG5leHBvcnQgY29uc3QgUkFESVVTID0gMTBcblxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuXG4gICAgc2NlbmU6IFREU2NlbmVcblxuICAgIGR4OiBudW1iZXIgPSAwXG4gICAgZHk6IG51bWJlciA9IDBcbiAgICBsaWZlc3BhbjogbnVtYmVyID0gMFxuICAgIHNwZWVkOiBudW1iZXJcbiAgICBkYW1hZ2U6IGludGVnZXJcblxuICAgIGJ1bGxldEltYWdlOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VcbiAgICBwYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlclxuICAgIGVtaXR0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCk7XG5cbiAgICAgICAgdGhpcy5keCA9IDA7XG4gICAgICAgIHRoaXMuZHkgPSAwO1xuICAgICAgICB0aGlzLmxpZmVzcGFuID0gMDtcblxuICAgICAgICB0aGlzLnNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNjAwLCAxKTtcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZSA9IHRoaXMuc2NlbmUuYWRkLmltYWdlKDAsIDAsICdidWxsZXQnKVxuICAgIH1cblxuICAgIGZpcmUoeCwgeSwgYW5nbGUsIGRhbWFnZSwgdG93ZXJSYW5nZSwgc3BlZWRNb2QpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCh0b3dlclJhbmdlICogc3BlZWRNb2QsIDEpO1xuXG5cbiAgICAgICAgdGhpcy5hZGQodGhpcy5idWxsZXRJbWFnZSlcblxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMuc2NlbmUuYWRkLnBhcnRpY2xlcygncGFydGljbGVfcmVkJyk7XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAvLyAgQnVsbGV0cyBmaXJlIGZyb20gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuIHRvIHRoZSBnaXZlbiB4L3lcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS5zZXRQb3NpdGlvbih4LCB5KTtcblxuICAgICAgICAvLyAgd2UgZG9uJ3QgbmVlZCB0byByb3RhdGUgdGhlIGJ1bGxldHMgYXMgdGhleSBhcmUgcm91bmRcbiAgICAgICAgLy8gIHRoaXMuc2V0Um90YXRpb24oYW5nbGUpO1xuICAgICAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBicmluZyB0byBmcm9udFxuXG4gICAgICAgIHRoaXMuZHggPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHRoaXMuZHkgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5saWZlc3BhbiA9IDEwMDAvc3BlZWRNb2Q7XG5cbiAgICAgICAgdGhpcy5lbWl0dGVyID0gdGhpcy5wYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XG4gICAgICAgICAgICBzcGVlZDogMTAwLFxuICAgICAgICAgICAgc2NhbGU6IHsgc3RhcnQ6IDAuMywgZW5kOiAwIH0sXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnLFxuICAgICAgICAgICAgbGlmZXNwYW46IDEwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZW1pdHRlci5zdGFydEZvbGxvdyh0aGlzLmJ1bGxldEltYWdlKTtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmV4cGxvZGUoMTAsIHRoaXMuYnVsbGV0SW1hZ2UueCwgdGhpcy5idWxsZXRJbWFnZS55KVxuICAgIH1cblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcblxuICAgICAgICB0aGlzLmxpZmVzcGFuIC09IGRlbHRhO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueCArPSB0aGlzLmR4ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueSArPSB0aGlzLmR5ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XG5cbiAgICAgICAgKHRoaXMuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkuc2V0Q2lyY2xlKFJBRElVUywgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5kZXN0cm95KCk7IC8vIGRpc2FibGUgZW1pdHRvciAoYWxzbyBjb3VsZCBleHBsb2RlIGl0KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZW5lbSBmcm9tIFwiLi9lbmVteVwiO1xuXG4vLyBlbmVteSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSBob3cgbXVjaCBoZWFsdGggdG93ZXIgbG9zZXNcbi8vICh0b3dlciBoZWFsdGggaXMgZnJvbSAwIHRvIDEpXG5leHBvcnQgY29uc3QgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGID0gMC4zXG5cbmV4cG9ydCBjb25zdCBUT1dFUl9IRUFMVEhfUkVHRU4gPSAwLjAwMDAxICogMlxuXG5leHBvcnQgY29uc3QgUEFVU0VfQUZURVJfV0FWRV9USU1FID0gMzAwMDtcblxuZXhwb3J0IGNvbnN0IFJBTkdFX0lORElDQVRPUl9DT05GSUcgPSB7XG4gICAgJ2NvbG91cic6IDB4YmJiYmZmLFxuICAgICdhbHBoYSc6IDIxMCxcbiAgICAnZWRnZUNvbG91cic6IDB4ODA4MGZmLFxuICAgICdlZGdlV2lkdGgnOiA0XG59O1xuXG5leHBvcnQgY29uc3QgV2F2ZUNvbmZpZyA9IHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIG91dGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG93IG11Y2ggdGltZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIHNwYXducyBpbiBhIHdhdmVcbiAgICBvdXRlckVuZW15SW50ZXJ2YWw6IDUwMCxcbiAgICAvLyBIb3cgbXVjaCBkYW5nZXIgaW4gYSB3YXZlXG4gICAgb3V0ZXJXYXZlRGFuZ2VyOiAod2F2ZSkgPT4gd2F2ZSAqIDQwLFxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBpbm5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBwZXIgc2Vjb25kIGlzIGdlbmVyYXRlZSBpbiBpbm5lciBkZXB0aHM/XG4gICAgZGFuZ2VyUGVyU2VjOiAobGV2ZWwpID0+IDIwKyBsZXZlbCoxNSxcbn1cblxuZXhwb3J0IHR5cGUgRW5lbXlDb25maWcgPSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgY2xhc3M6IGFueVxuICAgIGhwOiAoaW50ZWdlcikgPT4gaW50ZWdlclxuICAgIHNwZWVkOiBudW1iZXJcbiAgICBtb25leTogaW50ZWdlclxuICAgIGRhbWFnZTogaW50ZWdlclxuICAgIGFybW9yOiBpbnRlZ2VyXG4gICAgZGFuZ2VyOiBpbnRlZ2VyXG4gICAgc3ByaXRlTmFtZTogc3RyaW5nXG4gICAgdGludDogaW50ZWdlclxufVxuXG5leHBvcnQgY29uc3QgV2VhazogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnV2VhaycsXG4gICAgJ2NsYXNzJzogZW5lbS5XZWFrRW5lbXksXG4gICAgJ2hwJzogKHdhdmUpID0+IDI1LFxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcbiAgICAnbW9uZXknOiAxLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vcic6IDAsXG4gICAgJ2Rhbmdlcic6IDIwLFxuICAgICdzcHJpdGVOYW1lJzogJ2VuZW15MScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbn1cblxuZXhwb3J0IGNvbnN0IEZhdDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnRmF0JyxcbiAgICAnY2xhc3MnOiBlbmVtLkZhdEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxMDAsXG4gICAgJ3NwZWVkJzogMSAvIDQwMDAwLFxuICAgICdtb25leSc6IDIsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW9yJzogMCxcbiAgICAnZGFuZ2VyJzogMjQwLFxuICAgICdzcHJpdGVOYW1lJzogJ2ZhdEVuZW15JyxcbiAgICAndGludCc6IDB4ZmZmZmZmLFxufVxuXG5leHBvcnQgY29uc3QgQXJtb3VyZWQ6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ0FybW91cmVkJyxcbiAgICAnY2xhc3MnOiBlbmVtLkFybW91cmVkRW5lbXksXG4gICAgJ2hwJzogKHdhdmUpID0+IDMwLFxuICAgICdzcGVlZCc6IDEgLyAzMDAwMCxcbiAgICAnbW9uZXknOiAyLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vcic6IDQsXG4gICAgJ2Rhbmdlcic6IDE2MCxcbiAgICAnc3ByaXRlTmFtZSc6ICdlbmVteTEnLFxuICAgICd0aW50JzogMHhhYWFhZmYsXG59XG5cbmV4cG9ydCBjb25zdCBGYXN0OiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdGYXN0JyxcbiAgICAnY2xhc3MnOiBlbmVtLkZhc3RFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTUsXG4gICAgJ3NwZWVkJzogMSAvIDEwMDAwLFxuICAgICdtb25leSc6IDEsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW9yJzogMCxcbiAgICAnZGFuZ2VyJzogODAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZW5lbXkxJyxcbiAgICAndGludCc6IDB4ZmYwMGFhLFxufVxuXG5leHBvcnQgY29uc3QgRU5FTVlfQ09ORklHUyA9IFtXZWFrLCBGYXQsIEFybW91cmVkLCBGYXN0XVxuXG5cbmV4cG9ydCB0eXBlIFRvd2VyQ29uZmlnID0ge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGRhbWFnZTogKGludGVnZXIpID0+IG51bWJlclxuICAgIGZpcmVyYXRlOiAoaW50ZWdlcikgPT4gbnVtYmVyXG4gICAgcmFuZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcbiAgICBidWxsZXRTcGVlZE1vZDogbnVtYmVyXG4gICAgcHJpY2U6IG51bWJlclxuICAgIHNwcml0ZUJhc2U6IGludGVnZXJcbiAgICBzcHJpdGVNaWQ6IGludGVnZXJcbiAgICBzcHJpdGVUb3A6IGludGVnZXJcbiAgICB0aW50QmFzZTogaW50ZWdlclxuICAgIHRpbnRNaWQ6IGludGVnZXJcbiAgICB0aW50VG9wOiBpbnRlZ2VyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljOiBUb3dlckNvbmZpZyA9IHtcbiAgICAnbmFtZSc6IFwiQmFzaWNcIixcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMTAgKyAxNSAqIChsZXZlbC0xKSxcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiBNYXRoLm1heCggMTUwMCAtIDUwICogbGV2ZWwsIDEwMDApLFxuICAgICdyYW5nZSc6IGxldmVsID0+IDEyNSxcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA0LFxuICAgICdwcmljZSc6IDUsXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxuICAgICdzcHJpdGVNaWQnOiAwLFxuICAgICdzcHJpdGVUb3AnOiAwLFxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxuICAgICd0aW50TWlkJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRUb3AnOiAweGFhYWFmZixcbiAgICAnZGVzY3JpcHRpb24nOiBcIk5vdGhpbmcgZmFuY3kuIERhbWFnZSBhbmQgZmlyZSByYXRlIGdyb3cgd2l0aCBsZXZlbC5cIixcbn1cblxuXG5leHBvcnQgY29uc3QgU25pcGVyOiBUb3dlckNvbmZpZyA9IHtcbiAgICAnbmFtZSc6IFwiU25pcGVyXCIsXG4gICAgJ2RhbWFnZSc6IGxldmVsID0+IDI1ICsgNTAgKiAobGV2ZWwtMSksXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gNDAwMCxcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiAyMDAgKyAzNSAqIGxldmVsLFxuICAgICdidWxsZXRTcGVlZE1vZCc6IDUsXG4gICAgJ3ByaWNlJzogMjAsXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxuICAgICdzcHJpdGVNaWQnOiAwLFxuICAgICdzcHJpdGVUb3AnOiAxLFxuICAgICd0aW50QmFzZSc6IDB4YmJmZmJiLFxuICAgICd0aW50TWlkJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRUb3AnOiAweDAwZmYwMCxcbiAgICAnZGVzY3JpcHRpb24nOiBcIkxvbmcgcmFuZ2UsIGJ1dCBmaXJlcyBzbG93bHkuIERhbWFnZSBhbmQgcmFuZ2UgZ3JvdyB3aXRoIGxldmVsLlwiLFxufVxuXG5cbmV4cG9ydCBjb25zdCBNdWx0aXNob3Q6IFRvd2VyQ29uZmlnID0ge1xuICAgICduYW1lJzogXCJNdWx0aXNob3RcIixcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gNSArIDEwKihsZXZlbC0xKSxcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiBNYXRoLm1heCgxMzAwIC0gNTAqbGV2ZWwsIDEwMDApLFxuICAgICdyYW5nZSc6IGxldmVsID0+IDkwLFxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXG4gICAgJ3ByaWNlJzogMTAsXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxuICAgICdzcHJpdGVNaWQnOiAwLFxuICAgICdzcHJpdGVUb3AnOiAyLFxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxuICAgICd0aW50TWlkJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRUb3AnOiAweGZmMDAwMCxcbiAgICAnZGVzY3JpcHRpb24nOiBcIkNhbiBzaG9vdCBhdCBtdWx0aXBsZSBlbmVtaWVzIGF0IG9uY2UuIERhbWFnZSBhbmQgZmlyZSByYXRlIGdyb3cgd2l0aCBsZXZlbC5cIixcbn1cblxuZXhwb3J0IGNvbnN0IFRPV0VSX0NPTkZJR1MgPSBbQmFzaWMsIE11bHRpc2hvdCwgU25pcGVyXSIsIi8vIGltcG9ydCB7IEdyaWRQb3NpdGlvbiwgUG9zaXRpb24sIFRlcnJhaW4gfSBmcm9tIFwiLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgKiBhcyBjZmcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBIdWRTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9odWRTY2VuZVwiO1xuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL01ldGFTY2VuZVwiO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcbiAgICBzdGF0czogY2ZnLkVuZW15Q29uZmlnO1xuXG4gICAgZm9sbG93ZXI6IGFueVxuICAgIGhwOiBpbnRlZ2VyXG4gICAgeU9mZnNldDogbnVtYmVyID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKC0yMCwgMjApO1xuICAgIHhPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcbiAgICBzY2VuZTogVERTY2VuZSAvLyB0eXBlIGFzc2VydGlvblxuICAgIHNwZWVkOiBudW1iZXI7XG5cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBzdGF0cykge1xuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgc3RhdHMuc3ByaXRlTmFtZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0cyA9IHN0YXRzO1xuICAgICAgICB0aGlzLmZvbGxvd2VyID0geyB0OiAwLCB2ZWM6IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCkgfTtcbiAgICB9XG5cbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG4gICAgICAgIC8vIG1vdmUgdGhlIHQgcG9pbnQgYWxvbmcgdGhlIHBhdGgsIDAgaXMgdGhlIHN0YXJ0IGFuZCAxIGlzIHRoZSBlbmRcbiAgICAgICAgdGhpcy5mb2xsb3dlci50ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcblxuICAgICAgICAvLyBnZXQgdGhlIG5ldyB4IGFuZCB5IGNvb3JkaW5hdGVzIGluIHZlY1xuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcblxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA+IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudmVjLnggPCB0aGlzLnggLSB0aGlzLnhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgZW5lbXkgeCBhbmQgeSB0byB0aGUgbmV3bHkgb2J0YWluZWQgeCBhbmQgeVxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZm9sbG93ZXIudmVjLnggKyB0aGlzLnhPZmZzZXQsIHRoaXMuZm9sbG93ZXIudmVjLnkgKyB0aGlzLnlPZmZzZXQpO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXRoLCByZW1vdmUgdGhlIGVuZW15XG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnQgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5yZWFjaEVuZCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFscGhhID0gMVxuICAgICAgICB0aGlzLmFuZ2xlID0gMFxuICAgICAgICB0aGlzLnNjYWxlID0gMVxuICAgIH1cblxuICAgIHJlYWNoRW5kKCkge1xuICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlbWFpbmluZ0RhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlcjtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBodWRTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwiaHVkU2NlbmVcIikgYXMgSHVkU2NlbmVcblxuICAgICAgICAgICAgUGxheWVySW5mby5ocCAtPSB0aGlzLnN0YXRzLmRhbWFnZTtcbiAgICAgICAgICAgIGh1ZFNjZW5lLmhwUmVkbmVzcyA9IDFcblxuICAgICAgICAgICAgY29uc3QgbWV0YVNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJtZXRhU2NlbmVcIikgYXMgTWV0YVNjZW5lXG4gICAgICAgICAgICBtZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKS5jYW1lcmFzLm1haW4uc2hha2UoMjAwLCAwLjAwNSlcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZXNwYXduKHRoaXMuc3RhdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5lbmVteUVuZENhbGxiYWNrKHRoaXMuc3RhdHMuZGFtYWdlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRPblBhdGgod2F2ZSkge1xuICAgICAgICAvLyBzZXQgdGhlIHQgcGFyYW1ldGVyIGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgPSAwO1xuXG4gICAgICAgIHRoaXMuaHAgPSB0aGlzLnN0YXRzLmhwKHdhdmUpO1xuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5zdGF0cy5zcGVlZDtcbiAgICAgICAgdGhpcy50aW50ID0gdGhpcy5zdGF0cy50aW50O1xuXG4gICAgICAgIC8vIGdldCB4IGFuZCB5IG9mIHRoZSBnaXZlbiB0IHBvaW50XG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KHRoaXMuZm9sbG93ZXIudCwgdGhpcy5mb2xsb3dlci52ZWMpO1xuXG4gICAgICAgIC8vIHNldCB0aGUgeCBhbmQgeSBvZiBvdXIgZW5lbXkgdG8gdGhlIHJlY2VpdmVkIGZyb20gdGhlIHByZXZpb3VzIHN0ZXBcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmZvbGxvd2VyLnZlYy54LCB0aGlzLmZvbGxvd2VyLnZlYy55KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBmcmFtZVJhdGUgPSBNYXRoLm1pbig2MCwgdGhpcy5zdGF0cy5zcGVlZCAqIDQwMDAwICogMTUpXG4gICAgICAgIGlmICh0aGlzLnN0YXRzLnNwcml0ZU5hbWUgPT0gXCJmYXRFbmVteVwiKSB7IC8vIGhhY2tcbiAgICAgICAgICAgIGZyYW1lUmF0ZSAqPSAwLjVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbXMucGxheSh7XG4gICAgICAgICAgICBrZXk6IGAke3RoaXMuc3RhdHMuc3ByaXRlTmFtZX1fd2Fsa2AsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IGZyYW1lUmF0ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWNlaXZlRGFtYWdlKGRhbWFnZTogaW50ZWdlcikge1xuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZSAtIHRoaXMuc3RhdHMuYXJtb3I7XG5cbiAgICAgICAgLy8gaWYgaHAgZHJvcHMgYmVsb3cgMCB3ZSBkZWFjdGl2YXRlIHRoaXMgZW5lbXlcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub25EZWF0aCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlYXRoKCkgeyAgLy8gb3ZlcnJpZGUgdGhpcyBmb3Igc3BlY2lhbCBvbi1kZWF0aCBhYmlsaXRpZXNcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkgeyAgLy8gQWRkIGdvbGQgaW4gYmFzZSBsYXllciBvbmx5XG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmRlYWREYW5nZXIgKz0gdGhpcy5zdGF0cy5kYW5nZXJcbiAgICAgICAgICAgIFBsYXllckluZm8ubW9uZXkgKz0gdGhpcy5zdGF0cy5tb25leTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICAgICAgYWxwaGE6IDAsXG4gICAgICAgICAgICBhbmdsZTogUGxheWVySW5mby5STkcuc2lnbigpICogMTgwLFxuICAgICAgICAgICAgc2NhbGU6IDAuNSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSg2MDAsIDgwMCksXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJ1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXZWFrRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuV2VhaylcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYXRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5GYXQpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJtb3VyZWRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5Bcm1vdXJlZClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGYXN0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuRmFzdClcbiAgICB9XG59IiwiaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcbmltcG9ydCB7IFRJTEVfU0laRSB9IGZyb20gXCIuL3RlcnJhaW5cIlxuXG5leHBvcnQgY2xhc3MgSGVhbHRoQmFyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XG4gICAgc3RhdGljIEhFQUxUSF9DT0xPUiA9IDB4ZjhmZjM2IC8vMHhmZjQ0NDRcbiAgICBzdGF0aWMgSEVBTFRIX0xPU1NfQ09MT1IgPSAweDdkN2Q3ZCAvLyAweDQ0ZmY0NFxuXG4gICAgc2NlbmU6IFREU2NlbmVcblxuICAgIHByaXZhdGUgX2hlYWx0aDogbnVtYmVyID0gMSAgLy8gMCB0byAxXG4gICAgc2xvd0hlYWx0aDogbnVtYmVyXG5cbiAgICBiZ0JhcjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIGhlYWx0aEJhcjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuICAgIHNsb3dIZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcblxuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIHdpZHRoOiBudW1iZXJcbiAgICBtYXhIZWFsdGg6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDApXG4gICAgfVxuXG4gICAgbWFrZSh4LCB5LCB3aWR0aCwgaGVhbHRoPTApIHtcbiAgICAgICAgdGhpcy54ID0geFxuICAgICAgICB0aGlzLnkgPSB5XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxuXG4gICAgICAgIC8vIGhlYWx0aCBiYXIgYmFzZS9iYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuYmdCYXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgd2lkdGggKyA0LCA2LCAweDAwMDAwMClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5iZ0JhcilcblxuICAgICAgICAvLyB2aXN1YWxpemF0aW9uIG9mIGhlYWx0aCBsb3NzZXNcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKFxuICAgICAgICAgICAgMCwgMCxcbiAgICAgICAgICAgIHdpZHRoLCA0LFxuICAgICAgICAgICAgSGVhbHRoQmFyLkhFQUxUSF9MT1NTX0NPTE9SLFxuICAgICAgICApXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuc2xvd0hlYWx0aEJhcilcbiAgICAgICAgXG4gICAgICAgIC8vIGhlYWx0aCBiYXIgaXRzZWxmXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKFxuICAgICAgICAgICAgMCwgMCxcbiAgICAgICAgICAgIHdpZHRoLCA0LFxuICAgICAgICAgICAgSGVhbHRoQmFyLkhFQUxUSF9DT0xPUixcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLmhlYWx0aEJhcilcblxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSBoZWFsdGhcbiAgICB9XG5cbiAgICBzZXQgaGVhbHRoKGgpIHtcbiAgICAgICAgdGhpcy5faGVhbHRoID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgaCkpXG4gICAgfVxuXG4gICAgZ2V0IGhlYWx0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aFxuICAgIH1cblxuICAgIHB1YmxpYyBsZXZlbFVwKCkge1xuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSAwO1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XG4gICAgfVxuXG4gICAgdXBkYXRlKGRlbHRhKSB7XG4gICAgICAgIGNvbnN0IGNvZWYgPSBNYXRoLnBvdygwLjk5LCBkZWx0YS8xMDAwICogNjApXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IGNvZWYgKiB0aGlzLnNsb3dIZWFsdGggKyAoMSAtIGNvZWYpICogdGhpcy5oZWFsdGhcblxuICAgICAgICB0aGlzLmhlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLmhlYWx0aFxuICAgICAgICB0aGlzLnNsb3dIZWFsdGhCYXIud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5zbG93SGVhbHRoXG4gICAgfVxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXG5pbXBvcnQgeyBIdWRTY2VuZSwgSFVEX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvaHVkU2NlbmUnO1xuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSAnLi9zY2VuZXMvTWV0YVNjZW5lJztcbmltcG9ydCB7IFREU2NlbmUsIFREX1NDRU5FX0hFSUdIVCwgVERfU0NFTkVfV0lEVEggfSBmcm9tICcuL3NjZW5lcy90ZFNjZW5lJ1xuaW1wb3J0IHsgVERTY2VuZUNvbmZpZyB9IGZyb20gJy4vc2NlbmVzL3RkU2NlbmVDb25maWcnO1xuaW1wb3J0IHsgVGVycmFpbiB9IGZyb20gJy4vdGVycmFpbic7XG5cbmxldCBtZXRhU2NlbmUgPSBuZXcgTWV0YVNjZW5lKClcbmxldCBodWRTY2VuZSA9IG5ldyBIdWRTY2VuZShtZXRhU2NlbmUpO1xuXG5sZXQgbGV2ZWxzID0gW1xuICBtZXRhU2NlbmUsXG4gIGh1ZFNjZW5lLFxuXVxuXG5jb25zdCBnYW1lQ29uZmlnID0ge1xuICB0eXBlOiBQaGFzZXIuQVVUTyxcbiAgcGFyZW50OiAnY29udGVudCcsXG4gIHdpZHRoOiBURF9TQ0VORV9XSURUSCArIEhVRF9XSURUSCAqIDIsXG4gIGhlaWdodDogVERfU0NFTkVfSEVJR0hULFxuICBwaHlzaWNzOiB7XG4gICAgZGVmYXVsdDogJ2FyY2FkZSdcbiAgfSxcbiAgc2NlbmU6IGxldmVscyxcbiAgc2VlZDogW1wiNDJcIl1cbn07XG5cbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImV4cG9ydCBjbGFzcyBQbGF5ZXJJbmZvIHtcbiAgICBzdGF0aWMgbW9uZXk6IG51bWJlciA9IDEwO1xuICAgIHN0YXRpYyBocDogbnVtYmVyID0gMTA7XG4gICAgc3RhdGljIHRpbWVTY2FsZTogbnVtYmVyID0gMTtcbiAgICBzdGF0aWMgUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoW1wiNDJcIl0pXG59IiwiaW1wb3J0IHsgVGVycmFpbiB9IGZyb20gXCIuLi90ZXJyYWluXCJcbmltcG9ydCB7IFNDRU5FX1RSQU5TSVRJT05fTVMsIFREU2NlbmUgfSBmcm9tIFwiLi90ZFNjZW5lXCI7XG5pbXBvcnQgeyBURFNjZW5lQ29uZmlnIH0gZnJvbSBcIi4vdGRTY2VuZUNvbmZpZ1wiXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGtleTogJ21ldGFTY2VuZScsXG59O1xuXG5leHBvcnQgY2xhc3MgTWV0YVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIHB1YmxpYyBzY2VuZXM6IFREU2NlbmVbXVxuICAgIHB1YmxpYyBhY3RpdmVTY2VuZTogVERTY2VuZVxuICAgIG1haW5Tb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2NlbmVzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IHRoaXMuYWRkU2NlbmUoKTtcbiAgICAgICAgdGhpcy5zY2VuZXNbMF0uc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgdGhpcy5zY2VuZS5zdGFydChcImh1ZFNjZW5lXCIpO1xuXG4gICAgICAgIHRoaXMubWFpblNvdW5kID0gdGhpcy5zb3VuZC5hZGQoXCJtYWluX211c2ljXCIsIHtcImxvb3BcIjogdHJ1ZSwgXCJ2b2x1bWVcIjogMC4xfSk7XG4gICAgICAgIHRoaXMubWFpblNvdW5kLnBsYXkoKTtcblxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdlbmVteTFfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2VuZW15MScsIHsgc3RhcnQ6IDAsIGVuZDogNyB9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdmYXRFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZmF0RW5lbXknLCB7IHN0YXJ0OiAwLCBlbmQ6IDkgfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGVzIG5ldyBTY2VuZSwgZW5hYmxlcyBpdCwgYW5kIHNldHMgaXQgaW52aXNpYmxlXG4gICAgcHVibGljIGFkZFNjZW5lKHBhcmVudFNjZW5lPzogVERTY2VuZSk6IFREU2NlbmUge1xuICAgICAgICBsZXQgc2NlbmVMZXZlbCA9IChwYXJlbnRTY2VuZT8uc2NlbmVMZXZlbCA/PyAtMSkgKyAxO1xuXG4gICAgICAgIGxldCBzY2VuZUluZGV4ID0gdGhpcy5zY2VuZXMubGVuZ3RoO1xuICAgICAgICBsZXQgbmV3U2NlbmUgPSBuZXcgVERTY2VuZShcbiAgICAgICAgICAgIG5ldyBURFNjZW5lQ29uZmlnKG5ldyBUZXJyYWluKDEwLCA4KSwgc2NlbmVMZXZlbCwgcGFyZW50U2NlbmUpLFxuICAgICAgICAgICAgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoXG4gICAgICAgICAgICBgdGRTY2VuZSR7c2NlbmVJbmRleH1gLFxuICAgICAgICAgICAgbmV3U2NlbmUsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2NlbmVzLnB1c2gobmV3U2NlbmUpXG4gICAgICAgIG5ld1NjZW5lLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1NjZW5lO1xuICAgIH1cblxuXG4gICAgLy8gbWFrZXMgY3VycmVudCBzY2VuZSBpbnZpc2libGUsIG1ha2VzIG5ldyBzY2VuZSB2aXNpYmxlOyBkb2Vzbid0IGNoYW5nZSBhY3Rpdm5lc3NcbiAgICBwdWJsaWMgc3dpdGNoVG9TY2VuZShzd2l0Y2hUb1NjZW5lOiBURFNjZW5lLCBnb2luZ0luc2lkZTogYm9vbGVhbiwgaSA9IDAsIGogPSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNldElzRm9yZWdyb3VuZChmYWxzZSwgZ29pbmdJbnNpZGUsIGksIGopO1xuXG4gICAgICAgIHN3aXRjaFRvU2NlbmUudGltZS5hZGRFdmVudCh7XG4gICAgICAgICAgICBkZWxheTogU0NFTkVfVFJBTlNJVElPTl9NUyxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lPy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgIHN3aXRjaFRvU2NlbmUuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSBzd2l0Y2hUb1NjZW5lXG4gICAgICAgICAgICAgICAgc3dpdGNoVG9TY2VuZS5zZXRJc0ZvcmVncm91bmQodHJ1ZSwgZ29pbmdJbnNpZGUsIGksIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIDEuMDU5NDYzMDk0MzYgfiAyXigxLzEyKSwgaS5lLiBvbmUgc2VtaXRvbmVcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRSYXRlKDEvKE1hdGgucG93KDEuMDU5NDYzMDk0MzYsIHN3aXRjaFRvU2NlbmUuc2NlbmVMZXZlbCkpKVxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgICAgICAvLyBsb2FkIHRoZSBnYW1lIGFzc2V0c1xuICAgICAgICB0aGlzLmxvYWQuc2V0UGF0aChcIi4uLy4uL2Fzc2V0cy9cIilcblxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2VuZW15MScsICdlbmVteS5wbmcnLCB7IGZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDggfSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZmF0RW5lbXknLCAnY2hvbmsucG5nJywgeyBmcmFtZVdpZHRoOiA1NiwgZnJhbWVIZWlnaHQ6IDU2IH0pO1xuXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJ2J1bGxldC5wbmcnKTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0aWxlc2V0JyxcbiAgICAgICAgICAgICd0aWxlc2V0LnBuZycsXG4gICAgICAgICAgICB7IGZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjQgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VydG9wcycsXG4gICAgICAgICAgICAndG93ZXJ0b3AucG5nJyxcbiAgICAgICAgICAgIHsgZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NCB9XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcm1pZHMnLFxuICAgICAgICAgICAgJ3Rvd2VybWlkLnBuZycsXG4gICAgICAgICAgICB7IGZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjQgfVxuICAgICAgICApXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJiYXNlcycsXG4gICAgICAgICAgICAndG93ZXJiYXNlLnBuZycsXG4gICAgICAgICAgICB7IGZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjQgfVxuICAgICAgICApXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGVfcmVkJywgJ3BhcnRpY2xlX3JlZC5wbmcnKTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oXCJtYWluX211c2ljXCIsIFwiZ2FtZWphbV9MRDQ4Lm9nZ1wiKVxuICAgIH1cblxuICAgIGdldEFjdGl2ZVNjZW5lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVTY2VuZTtcbiAgICB9XG5cbiAgICBnZXRQYXJlbnRTY2VuZXNUb1Jvb3QoKSB7XG4gICAgICAgIGxldCBwYXJlbnRTY2VuZXM6IFREU2NlbmVbXSA9IFtdXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0QWN0aXZlU2NlbmUoKTtcblxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50KSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gc2NlbmUuc2NlbmVQYXJlbnQ7XG4gICAgICAgICAgICBwYXJlbnRTY2VuZXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgc2NlbmUgPSBwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50U2NlbmVzO1xuICAgIH1cblxuICAgIGdldFJvb3RURFNjZW5lKCkge1xuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldEFjdGl2ZVNjZW5lKCk7XG5cbiAgICAgICAgd2hpbGUgKHNjZW5lPy5zY2VuZVBhcmVudCkge1xuICAgICAgICAgICAgc2NlbmUgPSBzY2VuZS5zY2VuZVBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzY2VuZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBUb3dlckNvbmZpZywgVE9XRVJfQ09ORklHUywgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgTUFYX0hFSUdIVCwgTUFYX1dJRFRILCBUZXJyYWluLCBUSUxFX1NJWkUgfSBmcm9tIFwiLi4vdGVycmFpblwiO1xuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi4vdG93ZXJzXCI7XG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9NZXRhU2NlbmVcIjtcbmltcG9ydCB7IFREU2NlbmUsIFREX1NDRU5FX0hFSUdIVCwgVERfU0NFTkVfV0lEVEggfSBmcm9tIFwiLi90ZFNjZW5lXCI7XG5cbmNvbnN0IEhVRF9CR19DT0xPUiA9IDB4ZmY4YTZkICAvLzB4ZmZhYTdkXG5leHBvcnQgY29uc3QgSFVEX1dJRFRIID0gVElMRV9TSVpFICogM1xuXG5leHBvcnQgY2xhc3MgSHVkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuXG4gICAgbW9uZXlUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIHdhdmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGhwVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBocFJlZG5lc3M6IG51bWJlciAvLyAwIHRvIDFcbiAgICBkZXB0aFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgZ29VcFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgZGVzY3JpcHRpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmU7XG4gICAgYmFja1RvUm9vdFNjZW5lQnV0dG9uOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBidXlUb3dlckljb25zOiBCdXlUb3dlckljb25bXVxuXG4gICAgbGFzdEFjdGl2ZVNjZW5lOiBURFNjZW5lXG4gICAgcGFyZW50U2NlbmVzSW1hZ2VzOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VbXVxuICAgIHNsb3dTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICAgIGZhc3RTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuXG4gICAgY29uc3RydWN0b3IobWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBrZXk6IFwiaHVkU2NlbmVcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IHcgPSBIVURfV0lEVEhcbiAgICAgICAgbGV0IGggPSBUSUxFX1NJWkUgKiBNQVhfSEVJR0hUXG4gICAgICAgIGNvbnN0IHhMZWZ0ID0gdyAvIDJcbiAgICAgICAgY29uc3QgeFJpZ2h0ID0gdyArIFREX1NDRU5FX1dJRFRIICsgdyAvIDJcblxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUodyAvIDIsIGggLyAyLCB3LCBoLCBIVURfQkdfQ09MT1IpXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIHhSaWdodCwgaCAvIDIsXG4gICAgICAgICAgICB3LCBoLFxuICAgICAgICAgICAgSFVEX0JHX0NPTE9SLFxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5tb25leVRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCAyMCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLm1vbmV5VGV4dC5zZXRPcmlnaW4oMC41KVxuICAgICAgICB0aGlzLmhwVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMuaHBUZXh0LnNldE9yaWdpbigwLjUpXG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gMFxuXG4gICAgICAgIHRoaXMud2F2ZVRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA2MCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLndhdmVUZXh0LnNldE9yaWdpbigwLjUpXG5cbiAgICAgICAgdGhpcy5kZXB0aFRleHQgPSB0aGlzLmFkZC50ZXh0KHhSaWdodCwgMjAsIFwiRGVwdGg6IFwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMuZGVwdGhUZXh0LnNldE9yaWdpbigwLjUpXG5cbiAgICAgICAgdGhpcy5nb1VwVGV4dCA9IHRoaXMuYWRkLnRleHQoeFJpZ2h0LCA1MCwgXCJHbyB1cCB0bzpcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldE9yaWdpbigwLjUpXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0VmlzaWJsZShmYWxzZSlcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgMzAwLCBcIkRlc2NyaXB0aW9uXCIsIHsgZm9udFNpemU6ICcxMHB0JyB9KTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0V29yZFdyYXBXaWR0aChIVURfV0lEVEggLSAxMCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucyA9IFtdO1xuICAgICAgICBsZXQgdG93ZXJUeXBlSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0b3dlckNvbmZpZyBvZiBUT1dFUl9DT05GSUdTKSB7XG4gICAgICAgICAgICB0aGlzLmJ1eVRvd2VySWNvbnMucHVzaChuZXcgQnV5VG93ZXJJY29uKHRoaXMsIHcgLyAyLCAxMTAgKyA3MCAqIHRvd2VyVHlwZUluZGV4LCB0b3dlckNvbmZpZykpXG4gICAgICAgICAgICB0b3dlclR5cGVJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFkID0gM1xuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NTAsIFwiPlNsb3c8XCIsIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NzUsIFwiRmFzdFwiLCB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gMSwgbnVsbFxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCI+U2xvdzxcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiRmFzdFwiKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgUGxheWVySW5mby50aW1lU2NhbGUgPSA0LCBudWxsXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIlNsb3dcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiPkZhc3Q8XCIpXG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG4gICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzID0gW11cbiAgICB9XG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGE7XG5cbiAgICAgICAgdGhpcy5tb25leVRleHQuc2V0VGV4dCgnTW9uZXk6ICcgKyBQbGF5ZXJJbmZvLm1vbmV5KVxuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXYXZlID0gdGhpcy5tZXRhU2NlbmUuZ2V0Um9vdFREU2NlbmUoKS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZVxuICAgICAgICB0aGlzLndhdmVUZXh0LnNldFRleHQoYFdhdmU6ICR7Y3VycmVudFdhdmV9YClcblxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRUZXh0KCdIUDogJyArIFBsYXllckluZm8uaHApXG5cbiAgICAgICAgdGhpcy5ocFRleHQuc2V0Q29sb3IoUGhhc2VyLkRpc3BsYXkuQ29sb3IuUkdCVG9TdHJpbmcoXG4gICAgICAgICAgICAyNTUsIDI1NSAqICgxIC0gdGhpcy5ocFJlZG5lc3MpLCAyNTUgKiAoMSAtIHRoaXMuaHBSZWRuZXNzKVxuICAgICAgICApKVxuICAgICAgICBjb25zdCBzZWNzVG9XaGl0ZSA9IDAuNVxuICAgICAgICB0aGlzLmhwUmVkbmVzcyA9IE1hdGgubWF4KDAsIHRoaXMuaHBSZWRuZXNzIC0gZGVsdGEgLyAxMDAwIC8gc2Vjc1RvV2hpdGUpXG5cbiAgICAgICAgdGhpcy51cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpY29uIG9mIHRoaXMuYnV5VG93ZXJJY29ucykge1xuICAgICAgICAgICAgaWNvbi51cGRhdGUodGhpcy5sYXN0VGltZSwgZGVsdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCkge1xuICAgICAgICBsZXQgYWN0aXZlU2NlbmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpO1xuICAgICAgICBpZiAoIWFjdGl2ZVNjZW5lKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoYWN0aXZlU2NlbmUgPT0gdGhpcy5sYXN0QWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5sYXN0QWN0aXZlU2NlbmUgPSBhY3RpdmVTY2VuZTtcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0VGV4dChgRGVwdGg6ICR7YWN0aXZlU2NlbmUuc2NlbmVMZXZlbH1gKVxuXG4gICAgICAgIGNvbnN0IHBhcmVudFNjZW5lcyA9IHRoaXMubWV0YVNjZW5lLmdldFBhcmVudFNjZW5lc1RvUm9vdCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUocGFyZW50U2NlbmVzLmxlbmd0aCA+IDApXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudFNjZW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHNjZW5lSW5kZXggPSAocGFyZW50U2NlbmVzLmxlbmd0aCAtIDEpIC0gaTtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDAuMVxuICAgICAgICAgICAgY29uc3QgbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQgPSA3O1xuICAgICAgICAgICAgaWYgKHBhcmVudFNjZW5lcy5sZW5ndGggPiBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkge1xuICAgICAgICAgICAgICAgIHNjYWxlIC89ICgocGFyZW50U2NlbmVzLmxlbmd0aCAvIG1heEltYWdlc05vcm1hbFNjYWxlRml0KSAqIDEuMDIyKSAvLyBOT1RFOiBEcmlmdHMsIGhlbmNlIHJlLXNjYWxlIGJ5IHRoaXMgbWFnaWMgbnVtYmVyLCBpZGsgd2h5OyBubyB0aW1lIHRvIGZpZ3VyZSBvdXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5ld0J1dHRvbiA9IHRoaXMuYWRkLmltYWdlKFxuICAgICAgICAgICAgICAgIFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMS41LFxuICAgICAgICAgICAgICAgIDEwMCArIHNjZW5lSW5kZXggKiBzY2FsZSAqIFREX1NDRU5FX0hFSUdIVCAqIDEuMixcbiAgICAgICAgICAgICAgICBgc25hcC0ke3BhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVggPSBzY2FsZVxuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWSA9IHNjYWxlXG4gICAgICAgICAgICBuZXdCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBhcmVudFNjZW5lc1tpXSwgZmFsc2UpLCB0aGlzLm1ldGFTY2VuZSlcbiAgICAgICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3QnV0dG9uXG4gICAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyOiBUb3dlciA9IG51bGwpIHtcbiAgICAgICAgbGV0IGxldmVsID0gMVxuICAgICAgICBsZXQgdGV4dCA9IFwiXCJcblxuICAgICAgICBpZiAodG93ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRleHQgPSBgJHtjb25maWcubmFtZX06ICR7Y29uZmlnLmRlc2NyaXB0aW9ufVxcbmBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBgTGV2ZWwgJHt0b3dlci5sZXZlbH0gJHtjb25maWcubmFtZX0gdG93ZXIuXFxuYFxuICAgICAgICAgICAgbGV2ZWwgPSB0b3dlci5sZXZlbFxuICAgICAgICB9XG5cbiAgICAgICAgdGV4dCArPSBgRGFtYWdlOiAke2NvbmZpZy5kYW1hZ2UobGV2ZWwpfS5cXG5gXG4gICAgICAgIHRleHQgKz0gYEZpcmUgcmF0ZTogJHtjb25maWcuZmlyZXJhdGUobGV2ZWwpLzEwMDB9cy5cXG5gXG4gICAgICAgIHRleHQgKz0gYFJhbmdlOiAke2NvbmZpZy5yYW5nZShsZXZlbCl9LlxcbmBcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRUZXh0KHRleHQpXG4gICAgfVxufVxuXG5jbGFzcyBCdXlUb3dlckljb24ge1xuICAgIHRvd2VyTmFtZTogc3RyaW5nXG4gICAgdG93ZXJDb25maWc6IFRvd2VyQ29uZmlnXG5cbiAgICBzcHJpdGVDb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXJcbiAgICBwcmljZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgaHVkU2NlbmU6IEh1ZFNjZW5lXG5cbiAgICBvcmlnWDogbnVtYmVyXG4gICAgb3JpZ1k6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoaHVkU2NlbmU6IEh1ZFNjZW5lLCB4LCB5LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5odWRTY2VuZSA9IGh1ZFNjZW5lXG4gICAgICAgIHRoaXMub3JpZ1ggPSB4XG4gICAgICAgIHRoaXMub3JpZ1kgPSB5XG4gICAgICAgIHRoaXMudG93ZXJOYW1lID0gY29uZmlnLm5hbWVcbiAgICAgICAgdGhpcy50b3dlckNvbmZpZyA9IGNvbmZpZ1xuXG4gICAgICAgIGxldCB0b3dlckJhc2UgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcmJhc2VzJywgY29uZmlnLnNwcml0ZUJhc2UpO1xuICAgICAgICB0b3dlckJhc2Uuc2V0VGludChjb25maWcudGludEJhc2UpO1xuICAgICAgICBsZXQgdG93ZXJNaWQgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcm1pZHMnLCBjb25maWcuc3ByaXRlTWlkKTtcbiAgICAgICAgdG93ZXJNaWQuc2V0VGludChjb25maWcudGludE1pZCk7XG4gICAgICAgIGxldCB0b3dlclRvcCA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VydG9wcycsIGNvbmZpZy5zcHJpdGVUb3ApO1xuICAgICAgICB0b3dlclRvcC5zZXRUaW50KGNvbmZpZy50aW50VG9wKTtcblxuICAgICAgICBsZXQgdG93ZXJSYW5nZSA9IGh1ZFNjZW5lLmFkZC5jaXJjbGUoXG4gICAgICAgICAgICAwLCAwLCBjb25maWcucmFuZ2UoMSksXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmNvbG91cixcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuYWxwaGFcbiAgICAgICAgKTtcbiAgICAgICAgdG93ZXJSYW5nZS5zZXRTdHJva2VTdHlsZShcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZVdpZHRoLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlQ29sb3VyXG4gICAgICAgICk7XG4gICAgICAgIHRvd2VyUmFuZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XG5cbiAgICAgICAgdmFyIHNwcml0ZXMgPSBbXG4gICAgICAgICAgICB0b3dlckJhc2UsXG4gICAgICAgICAgICB0b3dlck1pZCxcbiAgICAgICAgICAgIHRvd2VyVG9wLFxuICAgICAgICAgICAgdG93ZXJSYW5nZSxcbiAgICAgICAgXVxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lciA9IGh1ZFNjZW5lLmFkZC5jb250YWluZXIoeCwgeSwgc3ByaXRlcylcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuZ2V0QWxsKClcblxuICAgICAgICBjb25zdCBwYWQgPSAzXG4gICAgICAgIHRoaXMucHJpY2VUZXh0ID0gaHVkU2NlbmUuYWRkLnRleHQoXG4gICAgICAgICAgICB4ICsgMTUsIHksIFwiXCIgKyB0aGlzLnRvd2VyQ29uZmlnLnByaWNlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuc2V0U2l6ZShUSUxFX1NJWkUsIFRJTEVfU0laRSk7XG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldEludGVyYWN0aXZlKClcbiAgICAgICAgLy8gdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiBjb25zb2xlLmxvZyhcImZvb2JhclwiKSwgdGhpcyk7XG4gICAgICAgIGh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lcilcblxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmh1ZFNjZW5lLnNldERlc2NyaXB0aW9uKGNvbmZpZylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaHVkU2NlbmUuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgICAgICBnYW1lT2JqZWN0Lmxpc3QuZm9yRWFjaCgoc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSA9PiB7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkge1xuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZHJhZ1k7XG5cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnZW5kJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAvLyBUaGlzIG1ha2VzIHJhbmdlIGluZGljYXRvciB2aXNpYmxlXG4gICAgICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFszXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUpLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgICAgICBnYW1lT2JqZWN0Lmxpc3QuZm9yRWFjaCgoc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSA9PiB7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBodWRTY2VuZS5tZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKVxuICAgICAgICAgICAgc2NlbmUudG93ZXJNYW5hZ2VyLnBsYWNlVG93ZXIocG9pbnRlciwgdGhpcy50b3dlck5hbWUpO1xuXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSB0aGlzLm9yaWdYXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSB0aGlzLm9yaWdZXG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH1cblxuICAgIHJlc2V0VGludCgpIHtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMF0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMV0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRNaWQpO1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsyXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XG4gICAgfVxuXG4gICAgc2V0U2hvcEljb25UaW50KHRpbnQ6IG51bWJlcikge1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMV0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aW50ICYgdGhpcy50b3dlckNvbmZpZy50aW50TWlkKTtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aW50ICYgdGhpcy50b3dlckNvbmZpZy50aW50VG9wKTtcbiAgICB9XG5cbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcbiAgICAgICAgLy8gVW5jb21tZW50IHRvIHByZXZlbnQgbmVnYXRpdmUgbW9uZXk6XG4gICAgICAgIC8vIHRoaXMuaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyLCBQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHgwMGZmMDApO1xuICAgICAgICAgICAgdGhpcy5yZXNldFRpbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHhmZjAwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG9wSWNvblRpbnQoMHg5OTU1NTUpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGVuZW0gZnJvbSBcIi4uL2VuZW15XCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuLi90b3dlcnNcIjtcbmltcG9ydCB7IEJ1bGxldCB9IGZyb20gXCIuLi9idWxsZXRcIjtcbmltcG9ydCB7IFdhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uL3dhdmVzXCJcbmltcG9ydCB7IFRvd2VyTWFuYWdlciB9IGZyb20gXCIuLi90b3dlck1hbmFnZXJcIlxuaW1wb3J0IHsgTUFYX0hFSUdIVCwgTUFYX1dJRFRILCBUZXJyYWluLCBUSUxFX1NJWkUgfSBmcm9tIFwiLi4vdGVycmFpblwiO1xuaW1wb3J0IHsgVERTY2VuZUNvbmZpZyB9IGZyb20gXCIuL3RkU2NlbmVDb25maWdcIjtcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL01ldGFTY2VuZVwiO1xuaW1wb3J0IHsgSFVEX1dJRFRIIH0gZnJvbSBcIi4vaHVkU2NlbmVcIjtcbmltcG9ydCB7IFVVSUQgfSBmcm9tIFwiLi4vdXRpbHMvZ3VpZFwiO1xuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4uL2hlYWx0aEJhclwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBFTkVNWV9DT05GSUdTIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfVFJBTlNJVElPTl9NUyA9IDUwMFxuZXhwb3J0IGNvbnN0IFREX1NDRU5FX1dJRFRIID0gTUFYX1dJRFRIICogVElMRV9TSVpFXG5leHBvcnQgY29uc3QgVERfU0NFTkVfSEVJR0hUID0gTUFYX0hFSUdIVCAqIFRJTEVfU0laRVxuXG5leHBvcnQgY2xhc3MgVERTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgcGF0aDogUGhhc2VyLkN1cnZlcy5QYXRoXG4gICAgYWxsRW5lbWllczogeyBba2V5OiBzdHJpbmddOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXAgfSA9IHt9XG4gICAgbmV4dEVuZW15OiBudW1iZXIgPSAwXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmVcblxuICAgIHRvd2VyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwXG4gICAgYnVsbGV0czogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwXG5cbiAgICB0ZXJyYWluOiBUZXJyYWluXG5cbiAgICB3YXZlTWFuYWdlcjogV2F2ZU1hbmFnZXJcbiAgICB0b3dlck1hbmFnZXI6IFRvd2VyTWFuYWdlclxuXG4gICAgc2NlbmVQYXJlbnQ6IFREU2NlbmU7XG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb25cblxuICAgIHByaXZhdGUgdG93ZXJQYXJlbnQ6IFRvd2VyICAvLyB0byB3aGF0IHRvd2VyIGRvZXMgdGhpcyBzY2VuZSBjb3JyZXNwb25kPyB1bmRlZmluZWQgZm9yIHJvb3RcbiAgICBwcml2YXRlIGVuZEhlYWx0aEJhcjogSGVhbHRoQmFyXG5cbiAgICAvLyBoYXBwZW5zIHdoZW4gYW4gZW5lbXkgcmVhY2hlcyB0aGUgZW5kXG4gICAgZW5lbXlFbmRDYWxsYmFjazogKG51bWJlcikgPT4gdm9pZFxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBURFNjZW5lQ29uZmlnLCBtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6IGB0ZFNjZW5lJHtVVUlELnV1aWR2NCgpfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGVycmFpbiA9IGNvbmZpZy50ZXJyYWluO1xuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcblxuICAgICAgICB0aGlzLnNjZW5lTGV2ZWwgPSBjb25maWcuc2NlbmVMZXZlbDtcbiAgICAgICAgdGhpcy5zY2VuZVBhcmVudCA9IGNvbmZpZy5zY2VuZVBhcmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICAvLyB0aGlzIGdyYXBoaWNzIGVsZW1lbnQgaXMgb25seSBmb3IgdmlzdWFsaXphdGlvbixcbiAgICAgICAgLy8gaXRzIG5vdCByZWxhdGVkIHRvIG91ciBwYXRoXG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKCk7XG5cbiAgICAgICAgdGhpcy50ZXJyYWluLmNyZWF0ZSh0aGlzKVxuICAgICAgICB0aGlzLnRlcnJhaW4uZHJhdyhncmFwaGljcylcblxuICAgICAgICAvLyB0aGUgcGF0aCBmb3Igb3VyIGVuZW1pZXNcbiAgICAgICAgLy8gcGFyYW1ldGVycyBhcmUgdGhlIHN0YXJ0IHggYW5kIHkgb2Ygb3VyIHBhdGhcbiAgICAgICAgdGhpcy53YXZlTWFuYWdlciA9IG5ldyBXYXZlTWFuYWdlcih0aGlzKTtcbiAgICAgICAgdGhpcy50b3dlck1hbmFnZXIgPSBuZXcgVG93ZXJNYW5hZ2VyKHRoaXMpO1xuXG4gICAgICAgIGZvciAobGV0IGVuZW15IG9mIEVORU1ZX0NPTkZJR1MpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsRW5lbWllc1tlbmVteS5uYW1lXSA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoeyBjbGFzc1R5cGU6IGVuZW15LmNsYXNzLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoeyBjbGFzc1R5cGU6IFRvd2VyLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZSB9KTtcblxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMub25DbGljaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7IGNsYXNzVHlwZTogQnVsbGV0LCBydW5DaGlsZFVwZGF0ZTogdHJ1ZSB9KTtcbiAgICAgICAgZm9yIChsZXQgZU5hbWUgaW4gdGhpcy5hbGxFbmVtaWVzKSB7XG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5hbGxFbmVtaWVzW2VOYW1lXSwgdGhpcy5idWxsZXRzLCB0aGlzLmRhbWFnZUVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XG5cbiAgICAgICAgY29uc3QgY2FtID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgY2FtLnNjcm9sbFggPSAtSFVEX1dJRFRIXG4gICAgfVxuXG4gICAgLy8gT25seSBmb3JlZ3JvdW5kIHNjZW5lIGhhcyBpbnB1dCBlbmFibGVkICYgaXMgdmlzaWJsZTsgYWxsIHNjZW5lcyBhcmUgYmVpbmcgdXBkYXRlZFxuICAgIHB1YmxpYyBzZXRJc0ZvcmVncm91bmQoaXNGb3JlZ3JvdW5kU2NlbmUsIGdvaW5nSW5zaWRlOiBib29sZWFuLCBpID0gbnVsbCwgaiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5lbmFibGVkID0gaXNGb3JlZ3JvdW5kU2NlbmU7XG5cbiAgICAgICAgaWYgKCFpc0ZvcmVncm91bmRTY2VuZSkge1xuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KGdvaW5nSW5zaWRlLCBpLCBqKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWRlSW4oZ29pbmdJbnNpZGUsIGksIGopXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZUluKGdvaW5nSW5zaWRlOiBib29sZWFuLCBpLCBqKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih0aGlzLnRlcnJhaW4udyAqIFRJTEVfU0laRSAvIDIsIHRoaXMudGVycmFpbi5oICogVElMRV9TSVpFIC8gMiwgMSlcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Wm9vbSgoZ29pbmdJbnNpZGUgPyAxIC8gMyA6IDMpKVxuXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbihTQ0VORV9UUkFOU0lUSU9OX01TLCAwLCAwLCAwKVxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMSwgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZU91dChnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xuICAgICAgICAvLyBUYWtlIGEgc2NyZWVuc2hvdFxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIuc25hcHNob3RBcmVhKFxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgsXG4gICAgICAgICAgICAtdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSxcbiAgICAgICAgICAgIFREX1NDRU5FX1dJRFRILFxuICAgICAgICAgICAgVERfU0NFTkVfSEVJR0hULFxuICAgICAgICAgICAgKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcEtleSA9IGBzbmFwLSR7dGhpcy5zY2VuZS5rZXl9YFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzLmV4aXN0cyhzbmFwS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzLnJlbW92ZShzbmFwS2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5hZGRJbWFnZShzbmFwS2V5LCBpbWFnZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dpbmc6IHNob3cgdGhlIHNjcmVlbnNob3RcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uZmFkZU91dChTQ0VORV9UUkFOU0lUSU9OX01TLCAwLCAwLCAwKVxuICAgICAgICBpZiAoZ29pbmdJbnNpZGUpIHtcbiAgICAgICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygzLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ucGFuKHgsIHksIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMSAvIDMsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYW1hZ2VFbmVteShlbmVteSwgYnVsbGV0KSB7XG4gICAgICAgIC8vIG9ubHkgaWYgYm90aCBlbmVteSBhbmQgYnVsbGV0IGFyZSBhbGl2ZVxuICAgICAgICBpZiAoZW5lbXkuYWN0aXZlID09PSB0cnVlICYmIGJ1bGxldC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0aGUgYnVsbGV0IHJpZ2h0IGF3YXlcbiAgICAgICAgICAgIGJ1bGxldC5oaXQoKVxuXG4gICAgICAgICAgICAvLyBkZWNyZWFzZSB0aGUgZW5lbXkgaHAgd2l0aCBidWxsZXQgZGFtYWdlXG4gICAgICAgICAgICBlbmVteS5yZWNlaXZlRGFtYWdlKGJ1bGxldC5kYW1hZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJhbWVOdW1iZXIgPSAwO1xuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtYmVyKys7XG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIudXBkYXRlKGRlbHRhKVxuXG4gICAgICAgIGlmICh0aGlzLmZyYW1lTnVtYmVyICUgNjAgPT0gMCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFVwZGF0ZSB0aDogJHt0aGlzLnNjZW5lLmtleX0gZTogJHt0aGlzLmlucHV0LmVuYWJsZWR9IHwgbDogJHt0aGlzLnNjZW5lTGV2ZWx9IHwgcDogJHt0aGlzLnNjZW5lUGFyZW50Py5zY2VuZS5rZXl9YClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbmRIZWFsdGhCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLmhlYWx0aCA9IHRoaXMudG93ZXJQYXJlbnQuaGVhbHRoQmFyLmhlYWx0aFxuICAgICAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQnVsbGV0KHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHJhbmdlLCBidWxsZXRTcGVlZE1vZCkge1xuICAgICAgICB2YXIgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldCgpO1xuICAgICAgICBpZiAoYnVsbGV0KSB7XG4gICAgICAgICAgICBidWxsZXQuZmlyZSh4LCB5LCBhbmdsZSwgZGFtYWdlLCByYW5nZSwgYnVsbGV0U3BlZWRNb2QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9HcmlkUG9zKHgsIHkpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKCh4ICsgdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWCkgLyBUSUxFX1NJWkUpO1xuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZKSAvIFRJTEVfU0laRSk7XG4gICAgICAgIHJldHVybiBbaSwgal1cbiAgICB9XG5cbiAgICBvbkNsaWNrKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyKSB7XG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxuXG4gICAgICAgIGxldCBwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyID0gdGhpcy50ZXJyYWluLnRyeUdldEV4aXN0aW5nVG93ZXIoaSwgaik7XG4gICAgICAgIGlmIChwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyKSB7XG4gICAgICAgICAgICB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBvdGVudGlhbEV4aXN0aW5nVG93ZXIuaW5uZXJUb3dlclNjZW5lLCB0cnVlLCBpLCBqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmIChpID09PSBlbmRbMF0gJiYgaiA9PT0gZW5kWzFdICYmIHRoaXMuc2NlbmVQYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUodGhpcy5zY2VuZVBhcmVudCwgZmFsc2UsIGksIGopXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkVuZW15UmVhY2hlZEVuZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVuZW15RW5kQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIH1cblxuICAgIHNldFRvd2VyUGFyZW50KHBhcmVudDogVG93ZXIpIHtcbiAgICAgICAgdGhpcy50b3dlclBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodGhpcylcblxuICAgICAgICBsZXQgW2ksIGpdID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcblxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5tYWtlKHgsIHksIFRJTEVfU0laRSAtIDE0LCAwLjUpXG4gICAgICAgIHRoaXMuYWRkLmNvbnRhaW5lcigwLCAwLCB0aGlzLmVuZEhlYWx0aEJhcilcbiAgICB9XG5cbiAgICBnZXRUb3dlclBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJQYXJlbnRcbiAgICB9XG59IiwiaW1wb3J0IHsgVGVycmFpbiB9IGZyb20gXCIuLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgVERTY2VuZUNvbmZpZyB7XG4gICAgdGVycmFpbjogVGVycmFpbjtcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvbiBcbiAgICBzY2VuZVBhcmVudDogVERTY2VuZTtcblxuICAgIGNvbnN0cnVjdG9yKHRlcnJhaW46IFRlcnJhaW4sIHNjZW5lTGV2ZWw6IG51bWJlciwgc2NlbmVQYXJlbnQ6IFREU2NlbmUpe1xuICAgICAgICB0aGlzLnRlcnJhaW4gPSB0ZXJyYWluO1xuXG4gICAgICAgIHRoaXMuc2NlbmVMZXZlbCA9IHNjZW5lTGV2ZWw7XG4gICAgICAgIHRoaXMuc2NlbmVQYXJlbnQgPSBzY2VuZVBhcmVudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIlxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vdG93ZXJzXCJcblxuZXhwb3J0IGVudW0gVGlsZVR5cGUge1xuICAgIFN0YXJ0LCBQYXRoLCBFbmQsIE9jY3VwaWVkLCBCdWlsZGFibGVcbn1cblxuZXhwb3J0IGNvbnN0IFRJTEVfU0laRSA9IDY0XG5leHBvcnQgY29uc3QgTEVWRUxfT0ZGU0VUID0gMTUgKiBUSUxFX1NJWkVcbmV4cG9ydCBjb25zdCBNQVhfV0lEVEggPSAxMFxuZXhwb3J0IGNvbnN0IE1BWF9IRUlHSFQgPSA4XG5cbmNvbnN0IE5fVElMRVNFVF9TUFJJVEVTID0gMTAgIC8vIGhvdyBtYW55IHNwcml0ZXMgYXJlIGluIHRoZSB0aWxlc2V0P1xuXG50eXBlIEdyaWRQb3MgPSBbaW50ZWdlciwgaW50ZWdlcl1cblxuZXhwb3J0IGNsYXNzIFRlcnJhaW4ge1xuICAgIHRvd2VyczogVG93ZXJbXVtdXG4gICAgdGlsZXM6IFRpbGVUeXBlW11bXVxuXG4gICAgdGlsZVNwcml0ZXM6IGludGVnZXJbXVtdXG5cbiAgICBwYXRoOiBQaGFzZXIuQ3VydmVzLlBhdGggIC8vIFRoZSBQaGFzZXIgcGF0aCAoZm9yIGVuZW15IG1vdmVtZW50KVxuICAgIHBhdGhUaWxlczogR3JpZFBvc1tdICAvLyBUaGUgc2VxdWVuY2Ugb2YgdGlsZXMgbWFraW5nIHVwIHRoZSBwYXRoXG5cbiAgICB0aW50OiBpbnRlZ2VyIC8vIGNvbG9yIGFzIGEgMjQtYml0IGludFxuXG4gICAgdzogbnVtYmVyXG4gICAgaDogbnVtYmVyXG5cbiAgICAvLyB0b2RvOiBnZW5lcmF0ZS9sb2FkIHRlcnJhaW5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogaW50ZWdlciwgaGVpZ2h0OiBpbnRlZ2VyKSB7XG4gICAgICAgIHRoaXMudyA9IHdpZHRoXG4gICAgICAgIHRoaXMuaCA9IGhlaWdodFxuICAgIH1cblxuICAgIGNyZWF0ZShzY2VuZTogVERTY2VuZSkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlKClcbiAgICAgICAgdGhpcy5zZXR1cFNwcml0ZXMoc2NlbmUpXG5cbiAgICAgICAgdGhpcy50b3dlcnMgPSBpbml0MkRBcnJheTxUb3dlcj4odGhpcy53LCB0aGlzLmgsIG51bGwpXG4gICAgfVxuXG4gICAgc2V0dXBTcHJpdGVzKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHRoaXMudGlsZVNwcml0ZXMgPSBpbml0MkRBcnJheSh0aGlzLncsIHRoaXMuaCwgVGlsZVR5cGUuQnVpbGRhYmxlKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdID0gcmFuZG9tRnJlZVNwcml0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXREaXIgPSAocGk6IGludGVnZXIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGF0aFRpbGVzLCBwaSlcbiAgICAgICAgICAgIGxldCBbaTEsIGoxXSA9IHRoaXMucGF0aFRpbGVzW3BpXVxuICAgICAgICAgICAgbGV0IFtpMiwgajJdID0gdGhpcy5wYXRoVGlsZXNbcGkgKyAxXVxuXG4gICAgICAgICAgICBsZXQgW2RpLCBkal0gPSBbaTIgLSBpMSwgajIgLSBqMV1cbiAgICAgICAgICAgIGlmIChkaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGogPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gM1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImdldERpciBmYWlsZWRcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwaSA9IDA7IHBpIDwgdGhpcy5wYXRoVGlsZXMubGVuZ3RoOyBwaSsrKSB7XG4gICAgICAgICAgICBsZXQgW2kxLCBqMV0gPSB0aGlzLnBhdGhUaWxlc1twaV1cblxuICAgICAgICAgICAgaWYgKHBpID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA2XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBpID09IHRoaXMucGF0aFRpbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA3XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBkMSA9IChnZXREaXIocGkgLSAxKSArIDIpICUgNFxuICAgICAgICAgICAgICAgIGxldCBkMiA9IGdldERpcihwaSlcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMikge1xuICAgICAgICAgICAgICAgICAgICBbZDEsIGQyXSA9IFtkMiwgZDFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9yZGVyIG9mIHNwcml0ZXMgKDAyIG1lYW5pbmcgZDE9MCwgZDI9Mik6XG4gICAgICAgICAgICAgICAgLy8gMDEgMDIgMDMgMTIgMTMgMjNcbiAgICAgICAgICAgICAgICBpZiAoZDEgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSBkMiAtIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgKyAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkMSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDUgLy8gb25seSAyMyBsZWZ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW50ID0gUGhhc2VyLkRpc3BsYXkuQ29sb3IuR2V0Q29sb3IoXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgIClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhpLCBqKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgJ3RpbGVzZXQnLCB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5CdWlsZGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldFRpbnQodGhpcy50aW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xuICAgICAgICAvLyB0aGlzLmRyYXdHcmlkKGdyYXBoaWNzKVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgzLCAweGZmZmZmZiwgMSk7XG4gICAgICAgIC8vIHZpc3VhbGl6ZSB0aGUgcGF0aFxuICAgICAgICB0aGlzLnBhdGguZHJhdyhncmFwaGljcyk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgMHgwMDAwZmYsIDAuOCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5oOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbygwLCBpICogVElMRV9TSVpFKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhUSUxFX1NJWkUgKiAxMCwgaSAqIFRJTEVfU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy53OyBqKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhqICogVElMRV9TSVpFLCAwKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhqICogVElMRV9TSVpFLCBUSUxFX1NJWkUgKiA4KTtcbiAgICAgICAgfVxuICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhblBsYWNlVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbkJvdW5kcyhpLCBqKSAmJiB0aGlzLnRpbGVzW2ldW2pdID09PSBUaWxlVHlwZS5CdWlsZGFibGU7XG4gICAgfVxuXG4gICAgcHVibGljIHRyeUdldEV4aXN0aW5nVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0b3dlcjogVG93ZXIpIHtcbiAgICAgICAgaWYgKGkgPCAwIHx8IGogPCAwIHx8IGkgPj0gdGhpcy53IHx8IGogPj0gdGhpcy5oKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIHRoaXMudGlsZXNbaV1bal0gPSBUaWxlVHlwZS5PY2N1cGllZDtcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJzW2ldW2pdID0gdG93ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgcGF0aCA9IFtdXG5cbiAgICAgICAgbGV0IGVkZ2VzOiBHcmlkUG9zW10gPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudyAtIDE7IGkrKykge1xuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgMF0pXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFtpLCB0aGlzLmggLSAxXSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMuaCAtIDE7IGorKykge1xuICAgICAgICAgICAgZWRnZXMucHVzaChbMCwgal0pXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFt0aGlzLncgLSAxLCBqXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2VcblxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXG4gICAgICAgIHdoaWxlICghc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGZyb20gPSByYW5kb21JdGVtKGVkZ2VzKVxuICAgICAgICAgICAgbGV0IHRvO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHRvID0gcmFuZG9tSXRlbShlZGdlcylcbiAgICAgICAgICAgIH0gd2hpbGUgKHRvID09IGZyb20pXG5cbiAgICAgICAgICAgIHBhdGggPSB0aGlzLnJhbmRvbVdhbGsoZnJvbSwgdG8pXG5cbiAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IDI1XG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCAmJiBwYXRoLmxlbmd0aCA+PSBtaW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMrK1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID09IDQwMCkgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIGluXCIsIGF0dGVtcHRzLCBcImF0dGVtcHRzXCIpXG5cbiAgICAgICAgdGhpcy50aWxlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhwYXRoW2ldWzBdLCBwYXRoW2ldWzFdKVxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGFsdGVuYXRpdmVseTogdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCguLi4pXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYXRoID0gc2NlbmUuYWRkLnBhdGgoeCwgeSlcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGggPSBuZXcgUGhhc2VyLkN1cnZlcy5QYXRoKHgsIHkpXG4gICAgICAgICAgICAgICAgLy8gc2NlbmUuYWRkT2JqZWN0KHRoaXMucGF0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoLmxpbmVUbyh4LCB5KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2V0VG8gPSBUaWxlVHlwZS5QYXRoXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VG8gPSBUaWxlVHlwZS5TdGFydFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IHBhdGgubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNldFRvID0gVGlsZVR5cGUuRW5kXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGlsZXNbcGF0aFtpXVswXV1bcGF0aFtpXVsxXV0gPSBzZXRUb1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgdGVycmFpbi5cIilcblxuICAgICAgICB0aGlzLnBhdGhUaWxlcyA9IHBhdGhcbiAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5kb21XYWxrKGZyb206IEdyaWRQb3MsIHRvOiBHcmlkUG9zKTogQXJyYXk8R3JpZFBvcz4ge1xuICAgICAgICBsZXQgcGF0aCA9IFtdXG4gICAgICAgIGxldCBzZWVuID0gbmV3IFNldCgpXG5cbiAgICAgICAgY29uc3QgYWRkVG9QYXRoID0gKHBvczogR3JpZFBvcykgPT4ge1xuICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFubmVkIG9mIHRoaXMubmVpZ2hib3JzKHBhdGhbcGF0aC5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vlbi5hZGQoYmFubmVkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aC5wdXNoKHBvcylcbiAgICAgICAgICAgIHNlZW4uYWRkKHBvcy50b1N0cmluZygpKVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9QYXRoKGZyb20pXG5cbiAgICAgICAgbGV0IHN0ZXBzID0gMFxuICAgICAgICB3aGlsZSAocGF0aFtwYXRoLmxlbmd0aCAtIDFdICE9IHRvKSB7XG4gICAgICAgICAgICBzdGVwcysrXG4gICAgICAgICAgICBpZiAoc3RlcHMgPT0gMTAwKSBicmVha1xuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXVxuXG4gICAgICAgICAgICBpZiAocG9zLnRvU3RyaW5nKCkgPT09IHRvLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aCAgLy8gU3VjY2VzcyFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNhbmRzID0gdGhpcy5uZWlnaGJvcnMocG9zKVxuICAgICAgICAgICAgY2FuZHMgPSBjYW5kcy5maWx0ZXIocCA9PiAhc2Vlbi5oYXMocC50b1N0cmluZygpKSlcblxuICAgICAgICAgICAgaWYgKGNhbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsICAvLyBGYWlsIVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5leHQgPSByYW5kb21JdGVtKGNhbmRzKVxuICAgICAgICAgICAgYWRkVG9QYXRoKG5leHQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aFxuICAgIH1cblxuICAgIHByaXZhdGUgbmVpZ2hib3JzKHBvczogR3JpZFBvcywgcGFkID0gMCkge1xuICAgICAgICBsZXQgcmVzID0gW1xuICAgICAgICAgICAgW3Bvc1swXSArIDEsIHBvc1sxXV0sXG4gICAgICAgICAgICBbcG9zWzBdIC0gMSwgcG9zWzFdXSxcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSArIDFdLFxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdIC0gMV0sXG4gICAgICAgIF1cbiAgICAgICAgcmVzID0gcmVzLmZpbHRlcihwID0+IHRoaXMuaW5Cb3VuZHMocFswXSwgcFsxXSkpXG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cblxuICAgIGZyb21HcmlkUG9zKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcbiAgICAgICAgcmV0dXJuIFsoaSArIDAuNSkgKiBUSUxFX1NJWkUsIChqICsgMC41KSAqIFRJTEVfU0laRV1cbiAgICB9XG5cbiAgICBpbkJvdW5kcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCBwYWQgPSAwKSB7XG4gICAgICAgIHJldHVybiAoaSA+PSBwYWRcbiAgICAgICAgICAgICYmIGkgPCB0aGlzLncgLSBwYWRcbiAgICAgICAgICAgICYmIGogPj0gcGFkXG4gICAgICAgICAgICAmJiBqIDwgdGhpcy5oIC0gcGFkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tSXRlbShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIGFycmF5Lmxlbmd0aCldXG59XG5cbmZ1bmN0aW9uIHJhbmRvbUZyZWVTcHJpdGUoKSB7XG4gICAgY29uc3QgblNwZWNpYWxTcHJpdGVzID0gOFxuICAgIHJldHVybiBuU3BlY2lhbFNwcml0ZXMgKyBNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIChOX1RJTEVTRVRfU1BSSVRFUyAtIG5TcGVjaWFsU3ByaXRlcykpXG59XG5cbmZ1bmN0aW9uIGluaXQyREFycmF5PFRWYWw+KGRpbTEsIGRpbTIsIHZhbHVlOiBUVmFsKTogVFZhbFtdW10ge1xuICAgIHJldHVybiBuZXcgQXJyYXkoZGltMSlcbiAgICAgICAgLmZpbGwoZmFsc2UpXG4gICAgICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KGRpbTIpXG4gICAgICAgICAgICAuZmlsbCh2YWx1ZSkpO1xufSIsImltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCAqIGFzIHRvd2VycyBmcm9tIFwiLi90b3dlcnNcIjtcblxuZXhwb3J0IGNsYXNzIFRvd2VyTWFuYWdlciB7XG4gICAgc2NlbmU6IFREU2NlbmVcbiAgICB0b3dlclR5cGVzOiB7IFtrZXk6c3RyaW5nXTogYW55fSA9IHtcbiAgICAgICAgJ0Jhc2ljJzogW3Rvd2Vycy5CYXNpY1R1cnJldCwgY2ZnLkJhc2ljXSxcbiAgICAgICAgJ011bHRpc2hvdCc6IFt0b3dlcnMuTXVsdGlzaG90VHVycmV0LCBjZmcuTXVsdGlzaG90XSxcbiAgICAgICAgJ1NuaXBlcic6IFt0b3dlcnMuU25pcGVyVHVycmV0LCBjZmcuU25pcGVyXSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYWNlVG93ZXIocG9pbnRlciwgdG93ZXJUeXBlKSB7XG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMuc2NlbmUudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxuICAgICAgICBpZiAodGhpcy5zY2VuZS50ZXJyYWluLmNhblBsYWNlVG93ZXIoaSwgaikpIHtcbiAgICAgICAgICAgIHZhciB0b3dlcjogdG93ZXJzLlRvd2VyID0gdGhpcy5zY2VuZS50b3dlcnMuZ2V0KCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFkZFNjZW5lKHRoaXMuc2NlbmUpXG4gICAgICAgICAgICBpZiAodG93ZXIpIHtcbiAgICAgICAgICAgICAgICB0b3dlci5tYWtlKGksIGosIG5ld1NjZW5lLCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVsxXSwgdGhpcy50b3dlclR5cGVzW3Rvd2VyVHlwZV1bMF0pO1xuICAgICAgICAgICAgICAgIFBsYXllckluZm8ubW9uZXkgLT0gdG93ZXIuY29uZmlnLnByaWNlXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2V0VG93ZXJQYXJlbnQodG93ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uIH0gZnJvbSBcIi4vdGVycmFpblwiO1xuXG5pbXBvcnQgeyBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYsIFRPV0VSX0hFQUxUSF9SRUdFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoQmFyXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCB7IFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuL3RlcnJhaW5cIjtcbmltcG9ydCB7IFRvd2VyQ29uZmlnLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCB7IEh1ZFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2h1ZFNjZW5lXCI7XG5cblxuLy8gdG9kbzogbW92ZSB0byBzY2VuZT9cbmZ1bmN0aW9uIGdldEVuZW15KHgsIHksIHJhbmdlLCBlbmVtaWVzLCBudW1Ub0dldCk6IEVuZW15QmFzZVtdIHtcbiAgICBsZXQgb3V0RW5lbWllczogRW5lbXlCYXNlW10gPSBbXTtcblxuICAgIGZvciAobGV0IGVuZW15R3JvdXAgaW4gZW5lbWllcykge1xuICAgICAgICBsZXQgZW5lbXlVbml0cyA9IGVuZW1pZXNbZW5lbXlHcm91cF0uZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVVuaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZW5lbXlVbml0c1tpXS5hY3RpdmUgJiYgUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih4LCB5LCBlbmVteVVuaXRzW2ldLngsIGVuZW15VW5pdHNbaV0ueSkgPD0gcmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvdXRFbmVtaWVzLnB1c2goZW5lbXlVbml0c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3V0RW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG91dEVuZW1pZXMuc29ydCgoYSwgYikgPT4gYi5mb2xsb3dlci50IC0gYS5mb2xsb3dlci50KVxuICAgICAgICBvdXRFbmVtaWVzLmxlbmd0aCA9IE1hdGgubWluKG51bVRvR2V0LCBvdXRFbmVtaWVzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIG91dEVuZW1pZXNcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbn1cblxuXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcbiAgICBjb25maWc6IFRvd2VyQ29uZmlnXG4gICAgc3RhdHM6IFRvd2VyQ29uZmlnXG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgdG93ZXJUdXJyZXQ6IF9Ub3dlclR1cnJldFxuICAgIHRvd2VyTWlkOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgdG93ZXJCYXNlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgaGVhbHRoQmFyOiBIZWFsdGhCYXJcbiAgICByYW5nZUluZGljYXRvcjogUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlXG5cbiAgICBsZXZlbDogaW50ZWdlclxuICAgIGxldmVsVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICAgIHB1YmxpYyBpbm5lclRvd2VyU2NlbmU6IFREU2NlbmVcblxuICAgIGNvbnN0cnVjdG9yKHRvd2VyU2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIodG93ZXJTY2VuZSwgMCwgMClcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRvd2VyU2NlbmUpXG4gICAgICAgIHRoaXMuc2NlbmUgPSB0b3dlclNjZW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYWtlKGk6IG51bWJlciwgajogbnVtYmVyLCBpbm5lclRvd2VyU2NlbmU6IFREU2NlbmUsIGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyQ2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG4gICAgICAgIHRoaXMuc3RhdHMgPSB0aGlzLmNvbmZpZztcblxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0ID0gbmV3IHRvd2VyQ2xhc3NOYW1lKHRoaXMuc2NlbmUsIHRoaXMuY29uZmlnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIGxldCB4Q29vcmQgPSBpICogVElMRV9TSVpFICsgVElMRV9TSVpFIC8gMlxuICAgICAgICBsZXQgeUNvb3JkID0gaiAqIFRJTEVfU0laRSArIFRJTEVfU0laRSAvIDJcblxuICAgICAgICB0aGlzLnRvd2VyQmFzZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh4Q29vcmQsIHlDb29yZCwgJ3Rvd2VyYmFzZXMnLCB0aGlzLmNvbmZpZy5zcHJpdGVCYXNlKTtcbiAgICAgICAgdGhpcy50b3dlckJhc2Uuc2V0VGludCh0aGlzLmNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJCYXNlKTtcbiAgICAgICAgdGhpcy50b3dlck1pZCA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh4Q29vcmQsIHlDb29yZCwgJ3Rvd2VybWlkcycsIHRoaXMuY29uZmlnLnNwcml0ZU1pZCk7XG4gICAgICAgIHRoaXMudG93ZXJNaWQuc2V0VGludCh0aGlzLmNvbmZpZy50aW50TWlkKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlck1pZCk7XG5cbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvciA9IHRoaXMuc2NlbmUuYWRkLmNpcmNsZShcbiAgICAgICAgICAgIHhDb29yZCwgeUNvb3JkLCBjb25maWcucmFuZ2UoMSksXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmNvbG91cixcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuYWxwaGFcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRTdHJva2VTdHlsZShSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VXaWR0aCwgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlQ29sb3VyKTtcbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy5yYW5nZUluZGljYXRvcik7XG5cbiAgICAgICAgdGhpcy50b3dlckJhc2Uuc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgdGhpcy50b3dlckJhc2Uub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgICAgICBsZXQgaHVkU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcImh1ZFNjZW5lXCIpIGFzIEh1ZFNjZW5lXG4gICAgICAgICAgICBodWRTY2VuZS5zZXREZXNjcmlwdGlvbih0aGlzLmNvbmZpZywgdGhpcylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4geyB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpIH0pO1xuXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQucGxhY2UoaSwgaiwgdGhpcy5zY2VuZS50ZXJyYWluKTtcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBsYWNlVG93ZXIoaSwgaiwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlclR1cnJldCk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIubWFrZSh4Q29vcmQsIHlDb29yZCArIFRJTEVfU0laRSAvIDIgLSA4LCBUSUxFX1NJWkUgLSAxNClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXG5cbiAgICAgICAgdGhpcy5sZXZlbCA9IDFcblxuICAgICAgICBjb25zdCBwYWQgPSAzXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgICAgICAgIHhDb29yZCArIDE1LCB5Q29vcmQsIFwiXCIgKyB0aGlzLmxldmVsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHRoaXMuYWRkKHRoaXMubGV2ZWxUZXh0KVxuXG4gICAgICAgIHRoaXMuaW5uZXJUb3dlclNjZW5lID0gaW5uZXJUb3dlclNjZW5lXG4gICAgICAgIHRoaXMuaW5uZXJUb3dlclNjZW5lLm9uRW5lbXlSZWFjaGVkRW5kKChkYW1hZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmhlYWx0aCAtPSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUZcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG5cbiAgICAgICAgdGhpcy50b3dlclR1cnJldC51cGRhdGUoZGVsdGEpXG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIuaGVhbHRoICs9IFRPV0VSX0hFQUxUSF9SRUdFTiAqIGRlbHRhXG5cbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyLmhlYWx0aCA+PSAxLjApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmxldmVsVXAoKTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwrK1xuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQuc2V0VGV4dChcIlwiICsgdGhpcy5sZXZlbClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCAtIDEpIDwgdGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsKSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZVNjYWxlID0gdGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsKSAvIHRoaXMuc3RhdHMucmFuZ2UoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRTY2FsZShyYW5nZVNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcbiAgICB9XG59XG5cblxuYWJzdHJhY3QgY2xhc3MgX1Rvd2VyVHVycmV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcbiAgICBuZXh0VGljOiBudW1iZXJcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBwYXJlbnQ6IFRvd2VyXG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIHNwcml0ZTogc3RyaW5nLCB0aW50OiBudW1iZXIsIHBhcmVudDogVG93ZXIpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICd0b3dlcnRvcHMnLCBzcHJpdGUpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5zZXRUaW50KHRpbnQpO1xuICAgICAgICB0aGlzLm5leHRUaWMgPSAwO1xuICAgIH1cblxuICAgIC8vIHdlIHdpbGwgcGxhY2UgdGhlIHRvd2VyIGFjY29yZGluZyB0byB0aGUgZ3JpZFxuICAgIHBsYWNlKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHRlcnJhaW46IFRlcnJhaW4pIHtcbiAgICAgICAgW3RoaXMueCwgdGhpcy55XSA9IHRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcbiAgICB9XG5cbiAgICBmaXJlKCkge1xuICAgICAgICBsZXQgZW5lbWllcyA9IGdldEVuZW15KFxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWxsRW5lbWllcywgMVxuICAgICAgICApO1xuICAgICAgICBpZiAoZW5lbWllcykge1xuICAgICAgICAgICAgbGV0IGVuZW15ID0gZW5lbWllc1swXVxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgZW5lbXkueCwgZW5lbXkueSk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZEJ1bGxldChcbiAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuZGFtYWdlKHRoaXMucGFyZW50LmxldmVsKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmFuZ2xlID0gKGFuZ2xlICsgTWF0aC5QSSAvIDIpICogUGhhc2VyLk1hdGguUkFEX1RPX0RFRztcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwXG4gICAgdXBkYXRlKGRlbHRhKSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGFcblxuICAgICAgICBpZiAodGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dFRpYykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlyZSgpKVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpYyA9IHRoaXMubGFzdFRpbWUgKyB0aGlzLnBhcmVudC5zdGF0cy5maXJlcmF0ZSh0aGlzLnBhcmVudC5sZXZlbClcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWMgPSB0aGlzLmxhc3RUaW1lICsgNTA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNpY1R1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTXVsdGlzaG90VHVycmV0IGV4dGVuZHMgX1Rvd2VyVHVycmV0IHtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY29uZmlnLnNwcml0ZVRvcCwgY29uZmlnLnRpbnRUb3AsIHBhcmVudCk7XG4gICAgfVxuXG5cbiAgICBmaXJlKCkge1xuICAgICAgICBsZXQgZW5lbWllcyA9IGdldEVuZW15KHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksIHRoaXMuc2NlbmUuYWxsRW5lbWllcywgMyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZW5lbWllcyAmJiBlbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGVuZW15IG9mIGVuZW1pZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBlbmVteS54LCBlbmVteS55KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZEJ1bGxldChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmJ1bGxldFNwZWVkTW9kXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gKGFuZ2xlICsgTWF0aC5QSSAvIDIpICogUGhhc2VyLk1hdGguUkFEX1RPX0RFRztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU25pcGVyVHVycmV0IGV4dGVuZHMgX1Rvd2VyVHVycmV0IHtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY29uZmlnLnNwcml0ZVRvcCwgY29uZmlnLnRpbnRUb3AsIHBhcmVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XG5cbmV4cG9ydCBjbGFzcyBVVUlEe1xuICAgIHN0YXRpYyB1dWlkdjQoKSB7XG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICB2YXIgciA9IFBsYXllckluZm8uUk5HLmZyYWMoKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgfVxufSIsImltcG9ydCB7IEVuZW15Q29uZmlnLCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUsIEVORU1ZX0NPTkZJR1MsIFdhdmVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbi8vIGltcG9ydCB7IEVuZW15LCBGYXRFbmVteX0gZnJvbSBcIi4vZW5lbXlcIjtcblxuXG5leHBvcnQgY2xhc3MgV2F2ZU1hbmFnZXIge1xuICAgIHNjZW5lOiBURFNjZW5lXG4gICAgY3VycmVudFdhdmU6IGludGVnZXIgPSAwXG4gICAgbmV4dEVuZW15OiBpbnRlZ2VyID0gMFxuICAgIHNwYXduZWRFbmVtaWVzOiBpbnRlZ2VyID0gMFxuICAgIGRlYWREYW5nZXI6IGludGVnZXIgPSAwXG4gICAgcmVtYWluaW5nRGFuZ2VyOiBpbnRlZ2VyID0gMFxuICAgIHdhdmVEaWZmaWN1bHR5OiBpbnRlZ2VyID0gMFxuXG4gICAgd2F2ZUFjdGl2ZTogYm9vbGVhbiAgLy8gZmFsc2UgZm9yIG5lc3RlZCB3YXZlc1xuICAgIG5leHRXYXZlVGltZTogaW50ZWdlciA9IDBcbiAgICByZXNwYXduUXVldWU6IEVuZW15Q29uZmlnW10gPSBbXTtcblxuICAgIGVuZW15SW50ZXJ2YWw6IGludGVnZXJcblxuICAgIHF1ZXVlZEVuZW15OiBhbnlcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcblxuICAgICAgICAvLyBzZXQgZmFsc2UgZm9yIG5lc3RlZCBiZWhhdmlvciBpbiB1cGRhdGUoKVxuICAgICAgICB0aGlzLndhdmVBY3RpdmUgPSAodGhpcy5zY2VuZS5zY2VuZUxldmVsID4gMCk7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuZ2V0V2F2ZURpZmZpY3VsdHkoKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gMWU5IC8vIGEgbG90XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0V2F2ZURpZmZpY3VsdHkoKSB7XG4gICAgICAgIC8vVE9ETzogYWRkIGRpZmZpY3VsdHkgc2NhbGluZyBhbmQgYmFsYW5jaW5nIGZvciB3YXZlc1xuICAgICAgICB0aGlzLndhdmVEaWZmaWN1bHR5ID0gV2F2ZUNvbmZpZy5vdXRlcldhdmVEYW5nZXIodGhpcy5jdXJyZW50V2F2ZSlcbiAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgPSB0aGlzLndhdmVEaWZmaWN1bHR5XG4gICAgICAgIHRoaXMuZW5lbXlJbnRlcnZhbCA9IFdhdmVDb25maWcub3V0ZXJFbmVteUludGVydmFsXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZXh0V2F2ZSgpIHtcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZSsrO1xuICAgICAgICB0aGlzLmdldFdhdmVEaWZmaWN1bHR5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyB3YXZlICcgKyB0aGlzLmN1cnJlbnRXYXZlICsgJywgd2F2ZSBkaWZmaWN1bHR5OiAnICsgdGhpcy53YXZlRGlmZmljdWx0eSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bkVuZW15KCkge1xuICAgICAgICAvLyBUT0RPOiByZXNwYXduaW5nIHNob3VsZG4ndCByZXNldCBoZWFsdGhcbiAgICAgICAgaWYgKHRoaXMucmVzcGF3blF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCByZXNwYXduID0gdGhpcy5yZXNwYXduUXVldWUuc2hpZnQoKVxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmVzcGF3bi5kYW5nZXI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5hbGxFbmVtaWVzW3Jlc3Bhd24ubmFtZV0uZ2V0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteShcbiAgICAgICAgICAgIChlbmVteSkgPT4gZW5lbXkuZGFuZ2VyIDw9IHRoaXMucmVtYWluaW5nRGFuZ2VyXG4gICAgICAgIClcblxuICAgICAgICBpZiAocmFuZEVuZW15KSB7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByYW5kRW5lbXkuZGFuZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyYW5kRW5lbXkubmFtZV0uZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IDA7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNwYXduKHJlc3Bhd246IEVuZW15Q29uZmlnKSB7XG4gICAgICAgIHRoaXMucmVzcGF3blF1ZXVlLnB1c2gocmVzcGF3bik7XG4gICAgfVxuXG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGEpIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxuICAgICAgICBsZXQgZW5lbXlcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLndhdmVBY3RpdmUgJiYgdGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dFdhdmVUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F2ZSgpOyAgLy8gbm8gd2F2ZXMgaW4gbmVzdGVkIGxheWVyc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nRGFuZ2VyID4gMCAmJiB0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0RW5lbXkpIHtcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc3Bhd25FbmVteSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVhZERhbmdlciA9PT0gdGhpcy53YXZlRGlmZmljdWx0eSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2F2ZSBcIiArIHRoaXMuY3VycmVudFdhdmUgKyBcIiBjb21wbGV0ZSEgTmV4dCB3YXZlIGluIFwiICsgUEFVU0VfQUZURVJfV0FWRV9USU1FKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWREYW5nZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmVUaW1lID0gdGhpcy5sYXN0VGltZSArIFBBVVNFX0FGVEVSX1dBVkVfVElNRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWV1ZWRFbmVteSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoKSA9PiB0cnVlKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhID0gdGhpcy5sYXN0VGltZSAqIChXYXZlQ29uZmlnLmRhbmdlclBlclNlYyh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpICogMC4wMDEpXG4gICAgICAgICAgICBjb25zdCBiID0gKHRoaXMucXVldWVkRW5lbXkuZGFuZ2VyICogMS4wKVxuICAgICAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5xdWV1ZWRFbmVteS5uYW1lXS5nZXQoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxhc3RUaW1lLCBiKVxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSBudWxsXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgZW5lbXkuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIGVuZW15IGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxuICAgICAgICAgICAgZW5lbXkuc3RhcnRPblBhdGgodGhpcy5jdXJyZW50V2F2ZSk7XG4gICAgICAgICAgICB0aGlzLnNwYXduZWRFbmVtaWVzKys7XG4gICAgICAgICAgICB0aGlzLm5leHRFbmVteSA9IHRoaXMubGFzdFRpbWUgKyB0aGlzLmVuZW15SW50ZXJ2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFJhbmRFbmVteShmaWx0ZXJfZm4pOiBFbmVteUNvbmZpZyB7XG4gICAgICAgIGxldCBhdmFpbEVuZW1pZXMgPSBbXVxuICAgICAgICBmb3IobGV0IGVuZW15IG9mIEVORU1ZX0NPTkZJR1MpIHsgIC8vIFNlbGVjdCBhbGwgZW5lbWllcyB0aGF0IGNhbiBiZSBzcGF3bmVkXG4gICAgICAgICAgICBpZiAoZmlsdGVyX2ZuKGVuZW15KSlcbiAgICAgICAgICAgICAgICBhdmFpbEVuZW1pZXMucHVzaChlbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXZhaWxFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByYW5kb20gb25lIG9mIHRoZW1cbiAgICAgICAgICAgIGxldCByYW5kRW5lbXkgPSBhdmFpbEVuZW1pZXNbTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiBhdmFpbEVuZW1pZXMubGVuZ3RoKV07XG4gICAgICAgICAgICByZXR1cm4gcmFuZEVuZW15XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==