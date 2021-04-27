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
        _this.add(_this.bulletImage);
        _this.particles = _this.scene.add.particles('particle_red');
        _this.emitter = _this.particles.createEmitter({
            speed: 100,
            scale: { start: 0.3, end: 0 },
            blendMode: 'ADD',
            lifespan: 100,
        });
        return _this;
    }
    Bullet.prototype.fire = function (x, y, angle, damage, towerRange, speedMod, scene) {
        this.damage = damage;
        this.speed = Phaser.Math.GetSpeed(towerRange * speedMod, 1);
        this.setActive(true);
        //  Bullets fire from the middle of the screen to the given x/y
        this.bulletImage.setPosition(x, y);
        //  we don't need to rotate the bullets as they are round
        //  this.setRotation(angle);
        // TODO: figure out how to bring to front
        this.dx = Math.cos(angle);
        this.dy = Math.sin(angle);
        this.lifespan = 1000 / speedMod;
        if (this.scene.scene.isVisible()) {
            this.emitter.flow(0); // argument: frequency (0 = always)
            this.emitter.startFollow(this.bulletImage);
            // this.scene.children.bringToTop(this.bulletImage);
            this.scene.children.bringToTop(this.particles);
            this.setVisible(true);
        }
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
            this.emitter.manager.removeEmitter(this.emitter);
            this.destroy();
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
exports.TOWER_CONFIGS = exports.Multishot = exports.Sniper = exports.Basic = exports.ENEMY_CONFIGS = exports.SplitterFat = exports.SplitterBig = exports.SplitterSmall = exports.Fast = exports.Armoured = exports.Fat = exports.Weak = exports.WaveConfig = exports.RANGE_INDICATOR_CONFIG = exports.PLAYER_HEALTH_REGEN = exports.PAUSE_AFTER_WAVE_TIME = exports.TOWER_HEALTH_REGEN = exports.DAMAGE_TO_TOWER_HEALTH_COEF = void 0;
var enem = __webpack_require__(/*! ./enemy */ "./src/enemy.ts");
// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
exports.DAMAGE_TO_TOWER_HEALTH_COEF = 0.4;
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
    outerWaveDanger: function (wave) { return (wave + 1) * 10; },
    // ------------------- inner -----------------------
    // How much danger per second is generatee in inner depths?
    dangerPerSec: function (level) { return 10 * level; },
    // To what wave number does a tower level correspond? (for enemy scaling)
    levelToWave: function (level) { return 3 * level; },
};
exports.Weak = {
    'name': 'Weak',
    'displayName': 'Normal',
    'class': enem.WeakEnemy,
    'hp': function (wave) { return 20 + 7 * (wave - 1); },
    'speed': 1 / 20000,
    'money': 1,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'spriteName': 'weakEnemy',
    'danger': 10,
    'tint': 0xffffff,
    'minWave': 0,
    'blurb': 'Too cute to kill... surely.'
};
exports.Fat = {
    'name': 'Fat',
    'displayName': 'Chonk',
    'class': enem.FatEnemy,
    'hp': function (wave) { return 100 + 35 * (wave - 1); },
    'speed': 1 / 40000,
    'money': 4,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 100,
    'spriteName': 'fatEnemy',
    'tint': 0xffffff,
    'minWave': 14,
    'blurb': 'Large and in charge.'
};
exports.Armoured = {
    'name': 'Armoured',
    'displayName': 'Armoured',
    'class': enem.ArmouredEnemy,
    'hp': function (wave) { return 20 + 7 * (wave - 1); },
    'speed': 1 / 30000,
    'money': 3,
    'damage': 1,
    'armour': function (wave) { return Math.min(3 + (Math.floor(wave / 5)), 14); },
    'danger': 100,
    'spriteName': 'armouredEnemy',
    'tint': 0xffffff,
    'minWave': 10,
    'blurb': 'The hat is surprisingly sturdy.'
};
exports.Fast = {
    'name': 'Fast',
    'displayName': 'Speedy',
    'class': enem.FastEnemy,
    'hp': function (wave) { return 15 + 5 * (wave - 1); },
    'speed': 1 / 10000,
    'money': 1,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 30,
    'spriteName': 'fastEnemy',
    'tint': 0xffffff,
    'minWave': 6,
    'blurb': 'The boots aren\'t just for show!'
};
exports.SplitterSmall = {
    'name': 'SplitterSmall',
    'displayName': 'Splitter baby',
    'class': enem.SplitterSmallEnemy,
    'hp': function (wave) { return 10 + 4 * (wave - 1); },
    'speed': 1 / 20000,
    'money': 0,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 20,
    'spriteName': 'splitterSmallEnemy',
    'tint': 0xffffff,
    'minWave': -1,
    'blurb': 'Aww, look, they\'re just babies!'
};
exports.SplitterBig = {
    'name': 'SplitterBig',
    'displayName': 'Splitter',
    'class': enem.SplitterBigEnemy,
    'hp': function (wave) { return 20 + 5 * (wave - 1); },
    'speed': 1 / 30000,
    'money': 2,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 30,
    'spriteName': 'splitterBigEnemy',
    'tint': 0xffffff,
    'split': {
        'cfg': exports.SplitterSmall,
        'amount': 2
    },
    'minWave': 8,
    'blurb': 'Eyes to meet you.'
};
exports.SplitterFat = {
    'name': 'SplitterFat',
    'displayName': 'The Big One',
    'class': enem.SplitterFatEnemy,
    'hp': function (wave) { return 100 + 10 * (wave - 1); },
    'speed': 1 / 40000,
    'money': 2,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 200,
    'spriteName': 'splitterFatEnemy',
    'tint': 0xffffff,
    'split': {
        'cfg': exports.SplitterBig,
        'amount': 2
    },
    'minWave': 18,
    'blurb': 'Eyes to meet you... two.'
};
exports.ENEMY_CONFIGS = [exports.Weak, exports.Fat, exports.Armoured, exports.Fast, exports.SplitterBig, exports.SplitterSmall, exports.SplitterFat];
exports.Basic = {
    'name': "Basic",
    'damage': function (level) { return 15 + 30 * (level - 1); },
    'firerate': function (level) { return 1000; },
    'range': function (level) { return 125; },
    'bulletSpeedMod': 4,
    'price': 5,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 0,
    'tintBase': 0xffffff,
    'tintMid': 0x675a9c,
    'tintTop': 0xaaaaff,
    'description': "Nothing fancy. Damage grows with level.",
};
exports.Sniper = {
    'name': "Sniper",
    'damage': function (level) { return 50 + 120 * (level - 1); },
    'firerate': function (level) { return 4000; },
    'range': function (level) { return 200 + 35 * level; },
    'bulletSpeedMod': 5,
    'price': 10,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 1,
    'tintBase': 0xffffff,
    'tintMid': 0x3a715d,
    'tintTop': 0x48ac81,
    'description': "Long range, but fires slowly. Damage and range grow with level.",
};
exports.Multishot = {
    'name': "Multishot",
    'damage': function (level) { return 15 + 20 * (level - 1); },
    'firerate': function (level) { return 1000; },
    'range': function (level) { return 95 + 5 * (level - 1); },
    'numTargets': function (level) { return 3 + level; },
    'bulletSpeedMod': 4,
    'price': 7,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 2,
    'tintBase': 0xffffff,
    'tintMid': 0x7f4d61,
    'tintTop': 0xaa4e61,
    'description': "Can shoot at multiple enemies at once. Damage, range, and number of targets grow with level.",
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
exports.SplitterFatEnemy = exports.SplitterSmallEnemy = exports.SplitterBigEnemy = exports.FastEnemy = exports.ArmouredEnemy = exports.FatEnemy = exports.WeakEnemy = exports.EnemyBase = void 0;
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
        _this.setInteractive();
        _this.on('pointerover', function () {
            if (_this.scene == _this.scene.metaScene.activeScene)
                _this.scene.scene.get('hudScene').setDescriptionEnemy(_this);
        });
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
            this.scene.metaScene.damageSound.play();
            this.scene.waveManager.respawn(this.stats, this.hp);
        }
        if (this.scene.enemyEndCallback) {
            this.scene.enemyEndCallback(this.stats.damage);
        }
    };
    EnemyBase.prototype.startOnPath = function (wave, respawnHealth, start_t) {
        if (start_t === void 0) { start_t = 0; }
        // set the t parameter at the start of the path
        this.follower.t = start_t;
        if (respawnHealth > 0)
            this.hp = respawnHealth;
        else
            this.hp = this.stats.hp(wave);
        this.speed = this.stats.speed;
        this.tint = this.stats.tint;
        // get x and y of the given t point
        this.scene.terrain.path.getPoint(this.follower.t, this.follower.vec);
        // set the x and y of our enemy to the received from the previous step
        this.setPosition(this.follower.vec.x, this.follower.vec.y);
        var frameRate = Math.min(60, this.stats.speed * 40000 * 15);
        if (this.stats.spriteName === "fatEnemy" || this.stats.spriteName === "splitterFatEnemy") { // hack
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
        if (this.stats.split)
            this.onDeathSplit();
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
        this.scene.metaScene.enemiesSlain++;
    };
    EnemyBase.prototype.onDeathSplit = function () {
        for (var i = 0; i < this.stats.split.amount; i++) {
            var newEnemy = this.scene.allEnemies[this.stats.split.cfg.name].get();
            newEnemy.setVisible(true);
            newEnemy.setActive(true);
            this.scene.waveManager.deadDanger -= this.stats.split.cfg.danger;
            newEnemy.startOnPath(this.scene.waveManager.currentWave, 0, this.follower.t);
        }
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
var SplitterBigEnemy = /** @class */ (function (_super) {
    __extends(SplitterBigEnemy, _super);
    function SplitterBigEnemy(scene) {
        return _super.call(this, scene, cfg.SplitterBig) || this;
    }
    return SplitterBigEnemy;
}(EnemyBase));
exports.SplitterBigEnemy = SplitterBigEnemy;
var SplitterSmallEnemy = /** @class */ (function (_super) {
    __extends(SplitterSmallEnemy, _super);
    function SplitterSmallEnemy(scene) {
        return _super.call(this, scene, cfg.SplitterSmall) || this;
    }
    return SplitterSmallEnemy;
}(EnemyBase));
exports.SplitterSmallEnemy = SplitterSmallEnemy;
var SplitterFatEnemy = /** @class */ (function (_super) {
    __extends(SplitterFatEnemy, _super);
    function SplitterFatEnemy(scene) {
        return _super.call(this, scene, cfg.SplitterFat) || this;
    }
    return SplitterFatEnemy;
}(EnemyBase));
exports.SplitterFatEnemy = SplitterFatEnemy;


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
var metaScene_1 = __webpack_require__(/*! ./scenes/metaScene */ "./src/scenes/metaScene.ts");
var tdScene_1 = __webpack_require__(/*! ./scenes/tdScene */ "./src/scenes/tdScene.ts");
var metaScene = new metaScene_1.MetaScene();
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
    PlayerInfo.money = 5;
    PlayerInfo.hp = 10;
    PlayerInfo.timeScale = 1;
    // static RNG = new Phaser.Math.RandomDataGenerator(["42"]);
    PlayerInfo.RNG = new Phaser.Math.RandomDataGenerator();
    PlayerInfo.regenProgress = 0;
    return PlayerInfo;
}());
exports.PlayerInfo = PlayerInfo;


/***/ }),

/***/ "./src/scenes/gameOverScene.ts":
/*!*************************************!*\
  !*** ./src/scenes/gameOverScene.ts ***!
  \*************************************/
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
exports.GameOverScene = void 0;
var playerInfo_1 = __webpack_require__(/*! ../playerInfo */ "./src/playerInfo.ts");
var GameOverScene = /** @class */ (function (_super) {
    __extends(GameOverScene, _super);
    function GameOverScene(metaScene) {
        var _this = _super.call(this, {
            active: true,
            visible: true,
            key: "gameOverScene",
        }) || this;
        _this.currentTime = 0;
        _this.reloaded = false;
        _this.metaScene = metaScene;
        return _this;
    }
    GameOverScene.prototype.create = function () {
        var _this = this;
        this.add.rectangle(512, 256, 1024, 512, 0xaa4444, 0.5);
        this.add.rectangle(512, 256 - 40, 512 - 128, 256 - 64, 0x444444);
        this.add.text(512, 160, "YOU DIED", { fontSize: '30px bold', color: "red" }).setOrigin(0.5);
        this.add.text(512, 190, "Last wave witnessed: " + this.metaScene.getRootTDScene().waveManager.currentWave).setOrigin(0.5);
        this.add.text(512, 210, "Wealth taken to the grave: " + playerInfo_1.PlayerInfo.money).setOrigin(0.5);
        this.add.text(512, 230, "Invaders vanquished: " + this.metaScene.enemiesSlain).setOrigin(0.5);
        this.add.text(512, 280, "CLICK TO DARE AGAIN").setInteractive().setOrigin(0.5).on('pointerdown', function () {
            _this.input.stopPropagation();
            if (!_this.reloaded) {
                _this.reloaded = true;
                location.reload();
            }
        }, this);
    };
    GameOverScene.prototype.update = function (_, delta) {
        this.currentTime += delta;
    };
    return GameOverScene;
}(Phaser.Scene));
exports.GameOverScene = GameOverScene;


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
        this.descriptionText = this.add.text(5, 300, "", { fontSize: '10pt' });
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
        if (this.metaScene.isGameOver) {
            this.scene.pause();
        }
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
        if (playerInfo_1.PlayerInfo.hp <= 0) {
            this.metaScene.gameOver();
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
    HudScene.prototype.setDescriptionTower = function (config, tower) {
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
    HudScene.prototype.setDescriptionEnemy = function (enemy) {
        var text = "";
        if (enemy) {
            var wave = void 0;
            if (this.metaScene.activeScene.sceneLevel === 0)
                wave = enemy.scene.waveManager.currentWave;
            else
                wave = config_1.WaveConfig.levelToWave(this.metaScene.activeScene.getTowerParent().level);
            text += enemy.stats.displayName + "\n";
            text += "Health: " + enemy.hp + "/" + enemy.stats.hp(wave) + "\n";
            text += "Armour: " + enemy.stats.armour(wave) + "\n";
            text += "Speed: " + enemy.speed * 60000 + "\n";
            text += "Loot: " + enemy.stats.money + "\n";
            if (enemy.stats.blurb)
                text += "\n" + enemy.stats.blurb + "\n";
        }
        this.descriptionText.setText(text);
    };
    return HudScene;
}(Phaser.Scene));
exports.HudScene = HudScene;
var BuyTowerIcon = /** @class */ (function () {
    function BuyTowerIcon(hudScene, x, y, config) {
        var _this = this;
        this.oldMoney = 0;
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
            _this.hudScene.setDescriptionTower(config);
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
            this.hudScene.metaScene.buildSound.play();
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
    BuyTowerIcon.prototype.updateShop = function () {
        // Uncomment to prevent negative money:
        this.hudScene.input.setDraggable(this.spriteContainer, playerInfo_1.PlayerInfo.money >= this.towerConfig.price);
        if (playerInfo_1.PlayerInfo.money >= this.towerConfig.price) {
            this.priceText.setTint(0x00ff00);
            this.resetTint();
        }
        else {
            this.priceText.setTint(0xff0000);
            this.setShopIconTint(0x995555);
        }
    };
    BuyTowerIcon.prototype.update = function (time, delta) {
        if (playerInfo_1.PlayerInfo.money != this.oldMoney) {
            this.updateShop();
            this.oldMoney = playerInfo_1.PlayerInfo.money;
        }
    };
    return BuyTowerIcon;
}());


/***/ }),

/***/ "./src/scenes/metaScene.ts":
/*!*********************************!*\
  !*** ./src/scenes/metaScene.ts ***!
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
var gameOverScene_1 = __webpack_require__(/*! ./gameOverScene */ "./src/scenes/gameOverScene.ts");
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
        _this.enemiesSlain = 0;
        _this.isGameOver = false;
        _this.scenes = [];
        return _this;
    }
    MetaScene.prototype.create = function () {
        this.createAnimations();
        this.activeScene = this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.scene.start("hudScene");
        this.mainSound = this.sound.add("main_music", { "loop": true, "volume": 0.07 });
        this.mainSound.play();
        this.buildSound = this.sound.add('build_sound', { 'loop': false, 'volume': 1 });
        this.damageSound = this.sound.add('damage_sound', { 'loop': false, 'volume': 0.15 });
        this.shootSound = this.sound.add('shoot_sound', { 'loop': false, 'volume': 0.03 });
        this.multishotSound = this.sound.add('multishot_sound', { 'loop': false, 'volume': 0.03 });
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
        if (this.activeScene)
            this.scene.bringToTop(this.activeScene.scene.key);
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
        console.log("Switching from " + this.activeScene.scene.key + " (parent " + this.activeScene.sceneParentKey + ") to"
            + (" " + newScene.scene.key + " (parent " + newScene.sceneParentKey + ")"));
        newScene.time.addEvent({
            delay: tdScene_1.SCENE_TRANSITION_MS,
            loop: false,
            callback: function () {
                var _a;
                (_a = _this.activeScene) === null || _a === void 0 ? void 0 : _a.scene.setVisible(false);
                newScene.scene.setVisible(true);
                _this.activeScene = newScene;
                newScene.setIsForeground(true, goingInside, i, j);
                _this.scene.bringToTop(newSceneKey);
                _this.scene.bringToTop('hudScene');
            }
        });
        // 1.05946309436 ~ 2^(1/12), i.e. one semitone
        this.sound.setRate(1 / (Math.pow(1.05946309436, newScene.sceneLevel)));
    };
    MetaScene.prototype.gameOver = function () {
        if (!this.isGameOver) {
            this.sound.setRate(1 / (Math.pow(1.05946309436, 15)));
            this.isGameOver = true;
            var gameOverScene = this.scene.add("gameOverScene", new gameOverScene_1.GameOverScene(this));
            this.scene.start(gameOverScene);
            this.activeScene.scene.pause();
            this.scene.pause();
        }
    };
    MetaScene.prototype.preload = function () {
        // load the game assets
        this.load.setBaseURL('assets/');
        this.load.spritesheet('weakEnemy', 'enemy.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('fastEnemy', 'enemy_fast.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('armouredEnemy', 'enemy_armored.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('splitterBigEnemy', 'enemy_split_big.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('splitterSmallEnemy', 'enemy_split_small.png', { frameWidth: 48, frameHeight: 48 });
        this.load.spritesheet('fatEnemy', 'enemy_chonk.png', { frameWidth: 56, frameHeight: 56 });
        this.load.spritesheet('splitterFatEnemy', 'enemy_split_chonk.png', { frameWidth: 56, frameHeight: 56 });
        this.load.image('bullet', 'bullet.png');
        this.load.spritesheet('tileset', 'tileset.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('towertops', 'towertop.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('towermids', 'towermid.png', { frameWidth: 64, frameHeight: 64 });
        this.load.spritesheet('towerbases', 'towerbase.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('particle_red', 'particle_red.png');
        this.load.spritesheet('portalFrom', 'portal_from.png', { frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet('portalTo', 'portal_to.png', { frameWidth: 40, frameHeight: 40 });
        this.load.audio("main_music", "gamejam_LD48.ogg");
        this.load.audio('build_sound', 'build.wav');
        this.load.audio('damage_sound', 'damage.wav');
        this.load.audio('shoot_sound', 'turretshot.wav');
        this.load.audio('multishot_sound', 'multishot.wav');
    };
    MetaScene.prototype.createAnimations = function () {
        this.anims.create({
            key: 'weakEnemy_walk',
            frames: this.anims.generateFrameNumbers('weakEnemy', { start: 0, end: 7 }),
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
            key: 'splitterFatEnemy_walk',
            frames: this.anims.generateFrameNumbers('splitterFatEnemy', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'armouredEnemy_walk',
            frames: this.anims.generateFrameNumbers('armouredEnemy', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'splitterBigEnemy_walk',
            frames: this.anims.generateFrameNumbers('splitterBigEnemy', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'splitterSmallEnemy_walk',
            frames: this.anims.generateFrameNumbers('splitterSmallEnemy', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'portalFrom_spin',
            frames: this.anims.generateFrameNumbers('portalFrom', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'portalTo_spin',
            frames: this.anims.generateFrameNumbers('portalTo', { start: 0, end: 7 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'towerMids_spin',
            frames: this.anims.generateFrameNumbers('towermids', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });
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
            bullet.fire(x, y, angle, damage, range, bulletSpeedMod, this);
        }
    };
    TDScene.prototype.toGridPos = function (x, y) {
        var i = Math.floor((x + this.cameras.main.scrollX) / terrain_1.TILE_SIZE);
        var j = Math.floor((y + this.cameras.main.scrollY) / terrain_1.TILE_SIZE);
        return [i, j];
    };
    TDScene.prototype.onClick = function (pointer) {
        this.input.stopPropagation();
        // console.log(`onclick on scene ${this.scene.key}`)
        var _a = this.toGridPos(pointer.x, pointer.y), i = _a[0], j = _a[1];
        // console.log(`clicked coordinates: ${i} ${j}`)
        var potentialExistingTower = this.terrain.tryGetExistingTower(i, j);
        if (potentialExistingTower) {
            // console.log("switching to an existing tower")
            this.metaScene.switchToScene(potentialExistingTower.getInnerTowerSceneKey(), true, i, j);
        }
        var end = this.terrain.pathTiles[this.terrain.pathTiles.length - 1];
        if (i === end[0] && j === end[1] && this.sceneParentKey) {
            // console.log("switching via end")
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
                if (this.tiles[i][j] == TileType.Start) {
                    this.portalFrom = scene.add.sprite(x, y, "portalFrom", 0);
                }
                if (this.tiles[i][j] == TileType.End) {
                    this.portalTo = scene.add.sprite(x, y, "portalTo", 0);
                }
            }
        }
    };
    Terrain.prototype.draw = function (graphics) {
        // this.drawGrid(graphics)
        graphics.lineStyle(3, 0xffffff, 1);
        // visualize the path
        this.path.draw(graphics);
        this.portalFrom.anims.play({
            key: "portalFrom_spin",
            frameRate: 10
        });
        this.portalTo.anims.play({
            key: "portalTo_spin",
            frameRate: 10
        });
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
        this.towerMid.anims.play({
            key: "towerMids_spin"
        });
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
            hudScene.setDescriptionTower(_this.config, _this);
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
        this.baseX = this.x;
        this.baseY = this.y;
    };
    _TowerTurret.prototype.fire = function () {
        var enemies = getEnemy(this.x, this.y, this.parent.stats.range(this.parent.level), this.scene.allEnemies, 1);
        if (enemies) {
            var enemy = enemies[0];
            var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
            var damage = this.parent.stats.damage(this.parent.level);
            this.scene.addBullet(this.x, this.y, angle, damage, this.parent.stats.range(this.parent.level), this.parent.stats.bulletSpeedMod);
            this.fireAnimation(angle, damage);
            if (this.scene == this.scene.metaScene.activeScene)
                this.scene.metaScene.shootSound.play();
            return true;
        }
        return false;
    };
    _TowerTurret.prototype.fireAnimation = function (angle, damage) {
        this.angle = (angle + Math.PI / 2) * Phaser.Math.RAD_TO_DEG;
        var recoil = Math.min(damage * 0.5, 25);
        this.x = this.baseX;
        this.y = this.baseY;
        this.scene.tweens.add({
            targets: this,
            duration: Math.min(this.parent.config.firerate(this.parent.level) * 0.8, 100 + damage),
            x: this.x + Math.cos(angle + Math.PI) * recoil,
            y: this.y + Math.sin(angle + Math.PI) * recoil,
            ease: 'Quad',
            yoyo: true
        });
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
        var numTargets = 3;
        if (this.parent.stats.numTargets) {
            numTargets = this.parent.stats.numTargets(this.parent.level);
        }
        var enemies = getEnemy(this.x, this.y, this.parent.stats.range(this.parent.level), this.scene.allEnemies, numTargets);
        if (enemies && enemies.length > 0) {
            for (var _i = 0, enemies_1 = enemies; _i < enemies_1.length; _i++) {
                var enemy = enemies_1[_i];
                var angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y);
                var damage = this.parent.stats.damage(this.parent.level);
                this.scene.addBullet(this.x, this.y, angle, damage, this.parent.stats.range(this.parent.level), this.parent.stats.bulletSpeedMod);
                this.fireAnimation(angle, damage);
                if (this.scene == this.scene.metaScene.activeScene)
                    this.scene.metaScene.multishotSound.play(); // this should be in config if this were done properly
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
        if (this.respawnQueue.length > 0) {
            var respawn = this.respawnQueue.shift();
            this.respawnHealth = respawn[1];
            this.remainingDanger -= respawn[0].danger;
            return this.scene.allEnemies[respawn[0].name].get();
        }
        var randEnemy = this.getRandEnemy(function (enemy) {
            return (enemy.danger <= _this.remainingDanger) && (enemy.minWave <= _this.currentWave);
        });
        if (randEnemy) {
            this.remainingDanger -= randEnemy.danger;
            return this.scene.allEnemies[randEnemy.name].get();
        }
        this.remainingDanger = 0;
        return null;
    };
    WaveManager.prototype.respawn = function (respawn, remainingHealth) {
        this.respawnQueue.push([respawn, remainingHealth]);
    };
    WaveManager.prototype.update = function (delta) {
        var _this = this;
        this.lastTime += delta;
        var enemy;
        var wave;
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
            wave = this.currentWave;
        }
        else {
            if (!this.queuedEnemy) {
                this.queuedEnemy = this.getRandEnemy(function (enemy) {
                    return enemy.minWave <= 2 * config_1.WaveConfig.levelToWave(_this.scene.getTowerParent().level);
                });
            }
            var a = this.lastTime * (config_1.WaveConfig.dangerPerSec(this.scene.getTowerParent().level) * 0.001);
            var b = (this.queuedEnemy.danger * 1.0);
            if (a > b) {
                enemy = this.scene.allEnemies[this.queuedEnemy.name].get();
                // console.log(this.lastTime, b)
                this.queuedEnemy = null;
                this.lastTime = 0;
            }
            wave = config_1.WaveConfig.levelToWave(this.scene.getTowerParent().level);
        }
        if (enemy) {
            enemy.setActive(true);
            enemy.setVisible(true);
            // place the enemy at the start of the path
            enemy.startOnPath(wave, this.respawnHealth);
            this.respawnHealth = 0;
            this.nextEnemy = this.lastTime + this.enemyInterval;
        }
    };
    WaveManager.prototype.getRandEnemy = function (filter_fn) {
        var availEnemies = [];
        for (var _i = 0, ENEMY_CONFIGS_1 = config_1.ENEMY_CONFIGS; _i < ENEMY_CONFIGS_1.length; _i++) { // Select all enemies that can be spawned
            var enemy = ENEMY_CONFIGS_1[_i];
            if (enemy.minWave >= 0 && filter_fn(enemy))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlcnJhaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvd2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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LENBQUM7WUFDdEIsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2QiwyQ0FBMkM7WUFDM0MsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLFNBQVM7UUFDMUIsSUFBSSxZQUFZLEdBQUcsRUFBRTtRQUNyQixLQUFpQixVQUFhLEVBQWIsd0NBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRSxFQUFHLHlDQUF5QztZQUF4RSxJQUFJLEtBQUs7WUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLDRCQUE0QjtZQUM1QixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RixPQUFPLFNBQVM7U0FDbkI7YUFBTTtZQUNILE9BQU8sSUFBSTtTQUNkO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQXhJWSxrQ0FBVyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuL3BsYXllckluZm9cIlxuaW1wb3J0IHtURFNjZW5lfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXG5cbmV4cG9ydCBjb25zdCBSQURJVVMgPSAxMFxuXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgZHg6IG51bWJlciA9IDBcbiAgICBkeTogbnVtYmVyID0gMFxuICAgIGxpZmVzcGFuOiBudW1iZXIgPSAwXG4gICAgc3BlZWQ6IG51bWJlclxuICAgIGRhbWFnZTogaW50ZWdlclxuXG4gICAgYnVsbGV0SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICAgIHBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyXG4gICAgZW1pdHRlcjogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcblxuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg2MDAsIDEpO1xuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMCwgMCwgJ2J1bGxldCcpXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYnVsbGV0SW1hZ2UpXG5cbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ3BhcnRpY2xlX3JlZCcpXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IHRoaXMucGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xuICAgICAgICAgICAgc3BlZWQ6IDEwMCxcbiAgICAgICAgICAgIHNjYWxlOiB7c3RhcnQ6IDAuMywgZW5kOiAwfSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXG4gICAgICAgICAgICBsaWZlc3BhbjogMTAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJlKHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHRvd2VyUmFuZ2UsIHNwZWVkTW9kLCBzY2VuZSkge1xuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKHRvd2VyUmFuZ2UgKiBzcGVlZE1vZCwgMSk7XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XG5cbiAgICAgICAgLy8gIEJ1bGxldHMgZmlyZSBmcm9tIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiB0byB0aGUgZ2l2ZW4geC95XG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2Uuc2V0UG9zaXRpb24oeCwgeSk7XG5cbiAgICAgICAgLy8gIHdlIGRvbid0IG5lZWQgdG8gcm90YXRlIHRoZSBidWxsZXRzIGFzIHRoZXkgYXJlIHJvdW5kXG4gICAgICAgIC8vICB0aGlzLnNldFJvdGF0aW9uKGFuZ2xlKTtcbiAgICAgICAgLy8gVE9ETzogZmlndXJlIG91dCBob3cgdG8gYnJpbmcgdG8gZnJvbnRcblxuICAgICAgICB0aGlzLmR4ID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICB0aGlzLmR5ID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwIC8gc3BlZWRNb2Q7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmUuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5mbG93KDApICAvLyBhcmd1bWVudDogZnJlcXVlbmN5ICgwID0gYWx3YXlzKVxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnN0YXJ0Rm9sbG93KHRoaXMuYnVsbGV0SW1hZ2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMuYnVsbGV0SW1hZ2UpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMucGFydGljbGVzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmV4cGxvZGUoMTAsIHRoaXMuYnVsbGV0SW1hZ2UueCwgdGhpcy5idWxsZXRJbWFnZS55KVxuICAgIH1cblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcblxuICAgICAgICB0aGlzLmxpZmVzcGFuIC09IGRlbHRhO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueCArPSB0aGlzLmR4ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueSArPSB0aGlzLmR5ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XG5cbiAgICAgICAgKHRoaXMuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkuc2V0Q2lyY2xlKFJBRElVUywgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5kZXN0cm95KCk7IC8vIGRpc2FibGUgZW1pdHRvciAoYWxzbyBjb3VsZCBleHBsb2RlIGl0KVxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLm1hbmFnZXIucmVtb3ZlRW1pdHRlcih0aGlzLmVtaXR0ZXIpXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZW5lbSBmcm9tIFwiLi9lbmVteVwiO1xuXG4vLyBlbmVteSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSBob3cgbXVjaCBoZWFsdGggdG93ZXIgbG9zZXNcbi8vICh0b3dlciBoZWFsdGggaXMgZnJvbSAwIHRvIDEpXG5leHBvcnQgY29uc3QgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGID0gMC40XG5cbmV4cG9ydCBjb25zdCBUT1dFUl9IRUFMVEhfUkVHRU4gPSAwLjAwMDAxICogMlxuXG5leHBvcnQgY29uc3QgUEFVU0VfQUZURVJfV0FWRV9USU1FID0gMzAwMDtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9IRUFMVEhfUkVHRU46IG51bWJlciA9IDA7ICAvLyBob3cgbXVjaCBoZWFsdGggcGVyIHdhdmUsIGNhbiBiZSA8IDFcblxuZXhwb3J0IGNvbnN0IFJBTkdFX0lORElDQVRPUl9DT05GSUcgPSB7XG4gICAgJ2NvbG91cic6IDB4YmJiYmZmLFxuICAgICdhbHBoYSc6IDIxMCxcbiAgICAnZWRnZUNvbG91cic6IDB4ODA4MGZmLFxuICAgICdlZGdlV2lkdGgnOiA0XG59O1xuXG5leHBvcnQgY29uc3QgV2F2ZUNvbmZpZyA9IHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIG91dGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG93IG11Y2ggdGltZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIHNwYXducyBpbiBhIHdhdmVcbiAgICBvdXRlckVuZW15SW50ZXJ2YWw6IDUwMCxcbiAgICAvLyBIb3cgbXVjaCBkYW5nZXIgaW4gYSB3YXZlXG4gICAgb3V0ZXJXYXZlRGFuZ2VyOiAod2F2ZSkgPT4gKHdhdmUgKzEpICAqIDEwLFxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBpbm5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBwZXIgc2Vjb25kIGlzIGdlbmVyYXRlZSBpbiBpbm5lciBkZXB0aHM/XG4gICAgZGFuZ2VyUGVyU2VjOiAobGV2ZWwpID0+IDEwKmxldmVsLFxuICAgIC8vIFRvIHdoYXQgd2F2ZSBudW1iZXIgZG9lcyBhIHRvd2VyIGxldmVsIGNvcnJlc3BvbmQ/IChmb3IgZW5lbXkgc2NhbGluZylcbiAgICBsZXZlbFRvV2F2ZTogKGxldmVsKSA9PiAzICogbGV2ZWwsXG59XG5cbmV4cG9ydCB0eXBlIEVuZW15Q29uZmlnID0ge1xuICAgIG5hbWU6IHN0cmluZyAgLy8gbXVzdCBiZSBzYW1lIGFzIGNvbmZpZyBvYmplY3QgbmFtZVxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgIC8vIG5hbWUgdG8gYmUgZGlzcGxheWVkIHRvIHBsYXllclxuICAgIGNsYXNzOiBhbnkgIC8vIGNsYXNzIG9mIHRoZSBlbmVteSBhcyBkZWZpbmVkIGluIC4vZW5lbXkudHNcbiAgICBocDogKGludGVnZXIpID0+IGludGVnZXIgIC8vIGNhbiBzY2FsZSB3aXRoIHdhdmVcbiAgICBzcGVlZDogbnVtYmVyICAvLyBmcmFjdGlvbiBvZiBwYXRoXG4gICAgbW9uZXk6IGludGVnZXIgIC8vIG9uLWtpbGwgcmV3YXJkXG4gICAgZGFtYWdlOiBpbnRlZ2VyICAvLyBkYW1hZ2UgZGVhbHQgb24gcmVhY2hpbmcgZW5kXG4gICAgYXJtb3VyOiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gZmxhdCByZWR1Y3Rpb24gb2YgaW5jb21pbmcgZGFtYWdlXG4gICAgZGFuZ2VyOiBpbnRlZ2VyICAvLyBmb3IgY2FsY3VsYXRpbmcgd2F2ZSBkaWZmaWN1bHR5XG4gICAgc3ByaXRlTmFtZTogc3RyaW5nICAvLyBzcHJpdGUgYXMgaW1wb3J0ZWQgaW4gbWV0YVNjZW5lLnByZWxvYWRcbiAgICB0aW50OiBpbnRlZ2VyXG4gICAgc3BsaXQ/OiB7ICAvLyBvcHRpb25hbCBzcGxpdCBpbmZvXG4gICAgICAgIGNmZzogRW5lbXlDb25maWcgIC8vIFRPRE86IG1ha2Ugc3BsaXQgaW50byBtdWx0aXBsZSB0eXBlcyBwb3NzaWJsZT9cbiAgICAgICAgYW1vdW50OiBpbnRlZ2VyXG4gICAgfVxuICAgIG1pbldhdmU6IGludGVnZXIgIC8vIGZpcnN0IHdhdmUgdGhpcyBjYW4gc3Bhd24sIC0xIHRvIG5ldmVyIHNwYXduXG4gICAgYmx1cmI/OiBzdHJpbmcgIC8vIHNob3duIHRvIHBsYXllclxufVxuXG5leHBvcnQgY29uc3QgV2VhazogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnV2VhaycsXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ05vcm1hbCcsXG4gICAgJ2NsYXNzJzogZW5lbS5XZWFrRW5lbXksXG4gICAgJ2hwJzogKHdhdmUpID0+IDIwICsgNyood2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXG4gICAgJ21vbmV5JzogMSxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnd2Vha0VuZW15JyxcbiAgICAnZGFuZ2VyJzogMTAsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnbWluV2F2ZSc6IDAsXG4gICAgJ2JsdXJiJzogJ1RvbyBjdXRlIHRvIGtpbGwuLi4gc3VyZWx5Lidcbn1cblxuZXhwb3J0IGNvbnN0IEZhdDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnRmF0JyxcbiAgICAnZGlzcGxheU5hbWUnOiAnQ2hvbmsnLFxuICAgICdjbGFzcyc6IGVuZW0uRmF0RW5lbXksXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwMCArIDM1ICogKHdhdmUtMSksXG4gICAgJ3NwZWVkJzogMSAvIDQwMDAwLFxuICAgICdtb25leSc6IDQsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxuICAgICdkYW5nZXInOiAxMDAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZmF0RW5lbXknLFxuICAgICd0aW50JzogMHhmZmZmZmYsXG4gICAgJ21pbldhdmUnOiAxNCxcblx0J2JsdXJiJzogJ0xhcmdlIGFuZCBpbiBjaGFyZ2UuJ1xufVxuXG5leHBvcnQgY29uc3QgQXJtb3VyZWQ6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ0FybW91cmVkJyxcbiAgICAnZGlzcGxheU5hbWUnOiAnQXJtb3VyZWQnLFxuICAgICdjbGFzcyc6IGVuZW0uQXJtb3VyZWRFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyA3Kih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyAzMDAwMCxcbiAgICAnbW9uZXknOiAzLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gTWF0aC5taW4oMyArIChNYXRoLmZsb29yKHdhdmUvNSkpLDE0KSxcbiAgICAnZGFuZ2VyJzogMTAwLFxuICAgICdzcHJpdGVOYW1lJzogJ2FybW91cmVkRW5lbXknLFxuICAgICd0aW50JzogMHhmZmZmZmYsXG4gICAgJ21pbldhdmUnOiAxMCxcblx0J2JsdXJiJzogJ1RoZSBoYXQgaXMgc3VycHJpc2luZ2x5IHN0dXJkeS4nXG59XG5cbmV4cG9ydCBjb25zdCBGYXN0OiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdGYXN0JyxcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BlZWR5JyxcbiAgICAnY2xhc3MnOiBlbmVtLkZhc3RFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTUgKyA1Kih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyAxMDAwMCxcbiAgICAnbW9uZXknOiAxLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcbiAgICAnZGFuZ2VyJzogMzAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZmFzdEVuZW15JyxcbiAgICAndGludCc6IDB4ZmZmZmZmLFxuICAgICdtaW5XYXZlJzogNixcblx0J2JsdXJiJzogJ1RoZSBib290cyBhcmVuXFwndCBqdXN0IGZvciBzaG93ISdcbn1cblxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyU21hbGw6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ1NwbGl0dGVyU21hbGwnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGxpdHRlciBiYWJ5JyxcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyU21hbGxFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTArNCood2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXG4gICAgJ21vbmV5JzogMCxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDIwLFxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyU21hbGxFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnbWluV2F2ZSc6IC0xLFxuXHQnYmx1cmInOiAnQXd3LCBsb29rLCB0aGV5XFwncmUganVzdCBiYWJpZXMhJ1xufVxuXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJCaWc6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ1NwbGl0dGVyQmlnJyxcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BsaXR0ZXInLFxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJCaWdFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyA1Kih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyAzMDAwMCxcbiAgICAnbW9uZXknOiAyLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcbiAgICAnZGFuZ2VyJzogMzAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnc3BsaXR0ZXJCaWdFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnc3BsaXQnOiB7XG4gICAgICAgICdjZmcnOiBTcGxpdHRlclNtYWxsLFxuICAgICAgICAnYW1vdW50JzogMlxuICAgIH0sXG4gICAgJ21pbldhdmUnOiA4LFxuXHQnYmx1cmInOiAnRXllcyB0byBtZWV0IHlvdS4nXG59XG5cbmV4cG9ydCBjb25zdCBTcGxpdHRlckZhdDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJGYXQnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdUaGUgQmlnIE9uZScsXG4gICAgJ2NsYXNzJzogZW5lbS5TcGxpdHRlckZhdEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxMDAgKyAxMCood2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gNDAwMDAsXG4gICAgJ21vbmV5JzogMixcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDIwMCxcbiAgICAnc3ByaXRlTmFtZSc6ICdzcGxpdHRlckZhdEVuZW15JyxcbiAgICAndGludCc6IDB4ZmZmZmZmLFxuICAgICdzcGxpdCc6IHtcbiAgICAgICAgJ2NmZyc6IFNwbGl0dGVyQmlnLFxuICAgICAgICAnYW1vdW50JzogMlxuICAgIH0sXG4gICAgJ21pbldhdmUnOiAxOCxcblx0J2JsdXJiJzogJ0V5ZXMgdG8gbWVldCB5b3UuLi4gdHdvLidcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBFTkVNWV9DT05GSUdTID0gW1dlYWssIEZhdCwgQXJtb3VyZWQsIEZhc3QsIFNwbGl0dGVyQmlnLCBTcGxpdHRlclNtYWxsLCBTcGxpdHRlckZhdF1cblxuXG5leHBvcnQgdHlwZSBUb3dlckNvbmZpZyA9IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBkYW1hZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcbiAgICBmaXJlcmF0ZTogKGludGVnZXIpID0+IG51bWJlciAgLy8gbWlsaXNlY29uZHMgYmV0d2VlbiBlYWNoIHNob3RcbiAgICByYW5nZTogKGludGVnZXIpID0+IG51bWJlclxuICAgIG51bVRhcmdldHM/OiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gc2V0IGZvciB0b3dlcnMgdGhhdCB0YXJnZXQgbXVsdGlwbGUgZW5lbWllc1xuICAgIGJ1bGxldFNwZWVkTW9kOiBudW1iZXIgIC8vIGJ1bGxldCB3aWxsIHJlYWNoIHJhbmdlIGluIDEvYnVsbGV0U3BlZWRNb2Qgc2Vjb25kc1xuICAgIHByaWNlOiBudW1iZXJcbiAgICBzcHJpdGVCYXNlOiBpbnRlZ2VyXG4gICAgc3ByaXRlTWlkOiBpbnRlZ2VyXG4gICAgc3ByaXRlVG9wOiBpbnRlZ2VyXG4gICAgdGludEJhc2U6IGludGVnZXJcbiAgICB0aW50TWlkOiBpbnRlZ2VyXG4gICAgdGludFRvcDogaW50ZWdlclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG59XG5cbmV4cG9ydCBjb25zdCBCYXNpYzogVG93ZXJDb25maWcgPSB7XG4gICAgJ25hbWUnOiBcIkJhc2ljXCIsXG4gICAgJ2RhbWFnZSc6IGxldmVsID0+IDE1ICsgMzAgKiAobGV2ZWwtMSksXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gMTAwMCxcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiAxMjUsXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNCxcbiAgICAncHJpY2UnOiA1LFxuICAgICdzcHJpdGVCYXNlJzogMCxcbiAgICAnc3ByaXRlTWlkJzogMCxcbiAgICAnc3ByaXRlVG9wJzogMCxcbiAgICAndGludEJhc2UnOiAweGZmZmZmZixcbiAgICAndGludE1pZCc6IDB4Njc1YTljLFxuICAgICd0aW50VG9wJzogMHhhYWFhZmYsXG4gICAgJ2Rlc2NyaXB0aW9uJzogXCJOb3RoaW5nIGZhbmN5LiBEYW1hZ2UgZ3Jvd3Mgd2l0aCBsZXZlbC5cIixcbn1cblxuXG5leHBvcnQgY29uc3QgU25pcGVyOiBUb3dlckNvbmZpZyA9IHtcbiAgICAnbmFtZSc6IFwiU25pcGVyXCIsXG4gICAgJ2RhbWFnZSc6IGxldmVsID0+IDUwICsgMTIwICogKGxldmVsLTEpLFxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDQwMDAsXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gMjAwICsgMzUgKiBsZXZlbCxcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA1LFxuICAgICdwcmljZSc6IDEwLFxuICAgICdzcHJpdGVCYXNlJzogMCxcbiAgICAnc3ByaXRlTWlkJzogMCxcbiAgICAnc3ByaXRlVG9wJzogMSxcbiAgICAndGludEJhc2UnOiAweGZmZmZmZixcbiAgICAndGludE1pZCc6IDB4M2E3MTVkLFxuICAgICd0aW50VG9wJzogMHg0OGFjODEsXG4gICAgJ2Rlc2NyaXB0aW9uJzogXCJMb25nIHJhbmdlLCBidXQgZmlyZXMgc2xvd2x5LiBEYW1hZ2UgYW5kIHJhbmdlIGdyb3cgd2l0aCBsZXZlbC5cIixcbn1cblxuXG5leHBvcnQgY29uc3QgTXVsdGlzaG90OiBUb3dlckNvbmZpZyA9IHtcbiAgICAnbmFtZSc6IFwiTXVsdGlzaG90XCIsXG4gICAgJ2RhbWFnZSc6IGxldmVsID0+IDE1ICsgMjAqKGxldmVsLTEpLFxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDEwMDAsXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gOTUgKyA1KihsZXZlbC0xKSxcbiAgICAnbnVtVGFyZ2V0cyc6IGxldmVsID0+IDMgKyBsZXZlbCxcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA0LFxuICAgICdwcmljZSc6IDcsXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxuICAgICdzcHJpdGVNaWQnOiAwLFxuICAgICdzcHJpdGVUb3AnOiAyLFxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxuICAgICd0aW50TWlkJzogMHg3ZjRkNjEsXG4gICAgJ3RpbnRUb3AnOiAweGFhNGU2MSxcbiAgICAnZGVzY3JpcHRpb24nOiBcIkNhbiBzaG9vdCBhdCBtdWx0aXBsZSBlbmVtaWVzIGF0IG9uY2UuIERhbWFnZSwgcmFuZ2UsIGFuZCBudW1iZXIgb2YgdGFyZ2V0cyBncm93IHdpdGggbGV2ZWwuXCIsXG59XG5cbmV4cG9ydCBjb25zdCBUT1dFUl9DT05GSUdTID0gW0Jhc2ljLCBNdWx0aXNob3QsIFNuaXBlcl0iLCIvLyBpbXBvcnQgeyBHcmlkUG9zaXRpb24sIFBvc2l0aW9uLCBUZXJyYWluIH0gZnJvbSBcIi4vdGVycmFpblwiO1xuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xuaW1wb3J0ICogYXMgY2ZnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9tZXRhU2NlbmVcIjtcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSB7XG4gICAgc3RhdHM6IGNmZy5FbmVteUNvbmZpZztcblxuICAgIGZvbGxvd2VyOiBhbnlcbiAgICBocDogaW50ZWdlclxuICAgIHlPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcbiAgICB4T2Zmc2V0OiBudW1iZXIgPSBQaGFzZXIuTWF0aC5STkQuaW50ZWdlckluUmFuZ2UoLTIwLCAyMCk7XG4gICAgc2NlbmU6IFREU2NlbmUgLy8gdHlwZSBhc3NlcnRpb25cbiAgICBzcGVlZDogbnVtYmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgc3RhdHMpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsIHN0YXRzLnNwcml0ZU5hbWUpO1xuXG4gICAgICAgIHRoaXMuc3RhdHMgPSBzdGF0cztcbiAgICAgICAgdGhpcy5mb2xsb3dlciA9IHsgdDogMCwgdmVjOiBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigpIH07XG5cbiAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lID09IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFjdGl2ZVNjZW5lKVxuICAgICAgICAgICAgICAgICh0aGlzLnNjZW5lLnNjZW5lLmdldCgnaHVkU2NlbmUnKSBhcyBIdWRTY2VuZSkuc2V0RGVzY3JpcHRpb25FbmVteSh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xuICAgICAgICAvLyBtb3ZlIHRoZSB0IHBvaW50IGFsb25nIHRoZSBwYXRoLCAwIGlzIHRoZSBzdGFydCBhbmQgMSBpcyB0aGUgZW5kXG4gICAgICAgIHRoaXMuZm9sbG93ZXIudCArPSB0aGlzLnNwZWVkICogZGVsdGE7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBuZXcgeCBhbmQgeSBjb29yZGluYXRlcyBpbiB2ZWNcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBhdGguZ2V0UG9pbnQodGhpcy5mb2xsb3dlci50LCB0aGlzLmZvbGxvd2VyLnZlYyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudmVjLnggPiB0aGlzLnggLSB0aGlzLnhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnZlYy54IDwgdGhpcy54IC0gdGhpcy54T2Zmc2V0KSB7XG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gdHJ1ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIGVuZW15IHggYW5kIHkgdG8gdGhlIG5ld2x5IG9idGFpbmVkIHggYW5kIHlcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmZvbGxvd2VyLnZlYy54ICsgdGhpcy54T2Zmc2V0LCB0aGlzLmZvbGxvd2VyLnZlYy55ICsgdGhpcy55T2Zmc2V0KTtcblxuICAgICAgICAvLyBpZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0aCwgcmVtb3ZlIHRoZSBlbmVteVxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci50ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMucmVhY2hFbmQoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbHBoYSA9IDFcbiAgICAgICAgdGhpcy5hbmdsZSA9IDBcbiAgICAgICAgdGhpcy5zY2FsZSA9IDFcbiAgICB9XG5cbiAgICByZWFjaEVuZCgpIHtcbiAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZW1haW5pbmdEYW5nZXIgKz0gdGhpcy5zdGF0cy5kYW5nZXI7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgaHVkU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcImh1ZFNjZW5lXCIpIGFzIEh1ZFNjZW5lXG5cbiAgICAgICAgICAgIFBsYXllckluZm8uaHAgLT0gdGhpcy5zdGF0cy5kYW1hZ2U7XG4gICAgICAgICAgICBodWRTY2VuZS5ocFJlZG5lc3MgPSAxXG5cbiAgICAgICAgICAgIGNvbnN0IG1ldGFTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwibWV0YVNjZW5lXCIpIGFzIE1ldGFTY2VuZVxuICAgICAgICAgICAgbWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKCkuY2FtZXJhcy5tYWluLnNoYWtlKDIwMCwgMC4wMDUpXG4gICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5kYW1hZ2VTb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIucmVzcGF3bih0aGlzLnN0YXRzLCB0aGlzLmhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLmVuZW15RW5kQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjayh0aGlzLnN0YXRzLmRhbWFnZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0T25QYXRoKHdhdmUsIHJlc3Bhd25IZWFsdGgsIHN0YXJ0X3QgPSAwKSB7XG4gICAgICAgIC8vIHNldCB0aGUgdCBwYXJhbWV0ZXIgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYXRoXG4gICAgICAgIHRoaXMuZm9sbG93ZXIudCA9IHN0YXJ0X3Q7XG5cbiAgICAgICAgaWYgKHJlc3Bhd25IZWFsdGggPiAwKVxuICAgICAgICAgICAgdGhpcy5ocCA9IHJlc3Bhd25IZWFsdGg7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRoaXMuaHAgPSB0aGlzLnN0YXRzLmhwKHdhdmUpO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnN0YXRzLnNwZWVkO1xuICAgICAgICB0aGlzLnRpbnQgPSB0aGlzLnN0YXRzLnRpbnQ7XG5cbiAgICAgICAgLy8gZ2V0IHggYW5kIHkgb2YgdGhlIGdpdmVuIHQgcG9pbnRcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBhdGguZ2V0UG9pbnQodGhpcy5mb2xsb3dlci50LCB0aGlzLmZvbGxvd2VyLnZlYyk7XG5cbiAgICAgICAgLy8gc2V0IHRoZSB4IGFuZCB5IG9mIG91ciBlbmVteSB0byB0aGUgcmVjZWl2ZWQgZnJvbSB0aGUgcHJldmlvdXMgc3RlcFxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZm9sbG93ZXIudmVjLngsIHRoaXMuZm9sbG93ZXIudmVjLnkpO1xuXG4gICAgICAgIGxldCBmcmFtZVJhdGUgPSBNYXRoLm1pbig2MCwgdGhpcy5zdGF0cy5zcGVlZCAqIDQwMDAwICogMTUpXG4gICAgICAgIGlmICh0aGlzLnN0YXRzLnNwcml0ZU5hbWUgPT09IFwiZmF0RW5lbXlcIiB8fCB0aGlzLnN0YXRzLnNwcml0ZU5hbWUgPT09IFwic3BsaXR0ZXJGYXRFbmVteVwiKSB7IC8vIGhhY2tcbiAgICAgICAgICAgIGZyYW1lUmF0ZSAqPSAwLjVcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYW5pbXMucGxheSh7XG4gICAgICAgICAgICBrZXk6IGAke3RoaXMuc3RhdHMuc3ByaXRlTmFtZX1fd2Fsa2AsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IGZyYW1lUmF0ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWNlaXZlRGFtYWdlKGRhbWFnZTogaW50ZWdlcikge1xuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZSAtIHRoaXMuc3RhdHMuYXJtb3VyKHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmUpO1xuXG4gICAgICAgIC8vIGlmIGhwIGRyb3BzIGJlbG93IDAgd2UgZGVhY3RpdmF0ZSB0aGlzIGVuZW15XG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLm9uRGVhdGgoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWF0aCgpIHtcbiAgICAgICAgdGhpcy5vbkRlYXRoQWJpbGl0eSgpO1xuICAgICAgICBpZiAodGhpcy5zdGF0cy5zcGxpdClcbiAgICAgICAgICAgIHRoaXMub25EZWF0aFNwbGl0KClcblxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7ICAvLyBBZGQgZ29sZCBpbiBiYXNlIGxheWVyIG9ubHlcbiAgICAgICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuZGVhZERhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlclxuICAgICAgICAgICAgUGxheWVySW5mby5tb25leSArPSB0aGlzLnN0YXRzLm1vbmV5O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgICAgICBhbHBoYTogMCxcbiAgICAgICAgICAgIGFuZ2xlOiBQbGF5ZXJJbmZvLlJORy5zaWduKCkgKiAxODAsXG4gICAgICAgICAgICBzY2FsZTogMC41LFxuICAgICAgICAgICAgZHVyYXRpb246IFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDYwMCwgODAwKSxcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5lbmVtaWVzU2xhaW4rKztcbiAgICB9XG5cbiAgICBvbkRlYXRoU3BsaXQoKSB7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRzLnNwbGl0LmFtb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbmV3RW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5zdGF0cy5zcGxpdC5jZmcubmFtZV0uZ2V0KClcbiAgICAgICAgICAgIG5ld0VuZW15LnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICBuZXdFbmVteS5zZXRBY3RpdmUodHJ1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuZGVhZERhbmdlciAtPSB0aGlzLnN0YXRzLnNwbGl0LmNmZy5kYW5nZXI7XG4gICAgICAgICAgICBuZXdFbmVteS5zdGFydE9uUGF0aCh0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlLCAwLCB0aGlzLmZvbGxvd2VyLnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZWF0aEFiaWxpdHkoKSB7ICAvLyBvdmVycmlkZSB0aGlzIGZvciBzcGVjaWFsIG9uLWRlYXRoIGFiaWxpdGllc1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdlYWtFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5XZWFrKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkZhdClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBcm1vdXJlZEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkFybW91cmVkKVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZhc3RFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5GYXN0KVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNwbGl0dGVyQmlnRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJCaWcpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJTbWFsbEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyU21hbGwpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJGYXRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlckZhdClcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxuaW1wb3J0IHsgVElMRV9TSVpFIH0gZnJvbSBcIi4vdGVycmFpblwiXG5cbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgSEVBTFRIX0NPTE9SID0gMHhmOGZmMzYgLy8weGZmNDQ0NFxuICAgIHN0YXRpYyBIRUFMVEhfTE9TU19DT0xPUiA9IDB4N2Q3ZDdkIC8vIDB4NDRmZjQ0XG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXIgPSAxICAvLyAwIHRvIDFcbiAgICBzbG93SGVhbHRoOiBudW1iZXJcblxuICAgIGJnQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgaGVhbHRoQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG4gICAgc2xvd0hlYWx0aEJhcjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxuXG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgd2lkdGg6IG51bWJlclxuICAgIG1heEhlYWx0aDogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMClcbiAgICB9XG5cbiAgICBtYWtlKHgsIHksIHdpZHRoLCBoZWFsdGg9MCkge1xuICAgICAgICB0aGlzLnggPSB4XG4gICAgICAgIHRoaXMueSA9IHlcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXG5cbiAgICAgICAgLy8gaGVhbHRoIGJhciBiYXNlL2JhY2tncm91bmRcbiAgICAgICAgdGhpcy5iZ0JhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCB3aWR0aCArIDQsIDYsIDB4MDAwMDAwKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJnQmFyKVxuXG4gICAgICAgIC8vIHZpc3VhbGl6YXRpb24gb2YgaGVhbHRoIGxvc3Nlc1xuICAgICAgICB0aGlzLnNsb3dIZWFsdGhCYXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoXG4gICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgd2lkdGgsIDQsXG4gICAgICAgICAgICBIZWFsdGhCYXIuSEVBTFRIX0xPU1NfQ09MT1IsXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5zbG93SGVhbHRoQmFyKVxuICAgICAgICBcbiAgICAgICAgLy8gaGVhbHRoIGJhciBpdHNlbGZcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoXG4gICAgICAgICAgICAwLCAwLFxuICAgICAgICAgICAgd2lkdGgsIDQsXG4gICAgICAgICAgICBIZWFsdGhCYXIuSEVBTFRIX0NPTE9SLFxuICAgICAgICApXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoQmFyKVxuXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IGhlYWx0aFxuICAgIH1cblxuICAgIHNldCBoZWFsdGgoaCkge1xuICAgICAgICB0aGlzLl9oZWFsdGggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBoKSlcbiAgICB9XG5cbiAgICBnZXQgaGVhbHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoXG4gICAgfVxuXG4gICAgcHVibGljIGxldmVsVXAoKSB7XG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMDtcbiAgICB9XG5cbiAgICB1cGRhdGUoZGVsdGEpIHtcbiAgICAgICAgY29uc3QgY29lZiA9IE1hdGgucG93KDAuOTksIGRlbHRhLzEwMDAgKiA2MClcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gY29lZiAqIHRoaXMuc2xvd0hlYWx0aCArICgxIC0gY29lZikgKiB0aGlzLmhlYWx0aFxuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuaGVhbHRoXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNsb3dIZWFsdGhcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcbmltcG9ydCB7IEh1ZFNjZW5lLCBIVURfV0lEVEggfSBmcm9tICcuL3NjZW5lcy9odWRTY2VuZSc7XG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tICcuL3NjZW5lcy9tZXRhU2NlbmUnO1xuaW1wb3J0IHsgVERTY2VuZSwgVERfU0NFTkVfSEVJR0hULCBURF9TQ0VORV9XSURUSCB9IGZyb20gJy4vc2NlbmVzL3RkU2NlbmUnXG5pbXBvcnQgeyBURFNjZW5lQ29uZmlnIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZUNvbmZpZyc7XG5pbXBvcnQgeyBUZXJyYWluIH0gZnJvbSAnLi90ZXJyYWluJztcblxubGV0IG1ldGFTY2VuZSA9IG5ldyBNZXRhU2NlbmUoKVxubGV0IGh1ZFNjZW5lID0gbmV3IEh1ZFNjZW5lKG1ldGFTY2VuZSk7XG5cbmxldCBsZXZlbHMgPSBbXG4gIG1ldGFTY2VuZSxcbiAgaHVkU2NlbmUsXG5dXG5cbmNvbnN0IGdhbWVDb25maWcgPSB7XG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICBwYXJlbnQ6ICdjb250ZW50JyxcbiAgd2lkdGg6IFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMixcbiAgaGVpZ2h0OiBURF9TQ0VORV9IRUlHSFQsXG4gIHBoeXNpY3M6IHtcbiAgICBkZWZhdWx0OiAnYXJjYWRlJ1xuICB9LFxuICBzY2VuZTogbGV2ZWxzLFxuICBzZWVkOiBbXCI0MlwiXVxufTtcblxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7IiwiaW1wb3J0IHsgUExBWUVSX0hFQUxUSF9SRUdFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVySW5mbyB7XG4gICAgc3RhdGljIG1vbmV5OiBudW1iZXIgPSA1O1xuICAgIHN0YXRpYyBocDogbnVtYmVyID0gMTA7XG4gICAgc3RhdGljIHRpbWVTY2FsZTogbnVtYmVyID0gMTtcbiAgICAvLyBzdGF0aWMgUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoW1wiNDJcIl0pO1xuICAgIHN0YXRpYyBSTkcgPSBuZXcgUGhhc2VyLk1hdGguUmFuZG9tRGF0YUdlbmVyYXRvcigpO1xuXG4gICAgc3RhdGljIHJlZ2VuUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIHdhdmVIZWFsdGhSZWdlbigpIHtcbiAgICAgICAgUGxheWVySW5mby5yZWdlblByb2dyZXNzICs9IFBMQVlFUl9IRUFMVEhfUkVHRU47XG4gICAgICAgIGxldCByZXN0b3JlZCA9IE1hdGguZmxvb3IoUGxheWVySW5mby5yZWdlblByb2dyZXNzKTtcbiAgICAgICAgUGxheWVySW5mby5ocCArPSByZXN0b3JlZDtcbiAgICAgICAgUGxheWVySW5mby5yZWdlblByb2dyZXNzIC09IHJlc3RvcmVkO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZVxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBrZXk6IFwiZ2FtZU92ZXJTY2VuZVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoNTEyLCAyNTYsIDEwMjQsIDUxMiwgMHhhYTQ0NDQsIDAuNSk7XG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSg1MTIsIDI1Ni00MCwgNTEyLTEyOCwgMjU2LTY0LCAweDQ0NDQ0NCk7XG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAxNjAsIFwiWU9VIERJRURcIiwge2ZvbnRTaXplOiAnMzBweCBib2xkJywgY29sb3I6IFwicmVkXCJ9KS5zZXRPcmlnaW4oMC41KTtcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDE5MCwgYExhc3Qgd2F2ZSB3aXRuZXNzZWQ6ICR7dGhpcy5tZXRhU2NlbmUuZ2V0Um9vdFREU2NlbmUoKS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZX1gKS5zZXRPcmlnaW4oMC41KTtcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIxMCwgYFdlYWx0aCB0YWtlbiB0byB0aGUgZ3JhdmU6ICR7UGxheWVySW5mby5tb25leX1gKS5zZXRPcmlnaW4oMC41KTtcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIzMCwgYEludmFkZXJzIHZhbnF1aXNoZWQ6ICR7dGhpcy5tZXRhU2NlbmUuZW5lbWllc1NsYWlufWApLnNldE9yaWdpbigwLjUpO1xuXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAyODAsIGBDTElDSyBUTyBEQVJFIEFHQUlOYCkuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH1cblxuICAgIGN1cnJlbnRUaW1lID0gMDtcbiAgICByZWxvYWRlZCA9IGZhbHNlO1xuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhXG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IFRvd2VyQ29uZmlnLCBUT1dFUl9DT05GSUdTLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLCBFbmVteUNvbmZpZywgV2F2ZUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuLi9lbmVteVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBNQVhfSEVJR0hULCBNQVhfV0lEVEgsIFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuLi90b3dlcnNcIjtcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xuaW1wb3J0IHsgVERTY2VuZSwgVERfU0NFTkVfSEVJR0hULCBURF9TQ0VORV9XSURUSCB9IGZyb20gXCIuL3RkU2NlbmVcIjtcblxuY29uc3QgSFVEX0JHX0NPTE9SID0gMHhmZjhhNmQgIC8vMHhmZmFhN2RcbmV4cG9ydCBjb25zdCBIVURfV0lEVEggPSBUSUxFX1NJWkUgKiAzXG5cbmV4cG9ydCBjbGFzcyBIdWRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cbiAgICBtb25leVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgd2F2ZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgaHBUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGhwUmVkbmVzczogbnVtYmVyIC8vIDAgdG8gMVxuICAgIGRlcHRoVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBnb1VwVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBkZXNjcmlwdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZTtcbiAgICBiYWNrVG9Sb290U2NlbmVCdXR0b246IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICAgIGJ1eVRvd2VySWNvbnM6IEJ1eVRvd2VySWNvbltdXG5cbiAgICBsYXN0QWN0aXZlU2NlbmU6IFREU2NlbmVcbiAgICBwYXJlbnRTY2VuZXNJbWFnZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVtdXG4gICAgc2xvd1NwZWVkVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgZmFzdFNwZWVkVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGtleTogXCJodWRTY2VuZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICBsZXQgdyA9IEhVRF9XSURUSFxuICAgICAgICBsZXQgaCA9IFRJTEVfU0laRSAqIE1BWF9IRUlHSFRcbiAgICAgICAgY29uc3QgeExlZnQgPSB3IC8gMlxuICAgICAgICBjb25zdCB4UmlnaHQgPSB3ICsgVERfU0NFTkVfV0lEVEggKyB3IC8gMlxuXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSh3IC8gMiwgaCAvIDIsIHcsIGgsIEhVRF9CR19DT0xPUilcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgICAgICAgeFJpZ2h0LCBoIC8gMixcbiAgICAgICAgICAgIHcsIGgsXG4gICAgICAgICAgICBIVURfQkdfQ09MT1IsXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLm1vbmV5VGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDIwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMubW9uZXlUZXh0LnNldE9yaWdpbigwLjUpXG4gICAgICAgIHRoaXMuaHBUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNDAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5ocFJlZG5lc3MgPSAwXG5cbiAgICAgICAgdGhpcy53YXZlVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDYwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMud2F2ZVRleHQuc2V0T3JpZ2luKDAuNSlcblxuICAgICAgICB0aGlzLmRlcHRoVGV4dCA9IHRoaXMuYWRkLnRleHQoeFJpZ2h0LCAyMCwgXCJEZXB0aDogXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0T3JpZ2luKDAuNSlcblxuICAgICAgICB0aGlzLmdvVXBUZXh0ID0gdGhpcy5hZGQudGV4dCh4UmlnaHQsIDUwLCBcIkdvIHVwIHRvOlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0ID0gdGhpcy5hZGQudGV4dCg1LCAzMDAsIFwiXCIsIHsgZm9udFNpemU6ICcxMHB0JyB9KTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0V29yZFdyYXBXaWR0aChIVURfV0lEVEggLSAxMCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucyA9IFtdO1xuICAgICAgICBsZXQgdG93ZXJUeXBlSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0b3dlckNvbmZpZyBvZiBUT1dFUl9DT05GSUdTKSB7XG4gICAgICAgICAgICB0aGlzLmJ1eVRvd2VySWNvbnMucHVzaChuZXcgQnV5VG93ZXJJY29uKHRoaXMsIHcgLyAyLCAxMTAgKyA3MCAqIHRvd2VyVHlwZUluZGV4LCB0b3dlckNvbmZpZykpXG4gICAgICAgICAgICB0b3dlclR5cGVJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFkID0gM1xuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NTAsIFwiPlNsb3c8XCIsIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NzUsIFwiRmFzdFwiLCB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gMSwgbnVsbFxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCI+U2xvdzxcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiRmFzdFwiKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgUGxheWVySW5mby50aW1lU2NhbGUgPSA0LCBudWxsXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIlNsb3dcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiPkZhc3Q8XCIpXG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG4gICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzID0gW11cbiAgICB9XG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgaWYgKHRoaXMubWV0YVNjZW5lLmlzR2FtZU92ZXIpe1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpXG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YTtcblxuICAgICAgICB0aGlzLm1vbmV5VGV4dC5zZXRUZXh0KCdNb25leTogJyArIFBsYXllckluZm8ubW9uZXkpXG5cbiAgICAgICAgY29uc3QgY3VycmVudFdhdmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRSb290VERTY2VuZSgpLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlXG4gICAgICAgIHRoaXMud2F2ZVRleHQuc2V0VGV4dChgV2F2ZTogJHtjdXJyZW50V2F2ZX1gKVxuXG4gICAgICAgIHRoaXMuaHBUZXh0LnNldFRleHQoJ0hQOiAnICsgUGxheWVySW5mby5ocClcblxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRDb2xvcihQaGFzZXIuRGlzcGxheS5Db2xvci5SR0JUb1N0cmluZyhcbiAgICAgICAgICAgIDI1NSwgMjU1ICogKDEgLSB0aGlzLmhwUmVkbmVzcyksIDI1NSAqICgxIC0gdGhpcy5ocFJlZG5lc3MpXG4gICAgICAgICkpXG4gICAgICAgIGNvbnN0IHNlY3NUb1doaXRlID0gMC41XG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5ocFJlZG5lc3MgLSBkZWx0YSAvIDEwMDAgLyBzZWNzVG9XaGl0ZSlcblxuICAgICAgICB0aGlzLnVwZGF0ZUluZm9CYXNlZE9uQWN0aXZlU2NlbmUoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGljb24gb2YgdGhpcy5idXlUb3dlckljb25zKSB7XG4gICAgICAgICAgICBpY29uLnVwZGF0ZSh0aGlzLmxhc3RUaW1lLCBkZWx0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmhwIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLmdhbWVPdmVyKClcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICB1cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCkge1xuICAgICAgICBsZXQgYWN0aXZlU2NlbmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpO1xuICAgICAgICBpZiAoIWFjdGl2ZVNjZW5lKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoYWN0aXZlU2NlbmUgPT0gdGhpcy5sYXN0QWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5sYXN0QWN0aXZlU2NlbmUgPSBhY3RpdmVTY2VuZTtcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0VGV4dChgRGVwdGg6ICR7YWN0aXZlU2NlbmUuc2NlbmVMZXZlbH1gKVxuXG4gICAgICAgIGNvbnN0IHBhcmVudFNjZW5lcyA9IHRoaXMubWV0YVNjZW5lLmdldFBhcmVudFNjZW5lc1RvUm9vdCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUocGFyZW50U2NlbmVzLmxlbmd0aCA+IDApXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudFNjZW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHNjZW5lSW5kZXggPSAocGFyZW50U2NlbmVzLmxlbmd0aCAtIDEpIC0gaTtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDAuMVxuICAgICAgICAgICAgY29uc3QgbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQgPSA3O1xuICAgICAgICAgICAgaWYgKHBhcmVudFNjZW5lcy5sZW5ndGggPiBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkge1xuICAgICAgICAgICAgICAgIHNjYWxlIC89ICgocGFyZW50U2NlbmVzLmxlbmd0aCAvIG1heEltYWdlc05vcm1hbFNjYWxlRml0KSAqIDEuMDIyKSAvLyBOT1RFOiBEcmlmdHMsIGhlbmNlIHJlLXNjYWxlIGJ5IHRoaXMgbWFnaWMgbnVtYmVyLCBpZGsgd2h5OyBubyB0aW1lIHRvIGZpZ3VyZSBvdXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5ld0J1dHRvbiA9IHRoaXMuYWRkLmltYWdlKFxuICAgICAgICAgICAgICAgIFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMS41LFxuICAgICAgICAgICAgICAgIDEwMCArIHNjZW5lSW5kZXggKiBzY2FsZSAqIFREX1NDRU5FX0hFSUdIVCAqIDEuMixcbiAgICAgICAgICAgICAgICBgc25hcC0ke3BhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVggPSBzY2FsZVxuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWSA9IHNjYWxlXG4gICAgICAgICAgICBuZXdCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXksIGZhbHNlKSwgdGhpcy5tZXRhU2NlbmUpXG4gICAgICAgICAgICB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ld0J1dHRvblxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvblRvd2VyKGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyOiBUb3dlciA9IG51bGwpIHtcbiAgICAgICAgbGV0IGxldmVsID0gMVxuICAgICAgICBsZXQgdGV4dCA9IFwiXCJcblxuICAgICAgICBpZiAodG93ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRleHQgPSBgJHtjb25maWcubmFtZX06ICR7Y29uZmlnLmRlc2NyaXB0aW9ufVxcbmBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBgTGV2ZWwgJHt0b3dlci5sZXZlbH0gJHtjb25maWcubmFtZX0gdG93ZXIuXFxuYFxuICAgICAgICAgICAgbGV2ZWwgPSB0b3dlci5sZXZlbFxuICAgICAgICB9XG5cbiAgICAgICAgdGV4dCArPSBgRGFtYWdlOiAke2NvbmZpZy5kYW1hZ2UobGV2ZWwpfS5cXG5gXG4gICAgICAgIHRleHQgKz0gYEZpcmUgcmF0ZTogJHtjb25maWcuZmlyZXJhdGUobGV2ZWwpLzEwMDB9cy5cXG5gXG4gICAgICAgIHRleHQgKz0gYFJhbmdlOiAke2NvbmZpZy5yYW5nZShsZXZlbCl9LlxcbmBcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRUZXh0KHRleHQpXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb25FbmVteShlbmVteTogRW5lbXlCYXNlKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIlxuICAgICAgICBpZiAoZW5lbXkpIHtcbiAgICAgICAgICAgIGxldCB3YXZlOiBpbnRlZ2VyO1xuICAgICAgICAgICAgaWYodGhpcy5tZXRhU2NlbmUuYWN0aXZlU2NlbmUuc2NlbmVMZXZlbCA9PT0gMClcbiAgICAgICAgICAgICAgICB3YXZlID0gZW5lbXkuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgd2F2ZSA9IFdhdmVDb25maWcubGV2ZWxUb1dhdmUodGhpcy5tZXRhU2NlbmUuYWN0aXZlU2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbCk7XG5cbiAgICAgICAgICAgIHRleHQgKz0gYCR7ZW5lbXkuc3RhdHMuZGlzcGxheU5hbWV9XFxuYDtcbiAgICAgICAgICAgIHRleHQgKz0gYEhlYWx0aDogJHtlbmVteS5ocH0vJHtlbmVteS5zdGF0cy5ocCh3YXZlKX1cXG5gO1xuICAgICAgICAgICAgdGV4dCArPSBgQXJtb3VyOiAke2VuZW15LnN0YXRzLmFybW91cih3YXZlKX1cXG5gO1xuICAgICAgICAgICAgdGV4dCArPSBgU3BlZWQ6ICR7ZW5lbXkuc3BlZWQgKiA2MDAwMH1cXG5gO1xuICAgICAgICAgICAgdGV4dCArPSBgTG9vdDogJHtlbmVteS5zdGF0cy5tb25leX1cXG5gO1xuICAgICAgICAgICAgaWYoZW5lbXkuc3RhdHMuYmx1cmIpXG4gICAgICAgICAgICAgICAgdGV4dCArPSBgXFxuJHtlbmVteS5zdGF0cy5ibHVyYn1cXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFRleHQodGV4dClcbiAgICB9XG59XG5cbmNsYXNzIEJ1eVRvd2VySWNvbiB7XG4gICAgdG93ZXJOYW1lOiBzdHJpbmdcbiAgICB0b3dlckNvbmZpZzogVG93ZXJDb25maWdcblxuICAgIHNwcml0ZUNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHByaWNlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBodWRTY2VuZTogSHVkU2NlbmVcblxuICAgIG9yaWdYOiBudW1iZXJcbiAgICBvcmlnWTogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcihodWRTY2VuZTogSHVkU2NlbmUsIHgsIHksIGNvbmZpZykge1xuICAgICAgICB0aGlzLmh1ZFNjZW5lID0gaHVkU2NlbmVcbiAgICAgICAgdGhpcy5vcmlnWCA9IHhcbiAgICAgICAgdGhpcy5vcmlnWSA9IHlcbiAgICAgICAgdGhpcy50b3dlck5hbWUgPSBjb25maWcubmFtZVxuICAgICAgICB0aGlzLnRvd2VyQ29uZmlnID0gY29uZmlnXG5cbiAgICAgICAgbGV0IHRvd2VyQmFzZSA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VyYmFzZXMnLCBjb25maWcuc3ByaXRlQmFzZSk7XG4gICAgICAgIHRvd2VyQmFzZS5zZXRUaW50KGNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgIGxldCB0b3dlck1pZCA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VybWlkcycsIGNvbmZpZy5zcHJpdGVNaWQpO1xuICAgICAgICB0b3dlck1pZC5zZXRUaW50KGNvbmZpZy50aW50TWlkKTtcbiAgICAgICAgbGV0IHRvd2VyVG9wID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJ0b3BzJywgY29uZmlnLnNwcml0ZVRvcCk7XG4gICAgICAgIHRvd2VyVG9wLnNldFRpbnQoY29uZmlnLnRpbnRUb3ApO1xuXG4gICAgICAgIGxldCB0b3dlclJhbmdlID0gaHVkU2NlbmUuYWRkLmNpcmNsZShcbiAgICAgICAgICAgIDAsIDAsIGNvbmZpZy5yYW5nZSgxKSxcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuY29sb3VyLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5hbHBoYVxuICAgICAgICApO1xuICAgICAgICB0b3dlclJhbmdlLnNldFN0cm9rZVN0eWxlKFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VDb2xvdXJcbiAgICAgICAgKTtcbiAgICAgICAgdG93ZXJSYW5nZS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB2YXIgc3ByaXRlcyA9IFtcbiAgICAgICAgICAgIHRvd2VyQmFzZSxcbiAgICAgICAgICAgIHRvd2VyTWlkLFxuICAgICAgICAgICAgdG93ZXJUb3AsXG4gICAgICAgICAgICB0b3dlclJhbmdlLFxuICAgICAgICBdXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyID0gaHVkU2NlbmUuYWRkLmNvbnRhaW5lcih4LCB5LCBzcHJpdGVzKVxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5nZXRBbGwoKVxuXG4gICAgICAgIGNvbnN0IHBhZCA9IDNcbiAgICAgICAgdGhpcy5wcmljZVRleHQgPSBodWRTY2VuZS5hZGQudGV4dChcbiAgICAgICAgICAgIHggKyAxNSwgeSwgXCJcIiArIHRoaXMudG93ZXJDb25maWcucHJpY2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRTaXplKFRJTEVfU0laRSwgVElMRV9TSVpFKTtcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgICAvLyB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IGNvbnNvbGUubG9nKFwiZm9vYmFyXCIpLCB0aGlzKTtcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyKVxuXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUuc2V0RGVzY3JpcHRpb25Ub3dlcihjb25maWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgcmFuZ2UgaW5kaWNhdG9yIHZpc2libGVcbiAgICAgICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzNdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSkuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdC5saXN0LmZvckVhY2goKHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkgPT4ge1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZycsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpIHtcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xuXG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUubWV0YVNjZW5lLmJ1aWxkU291bmQucGxheSgpO1xuXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGh1ZFNjZW5lLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpXG4gICAgICAgICAgICBzY2VuZS50b3dlck1hbmFnZXIucGxhY2VUb3dlcihwb2ludGVyLCB0aGlzLnRvd2VyTmFtZSk7XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IHRoaXMub3JpZ1hcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IHRoaXMub3JpZ1lcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRUaW50KCkge1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzJdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50VG9wKTtcbiAgICB9XG5cbiAgICBzZXRTaG9wSWNvblRpbnQodGludDogbnVtYmVyKSB7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzBdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRNaWQpO1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsyXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRUb3ApO1xuICAgIH1cblxuICAgIHVwZGF0ZVNob3AoKSB7XG4gICAgICAgIC8vIFVuY29tbWVudCB0byBwcmV2ZW50IG5lZ2F0aXZlIG1vbmV5OlxuICAgICAgICB0aGlzLmh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lciwgUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKVxuXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHgwMGZmMDApO1xuICAgICAgICAgICAgdGhpcy5yZXNldFRpbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHhmZjAwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG9wSWNvblRpbnQoMHg5OTU1NTUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb2xkTW9uZXk6IGludGVnZXIgPSAwXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLm1vbmV5ICE9IHRoaXMub2xkTW9uZXkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xuICAgICAgICAgICAgdGhpcy5vbGRNb25leSA9IFBsYXllckluZm8ubW9uZXk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQge1RlcnJhaW59IGZyb20gXCIuLi90ZXJyYWluXCJcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tIFwiLi9nYW1lT3ZlclNjZW5lXCI7XG5pbXBvcnQge1NDRU5FX1RSQU5TSVRJT05fTVMsIFREU2NlbmV9IGZyb20gXCIuL3RkU2NlbmVcIjtcbmltcG9ydCB7VERTY2VuZUNvbmZpZ30gZnJvbSBcIi4vdGRTY2VuZUNvbmZpZ1wiXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGtleTogJ21ldGFTY2VuZScsXG59O1xuXG5leHBvcnQgY2xhc3MgTWV0YVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIHB1YmxpYyBzY2VuZXM6IFREU2NlbmVbXVxuICAgIHB1YmxpYyBhY3RpdmVTY2VuZTogVERTY2VuZVxuICAgIG1haW5Tb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcblxuICAgIC8vIFdoeSBhcmUgdGhlc2Ugc291bmRzIGhlcmU/IEJlY2F1c2Ugd2UncmUgb3V0IG9mIHRpbWVcbiAgICBidWlsZFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuICAgIGRhbWFnZVNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuICAgIHNob290U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG4gICAgbXVsdGlzaG90U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cbiAgICBlbmVtaWVzU2xhaW46IGludGVnZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKVxuXG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSB0aGlzLmFkZFNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmVzWzBdLnNjZW5lLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJodWRTY2VuZVwiKTtcblxuICAgICAgICB0aGlzLm1haW5Tb3VuZCA9IHRoaXMuc291bmQuYWRkKFwibWFpbl9tdXNpY1wiLCB7XCJsb29wXCI6IHRydWUsIFwidm9sdW1lXCI6IDAuMDd9KTtcbiAgICAgICAgdGhpcy5tYWluU291bmQucGxheSgpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdidWlsZF9zb3VuZCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDF9KTtcbiAgICAgICAgdGhpcy5kYW1hZ2VTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdkYW1hZ2Vfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjE1fSk7XG4gICAgICAgIHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdzaG9vdF9zb3VuZCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDAuMDN9KTtcbiAgICAgICAgdGhpcy5tdWx0aXNob3RTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdtdWx0aXNob3Rfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjAzfSk7XG4gICAgfVxuXG4gIC8vIENyZWF0ZXMgbmV3IFNjZW5lLCBlbmFibGVzIGl0LCBhbmQgc2V0cyBpdCBpbnZpc2libGVcbiAgICBwdWJsaWMgYWRkU2NlbmUocGFyZW50U2NlbmVLZXk/OiBzdHJpbmcpOiBURFNjZW5lIHtcbiAgICAgICAgbGV0IHBhcmVudFNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHBhcmVudFNjZW5lS2V5KVxuICAgICAgICBsZXQgc2NlbmVMZXZlbCA9IChwYXJlbnRTY2VuZT8uc2NlbmVMZXZlbCA/PyAtMSkgKyAxO1xuXG4gICAgICAgIGxldCBzY2VuZUluZGV4ID0gdGhpcy5zY2VuZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY2VuZUtleSA9IGB0ZFNjZW5lJHtzY2VuZUluZGV4fWBcblxuICAgICAgICBsZXQgbmV3U2NlbmUgPSBuZXcgVERTY2VuZShcbiAgICAgICAgICAgIG5ldyBURFNjZW5lQ29uZmlnKG5ldyBUZXJyYWluKDEwLCA4KSwgc2NlbmVMZXZlbCwgcGFyZW50U2NlbmVLZXksIHNjZW5lS2V5KSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoXG4gICAgICAgICAgICBzY2VuZUtleSxcbiAgICAgICAgICAgIG5ld1NjZW5lLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKG5ld1NjZW5lKVxuICAgICAgICBuZXdTY2VuZS5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2NlbmUpIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCh0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcblxuICAgICAgICByZXR1cm4gbmV3U2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNjZW5lQnlLZXkoa2V5Pzogc3RyaW5nKTogVERTY2VuZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmdldChrZXkpIGFzIFREU2NlbmVcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gbWFrZXMgY3VycmVudCBzY2VuZSBpbnZpc2libGUsIG1ha2VzIG5ldyBzY2VuZSB2aXNpYmxlOyBkb2Vzbid0IGNoYW5nZSBhY3Rpdm5lc3NcbiAgICBwdWJsaWMgc3dpdGNoVG9TY2VuZShuZXdTY2VuZUtleTogc3RyaW5nLCBnb2luZ0luc2lkZTogYm9vbGVhbiwgaSA9IDAsIGogPSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNldElzRm9yZWdyb3VuZChmYWxzZSwgZ29pbmdJbnNpZGUsIGksIGopO1xuICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkobmV3U2NlbmVLZXkpXG5cbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgU3dpdGNoaW5nIGZyb20gJHt0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleX0gKHBhcmVudCAke3RoaXMuYWN0aXZlU2NlbmUuc2NlbmVQYXJlbnRLZXl9KSB0b2BcbiAgICAgICAgICAgICsgYCAke25ld1NjZW5lLnNjZW5lLmtleX0gKHBhcmVudCAke25ld1NjZW5lLnNjZW5lUGFyZW50S2V5fSlgXG4gICAgICAgIClcblxuICAgICAgICBuZXdTY2VuZS50aW1lLmFkZEV2ZW50KHtcbiAgICAgICAgICAgIGRlbGF5OiBTQ0VORV9UUkFOU0lUSU9OX01TLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNjZW5lLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSBuZXdTY2VuZVxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldElzRm9yZWdyb3VuZCh0cnVlLCBnb2luZ0luc2lkZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKG5ld1NjZW5lS2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMS4wNTk0NjMwOTQzNiB+IDJeKDEvMTIpLCBpLmUuIG9uZSBzZW1pdG9uZVxuICAgICAgICB0aGlzLnNvdW5kLnNldFJhdGUoMSAvIChNYXRoLnBvdygxLjA1OTQ2MzA5NDM2LCBuZXdTY2VuZS5zY2VuZUxldmVsKSkpXG4gICAgfVxuXG4gICAgcHVibGljIGlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICBwdWJsaWMgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKXtcbiAgICAgICAgICAgIHRoaXMuc291bmQuc2V0UmF0ZSgxIC8gKE1hdGgucG93KDEuMDU5NDYzMDk0MzYsIDE1KSkpXG5cbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICBsZXQgZ2FtZU92ZXJTY2VuZSA9IHRoaXMuc2NlbmUuYWRkKFwiZ2FtZU92ZXJTY2VuZVwiLCBuZXcgR2FtZU92ZXJTY2VuZSh0aGlzKSlcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoZ2FtZU92ZXJTY2VuZSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLnBhdXNlKClcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIC8vIGxvYWQgdGhlIGdhbWUgYXNzZXRzXG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdhc3NldHMvJylcblxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3dlYWtFbmVteScsICdlbmVteS5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Zhc3RFbmVteScsICdlbmVteV9mYXN0LnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYXJtb3VyZWRFbmVteScsICdlbmVteV9hcm1vcmVkLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJCaWdFbmVteScsICdlbmVteV9zcGxpdF9iaWcucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcGxpdHRlclNtYWxsRW5lbXknLCAnZW5lbXlfc3BsaXRfc21hbGwucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmYXRFbmVteScsICdlbmVteV9jaG9uay5wbmcnLCB7ZnJhbWVXaWR0aDogNTYsIGZyYW1lSGVpZ2h0OiA1Nn0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyRmF0RW5lbXknLCAnZW5lbXlfc3BsaXRfY2hvbmsucG5nJywge2ZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogNTZ9KTtcblxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdidWxsZXQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndGlsZXNldCcsXG4gICAgICAgICAgICAndGlsZXNldC5wbmcnLFxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJ0b3BzJyxcbiAgICAgICAgICAgICd0b3dlcnRvcC5wbmcnLFxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcm1pZHMnLFxuICAgICAgICAgICAgJ3Rvd2VybWlkLnBuZycsXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VyYmFzZXMnLFxuICAgICAgICAgICAgJ3Rvd2VyYmFzZS5wbmcnLFxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwYXJ0aWNsZV9yZWQnLCAncGFydGljbGVfcmVkLnBuZycpO1xuXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9ydGFsRnJvbScsICdwb3J0YWxfZnJvbS5wbmcnLCB7ZnJhbWVXaWR0aDogNDAsIGZyYW1lSGVpZ2h0OiA0MH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BvcnRhbFRvJywgJ3BvcnRhbF90by5wbmcnLCB7ZnJhbWVXaWR0aDogNDAsIGZyYW1lSGVpZ2h0OiA0MH0pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbyhcIm1haW5fbXVzaWNcIiwgXCJnYW1lamFtX0xENDgub2dnXCIpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2J1aWxkX3NvdW5kJywgJ2J1aWxkLndhdicpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2RhbWFnZV9zb3VuZCcsICdkYW1hZ2Uud2F2Jyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnc2hvb3Rfc291bmQnLCAndHVycmV0c2hvdC53YXYnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtdWx0aXNob3Rfc291bmQnLCAnbXVsdGlzaG90LndhdicpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFuaW1hdGlvbnMoKSB7IC8vIFRPRE86IE1ha2UgdGhpcyBub3QgZHVtYiBhbmQgdWdseVxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICd3ZWFrRW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3dlYWtFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnZmFzdEVuZW15X3dhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdmYXN0RW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2ZhdEVuZW15X3dhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdmYXRFbmVteScsIHtzdGFydDogMCwgZW5kOiA5fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnc3BsaXR0ZXJGYXRFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc3BsaXR0ZXJGYXRFbmVteScsIHtzdGFydDogMCwgZW5kOiA5fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnYXJtb3VyZWRFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnYXJtb3VyZWRFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnc3BsaXR0ZXJCaWdFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc3BsaXR0ZXJCaWdFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnc3BsaXR0ZXJTbWFsbEVuZW15X3dhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdzcGxpdHRlclNtYWxsRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3BvcnRhbEZyb21fc3BpbicsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BvcnRhbEZyb20nLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3BvcnRhbFRvX3NwaW4nLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwb3J0YWxUbycsIHtzdGFydDogMCwgZW5kOiA3fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAndG93ZXJNaWRzX3NwaW4nLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCd0b3dlcm1pZHMnLCB7c3RhcnQ6IDAsIGVuZDogMX0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiA1LFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBY3RpdmVTY2VuZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlU2NlbmU7XG4gICAgfVxuXG4gICAgZ2V0UGFyZW50U2NlbmVzVG9Sb290KCkge1xuICAgICAgICBsZXQgcGFyZW50U2NlbmVzOiBURFNjZW5lW10gPSBbXVxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldEFjdGl2ZVNjZW5lKCk7XG5cbiAgICAgICAgd2hpbGUgKHNjZW5lPy5zY2VuZVBhcmVudEtleSkge1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U2NlbmVCeUtleShzY2VuZS5zY2VuZVBhcmVudEtleSlcbiAgICAgICAgICAgIHBhcmVudFNjZW5lcy5wdXNoKHBhcmVudCk7XG4gICAgICAgICAgICBzY2VuZSA9IHBhcmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRTY2VuZXM7XG4gICAgfVxuXG4gICAgZ2V0Um9vdFREU2NlbmUoKSB7XG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0QWN0aXZlU2NlbmUoKTtcblxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50S2V5KSB7XG4gICAgICAgICAgICBzY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShzY2VuZS5zY2VuZVBhcmVudEtleSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzY2VuZVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuLi9lbmVteVwiO1xuaW1wb3J0IHtUb3dlcn0gZnJvbSBcIi4uL3Rvd2Vyc1wiO1xuaW1wb3J0IHtCdWxsZXR9IGZyb20gXCIuLi9idWxsZXRcIjtcbmltcG9ydCB7V2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi93YXZlc1wiXG5pbXBvcnQge1Rvd2VyTWFuYWdlcn0gZnJvbSBcIi4uL3Rvd2VyTWFuYWdlclwiXG5pbXBvcnQge01BWF9IRUlHSFQsIE1BWF9XSURUSCwgVGVycmFpbiwgVElMRV9TSVpFfSBmcm9tIFwiLi4vdGVycmFpblwiO1xuaW1wb3J0IHtURFNjZW5lQ29uZmlnfSBmcm9tIFwiLi90ZFNjZW5lQ29uZmlnXCI7XG5pbXBvcnQge01ldGFTY2VuZX0gZnJvbSBcIi4vbWV0YVNjZW5lXCI7XG5pbXBvcnQge0hVRF9XSURUSH0gZnJvbSBcIi4vaHVkU2NlbmVcIjtcbmltcG9ydCB7VVVJRH0gZnJvbSBcIi4uL3V0aWxzL2d1aWRcIjtcbmltcG9ydCB7SGVhbHRoQmFyfSBmcm9tIFwiLi4vaGVhbHRoQmFyXCI7XG5pbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQge0VORU1ZX0NPTkZJR1N9IGZyb20gXCIuLi9jb25maWdcIjtcblxuZXhwb3J0IGNvbnN0IFNDRU5FX1RSQU5TSVRJT05fTVMgPSA1MDBcbmV4cG9ydCBjb25zdCBURF9TQ0VORV9XSURUSCA9IE1BWF9XSURUSCAqIFRJTEVfU0laRVxuZXhwb3J0IGNvbnN0IFREX1NDRU5FX0hFSUdIVCA9IE1BWF9IRUlHSFQgKiBUSUxFX1NJWkVcblxuZXhwb3J0IGNsYXNzIFREU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuICAgIHBhdGg6IFBoYXNlci5DdXJ2ZXMuUGF0aFxuICAgIGFsbEVuZW1pZXM6IHsgW2tleTogc3RyaW5nXTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIH0gPSB7fVxuICAgIG5leHRFbmVteTogbnVtYmVyID0gMFxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lXG5cbiAgICB0b3dlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxuICAgIGJ1bGxldHM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cFxuXG4gICAgdGVycmFpbjogVGVycmFpblxuXG4gICAgd2F2ZU1hbmFnZXI6IFdhdmVNYW5hZ2VyXG4gICAgdG93ZXJNYW5hZ2VyOiBUb3dlck1hbmFnZXJcblxuICAgIHNjZW5lUGFyZW50S2V5OiBzdHJpbmc7XG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb25cblxuICAgIHByaXZhdGUgdG93ZXJQYXJlbnQ6IFRvd2VyICAvLyB0byB3aGF0IHRvd2VyIGRvZXMgdGhpcyBzY2VuZSBjb3JyZXNwb25kPyB1bmRlZmluZWQgZm9yIHJvb3RcbiAgICBwcml2YXRlIGVuZEhlYWx0aEJhcjogSGVhbHRoQmFyXG5cbiAgICAvLyBoYXBwZW5zIHdoZW4gYW4gZW5lbXkgcmVhY2hlcyB0aGUgZW5kXG4gICAgZW5lbXlFbmRDYWxsYmFjazogKG51bWJlcikgPT4gdm9pZFxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBURFNjZW5lQ29uZmlnLCBtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgICAgICBrZXk6IGNvbmZpZy5zY2VuZUtleSwgLy9gdGRTY2VuZSR7VVVJRC51dWlkdjQoKX1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRlcnJhaW4gPSBjb25maWcudGVycmFpbjtcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XG5cbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gY29uZmlnLnNjZW5lTGV2ZWw7XG4gICAgICAgIHRoaXMuc2NlbmVQYXJlbnRLZXkgPSBjb25maWcuc2NlbmVQYXJlbnRLZXk7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgLy8gdGhpcyBncmFwaGljcyBlbGVtZW50IGlzIG9ubHkgZm9yIHZpc3VhbGl6YXRpb24sXG4gICAgICAgIC8vIGl0cyBub3QgcmVsYXRlZCB0byBvdXIgcGF0aFxuICAgICAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcygpO1xuXG4gICAgICAgIHRoaXMudGVycmFpbi5jcmVhdGUodGhpcylcbiAgICAgICAgdGhpcy50ZXJyYWluLmRyYXcoZ3JhcGhpY3MpXG5cbiAgICAgICAgLy8gdGhlIHBhdGggZm9yIG91ciBlbmVtaWVzXG4gICAgICAgIC8vIHBhcmFtZXRlcnMgYXJlIHRoZSBzdGFydCB4IGFuZCB5IG9mIG91ciBwYXRoXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XG4gICAgICAgIHRoaXMudG93ZXJNYW5hZ2VyID0gbmV3IFRvd2VyTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBmb3IgKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7XG4gICAgICAgICAgICB0aGlzLmFsbEVuZW1pZXNbZW5lbXkubmFtZV0gPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IGVuZW15LmNsYXNzLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3dlcnMgPSB0aGlzLmFkZC5ncm91cCh7Y2xhc3NUeXBlOiBUb3dlciwgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcblxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMub25DbGljaywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7Y2xhc3NUeXBlOiBCdWxsZXQsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlfSk7XG4gICAgICAgIGZvciAobGV0IGVOYW1lIGluIHRoaXMuYWxsRW5lbWllcykge1xuICAgICAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuYWxsRW5lbWllc1tlTmFtZV0sIHRoaXMuYnVsbGV0cywgdGhpcy5kYW1hZ2VFbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyID0gbmV3IFdhdmVNYW5hZ2VyKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IGNhbSA9IHRoaXMuY2FtZXJhcy5tYWluXG4gICAgICAgIGNhbS5zY3JvbGxYID0gLUhVRF9XSURUSFxuICAgIH1cblxuICAgIC8vIE9ubHkgZm9yZWdyb3VuZCBzY2VuZSBoYXMgaW5wdXQgZW5hYmxlZCAmIGlzIHZpc2libGU7IGFsbCBzY2VuZXMgYXJlIGJlaW5nIHVwZGF0ZWRcbiAgICBwdWJsaWMgc2V0SXNGb3JlZ3JvdW5kKGlzRm9yZWdyb3VuZFNjZW5lLCBnb2luZ0luc2lkZTogYm9vbGVhbiwgaSA9IG51bGwsIGogPSBudWxsKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGlzRm9yZWdyb3VuZFNjZW5lO1xuXG4gICAgICAgIGlmICghaXNGb3JlZ3JvdW5kU2NlbmUpIHtcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dChnb2luZ0luc2lkZSwgaSwgailcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmFkZUluKGdvaW5nSW5zaWRlLCBpLCBqKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVJbihnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5wYW4odGhpcy50ZXJyYWluLncgKiBUSUxFX1NJWkUgLyAyLCB0aGlzLnRlcnJhaW4uaCAqIFRJTEVfU0laRSAvIDIsIDEpXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldFpvb20oKGdvaW5nSW5zaWRlID8gMSAvIDMgOiAzKSlcblxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlSW4oU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDEsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXG4gICAgfVxuXG4gICAgcHVibGljIGZhZGVPdXQoZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGksIGopIHtcbiAgICAgICAgLy8gVGFrZSBhIHNjcmVlbnNob3RcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnNuYXBzaG90QXJlYShcbiAgICAgICAgICAgIC10aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxYLFxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFksXG4gICAgICAgICAgICBURF9TQ0VORV9XSURUSCxcbiAgICAgICAgICAgIFREX1NDRU5FX0hFSUdIVCxcbiAgICAgICAgICAgIChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBLZXkgPSBgc25hcC0ke3RoaXMuc2NlbmUua2V5fWBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlcy5leGlzdHMoc25hcEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5yZW1vdmUoc25hcEtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMuYWRkSW1hZ2Uoc25hcEtleSwgaW1hZ2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnaW5nOiBzaG93IHRoZSBzY3JlZW5zaG90XG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcbiAgICAgICAgaWYgKGdvaW5nSW5zaWRlKSB7XG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy50ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMywgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih4LCB5LCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDEgLyAzLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGFtYWdlRW5lbXkoZW5lbXksIGJ1bGxldCkge1xuICAgICAgICAvLyBvbmx5IGlmIGJvdGggZW5lbXkgYW5kIGJ1bGxldCBhcmUgYWxpdmVcbiAgICAgICAgaWYgKGVuZW15LmFjdGl2ZSA9PT0gdHJ1ZSAmJiBidWxsZXQuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyB3ZSByZW1vdmUgdGhlIGJ1bGxldCByaWdodCBhd2F5XG4gICAgICAgICAgICBidWxsZXQuaGl0KClcblxuICAgICAgICAgICAgLy8gZGVjcmVhc2UgdGhlIGVuZW15IGhwIHdpdGggYnVsbGV0IGRhbWFnZVxuICAgICAgICAgICAgZW5lbXkucmVjZWl2ZURhbWFnZShidWxsZXQuZGFtYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZyYW1lTnVtYmVyID0gMDtcblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcblxuICAgICAgICB0aGlzLmZyYW1lTnVtYmVyKys7XG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIudXBkYXRlKGRlbHRhKVxuXG4gICAgICAgIGlmICh0aGlzLmZyYW1lTnVtYmVyICUgNjAgPT0gMCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFVwZGF0ZSB0aDogJHt0aGlzLnNjZW5lLmtleX0gZTogJHt0aGlzLmlucHV0LmVuYWJsZWR9IHwgbDogJHt0aGlzLnNjZW5lTGV2ZWx9IHwgcDogJHt0aGlzLnNjZW5lUGFyZW50Py5zY2VuZS5rZXl9YClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbmRIZWFsdGhCYXIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLmhlYWx0aCA9IHRoaXMudG93ZXJQYXJlbnQuaGVhbHRoQmFyLmhlYWx0aFxuICAgICAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQnVsbGV0KHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHJhbmdlLCBidWxsZXRTcGVlZE1vZCkge1xuICAgICAgICBsZXQgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldCgpIGFzIEJ1bGxldDtcbiAgICAgICAgaWYgKGJ1bGxldCkge1xuICAgICAgICAgICAgYnVsbGV0LmZpcmUoeCwgeSwgYW5nbGUsIGRhbWFnZSwgcmFuZ2UsIGJ1bGxldFNwZWVkTW9kLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvR3JpZFBvcyh4LCB5KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5mbG9vcigoeCArIHRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgpIC8gVElMRV9TSVpFKTtcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSkgLyBUSUxFX1NJWkUpO1xuICAgICAgICByZXR1cm4gW2ksIGpdXG4gICAgfVxuXG4gICAgb25DbGljayhwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlcikge1xuICAgICAgICB0aGlzLmlucHV0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbmNsaWNrIG9uIHNjZW5lICR7dGhpcy5zY2VuZS5rZXl9YClcbiAgICAgICAgY29uc3QgW2ksIGpdID0gdGhpcy50b0dyaWRQb3MocG9pbnRlci54LCBwb2ludGVyLnkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBjbGlja2VkIGNvb3JkaW5hdGVzOiAke2l9ICR7an1gKVxuICAgICAgICBsZXQgcG90ZW50aWFsRXhpc3RpbmdUb3dlciA9IHRoaXMudGVycmFpbi50cnlHZXRFeGlzdGluZ1Rvd2VyKGksIGopO1xuICAgICAgICBpZiAocG90ZW50aWFsRXhpc3RpbmdUb3dlcikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2l0Y2hpbmcgdG8gYW4gZXhpc3RpbmcgdG93ZXJcIilcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUocG90ZW50aWFsRXhpc3RpbmdUb3dlci5nZXRJbm5lclRvd2VyU2NlbmVLZXkoKSwgdHJ1ZSwgaSwgailcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMudGVycmFpbi5wYXRoVGlsZXNbdGhpcy50ZXJyYWluLnBhdGhUaWxlcy5sZW5ndGggLSAxXVxuICAgICAgICBpZiAoaSA9PT0gZW5kWzBdICYmIGogPT09IGVuZFsxXSAmJiB0aGlzLnNjZW5lUGFyZW50S2V5KSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB2aWEgZW5kXCIpXG4gICAgICAgICAgICB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHRoaXMuc2NlbmVQYXJlbnRLZXksIGZhbHNlLCBpLCBqKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmVteVJlYWNoZWRFbmQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbmVteUVuZENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICB9XG5cbiAgICBzZXRUb3dlclBhcmVudChwYXJlbnQ6IFRvd2VyKSB7XG4gICAgICAgIHRoaXMudG93ZXJQYXJlbnQgPSBwYXJlbnRcbiAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMpXG5cbiAgICAgICAgbGV0IFtpLCBqXSA9IHRoaXMudGVycmFpbi5wYXRoVGlsZXNbdGhpcy50ZXJyYWluLnBhdGhUaWxlcy5sZW5ndGggLSAxXVxuICAgICAgICBsZXQgW3gsIHldID0gdGhpcy50ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXG5cbiAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIubWFrZSh4LCB5LCBUSUxFX1NJWkUgLSAxNCwgMC41KVxuICAgICAgICB0aGlzLmFkZC5jb250YWluZXIoMCwgMCwgdGhpcy5lbmRIZWFsdGhCYXIpXG4gICAgfVxuXG4gICAgZ2V0VG93ZXJQYXJlbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRvd2VyUGFyZW50XG4gICAgfVxufSIsImltcG9ydCB7IFRlcnJhaW4gfSBmcm9tIFwiLi4vdGVycmFpblwiO1xuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3RkU2NlbmVcIjtcblxuZXhwb3J0IGNsYXNzIFREU2NlbmVDb25maWcge1xuICAgIHRlcnJhaW46IFRlcnJhaW47XG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb24gXG4gICAgc2NlbmVQYXJlbnRLZXk6IHN0cmluZztcbiAgICBzY2VuZUtleTogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3Rvcih0ZXJyYWluOiBUZXJyYWluLCBzY2VuZUxldmVsOiBudW1iZXIsIHNjZW5lUGFyZW50S2V5OiBzdHJpbmcsIHNjZW5lS2V5OiBzdHJpbmcpe1xuICAgICAgICB0aGlzLnRlcnJhaW4gPSB0ZXJyYWluO1xuXG4gICAgICAgIHRoaXMuc2NlbmVMZXZlbCA9IHNjZW5lTGV2ZWw7XG4gICAgICAgIHRoaXMuc2NlbmVQYXJlbnRLZXkgPSBzY2VuZVBhcmVudEtleTtcbiAgICAgICAgdGhpcy5zY2VuZUtleSA9IHNjZW5lS2V5XG4gICAgfVxufSIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL3Rvd2Vyc1wiXG5cbmV4cG9ydCBlbnVtIFRpbGVUeXBlIHtcbiAgICBTdGFydCwgUGF0aCwgRW5kLCBPY2N1cGllZCwgQnVpbGRhYmxlXG59XG5cbmV4cG9ydCBjb25zdCBUSUxFX1NJWkUgPSA2NFxuZXhwb3J0IGNvbnN0IExFVkVMX09GRlNFVCA9IDE1ICogVElMRV9TSVpFXG5leHBvcnQgY29uc3QgTUFYX1dJRFRIID0gMTBcbmV4cG9ydCBjb25zdCBNQVhfSEVJR0hUID0gOFxuXG5jb25zdCBOX1RJTEVTRVRfU1BSSVRFUyA9IDEwICAvLyBob3cgbWFueSBzcHJpdGVzIGFyZSBpbiB0aGUgdGlsZXNldD9cblxudHlwZSBHcmlkUG9zID0gW2ludGVnZXIsIGludGVnZXJdXG5cbmV4cG9ydCBjbGFzcyBUZXJyYWluIHtcbiAgICB0b3dlcnM6IFRvd2VyW11bXVxuICAgIHRpbGVzOiBUaWxlVHlwZVtdW11cblxuICAgIHRpbGVTcHJpdGVzOiBpbnRlZ2VyW11bXVxuXG4gICAgcGF0aDogUGhhc2VyLkN1cnZlcy5QYXRoICAvLyBUaGUgUGhhc2VyIHBhdGggKGZvciBlbmVteSBtb3ZlbWVudClcbiAgICBwYXRoVGlsZXM6IEdyaWRQb3NbXSAgLy8gVGhlIHNlcXVlbmNlIG9mIHRpbGVzIG1ha2luZyB1cCB0aGUgcGF0aFxuXG4gICAgdGludDogaW50ZWdlciAvLyBjb2xvciBhcyBhIDI0LWJpdCBpbnRcblxuICAgIHc6IG51bWJlclxuICAgIGg6IG51bWJlclxuXG4gICAgcG9ydGFsRnJvbTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxuICAgIHBvcnRhbFRvOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG5cbiAgICAvLyB0b2RvOiBnZW5lcmF0ZS9sb2FkIHRlcnJhaW5cbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogaW50ZWdlciwgaGVpZ2h0OiBpbnRlZ2VyKSB7XG4gICAgICAgIHRoaXMudyA9IHdpZHRoXG4gICAgICAgIHRoaXMuaCA9IGhlaWdodFxuICAgIH1cblxuICAgIGNyZWF0ZShzY2VuZTogVERTY2VuZSkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlKClcbiAgICAgICAgdGhpcy5zZXR1cFNwcml0ZXMoc2NlbmUpXG5cbiAgICAgICAgdGhpcy50b3dlcnMgPSBpbml0MkRBcnJheTxUb3dlcj4odGhpcy53LCB0aGlzLmgsIG51bGwpXG4gICAgfVxuXG4gICAgc2V0dXBTcHJpdGVzKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHRoaXMudGlsZVNwcml0ZXMgPSBpbml0MkRBcnJheSh0aGlzLncsIHRoaXMuaCwgVGlsZVR5cGUuQnVpbGRhYmxlKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdID0gcmFuZG9tRnJlZVNwcml0ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBnZXREaXIgPSAocGk6IGludGVnZXIpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGF0aFRpbGVzLCBwaSlcbiAgICAgICAgICAgIGxldCBbaTEsIGoxXSA9IHRoaXMucGF0aFRpbGVzW3BpXVxuICAgICAgICAgICAgbGV0IFtpMiwgajJdID0gdGhpcy5wYXRoVGlsZXNbcGkgKyAxXVxuXG4gICAgICAgICAgICBsZXQgW2RpLCBkal0gPSBbaTIgLSBpMSwgajIgLSBqMV1cbiAgICAgICAgICAgIGlmIChkaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGogPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gM1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImdldERpciBmYWlsZWRcIilcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwaSA9IDA7IHBpIDwgdGhpcy5wYXRoVGlsZXMubGVuZ3RoOyBwaSsrKSB7XG4gICAgICAgICAgICBsZXQgW2kxLCBqMV0gPSB0aGlzLnBhdGhUaWxlc1twaV1cblxuICAgICAgICAgICAgaWYgKHBpID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA2XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBpID09IHRoaXMucGF0aFRpbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA3XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBkMSA9IChnZXREaXIocGkgLSAxKSArIDIpICUgNFxuICAgICAgICAgICAgICAgIGxldCBkMiA9IGdldERpcihwaSlcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMikge1xuICAgICAgICAgICAgICAgICAgICBbZDEsIGQyXSA9IFtkMiwgZDFdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9yZGVyIG9mIHNwcml0ZXMgKDAyIG1lYW5pbmcgZDE9MCwgZDI9Mik6XG4gICAgICAgICAgICAgICAgLy8gMDEgMDIgMDMgMTIgMTMgMjNcbiAgICAgICAgICAgICAgICBpZiAoZDEgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSBkMiAtIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgKyAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkMSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDUgLy8gb25seSAyMyBsZWZ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50aW50ID0gUGhhc2VyLkRpc3BsYXkuQ29sb3IuR2V0Q29sb3IoXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXG4gICAgICAgIClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhpLCBqKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgJ3RpbGVzZXQnLCB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5CdWlsZGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldFRpbnQodGhpcy50aW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5TdGFydCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbEZyb20gPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksIFwicG9ydGFsRnJvbVwiLCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxUbyA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgXCJwb3J0YWxUb1wiLCAwKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXcoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xuICAgICAgICAvLyB0aGlzLmRyYXdHcmlkKGdyYXBoaWNzKVxuXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgzLCAweGZmZmZmZiwgMSk7XG4gICAgICAgIC8vIHZpc3VhbGl6ZSB0aGUgcGF0aFxuICAgICAgICB0aGlzLnBhdGguZHJhdyhncmFwaGljcyk7XG5cbiAgICAgICAgdGhpcy5wb3J0YWxGcm9tLmFuaW1zLnBsYXkoe1xuICAgICAgICAgICAga2V5OiBcInBvcnRhbEZyb21fc3BpblwiLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb3J0YWxUby5hbmltcy5wbGF5KHtcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxUb19zcGluXCIsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRyYXdHcmlkKGdyYXBoaWNzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3MpIHtcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4MDAwMGZmLCAwLjgpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuaDsgaSsrKSB7XG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oMCwgaSAqIFRJTEVfU0laRSk7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oVElMRV9TSVpFICogMTAsIGkgKiBUSUxFX1NJWkUpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMudzsgaisrKSB7XG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oaiAqIFRJTEVfU0laRSwgMCk7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oaiAqIFRJTEVfU0laRSwgVElMRV9TSVpFICogOCk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUGF0aCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYW5QbGFjZVRvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5Cb3VuZHMoaSwgaikgJiYgdGhpcy50aWxlc1tpXVtqXSA9PT0gVGlsZVR5cGUuQnVpbGRhYmxlO1xuICAgIH1cblxuICAgIHB1YmxpYyB0cnlHZXRFeGlzdGluZ1Rvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcbiAgICAgICAgaWYgKGkgPCAwIHx8IGogPCAwIHx8IGkgPj0gdGhpcy53IHx8IGogPj0gdGhpcy5oKSByZXR1cm4gbnVsbFxuICAgICAgICByZXR1cm4gdGhpcy50b3dlcnNbaV1bal07XG4gICAgfVxuXG4gICAgcHVibGljIHBsYWNlVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlciwgdG93ZXI6IFRvd2VyKSB7XG4gICAgICAgIGlmIChpIDwgMCB8fCBqIDwgMCB8fCBpID49IHRoaXMudyB8fCBqID49IHRoaXMuaCkgcmV0dXJuIG51bGxcblxuICAgICAgICB0aGlzLnRpbGVzW2ldW2pdID0gVGlsZVR5cGUuT2NjdXBpZWQ7XG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXSA9IHRvd2VyO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2VuZXJhdGUoKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHBhdGggPSBbXVxuXG4gICAgICAgIGxldCBlZGdlczogR3JpZFBvc1tdID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLncgLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goW2ksIDBdKVxuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgdGhpcy5oIC0gMV0pXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB0aGlzLmggLSAxOyBqKyspIHtcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goWzAsIGpdKVxuICAgICAgICAgICAgZWRnZXMucHVzaChbdGhpcy53IC0gMSwgal0pXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlXG5cbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxuICAgICAgICB3aGlsZSAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGxldCBmcm9tID0gcmFuZG9tSXRlbShlZGdlcylcbiAgICAgICAgICAgIGxldCB0bztcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICB0byA9IHJhbmRvbUl0ZW0oZWRnZXMpXG4gICAgICAgICAgICB9IHdoaWxlICh0byA9PSBmcm9tKVxuXG4gICAgICAgICAgICBwYXRoID0gdGhpcy5yYW5kb21XYWxrKGZyb20sIHRvKVxuXG4gICAgICAgICAgICBjb25zdCBtaW5MZW5ndGggPSAyNVxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwgJiYgcGF0aC5sZW5ndGggPj0gbWluTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dGVtcHRzKytcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA9PSA0MDApIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCBpblwiLCBhdHRlbXB0cywgXCJhdHRlbXB0c1wiKVxuXG4gICAgICAgIHRoaXMudGlsZXMgPSBpbml0MkRBcnJheSh0aGlzLncsIHRoaXMuaCwgVGlsZVR5cGUuQnVpbGRhYmxlKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMuZnJvbUdyaWRQb3MocGF0aFtpXVswXSwgcGF0aFtpXVsxXSlcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBhbHRlbmF0aXZlbHk6IHRoaXMucGF0aCA9IG5ldyBQaGFzZXIuQ3VydmVzLlBhdGgoLi4uKVxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGF0aCA9IHNjZW5lLmFkZC5wYXRoKHgsIHkpXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCh4LCB5KVxuICAgICAgICAgICAgICAgIC8vIHNjZW5lLmFkZE9iamVjdCh0aGlzLnBhdGgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aC5saW5lVG8oeCwgeSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHNldFRvID0gVGlsZVR5cGUuUGF0aFxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHNldFRvID0gVGlsZVR5cGUuU3RhcnRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSBwYXRoLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBzZXRUbyA9IFRpbGVUeXBlLkVuZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpbGVzW3BhdGhbaV1bMF1dW3BhdGhbaV1bMV1dID0gc2V0VG9cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIHRlcnJhaW4uXCIpXG5cbiAgICAgICAgdGhpcy5wYXRoVGlsZXMgPSBwYXRoXG4gICAgICAgIHJldHVybiBwYXRoLmxlbmd0aFxuICAgIH1cblxuICAgIHByaXZhdGUgcmFuZG9tV2Fsayhmcm9tOiBHcmlkUG9zLCB0bzogR3JpZFBvcyk6IEFycmF5PEdyaWRQb3M+IHtcbiAgICAgICAgbGV0IHBhdGggPSBbXVxuICAgICAgICBsZXQgc2VlbiA9IG5ldyBTZXQoKVxuXG4gICAgICAgIGNvbnN0IGFkZFRvUGF0aCA9IChwb3M6IEdyaWRQb3MpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhbm5lZCBvZiB0aGlzLm5laWdoYm9ycyhwYXRoW3BhdGgubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZW4uYWRkKGJhbm5lZC50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGgucHVzaChwb3MpXG4gICAgICAgICAgICBzZWVuLmFkZChwb3MudG9TdHJpbmcoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZFRvUGF0aChmcm9tKVxuXG4gICAgICAgIGxldCBzdGVwcyA9IDBcbiAgICAgICAgd2hpbGUgKHBhdGhbcGF0aC5sZW5ndGggLSAxXSAhPSB0bykge1xuICAgICAgICAgICAgc3RlcHMrK1xuICAgICAgICAgICAgaWYgKHN0ZXBzID09IDEwMCkgYnJlYWtcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV1cblxuICAgICAgICAgICAgaWYgKHBvcy50b1N0cmluZygpID09PSB0by50b1N0cmluZygpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGggIC8vIFN1Y2Nlc3MhXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjYW5kcyA9IHRoaXMubmVpZ2hib3JzKHBvcylcbiAgICAgICAgICAgIGNhbmRzID0gY2FuZHMuZmlsdGVyKHAgPT4gIXNlZW4uaGFzKHAudG9TdHJpbmcoKSkpXG5cbiAgICAgICAgICAgIGlmIChjYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCAgLy8gRmFpbCFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXh0ID0gcmFuZG9tSXRlbShjYW5kcylcbiAgICAgICAgICAgIGFkZFRvUGF0aChuZXh0KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICB9XG5cbiAgICBwcml2YXRlIG5laWdoYm9ycyhwb3M6IEdyaWRQb3MsIHBhZCA9IDApIHtcbiAgICAgICAgbGV0IHJlcyA9IFtcbiAgICAgICAgICAgIFtwb3NbMF0gKyAxLCBwb3NbMV1dLFxuICAgICAgICAgICAgW3Bvc1swXSAtIDEsIHBvc1sxXV0sXG4gICAgICAgICAgICBbcG9zWzBdLCBwb3NbMV0gKyAxXSxcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSAtIDFdLFxuICAgICAgICBdXG4gICAgICAgIHJlcyA9IHJlcy5maWx0ZXIocCA9PiB0aGlzLmluQm91bmRzKHBbMF0sIHBbMV0pKVxuXG4gICAgICAgIHJldHVybiByZXNcbiAgICB9XG5cbiAgICBmcm9tR3JpZFBvcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XG4gICAgICAgIHJldHVybiBbKGkgKyAwLjUpICogVElMRV9TSVpFLCAoaiArIDAuNSkgKiBUSUxFX1NJWkVdXG4gICAgfVxuXG4gICAgaW5Cb3VuZHMoaTogaW50ZWdlciwgajogaW50ZWdlciwgcGFkID0gMCkge1xuICAgICAgICByZXR1cm4gKGkgPj0gcGFkXG4gICAgICAgICAgICAmJiBpIDwgdGhpcy53IC0gcGFkXG4gICAgICAgICAgICAmJiBqID49IHBhZFxuICAgICAgICAgICAgJiYgaiA8IHRoaXMuaCAtIHBhZClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUl0ZW0oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiBhcnJheS5sZW5ndGgpXVxufVxuXG5mdW5jdGlvbiByYW5kb21GcmVlU3ByaXRlKCkge1xuICAgIGNvbnN0IG5TcGVjaWFsU3ByaXRlcyA9IDhcbiAgICByZXR1cm4gblNwZWNpYWxTcHJpdGVzICsgTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiAoTl9USUxFU0VUX1NQUklURVMgLSBuU3BlY2lhbFNwcml0ZXMpKVxufVxuXG5mdW5jdGlvbiBpbml0MkRBcnJheTxUVmFsPihkaW0xLCBkaW0yLCB2YWx1ZTogVFZhbCk6IFRWYWxbXVtdIHtcbiAgICByZXR1cm4gbmV3IEFycmF5KGRpbTEpXG4gICAgICAgIC5maWxsKGZhbHNlKVxuICAgICAgICAubWFwKCgpID0+IG5ldyBBcnJheShkaW0yKVxuICAgICAgICAgICAgLmZpbGwodmFsdWUpKTtcbn0iLCJpbXBvcnQgKiBhcyBjZmcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XG5pbXBvcnQgKiBhcyB0b3dlcnMgZnJvbSBcIi4vdG93ZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3dlck1hbmFnZXIge1xuICAgIHNjZW5lOiBURFNjZW5lXG4gICAgdG93ZXJUeXBlczogeyBba2V5OnN0cmluZ106IGFueX0gPSB7XG4gICAgICAgICdCYXNpYyc6IFt0b3dlcnMuQmFzaWNUdXJyZXQsIGNmZy5CYXNpY10sXG4gICAgICAgICdNdWx0aXNob3QnOiBbdG93ZXJzLk11bHRpc2hvdFR1cnJldCwgY2ZnLk11bHRpc2hvdF0sXG4gICAgICAgICdTbmlwZXInOiBbdG93ZXJzLlNuaXBlclR1cnJldCwgY2ZnLlNuaXBlcl0sXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGFjZVRvd2VyKHBvaW50ZXIsIHRvd2VyVHlwZSkge1xuICAgICAgICBjb25zdCBbaSwgal0gPSB0aGlzLnNjZW5lLnRvR3JpZFBvcyhwb2ludGVyLngsIHBvaW50ZXIueSlcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUudGVycmFpbi5jYW5QbGFjZVRvd2VyKGksIGopKSB7XG4gICAgICAgICAgICB2YXIgdG93ZXI6IHRvd2Vycy5Ub3dlciA9IHRoaXMuc2NlbmUudG93ZXJzLmdldCgpO1xuXG4gICAgICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hZGRTY2VuZSh0aGlzLnNjZW5lLnNjZW5lLmtleSlcbiAgICAgICAgICAgIGlmICh0b3dlcikge1xuICAgICAgICAgICAgICAgIHRvd2VyLm1ha2UoaSwgaiwgbmV3U2NlbmUuc2NlbmUua2V5LCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVsxXSwgdGhpcy50b3dlclR5cGVzW3Rvd2VyVHlwZV1bMF0pO1xuICAgICAgICAgICAgICAgIFBsYXllckluZm8ubW9uZXkgLT0gdG93ZXIuY29uZmlnLnByaWNlXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2V0VG93ZXJQYXJlbnQodG93ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uIH0gZnJvbSBcIi4vdGVycmFpblwiO1xuXG5pbXBvcnQgeyBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYsIFRPV0VSX0hFQUxUSF9SRUdFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoQmFyXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCB7IFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuL3RlcnJhaW5cIjtcbmltcG9ydCB7IFRvd2VyQ29uZmlnLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCB7IEh1ZFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2h1ZFNjZW5lXCI7XG5cblxuLy8gdG9kbzogbW92ZSB0byBzY2VuZT9cbmZ1bmN0aW9uIGdldEVuZW15KHgsIHksIHJhbmdlLCBlbmVtaWVzLCBudW1Ub0dldCk6IEVuZW15QmFzZVtdIHtcbiAgICBsZXQgb3V0RW5lbWllczogRW5lbXlCYXNlW10gPSBbXTtcblxuICAgIGZvciAobGV0IGVuZW15R3JvdXAgaW4gZW5lbWllcykge1xuICAgICAgICBsZXQgZW5lbXlVbml0cyA9IGVuZW1pZXNbZW5lbXlHcm91cF0uZ2V0Q2hpbGRyZW4oKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVVuaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZW5lbXlVbml0c1tpXS5hY3RpdmUgJiYgUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih4LCB5LCBlbmVteVVuaXRzW2ldLngsIGVuZW15VW5pdHNbaV0ueSkgPD0gcmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvdXRFbmVtaWVzLnB1c2goZW5lbXlVbml0c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3V0RW5lbWllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIG91dEVuZW1pZXMuc29ydCgoYSwgYikgPT4gYi5mb2xsb3dlci50IC0gYS5mb2xsb3dlci50KVxuICAgICAgICBvdXRFbmVtaWVzLmxlbmd0aCA9IE1hdGgubWluKG51bVRvR2V0LCBvdXRFbmVtaWVzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuIG91dEVuZW1pZXNcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbn1cblxuXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcbiAgICBjb25maWc6IFRvd2VyQ29uZmlnXG4gICAgc3RhdHM6IFRvd2VyQ29uZmlnXG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgdG93ZXJUdXJyZXQ6IF9Ub3dlclR1cnJldFxuICAgIHRvd2VyTWlkOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgdG93ZXJCYXNlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgaGVhbHRoQmFyOiBIZWFsdGhCYXJcbiAgICByYW5nZUluZGljYXRvcjogUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlXG5cbiAgICBsZXZlbDogaW50ZWdlclxuICAgIGxldmVsVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICAgIHByaXZhdGUgaW5uZXJUb3dlclNjZW5lS2V5OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHRvd2VyU2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIodG93ZXJTY2VuZSwgMCwgMClcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRvd2VyU2NlbmUpXG4gICAgICAgIHRoaXMuc2NlbmUgPSB0b3dlclNjZW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYWtlKGk6IG51bWJlciwgajogbnVtYmVyLCBpbm5lclRvd2VyU2NlbmVLZXk6IHN0cmluZywgY29uZmlnOiBUb3dlckNvbmZpZywgdG93ZXJDbGFzc05hbWUpIHtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMuY29uZmlnO1xuXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQgPSBuZXcgdG93ZXJDbGFzc05hbWUodGhpcy5zY2VuZSwgdGhpcy5jb25maWcsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgbGV0IHhDb29yZCA9IGkgKiBUSUxFX1NJWkUgKyBUSUxFX1NJWkUgLyAyXG4gICAgICAgIGxldCB5Q29vcmQgPSBqICogVElMRV9TSVpFICsgVElMRV9TSVpFIC8gMlxuXG4gICAgICAgIHRoaXMudG93ZXJCYXNlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHhDb29yZCwgeUNvb3JkLCAndG93ZXJiYXNlcycsIHRoaXMuY29uZmlnLnNwcml0ZUJhc2UpO1xuICAgICAgICB0aGlzLnRvd2VyQmFzZS5zZXRUaW50KHRoaXMuY29uZmlnLnRpbnRCYXNlKTtcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlckJhc2UpO1xuICAgICAgICB0aGlzLnRvd2VyTWlkID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHhDb29yZCwgeUNvb3JkLCAndG93ZXJtaWRzJywgdGhpcy5jb25maWcuc3ByaXRlTWlkKTtcbiAgICAgICAgdGhpcy50b3dlck1pZC5zZXRUaW50KHRoaXMuY29uZmlnLnRpbnRNaWQpO1xuICAgICAgICB0aGlzLnRvd2VyTWlkLmFuaW1zLnBsYXkoe1xuICAgICAgICAgICAga2V5OiBgdG93ZXJNaWRzX3NwaW5gXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJNaWQpO1xuXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3IgPSB0aGlzLnNjZW5lLmFkZC5jaXJjbGUoXG4gICAgICAgICAgICB4Q29vcmQsIHlDb29yZCwgY29uZmlnLnJhbmdlKDEpLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0U3Ryb2tlU3R5bGUoUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91cik7XG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMucmFuZ2VJbmRpY2F0b3IpO1xuXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4ubGlzdC5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY29uc3RydWN0b3IubmFtZS5tYXRjaCgvXi4rRW5lbXkkLykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAgICAgbGV0IGh1ZFNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJodWRTY2VuZVwiKSBhcyBIdWRTY2VuZVxuICAgICAgICAgICAgaHVkU2NlbmUuc2V0RGVzY3JpcHRpb25Ub3dlcih0aGlzLmNvbmZpZywgdGhpcylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4geyB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpIH0pO1xuXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQucGxhY2UoaSwgaiwgdGhpcy5zY2VuZS50ZXJyYWluKTtcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBsYWNlVG93ZXIoaSwgaiwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlclR1cnJldCk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIubWFrZSh4Q29vcmQsIHlDb29yZCArIFRJTEVfU0laRSAvIDIgLSA4LCBUSUxFX1NJWkUgLSAxNClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXG5cbiAgICAgICAgdGhpcy5sZXZlbCA9IDFcblxuICAgICAgICBjb25zdCBwYWQgPSAzXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcbiAgICAgICAgICAgIHhDb29yZCArIDE1LCB5Q29vcmQgLSA0LCBcIlwiICsgdGhpcy5sZXZlbCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLmxldmVsVGV4dClcblxuICAgICAgICB0aGlzLmlubmVyVG93ZXJTY2VuZUtleSA9IGlubmVyVG93ZXJTY2VuZUtleVxuXG4gICAgICAgIGxldCBpbm5lclRvd2VyU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChpbm5lclRvd2VyU2NlbmVLZXkpIGFzIFREU2NlbmVcbiAgICAgICAgaW5uZXJUb3dlclNjZW5lLm9uRW5lbXlSZWFjaGVkRW5kKChkYW1hZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmhlYWx0aCAtPSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUZcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG5cbiAgICAgICAgdGhpcy50b3dlclR1cnJldC51cGRhdGUoZGVsdGEpXG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIuaGVhbHRoICs9IFRPV0VSX0hFQUxUSF9SRUdFTiAqIGRlbHRhXG5cbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyLmhlYWx0aCA+PSAxLjApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmxldmVsVXAoKTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWwrK1xuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQuc2V0VGV4dChcIlwiICsgdGhpcy5sZXZlbClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCAtIDEpIDwgdGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsKSkge1xuICAgICAgICAgICAgICAgIGxldCByYW5nZVNjYWxlID0gdGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsKSAvIHRoaXMuc3RhdHMucmFuZ2UoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRTY2FsZShyYW5nZVNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcbiAgICB9XG5cbiAgICBnZXRJbm5lclRvd2VyU2NlbmVLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyVG93ZXJTY2VuZUtleVxuICAgIH1cbn1cblxuXG5hYnN0cmFjdCBjbGFzcyBfVG93ZXJUdXJyZXQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2Uge1xuICAgIG5leHRUaWM6IG51bWJlclxuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGJhc2VYOiBudW1iZXJcbiAgICBiYXNlWTogbnVtYmVyXG4gICAgcGFyZW50OiBUb3dlclxuXG4gICAgc2NlbmU6IFREU2NlbmVcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBzcHJpdGU6IHN0cmluZywgdGludDogbnVtYmVyLCBwYXJlbnQ6IFRvd2VyKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAndG93ZXJ0b3BzJywgc3ByaXRlKTtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuc2V0VGludCh0aW50KTtcbiAgICAgICAgdGhpcy5uZXh0VGljID0gMDtcbiAgICB9XG5cbiAgICAvLyB3ZSB3aWxsIHBsYWNlIHRoZSB0b3dlciBhY2NvcmRpbmcgdG8gdGhlIGdyaWRcbiAgICBwbGFjZShpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0ZXJyYWluOiBUZXJyYWluKSB7XG4gICAgICAgIFt0aGlzLngsIHRoaXMueV0gPSB0ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXG4gICAgICAgIHRoaXMuYmFzZVggPSB0aGlzLnhcbiAgICAgICAgdGhpcy5iYXNlWSA9IHRoaXMueVxuICAgIH1cblxuICAgIGZpcmUoKSB7XG4gICAgICAgIGxldCBlbmVtaWVzID0gZ2V0RW5lbXkoXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hbGxFbmVtaWVzLCAxXG4gICAgICAgICk7XG4gICAgICAgIGlmIChlbmVtaWVzKSB7XG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBlbmVtaWVzWzBdXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBlbmVteS54LCBlbmVteS55KTtcbiAgICAgICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZEJ1bGxldChcbiAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXG4gICAgICAgICAgICAgICAgZGFtYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lID09IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFjdGl2ZVNjZW5lKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLnNob290U291bmQucGxheSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAoYW5nbGUgKyBNYXRoLlBJIC8gMikgKiBQaGFzZXIuTWF0aC5SQURfVE9fREVHO1xuICAgICAgICBsZXQgcmVjb2lsID0gTWF0aC5taW4oZGFtYWdlICogMC41LCAyNSlcbiAgICAgICAgdGhpcy54ID0gdGhpcy5iYXNlWFxuICAgICAgICB0aGlzLnkgPSB0aGlzLmJhc2VZXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICAgICAgZHVyYXRpb246IE1hdGgubWluKHRoaXMucGFyZW50LmNvbmZpZy5maXJlcmF0ZSh0aGlzLnBhcmVudC5sZXZlbCkgKiAwLjgsIDEwMCArIGRhbWFnZSksXG4gICAgICAgICAgICB4OiB0aGlzLnggKyBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkpICogcmVjb2lsLFxuICAgICAgICAgICAgeTogdGhpcy55ICsgTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJKSAqIHJlY29pbCxcbiAgICAgICAgICAgIGVhc2U6ICdRdWFkJyxcbiAgICAgICAgICAgIHlveW86IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHVwZGF0ZShkZWx0YSkge1xuICAgICAgICB0aGlzLmxhc3RUaW1lICs9IGRlbHRhXG5cbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRUaWMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcmUoKSlcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWMgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5wYXJlbnQuc3RhdHMuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGljID0gdGhpcy5sYXN0VGltZSArIDUwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFzaWNUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE11bHRpc2hvdFR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xuICAgIH1cblxuXG4gICAgZmlyZSgpIHsgIC8vIHRoaXMgYmVoYXZpb3VyIHNob3VsZCBiZSBpbiBfVG93ZXJUdXJyZXQuZmlyZSBidHdcbiAgICAgICAgbGV0IG51bVRhcmdldHMgPSAzXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zdGF0cy5udW1UYXJnZXRzKSB7XG4gICAgICAgICAgICBudW1UYXJnZXRzID0gdGhpcy5wYXJlbnQuc3RhdHMubnVtVGFyZ2V0cyh0aGlzLnBhcmVudC5sZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteSh0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLCB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIG51bVRhcmdldHMpO1xuXG4gICAgICAgIGlmIChlbmVtaWVzICYmIGVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgZW5lbWllcykge1xuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgICAgICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCBhbmdsZSxcbiAgICAgICAgICAgICAgICAgICAgZGFtYWdlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmJ1bGxldFNwZWVkTW9kXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY2VuZSA9PSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hY3RpdmVTY2VuZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUubXVsdGlzaG90U291bmQucGxheSgpOyAgLy8gdGhpcyBzaG91bGQgYmUgaW4gY29uZmlnIGlmIHRoaXMgd2VyZSBkb25lIHByb3Blcmx5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNuaXBlclR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZW15Q29uZmlnLCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUsIEVORU1ZX0NPTkZJR1MsIFdhdmVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XG4vLyBpbXBvcnQgeyBFbmVteSwgRmF0RW5lbXl9IGZyb20gXCIuL2VuZW15XCI7XG5cblxuZXhwb3J0IGNsYXNzIFdhdmVNYW5hZ2VyIHtcbiAgICBzY2VuZTogVERTY2VuZVxuICAgIGN1cnJlbnRXYXZlOiBpbnRlZ2VyID0gMFxuICAgIG5leHRFbmVteTogaW50ZWdlciA9IDBcbiAgICBkZWFkRGFuZ2VyOiBpbnRlZ2VyID0gMFxuICAgIHJlbWFpbmluZ0RhbmdlcjogaW50ZWdlciA9IDBcbiAgICB3YXZlRGlmZmljdWx0eTogaW50ZWdlciA9IDBcblxuICAgIHdhdmVBY3RpdmU6IGJvb2xlYW4gIC8vIGZhbHNlIGZvciBuZXN0ZWQgd2F2ZXNcbiAgICBuZXh0V2F2ZVRpbWU6IGludGVnZXIgPSAwXG4gICAgcmVzcGF3blF1ZXVlOiBbRW5lbXlDb25maWcsIGludGVnZXJdW10gPSBbXTtcbiAgICByZXNwYXduSGVhbHRoOiBpbnRlZ2VyICAvLyB6ZXJvIHVubGVzcyByZXNwYXduaW5nIGVuZW15LCBoYWNrXG5cbiAgICBlbmVteUludGVydmFsOiBpbnRlZ2VyXG5cbiAgICBxdWV1ZWRFbmVteTogYW55XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICAgICAgLy8gc2V0IGZhbHNlIGZvciBuZXN0ZWQgYmVoYXZpb3IgaW4gdXBkYXRlKClcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA+IDApO1xuXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApXG4gICAgICAgICAgICB0aGlzLmdldFdhdmVEaWZmaWN1bHR5KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDFlOSAvLyBhIGxvdFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFdhdmVEaWZmaWN1bHR5KCkge1xuICAgICAgICAvL1RPRE86IGFkZCBkaWZmaWN1bHR5IHNjYWxpbmcgYW5kIGJhbGFuY2luZyBmb3Igd2F2ZXNcbiAgICAgICAgdGhpcy53YXZlRGlmZmljdWx0eSA9IFdhdmVDb25maWcub3V0ZXJXYXZlRGFuZ2VyKHRoaXMuY3VycmVudFdhdmUpXG4gICAgICAgIHRoaXMucmVtYWluaW5nRGFuZ2VyID0gdGhpcy53YXZlRGlmZmljdWx0eVxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSBXYXZlQ29uZmlnLm91dGVyRW5lbXlJbnRlcnZhbFxuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFdhdmUoKSB7XG4gICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFdhdmUrKztcbiAgICAgICAgdGhpcy5nZXRXYXZlRGlmZmljdWx0eSgpO1xuICAgICAgICBQbGF5ZXJJbmZvLndhdmVIZWFsdGhSZWdlbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgd2F2ZSAnICsgdGhpcy5jdXJyZW50V2F2ZSArICcsIHdhdmUgZGlmZmljdWx0eTogJyArIHRoaXMud2F2ZURpZmZpY3VsdHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25FbmVteSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzcGF3blF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCByZXNwYXduID0gdGhpcy5yZXNwYXduUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVzcGF3bkhlYWx0aCA9IHJlc3Bhd25bMV07XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByZXNwYXduWzBdLmRhbmdlcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbcmVzcGF3blswXS5uYW1lXS5nZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZW5lbXkuZGFuZ2VyIDw9IHRoaXMucmVtYWluaW5nRGFuZ2VyKSAmJiAoZW5lbXkubWluV2F2ZSA8PSB0aGlzLmN1cnJlbnRXYXZlKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmFuZEVuZW15KSB7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByYW5kRW5lbXkuZGFuZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyYW5kRW5lbXkubmFtZV0uZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IDA7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNwYXduKHJlc3Bhd246IEVuZW15Q29uZmlnLCByZW1haW5pbmdIZWFsdGg6IGludGVnZXIpIHtcbiAgICAgICAgdGhpcy5yZXNwYXduUXVldWUucHVzaChbcmVzcGF3biwgcmVtYWluaW5nSGVhbHRoXSk7XG4gICAgfVxuXG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGEpIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxuICAgICAgICBsZXQgZW5lbXk6IEVuZW15QmFzZVxuICAgICAgICBsZXQgd2F2ZTogaW50ZWdlclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMud2F2ZUFjdGl2ZSAmJiB0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0V2F2ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXZlKCk7ICAvLyBubyB3YXZlcyBpbiBuZXN0ZWQgbGF5ZXJzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdEYW5nZXIgPiAwICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRFbmVteSkge1xuICAgICAgICAgICAgICAgIGVuZW15ID0gdGhpcy5zcGF3bkVuZW15KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkRGFuZ2VyID09PSB0aGlzLndhdmVEaWZmaWN1bHR5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYXZlIFwiICsgdGhpcy5jdXJyZW50V2F2ZSArIFwiIGNvbXBsZXRlISBOZXh0IHdhdmUgaW4gXCIgKyBQQVVTRV9BRlRFUl9XQVZFX1RJTUUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhZERhbmdlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F2ZVRpbWUgPSB0aGlzLmxhc3RUaW1lICsgUEFVU0VfQUZURVJfV0FWRV9USU1FO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2F2ZSA9IHRoaXMuY3VycmVudFdhdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWV1ZWRFbmVteSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuZW15Lm1pbldhdmUgPD0gMiAqIFdhdmVDb25maWcubGV2ZWxUb1dhdmUodGhpcy5zY2VuZS5nZXRUb3dlclBhcmVudCgpLmxldmVsKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmxhc3RUaW1lICogKFdhdmVDb25maWcuZGFuZ2VyUGVyU2VjKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbCkgKiAwLjAwMSlcbiAgICAgICAgICAgIGNvbnN0IGIgPSAodGhpcy5xdWV1ZWRFbmVteS5kYW5nZXIgKiAxLjApXG4gICAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnF1ZXVlZEVuZW15Lm5hbWVdLmdldCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGFzdFRpbWUsIGIpXG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRFbmVteSA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2F2ZSA9IFdhdmVDb25maWcubGV2ZWxUb1dhdmUodGhpcy5zY2VuZS5nZXRUb3dlclBhcmVudCgpLmxldmVsKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZW15KSB7XG4gICAgICAgICAgICBlbmVteS5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICBlbmVteS5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgZW5lbXkgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYXRoXG4gICAgICAgICAgICBlbmVteS5zdGFydE9uUGF0aCh3YXZlLCB0aGlzLnJlc3Bhd25IZWFsdGgpO1xuICAgICAgICAgICAgdGhpcy5yZXNwYXduSGVhbHRoID0gMDtcblxuICAgICAgICAgICAgdGhpcy5uZXh0RW5lbXkgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5lbmVteUludGVydmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kRW5lbXkoZmlsdGVyX2ZuKTogRW5lbXlDb25maWcge1xuICAgICAgICBsZXQgYXZhaWxFbmVtaWVzID0gW11cbiAgICAgICAgZm9yKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7ICAvLyBTZWxlY3QgYWxsIGVuZW1pZXMgdGhhdCBjYW4gYmUgc3Bhd25lZFxuICAgICAgICAgICAgaWYgKGVuZW15Lm1pbldhdmUgPj0gMCAmJiBmaWx0ZXJfZm4oZW5lbXkpKVxuICAgICAgICAgICAgICAgIGF2YWlsRW5lbWllcy5wdXNoKGVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdmFpbEVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBvbmUgb2YgdGhlbVxuICAgICAgICAgICAgbGV0IHJhbmRFbmVteSA9IGF2YWlsRW5lbWllc1tNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIGF2YWlsRW5lbWllcy5sZW5ndGgpXTtcbiAgICAgICAgICAgIHJldHVybiByYW5kRW5lbXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9