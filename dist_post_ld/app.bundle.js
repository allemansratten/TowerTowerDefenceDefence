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

/***/ "./src/animationsConfig.ts":
/*!*********************************!*\
  !*** ./src/animationsConfig.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.animationsConfig = void 0;
exports.animationsConfig = [
    {
        key: 'weakEnemy_walk',
        spriteSheet: 'weakEnemy',
        frames: { start: 0, end: 7 },
        frameRate: 10
    },
    {
        key: 'fastEnemy_walk',
        spriteSheet: 'fastEnemy',
        frames: { start: 0, end: 7 },
        frameRate: 10
    },
    {
        key: 'fatEnemy_walk',
        spriteSheet: 'fatEnemy',
        frames: { start: 0, end: 9 },
        frameRate: 10
    },
    {
        key: 'splitterFatEnemy_walk',
        spriteSheet: 'splitterFatEnemy',
        frames: { start: 0, end: 9 },
        frameRate: 10
    },
    {
        key: 'armouredEnemy_walk',
        spriteSheet: 'armouredEnemy',
        frames: { start: 0, end: 7 },
        frameRate: 10
    },
    {
        key: 'splitterBigEnemy_walk',
        spriteSheet: 'splitterBigEnemy',
        frames: { start: 0, end: 7 },
        frameRate: 10
    },
    {
        key: 'splitterSmallEnemy_walk',
        spriteSheet: 'splitterSmallEnemy',
        frames: { start: 0, end: 7 },
        frameRate: 10
    },
    {
        key: 'portalFrom_spin',
        spriteSheet: 'portalFrom',
        frames: { start: 0, end: 7 },
        frameRate: 10
    },
    {
        key: 'portalTo_spin',
        spriteSheet: 'portalTo',
        frames: { start: 0, end: 7 },
        frameRate: 10
    },
    {
        key: 'towerMids_spin',
        spriteSheet: 'towermids',
        frames: { start: 0, end: 1 },
        frameRate: 10
    },
];


/***/ }),

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
            this.emitter.flow(20); // argument: frequency (0 = always)
            this.emitter.startFollow(this.bulletImage);
            // this.scene.children.bringToTop(this.bulletImage);
            this.scene.children.bringToTop(this.particles);
            this.setVisible(true);
        }
    };
    Bullet.prototype.onBulletEnd = function () {
        this.setActive(false);
        this.setVisible(false);
    };
    Bullet.prototype.hit = function () {
        if (this.scene.scene.isVisible()) {
            this.emitter.explode(10, this.bulletImage.x, this.bulletImage.y);
        }
        this.onBulletEnd();
    };
    Bullet.prototype.update = function (_, delta) {
        delta *= playerInfo_1.PlayerInfo.timeScale * (+!playerInfo_1.PlayerInfo.isPaused);
        this.lifespan -= delta;
        this.bulletImage.x += this.dx * (this.speed * delta);
        this.bulletImage.y += this.dy * (this.speed * delta);
        this.body.setCircle(exports.RADIUS, this.bulletImage.x, this.bulletImage.y);
        if (this.lifespan <= 0) {
            this.onBulletEnd();
            this.emitter.stop();
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
exports.DAMAGE_TO_TOWER_HEALTH_COEF = 0.2;
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
    'hp': function (wave) { return 15 + 14 * (wave - 1); },
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
    'hp': function (wave) { return 100 + 70 * (wave - 1); },
    'speed': 1 / 40000,
    'money': 3,
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
    'hp': function (wave) { return 20 + 14 * (wave - 1); },
    'speed': 1 / 30000,
    'money': 2,
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
    'hp': function (wave) { return 10 + 10 * (wave - 1); },
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
    'hp': function (wave) { return 10 + 8 * (wave - 1); },
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
    'hp': function (wave) { return 20 + 20 * (wave - 1); },
    'speed': 1 / 30000,
    'money': 1,
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
    'hp': function (wave) { return 100 + 40 * (wave - 1); },
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
    'range': function (level) { return 150; },
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
    'range': function (level) { return 95 + 3 * (level - 1); },
    'numTargets': function (level) { return 3 + Math.floor(level / 2); },
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        _this.speedModifier = 1;
        _this.config = stats;
        _this.stats = __assign({}, stats); // shallow copy, idk how to do deep copy
        _this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
        _this.setInteractive();
        _this.on('pointerover', function () {
            if (_this.scene.input.enabled)
                _this.scene.scene.get('hudScene').setDescriptionEnemy(_this);
        });
        return _this;
    }
    EnemyBase.prototype.update = function (_, delta) {
        delta *= playerInfo_1.PlayerInfo.timeScale * (+!playerInfo_1.PlayerInfo.isPaused);
        // move the t point along the path, 0 is the start and 1 is the end
        this.follower.t += this.stats.speed * this.speedModifier * delta;
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
            this.scene.metaScene.soundManager.damageSound.play();
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
        this.stats = __assign({}, this.config);
        this.speedModifier = 1;
        if (respawnHealth > 0)
            this.hp = respawnHealth;
        else
            this.hp = this.stats.hp(wave);
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
var playerInfo_1 = __webpack_require__(/*! ./playerInfo */ "./src/playerInfo.ts");
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
playerInfo_1.PlayerInfo.init();


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
    PlayerInfo.init = function () {
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var levelSeedFromQuery = urlParams.get('levelSeed');
        var levelSeed = levelSeedFromQuery
            ? levelSeedFromQuery
            : PlayerInfo.RNG.integer().toString();
        PlayerInfo.levelGeneratingSeed = levelSeed;
        PlayerInfo.LevelRNG = new Phaser.Math.RandomDataGenerator([levelSeed]);
        console.log("Seed for level generation: " + levelSeed);
    };
    PlayerInfo.waveHealthRegen = function () {
        PlayerInfo.regenProgress += config_1.PLAYER_HEALTH_REGEN;
        var restored = Math.floor(PlayerInfo.regenProgress);
        PlayerInfo.hp += restored;
        PlayerInfo.regenProgress -= restored;
    };
    PlayerInfo.money = 10;
    PlayerInfo.hp = 10;
    PlayerInfo.timeScale = 1;
    PlayerInfo.isPaused = false;
    PlayerInfo.RNG = new Phaser.Math.RandomDataGenerator();
    PlayerInfo.LevelRNG = new Phaser.Math.RandomDataGenerator();
    PlayerInfo.levelGeneratingSeed = "";
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
        this.pauseButton = new PauseButton(this, xLeft - 55, 475);
        this.muteButton = new MuteMusicButton(this, xRight + 55, 475);
        this.buyTowerIcons = [];
        var towerTypeIndex = 0;
        for (var _i = 0, TOWER_CONFIGS_1 = config_1.TOWER_CONFIGS; _i < TOWER_CONFIGS_1.length; _i++) {
            var towerConfig = TOWER_CONFIGS_1[_i];
            this.buyTowerIcons.push(new BuyTowerIcon(this, w / 2, 110 + 70 * towerTypeIndex, towerConfig));
            towerTypeIndex++;
        }
        var pad = 3;
        this.slowSpeedText = this.add.text(xLeft + 20, 465, ">Slow<", {
            fontSize: '20px',
            backgroundColor: "#000",
            padding: { left: pad, right: pad, top: pad, bottom: pad }
        });
        this.fastSpeedText = this.add.text(xLeft + 20, 490, "Fast", {
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
        delta *= playerInfo_1.PlayerInfo.timeScale * (+!playerInfo_1.PlayerInfo.isPaused);
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
            text += "Speed: " + (enemy.stats.speed * 60000 * enemy.speedModifier).toPrecision(2) + "\n";
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
            this.hudScene.metaScene.soundManager.buildSound.play();
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
var UIButton = /** @class */ (function () {
    function UIButton(scene, x, y, spriteInfo, func) {
        this.scene = scene;
        this.spriteContainer = scene.add.container(x, y);
        this.baseSprite = this.scene.add.sprite(0, 0, spriteInfo.baseName, spriteInfo.baseIndex);
        this.altSprite = this.scene.add.sprite(0, 0, spriteInfo.altName, spriteInfo.altIndex);
        this.spriteContainer.setSize(this.baseSprite.width, this.baseSprite.height);
        this.spriteContainer.setInteractive();
        this.altSprite.setVisible(false);
        this.spriteContainer.add(this.baseSprite);
        this.spriteContainer.add(this.altSprite);
        this.spriteContainer.on('pointerdown', func);
    }
    UIButton.prototype.toggleSprite = function () {
        this.baseSprite.setVisible(!this.baseSprite.visible);
        this.altSprite.setVisible(!this.altSprite.visible);
    };
    return UIButton;
}());
var PauseButton = /** @class */ (function (_super) {
    __extends(PauseButton, _super);
    function PauseButton(scene, x, y) {
        var _this = _super.call(this, scene, x, y, {
            baseName: 'buttonIcons',
            baseIndex: 1,
            altName: 'buttonIcons',
            altIndex: 2
        }, function () {
            _this.toggleSprite();
            playerInfo_1.PlayerInfo.isPaused = !playerInfo_1.PlayerInfo.isPaused;
        }) || this;
        return _this;
    }
    return PauseButton;
}(UIButton));
var MuteMusicButton = /** @class */ (function (_super) {
    __extends(MuteMusicButton, _super);
    function MuteMusicButton(scene, x, y) {
        var _this = _super.call(this, scene, x, y, {
            baseName: 'buttonIcons',
            baseIndex: 3,
            altName: 'buttonIcons',
            altIndex: 4
        }, function () {
            _this.toggleSprite();
            var music = _this.scene.metaScene.soundManager.music;
            if (music.isPlaying)
                music.pause();
            else
                music.play();
        }) || this;
        return _this;
    }
    return MuteMusicButton;
}(UIButton));


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
var soundManager_1 = __webpack_require__(/*! ../soundManager */ "./src/soundManager.ts");
var animationsConfig_1 = __webpack_require__(/*! ../animationsConfig */ "./src/animationsConfig.ts");
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
        _this.soundManager = new soundManager_1.SoundManager(_this);
        return _this;
    }
    MetaScene.prototype.create = function () {
        this.createAnimations();
        this.activeScene = this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.scene.start("hudScene");
        this.soundManager.addSounds();
        console.log("Current game version: " + this.cache.text.get("gameVersion"));
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
        this.soundManager.loadSounds();
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
        this.load.spritesheet('buttonIcons', 'button_icons.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('particle_red', 'particle_red.png');
        this.load.spritesheet('portalFrom', 'portal_from.png', { frameWidth: 40, frameHeight: 40 });
        this.load.spritesheet('portalTo', 'portal_to.png', { frameWidth: 40, frameHeight: 40 });
        this.load.text("gameVersion", "./version.txt");
    };
    MetaScene.prototype.createAnimations = function () {
        for (var _i = 0, animationsConfig_2 = animationsConfig_1.animationsConfig; _i < animationsConfig_2.length; _i++) {
            var cfg = animationsConfig_2[_i];
            this.anims.create({
                key: cfg.key,
                frames: this.anims.generateFrameNumbers(cfg.spriteSheet, cfg.frames),
                frameRate: cfg.frameRate,
                repeat: -1
            });
        }
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
        delta *= playerInfo_1.PlayerInfo.timeScale * (+!playerInfo_1.PlayerInfo.isPaused);
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

/***/ "./src/soundManager.ts":
/*!*****************************!*\
  !*** ./src/soundManager.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundManager = void 0;
var SoundManager = /** @class */ (function () {
    function SoundManager(metaScene) {
        this.metaScene = metaScene;
    }
    SoundManager.prototype.loadSounds = function () {
        this.metaScene.load.audio("main_music", './sounds/gamejam_LD48.ogg');
        this.metaScene.load.audio('build_sound', './sounds/build.wav');
        this.metaScene.load.audio('damage_sound', './sounds/damage.wav');
        this.metaScene.load.audio('basic_shoot', './sounds/turretshot.wav');
        this.metaScene.load.audio('multishot_shoot', './sounds/multishot.wav');
        this.metaScene.load.audio('levelup_sound', './sounds/levelup.wav');
        this.metaScene.load.audio('sniper_shoot', './sounds/sniper.wav');
    };
    SoundManager.prototype.addSounds = function () {
        this.music = this.metaScene.sound.add("main_music", { "loop": true, "volume": 0.07 });
        this.music.play();
        this.buildSound = this.metaScene.sound.add('build_sound', { 'loop': false, 'volume': 1 });
        this.damageSound = this.metaScene.sound.add('damage_sound', { 'loop': false, 'volume': 0.15 });
        this.shootSound = this.metaScene.sound.add('basic_shoot', { 'loop': false, 'volume': 0.03 });
        this.multishotSound = this.metaScene.sound.add('multishot_shoot', { 'loop': false, 'volume': 0.03 });
        this.levelupSound = this.metaScene.sound.add('levelup_sound', { 'loop': false, 'volume': 0.02 });
        this.sniperSound = this.metaScene.sound.add('sniper_shoot', { 'loop': false, 'volume': 0.02 });
    };
    return SoundManager;
}());
exports.SoundManager = SoundManager;


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
    return array[Math.floor(playerInfo_1.PlayerInfo.LevelRNG.frac() * array.length)];
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
        _this.particles = _this.scene.add.particles('particle_red');
        _this.emitter = _this.particles.createEmitter({
            lifespan: 200,
            blendMode: 'ADD',
            speed: 0,
            scale: { start: 0, end: 1 },
            on: false
        });
        return _this;
    }
    Tower.prototype.levelUp = function () {
        this.level++;
        if (this.scene.input.enabled) {
            this.scene.metaScene.soundManager.levelupSound.play();
            this.emitter.explode(20, this.xCoord, this.yCoord); // this.x doesn't work btw
        }
    };
    Tower.prototype.make = function (i, j, innerTowerSceneKey, config, towerClassName) {
        var _this = this;
        this.config = config;
        this.stats = this.config;
        this.towerTurret = new towerClassName(this.scene, this.config, this);
        this.towerTurret.setActive(true);
        this.towerTurret.setVisible(true);
        this.xCoord = i * terrain_1.TILE_SIZE + terrain_1.TILE_SIZE / 2;
        this.yCoord = j * terrain_1.TILE_SIZE + terrain_1.TILE_SIZE / 2;
        this.towerBase = this.scene.add.sprite(this.xCoord, this.yCoord, 'towerbases', this.config.spriteBase);
        this.towerBase.setTint(this.config.tintBase);
        this.add(this.towerBase);
        this.towerMid = this.scene.add.sprite(this.xCoord, this.yCoord, 'towermids', this.config.spriteMid);
        this.towerMid.setTint(this.config.tintMid);
        this.towerMid.anims.play({
            key: "towerMids_spin"
        });
        this.add(this.towerMid);
        this.rangeIndicator = this.scene.add.circle(this.xCoord, this.yCoord, config.range(1), config_2.RANGE_INDICATOR_CONFIG.colour, config_2.RANGE_INDICATOR_CONFIG.alpha);
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
        this.healthBar.make(this.xCoord, this.yCoord + terrain_1.TILE_SIZE / 2 - 8, terrain_1.TILE_SIZE - 14);
        this.add(this.healthBar);
        this.level = 1;
        var pad = 3;
        this.levelText = this.scene.add.text(this.xCoord + 15, this.yCoord - 4, "" + this.level, {
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
        delta *= playerInfo_1.PlayerInfo.timeScale * (+!playerInfo_1.PlayerInfo.isPaused);
        this.towerTurret.update(delta);
        this.healthBar.health += config_1.TOWER_HEALTH_REGEN * delta;
        if (this.healthBar.health >= 1.0) {
            this.healthBar.levelUp();
            this.levelUp();
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
            var _a = this.predictEnemyPositionForShot(enemy), xPred = _a[0], yPred = _a[1];
            var angle = Phaser.Math.Angle.Between(this.x, this.y, xPred, yPred);
            var damage = this.parent.stats.damage(this.parent.level);
            this.scene.addBullet(this.x, this.y, angle, damage, this.parent.stats.range(this.parent.level), this.parent.stats.bulletSpeedMod);
            this.fireAnimation(angle, damage);
            if (this.scene.input.enabled) {
                if (this.parent.stats.name === "Sniper") // temporary hack
                    this.scene.metaScene.soundManager.sniperSound.play();
                else
                    this.scene.metaScene.soundManager.shootSound.play();
            }
            return true;
        }
        return false;
    };
    _TowerTurret.prototype.predictEnemyPositionForShot = function (enemy) {
        // Approximate where the enemy is going to be when the bullet hits it.
        // Compute the time to hit enemy when aiming directly at it
        var distance = Phaser.Math.Distance.Between(this.x, this.y, enemy.x, enemy.y);
        var speed = this.parent.stats.bulletSpeedMod * this.parent.stats.range(this.parent.level);
        var msToHit = distance / speed * 1000;
        // Shoot at the point where the enemy will be after msToHit milliseconds.
        var t2 = enemy.follower.t + enemy.stats.speed * msToHit;
        var res = this.scene.terrain.path.getPoint(Math.min(t2, 1));
        return [res.x + enemy.xOffset, res.y + enemy.yOffset];
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
                    this.scene.metaScene.soundManager.multishotSound.play(); // this should be in config if this were done properly
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnNDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvdW5kTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVycmFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90b3dlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNB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UUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUUvQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFB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QztZQUV2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFTyxrQ0FBWSxHQUFwQixVQUFxQixTQUFTO1FBQzFCLElBQUksWUFBWSxHQUFHLEVBQUU7UUFDckIsS0FBaUIsVUFBYSxFQUFiLHdDQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUUsRUFBRyx5Q0FBeUM7WUFBeEUsSUFBSSxLQUFLO1lBQ1QsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6Qiw0QkFBNEI7WUFDNUIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEYsT0FBTyxTQUFTO1NBQ25CO2FBQU07WUFDSCxPQUFPLElBQUk7U0FDZDtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUF4SVksa0NBQVciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0IGNvbnN0IGFuaW1hdGlvbnNDb25maWcgPSBbXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnd2Vha0VuZW15X3dhbGsnLFxyXG4gICAgICAgIHNwcml0ZVNoZWV0OiAnd2Vha0VuZW15JyxcclxuICAgICAgICBmcmFtZXM6IHtzdGFydDogMCwgZW5kOiA3fSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2Zhc3RFbmVteV93YWxrJyxcclxuICAgICAgICBzcHJpdGVTaGVldDogJ2Zhc3RFbmVteScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogN30sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdmYXRFbmVteV93YWxrJyxcclxuICAgICAgICBzcHJpdGVTaGVldDogJ2ZhdEVuZW15JyxcclxuICAgICAgICBmcmFtZXM6IHtzdGFydDogMCwgZW5kOiA5fSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3NwbGl0dGVyRmF0RW5lbXlfd2FsaycsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICdzcGxpdHRlckZhdEVuZW15JyxcclxuICAgICAgICBmcmFtZXM6IHtzdGFydDogMCwgZW5kOiA5fSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ2FybW91cmVkRW5lbXlfd2FsaycsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICdhcm1vdXJlZEVuZW15JyxcclxuICAgICAgICBmcmFtZXM6IHtzdGFydDogMCwgZW5kOiA3fSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3NwbGl0dGVyQmlnRW5lbXlfd2FsaycsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICdzcGxpdHRlckJpZ0VuZW15JyxcclxuICAgICAgICBmcmFtZXM6IHtzdGFydDogMCwgZW5kOiA3fSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3NwbGl0dGVyU21hbGxFbmVteV93YWxrJyxcclxuICAgICAgICBzcHJpdGVTaGVldDogJ3NwbGl0dGVyU21hbGxFbmVteScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogN30sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdwb3J0YWxGcm9tX3NwaW4nLFxyXG4gICAgICAgIHNwcml0ZVNoZWV0OiAncG9ydGFsRnJvbScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogN30sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdwb3J0YWxUb19zcGluJyxcclxuICAgICAgICBzcHJpdGVTaGVldDogJ3BvcnRhbFRvJyxcclxuICAgICAgICBmcmFtZXM6IHtzdGFydDogMCwgZW5kOiA3fSxcclxuICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3Rvd2VyTWlkc19zcGluJyxcclxuICAgICAgICBzcHJpdGVTaGVldDogJ3Rvd2VybWlkcycsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogMX0sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuXSIsImltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4vcGxheWVySW5mb1wiXHJcbmltcG9ydCB7VERTY2VuZX0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFJBRElVUyA9IDEwXHJcblxyXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcblxyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuXHJcbiAgICBkeDogbnVtYmVyID0gMFxyXG4gICAgZHk6IG51bWJlciA9IDBcclxuICAgIGxpZmVzcGFuOiBudW1iZXIgPSAwXHJcbiAgICBzcGVlZDogbnVtYmVyXHJcbiAgICBkYW1hZ2U6IGludGVnZXJcclxuXHJcbiAgICBidWxsZXRJbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXHJcbiAgICBwYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlclxyXG4gICAgZW1pdHRlcjogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5keCA9IDA7XHJcbiAgICAgICAgdGhpcy5keSA9IDA7XHJcbiAgICAgICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg2MDAsIDEpO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgwLCAwLCAnYnVsbGV0JylcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJ1bGxldEltYWdlKVxyXG5cclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMuc2NlbmUuYWRkLnBhcnRpY2xlcygncGFydGljbGVfcmVkJylcclxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLnBhcnRpY2xlcy5jcmVhdGVFbWl0dGVyKHtcclxuICAgICAgICAgICAgc3BlZWQ6IDEwMCxcclxuICAgICAgICAgICAgc2NhbGU6IHtzdGFydDogMC4zLCBlbmQ6IDB9LFxyXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnLFxyXG4gICAgICAgICAgICBsaWZlc3BhbjogMTAwLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoeCwgeSwgYW5nbGUsIGRhbWFnZSwgdG93ZXJSYW5nZSwgc3BlZWRNb2QsIHNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKHRvd2VyUmFuZ2UgKiBzcGVlZE1vZCwgMSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgICAvLyAgQnVsbGV0cyBmaXJlIGZyb20gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuIHRvIHRoZSBnaXZlbiB4L3lcclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlLnNldFBvc2l0aW9uKHgsIHkpO1xyXG5cclxuICAgICAgICAvLyAgd2UgZG9uJ3QgbmVlZCB0byByb3RhdGUgdGhlIGJ1bGxldHMgYXMgdGhleSBhcmUgcm91bmRcclxuICAgICAgICAvLyAgdGhpcy5zZXRSb3RhdGlvbihhbmdsZSk7XHJcbiAgICAgICAgLy8gVE9ETzogZmlndXJlIG91dCBob3cgdG8gYnJpbmcgdG8gZnJvbnRcclxuXHJcbiAgICAgICAgdGhpcy5keCA9IE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICB0aGlzLmR5ID0gTWF0aC5zaW4oYW5nbGUpO1xyXG5cclxuICAgICAgICB0aGlzLmxpZmVzcGFuID0gMTAwMCAvIHNwZWVkTW9kO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZmxvdygyMCkgIC8vIGFyZ3VtZW50OiBmcmVxdWVuY3kgKDAgPSBhbHdheXMpXHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5zdGFydEZvbGxvdyh0aGlzLmJ1bGxldEltYWdlKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMuYnVsbGV0SW1hZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AodGhpcy5wYXJ0aWNsZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbkJ1bGxldEVuZCgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBoaXQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zY2VuZS5zY2VuZS5pc1Zpc2libGUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZXhwbG9kZSgxMCwgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25CdWxsZXRFbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZSAqICggKyAhUGxheWVySW5mby5pc1BhdXNlZCk7XHJcblxyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gLT0gZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueCArPSB0aGlzLmR4ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS55ICs9IHRoaXMuZHkgKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgKHRoaXMuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkuc2V0Q2lyY2xlKFJBRElVUywgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25CdWxsZXRFbmQoKVxyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuc3RvcCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGVuZW0gZnJvbSBcIi4vZW5lbXlcIjtcclxuXHJcbi8vIGVuZW15IGRhbWFnZSAqIERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiA9IGhvdyBtdWNoIGhlYWx0aCB0b3dlciBsb3Nlc1xyXG4vLyAodG93ZXIgaGVhbHRoIGlzIGZyb20gMCB0byAxKVxyXG5leHBvcnQgY29uc3QgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGID0gMC4yXHJcblxyXG5leHBvcnQgY29uc3QgVE9XRVJfSEVBTFRIX1JFR0VOID0gMC4wMDAwMSAqIDJcclxuXHJcbmV4cG9ydCBjb25zdCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUgPSAzMDAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9IRUFMVEhfUkVHRU46IG51bWJlciA9IDA7ICAvLyBob3cgbXVjaCBoZWFsdGggcGVyIHdhdmUsIGNhbiBiZSA8IDFcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHID0ge1xyXG4gICAgJ2NvbG91cic6IDB4YmJiYmZmLFxyXG4gICAgJ2FscGhhJzogMjEwLFxyXG4gICAgJ2VkZ2VDb2xvdXInOiAweDgwODBmZixcclxuICAgICdlZGdlV2lkdGgnOiA0XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV2F2ZUNvbmZpZyA9IHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gb3V0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEhvdyBtdWNoIHRpbWUgYmV0d2VlbiBjb25zZWN1dGl2ZSBzcGF3bnMgaW4gYSB3YXZlXHJcbiAgICBvdXRlckVuZW15SW50ZXJ2YWw6IDUwMCxcclxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBpbiBhIHdhdmVcclxuICAgIG91dGVyV2F2ZURhbmdlcjogKHdhdmUpID0+ICh3YXZlICsgMSkgICogMTAsXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBpbm5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gSG93IG11Y2ggZGFuZ2VyIHBlciBzZWNvbmQgaXMgZ2VuZXJhdGVlIGluIGlubmVyIGRlcHRocz9cclxuICAgIGRhbmdlclBlclNlYzogKGxldmVsKSA9PiAxMCpsZXZlbCxcclxuICAgIC8vIFRvIHdoYXQgd2F2ZSBudW1iZXIgZG9lcyBhIHRvd2VyIGxldmVsIGNvcnJlc3BvbmQ/IChmb3IgZW5lbXkgc2NhbGluZylcclxuICAgIGxldmVsVG9XYXZlOiAobGV2ZWwpID0+IDMgKiBsZXZlbCxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRW5lbXlDb25maWcgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcgIC8vIG11c3QgYmUgc2FtZSBhcyBjb25maWcgb2JqZWN0IG5hbWVcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgIC8vIG5hbWUgdG8gYmUgZGlzcGxheWVkIHRvIHBsYXllclxyXG4gICAgY2xhc3M6IGFueSAgLy8gY2xhc3Mgb2YgdGhlIGVuZW15IGFzIGRlZmluZWQgaW4gLi9lbmVteS50c1xyXG4gICAgaHA6IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBjYW4gc2NhbGUgd2l0aCB3YXZlXHJcbiAgICBzcGVlZDogbnVtYmVyICAvLyBmcmFjdGlvbiBvZiBwYXRoXHJcbiAgICBtb25leTogaW50ZWdlciAgLy8gb24ta2lsbCByZXdhcmRcclxuICAgIGRhbWFnZTogaW50ZWdlciAgLy8gZGFtYWdlIGRlYWx0IG9uIHJlYWNoaW5nIGVuZFxyXG4gICAgYXJtb3VyOiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gZmxhdCByZWR1Y3Rpb24gb2YgaW5jb21pbmcgZGFtYWdlXHJcbiAgICBkYW5nZXI6IGludGVnZXIgIC8vIGZvciBjYWxjdWxhdGluZyB3YXZlIGRpZmZpY3VsdHlcclxuICAgIHNwcml0ZU5hbWU6IHN0cmluZyAgLy8gc3ByaXRlIGFzIGltcG9ydGVkIGluIG1ldGFTY2VuZS5wcmVsb2FkXHJcbiAgICB0aW50OiBpbnRlZ2VyXHJcbiAgICBzcGxpdD86IHsgIC8vIG9wdGlvbmFsIHNwbGl0IGluZm9cclxuICAgICAgICBjZmc6IEVuZW15Q29uZmlnICAvLyBUT0RPOiBtYWtlIHNwbGl0IGludG8gbXVsdGlwbGUgdHlwZXMgcG9zc2libGU/XHJcbiAgICAgICAgYW1vdW50OiBpbnRlZ2VyXHJcbiAgICB9XHJcbiAgICBtaW5XYXZlOiBpbnRlZ2VyICAvLyBmaXJzdCB3YXZlIHRoaXMgY2FuIHNwYXduLCAtMSB0byBuZXZlciBzcGF3blxyXG4gICAgYmx1cmI/OiBzdHJpbmcgIC8vIHNob3duIHRvIHBsYXllclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2VhazogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdXZWFrJyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdOb3JtYWwnLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5XZWFrRW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTUgKyAxNCood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcclxuICAgICdtb25leSc6IDEsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3dlYWtFbmVteScsXHJcbiAgICAnZGFuZ2VyJzogMTAsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAwLFxyXG4gICAgJ2JsdXJiJzogJ1RvbyBjdXRlIHRvIGtpbGwuLi4gc3VyZWx5LidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZhdDogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdGYXQnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ0Nob25rJyxcclxuICAgICdjbGFzcyc6IGVuZW0uRmF0RW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTAwICsgNzAgKiAod2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyA0MDAwMCxcclxuICAgICdtb25leSc6IDMsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAxMDAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdmYXRFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAxNCxcclxuXHQnYmx1cmInOiAnTGFyZ2UgYW5kIGluIGNoYXJnZS4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBcm1vdXJlZDogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdBcm1vdXJlZCcsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnQXJtb3VyZWQnLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5Bcm1vdXJlZEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDIwICsgMTQqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMzAwMDAsXHJcbiAgICAnbW9uZXknOiAyLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IE1hdGgubWluKDMgKyAoTWF0aC5mbG9vcih3YXZlLzUpKSwxNCksXHJcbiAgICAnZGFuZ2VyJzogMTAwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnYXJtb3VyZWRFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAxMCxcclxuXHQnYmx1cmInOiAnVGhlIGhhdCBpcyBzdXJwcmlzaW5nbHkgc3R1cmR5LidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZhc3Q6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnRmFzdCcsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BlZWR5JyxcclxuICAgICdjbGFzcyc6IGVuZW0uRmFzdEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwICsgMTAqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMTAwMDAsXHJcbiAgICAnbW9uZXknOiAxLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMzAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdmYXN0RW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogNixcclxuXHQnYmx1cmInOiAnVGhlIGJvb3RzIGFyZW5cXCd0IGp1c3QgZm9yIHNob3chJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJTbWFsbDogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdTcGxpdHRlclNtYWxsJyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGxpdHRlciBiYWJ5JyxcclxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJTbWFsbEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwICsgOCood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcclxuICAgICdtb25leSc6IDAsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAyMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyU21hbGxFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAtMSxcclxuXHQnYmx1cmInOiAnQXd3LCBsb29rLCB0aGV5XFwncmUganVzdCBiYWJpZXMhJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJCaWc6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJCaWcnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1NwbGl0dGVyJyxcclxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJCaWdFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDIwKih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDMwMDAwLFxyXG4gICAgJ21vbmV5JzogMSxcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDMwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnc3BsaXR0ZXJCaWdFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ3NwbGl0Jzoge1xyXG4gICAgICAgICdjZmcnOiBTcGxpdHRlclNtYWxsLFxyXG4gICAgICAgICdhbW91bnQnOiAyXHJcbiAgICB9LFxyXG4gICAgJ21pbldhdmUnOiA4LFxyXG5cdCdibHVyYic6ICdFeWVzIHRvIG1lZXQgeW91LidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyRmF0OiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ1NwbGl0dGVyRmF0JyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdUaGUgQmlnIE9uZScsXHJcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyRmF0RW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTAwICsgNDAqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gNDAwMDAsXHJcbiAgICAnbW9uZXknOiAyLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMjAwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnc3BsaXR0ZXJGYXRFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ3NwbGl0Jzoge1xyXG4gICAgICAgICdjZmcnOiBTcGxpdHRlckJpZyxcclxuICAgICAgICAnYW1vdW50JzogMlxyXG4gICAgfSxcclxuICAgICdtaW5XYXZlJzogMTgsXHJcblx0J2JsdXJiJzogJ0V5ZXMgdG8gbWVldCB5b3UuLi4gdHdvLidcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgRU5FTVlfQ09ORklHUyA9IFtXZWFrLCBGYXQsIEFybW91cmVkLCBGYXN0LCBTcGxpdHRlckJpZywgU3BsaXR0ZXJTbWFsbCwgU3BsaXR0ZXJGYXRdXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgVG93ZXJDb25maWcgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmdcclxuICAgIGRhbWFnZTogKGludGVnZXIpID0+IG51bWJlclxyXG4gICAgZmlyZXJhdGU6IChpbnRlZ2VyKSA9PiBudW1iZXIgIC8vIG1pbGlzZWNvbmRzIGJldHdlZW4gZWFjaCBzaG90XHJcbiAgICByYW5nZTogKGludGVnZXIpID0+IG51bWJlclxyXG4gICAgbnVtVGFyZ2V0cz86IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBzZXQgZm9yIHRvd2VycyB0aGF0IHRhcmdldCBtdWx0aXBsZSBlbmVtaWVzXHJcbiAgICBidWxsZXRTcGVlZE1vZDogbnVtYmVyICAvLyBidWxsZXQgd2lsbCByZWFjaCByYW5nZSBpbiAxL2J1bGxldFNwZWVkTW9kIHNlY29uZHNcclxuICAgIHByaWNlOiBudW1iZXJcclxuICAgIHNwcml0ZUJhc2U6IGludGVnZXJcclxuICAgIHNwcml0ZU1pZDogaW50ZWdlclxyXG4gICAgc3ByaXRlVG9wOiBpbnRlZ2VyXHJcbiAgICB0aW50QmFzZTogaW50ZWdlclxyXG4gICAgdGludE1pZDogaW50ZWdlclxyXG4gICAgdGludFRvcDogaW50ZWdlclxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJhc2ljOiBUb3dlckNvbmZpZyA9IHtcclxuICAgICduYW1lJzogXCJCYXNpY1wiLFxyXG4gICAgJ2RhbWFnZSc6IGxldmVsID0+IDE1ICsgMzAgKiAobGV2ZWwtMSksXHJcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiAxMDAwLFxyXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gMTUwLFxyXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNCxcclxuICAgICdwcmljZSc6IDUsXHJcbiAgICAnc3ByaXRlQmFzZSc6IDAsXHJcbiAgICAnc3ByaXRlTWlkJzogMCxcclxuICAgICdzcHJpdGVUb3AnOiAwLFxyXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXHJcbiAgICAndGludE1pZCc6IDB4Njc1YTljLFxyXG4gICAgJ3RpbnRUb3AnOiAweGFhYWFmZixcclxuICAgICdkZXNjcmlwdGlvbic6IFwiTm90aGluZyBmYW5jeS4gRGFtYWdlIGdyb3dzIHdpdGggbGV2ZWwuXCIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU25pcGVyOiBUb3dlckNvbmZpZyA9IHtcclxuICAgICduYW1lJzogXCJTbmlwZXJcIixcclxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiA1MCArIDEyMCAqIChsZXZlbC0xKSxcclxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDQwMDAsXHJcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiAyMDAgKyAzNSAqIGxldmVsLFxyXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNSxcclxuICAgICdwcmljZSc6IDEwLFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMSxcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDNhNzE1ZCxcclxuICAgICd0aW50VG9wJzogMHg0OGFjODEsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIkxvbmcgcmFuZ2UsIGJ1dCBmaXJlcyBzbG93bHkuIERhbWFnZSBhbmQgcmFuZ2UgZ3JvdyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE11bHRpc2hvdDogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiTXVsdGlzaG90XCIsXHJcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMTUgKyAyMCoobGV2ZWwtMSksXHJcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiAxMDAwLFxyXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gOTUgKyAzKihsZXZlbC0xKSxcclxuICAgICdudW1UYXJnZXRzJzogbGV2ZWwgPT4gMyArIE1hdGguZmxvb3IobGV2ZWwgLyAyKSxcclxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXHJcbiAgICAncHJpY2UnOiA3LFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMixcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDdmNGQ2MSxcclxuICAgICd0aW50VG9wJzogMHhhYTRlNjEsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIkNhbiBzaG9vdCBhdCBtdWx0aXBsZSBlbmVtaWVzIGF0IG9uY2UuIERhbWFnZSwgcmFuZ2UsIGFuZCBudW1iZXIgb2YgdGFyZ2V0cyBncm93IHdpdGggbGV2ZWwuXCIsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUT1dFUl9DT05GSUdTID0gW0Jhc2ljLCBNdWx0aXNob3QsIFNuaXBlcl0iLCIvLyBpbXBvcnQgeyBHcmlkUG9zaXRpb24sIFBvc2l0aW9uLCBUZXJyYWluIH0gZnJvbSBcIi4vdGVycmFpblwiO1xyXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcclxuaW1wb3J0ICogYXMgY2ZnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBIdWRTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9odWRTY2VuZVwiO1xyXG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvbWV0YVNjZW5lXCI7XHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEVuZW15QmFzZSBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUge1xyXG4gICAgc3RhdHM6IGNmZy5FbmVteUNvbmZpZztcclxuICAgIGNvbmZpZzogY2ZnLkVuZW15Q29uZmlnOyAgLy8gT24gc3Bhd24sIHN0YXRzIGFyZSBjb3BpZWQgZnJvbSBjb25maWdcclxuXHJcbiAgICBmb2xsb3dlcjogYW55XHJcbiAgICBocDogaW50ZWdlclxyXG4gICAgeU9mZnNldDogbnVtYmVyID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKC0yMCwgMjApO1xyXG4gICAgeE9mZnNldDogbnVtYmVyID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKC0yMCwgMjApO1xyXG4gICAgc2NlbmU6IFREU2NlbmUgLy8gdHlwZSBhc3NlcnRpb25cclxuICAgIHNwZWVkTW9kaWZpZXI6IG51bWJlciA9IDE7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBzdGF0cykge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCBzdGF0cy5zcHJpdGVOYW1lKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBzdGF0c1xyXG4gICAgICAgIHRoaXMuc3RhdHMgPSB7Li4uc3RhdHN9ICAvLyBzaGFsbG93IGNvcHksIGlkayBob3cgdG8gZG8gZGVlcCBjb3B5XHJcbiAgICAgICAgdGhpcy5mb2xsb3dlciA9IHsgdDogMCwgdmVjOiBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigpIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUuaW5wdXQuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgICh0aGlzLnNjZW5lLnNjZW5lLmdldCgnaHVkU2NlbmUnKSBhcyBIdWRTY2VuZSkuc2V0RGVzY3JpcHRpb25FbmVteSh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZSAqICggKyAhUGxheWVySW5mby5pc1BhdXNlZCk7XHJcbiAgICAgICAgLy8gbW92ZSB0aGUgdCBwb2ludCBhbG9uZyB0aGUgcGF0aCwgMCBpcyB0aGUgc3RhcnQgYW5kIDEgaXMgdGhlIGVuZFxyXG4gICAgICAgIHRoaXMuZm9sbG93ZXIudCArPSB0aGlzLnN0YXRzLnNwZWVkICogdGhpcy5zcGVlZE1vZGlmaWVyICogZGVsdGE7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgbmV3IHggYW5kIHkgY29vcmRpbmF0ZXMgaW4gdmVjXHJcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBhdGguZ2V0UG9pbnQodGhpcy5mb2xsb3dlci50LCB0aGlzLmZvbGxvd2VyLnZlYyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnZlYy54ID4gdGhpcy54IC0gdGhpcy54T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA8IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGVuZW15IHggYW5kIHkgdG8gdGhlIG5ld2x5IG9idGFpbmVkIHggYW5kIHlcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZm9sbG93ZXIudmVjLnggKyB0aGlzLnhPZmZzZXQsIHRoaXMuZm9sbG93ZXIudmVjLnkgKyB0aGlzLnlPZmZzZXQpO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0aCwgcmVtb3ZlIHRoZSBlbmVteVxyXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnQgPj0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWNoRW5kKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxXHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDBcclxuICAgICAgICB0aGlzLnNjYWxlID0gMVxyXG4gICAgfVxyXG5cclxuICAgIHJlYWNoRW5kKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIucmVtYWluaW5nRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaHVkU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcImh1ZFNjZW5lXCIpIGFzIEh1ZFNjZW5lXHJcblxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmhwIC09IHRoaXMuc3RhdHMuZGFtYWdlO1xyXG4gICAgICAgICAgICBodWRTY2VuZS5ocFJlZG5lc3MgPSAxXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZXRhU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcIm1ldGFTY2VuZVwiKSBhcyBNZXRhU2NlbmVcclxuICAgICAgICAgICAgbWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKCkuY2FtZXJhcy5tYWluLnNoYWtlKDIwMCwgMC4wMDUpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLnNvdW5kTWFuYWdlci5kYW1hZ2VTb3VuZC5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlc3Bhd24odGhpcy5zdGF0cywgdGhpcy5ocCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5lbmVteUVuZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjayh0aGlzLnN0YXRzLmRhbWFnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRPblBhdGgod2F2ZSwgcmVzcGF3bkhlYWx0aCwgc3RhcnRfdCA9IDApIHtcclxuICAgICAgICAvLyBzZXQgdGhlIHQgcGFyYW1ldGVyIGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxyXG4gICAgICAgIHRoaXMuZm9sbG93ZXIudCA9IHN0YXJ0X3Q7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHMgPSB7Li4udGhpcy5jb25maWd9O1xyXG4gICAgICAgIHRoaXMuc3BlZWRNb2RpZmllciA9IDE7XHJcblxyXG4gICAgICAgIGlmIChyZXNwYXduSGVhbHRoID4gMClcclxuICAgICAgICAgICAgdGhpcy5ocCA9IHJlc3Bhd25IZWFsdGg7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmhwID0gdGhpcy5zdGF0cy5ocCh3YXZlKTtcclxuXHJcbiAgICAgICAgdGhpcy50aW50ID0gdGhpcy5zdGF0cy50aW50O1xyXG5cclxuICAgICAgICAvLyBnZXQgeCBhbmQgeSBvZiB0aGUgZ2l2ZW4gdCBwb2ludFxyXG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KHRoaXMuZm9sbG93ZXIudCwgdGhpcy5mb2xsb3dlci52ZWMpO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHggYW5kIHkgb2Ygb3VyIGVuZW15IHRvIHRoZSByZWNlaXZlZCBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmZvbGxvd2VyLnZlYy54LCB0aGlzLmZvbGxvd2VyLnZlYy55KTtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lUmF0ZSA9IE1hdGgubWluKDYwLCB0aGlzLnN0YXRzLnNwZWVkICogNDAwMDAgKiAxNSlcclxuICAgICAgICBpZiAodGhpcy5zdGF0cy5zcHJpdGVOYW1lID09PSBcImZhdEVuZW15XCIgfHwgdGhpcy5zdGF0cy5zcHJpdGVOYW1lID09PSBcInNwbGl0dGVyRmF0RW5lbXlcIikgeyAvLyBoYWNrXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZSAqPSAwLjVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogYCR7dGhpcy5zdGF0cy5zcHJpdGVOYW1lfV93YWxrYCxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiBmcmFtZVJhdGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlRGFtYWdlKGRhbWFnZTogaW50ZWdlcikge1xyXG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlIC0gdGhpcy5zdGF0cy5hcm1vdXIodGhpcy5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZSk7XHJcblxyXG4gICAgICAgIC8vIGlmIGhwIGRyb3BzIGJlbG93IDAgd2UgZGVhY3RpdmF0ZSB0aGlzIGVuZW15XHJcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWF0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGgoKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlYXRoQWJpbGl0eSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRzLnNwbGl0KVxyXG4gICAgICAgICAgICB0aGlzLm9uRGVhdGhTcGxpdCgpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApIHsgIC8vIEFkZCBnb2xkIGluIGJhc2UgbGF5ZXIgb25seVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmRlYWREYW5nZXIgKz0gdGhpcy5zdGF0cy5kYW5nZXJcclxuICAgICAgICAgICAgUGxheWVySW5mby5tb25leSArPSB0aGlzLnN0YXRzLm1vbmV5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcyxcclxuICAgICAgICAgICAgYWxwaGE6IDAsXHJcbiAgICAgICAgICAgIGFuZ2xlOiBQbGF5ZXJJbmZvLlJORy5zaWduKCkgKiAxODAsXHJcbiAgICAgICAgICAgIHNjYWxlOiAwLjUsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSg2MDAsIDgwMCksXHJcbiAgICAgICAgICAgIGVhc2U6ICdQb3dlcjInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUuZW5lbWllc1NsYWluKys7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWF0aFNwbGl0KCkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRzLnNwbGl0LmFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdFbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnN0YXRzLnNwbGl0LmNmZy5uYW1lXS5nZXQoKVxyXG4gICAgICAgICAgICBuZXdFbmVteS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICBuZXdFbmVteS5zZXRBY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmRlYWREYW5nZXIgLT0gdGhpcy5zdGF0cy5zcGxpdC5jZmcuZGFuZ2VyO1xyXG4gICAgICAgICAgICBuZXdFbmVteS5zdGFydE9uUGF0aCh0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlLCAwLCB0aGlzLmZvbGxvd2VyLnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlYXRoQWJpbGl0eSgpIHsgIC8vIG92ZXJyaWRlIHRoaXMgZm9yIHNwZWNpYWwgb24tZGVhdGggYWJpbGl0aWVzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFrRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLldlYWspXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYXRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuRmF0KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXJtb3VyZWRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuQXJtb3VyZWQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYXN0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkZhc3QpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGxpdHRlckJpZ0VuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlckJpZylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwbGl0dGVyU21hbGxFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJTbWFsbClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwbGl0dGVyRmF0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyRmF0KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXHJcbmltcG9ydCB7IFRJTEVfU0laRSB9IGZyb20gXCIuL3RlcnJhaW5cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgc3RhdGljIEhFQUxUSF9DT0xPUiA9IDB4ZjhmZjM2IC8vMHhmZjQ0NDRcclxuICAgIHN0YXRpYyBIRUFMVEhfTE9TU19DT0xPUiA9IDB4N2Q3ZDdkIC8vIDB4NDRmZjQ0XHJcblxyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuXHJcbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlciA9IDEgIC8vIDAgdG8gMVxyXG4gICAgc2xvd0hlYWx0aDogbnVtYmVyXHJcblxyXG4gICAgYmdCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuICAgIGhlYWx0aEJhcjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxyXG4gICAgc2xvd0hlYWx0aEJhcjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxyXG5cclxuICAgIHg6IG51bWJlclxyXG4gICAgeTogbnVtYmVyXHJcbiAgICB3aWR0aDogbnVtYmVyXHJcbiAgICBtYXhIZWFsdGg6IG51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDApXHJcbiAgICB9XHJcblxyXG4gICAgbWFrZSh4LCB5LCB3aWR0aCwgaGVhbHRoPTApIHtcclxuICAgICAgICB0aGlzLnggPSB4XHJcbiAgICAgICAgdGhpcy55ID0geVxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aFxyXG5cclxuICAgICAgICAvLyBoZWFsdGggYmFyIGJhc2UvYmFja2dyb3VuZFxyXG4gICAgICAgIHRoaXMuYmdCYXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoMCwgMCwgd2lkdGggKyA0LCA2LCAweDAwMDAwMClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJnQmFyKVxyXG5cclxuICAgICAgICAvLyB2aXN1YWxpemF0aW9uIG9mIGhlYWx0aCBsb3NzZXNcclxuICAgICAgICB0aGlzLnNsb3dIZWFsdGhCYXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICAgIHdpZHRoLCA0LFxyXG4gICAgICAgICAgICBIZWFsdGhCYXIuSEVBTFRIX0xPU1NfQ09MT1IsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuc2xvd0hlYWx0aEJhcilcclxuICAgICAgICBcclxuICAgICAgICAvLyBoZWFsdGggYmFyIGl0c2VsZlxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgICB3aWR0aCwgNCxcclxuICAgICAgICAgICAgSGVhbHRoQmFyLkhFQUxUSF9DT0xPUixcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gaGVhbHRoXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gaGVhbHRoXHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlYWx0aChoKSB7XHJcbiAgICAgICAgdGhpcy5faGVhbHRoID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgaCkpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlYWx0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVhbHRoXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxldmVsVXAoKSB7XHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gMDtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgY29uc3QgY29lZiA9IE1hdGgucG93KDAuOTksIGRlbHRhLzEwMDAgKiA2MClcclxuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSBjb2VmICogdGhpcy5zbG93SGVhbHRoICsgKDEgLSBjb2VmKSAqIHRoaXMuaGVhbHRoXHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuaGVhbHRoXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2xvd0hlYWx0aFxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcidcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gJy4vcGxheWVySW5mbyc7XHJcbmltcG9ydCB7IEh1ZFNjZW5lLCBIVURfV0lEVEggfSBmcm9tICcuL3NjZW5lcy9odWRTY2VuZSc7XHJcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21ldGFTY2VuZSc7XHJcbmltcG9ydCB7IFREU2NlbmUsIFREX1NDRU5FX0hFSUdIVCwgVERfU0NFTkVfV0lEVEggfSBmcm9tICcuL3NjZW5lcy90ZFNjZW5lJ1xyXG5pbXBvcnQgeyBURFNjZW5lQ29uZmlnIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZUNvbmZpZyc7XHJcbmltcG9ydCB7IFRlcnJhaW4gfSBmcm9tICcuL3RlcnJhaW4nO1xyXG5cclxuXHJcbmxldCBtZXRhU2NlbmUgPSBuZXcgTWV0YVNjZW5lKClcclxubGV0IGh1ZFNjZW5lID0gbmV3IEh1ZFNjZW5lKG1ldGFTY2VuZSk7XHJcblxyXG5sZXQgbGV2ZWxzID0gW1xyXG4gIG1ldGFTY2VuZSxcclxuICBodWRTY2VuZSxcclxuXVxyXG5cclxuY29uc3QgZ2FtZUNvbmZpZyA9IHtcclxuICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICBwYXJlbnQ6ICdjb250ZW50JyxcclxuICB3aWR0aDogVERfU0NFTkVfV0lEVEggKyBIVURfV0lEVEggKiAyLFxyXG4gIGhlaWdodDogVERfU0NFTkVfSEVJR0hULFxyXG4gIHBoeXNpY3M6IHtcclxuICAgIGRlZmF1bHQ6ICdhcmNhZGUnXHJcbiAgfSxcclxuICBzY2VuZTogbGV2ZWxzLFxyXG4gIHNlZWQ6IFtcIjQyXCJdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTtcclxuUGxheWVySW5mby5pbml0KClcclxuIiwiaW1wb3J0IHsgUExBWUVSX0hFQUxUSF9SRUdFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckluZm8ge1xyXG4gICAgc3RhdGljIG1vbmV5OiBudW1iZXIgPSAxMDtcclxuICAgIHN0YXRpYyBocDogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgdGltZVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgc3RhdGljIGlzUGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIHN0YXRpYyBSTkcgPSBuZXcgUGhhc2VyLk1hdGguUmFuZG9tRGF0YUdlbmVyYXRvcigpO1xyXG4gICAgc3RhdGljIExldmVsUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoKTtcclxuICAgIHN0YXRpYyBsZXZlbEdlbmVyYXRpbmdTZWVkID0gXCJcIjtcclxuXHJcbiAgICBzdGF0aWMgcmVnZW5Qcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKTtcclxuICAgICAgICBjb25zdCBsZXZlbFNlZWRGcm9tUXVlcnkgPSB1cmxQYXJhbXMuZ2V0KCdsZXZlbFNlZWQnKVxyXG5cclxuICAgICAgICBsZXQgbGV2ZWxTZWVkID0gbGV2ZWxTZWVkRnJvbVF1ZXJ5XHJcbiAgICAgICAgICAgID8gbGV2ZWxTZWVkRnJvbVF1ZXJ5XHJcbiAgICAgICAgICAgIDogUGxheWVySW5mby5STkcuaW50ZWdlcigpLnRvU3RyaW5nKClcclxuXHJcbiAgICAgICAgUGxheWVySW5mby5sZXZlbEdlbmVyYXRpbmdTZWVkID0gbGV2ZWxTZWVkO1xyXG4gICAgICAgIFBsYXllckluZm8uTGV2ZWxSTkcgPSBuZXcgUGhhc2VyLk1hdGguUmFuZG9tRGF0YUdlbmVyYXRvcihbbGV2ZWxTZWVkXSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTZWVkIGZvciBsZXZlbCBnZW5lcmF0aW9uOiAke2xldmVsU2VlZH1gKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd2F2ZUhlYWx0aFJlZ2VuKCkge1xyXG4gICAgICAgIFBsYXllckluZm8ucmVnZW5Qcm9ncmVzcyArPSBQTEFZRVJfSEVBTFRIX1JFR0VOO1xyXG4gICAgICAgIGxldCByZXN0b3JlZCA9IE1hdGguZmxvb3IoUGxheWVySW5mby5yZWdlblByb2dyZXNzKTtcclxuICAgICAgICBQbGF5ZXJJbmZvLmhwICs9IHJlc3RvcmVkO1xyXG4gICAgICAgIFBsYXllckluZm8ucmVnZW5Qcm9ncmVzcyAtPSByZXN0b3JlZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9tZXRhU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZVxyXG4gICAgY29uc3RydWN0b3IobWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAga2V5OiBcImdhbWVPdmVyU2NlbmVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKDUxMiwgMjU2LCAxMDI0LCA1MTIsIDB4YWE0NDQ0LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSg1MTIsIDI1Ni00MCwgNTEyLTEyOCwgMjU2LTY0LCAweDQ0NDQ0NCk7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDE2MCwgXCJZT1UgRElFRFwiLCB7Zm9udFNpemU6ICczMHB4IGJvbGQnLCBjb2xvcjogXCJyZWRcIn0pLnNldE9yaWdpbigwLjUpO1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAxOTAsIGBMYXN0IHdhdmUgd2l0bmVzc2VkOiAke3RoaXMubWV0YVNjZW5lLmdldFJvb3RURFNjZW5lKCkud2F2ZU1hbmFnZXIuY3VycmVudFdhdmV9YCkuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIxMCwgYFdlYWx0aCB0YWtlbiB0byB0aGUgZ3JhdmU6ICR7UGxheWVySW5mby5tb25leX1gKS5zZXRPcmlnaW4oMC41KTtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMjMwLCBgSW52YWRlcnMgdmFucXVpc2hlZDogJHt0aGlzLm1ldGFTY2VuZS5lbmVtaWVzU2xhaW59YCkuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAyODAsIGBDTElDSyBUTyBEQVJFIEFHQUlOYCkuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlbG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudFRpbWUgPSAwO1xyXG4gICAgcmVsb2FkZWQgPSBmYWxzZTtcclxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IFBhcmVudGhlc2l6ZWRFeHByZXNzaW9uIH0gZnJvbSBcInR5cGVzY3JpcHRcIjtcclxuaW1wb3J0IHsgVG93ZXJDb25maWcsIFRPV0VSX0NPTkZJR1MsIFJBTkdFX0lORElDQVRPUl9DT05GSUcsIEVuZW15Q29uZmlnLCBXYXZlQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tIFwiLi4vZW5lbXlcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IE1BWF9IRUlHSFQsIE1BWF9XSURUSCwgVGVycmFpbiwgVElMRV9TSVpFIH0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi4vdG93ZXJzXCI7XHJcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xyXG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xyXG5cclxuY29uc3QgSFVEX0JHX0NPTE9SID0gMHhmZjhhNmQgIC8vMHhmZmFhN2RcclxuZXhwb3J0IGNvbnN0IEhVRF9XSURUSCA9IFRJTEVfU0laRSAqIDNcclxuXHJcbmV4cG9ydCBjbGFzcyBIdWRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgbW9uZXlUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgd2F2ZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBocFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBocFJlZG5lc3M6IG51bWJlciAvLyAwIHRvIDFcclxuICAgIGRlcHRoVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGdvVXBUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgZGVzY3JpcHRpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG5cclxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lO1xyXG4gICAgYmFja1RvUm9vdFNjZW5lQnV0dG9uOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIGJ1eVRvd2VySWNvbnM6IEJ1eVRvd2VySWNvbltdXHJcblxyXG4gICAgcGF1c2VCdXR0b246IFBhdXNlQnV0dG9uXHJcbiAgICBtdXRlQnV0dG9uOiBNdXRlTXVzaWNCdXR0b25cclxuXHJcbiAgICBsYXN0QWN0aXZlU2NlbmU6IFREU2NlbmVcclxuICAgIHBhcmVudFNjZW5lc0ltYWdlczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlW11cclxuICAgIHNsb3dTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgZmFzdFNwZWVkVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGtleTogXCJodWRTY2VuZVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIGxldCB3ID0gSFVEX1dJRFRIXHJcbiAgICAgICAgbGV0IGggPSBUSUxFX1NJWkUgKiBNQVhfSEVJR0hUXHJcbiAgICAgICAgY29uc3QgeExlZnQgPSB3IC8gMlxyXG4gICAgICAgIGNvbnN0IHhSaWdodCA9IHcgKyBURF9TQ0VORV9XSURUSCArIHcgLyAyXHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSh3IC8gMiwgaCAvIDIsIHcsIGgsIEhVRF9CR19DT0xPUilcclxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgICAgICAgIHhSaWdodCwgaCAvIDIsXHJcbiAgICAgICAgICAgIHcsIGgsXHJcbiAgICAgICAgICAgIEhVRF9CR19DT0xPUixcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMubW9uZXlUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgMjAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLm1vbmV5VGV4dC5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuaHBUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNDAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gMFxyXG5cclxuICAgICAgICB0aGlzLndhdmVUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNjAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLndhdmVUZXh0LnNldE9yaWdpbigwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuZGVwdGhUZXh0ID0gdGhpcy5hZGQudGV4dCh4UmlnaHQsIDIwLCBcIkRlcHRoOiBcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUZXh0LnNldE9yaWdpbigwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuZ29VcFRleHQgPSB0aGlzLmFkZC50ZXh0KHhSaWdodCwgNTAsIFwiR28gdXAgdG86XCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRWaXNpYmxlKGZhbHNlKVxyXG5cclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgMzAwLCBcIlwiLCB7IGZvbnRTaXplOiAnMTBwdCcgfSk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0V29yZFdyYXBXaWR0aChIVURfV0lEVEggLSAxMCwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLnBhdXNlQnV0dG9uID0gbmV3IFBhdXNlQnV0dG9uKHRoaXMsIHhMZWZ0IC0gNTUsIDQ3NSk7XHJcbiAgICAgICAgdGhpcy5tdXRlQnV0dG9uID0gbmV3IE11dGVNdXNpY0J1dHRvbih0aGlzLCB4UmlnaHQgKyA1NSwgNDc1KTtcclxuXHJcbiAgICAgICAgdGhpcy5idXlUb3dlckljb25zID0gW107XHJcbiAgICAgICAgbGV0IHRvd2VyVHlwZUluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCB0b3dlckNvbmZpZyBvZiBUT1dFUl9DT05GSUdTKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucy5wdXNoKG5ldyBCdXlUb3dlckljb24odGhpcywgdyAvIDIsIDExMCArIDcwICogdG93ZXJUeXBlSW5kZXgsIHRvd2VyQ29uZmlnKSlcclxuICAgICAgICAgICAgdG93ZXJUeXBlSW5kZXgrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZCA9IDNcclxuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0ICsgMjAsIDQ2NSwgXCI+U2xvdzxcIiwge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0ICsgMjAsIDQ5MCwgXCJGYXN0XCIsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gMSwgbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIj5TbG93PFwiKVxyXG4gICAgICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQuc2V0VGV4dChcIkZhc3RcIilcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gNCwgbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIlNsb3dcIilcclxuICAgICAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldFRleHQoXCI+RmFzdDxcIilcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xyXG4gICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGFTY2VuZS5pc0dhbWVPdmVyKXtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZSAqICggKyAhUGxheWVySW5mby5pc1BhdXNlZCk7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YTtcclxuXHJcbiAgICAgICAgdGhpcy5tb25leVRleHQuc2V0VGV4dCgnTW9uZXk6ICcgKyBQbGF5ZXJJbmZvLm1vbmV5KVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50V2F2ZSA9IHRoaXMubWV0YVNjZW5lLmdldFJvb3RURFNjZW5lKCkud2F2ZU1hbmFnZXIuY3VycmVudFdhdmVcclxuICAgICAgICB0aGlzLndhdmVUZXh0LnNldFRleHQoYFdhdmU6ICR7Y3VycmVudFdhdmV9YClcclxuXHJcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0VGV4dCgnSFA6ICcgKyBQbGF5ZXJJbmZvLmhwKVxyXG5cclxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRDb2xvcihQaGFzZXIuRGlzcGxheS5Db2xvci5SR0JUb1N0cmluZyhcclxuICAgICAgICAgICAgMjU1LCAyNTUgKiAoMSAtIHRoaXMuaHBSZWRuZXNzKSwgMjU1ICogKDEgLSB0aGlzLmhwUmVkbmVzcylcclxuICAgICAgICApKVxyXG4gICAgICAgIGNvbnN0IHNlY3NUb1doaXRlID0gMC41XHJcbiAgICAgICAgdGhpcy5ocFJlZG5lc3MgPSBNYXRoLm1heCgwLCB0aGlzLmhwUmVkbmVzcyAtIGRlbHRhIC8gMTAwMCAvIHNlY3NUb1doaXRlKVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUluZm9CYXNlZE9uQWN0aXZlU2NlbmUoKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpY29uIG9mIHRoaXMuYnV5VG93ZXJJY29ucykge1xyXG4gICAgICAgICAgICBpY29uLnVwZGF0ZSh0aGlzLmxhc3RUaW1lLCBkZWx0YSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuZ2FtZU92ZXIoKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUluZm9CYXNlZE9uQWN0aXZlU2NlbmUoKSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVNjZW5lID0gdGhpcy5tZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNjZW5lKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmIChhY3RpdmVTY2VuZSA9PSB0aGlzLmxhc3RBY3RpdmVTY2VuZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0QWN0aXZlU2NlbmUgPSBhY3RpdmVTY2VuZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGV4dC5zZXRUZXh0KGBEZXB0aDogJHthY3RpdmVTY2VuZS5zY2VuZUxldmVsfWApXHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudFNjZW5lcyA9IHRoaXMubWV0YVNjZW5lLmdldFBhcmVudFNjZW5lc1RvUm9vdCgpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0VmlzaWJsZShwYXJlbnRTY2VuZXMubGVuZ3RoID4gMClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudFNjZW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgc2NlbmVJbmRleCA9IChwYXJlbnRTY2VuZXMubGVuZ3RoIC0gMSkgLSBpO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSAwLjFcclxuICAgICAgICAgICAgY29uc3QgbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQgPSA3O1xyXG4gICAgICAgICAgICBpZiAocGFyZW50U2NlbmVzLmxlbmd0aCA+IG1heEltYWdlc05vcm1hbFNjYWxlRml0KSB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZSAvPSAoKHBhcmVudFNjZW5lcy5sZW5ndGggLyBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkgKiAxLjAyMikgLy8gTk9URTogRHJpZnRzLCBoZW5jZSByZS1zY2FsZSBieSB0aGlzIG1hZ2ljIG51bWJlciwgaWRrIHdoeTsgbm8gdGltZSB0byBmaWd1cmUgb3V0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdCdXR0b24gPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgICAgIFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMS41LFxyXG4gICAgICAgICAgICAgICAgMTAwICsgc2NlbmVJbmRleCAqIHNjYWxlICogVERfU0NFTkVfSEVJR0hUICogMS4yLFxyXG4gICAgICAgICAgICAgICAgYHNuYXAtJHtwYXJlbnRTY2VuZXNbaV0uc2NlbmUua2V5fWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWCA9IHNjYWxlXHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVkgPSBzY2FsZVxyXG4gICAgICAgICAgICBuZXdCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICAgICAgbmV3QnV0dG9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUocGFyZW50U2NlbmVzW2ldLnNjZW5lLmtleSwgZmFsc2UpLCB0aGlzLm1ldGFTY2VuZSlcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ld0J1dHRvblxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvblRvd2VyKGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyOiBUb3dlciA9IG51bGwpIHtcclxuICAgICAgICBsZXQgbGV2ZWwgPSAxXHJcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmICh0b3dlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gYCR7Y29uZmlnLm5hbWV9OiAke2NvbmZpZy5kZXNjcmlwdGlvbn1cXG5gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9IGBMZXZlbCAke3Rvd2VyLmxldmVsfSAke2NvbmZpZy5uYW1lfSB0b3dlci5cXG5gXHJcbiAgICAgICAgICAgIGxldmVsID0gdG93ZXIubGV2ZWxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHQgKz0gYERhbWFnZTogJHtjb25maWcuZGFtYWdlKGxldmVsKX0uXFxuYFxyXG4gICAgICAgIHRleHQgKz0gYEZpcmUgcmF0ZTogJHtjb25maWcuZmlyZXJhdGUobGV2ZWwpLzEwMDB9cy5cXG5gXHJcbiAgICAgICAgdGV4dCArPSBgUmFuZ2U6ICR7Y29uZmlnLnJhbmdlKGxldmVsKX0uXFxuYFxyXG5cclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRUZXh0KHRleHQpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb25FbmVteShlbmVteTogRW5lbXlCYXNlKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiXHJcbiAgICAgICAgaWYgKGVuZW15KSB7XHJcbiAgICAgICAgICAgIGxldCB3YXZlOiBpbnRlZ2VyO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1ldGFTY2VuZS5hY3RpdmVTY2VuZS5zY2VuZUxldmVsID09PSAwKVxyXG4gICAgICAgICAgICAgICAgd2F2ZSA9IGVuZW15LnNjZW5lLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB3YXZlID0gV2F2ZUNvbmZpZy5sZXZlbFRvV2F2ZSh0aGlzLm1ldGFTY2VuZS5hY3RpdmVTY2VuZS5nZXRUb3dlclBhcmVudCgpLmxldmVsKTtcclxuXHJcbiAgICAgICAgICAgIHRleHQgKz0gYCR7ZW5lbXkuc3RhdHMuZGlzcGxheU5hbWV9XFxuYDtcclxuICAgICAgICAgICAgdGV4dCArPSBgSGVhbHRoOiAke2VuZW15LmhwfS8ke2VuZW15LnN0YXRzLmhwKHdhdmUpfVxcbmA7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYEFybW91cjogJHtlbmVteS5zdGF0cy5hcm1vdXIod2F2ZSl9XFxuYDtcclxuICAgICAgICAgICAgdGV4dCArPSBgU3BlZWQ6ICR7KGVuZW15LnN0YXRzLnNwZWVkICogNjAwMDAgKiBlbmVteS5zcGVlZE1vZGlmaWVyKS50b1ByZWNpc2lvbigyKX1cXG5gO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGBMb290OiAke2VuZW15LnN0YXRzLm1vbmV5fVxcbmA7XHJcbiAgICAgICAgICAgIGlmKGVuZW15LnN0YXRzLmJsdXJiKVxyXG4gICAgICAgICAgICAgICAgdGV4dCArPSBgXFxuJHtlbmVteS5zdGF0cy5ibHVyYn1cXG5gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRUZXh0KHRleHQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEJ1eVRvd2VySWNvbiB7XHJcbiAgICB0b3dlck5hbWU6IHN0cmluZ1xyXG4gICAgdG93ZXJDb25maWc6IFRvd2VyQ29uZmlnXHJcblxyXG4gICAgc3ByaXRlQ29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyXHJcbiAgICBwcmljZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBodWRTY2VuZTogSHVkU2NlbmVcclxuXHJcbiAgICBvcmlnWDogbnVtYmVyXHJcbiAgICBvcmlnWTogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3IoaHVkU2NlbmU6IEh1ZFNjZW5lLCB4LCB5LCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmh1ZFNjZW5lID0gaHVkU2NlbmVcclxuICAgICAgICB0aGlzLm9yaWdYID0geFxyXG4gICAgICAgIHRoaXMub3JpZ1kgPSB5XHJcbiAgICAgICAgdGhpcy50b3dlck5hbWUgPSBjb25maWcubmFtZVxyXG4gICAgICAgIHRoaXMudG93ZXJDb25maWcgPSBjb25maWdcclxuXHJcbiAgICAgICAgbGV0IHRvd2VyQmFzZSA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VyYmFzZXMnLCBjb25maWcuc3ByaXRlQmFzZSk7XHJcbiAgICAgICAgdG93ZXJCYXNlLnNldFRpbnQoY29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICBsZXQgdG93ZXJNaWQgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcm1pZHMnLCBjb25maWcuc3ByaXRlTWlkKTtcclxuICAgICAgICB0b3dlck1pZC5zZXRUaW50KGNvbmZpZy50aW50TWlkKTtcclxuICAgICAgICBsZXQgdG93ZXJUb3AgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcnRvcHMnLCBjb25maWcuc3ByaXRlVG9wKTtcclxuICAgICAgICB0b3dlclRvcC5zZXRUaW50KGNvbmZpZy50aW50VG9wKTtcclxuXHJcbiAgICAgICAgbGV0IHRvd2VyUmFuZ2UgPSBodWRTY2VuZS5hZGQuY2lyY2xlKFxyXG4gICAgICAgICAgICAwLCAwLCBjb25maWcucmFuZ2UoMSksXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuY29sb3VyLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0b3dlclJhbmdlLnNldFN0cm9rZVN0eWxlKFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VXaWR0aCxcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlQ29sb3VyXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0b3dlclJhbmdlLnNldFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgICAgICB2YXIgc3ByaXRlcyA9IFtcclxuICAgICAgICAgICAgdG93ZXJCYXNlLFxyXG4gICAgICAgICAgICB0b3dlck1pZCxcclxuICAgICAgICAgICAgdG93ZXJUb3AsXHJcbiAgICAgICAgICAgIHRvd2VyUmFuZ2UsXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyID0gaHVkU2NlbmUuYWRkLmNvbnRhaW5lcih4LCB5LCBzcHJpdGVzKVxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLmdldEFsbCgpXHJcblxyXG4gICAgICAgIGNvbnN0IHBhZCA9IDNcclxuICAgICAgICB0aGlzLnByaWNlVGV4dCA9IGh1ZFNjZW5lLmFkZC50ZXh0KFxyXG4gICAgICAgICAgICB4ICsgMTUsIHksIFwiXCIgKyB0aGlzLnRvd2VyQ29uZmlnLnByaWNlLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuc2V0U2l6ZShUSUxFX1NJWkUsIFRJTEVfU0laRSk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgICAgIC8vIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gY29uc29sZS5sb2coXCJmb29iYXJcIiksIHRoaXMpO1xyXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmh1ZFNjZW5lLnNldERlc2NyaXB0aW9uVG93ZXIoY29uZmlnKVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXIsIGdhbWVPYmplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIG1ha2VzIHJhbmdlIGluZGljYXRvciB2aXNpYmxlXHJcbiAgICAgICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzNdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSkuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QubGlzdC5mb3JFYWNoKChzcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpID0+IHtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQub24oJ2RyYWcnLCBmdW5jdGlvbiAocG9pbnRlciwgZ2FtZU9iamVjdCwgZHJhZ1gsIGRyYWdZKSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gZHJhZ1g7XHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xyXG5cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxyXG4gICAgICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFszXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUpLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmh1ZFNjZW5lLm1ldGFTY2VuZS5zb3VuZE1hbmFnZXIuYnVpbGRTb3VuZC5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGh1ZFNjZW5lLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpXHJcbiAgICAgICAgICAgIHNjZW5lLnRvd2VyTWFuYWdlci5wbGFjZVRvd2VyKHBvaW50ZXIsIHRoaXMudG93ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IHRoaXMub3JpZ1hcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gdGhpcy5vcmlnWVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGludCgpIHtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50TWlkKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsyXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2hvcEljb25UaW50KHRpbnQ6IG51bWJlcikge1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzBdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aW50ICYgdGhpcy50b3dlckNvbmZpZy50aW50VG9wKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaG9wKCkge1xyXG4gICAgICAgIC8vIFVuY29tbWVudCB0byBwcmV2ZW50IG5lZ2F0aXZlIG1vbmV5OlxyXG4gICAgICAgIHRoaXMuaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyLCBQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpXHJcblxyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmljZVRleHQuc2V0VGludCgweDAwZmYwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaW50KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmljZVRleHQuc2V0VGludCgweGZmMDAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvcEljb25UaW50KDB4OTk1NTU1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2xkTW9uZXk6IGludGVnZXIgPSAwXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICBpZiAoUGxheWVySW5mby5tb25leSAhPSB0aGlzLm9sZE1vbmV5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9sZE1vbmV5ID0gUGxheWVySW5mby5tb25leTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBVSUJ1dHRvbiB7XHJcbiAgICBiYXNlU3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcbiAgICBhbHRTcHJpdGU6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcclxuXHJcbiAgICBzcHJpdGVDb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXJcclxuXHJcbiAgICBzY2VuZTogUGhhc2VyLlNjZW5lXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHgsIHksIHNwcml0ZUluZm8gLCBmdW5jKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lciA9IHNjZW5lLmFkZC5jb250YWluZXIoeCwgeSlcclxuICAgICAgICB0aGlzLmJhc2VTcHJpdGUgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgc3ByaXRlSW5mby5iYXNlTmFtZSwgc3ByaXRlSW5mby5iYXNlSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuYWx0U3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsIDAsIHNwcml0ZUluZm8uYWx0TmFtZSwgc3ByaXRlSW5mby5hbHRJbmRleCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldFNpemUodGhpcy5iYXNlU3ByaXRlLndpZHRoLCB0aGlzLmJhc2VTcHJpdGUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgICAgdGhpcy5hbHRTcHJpdGUuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLmFkZCh0aGlzLmJhc2VTcHJpdGUpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLmFkZCh0aGlzLmFsdFNwcml0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLm9uKCdwb2ludGVyZG93bicsIGZ1bmMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVNwcml0ZSgpIHtcclxuICAgICAgICB0aGlzLmJhc2VTcHJpdGUuc2V0VmlzaWJsZSghdGhpcy5iYXNlU3ByaXRlLnZpc2libGUpO1xyXG4gICAgICAgIHRoaXMuYWx0U3ByaXRlLnNldFZpc2libGUoIXRoaXMuYWx0U3ByaXRlLnZpc2libGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgUGF1c2VCdXR0b24gZXh0ZW5kcyBVSUJ1dHRvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSwgeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCB7XHJcbiAgICAgICAgICAgIGJhc2VOYW1lOiAnYnV0dG9uSWNvbnMnLFxyXG4gICAgICAgICAgICBiYXNlSW5kZXg6IDEsXHJcbiAgICAgICAgICAgIGFsdE5hbWU6ICdidXR0b25JY29ucycsXHJcbiAgICAgICAgICAgIGFsdEluZGV4OiAyXHJcbiAgICAgICAgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNwcml0ZSgpXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uaXNQYXVzZWQgPSAhUGxheWVySW5mby5pc1BhdXNlZDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgTXV0ZU11c2ljQnV0dG9uIGV4dGVuZHMgVUlCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHgsIHkpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwge1xyXG4gICAgICAgICAgICBiYXNlTmFtZTogJ2J1dHRvbkljb25zJyxcclxuICAgICAgICAgICAgYmFzZUluZGV4OiAzLFxyXG4gICAgICAgICAgICBhbHROYW1lOiAnYnV0dG9uSWNvbnMnLFxyXG4gICAgICAgICAgICBhbHRJbmRleDogNFxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTcHJpdGUoKTtcclxuICAgICAgICAgICAgbGV0IG11c2ljID0gKHRoaXMuc2NlbmUgYXMgSHVkU2NlbmUpLm1ldGFTY2VuZS5zb3VuZE1hbmFnZXIubXVzaWNcclxuICAgICAgICAgICAgaWYgKG11c2ljLmlzUGxheWluZylcclxuICAgICAgICAgICAgICAgIG11c2ljLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIG11c2ljLnBsYXkoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQge1RlcnJhaW59IGZyb20gXCIuLi90ZXJyYWluXCJcclxuaW1wb3J0IHsgR2FtZU92ZXJTY2VuZSB9IGZyb20gXCIuL2dhbWVPdmVyU2NlbmVcIjtcclxuaW1wb3J0IHtTQ0VORV9UUkFOU0lUSU9OX01TLCBURFNjZW5lfSBmcm9tIFwiLi90ZFNjZW5lXCI7XHJcbmltcG9ydCB7VERTY2VuZUNvbmZpZ30gZnJvbSBcIi4vdGRTY2VuZUNvbmZpZ1wiXHJcbmltcG9ydCB7U291bmRNYW5hZ2VyfSBmcm9tIFwiLi4vc291bmRNYW5hZ2VyXCJcclxuaW1wb3J0IHsgYW5pbWF0aW9uc0NvbmZpZyB9IGZyb20gXCIuLi9hbmltYXRpb25zQ29uZmlnXCJcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIGtleTogJ21ldGFTY2VuZScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBwdWJsaWMgc2NlbmVzOiBURFNjZW5lW11cclxuICAgIHB1YmxpYyBhY3RpdmVTY2VuZTogVERTY2VuZVxyXG4gICAgcHVibGljIHNvdW5kTWFuYWdlcjogU291bmRNYW5hZ2VyO1xyXG5cclxuICAgIGVuZW1pZXNTbGFpbjogaW50ZWdlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIgPSBuZXcgU291bmRNYW5hZ2VyKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IHRoaXMuYWRkU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnNjZW5lc1swXS5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJodWRTY2VuZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIuYWRkU291bmRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEN1cnJlbnQgZ2FtZSB2ZXJzaW9uOiAke3RoaXMuY2FjaGUudGV4dC5nZXQoXCJnYW1lVmVyc2lvblwiKX1gKTtcclxuICAgIH1cclxuXHJcbiAgLy8gQ3JlYXRlcyBuZXcgU2NlbmUsIGVuYWJsZXMgaXQsIGFuZCBzZXRzIGl0IGludmlzaWJsZVxyXG4gICAgcHVibGljIGFkZFNjZW5lKHBhcmVudFNjZW5lS2V5Pzogc3RyaW5nKTogVERTY2VuZSB7XHJcbiAgICAgICAgbGV0IHBhcmVudFNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHBhcmVudFNjZW5lS2V5KVxyXG4gICAgICAgIGxldCBzY2VuZUxldmVsID0gKHBhcmVudFNjZW5lPy5zY2VuZUxldmVsID8/IC0xKSArIDE7XHJcblxyXG4gICAgICAgIGxldCBzY2VuZUluZGV4ID0gdGhpcy5zY2VuZXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHNjZW5lS2V5ID0gYHRkU2NlbmUke3NjZW5lSW5kZXh9YFxyXG5cclxuICAgICAgICBsZXQgbmV3U2NlbmUgPSBuZXcgVERTY2VuZShcclxuICAgICAgICAgICAgbmV3IFREU2NlbmVDb25maWcobmV3IFRlcnJhaW4oMTAsIDgpLCBzY2VuZUxldmVsLCBwYXJlbnRTY2VuZUtleSwgc2NlbmVLZXkpLFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKFxyXG4gICAgICAgICAgICBzY2VuZUtleSxcclxuICAgICAgICAgICAgbmV3U2NlbmUsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzLnB1c2gobmV3U2NlbmUpXHJcbiAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2NlbmUpIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCh0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjZW5lQnlLZXkoa2V5Pzogc3RyaW5nKTogVERTY2VuZSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXQoa2V5KSBhcyBURFNjZW5lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBtYWtlcyBjdXJyZW50IHNjZW5lIGludmlzaWJsZSwgbWFrZXMgbmV3IHNjZW5lIHZpc2libGU7IGRvZXNuJ3QgY2hhbmdlIGFjdGl2bmVzc1xyXG4gICAgcHVibGljIHN3aXRjaFRvU2NlbmUobmV3U2NlbmVLZXk6IHN0cmluZywgZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGkgPSAwLCBqID0gMCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNldElzRm9yZWdyb3VuZChmYWxzZSwgZ29pbmdJbnNpZGUsIGksIGopO1xyXG4gICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShuZXdTY2VuZUtleSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGBTd2l0Y2hpbmcgZnJvbSAke3RoaXMuYWN0aXZlU2NlbmUuc2NlbmUua2V5fSAocGFyZW50ICR7dGhpcy5hY3RpdmVTY2VuZS5zY2VuZVBhcmVudEtleX0pIHRvYFxyXG4gICAgICAgICAgICArIGAgJHtuZXdTY2VuZS5zY2VuZS5rZXl9IChwYXJlbnQgJHtuZXdTY2VuZS5zY2VuZVBhcmVudEtleX0pYFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgbmV3U2NlbmUudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiBTQ0VORV9UUkFOU0lUSU9OX01TLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNjZW5lLnNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zY2VuZS5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lID0gbmV3U2NlbmVcclxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldElzRm9yZWdyb3VuZCh0cnVlLCBnb2luZ0luc2lkZSwgaSwgaik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AobmV3U2NlbmVLZXkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gMS4wNTk0NjMwOTQzNiB+IDJeKDEvMTIpLCBpLmUuIG9uZSBzZW1pdG9uZVxyXG4gICAgICAgIHRoaXMuc291bmQuc2V0UmF0ZSgxIC8gKE1hdGgucG93KDEuMDU5NDYzMDk0MzYsIG5ld1NjZW5lLnNjZW5lTGV2ZWwpKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKXtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZC5zZXRSYXRlKDEgLyAoTWF0aC5wb3coMS4wNTk0NjMwOTQzNiwgMTUpKSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBnYW1lT3ZlclNjZW5lID0gdGhpcy5zY2VuZS5hZGQoXCJnYW1lT3ZlclNjZW5lXCIsIG5ldyBHYW1lT3ZlclNjZW5lKHRoaXMpKVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KGdhbWVPdmVyU2NlbmUpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLnBhdXNlKClcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcHJlbG9hZCgpIHtcclxuICAgICAgICAvLyBsb2FkIHRoZSBnYW1lIGFzc2V0c1xyXG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdhc3NldHMvJylcclxuXHJcbiAgICAgICAgdGhpcy5zb3VuZE1hbmFnZXIubG9hZFNvdW5kcygpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3dlYWtFbmVteScsICdlbmVteS5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZmFzdEVuZW15JywgJ2VuZW15X2Zhc3QucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2FybW91cmVkRW5lbXknLCAnZW5lbXlfYXJtb3JlZC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJCaWdFbmVteScsICdlbmVteV9zcGxpdF9iaWcucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyU21hbGxFbmVteScsICdlbmVteV9zcGxpdF9zbWFsbC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZmF0RW5lbXknLCAnZW5lbXlfY2hvbmsucG5nJywge2ZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogNTZ9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyRmF0RW5lbXknLCAnZW5lbXlfc3BsaXRfY2hvbmsucG5nJywge2ZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogNTZ9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnYnVsbGV0LnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndGlsZXNldCcsXHJcbiAgICAgICAgICAgICd0aWxlc2V0LnBuZycsXHJcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcnRvcHMnLFxyXG4gICAgICAgICAgICAndG93ZXJ0b3AucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJtaWRzJyxcclxuICAgICAgICAgICAgJ3Rvd2VybWlkLnBuZycsXHJcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VyYmFzZXMnLFxyXG4gICAgICAgICAgICAndG93ZXJiYXNlLnBuZycsXHJcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2J1dHRvbkljb25zJyxcclxuICAgICAgICAgICAgJ2J1dHRvbl9pY29ucy5wbmcnLFxyXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwYXJ0aWNsZV9yZWQnLCAncGFydGljbGVfcmVkLnBuZycpO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BvcnRhbEZyb20nLCAncG9ydGFsX2Zyb20ucG5nJywge2ZyYW1lV2lkdGg6IDQwLCBmcmFtZUhlaWdodDogNDB9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BvcnRhbFRvJywgJ3BvcnRhbF90by5wbmcnLCB7ZnJhbWVXaWR0aDogNDAsIGZyYW1lSGVpZ2h0OiA0MH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQudGV4dChcImdhbWVWZXJzaW9uXCIsIFwiLi92ZXJzaW9uLnR4dFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb25zKCkge1xyXG4gICAgICAgIGZvciAobGV0IGNmZyBvZiBhbmltYXRpb25zQ29uZmlnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgIGtleTogY2ZnLmtleSxcclxuICAgICAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycyhjZmcuc3ByaXRlU2hlZXQsIGNmZy5mcmFtZXMpLFxyXG4gICAgICAgICAgICAgICAgZnJhbWVSYXRlOiBjZmcuZnJhbWVSYXRlLFxyXG4gICAgICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZlU2NlbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50U2NlbmVzVG9Sb290KCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRTY2VuZXM6IFREU2NlbmVbXSA9IFtdXHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRBY3RpdmVTY2VuZSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50S2V5KSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFNjZW5lQnlLZXkoc2NlbmUuc2NlbmVQYXJlbnRLZXkpXHJcbiAgICAgICAgICAgIHBhcmVudFNjZW5lcy5wdXNoKHBhcmVudCk7XHJcbiAgICAgICAgICAgIHNjZW5lID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudFNjZW5lcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb290VERTY2VuZSgpIHtcclxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldEFjdGl2ZVNjZW5lKCk7XHJcblxyXG4gICAgICAgIHdoaWxlIChzY2VuZT8uc2NlbmVQYXJlbnRLZXkpIHtcclxuICAgICAgICAgICAgc2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkoc2NlbmUuc2NlbmVQYXJlbnRLZXkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2NlbmVcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIGVuZW0gZnJvbSBcIi4uL2VuZW15XCI7XHJcbmltcG9ydCB7VG93ZXJ9IGZyb20gXCIuLi90b3dlcnNcIjtcclxuaW1wb3J0IHtCdWxsZXR9IGZyb20gXCIuLi9idWxsZXRcIjtcclxuaW1wb3J0IHtXYXZlTWFuYWdlcn0gZnJvbSBcIi4uL3dhdmVzXCJcclxuaW1wb3J0IHtUb3dlck1hbmFnZXJ9IGZyb20gXCIuLi90b3dlck1hbmFnZXJcIlxyXG5pbXBvcnQge01BWF9IRUlHSFQsIE1BWF9XSURUSCwgVGVycmFpbiwgVElMRV9TSVpFfSBmcm9tIFwiLi4vdGVycmFpblwiO1xyXG5pbXBvcnQge1REU2NlbmVDb25maWd9IGZyb20gXCIuL3RkU2NlbmVDb25maWdcIjtcclxuaW1wb3J0IHtNZXRhU2NlbmV9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xyXG5pbXBvcnQge0hVRF9XSURUSH0gZnJvbSBcIi4vaHVkU2NlbmVcIjtcclxuaW1wb3J0IHtVVUlEfSBmcm9tIFwiLi4vdXRpbHMvZ3VpZFwiO1xyXG5pbXBvcnQge0hlYWx0aEJhcn0gZnJvbSBcIi4uL2hlYWx0aEJhclwiO1xyXG5pbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7RU5FTVlfQ09ORklHU30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNDRU5FX1RSQU5TSVRJT05fTVMgPSA1MDBcclxuZXhwb3J0IGNvbnN0IFREX1NDRU5FX1dJRFRIID0gTUFYX1dJRFRIICogVElMRV9TSVpFXHJcbmV4cG9ydCBjb25zdCBURF9TQ0VORV9IRUlHSFQgPSBNQVhfSEVJR0hUICogVElMRV9TSVpFXHJcblxyXG5leHBvcnQgY2xhc3MgVERTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwYXRoOiBQaGFzZXIuQ3VydmVzLlBhdGhcclxuICAgIGFsbEVuZW1pZXM6IHsgW2tleTogc3RyaW5nXTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIH0gPSB7fVxyXG4gICAgbmV4dEVuZW15OiBudW1iZXIgPSAwXHJcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZVxyXG5cclxuICAgIHRvd2VyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwXHJcbiAgICBidWxsZXRzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXBcclxuXHJcbiAgICB0ZXJyYWluOiBUZXJyYWluXHJcblxyXG4gICAgd2F2ZU1hbmFnZXI6IFdhdmVNYW5hZ2VyXHJcbiAgICB0b3dlck1hbmFnZXI6IFRvd2VyTWFuYWdlclxyXG5cclxuICAgIHNjZW5lUGFyZW50S2V5OiBzdHJpbmc7XHJcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvblxyXG5cclxuICAgIHByaXZhdGUgdG93ZXJQYXJlbnQ6IFRvd2VyICAvLyB0byB3aGF0IHRvd2VyIGRvZXMgdGhpcyBzY2VuZSBjb3JyZXNwb25kPyB1bmRlZmluZWQgZm9yIHJvb3RcclxuICAgIHByaXZhdGUgZW5kSGVhbHRoQmFyOiBIZWFsdGhCYXJcclxuXHJcbiAgICAvLyBoYXBwZW5zIHdoZW4gYW4gZW5lbXkgcmVhY2hlcyB0aGUgZW5kXHJcbiAgICBlbmVteUVuZENhbGxiYWNrOiAobnVtYmVyKSA9PiB2b2lkXHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBURFNjZW5lQ29uZmlnLCBtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGtleTogY29uZmlnLnNjZW5lS2V5LCAvL2B0ZFNjZW5lJHtVVUlELnV1aWR2NCgpfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGVycmFpbiA9IGNvbmZpZy50ZXJyYWluO1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lID0gbWV0YVNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lTGV2ZWwgPSBjb25maWcuc2NlbmVMZXZlbDtcclxuICAgICAgICB0aGlzLnNjZW5lUGFyZW50S2V5ID0gY29uZmlnLnNjZW5lUGFyZW50S2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcyBncmFwaGljcyBlbGVtZW50IGlzIG9ubHkgZm9yIHZpc3VhbGl6YXRpb24sXHJcbiAgICAgICAgLy8gaXRzIG5vdCByZWxhdGVkIHRvIG91ciBwYXRoXHJcbiAgICAgICAgdmFyIGdyYXBoaWNzID0gdGhpcy5hZGQuZ3JhcGhpY3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXJyYWluLmNyZWF0ZSh0aGlzKVxyXG4gICAgICAgIHRoaXMudGVycmFpbi5kcmF3KGdyYXBoaWNzKVxyXG5cclxuICAgICAgICAvLyB0aGUgcGF0aCBmb3Igb3VyIGVuZW1pZXNcclxuICAgICAgICAvLyBwYXJhbWV0ZXJzIGFyZSB0aGUgc3RhcnQgeCBhbmQgeSBvZiBvdXIgcGF0aFxyXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3dlck1hbmFnZXIgPSBuZXcgVG93ZXJNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsRW5lbWllc1tlbmVteS5uYW1lXSA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogZW5lbXkuY2xhc3MsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvd2VycyA9IHRoaXMuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IFRvd2VyLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMub25DbGljaywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogQnVsbGV0LCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xyXG4gICAgICAgIGZvciAobGV0IGVOYW1lIGluIHRoaXMuYWxsRW5lbWllcykge1xyXG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5hbGxFbmVtaWVzW2VOYW1lXSwgdGhpcy5idWxsZXRzLCB0aGlzLmRhbWFnZUVuZW15KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbSA9IHRoaXMuY2FtZXJhcy5tYWluXHJcbiAgICAgICAgY2FtLnNjcm9sbFggPSAtSFVEX1dJRFRIXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25seSBmb3JlZ3JvdW5kIHNjZW5lIGhhcyBpbnB1dCBlbmFibGVkICYgaXMgdmlzaWJsZTsgYWxsIHNjZW5lcyBhcmUgYmVpbmcgdXBkYXRlZFxyXG4gICAgcHVibGljIHNldElzRm9yZWdyb3VuZChpc0ZvcmVncm91bmRTY2VuZSwgZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGkgPSBudWxsLCBqID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGlzRm9yZWdyb3VuZFNjZW5lO1xyXG5cclxuICAgICAgICBpZiAoIWlzRm9yZWdyb3VuZFNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dChnb2luZ0luc2lkZSwgaSwgailcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVJbihnb2luZ0luc2lkZSwgaSwgailcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVJbihnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih0aGlzLnRlcnJhaW4udyAqIFRJTEVfU0laRSAvIDIsIHRoaXMudGVycmFpbi5oICogVElMRV9TSVpFIC8gMiwgMSlcclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5zZXRab29tKChnb2luZ0luc2lkZSA/IDEgLyAzIDogMykpXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbihTQ0VORV9UUkFOU0lUSU9OX01TLCAwLCAwLCAwKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygxLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlT3V0KGdvaW5nSW5zaWRlOiBib29sZWFuLCBpLCBqKSB7XHJcbiAgICAgICAgLy8gVGFrZSBhIHNjcmVlbnNob3RcclxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIuc25hcHNob3RBcmVhKFxyXG4gICAgICAgICAgICAtdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWCxcclxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFksXHJcbiAgICAgICAgICAgIFREX1NDRU5FX1dJRFRILFxyXG4gICAgICAgICAgICBURF9TQ0VORV9IRUlHSFQsXHJcbiAgICAgICAgICAgIChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcEtleSA9IGBzbmFwLSR7dGhpcy5zY2VuZS5rZXl9YFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXMuZXhpc3RzKHNuYXBLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5yZW1vdmUoc25hcEtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzLmFkZEltYWdlKHNuYXBLZXksIGltYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dpbmc6IHNob3cgdGhlIHNjcmVlbnNob3RcclxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcclxuICAgICAgICBpZiAoZ29pbmdJbnNpZGUpIHtcclxuICAgICAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMudGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMywgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ucGFuKHgsIHksIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDEgLyAzLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYW1hZ2VFbmVteShlbmVteSwgYnVsbGV0KSB7XHJcbiAgICAgICAgLy8gb25seSBpZiBib3RoIGVuZW15IGFuZCBidWxsZXQgYXJlIGFsaXZlXHJcbiAgICAgICAgaWYgKGVuZW15LmFjdGl2ZSA9PT0gdHJ1ZSAmJiBidWxsZXQuYWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0aGUgYnVsbGV0IHJpZ2h0IGF3YXlcclxuICAgICAgICAgICAgYnVsbGV0LmhpdCgpXHJcblxyXG4gICAgICAgICAgICAvLyBkZWNyZWFzZSB0aGUgZW5lbXkgaHAgd2l0aCBidWxsZXQgZGFtYWdlXHJcbiAgICAgICAgICAgIGVuZW15LnJlY2VpdmVEYW1hZ2UoYnVsbGV0LmRhbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyYW1lTnVtYmVyID0gMDtcclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZSAqICggKyAhUGxheWVySW5mby5pc1BhdXNlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVOdW1iZXIrKztcclxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyLnVwZGF0ZShkZWx0YSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVOdW1iZXIgJSA2MCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBVcGRhdGUgdGg6ICR7dGhpcy5zY2VuZS5rZXl9IGU6ICR7dGhpcy5pbnB1dC5lbmFibGVkfSB8IGw6ICR7dGhpcy5zY2VuZUxldmVsfSB8IHA6ICR7dGhpcy5zY2VuZVBhcmVudD8uc2NlbmUua2V5fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZEhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5oZWFsdGggPSB0aGlzLnRvd2VyUGFyZW50LmhlYWx0aEJhci5oZWFsdGhcclxuICAgICAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRCdWxsZXQoeCwgeSwgYW5nbGUsIGRhbWFnZSwgcmFuZ2UsIGJ1bGxldFNwZWVkTW9kKSB7XHJcbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXQoKSBhcyBCdWxsZXQ7XHJcbiAgICAgICAgaWYgKGJ1bGxldCkge1xyXG4gICAgICAgICAgICBidWxsZXQuZmlyZSh4LCB5LCBhbmdsZSwgZGFtYWdlLCByYW5nZSwgYnVsbGV0U3BlZWRNb2QsIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b0dyaWRQb3MoeCwgeSkge1xyXG4gICAgICAgIGxldCBpID0gTWF0aC5mbG9vcigoeCArIHRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgpIC8gVElMRV9TSVpFKTtcclxuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZKSAvIFRJTEVfU0laRSk7XHJcbiAgICAgICAgcmV0dXJuIFtpLCBqXVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2socG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG9uY2xpY2sgb24gc2NlbmUgJHt0aGlzLnNjZW5lLmtleX1gKVxyXG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBjbGlja2VkIGNvb3JkaW5hdGVzOiAke2l9ICR7an1gKVxyXG4gICAgICAgIGxldCBwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyID0gdGhpcy50ZXJyYWluLnRyeUdldEV4aXN0aW5nVG93ZXIoaSwgaik7XHJcbiAgICAgICAgaWYgKHBvdGVudGlhbEV4aXN0aW5nVG93ZXIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2l0Y2hpbmcgdG8gYW4gZXhpc3RpbmcgdG93ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuc3dpdGNoVG9TY2VuZShwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyLmdldElubmVyVG93ZXJTY2VuZUtleSgpLCB0cnVlLCBpLCBqKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgaWYgKGkgPT09IGVuZFswXSAmJiBqID09PSBlbmRbMV0gJiYgdGhpcy5zY2VuZVBhcmVudEtleSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB2aWEgZW5kXCIpXHJcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUodGhpcy5zY2VuZVBhcmVudEtleSwgZmFsc2UsIGksIGopXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5lbXlSZWFjaGVkRW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteUVuZENhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3dlclBhcmVudChwYXJlbnQ6IFRvd2VyKSB7XHJcbiAgICAgICAgdGhpcy50b3dlclBhcmVudCA9IHBhcmVudFxyXG4gICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0aGlzKVxyXG5cclxuICAgICAgICBsZXQgW2ksIGpdID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMudGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxyXG5cclxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5tYWtlKHgsIHksIFRJTEVfU0laRSAtIDE0LCAwLjUpXHJcbiAgICAgICAgdGhpcy5hZGQuY29udGFpbmVyKDAsIDAsIHRoaXMuZW5kSGVhbHRoQmFyKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvd2VyUGFyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2VyUGFyZW50XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXJyYWluIH0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3RkU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBURFNjZW5lQ29uZmlnIHtcclxuICAgIHRlcnJhaW46IFRlcnJhaW47XHJcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvbiBcclxuICAgIHNjZW5lUGFyZW50S2V5OiBzdHJpbmc7XHJcbiAgICBzY2VuZUtleTogc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IodGVycmFpbjogVGVycmFpbiwgc2NlbmVMZXZlbDogbnVtYmVyLCBzY2VuZVBhcmVudEtleTogc3RyaW5nLCBzY2VuZUtleTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnRlcnJhaW4gPSB0ZXJyYWluO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lTGV2ZWwgPSBzY2VuZUxldmVsO1xyXG4gICAgICAgIHRoaXMuc2NlbmVQYXJlbnRLZXkgPSBzY2VuZVBhcmVudEtleTtcclxuICAgICAgICB0aGlzLnNjZW5lS2V5ID0gc2NlbmVLZXlcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9tZXRhU2NlbmVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdW5kTWFuYWdlciB7XHJcbiAgICBtdXNpYzogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIGJ1aWxkU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBkYW1hZ2VTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHNob290U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBtdWx0aXNob3RTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIGxldmVsdXBTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHNuaXBlclNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNvdW5kcygpIHtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZS5sb2FkLmF1ZGlvKFwibWFpbl9tdXNpY1wiLCAnLi9zb3VuZHMvZ2FtZWphbV9MRDQ4Lm9nZycpO1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lLmxvYWQuYXVkaW8oJ2J1aWxkX3NvdW5kJywgJy4vc291bmRzL2J1aWxkLndhdicpO1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lLmxvYWQuYXVkaW8oJ2RhbWFnZV9zb3VuZCcsICcuL3NvdW5kcy9kYW1hZ2Uud2F2Jyk7XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUubG9hZC5hdWRpbygnYmFzaWNfc2hvb3QnLCAnLi9zb3VuZHMvdHVycmV0c2hvdC53YXYnKTtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZS5sb2FkLmF1ZGlvKCdtdWx0aXNob3Rfc2hvb3QnLCAnLi9zb3VuZHMvbXVsdGlzaG90LndhdicpO1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lLmxvYWQuYXVkaW8oJ2xldmVsdXBfc291bmQnLCAnLi9zb3VuZHMvbGV2ZWx1cC53YXYnKTtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZS5sb2FkLmF1ZGlvKCdzbmlwZXJfc2hvb3QnLCAnLi9zb3VuZHMvc25pcGVyLndhdicpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFNvdW5kcygpIHtcclxuICAgICAgICB0aGlzLm11c2ljID0gdGhpcy5tZXRhU2NlbmUuc291bmQuYWRkKFwibWFpbl9tdXNpY1wiLCB7XCJsb29wXCI6IHRydWUsIFwidm9sdW1lXCI6IDAuMDd9KTtcclxuICAgICAgICB0aGlzLm11c2ljLnBsYXkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZFNvdW5kID0gdGhpcy5tZXRhU2NlbmUuc291bmQuYWRkKCdidWlsZF9zb3VuZCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDF9KTtcclxuICAgICAgICB0aGlzLmRhbWFnZVNvdW5kID0gdGhpcy5tZXRhU2NlbmUuc291bmQuYWRkKCdkYW1hZ2Vfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjE1fSk7XHJcbiAgICAgICAgdGhpcy5zaG9vdFNvdW5kID0gdGhpcy5tZXRhU2NlbmUuc291bmQuYWRkKCdiYXNpY19zaG9vdCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDAuMDN9KTtcclxuICAgICAgICB0aGlzLm11bHRpc2hvdFNvdW5kID0gdGhpcy5tZXRhU2NlbmUuc291bmQuYWRkKCdtdWx0aXNob3Rfc2hvb3QnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjAzfSk7XHJcbiAgICAgICAgdGhpcy5sZXZlbHVwU291bmQgPSB0aGlzLm1ldGFTY2VuZS5zb3VuZC5hZGQoJ2xldmVsdXBfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjAyfSk7XHJcbiAgICAgICAgdGhpcy5zbmlwZXJTb3VuZCA9IHRoaXMubWV0YVNjZW5lLnNvdW5kLmFkZCgnc25pcGVyX3Nob290JywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4wMn0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIlxyXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL3Rvd2Vyc1wiXHJcblxyXG5leHBvcnQgZW51bSBUaWxlVHlwZSB7XHJcbiAgICBTdGFydCwgUGF0aCwgRW5kLCBPY2N1cGllZCwgQnVpbGRhYmxlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUSUxFX1NJWkUgPSA2NFxyXG5leHBvcnQgY29uc3QgTEVWRUxfT0ZGU0VUID0gMTUgKiBUSUxFX1NJWkVcclxuZXhwb3J0IGNvbnN0IE1BWF9XSURUSCA9IDEwXHJcbmV4cG9ydCBjb25zdCBNQVhfSEVJR0hUID0gOFxyXG5cclxuY29uc3QgTl9USUxFU0VUX1NQUklURVMgPSAxMCAgLy8gaG93IG1hbnkgc3ByaXRlcyBhcmUgaW4gdGhlIHRpbGVzZXQ/XHJcblxyXG50eXBlIEdyaWRQb3MgPSBbaW50ZWdlciwgaW50ZWdlcl1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXJyYWluIHtcclxuICAgIHRvd2VyczogVG93ZXJbXVtdXHJcbiAgICB0aWxlczogVGlsZVR5cGVbXVtdXHJcblxyXG4gICAgdGlsZVNwcml0ZXM6IGludGVnZXJbXVtdXHJcblxyXG4gICAgcGF0aDogUGhhc2VyLkN1cnZlcy5QYXRoICAvLyBUaGUgUGhhc2VyIHBhdGggKGZvciBlbmVteSBtb3ZlbWVudClcclxuICAgIHBhdGhUaWxlczogR3JpZFBvc1tdICAvLyBUaGUgc2VxdWVuY2Ugb2YgdGlsZXMgbWFraW5nIHVwIHRoZSBwYXRoXHJcblxyXG4gICAgdGludDogaW50ZWdlciAvLyBjb2xvciBhcyBhIDI0LWJpdCBpbnRcclxuXHJcbiAgICB3OiBudW1iZXJcclxuICAgIGg6IG51bWJlclxyXG5cclxuICAgIHBvcnRhbEZyb206IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcclxuICAgIHBvcnRhbFRvOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcblxyXG4gICAgLy8gdG9kbzogZ2VuZXJhdGUvbG9hZCB0ZXJyYWluXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogaW50ZWdlciwgaGVpZ2h0OiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgdGhpcy53ID0gd2lkdGhcclxuICAgICAgICB0aGlzLmggPSBoZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlKClcclxuICAgICAgICB0aGlzLnNldHVwU3ByaXRlcyhzY2VuZSlcclxuXHJcbiAgICAgICAgdGhpcy50b3dlcnMgPSBpbml0MkRBcnJheTxUb3dlcj4odGhpcy53LCB0aGlzLmgsIG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBTcHJpdGVzKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy50aWxlU3ByaXRlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpXVtqXSA9IHJhbmRvbUZyZWVTcHJpdGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXREaXIgPSAocGk6IGludGVnZXIpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYXRoVGlsZXMsIHBpKVxyXG4gICAgICAgICAgICBsZXQgW2kxLCBqMV0gPSB0aGlzLnBhdGhUaWxlc1twaV1cclxuICAgICAgICAgICAgbGV0IFtpMiwgajJdID0gdGhpcy5wYXRoVGlsZXNbcGkgKyAxXVxyXG5cclxuICAgICAgICAgICAgbGV0IFtkaSwgZGpdID0gW2kyIC0gaTEsIGoyIC0gajFdXHJcbiAgICAgICAgICAgIGlmIChkaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImdldERpciBmYWlsZWRcIilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBpID0gMDsgcGkgPCB0aGlzLnBhdGhUaWxlcy5sZW5ndGg7IHBpKyspIHtcclxuICAgICAgICAgICAgbGV0IFtpMSwgajFdID0gdGhpcy5wYXRoVGlsZXNbcGldXHJcblxyXG4gICAgICAgICAgICBpZiAocGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gNlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBpID09IHRoaXMucGF0aFRpbGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkMSA9IChnZXREaXIocGkgLSAxKSArIDIpICUgNFxyXG4gICAgICAgICAgICAgICAgbGV0IGQyID0gZ2V0RGlyKHBpKVxyXG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBbZDEsIGQyXSA9IFtkMiwgZDFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBPcmRlciBvZiBzcHJpdGVzICgwMiBtZWFuaW5nIGQxPTAsIGQyPTIpOlxyXG4gICAgICAgICAgICAgICAgLy8gMDEgMDIgMDMgMTIgMTMgMjNcclxuICAgICAgICAgICAgICAgIGlmIChkMSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgLSAxXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSBkMiArIDFcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZDEgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDUgLy8gb25seSAyMyBsZWZ0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGludCA9IFBoYXNlci5EaXNwbGF5LkNvbG9yLkdldENvbG9yKFxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcclxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnc7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmZyb21HcmlkUG9zKGksIGopXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksICd0aWxlc2V0JywgdGhpcy50aWxlU3ByaXRlc1tpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5CdWlsZGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc2V0VGludCh0aGlzLnRpbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsRnJvbSA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgXCJwb3J0YWxGcm9tXCIsIDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5FbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFRvID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCBcInBvcnRhbFRvXCIsIDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKSB7XHJcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZChncmFwaGljcylcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDMsIDB4ZmZmZmZmLCAxKTtcclxuICAgICAgICAvLyB2aXN1YWxpemUgdGhlIHBhdGhcclxuICAgICAgICB0aGlzLnBhdGguZHJhdyhncmFwaGljcyk7XHJcblxyXG4gICAgICAgIHRoaXMucG9ydGFsRnJvbS5hbmltcy5wbGF5KHtcclxuICAgICAgICAgICAga2V5OiBcInBvcnRhbEZyb21fc3BpblwiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wb3J0YWxUby5hbmltcy5wbGF5KHtcclxuICAgICAgICAgICAga2V5OiBcInBvcnRhbFRvX3NwaW5cIixcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdHcmlkKGdyYXBoaWNzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3MpIHtcclxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgMHgwMDAwZmYsIDAuOCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuaDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbygwLCBpICogVElMRV9TSVpFKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKFRJTEVfU0laRSAqIDEwLCBpICogVElMRV9TSVpFKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy53OyBqKyspIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKGogKiBUSUxFX1NJWkUsIDApO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oaiAqIFRJTEVfU0laRSwgVElMRV9TSVpFICogOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuUGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5Cb3VuZHMoaSwgaikgJiYgdGhpcy50aWxlc1tpXVtqXSA9PT0gVGlsZVR5cGUuQnVpbGRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlHZXRFeGlzdGluZ1Rvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcclxuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJzW2ldW2pdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGFjZVRvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHRvd2VyOiBUb3dlcikge1xyXG4gICAgICAgIGlmIChpIDwgMCB8fCBqIDwgMCB8fCBpID49IHRoaXMudyB8fCBqID49IHRoaXMuaCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc1tpXVtqXSA9IFRpbGVUeXBlLk9jY3VwaWVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXSA9IHRvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdXHJcblxyXG4gICAgICAgIGxldCBlZGdlczogR3JpZFBvc1tdID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudyAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFtpLCAwXSlcclxuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgdGhpcy5oIC0gMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdGhpcy5oIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goWzAsIGpdKVxyXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFt0aGlzLncgLSAxLCBqXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2VcclxuXHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxyXG4gICAgICAgIHdoaWxlICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHJhbmRvbUl0ZW0oZWRnZXMpXHJcbiAgICAgICAgICAgIGxldCB0bztcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgdG8gPSByYW5kb21JdGVtKGVkZ2VzKVxyXG4gICAgICAgICAgICB9IHdoaWxlICh0byA9PSBmcm9tKVxyXG5cclxuICAgICAgICAgICAgcGF0aCA9IHRoaXMucmFuZG9tV2Fsayhmcm9tLCB0bylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IDI1XHJcbiAgICAgICAgICAgIGlmIChwYXRoICE9PSBudWxsICYmIHBhdGgubGVuZ3RoID49IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRlbXB0cysrXHJcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA9PSA0MDApIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCBpblwiLCBhdHRlbXB0cywgXCJhdHRlbXB0c1wiKVxyXG5cclxuICAgICAgICB0aGlzLnRpbGVzID0gaW5pdDJEQXJyYXkodGhpcy53LCB0aGlzLmgsIFRpbGVUeXBlLkJ1aWxkYWJsZSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLmZyb21HcmlkUG9zKHBhdGhbaV1bMF0sIHBhdGhbaV1bMV0pXHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsdGVuYXRpdmVseTogdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCguLi4pXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBhdGggPSBzY2VuZS5hZGQucGF0aCh4LCB5KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCh4LCB5KVxyXG4gICAgICAgICAgICAgICAgLy8gc2NlbmUuYWRkT2JqZWN0KHRoaXMucGF0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aC5saW5lVG8oeCwgeSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNldFRvID0gVGlsZVR5cGUuUGF0aFxyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUbyA9IFRpbGVUeXBlLlN0YXJ0XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSBwYXRoLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFRvID0gVGlsZVR5cGUuRW5kXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudGlsZXNbcGF0aFtpXVswXV1bcGF0aFtpXVsxXV0gPSBzZXRUb1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgdGVycmFpbi5cIilcclxuXHJcbiAgICAgICAgdGhpcy5wYXRoVGlsZXMgPSBwYXRoXHJcbiAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb21XYWxrKGZyb206IEdyaWRQb3MsIHRvOiBHcmlkUG9zKTogQXJyYXk8R3JpZFBvcz4ge1xyXG4gICAgICAgIGxldCBwYXRoID0gW11cclxuICAgICAgICBsZXQgc2VlbiA9IG5ldyBTZXQoKVxyXG5cclxuICAgICAgICBjb25zdCBhZGRUb1BhdGggPSAocG9zOiBHcmlkUG9zKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFubmVkIG9mIHRoaXMubmVpZ2hib3JzKHBhdGhbcGF0aC5sZW5ndGggLSAxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWVuLmFkZChiYW5uZWQudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoLnB1c2gocG9zKVxyXG4gICAgICAgICAgICBzZWVuLmFkZChwb3MudG9TdHJpbmcoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFRvUGF0aChmcm9tKVxyXG5cclxuICAgICAgICBsZXQgc3RlcHMgPSAwXHJcbiAgICAgICAgd2hpbGUgKHBhdGhbcGF0aC5sZW5ndGggLSAxXSAhPSB0bykge1xyXG4gICAgICAgICAgICBzdGVwcysrXHJcbiAgICAgICAgICAgIGlmIChzdGVwcyA9PSAxMDApIGJyZWFrXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV1cclxuXHJcbiAgICAgICAgICAgIGlmIChwb3MudG9TdHJpbmcoKSA9PT0gdG8udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGggIC8vIFN1Y2Nlc3MhXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjYW5kcyA9IHRoaXMubmVpZ2hib3JzKHBvcylcclxuICAgICAgICAgICAgY2FuZHMgPSBjYW5kcy5maWx0ZXIocCA9PiAhc2Vlbi5oYXMocC50b1N0cmluZygpKSlcclxuXHJcbiAgICAgICAgICAgIGlmIChjYW5kcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsICAvLyBGYWlsIVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gcmFuZG9tSXRlbShjYW5kcylcclxuICAgICAgICAgICAgYWRkVG9QYXRoKG5leHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGF0aFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmVpZ2hib3JzKHBvczogR3JpZFBvcywgcGFkID0gMCkge1xyXG4gICAgICAgIGxldCByZXMgPSBbXHJcbiAgICAgICAgICAgIFtwb3NbMF0gKyAxLCBwb3NbMV1dLFxyXG4gICAgICAgICAgICBbcG9zWzBdIC0gMSwgcG9zWzFdXSxcclxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdICsgMV0sXHJcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSAtIDFdLFxyXG4gICAgICAgIF1cclxuICAgICAgICByZXMgPSByZXMuZmlsdGVyKHAgPT4gdGhpcy5pbkJvdW5kcyhwWzBdLCBwWzFdKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21HcmlkUG9zKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcclxuICAgICAgICByZXR1cm4gWyhpICsgMC41KSAqIFRJTEVfU0laRSwgKGogKyAwLjUpICogVElMRV9TSVpFXVxyXG4gICAgfVxyXG5cclxuICAgIGluQm91bmRzKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHBhZCA9IDApIHtcclxuICAgICAgICByZXR1cm4gKGkgPj0gcGFkXHJcbiAgICAgICAgICAgICYmIGkgPCB0aGlzLncgLSBwYWRcclxuICAgICAgICAgICAgJiYgaiA+PSBwYWRcclxuICAgICAgICAgICAgJiYgaiA8IHRoaXMuaCAtIHBhZClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSXRlbShhcnJheSkge1xyXG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoUGxheWVySW5mby5MZXZlbFJORy5mcmFjKCkgKiBhcnJheS5sZW5ndGgpXVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21GcmVlU3ByaXRlKCkge1xyXG4gICAgY29uc3QgblNwZWNpYWxTcHJpdGVzID0gOFxyXG4gICAgcmV0dXJuIG5TcGVjaWFsU3ByaXRlcyArIE1hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogKE5fVElMRVNFVF9TUFJJVEVTIC0gblNwZWNpYWxTcHJpdGVzKSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdDJEQXJyYXk8VFZhbD4oZGltMSwgZGltMiwgdmFsdWU6IFRWYWwpOiBUVmFsW11bXSB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KGRpbTEpXHJcbiAgICAgICAgLmZpbGwoZmFsc2UpXHJcbiAgICAgICAgLm1hcCgoKSA9PiBuZXcgQXJyYXkoZGltMilcclxuICAgICAgICAgICAgLmZpbGwodmFsdWUpKTtcclxufSIsImltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbmltcG9ydCAqIGFzIHRvd2VycyBmcm9tIFwiLi90b3dlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlck1hbmFnZXIge1xyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuICAgIHRvd2VyVHlwZXM6IHsgW2tleTpzdHJpbmddOiBhbnl9ID0ge1xyXG4gICAgICAgICdCYXNpYyc6IFt0b3dlcnMuQmFzaWNUdXJyZXQsIGNmZy5CYXNpY10sXHJcbiAgICAgICAgJ011bHRpc2hvdCc6IFt0b3dlcnMuTXVsdGlzaG90VHVycmV0LCBjZmcuTXVsdGlzaG90XSxcclxuICAgICAgICAnU25pcGVyJzogW3Rvd2Vycy5TbmlwZXJUdXJyZXQsIGNmZy5TbmlwZXJdLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGFjZVRvd2VyKHBvaW50ZXIsIHRvd2VyVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMuc2NlbmUudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnRlcnJhaW4uY2FuUGxhY2VUb3dlcihpLCBqKSkge1xyXG4gICAgICAgICAgICB2YXIgdG93ZXI6IHRvd2Vycy5Ub3dlciA9IHRoaXMuc2NlbmUudG93ZXJzLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWRkU2NlbmUodGhpcy5zY2VuZS5zY2VuZS5rZXkpXHJcbiAgICAgICAgICAgIGlmICh0b3dlcikge1xyXG4gICAgICAgICAgICAgICAgdG93ZXIubWFrZShpLCBqLCBuZXdTY2VuZS5zY2VuZS5rZXksIHRoaXMudG93ZXJUeXBlc1t0b3dlclR5cGVdWzFdLCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVswXSk7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLm1vbmV5IC09IHRvd2VyLmNvbmZpZy5wcmljZVxyXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2V0VG93ZXJQYXJlbnQodG93ZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBpbXBvcnQgeyBHcmlkUG9zaXRpb24gfSBmcm9tIFwiLi90ZXJyYWluXCI7XHJcblxyXG5pbXBvcnQgeyBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYsIFRPV0VSX0hFQUxUSF9SRUdFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9oZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbmltcG9ydCB7IFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVG93ZXJDb25maWcsIFJBTkdFX0lORElDQVRPUl9DT05GSUcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4vZW5lbXlcIjtcclxuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcclxuXHJcblxyXG4vLyB0b2RvOiBtb3ZlIHRvIHNjZW5lP1xyXG5mdW5jdGlvbiBnZXRFbmVteSh4LCB5LCByYW5nZSwgZW5lbWllcywgbnVtVG9HZXQpOiBFbmVteUJhc2VbXSB7XHJcbiAgICBsZXQgb3V0RW5lbWllczogRW5lbXlCYXNlW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBlbmVteUdyb3VwIGluIGVuZW1pZXMpIHtcclxuICAgICAgICBsZXQgZW5lbXlVbml0cyA9IGVuZW1pZXNbZW5lbXlHcm91cF0uZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15VW5pdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15VW5pdHNbaV0uYWN0aXZlICYmIFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4oeCwgeSwgZW5lbXlVbml0c1tpXS54LCBlbmVteVVuaXRzW2ldLnkpIDw9IHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRFbmVtaWVzLnB1c2goZW5lbXlVbml0c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG91dEVuZW1pZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG91dEVuZW1pZXMuc29ydCgoYSwgYikgPT4gYi5mb2xsb3dlci50IC0gYS5mb2xsb3dlci50KVxyXG4gICAgICAgIG91dEVuZW1pZXMubGVuZ3RoID0gTWF0aC5taW4obnVtVG9HZXQsIG91dEVuZW1pZXMubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBvdXRFbmVtaWVzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgICBjb25maWc6IFRvd2VyQ29uZmlnXHJcbiAgICBzdGF0czogVG93ZXJDb25maWdcclxuXHJcbiAgICBzY2VuZTogVERTY2VuZVxyXG5cclxuICAgIHRvd2VyVHVycmV0OiBfVG93ZXJUdXJyZXRcclxuICAgIHRvd2VyTWlkOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcbiAgICB0b3dlckJhc2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcclxuICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyXHJcbiAgICByYW5nZUluZGljYXRvcjogUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlXHJcblxyXG4gICAgbGV2ZWw6IGludGVnZXJcclxuICAgIGxldmVsVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuXHJcbiAgICAvLyBMb2NhdGlvbiBpbiB0aGUgdGRTY2VuZVxyXG4gICAgeENvb3JkOiBudW1iZXJcclxuICAgIHlDb29yZDogbnVtYmVyXHJcblxyXG4gICAgLy8gVGhlc2UgYXJlIHVzZWQgZm9yIHRoZSBsZXZlbHVwIGVmZmVjdFxyXG4gICAgcGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXJcclxuICAgIGVtaXR0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyXHJcblxyXG4gICAgcHJpdmF0ZSBpbm5lclRvd2VyU2NlbmVLZXk6IHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvd2VyU2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih0b3dlclNjZW5lLCAwLCAwKVxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0b3dlclNjZW5lKVxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSB0b3dlclNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMuc2NlbmUuYWRkLnBhcnRpY2xlcygncGFydGljbGVfcmVkJyk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gdGhpcy5wYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgIGxpZmVzcGFuOiAyMDAsXHJcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXHJcbiAgICAgICAgICAgIHNwZWVkOiAwLFxyXG4gICAgICAgICAgICBzY2FsZToge3N0YXJ0OiAwLCBlbmQ6IDF9LFxyXG4gICAgICAgICAgICBvbjogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGV2ZWxVcCgpIHtcclxuICAgICAgICB0aGlzLmxldmVsKys7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuaW5wdXQuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5zb3VuZE1hbmFnZXIubGV2ZWx1cFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmV4cGxvZGUoMjAsIHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCk7ICAvLyB0aGlzLnggZG9lc24ndCB3b3JrIGJ0d1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG1ha2UoaTogbnVtYmVyLCBqOiBudW1iZXIsIGlubmVyVG93ZXJTY2VuZUtleTogc3RyaW5nLCBjb25maWc6IFRvd2VyQ29uZmlnLCB0b3dlckNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnXHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0ID0gbmV3IHRvd2VyQ2xhc3NOYW1lKHRoaXMuc2NlbmUsIHRoaXMuY29uZmlnLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLnhDb29yZCA9IGkgKiBUSUxFX1NJWkUgKyBUSUxFX1NJWkUgLyAyXHJcbiAgICAgICAgdGhpcy55Q29vcmQgPSBqICogVElMRV9TSVpFICsgVElMRV9TSVpFIC8gMlxyXG5cclxuICAgICAgICB0aGlzLnRvd2VyQmFzZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0aGlzLnhDb29yZCwgdGhpcy55Q29vcmQsICd0b3dlcmJhc2VzJywgdGhpcy5jb25maWcuc3ByaXRlQmFzZSk7XHJcbiAgICAgICAgdGhpcy50b3dlckJhc2Uuc2V0VGludCh0aGlzLmNvbmZpZy50aW50QmFzZSk7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlckJhc2UpO1xyXG4gICAgICAgIHRoaXMudG93ZXJNaWQgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodGhpcy54Q29vcmQsIHRoaXMueUNvb3JkLCAndG93ZXJtaWRzJywgdGhpcy5jb25maWcuc3ByaXRlTWlkKTtcclxuICAgICAgICB0aGlzLnRvd2VyTWlkLnNldFRpbnQodGhpcy5jb25maWcudGludE1pZCk7XHJcbiAgICAgICAgdGhpcy50b3dlck1pZC5hbmltcy5wbGF5KHtcclxuICAgICAgICAgICAga2V5OiBgdG93ZXJNaWRzX3NwaW5gXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnRvd2VyTWlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvciA9IHRoaXMuc2NlbmUuYWRkLmNpcmNsZShcclxuICAgICAgICAgICAgdGhpcy54Q29vcmQsIHRoaXMueUNvb3JkLCBjb25maWcucmFuZ2UoMSksXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuY29sb3VyLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFN0cm9rZVN0eWxlKFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZVdpZHRoLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VDb2xvdXIpO1xyXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5yYW5nZUluZGljYXRvcik7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy50b3dlckJhc2Uub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4ubGlzdC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jb25zdHJ1Y3Rvci5uYW1lLm1hdGNoKC9eLitFbmVteSQvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaHVkU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcImh1ZFNjZW5lXCIpIGFzIEh1ZFNjZW5lXHJcbiAgICAgICAgICAgIGh1ZFNjZW5lLnNldERlc2NyaXB0aW9uVG93ZXIodGhpcy5jb25maWcsIHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50b3dlckJhc2Uub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7IHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZShmYWxzZSkgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQucGxhY2UoaSwgaiwgdGhpcy5zY2VuZS50ZXJyYWluKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGxhY2VUb3dlcihpLCBqLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlclR1cnJldCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLm1ha2UodGhpcy54Q29vcmQsIHRoaXMueUNvb3JkICsgVElMRV9TSVpFIC8gMiAtIDgsIFRJTEVfU0laRSAtIDE0KVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoQmFyKVxyXG5cclxuICAgICAgICB0aGlzLmxldmVsID0gMVxyXG5cclxuICAgICAgICBjb25zdCBwYWQgPSAzXHJcbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnhDb29yZCArIDE1LCB0aGlzLnlDb29yZCAtIDQsIFwiXCIgKyB0aGlzLmxldmVsLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmxldmVsVGV4dClcclxuXHJcbiAgICAgICAgdGhpcy5pbm5lclRvd2VyU2NlbmVLZXkgPSBpbm5lclRvd2VyU2NlbmVLZXlcclxuXHJcbiAgICAgICAgbGV0IGlubmVyVG93ZXJTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KGlubmVyVG93ZXJTY2VuZUtleSkgYXMgVERTY2VuZVxyXG4gICAgICAgIGlubmVyVG93ZXJTY2VuZS5vbkVuZW15UmVhY2hlZEVuZCgoZGFtYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmhlYWx0aCAtPSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUZcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlICogKCArICFQbGF5ZXJJbmZvLmlzUGF1c2VkKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC51cGRhdGUoZGVsdGEpXHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLmhlYWx0aCArPSBUT1dFUl9IRUFMVEhfUkVHRU4gKiBkZWx0YVxyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIuaGVhbHRoID49IDEuMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5sZXZlbFVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVcCgpXHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0LnNldFRleHQoXCJcIiArIHRoaXMubGV2ZWwpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsIC0gMSkgPCB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VTY2FsZSA9IHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCkgLyB0aGlzLnN0YXRzLnJhbmdlKDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRTY2FsZShyYW5nZVNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxyXG4gICAgfVxyXG5cclxuICAgIGdldElubmVyVG93ZXJTY2VuZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclRvd2VyU2NlbmVLZXlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFic3RyYWN0IGNsYXNzIF9Ub3dlclR1cnJldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XHJcbiAgICBuZXh0VGljOiBudW1iZXJcclxuICAgIHg6IG51bWJlclxyXG4gICAgeTogbnVtYmVyXHJcbiAgICBiYXNlWDogbnVtYmVyXHJcbiAgICBiYXNlWTogbnVtYmVyXHJcbiAgICBwYXJlbnQ6IFRvd2VyXHJcblxyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgc3ByaXRlOiBzdHJpbmcsIHRpbnQ6IG51bWJlciwgcGFyZW50OiBUb3dlcikge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAndG93ZXJ0b3BzJywgc3ByaXRlKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnNldFRpbnQodGludCk7XHJcbiAgICAgICAgdGhpcy5uZXh0VGljID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSB3aWxsIHBsYWNlIHRoZSB0b3dlciBhY2NvcmRpbmcgdG8gdGhlIGdyaWRcclxuICAgIHBsYWNlKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHRlcnJhaW46IFRlcnJhaW4pIHtcclxuICAgICAgICBbdGhpcy54LCB0aGlzLnldID0gdGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxyXG4gICAgICAgIHRoaXMuYmFzZVggPSB0aGlzLnhcclxuICAgICAgICB0aGlzLmJhc2VZID0gdGhpcy55XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSgpIHtcclxuICAgICAgICBsZXQgZW5lbWllcyA9IGdldEVuZW15KFxyXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChlbmVtaWVzKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGVuZW1pZXNbMF1cclxuXHJcbiAgICAgICAgICAgIGxldCBbeFByZWQsIHlQcmVkXSA9IHRoaXMucHJlZGljdEVuZW15UG9zaXRpb25Gb3JTaG90KGVuZW15KVxyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCB4UHJlZCwgeVByZWQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhbWFnZSA9IHRoaXMucGFyZW50LnN0YXRzLmRhbWFnZSh0aGlzLnBhcmVudC5sZXZlbClcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXHJcbiAgICAgICAgICAgICAgICBkYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lLmlucHV0LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudC5zdGF0cy5uYW1lID09PSBcIlNuaXBlclwiKSAgLy8gdGVtcG9yYXJ5IGhhY2tcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5zb3VuZE1hbmFnZXIuc25pcGVyU291bmQucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLnNvdW5kTWFuYWdlci5zaG9vdFNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcHJlZGljdEVuZW15UG9zaXRpb25Gb3JTaG90KGVuZW15OiBFbmVteUJhc2UpIHtcclxuICAgICAgICAvLyBBcHByb3hpbWF0ZSB3aGVyZSB0aGUgZW5lbXkgaXMgZ29pbmcgdG8gYmUgd2hlbiB0aGUgYnVsbGV0IGhpdHMgaXQuXHJcblxyXG4gICAgICAgIC8vIENvbXB1dGUgdGhlIHRpbWUgdG8gaGl0IGVuZW15IHdoZW4gYWltaW5nIGRpcmVjdGx5IGF0IGl0XHJcbiAgICAgICAgbGV0IGRpc3RhbmNlID0gUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgZW5lbXkueCwgZW5lbXkueSlcclxuICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZCAqIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKVxyXG4gICAgICAgIGxldCBtc1RvSGl0ID0gZGlzdGFuY2UgLyBzcGVlZCAqIDEwMDBcclxuXHJcbiAgICAgICAgLy8gU2hvb3QgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBlbmVteSB3aWxsIGJlIGFmdGVyIG1zVG9IaXQgbWlsbGlzZWNvbmRzLlxyXG4gICAgICAgIGxldCB0MiA9IGVuZW15LmZvbGxvd2VyLnQgKyBlbmVteS5zdGF0cy5zcGVlZCAqIG1zVG9IaXRcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy5zY2VuZS50ZXJyYWluLnBhdGguZ2V0UG9pbnQoTWF0aC5taW4odDIsIDEpKVxyXG4gICAgICAgIHJldHVybiBbcmVzLnggKyBlbmVteS54T2Zmc2V0LCByZXMueSArIGVuZW15LnlPZmZzZXRdXHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKSB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IChhbmdsZSArIE1hdGguUEkgLyAyKSAqIFBoYXNlci5NYXRoLlJBRF9UT19ERUc7XHJcbiAgICAgICAgbGV0IHJlY29pbCA9IE1hdGgubWluKGRhbWFnZSAqIDAuNSwgMjUpXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5iYXNlWFxyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuYmFzZVlcclxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5taW4odGhpcy5wYXJlbnQuY29uZmlnLmZpcmVyYXRlKHRoaXMucGFyZW50LmxldmVsKSAqIDAuOCwgMTAwICsgZGFtYWdlKSxcclxuICAgICAgICAgICAgeDogdGhpcy54ICsgTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJKSAqIHJlY29pbCxcclxuICAgICAgICAgICAgeTogdGhpcy55ICsgTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJKSAqIHJlY29pbCxcclxuICAgICAgICAgICAgZWFzZTogJ1F1YWQnLFxyXG4gICAgICAgICAgICB5b3lvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dFRpYykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJlKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWMgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5wYXJlbnQuc3RhdHMuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpYyA9IHRoaXMubGFzdFRpbWUgKyA1MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1R1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpc2hvdFR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmaXJlKCkgeyAgLy8gdGhpcyBiZWhhdmlvdXIgc2hvdWxkIGJlIGluIF9Ub3dlclR1cnJldC5maXJlIGJ0d1xyXG4gICAgICAgIGxldCBudW1UYXJnZXRzID0gM1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zdGF0cy5udW1UYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIG51bVRhcmdldHMgPSB0aGlzLnBhcmVudC5zdGF0cy5udW1UYXJnZXRzKHRoaXMucGFyZW50LmxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteSh0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLCB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIG51bVRhcmdldHMpO1xyXG5cclxuICAgICAgICBpZiAoZW5lbWllcyAmJiBlbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgZW5lbWllcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgZW5lbXkueCwgZW5lbXkueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGFtYWdlID0gdGhpcy5wYXJlbnQuc3RhdHMuZGFtYWdlKHRoaXMucGFyZW50LmxldmVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSlcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lID09IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFjdGl2ZVNjZW5lKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLnNvdW5kTWFuYWdlci5tdWx0aXNob3RTb3VuZC5wbGF5KCk7ICAvLyB0aGlzIHNob3VsZCBiZSBpbiBjb25maWcgaWYgdGhpcyB3ZXJlIGRvbmUgcHJvcGVybHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNuaXBlclR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVuZW15Q29uZmlnLCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUsIEVORU1ZX0NPTkZJR1MsIFdhdmVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4vZW5lbXlcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbi8vIGltcG9ydCB7IEVuZW15LCBGYXRFbmVteX0gZnJvbSBcIi4vZW5lbXlcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2F2ZU1hbmFnZXIge1xyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuICAgIGN1cnJlbnRXYXZlOiBpbnRlZ2VyID0gMFxyXG4gICAgbmV4dEVuZW15OiBpbnRlZ2VyID0gMFxyXG4gICAgZGVhZERhbmdlcjogaW50ZWdlciA9IDBcclxuICAgIHJlbWFpbmluZ0RhbmdlcjogaW50ZWdlciA9IDBcclxuICAgIHdhdmVEaWZmaWN1bHR5OiBpbnRlZ2VyID0gMFxyXG5cclxuICAgIHdhdmVBY3RpdmU6IGJvb2xlYW4gIC8vIGZhbHNlIGZvciBuZXN0ZWQgd2F2ZXNcclxuICAgIG5leHRXYXZlVGltZTogaW50ZWdlciA9IDBcclxuICAgIHJlc3Bhd25RdWV1ZTogW0VuZW15Q29uZmlnLCBpbnRlZ2VyXVtdID0gW107XHJcbiAgICByZXNwYXduSGVhbHRoOiBpbnRlZ2VyICAvLyB6ZXJvIHVubGVzcyByZXNwYXduaW5nIGVuZW15LCBoYWNrXHJcblxyXG4gICAgZW5lbXlJbnRlcnZhbDogaW50ZWdlclxyXG5cclxuICAgIHF1ZXVlZEVuZW15OiBhbnlcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGZhbHNlIGZvciBuZXN0ZWQgYmVoYXZpb3IgaW4gdXBkYXRlKClcclxuICAgICAgICB0aGlzLndhdmVBY3RpdmUgPSAodGhpcy5zY2VuZS5zY2VuZUxldmVsID4gMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2F2ZURpZmZpY3VsdHkoKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDFlOSAvLyBhIGxvdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRXYXZlRGlmZmljdWx0eSgpIHtcclxuICAgICAgICAvL1RPRE86IGFkZCBkaWZmaWN1bHR5IHNjYWxpbmcgYW5kIGJhbGFuY2luZyBmb3Igd2F2ZXNcclxuICAgICAgICB0aGlzLndhdmVEaWZmaWN1bHR5ID0gV2F2ZUNvbmZpZy5vdXRlcldhdmVEYW5nZXIodGhpcy5jdXJyZW50V2F2ZSlcclxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IHRoaXMud2F2ZURpZmZpY3VsdHlcclxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSBXYXZlQ29uZmlnLm91dGVyRW5lbXlJbnRlcnZhbFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dFdhdmUoKSB7XHJcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlKys7XHJcbiAgICAgICAgdGhpcy5nZXRXYXZlRGlmZmljdWx0eSgpO1xyXG4gICAgICAgIFBsYXllckluZm8ud2F2ZUhlYWx0aFJlZ2VuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIHdhdmUgJyArIHRoaXMuY3VycmVudFdhdmUgKyAnLCB3YXZlIGRpZmZpY3VsdHk6ICcgKyB0aGlzLndhdmVEaWZmaWN1bHR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduRW5lbXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzcGF3blF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3Bhd24gPSB0aGlzLnJlc3Bhd25RdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bhd25IZWFsdGggPSByZXNwYXduWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByZXNwYXduWzBdLmRhbmdlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyZXNwYXduWzBdLm5hbWVdLmdldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhbmRFbmVteSA9IHRoaXMuZ2V0UmFuZEVuZW15KChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGVuZW15LmRhbmdlciA8PSB0aGlzLnJlbWFpbmluZ0RhbmdlcikgJiYgKGVuZW15Lm1pbldhdmUgPD0gdGhpcy5jdXJyZW50V2F2ZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJhbmRFbmVteSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByYW5kRW5lbXkuZGFuZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5hbGxFbmVtaWVzW3JhbmRFbmVteS5uYW1lXS5nZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVtYWluaW5nRGFuZ2VyID0gMDtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzcGF3bihyZXNwYXduOiBFbmVteUNvbmZpZywgcmVtYWluaW5nSGVhbHRoOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNwYXduUXVldWUucHVzaChbcmVzcGF3biwgcmVtYWluaW5nSGVhbHRoXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxyXG4gICAgICAgIGxldCBlbmVteTogRW5lbXlCYXNlXHJcbiAgICAgICAgbGV0IHdhdmU6IGludGVnZXJcclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy53YXZlQWN0aXZlICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRXYXZlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F2ZSgpOyAgLy8gbm8gd2F2ZXMgaW4gbmVzdGVkIGxheWVyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ0RhbmdlciA+IDAgJiYgdGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc3Bhd25FbmVteSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYWREYW5nZXIgPT09IHRoaXMud2F2ZURpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2F2ZSBcIiArIHRoaXMuY3VycmVudFdhdmUgKyBcIiBjb21wbGV0ZSEgTmV4dCB3YXZlIGluIFwiICsgUEFVU0VfQUZURVJfV0FWRV9USU1FKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhZERhbmdlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdmVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmVUaW1lID0gdGhpcy5sYXN0VGltZSArIFBBVVNFX0FGVEVSX1dBVkVfVElNRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3YXZlID0gdGhpcy5jdXJyZW50V2F2ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWV1ZWRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRFbmVteSA9IHRoaXMuZ2V0UmFuZEVuZW15KChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmVteS5taW5XYXZlIDw9IDIgKiBXYXZlQ29uZmlnLmxldmVsVG9XYXZlKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmxhc3RUaW1lICogKFdhdmVDb25maWcuZGFuZ2VyUGVyU2VjKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbCkgKiAwLjAwMSlcclxuICAgICAgICAgICAgY29uc3QgYiA9ICh0aGlzLnF1ZXVlZEVuZW15LmRhbmdlciAqIDEuMClcclxuICAgICAgICAgICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnF1ZXVlZEVuZW15Lm5hbWVdLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sYXN0VGltZSwgYilcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSBudWxsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdhdmUgPSBXYXZlQ29uZmlnLmxldmVsVG9XYXZlKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbmVteSkge1xyXG4gICAgICAgICAgICBlbmVteS5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGVuZW15LnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgZW5lbXkgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYXRoXHJcbiAgICAgICAgICAgIGVuZW15LnN0YXJ0T25QYXRoKHdhdmUsIHRoaXMucmVzcGF3bkhlYWx0aCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcGF3bkhlYWx0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5leHRFbmVteSA9IHRoaXMubGFzdFRpbWUgKyB0aGlzLmVuZW15SW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZEVuZW15KGZpbHRlcl9mbik6IEVuZW15Q29uZmlnIHtcclxuICAgICAgICBsZXQgYXZhaWxFbmVtaWVzID0gW11cclxuICAgICAgICBmb3IobGV0IGVuZW15IG9mIEVORU1ZX0NPTkZJR1MpIHsgIC8vIFNlbGVjdCBhbGwgZW5lbWllcyB0aGF0IGNhbiBiZSBzcGF3bmVkXHJcbiAgICAgICAgICAgIGlmIChlbmVteS5taW5XYXZlID49IDAgJiYgZmlsdGVyX2ZuKGVuZW15KSlcclxuICAgICAgICAgICAgICAgIGF2YWlsRW5lbWllcy5wdXNoKGVuZW15KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdmFpbEVuZW1pZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIG9uZSBvZiB0aGVtXHJcbiAgICAgICAgICAgIGxldCByYW5kRW5lbXkgPSBhdmFpbEVuZW1pZXNbTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiBhdmFpbEVuZW1pZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIHJldHVybiByYW5kRW5lbXlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9