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
        else {
            this.emitter.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdGlvbnNDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NvdW5kTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVycmFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJNYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy90b3dlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dhdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNB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LEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQztRQUVsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBRTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFFN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFFL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVB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YSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBRU8sa0NBQVksR0FBcEIsVUFBcUIsU0FBUztRQUMxQixJQUFJLFlBQVksR0FBRyxFQUFFO1FBQ3JCLEtBQWlCLFVBQWEsRUFBYix3Q0FBYSxFQUFiLDJCQUFhLEVBQWIsSUFBYSxFQUFFLEVBQUcseUNBQXlDO1lBQXhFLElBQUksS0FBSztZQUNULElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDdEMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUVELElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsNEJBQTRCO1lBQzVCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sU0FBUztTQUNuQjthQUFNO1lBQ0gsT0FBTyxJQUFJO1NBQ2Q7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBeElZLGtDQUFXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBjb25zdCBhbmltYXRpb25zQ29uZmlnID0gW1xyXG4gICAge1xyXG4gICAgICAgIGtleTogJ3dlYWtFbmVteV93YWxrJyxcclxuICAgICAgICBzcHJpdGVTaGVldDogJ3dlYWtFbmVteScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogN30sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdmYXN0RW5lbXlfd2FsaycsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICdmYXN0RW5lbXknLFxyXG4gICAgICAgIGZyYW1lczoge3N0YXJ0OiAwLCBlbmQ6IDd9LFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAnZmF0RW5lbXlfd2FsaycsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICdmYXRFbmVteScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogOX0sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdzcGxpdHRlckZhdEVuZW15X3dhbGsnLFxyXG4gICAgICAgIHNwcml0ZVNoZWV0OiAnc3BsaXR0ZXJGYXRFbmVteScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogOX0sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdhcm1vdXJlZEVuZW15X3dhbGsnLFxyXG4gICAgICAgIHNwcml0ZVNoZWV0OiAnYXJtb3VyZWRFbmVteScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogN30sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdzcGxpdHRlckJpZ0VuZW15X3dhbGsnLFxyXG4gICAgICAgIHNwcml0ZVNoZWV0OiAnc3BsaXR0ZXJCaWdFbmVteScsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogN30sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICdzcGxpdHRlclNtYWxsRW5lbXlfd2FsaycsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICdzcGxpdHRlclNtYWxsRW5lbXknLFxyXG4gICAgICAgIGZyYW1lczoge3N0YXJ0OiAwLCBlbmQ6IDd9LFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAncG9ydGFsRnJvbV9zcGluJyxcclxuICAgICAgICBzcHJpdGVTaGVldDogJ3BvcnRhbEZyb20nLFxyXG4gICAgICAgIGZyYW1lczoge3N0YXJ0OiAwLCBlbmQ6IDd9LFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAga2V5OiAncG9ydGFsVG9fc3BpbicsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICdwb3J0YWxUbycsXHJcbiAgICAgICAgZnJhbWVzOiB7c3RhcnQ6IDAsIGVuZDogN30sXHJcbiAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBrZXk6ICd0b3dlck1pZHNfc3BpbicsXHJcbiAgICAgICAgc3ByaXRlU2hlZXQ6ICd0b3dlcm1pZHMnLFxyXG4gICAgICAgIGZyYW1lczoge3N0YXJ0OiAwLCBlbmQ6IDF9LFxyXG4gICAgICAgIGZyYW1lUmF0ZTogMTBcclxuICAgIH0sXHJcbl0iLCJpbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuL3BsYXllckluZm9cIlxyXG5pbXBvcnQge1REU2NlbmV9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSQURJVVMgPSAxMFxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgZHg6IG51bWJlciA9IDBcclxuICAgIGR5OiBudW1iZXIgPSAwXHJcbiAgICBsaWZlc3BhbjogbnVtYmVyID0gMFxyXG4gICAgc3BlZWQ6IG51bWJlclxyXG4gICAgZGFtYWdlOiBpbnRlZ2VyXHJcblxyXG4gICAgYnVsbGV0SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxyXG4gICAgcGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXJcclxuICAgIGVtaXR0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHggPSAwO1xyXG4gICAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNjAwLCAxKTtcclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMCwgMCwgJ2J1bGxldCcpXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5idWxsZXRJbWFnZSlcclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ3BhcnRpY2xlX3JlZCcpXHJcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gdGhpcy5wYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XHJcbiAgICAgICAgICAgIHNwZWVkOiAxMDAsXHJcbiAgICAgICAgICAgIHNjYWxlOiB7c3RhcnQ6IDAuMywgZW5kOiAwfSxcclxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnQUREJyxcclxuICAgICAgICAgICAgbGlmZXNwYW46IDEwMCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHRvd2VyUmFuZ2UsIHNwZWVkTW9kLCBzY2VuZSkge1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCh0b3dlclJhbmdlICogc3BlZWRNb2QsIDEpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gIEJ1bGxldHMgZmlyZSBmcm9tIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiB0byB0aGUgZ2l2ZW4geC95XHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS5zZXRQb3NpdGlvbih4LCB5KTtcclxuXHJcbiAgICAgICAgLy8gIHdlIGRvbid0IG5lZWQgdG8gcm90YXRlIHRoZSBidWxsZXRzIGFzIHRoZXkgYXJlIHJvdW5kXHJcbiAgICAgICAgLy8gIHRoaXMuc2V0Um90YXRpb24oYW5nbGUpO1xyXG4gICAgICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgaG93IHRvIGJyaW5nIHRvIGZyb250XHJcblxyXG4gICAgICAgIHRoaXMuZHggPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgICAgICAgdGhpcy5keSA9IE1hdGguc2luKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5saWZlc3BhbiA9IDEwMDAgLyBzcGVlZE1vZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmUuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmZsb3coMjApICAvLyBhcmd1bWVudDogZnJlcXVlbmN5ICgwID0gYWx3YXlzKVxyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuc3RhcnRGb2xsb3codGhpcy5idWxsZXRJbWFnZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcCh0aGlzLmJ1bGxldEltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMucGFydGljbGVzKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CdWxsZXRFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2NlbmUuc2NlbmUuaXNWaXNpYmxlKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmV4cGxvZGUoMTAsIHRoaXMuYnVsbGV0SW1hZ2UueCwgdGhpcy5idWxsZXRJbWFnZS55KVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQnVsbGV0RW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGUgKiAoICsgIVBsYXllckluZm8uaXNQYXVzZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmxpZmVzcGFuIC09IGRlbHRhO1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlLnggKz0gdGhpcy5keCAqICh0aGlzLnNwZWVkICogZGVsdGEpO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueSArPSB0aGlzLmR5ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XHJcblxyXG4gICAgICAgICh0aGlzLmJvZHkgYXMgUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHkpLnNldENpcmNsZShSQURJVVMsIHRoaXMuYnVsbGV0SW1hZ2UueCwgdGhpcy5idWxsZXRJbWFnZS55KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnVsbGV0RW5kKClcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuL2VuZW15XCI7XHJcblxyXG4vLyBlbmVteSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSBob3cgbXVjaCBoZWFsdGggdG93ZXIgbG9zZXNcclxuLy8gKHRvd2VyIGhlYWx0aCBpcyBmcm9tIDAgdG8gMSlcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiA9IDAuMlxyXG5cclxuZXhwb3J0IGNvbnN0IFRPV0VSX0hFQUxUSF9SRUdFTiA9IDAuMDAwMDEgKiAyXHJcblxyXG5leHBvcnQgY29uc3QgUEFVU0VfQUZURVJfV0FWRV9USU1FID0gMzAwMDtcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfSEVBTFRIX1JFR0VOOiBudW1iZXIgPSAwOyAgLy8gaG93IG11Y2ggaGVhbHRoIHBlciB3YXZlLCBjYW4gYmUgPCAxXHJcblxyXG5leHBvcnQgY29uc3QgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyA9IHtcclxuICAgICdjb2xvdXInOiAweGJiYmJmZixcclxuICAgICdhbHBoYSc6IDIxMCxcclxuICAgICdlZGdlQ29sb3VyJzogMHg4MDgwZmYsXHJcbiAgICAnZWRnZVdpZHRoJzogNFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdhdmVDb25maWcgPSB7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIG91dGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBIb3cgbXVjaCB0aW1lIGJldHdlZW4gY29uc2VjdXRpdmUgc3Bhd25zIGluIGEgd2F2ZVxyXG4gICAgb3V0ZXJFbmVteUludGVydmFsOiA1MDAsXHJcbiAgICAvLyBIb3cgbXVjaCBkYW5nZXIgaW4gYSB3YXZlXHJcbiAgICBvdXRlcldhdmVEYW5nZXI6ICh3YXZlKSA9PiAod2F2ZSArIDEpICAqIDEwLFxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gaW5uZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBwZXIgc2Vjb25kIGlzIGdlbmVyYXRlZSBpbiBpbm5lciBkZXB0aHM/XHJcbiAgICBkYW5nZXJQZXJTZWM6IChsZXZlbCkgPT4gMTAqbGV2ZWwsXHJcbiAgICAvLyBUbyB3aGF0IHdhdmUgbnVtYmVyIGRvZXMgYSB0b3dlciBsZXZlbCBjb3JyZXNwb25kPyAoZm9yIGVuZW15IHNjYWxpbmcpXHJcbiAgICBsZXZlbFRvV2F2ZTogKGxldmVsKSA9PiAzICogbGV2ZWwsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVuZW15Q29uZmlnID0ge1xyXG4gICAgbmFtZTogc3RyaW5nICAvLyBtdXN0IGJlIHNhbWUgYXMgY29uZmlnIG9iamVjdCBuYW1lXHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nICAvLyBuYW1lIHRvIGJlIGRpc3BsYXllZCB0byBwbGF5ZXJcclxuICAgIGNsYXNzOiBhbnkgIC8vIGNsYXNzIG9mIHRoZSBlbmVteSBhcyBkZWZpbmVkIGluIC4vZW5lbXkudHNcclxuICAgIGhwOiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gY2FuIHNjYWxlIHdpdGggd2F2ZVxyXG4gICAgc3BlZWQ6IG51bWJlciAgLy8gZnJhY3Rpb24gb2YgcGF0aFxyXG4gICAgbW9uZXk6IGludGVnZXIgIC8vIG9uLWtpbGwgcmV3YXJkXHJcbiAgICBkYW1hZ2U6IGludGVnZXIgIC8vIGRhbWFnZSBkZWFsdCBvbiByZWFjaGluZyBlbmRcclxuICAgIGFybW91cjogKGludGVnZXIpID0+IGludGVnZXIgIC8vIGZsYXQgcmVkdWN0aW9uIG9mIGluY29taW5nIGRhbWFnZVxyXG4gICAgZGFuZ2VyOiBpbnRlZ2VyICAvLyBmb3IgY2FsY3VsYXRpbmcgd2F2ZSBkaWZmaWN1bHR5XHJcbiAgICBzcHJpdGVOYW1lOiBzdHJpbmcgIC8vIHNwcml0ZSBhcyBpbXBvcnRlZCBpbiBtZXRhU2NlbmUucHJlbG9hZFxyXG4gICAgdGludDogaW50ZWdlclxyXG4gICAgc3BsaXQ/OiB7ICAvLyBvcHRpb25hbCBzcGxpdCBpbmZvXHJcbiAgICAgICAgY2ZnOiBFbmVteUNvbmZpZyAgLy8gVE9ETzogbWFrZSBzcGxpdCBpbnRvIG11bHRpcGxlIHR5cGVzIHBvc3NpYmxlP1xyXG4gICAgICAgIGFtb3VudDogaW50ZWdlclxyXG4gICAgfVxyXG4gICAgbWluV2F2ZTogaW50ZWdlciAgLy8gZmlyc3Qgd2F2ZSB0aGlzIGNhbiBzcGF3biwgLTEgdG8gbmV2ZXIgc3Bhd25cclxuICAgIGJsdXJiPzogc3RyaW5nICAvLyBzaG93biB0byBwbGF5ZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdlYWs6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnV2VhaycsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnTm9ybWFsJyxcclxuICAgICdjbGFzcyc6IGVuZW0uV2Vha0VuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDE1ICsgMTQqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXHJcbiAgICAnbW9uZXknOiAxLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICd3ZWFrRW5lbXknLFxyXG4gICAgJ2Rhbmdlcic6IDEwLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogMCxcclxuICAgICdibHVyYic6ICdUb28gY3V0ZSB0byBraWxsLi4uIHN1cmVseS4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGYXQ6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnRmF0JyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdDaG9uaycsXHJcbiAgICAnY2xhc3MnOiBlbmVtLkZhdEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwMCArIDcwICogKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gNDAwMDAsXHJcbiAgICAnbW9uZXknOiAzLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMTAwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZmF0RW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogMTQsXHJcblx0J2JsdXJiJzogJ0xhcmdlIGFuZCBpbiBjaGFyZ2UuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXJtb3VyZWQ6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnQXJtb3VyZWQnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ0FybW91cmVkJyxcclxuICAgICdjbGFzcyc6IGVuZW0uQXJtb3VyZWRFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDE0Kih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDMwMDAwLFxyXG4gICAgJ21vbmV5JzogMixcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiBNYXRoLm1pbigzICsgKE1hdGguZmxvb3Iod2F2ZS81KSksMTQpLFxyXG4gICAgJ2Rhbmdlcic6IDEwMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ2FybW91cmVkRW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogMTAsXHJcblx0J2JsdXJiJzogJ1RoZSBoYXQgaXMgc3VycHJpc2luZ2x5IHN0dXJkeS4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGYXN0OiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ0Zhc3QnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1NwZWVkeScsXHJcbiAgICAnY2xhc3MnOiBlbmVtLkZhc3RFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAxMCArIDEwKih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDEwMDAwLFxyXG4gICAgJ21vbmV5JzogMSxcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDMwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZmFzdEVuZW15JyxcclxuICAgICd0aW50JzogMHhmZmZmZmYsXHJcbiAgICAnbWluV2F2ZSc6IDYsXHJcblx0J2JsdXJiJzogJ1RoZSBib290cyBhcmVuXFwndCBqdXN0IGZvciBzaG93ISdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyU21hbGw6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJTbWFsbCcsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BsaXR0ZXIgYmFieScsXHJcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyU21hbGxFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAxMCArIDgqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXHJcbiAgICAnbW9uZXknOiAwLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMjAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdzcGxpdHRlclNtYWxsRW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogLTEsXHJcblx0J2JsdXJiJzogJ0F3dywgbG9vaywgdGhleVxcJ3JlIGp1c3QgYmFiaWVzISdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyQmlnOiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ1NwbGl0dGVyQmlnJyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGxpdHRlcicsXHJcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyQmlnRW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyAyMCood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyAzMDAwMCxcclxuICAgICdtb25leSc6IDEsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAzMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyQmlnRW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdzcGxpdCc6IHtcclxuICAgICAgICAnY2ZnJzogU3BsaXR0ZXJTbWFsbCxcclxuICAgICAgICAnYW1vdW50JzogMlxyXG4gICAgfSxcclxuICAgICdtaW5XYXZlJzogOCxcclxuXHQnYmx1cmInOiAnRXllcyB0byBtZWV0IHlvdS4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTcGxpdHRlckZhdDogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdTcGxpdHRlckZhdCcsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnVGhlIEJpZyBPbmUnLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5TcGxpdHRlckZhdEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwMCArIDQwKih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDQwMDAwLFxyXG4gICAgJ21vbmV5JzogMixcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDIwMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyRmF0RW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdzcGxpdCc6IHtcclxuICAgICAgICAnY2ZnJzogU3BsaXR0ZXJCaWcsXHJcbiAgICAgICAgJ2Ftb3VudCc6IDJcclxuICAgIH0sXHJcbiAgICAnbWluV2F2ZSc6IDE4LFxyXG5cdCdibHVyYic6ICdFeWVzIHRvIG1lZXQgeW91Li4uIHR3by4nXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEVORU1ZX0NPTkZJR1MgPSBbV2VhaywgRmF0LCBBcm1vdXJlZCwgRmFzdCwgU3BsaXR0ZXJCaWcsIFNwbGl0dGVyU21hbGwsIFNwbGl0dGVyRmF0XVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFRvd2VyQ29uZmlnID0ge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBkYW1hZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcclxuICAgIGZpcmVyYXRlOiAoaW50ZWdlcikgPT4gbnVtYmVyICAvLyBtaWxpc2Vjb25kcyBiZXR3ZWVuIGVhY2ggc2hvdFxyXG4gICAgcmFuZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcclxuICAgIG51bVRhcmdldHM/OiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gc2V0IGZvciB0b3dlcnMgdGhhdCB0YXJnZXQgbXVsdGlwbGUgZW5lbWllc1xyXG4gICAgYnVsbGV0U3BlZWRNb2Q6IG51bWJlciAgLy8gYnVsbGV0IHdpbGwgcmVhY2ggcmFuZ2UgaW4gMS9idWxsZXRTcGVlZE1vZCBzZWNvbmRzXHJcbiAgICBwcmljZTogbnVtYmVyXHJcbiAgICBzcHJpdGVCYXNlOiBpbnRlZ2VyXHJcbiAgICBzcHJpdGVNaWQ6IGludGVnZXJcclxuICAgIHNwcml0ZVRvcDogaW50ZWdlclxyXG4gICAgdGludEJhc2U6IGludGVnZXJcclxuICAgIHRpbnRNaWQ6IGludGVnZXJcclxuICAgIHRpbnRUb3A6IGludGVnZXJcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCYXNpYzogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiQmFzaWNcIixcclxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiAxNSArIDMwICogKGxldmVsLTEpLFxyXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gMTAwMCxcclxuICAgICdyYW5nZSc6IGxldmVsID0+IDE1MCxcclxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXHJcbiAgICAncHJpY2UnOiA1LFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMCxcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDY3NWE5YyxcclxuICAgICd0aW50VG9wJzogMHhhYWFhZmYsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIk5vdGhpbmcgZmFuY3kuIERhbWFnZSBncm93cyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNuaXBlcjogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiU25pcGVyXCIsXHJcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gNTAgKyAxMjAgKiAobGV2ZWwtMSksXHJcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiA0MDAwLFxyXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gMjAwICsgMzUgKiBsZXZlbCxcclxuICAgICdidWxsZXRTcGVlZE1vZCc6IDUsXHJcbiAgICAncHJpY2UnOiAxMCxcclxuICAgICdzcHJpdGVCYXNlJzogMCxcclxuICAgICdzcHJpdGVNaWQnOiAwLFxyXG4gICAgJ3Nwcml0ZVRvcCc6IDEsXHJcbiAgICAndGludEJhc2UnOiAweGZmZmZmZixcclxuICAgICd0aW50TWlkJzogMHgzYTcxNWQsXHJcbiAgICAndGludFRvcCc6IDB4NDhhYzgxLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogXCJMb25nIHJhbmdlLCBidXQgZmlyZXMgc2xvd2x5LiBEYW1hZ2UgYW5kIHJhbmdlIGdyb3cgd2l0aCBsZXZlbC5cIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNdWx0aXNob3Q6IFRvd2VyQ29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiBcIk11bHRpc2hvdFwiLFxyXG4gICAgJ2RhbWFnZSc6IGxldmVsID0+IDE1ICsgMjAqKGxldmVsLTEpLFxyXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gMTAwMCxcclxuICAgICdyYW5nZSc6IGxldmVsID0+IDk1ICsgMyoobGV2ZWwtMSksXHJcbiAgICAnbnVtVGFyZ2V0cyc6IGxldmVsID0+IDMgKyBNYXRoLmZsb29yKGxldmVsIC8gMiksXHJcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA0LFxyXG4gICAgJ3ByaWNlJzogNyxcclxuICAgICdzcHJpdGVCYXNlJzogMCxcclxuICAgICdzcHJpdGVNaWQnOiAwLFxyXG4gICAgJ3Nwcml0ZVRvcCc6IDIsXHJcbiAgICAndGludEJhc2UnOiAweGZmZmZmZixcclxuICAgICd0aW50TWlkJzogMHg3ZjRkNjEsXHJcbiAgICAndGludFRvcCc6IDB4YWE0ZTYxLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogXCJDYW4gc2hvb3QgYXQgbXVsdGlwbGUgZW5lbWllcyBhdCBvbmNlLiBEYW1hZ2UsIHJhbmdlLCBhbmQgbnVtYmVyIG9mIHRhcmdldHMgZ3JvdyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVE9XRVJfQ09ORklHUyA9IFtCYXNpYywgTXVsdGlzaG90LCBTbmlwZXJdIiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uLCBQb3NpdGlvbiwgVGVycmFpbiB9IGZyb20gXCIuL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcclxuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL21ldGFTY2VuZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuICAgIHN0YXRzOiBjZmcuRW5lbXlDb25maWc7XHJcbiAgICBjb25maWc6IGNmZy5FbmVteUNvbmZpZzsgIC8vIE9uIHNwYXduLCBzdGF0cyBhcmUgY29waWVkIGZyb20gY29uZmlnXHJcblxyXG4gICAgZm9sbG93ZXI6IGFueVxyXG4gICAgaHA6IGludGVnZXJcclxuICAgIHlPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcclxuICAgIHhPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcclxuICAgIHNjZW5lOiBURFNjZW5lIC8vIHR5cGUgYXNzZXJ0aW9uXHJcbiAgICBzcGVlZE1vZGlmaWVyOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgc3RhdHMpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgc3RhdHMuc3ByaXRlTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gc3RhdHNcclxuICAgICAgICB0aGlzLnN0YXRzID0gey4uLnN0YXRzfSAgLy8gc2hhbGxvdyBjb3B5LCBpZGsgaG93IHRvIGRvIGRlZXAgY29weVxyXG4gICAgICAgIHRoaXMuZm9sbG93ZXIgPSB7IHQ6IDAsIHZlYzogbmV3IFBoYXNlci5NYXRoLlZlY3RvcjIoKSB9O1xyXG5cclxuICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lLmlucHV0LmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAodGhpcy5zY2VuZS5zY2VuZS5nZXQoJ2h1ZFNjZW5lJykgYXMgSHVkU2NlbmUpLnNldERlc2NyaXB0aW9uRW5lbXkodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGUgKiAoICsgIVBsYXllckluZm8uaXNQYXVzZWQpO1xyXG4gICAgICAgIC8vIG1vdmUgdGhlIHQgcG9pbnQgYWxvbmcgdGhlIHBhdGgsIDAgaXMgdGhlIHN0YXJ0IGFuZCAxIGlzIHRoZSBlbmRcclxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgKz0gdGhpcy5zdGF0cy5zcGVlZCAqIHRoaXMuc3BlZWRNb2RpZmllciAqIGRlbHRhO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIG5ldyB4IGFuZCB5IGNvb3JkaW5hdGVzIGluIHZlY1xyXG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KHRoaXMuZm9sbG93ZXIudCwgdGhpcy5mb2xsb3dlci52ZWMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA+IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudmVjLnggPCB0aGlzLnggLSB0aGlzLnhPZmZzZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBlbmVteSB4IGFuZCB5IHRvIHRoZSBuZXdseSBvYnRhaW5lZCB4IGFuZCB5XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmZvbGxvd2VyLnZlYy54ICsgdGhpcy54T2Zmc2V0LCB0aGlzLmZvbGxvd2VyLnZlYy55ICsgdGhpcy55T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdGgsIHJlbW92ZSB0aGUgZW5lbXlcclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci50ID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFjaEVuZCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFscGhhID0gMVxyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDFcclxuICAgIH1cclxuXHJcbiAgICByZWFjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlbWFpbmluZ0RhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlcjtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh1ZFNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJodWRTY2VuZVwiKSBhcyBIdWRTY2VuZVxyXG5cclxuICAgICAgICAgICAgUGxheWVySW5mby5ocCAtPSB0aGlzLnN0YXRzLmRhbWFnZTtcclxuICAgICAgICAgICAgaHVkU2NlbmUuaHBSZWRuZXNzID0gMVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbWV0YVNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJtZXRhU2NlbmVcIikgYXMgTWV0YVNjZW5lXHJcbiAgICAgICAgICAgIG1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpLmNhbWVyYXMubWFpbi5zaGFrZSgyMDAsIDAuMDA1KVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5zb3VuZE1hbmFnZXIuZGFtYWdlU291bmQucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZXNwYXduKHRoaXMuc3RhdHMsIHRoaXMuaHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmVuZW15RW5kQ2FsbGJhY2sodGhpcy5zdGF0cy5kYW1hZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0T25QYXRoKHdhdmUsIHJlc3Bhd25IZWFsdGgsIHN0YXJ0X3QgPSAwKSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSB0IHBhcmFtZXRlciBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhdGhcclxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgPSBzdGFydF90O1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRzID0gey4uLnRoaXMuY29uZmlnfTtcclxuICAgICAgICB0aGlzLnNwZWVkTW9kaWZpZXIgPSAxO1xyXG5cclxuICAgICAgICBpZiAocmVzcGF3bkhlYWx0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuaHAgPSByZXNwYXduSGVhbHRoO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMuc3RhdHMuaHAod2F2ZSk7XHJcblxyXG4gICAgICAgIHRoaXMudGludCA9IHRoaXMuc3RhdHMudGludDtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHggYW5kIHkgb2YgdGhlIGdpdmVuIHQgcG9pbnRcclxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSB4IGFuZCB5IG9mIG91ciBlbmVteSB0byB0aGUgcmVjZWl2ZWQgZnJvbSB0aGUgcHJldmlvdXMgc3RlcFxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5mb2xsb3dlci52ZWMueCwgdGhpcy5mb2xsb3dlci52ZWMueSk7XHJcblxyXG4gICAgICAgIGxldCBmcmFtZVJhdGUgPSBNYXRoLm1pbig2MCwgdGhpcy5zdGF0cy5zcGVlZCAqIDQwMDAwICogMTUpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJmYXRFbmVteVwiIHx8IHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJzcGxpdHRlckZhdEVuZW15XCIpIHsgLy8gaGFja1xyXG4gICAgICAgICAgICBmcmFtZVJhdGUgKj0gMC41XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoe1xyXG4gICAgICAgICAgICBrZXk6IGAke3RoaXMuc3RhdHMuc3ByaXRlTmFtZX1fd2Fsa2AsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZnJhbWVSYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZURhbWFnZShkYW1hZ2U6IGludGVnZXIpIHtcclxuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZSAtIHRoaXMuc3RhdHMuYXJtb3VyKHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmUpO1xyXG5cclxuICAgICAgICAvLyBpZiBocCBkcm9wcyBiZWxvdyAwIHdlIGRlYWN0aXZhdGUgdGhpcyBlbmVteVxyXG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVhdGgoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlYXRoKCkge1xyXG4gICAgICAgIHRoaXMub25EZWF0aEFiaWxpdHkoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0cy5zcGxpdClcclxuICAgICAgICAgICAgdGhpcy5vbkRlYXRoU3BsaXQoKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7ICAvLyBBZGQgZ29sZCBpbiBiYXNlIGxheWVyIG9ubHlcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyXHJcbiAgICAgICAgICAgIFBsYXllckluZm8ubW9uZXkgKz0gdGhpcy5zdGF0cy5tb25leTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICBhbmdsZTogUGxheWVySW5mby5STkcuc2lnbigpICogMTgwLFxyXG4gICAgICAgICAgICBzY2FsZTogMC41LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoNjAwLCA4MDApLFxyXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLmVuZW1pZXNTbGFpbisrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGhTcGxpdCgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0cy5zcGxpdC5hbW91bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3RW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5zdGF0cy5zcGxpdC5jZmcubmFtZV0uZ2V0KClcclxuICAgICAgICAgICAgbmV3RW5lbXkuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgbmV3RW5lbXkuc2V0QWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyIC09IHRoaXMuc3RhdHMuc3BsaXQuY2ZnLmRhbmdlcjtcclxuICAgICAgICAgICAgbmV3RW5lbXkuc3RhcnRPblBhdGgodGhpcy5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZSwgMCwgdGhpcy5mb2xsb3dlci50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWF0aEFiaWxpdHkoKSB7ICAvLyBvdmVycmlkZSB0aGlzIGZvciBzcGVjaWFsIG9uLWRlYXRoIGFiaWxpdGllc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2Vha0VuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5XZWFrKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmF0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkZhdClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFybW91cmVkRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkFybW91cmVkKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFzdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5GYXN0KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJCaWdFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJCaWcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGxpdHRlclNtYWxsRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyU21hbGwpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGxpdHRlckZhdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlckZhdClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxyXG5pbXBvcnQgeyBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIHN0YXRpYyBIRUFMVEhfQ09MT1IgPSAweGY4ZmYzNiAvLzB4ZmY0NDQ0XHJcbiAgICBzdGF0aWMgSEVBTFRIX0xPU1NfQ09MT1IgPSAweDdkN2Q3ZCAvLyAweDQ0ZmY0NFxyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXIgPSAxICAvLyAwIHRvIDFcclxuICAgIHNsb3dIZWFsdGg6IG51bWJlclxyXG5cclxuICAgIGJnQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXHJcbiAgICBoZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuICAgIHNsb3dIZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuXHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgd2lkdGg6IG51bWJlclxyXG4gICAgbWF4SGVhbHRoOiBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2UoeCwgeSwgd2lkdGgsIGhlYWx0aD0wKSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuXHJcbiAgICAgICAgLy8gaGVhbHRoIGJhciBiYXNlL2JhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJnQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoICsgNCwgNiwgMHgwMDAwMDApXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5iZ0JhcilcclxuXHJcbiAgICAgICAgLy8gdmlzdWFsaXphdGlvbiBvZiBoZWFsdGggbG9zc2VzXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgICB3aWR0aCwgNCxcclxuICAgICAgICAgICAgSGVhbHRoQmFyLkhFQUxUSF9MT1NTX0NPTE9SLFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnNsb3dIZWFsdGhCYXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaGVhbHRoIGJhciBpdHNlbGZcclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgd2lkdGgsIDQsXHJcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfQ09MT1IsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoQmFyKVxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IGhlYWx0aFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWFsdGgoaCkge1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGgpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWFsdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsZXZlbFVwKCkge1xyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIGNvbnN0IGNvZWYgPSBNYXRoLnBvdygwLjk5LCBkZWx0YS8xMDAwICogNjApXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gY29lZiAqIHRoaXMuc2xvd0hlYWx0aCArICgxIC0gY29lZikgKiB0aGlzLmhlYWx0aFxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLmhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNsb3dIZWFsdGhcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tICcuL3BsYXllckluZm8nO1xyXG5pbXBvcnQgeyBIdWRTY2VuZSwgSFVEX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvaHVkU2NlbmUnO1xyXG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tICcuL3NjZW5lcy9tZXRhU2NlbmUnO1xyXG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZSdcclxuaW1wb3J0IHsgVERTY2VuZUNvbmZpZyB9IGZyb20gJy4vc2NlbmVzL3RkU2NlbmVDb25maWcnO1xyXG5pbXBvcnQgeyBUZXJyYWluIH0gZnJvbSAnLi90ZXJyYWluJztcclxuXHJcblxyXG5sZXQgbWV0YVNjZW5lID0gbmV3IE1ldGFTY2VuZSgpXHJcbmxldCBodWRTY2VuZSA9IG5ldyBIdWRTY2VuZShtZXRhU2NlbmUpO1xyXG5cclxubGV0IGxldmVscyA9IFtcclxuICBtZXRhU2NlbmUsXHJcbiAgaHVkU2NlbmUsXHJcbl1cclxuXHJcbmNvbnN0IGdhbWVDb25maWcgPSB7XHJcbiAgdHlwZTogUGhhc2VyLkFVVE8sXHJcbiAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgd2lkdGg6IFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMixcclxuICBoZWlnaHQ6IFREX1NDRU5FX0hFSUdIVCxcclxuICBwaHlzaWNzOiB7XHJcbiAgICBkZWZhdWx0OiAnYXJjYWRlJ1xyXG4gIH0sXHJcbiAgc2NlbmU6IGxldmVscyxcclxuICBzZWVkOiBbXCI0MlwiXVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoZ2FtZUNvbmZpZyk7XHJcblBsYXllckluZm8uaW5pdCgpXHJcbiIsImltcG9ydCB7IFBMQVlFUl9IRUFMVEhfUkVHRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbmZvIHtcclxuICAgIHN0YXRpYyBtb25leTogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgaHA6IG51bWJlciA9IDEwO1xyXG4gICAgc3RhdGljIHRpbWVTY2FsZTogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBzdGF0aWMgUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoKTtcclxuICAgIHN0YXRpYyBMZXZlbFJORyA9IG5ldyBQaGFzZXIuTWF0aC5SYW5kb21EYXRhR2VuZXJhdG9yKCk7XHJcbiAgICBzdGF0aWMgbGV2ZWxHZW5lcmF0aW5nU2VlZCA9IFwiXCI7XHJcblxyXG4gICAgc3RhdGljIHJlZ2VuUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbml0KClcclxuICAgIHtcclxuICAgICAgICBjb25zdCBxdWVyeVN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgICAgICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZyk7XHJcbiAgICAgICAgY29uc3QgbGV2ZWxTZWVkRnJvbVF1ZXJ5ID0gdXJsUGFyYW1zLmdldCgnbGV2ZWxTZWVkJylcclxuXHJcbiAgICAgICAgbGV0IGxldmVsU2VlZCA9IGxldmVsU2VlZEZyb21RdWVyeVxyXG4gICAgICAgICAgICA/IGxldmVsU2VlZEZyb21RdWVyeVxyXG4gICAgICAgICAgICA6IFBsYXllckluZm8uUk5HLmludGVnZXIoKS50b1N0cmluZygpXHJcblxyXG4gICAgICAgIFBsYXllckluZm8ubGV2ZWxHZW5lcmF0aW5nU2VlZCA9IGxldmVsU2VlZDtcclxuICAgICAgICBQbGF5ZXJJbmZvLkxldmVsUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoW2xldmVsU2VlZF0pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhgU2VlZCBmb3IgbGV2ZWwgZ2VuZXJhdGlvbjogJHtsZXZlbFNlZWR9YClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHdhdmVIZWFsdGhSZWdlbigpIHtcclxuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgKz0gUExBWUVSX0hFQUxUSF9SRUdFTjtcclxuICAgICAgICBsZXQgcmVzdG9yZWQgPSBNYXRoLmZsb29yKFBsYXllckluZm8ucmVnZW5Qcm9ncmVzcyk7XHJcbiAgICAgICAgUGxheWVySW5mby5ocCArPSByZXN0b3JlZDtcclxuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgLT0gcmVzdG9yZWQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vbWV0YVNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmVcclxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGtleTogXCJnYW1lT3ZlclNjZW5lXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSg1MTIsIDI1NiwgMTAyNCwgNTEyLCAweGFhNDQ0NCwgMC41KTtcclxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoNTEyLCAyNTYtNDAsIDUxMi0xMjgsIDI1Ni02NCwgMHg0NDQ0NDQpO1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAxNjAsIFwiWU9VIERJRURcIiwge2ZvbnRTaXplOiAnMzBweCBib2xkJywgY29sb3I6IFwicmVkXCJ9KS5zZXRPcmlnaW4oMC41KTtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMTkwLCBgTGFzdCB3YXZlIHdpdG5lc3NlZDogJHt0aGlzLm1ldGFTY2VuZS5nZXRSb290VERTY2VuZSgpLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlfWApLnNldE9yaWdpbigwLjUpO1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAyMTAsIGBXZWFsdGggdGFrZW4gdG8gdGhlIGdyYXZlOiAke1BsYXllckluZm8ubW9uZXl9YCkuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIzMCwgYEludmFkZXJzIHZhbnF1aXNoZWQ6ICR7dGhpcy5tZXRhU2NlbmUuZW5lbWllc1NsYWlufWApLnNldE9yaWdpbigwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMjgwLCBgQ0xJQ0sgVE8gREFSRSBBR0FJTmApLnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSkub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRUaW1lID0gMDtcclxuICAgIHJlbG9hZGVkID0gZmFsc2U7XHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBQYXJlbnRoZXNpemVkRXhwcmVzc2lvbiB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XHJcbmltcG9ydCB7IFRvd2VyQ29uZmlnLCBUT1dFUl9DT05GSUdTLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLCBFbmVteUNvbmZpZywgV2F2ZUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4uL2VuZW15XCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBNQVhfSEVJR0hULCBNQVhfV0lEVEgsIFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4uL3Rvd2Vyc1wiO1xyXG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9tZXRhU2NlbmVcIjtcclxuaW1wb3J0IHsgVERTY2VuZSwgVERfU0NFTkVfSEVJR0hULCBURF9TQ0VORV9XSURUSCB9IGZyb20gXCIuL3RkU2NlbmVcIjtcclxuXHJcbmNvbnN0IEhVRF9CR19DT0xPUiA9IDB4ZmY4YTZkICAvLzB4ZmZhYTdkXHJcbmV4cG9ydCBjb25zdCBIVURfV0lEVEggPSBUSUxFX1NJWkUgKiAzXHJcblxyXG5leHBvcnQgY2xhc3MgSHVkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIG1vbmV5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIHdhdmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgaHBUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgaHBSZWRuZXNzOiBudW1iZXIgLy8gMCB0byAxXHJcbiAgICBkZXB0aFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBnb1VwVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGRlc2NyaXB0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuXHJcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZTtcclxuICAgIGJhY2tUb1Jvb3RTY2VuZUJ1dHRvbjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBidXlUb3dlckljb25zOiBCdXlUb3dlckljb25bXVxyXG5cclxuICAgIHBhdXNlQnV0dG9uOiBQYXVzZUJ1dHRvblxyXG4gICAgbXV0ZUJ1dHRvbjogTXV0ZU11c2ljQnV0dG9uXHJcblxyXG4gICAgbGFzdEFjdGl2ZVNjZW5lOiBURFNjZW5lXHJcbiAgICBwYXJlbnRTY2VuZXNJbWFnZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVtdXHJcbiAgICBzbG93U3BlZWRUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIGZhc3RTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBrZXk6IFwiaHVkU2NlbmVcIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICBsZXQgdyA9IEhVRF9XSURUSFxyXG4gICAgICAgIGxldCBoID0gVElMRV9TSVpFICogTUFYX0hFSUdIVFxyXG4gICAgICAgIGNvbnN0IHhMZWZ0ID0gdyAvIDJcclxuICAgICAgICBjb25zdCB4UmlnaHQgPSB3ICsgVERfU0NFTkVfV0lEVEggKyB3IC8gMlxyXG5cclxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUodyAvIDIsIGggLyAyLCB3LCBoLCBIVURfQkdfQ09MT1IpXHJcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICB4UmlnaHQsIGggLyAyLFxyXG4gICAgICAgICAgICB3LCBoLFxyXG4gICAgICAgICAgICBIVURfQkdfQ09MT1IsXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLm1vbmV5VGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDIwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy5tb25leVRleHQuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLmhwVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLmhwUmVkbmVzcyA9IDBcclxuXHJcbiAgICAgICAgdGhpcy53YXZlVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDYwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy53YXZlVGV4dC5zZXRPcmlnaW4oMC41KVxyXG5cclxuICAgICAgICB0aGlzLmRlcHRoVGV4dCA9IHRoaXMuYWRkLnRleHQoeFJpZ2h0LCAyMCwgXCJEZXB0aDogXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLmRlcHRoVGV4dC5zZXRPcmlnaW4oMC41KVxyXG5cclxuICAgICAgICB0aGlzLmdvVXBUZXh0ID0gdGhpcy5hZGQudGV4dCh4UmlnaHQsIDUwLCBcIkdvIHVwIHRvOlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0VmlzaWJsZShmYWxzZSlcclxuXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KDUsIDMwMCwgXCJcIiwgeyBmb250U2l6ZTogJzEwcHQnIH0pO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFdvcmRXcmFwV2lkdGgoSFVEX1dJRFRIIC0gMTAsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXVzZUJ1dHRvbiA9IG5ldyBQYXVzZUJ1dHRvbih0aGlzLCB4TGVmdCAtIDU1LCA0NzUpO1xyXG4gICAgICAgIHRoaXMubXV0ZUJ1dHRvbiA9IG5ldyBNdXRlTXVzaWNCdXR0b24odGhpcywgeFJpZ2h0ICsgNTUsIDQ3NSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucyA9IFtdO1xyXG4gICAgICAgIGxldCB0b3dlclR5cGVJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgdG93ZXJDb25maWcgb2YgVE9XRVJfQ09ORklHUykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1eVRvd2VySWNvbnMucHVzaChuZXcgQnV5VG93ZXJJY29uKHRoaXMsIHcgLyAyLCAxMTAgKyA3MCAqIHRvd2VyVHlwZUluZGV4LCB0b3dlckNvbmZpZykpXHJcbiAgICAgICAgICAgIHRvd2VyVHlwZUluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYWQgPSAzXHJcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCArIDIwLCA0NjUsIFwiPlNsb3c8XCIsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCArIDIwLCA0OTAsIFwiRmFzdFwiLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dC5zZXRJbnRlcmFjdGl2ZSgpLnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnRpbWVTY2FsZSA9IDEsIG51bGxcclxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCI+U2xvdzxcIilcclxuICAgICAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldFRleHQoXCJGYXN0XCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnRpbWVTY2FsZSA9IDQsIG51bGxcclxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCJTbG93XCIpXHJcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiPkZhc3Q8XCIpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcclxuICAgICAgICB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFRpbWU6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXRhU2NlbmUuaXNHYW1lT3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGUgKiAoICsgIVBsYXllckluZm8uaXNQYXVzZWQpO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMubW9uZXlUZXh0LnNldFRleHQoJ01vbmV5OiAnICsgUGxheWVySW5mby5tb25leSlcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFdhdmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRSb290VERTY2VuZSgpLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlXHJcbiAgICAgICAgdGhpcy53YXZlVGV4dC5zZXRUZXh0KGBXYXZlOiAke2N1cnJlbnRXYXZlfWApXHJcblxyXG4gICAgICAgIHRoaXMuaHBUZXh0LnNldFRleHQoJ0hQOiAnICsgUGxheWVySW5mby5ocClcclxuXHJcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0Q29sb3IoUGhhc2VyLkRpc3BsYXkuQ29sb3IuUkdCVG9TdHJpbmcoXHJcbiAgICAgICAgICAgIDI1NSwgMjU1ICogKDEgLSB0aGlzLmhwUmVkbmVzcyksIDI1NSAqICgxIC0gdGhpcy5ocFJlZG5lc3MpXHJcbiAgICAgICAgKSlcclxuICAgICAgICBjb25zdCBzZWNzVG9XaGl0ZSA9IDAuNVxyXG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5ocFJlZG5lc3MgLSBkZWx0YSAvIDEwMDAgLyBzZWNzVG9XaGl0ZSlcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaWNvbiBvZiB0aGlzLmJ1eVRvd2VySWNvbnMpIHtcclxuICAgICAgICAgICAgaWNvbi51cGRhdGUodGhpcy5sYXN0VGltZSwgZGVsdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoUGxheWVySW5mby5ocCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLmdhbWVPdmVyKClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCkge1xyXG4gICAgICAgIGxldCBhY3RpdmVTY2VuZSA9IHRoaXMubWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKCk7XHJcbiAgICAgICAgaWYgKCFhY3RpdmVTY2VuZSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoYWN0aXZlU2NlbmUgPT0gdGhpcy5sYXN0QWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHRoaXMubGFzdEFjdGl2ZVNjZW5lID0gYWN0aXZlU2NlbmU7XHJcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0VGV4dChgRGVwdGg6ICR7YWN0aXZlU2NlbmUuc2NlbmVMZXZlbH1gKVxyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRTY2VuZXMgPSB0aGlzLm1ldGFTY2VuZS5nZXRQYXJlbnRTY2VuZXNUb1Jvb3QoKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBhcmVudFNjZW5lc0ltYWdlc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUocGFyZW50U2NlbmVzLmxlbmd0aCA+IDApXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBwYXJlbnRTY2VuZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IHNjZW5lSW5kZXggPSAocGFyZW50U2NlbmVzLmxlbmd0aCAtIDEpIC0gaTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gMC4xXHJcbiAgICAgICAgICAgIGNvbnN0IG1heEltYWdlc05vcm1hbFNjYWxlRml0ID0gNztcclxuICAgICAgICAgICAgaWYgKHBhcmVudFNjZW5lcy5sZW5ndGggPiBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkge1xyXG4gICAgICAgICAgICAgICAgc2NhbGUgLz0gKChwYXJlbnRTY2VuZXMubGVuZ3RoIC8gbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQpICogMS4wMjIpIC8vIE5PVEU6IERyaWZ0cywgaGVuY2UgcmUtc2NhbGUgYnkgdGhpcyBtYWdpYyBudW1iZXIsIGlkayB3aHk7IG5vIHRpbWUgdG8gZmlndXJlIG91dFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3QnV0dG9uID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgICAgICBURF9TQ0VORV9XSURUSCArIEhVRF9XSURUSCAqIDEuNSxcclxuICAgICAgICAgICAgICAgIDEwMCArIHNjZW5lSW5kZXggKiBzY2FsZSAqIFREX1NDRU5FX0hFSUdIVCAqIDEuMixcclxuICAgICAgICAgICAgICAgIGBzbmFwLSR7cGFyZW50U2NlbmVzW2ldLnNjZW5lLmtleX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVggPSBzY2FsZVxyXG4gICAgICAgICAgICBuZXdCdXR0b24uc2NhbGVZID0gc2NhbGVcclxuICAgICAgICAgICAgbmV3QnV0dG9uLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXksIGZhbHNlKSwgdGhpcy5tZXRhU2NlbmUpXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXdCdXR0b25cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb25Ub3dlcihjb25maWc6IFRvd2VyQ29uZmlnLCB0b3dlcjogVG93ZXIgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGxldmVsID0gMVxyXG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIlxyXG5cclxuICAgICAgICBpZiAodG93ZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGV4dCA9IGAke2NvbmZpZy5uYW1lfTogJHtjb25maWcuZGVzY3JpcHRpb259XFxuYFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBgTGV2ZWwgJHt0b3dlci5sZXZlbH0gJHtjb25maWcubmFtZX0gdG93ZXIuXFxuYFxyXG4gICAgICAgICAgICBsZXZlbCA9IHRvd2VyLmxldmVsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0ICs9IGBEYW1hZ2U6ICR7Y29uZmlnLmRhbWFnZShsZXZlbCl9LlxcbmBcclxuICAgICAgICB0ZXh0ICs9IGBGaXJlIHJhdGU6ICR7Y29uZmlnLmZpcmVyYXRlKGxldmVsKS8xMDAwfXMuXFxuYFxyXG4gICAgICAgIHRleHQgKz0gYFJhbmdlOiAke2NvbmZpZy5yYW5nZShsZXZlbCl9LlxcbmBcclxuXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0VGV4dCh0ZXh0KVxyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uRW5lbXkoZW5lbXk6IEVuZW15QmFzZSkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIlxyXG4gICAgICAgIGlmIChlbmVteSkge1xyXG4gICAgICAgICAgICBsZXQgd2F2ZTogaW50ZWdlcjtcclxuICAgICAgICAgICAgaWYodGhpcy5tZXRhU2NlbmUuYWN0aXZlU2NlbmUuc2NlbmVMZXZlbCA9PT0gMClcclxuICAgICAgICAgICAgICAgIHdhdmUgPSBlbmVteS5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgd2F2ZSA9IFdhdmVDb25maWcubGV2ZWxUb1dhdmUodGhpcy5tZXRhU2NlbmUuYWN0aXZlU2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbCk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ICs9IGAke2VuZW15LnN0YXRzLmRpc3BsYXlOYW1lfVxcbmA7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYEhlYWx0aDogJHtlbmVteS5ocH0vJHtlbmVteS5zdGF0cy5ocCh3YXZlKX1cXG5gO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGBBcm1vdXI6ICR7ZW5lbXkuc3RhdHMuYXJtb3VyKHdhdmUpfVxcbmA7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYFNwZWVkOiAkeyhlbmVteS5zdGF0cy5zcGVlZCAqIDYwMDAwICogZW5lbXkuc3BlZWRNb2RpZmllcikudG9QcmVjaXNpb24oMil9XFxuYDtcclxuICAgICAgICAgICAgdGV4dCArPSBgTG9vdDogJHtlbmVteS5zdGF0cy5tb25leX1cXG5gO1xyXG4gICAgICAgICAgICBpZihlbmVteS5zdGF0cy5ibHVyYilcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gYFxcbiR7ZW5lbXkuc3RhdHMuYmx1cmJ9XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0VGV4dCh0ZXh0KVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCdXlUb3dlckljb24ge1xyXG4gICAgdG93ZXJOYW1lOiBzdHJpbmdcclxuICAgIHRvd2VyQ29uZmlnOiBUb3dlckNvbmZpZ1xyXG5cclxuICAgIHNwcml0ZUNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxyXG4gICAgcHJpY2VUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgaHVkU2NlbmU6IEh1ZFNjZW5lXHJcblxyXG4gICAgb3JpZ1g6IG51bWJlclxyXG4gICAgb3JpZ1k6IG51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh1ZFNjZW5lOiBIdWRTY2VuZSwgeCwgeSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5odWRTY2VuZSA9IGh1ZFNjZW5lXHJcbiAgICAgICAgdGhpcy5vcmlnWCA9IHhcclxuICAgICAgICB0aGlzLm9yaWdZID0geVxyXG4gICAgICAgIHRoaXMudG93ZXJOYW1lID0gY29uZmlnLm5hbWVcclxuICAgICAgICB0aGlzLnRvd2VyQ29uZmlnID0gY29uZmlnXHJcblxyXG4gICAgICAgIGxldCB0b3dlckJhc2UgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcmJhc2VzJywgY29uZmlnLnNwcml0ZUJhc2UpO1xyXG4gICAgICAgIHRvd2VyQmFzZS5zZXRUaW50KGNvbmZpZy50aW50QmFzZSk7XHJcbiAgICAgICAgbGV0IHRvd2VyTWlkID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJtaWRzJywgY29uZmlnLnNwcml0ZU1pZCk7XHJcbiAgICAgICAgdG93ZXJNaWQuc2V0VGludChjb25maWcudGludE1pZCk7XHJcbiAgICAgICAgbGV0IHRvd2VyVG9wID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJ0b3BzJywgY29uZmlnLnNwcml0ZVRvcCk7XHJcbiAgICAgICAgdG93ZXJUb3Auc2V0VGludChjb25maWcudGludFRvcCk7XHJcblxyXG4gICAgICAgIGxldCB0b3dlclJhbmdlID0gaHVkU2NlbmUuYWRkLmNpcmNsZShcclxuICAgICAgICAgICAgMCwgMCwgY29uZmlnLnJhbmdlKDEpLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmNvbG91cixcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5hbHBoYVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdG93ZXJSYW5nZS5zZXRTdHJva2VTdHlsZShcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91clxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdG93ZXJSYW5nZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdmFyIHNwcml0ZXMgPSBbXHJcbiAgICAgICAgICAgIHRvd2VyQmFzZSxcclxuICAgICAgICAgICAgdG93ZXJNaWQsXHJcbiAgICAgICAgICAgIHRvd2VyVG9wLFxyXG4gICAgICAgICAgICB0b3dlclJhbmdlLFxyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lciA9IGh1ZFNjZW5lLmFkZC5jb250YWluZXIoeCwgeSwgc3ByaXRlcylcclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5nZXRBbGwoKVxyXG5cclxuICAgICAgICBjb25zdCBwYWQgPSAzXHJcbiAgICAgICAgdGhpcy5wcmljZVRleHQgPSBodWRTY2VuZS5hZGQudGV4dChcclxuICAgICAgICAgICAgeCArIDE1LCB5LCBcIlwiICsgdGhpcy50b3dlckNvbmZpZy5wcmljZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldFNpemUoVElMRV9TSVpFLCBUSUxFX1NJWkUpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldEludGVyYWN0aXZlKClcclxuICAgICAgICAvLyB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IGNvbnNvbGUubG9nKFwiZm9vYmFyXCIpLCB0aGlzKTtcclxuICAgICAgICBodWRTY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5zcHJpdGVDb250YWluZXIpXHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5odWRTY2VuZS5zZXREZXNjcmlwdGlvblRvd2VyKGNvbmZpZylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxyXG4gICAgICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFszXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUpLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0Lmxpc3QuZm9yRWFjaCgoc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQub24oJ2RyYWdlbmQnLCBmdW5jdGlvbiAocG9pbnRlciwgZ2FtZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgcmFuZ2UgaW5kaWNhdG9yIHZpc2libGVcclxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5odWRTY2VuZS5tZXRhU2NlbmUuc291bmRNYW5hZ2VyLmJ1aWxkU291bmQucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBodWRTY2VuZS5tZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKVxyXG4gICAgICAgICAgICBzY2VuZS50b3dlck1hbmFnZXIucGxhY2VUb3dlcihwb2ludGVyLCB0aGlzLnRvd2VyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSB0aGlzLm9yaWdYXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IHRoaXMub3JpZ1lcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbnQoKSB7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMF0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRUb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNob3BJY29uVGludCh0aW50OiBudW1iZXIpIHtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRNaWQpO1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzJdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2hvcCgpIHtcclxuICAgICAgICAvLyBVbmNvbW1lbnQgdG8gcHJldmVudCBuZWdhdGl2ZSBtb25leTpcclxuICAgICAgICB0aGlzLmh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lciwgUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKVxyXG5cclxuICAgICAgICBpZiAoUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHgwMGZmMDApO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGludCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHhmZjAwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNob3BJY29uVGludCgweDk5NTU1NSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9sZE1vbmV5OiBpbnRlZ2VyID0gMFxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckluZm8ubW9uZXkgIT0gdGhpcy5vbGRNb25leSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNob3AoKTtcclxuICAgICAgICAgICAgdGhpcy5vbGRNb25leSA9IFBsYXllckluZm8ubW9uZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYWJzdHJhY3QgY2xhc3MgVUlCdXR0b24ge1xyXG4gICAgYmFzZVNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxyXG4gICAgYWx0U3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcblxyXG4gICAgc3ByaXRlQ29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyXHJcblxyXG4gICAgc2NlbmU6IFBoYXNlci5TY2VuZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5LCBzcHJpdGVJbmZvICwgZnVuYykge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIgPSBzY2VuZS5hZGQuY29udGFpbmVyKHgsIHkpXHJcbiAgICAgICAgdGhpcy5iYXNlU3ByaXRlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKDAsIDAsIHNwcml0ZUluZm8uYmFzZU5hbWUsIHNwcml0ZUluZm8uYmFzZUluZGV4KTtcclxuICAgICAgICB0aGlzLmFsdFNwcml0ZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSgwLCAwLCBzcHJpdGVJbmZvLmFsdE5hbWUsIHNwcml0ZUluZm8uYWx0SW5kZXgpO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRTaXplKHRoaXMuYmFzZVNwcml0ZS53aWR0aCwgdGhpcy5iYXNlU3ByaXRlLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuc2V0SW50ZXJhY3RpdmUoKVxyXG4gICAgICAgIHRoaXMuYWx0U3ByaXRlLnNldFZpc2libGUoZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5hZGQodGhpcy5iYXNlU3ByaXRlKTtcclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5hZGQodGhpcy5hbHRTcHJpdGUpO1xyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5vbigncG9pbnRlcmRvd24nLCBmdW5jKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTcHJpdGUoKSB7XHJcbiAgICAgICAgdGhpcy5iYXNlU3ByaXRlLnNldFZpc2libGUoIXRoaXMuYmFzZVNwcml0ZS52aXNpYmxlKTtcclxuICAgICAgICB0aGlzLmFsdFNwcml0ZS5zZXRWaXNpYmxlKCF0aGlzLmFsdFNwcml0ZS52aXNpYmxlKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFBhdXNlQnV0dG9uIGV4dGVuZHMgVUlCdXR0b24ge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUsIHgsIHkpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwge1xyXG4gICAgICAgICAgICBiYXNlTmFtZTogJ2J1dHRvbkljb25zJyxcclxuICAgICAgICAgICAgYmFzZUluZGV4OiAxLFxyXG4gICAgICAgICAgICBhbHROYW1lOiAnYnV0dG9uSWNvbnMnLFxyXG4gICAgICAgICAgICBhbHRJbmRleDogMlxyXG4gICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVTcHJpdGUoKVxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmlzUGF1c2VkID0gIVBsYXllckluZm8uaXNQYXVzZWQ7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIE11dGVNdXNpY0J1dHRvbiBleHRlbmRzIFVJQnV0dG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lLCB4LCB5KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIHgsIHksIHtcclxuICAgICAgICAgICAgYmFzZU5hbWU6ICdidXR0b25JY29ucycsXHJcbiAgICAgICAgICAgIGJhc2VJbmRleDogMyxcclxuICAgICAgICAgICAgYWx0TmFtZTogJ2J1dHRvbkljb25zJyxcclxuICAgICAgICAgICAgYWx0SW5kZXg6IDRcclxuICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU3ByaXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBtdXNpYyA9ICh0aGlzLnNjZW5lIGFzIEh1ZFNjZW5lKS5tZXRhU2NlbmUuc291bmRNYW5hZ2VyLm11c2ljXHJcbiAgICAgICAgICAgIGlmIChtdXNpYy5pc1BsYXlpbmcpXHJcbiAgICAgICAgICAgICAgICBtdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBtdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHtUZXJyYWlufSBmcm9tIFwiLi4vdGVycmFpblwiXHJcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tIFwiLi9nYW1lT3ZlclNjZW5lXCI7XHJcbmltcG9ydCB7U0NFTkVfVFJBTlNJVElPTl9NUywgVERTY2VuZX0gZnJvbSBcIi4vdGRTY2VuZVwiO1xyXG5pbXBvcnQge1REU2NlbmVDb25maWd9IGZyb20gXCIuL3RkU2NlbmVDb25maWdcIlxyXG5pbXBvcnQge1NvdW5kTWFuYWdlcn0gZnJvbSBcIi4uL3NvdW5kTWFuYWdlclwiXHJcbmltcG9ydCB7IGFuaW1hdGlvbnNDb25maWcgfSBmcm9tIFwiLi4vYW5pbWF0aW9uc0NvbmZpZ1wiXHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgIHZpc2libGU6IHRydWUsXHJcbiAgICBrZXk6ICdtZXRhU2NlbmUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1ldGFTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgcHVibGljIHNjZW5lczogVERTY2VuZVtdXHJcbiAgICBwdWJsaWMgYWN0aXZlU2NlbmU6IFREU2NlbmVcclxuICAgIHB1YmxpYyBzb3VuZE1hbmFnZXI6IFNvdW5kTWFuYWdlcjtcclxuXHJcbiAgICBlbmVtaWVzU2xhaW46IGludGVnZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc291bmRNYW5hZ2VyID0gbmV3IFNvdW5kTWFuYWdlcih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSB0aGlzLmFkZFNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXNbMF0uc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KFwiaHVkU2NlbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuc291bmRNYW5hZ2VyLmFkZFNvdW5kcygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBDdXJyZW50IGdhbWUgdmVyc2lvbjogJHt0aGlzLmNhY2hlLnRleHQuZ2V0KFwiZ2FtZVZlcnNpb25cIil9YCk7XHJcbiAgICB9XHJcblxyXG4gIC8vIENyZWF0ZXMgbmV3IFNjZW5lLCBlbmFibGVzIGl0LCBhbmQgc2V0cyBpdCBpbnZpc2libGVcclxuICAgIHB1YmxpYyBhZGRTY2VuZShwYXJlbnRTY2VuZUtleT86IHN0cmluZyk6IFREU2NlbmUge1xyXG4gICAgICAgIGxldCBwYXJlbnRTY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShwYXJlbnRTY2VuZUtleSlcclxuICAgICAgICBsZXQgc2NlbmVMZXZlbCA9IChwYXJlbnRTY2VuZT8uc2NlbmVMZXZlbCA/PyAtMSkgKyAxO1xyXG5cclxuICAgICAgICBsZXQgc2NlbmVJbmRleCA9IHRoaXMuc2NlbmVzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzY2VuZUtleSA9IGB0ZFNjZW5lJHtzY2VuZUluZGV4fWBcclxuXHJcbiAgICAgICAgbGV0IG5ld1NjZW5lID0gbmV3IFREU2NlbmUoXHJcbiAgICAgICAgICAgIG5ldyBURFNjZW5lQ29uZmlnKG5ldyBUZXJyYWluKDEwLCA4KSwgc2NlbmVMZXZlbCwgcGFyZW50U2NlbmVLZXksIHNjZW5lS2V5KSxcclxuICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChcclxuICAgICAgICAgICAgc2NlbmVLZXksXHJcbiAgICAgICAgICAgIG5ld1NjZW5lLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKG5ld1NjZW5lKVxyXG4gICAgICAgIG5ld1NjZW5lLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNjZW5lKSB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AodGhpcy5hY3RpdmVTY2VuZS5zY2VuZS5rZXkpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY2VuZUJ5S2V5KGtleT86IHN0cmluZyk6IFREU2NlbmUgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuZ2V0KGtleSkgYXMgVERTY2VuZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gbWFrZXMgY3VycmVudCBzY2VuZSBpbnZpc2libGUsIG1ha2VzIG5ldyBzY2VuZSB2aXNpYmxlOyBkb2Vzbid0IGNoYW5nZSBhY3Rpdm5lc3NcclxuICAgIHB1YmxpYyBzd2l0Y2hUb1NjZW5lKG5ld1NjZW5lS2V5OiBzdHJpbmcsIGdvaW5nSW5zaWRlOiBib29sZWFuLCBpID0gMCwgaiA9IDApIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lPy5zZXRJc0ZvcmVncm91bmQoZmFsc2UsIGdvaW5nSW5zaWRlLCBpLCBqKTtcclxuICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkobmV3U2NlbmVLZXkpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgU3dpdGNoaW5nIGZyb20gJHt0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleX0gKHBhcmVudCAke3RoaXMuYWN0aXZlU2NlbmUuc2NlbmVQYXJlbnRLZXl9KSB0b2BcclxuICAgICAgICAgICAgKyBgICR7bmV3U2NlbmUuc2NlbmUua2V5fSAocGFyZW50ICR7bmV3U2NlbmUuc2NlbmVQYXJlbnRLZXl9KWBcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIG5ld1NjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogU0NFTkVfVFJBTlNJVElPTl9NUyxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lPy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IG5ld1NjZW5lXHJcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zZXRJc0ZvcmVncm91bmQodHJ1ZSwgZ29pbmdJbnNpZGUsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKG5ld1NjZW5lS2V5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIDEuMDU5NDYzMDk0MzYgfiAyXigxLzEyKSwgaS5lLiBvbmUgc2VtaXRvbmVcclxuICAgICAgICB0aGlzLnNvdW5kLnNldFJhdGUoMSAvIChNYXRoLnBvdygxLjA1OTQ2MzA5NDM2LCBuZXdTY2VuZS5zY2VuZUxldmVsKSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmQuc2V0UmF0ZSgxIC8gKE1hdGgucG93KDEuMDU5NDYzMDk0MzYsIDE1KSkpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgZ2FtZU92ZXJTY2VuZSA9IHRoaXMuc2NlbmUuYWRkKFwiZ2FtZU92ZXJTY2VuZVwiLCBuZXcgR2FtZU92ZXJTY2VuZSh0aGlzKSlcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5zdGFydChnYW1lT3ZlclNjZW5lKTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTY2VuZS5zY2VuZS5wYXVzZSgpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICAgICAgLy8gbG9hZCB0aGUgZ2FtZSBhc3NldHNcclxuICAgICAgICB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnYXNzZXRzLycpXHJcblxyXG4gICAgICAgIHRoaXMuc291bmRNYW5hZ2VyLmxvYWRTb3VuZHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd3ZWFrRW5lbXknLCAnZW5lbXkucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Zhc3RFbmVteScsICdlbmVteV9mYXN0LnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdhcm1vdXJlZEVuZW15JywgJ2VuZW15X2FybW9yZWQucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyQmlnRW5lbXknLCAnZW5lbXlfc3BsaXRfYmlnLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcGxpdHRlclNtYWxsRW5lbXknLCAnZW5lbXlfc3BsaXRfc21hbGwucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2ZhdEVuZW15JywgJ2VuZW15X2Nob25rLnBuZycsIHtmcmFtZVdpZHRoOiA1NiwgZnJhbWVIZWlnaHQ6IDU2fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcGxpdHRlckZhdEVuZW15JywgJ2VuZW15X3NwbGl0X2Nob25rLnBuZycsIHtmcmFtZVdpZHRoOiA1NiwgZnJhbWVIZWlnaHQ6IDU2fSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnYnVsbGV0JywgJ2J1bGxldC5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3RpbGVzZXQnLFxyXG4gICAgICAgICAgICAndGlsZXNldC5wbmcnLFxyXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJ0b3BzJyxcclxuICAgICAgICAgICAgJ3Rvd2VydG9wLnBuZycsXHJcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VybWlkcycsXHJcbiAgICAgICAgICAgICd0b3dlcm1pZC5wbmcnLFxyXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcmJhc2VzJyxcclxuICAgICAgICAgICAgJ3Rvd2VyYmFzZS5wbmcnLFxyXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdidXR0b25JY29ucycsXHJcbiAgICAgICAgICAgICdidXR0b25faWNvbnMucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGVfcmVkJywgJ3BhcnRpY2xlX3JlZC5wbmcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0YWxGcm9tJywgJ3BvcnRhbF9mcm9tLnBuZycsIHtmcmFtZVdpZHRoOiA0MCwgZnJhbWVIZWlnaHQ6IDQwfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0YWxUbycsICdwb3J0YWxfdG8ucG5nJywge2ZyYW1lV2lkdGg6IDQwLCBmcmFtZUhlaWdodDogNDB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLnRleHQoXCJnYW1lVmVyc2lvblwiLCBcIi4vdmVyc2lvbi50eHRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBmb3IgKGxldCBjZmcgb2YgYW5pbWF0aW9uc0NvbmZpZykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBrZXk6IGNmZy5rZXksXHJcbiAgICAgICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoY2ZnLnNwcml0ZVNoZWV0LCBjZmcuZnJhbWVzKSxcclxuICAgICAgICAgICAgICAgIGZyYW1lUmF0ZTogY2ZnLmZyYW1lUmF0ZSxcclxuICAgICAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2ZVNjZW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFNjZW5lc1RvUm9vdCgpIHtcclxuICAgICAgICBsZXQgcGFyZW50U2NlbmVzOiBURFNjZW5lW10gPSBbXVxyXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0QWN0aXZlU2NlbmUoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHNjZW5lPy5zY2VuZVBhcmVudEtleSkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHNjZW5lLnNjZW5lUGFyZW50S2V5KVxyXG4gICAgICAgICAgICBwYXJlbnRTY2VuZXMucHVzaChwYXJlbnQpO1xyXG4gICAgICAgICAgICBzY2VuZSA9IHBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJlbnRTY2VuZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vdFREU2NlbmUoKSB7XHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRBY3RpdmVTY2VuZSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHNjZW5lLnNjZW5lUGFyZW50S2V5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNjZW5lXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuLi9lbmVteVwiO1xyXG5pbXBvcnQge1Rvd2VyfSBmcm9tIFwiLi4vdG93ZXJzXCI7XHJcbmltcG9ydCB7QnVsbGV0fSBmcm9tIFwiLi4vYnVsbGV0XCI7XHJcbmltcG9ydCB7V2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi93YXZlc1wiXHJcbmltcG9ydCB7VG93ZXJNYW5hZ2VyfSBmcm9tIFwiLi4vdG93ZXJNYW5hZ2VyXCJcclxuaW1wb3J0IHtNQVhfSEVJR0hULCBNQVhfV0lEVEgsIFRlcnJhaW4sIFRJTEVfU0laRX0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcclxuaW1wb3J0IHtURFNjZW5lQ29uZmlnfSBmcm9tIFwiLi90ZFNjZW5lQ29uZmlnXCI7XHJcbmltcG9ydCB7TWV0YVNjZW5lfSBmcm9tIFwiLi9tZXRhU2NlbmVcIjtcclxuaW1wb3J0IHtIVURfV0lEVEh9IGZyb20gXCIuL2h1ZFNjZW5lXCI7XHJcbmltcG9ydCB7VVVJRH0gZnJvbSBcIi4uL3V0aWxzL2d1aWRcIjtcclxuaW1wb3J0IHtIZWFsdGhCYXJ9IGZyb20gXCIuLi9oZWFsdGhCYXJcIjtcclxuaW1wb3J0IHtQbGF5ZXJJbmZvfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQge0VORU1ZX0NPTkZJR1N9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTQ0VORV9UUkFOU0lUSU9OX01TID0gNTAwXHJcbmV4cG9ydCBjb25zdCBURF9TQ0VORV9XSURUSCA9IE1BWF9XSURUSCAqIFRJTEVfU0laRVxyXG5leHBvcnQgY29uc3QgVERfU0NFTkVfSEVJR0hUID0gTUFYX0hFSUdIVCAqIFRJTEVfU0laRVxyXG5cclxuZXhwb3J0IGNsYXNzIFREU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcGF0aDogUGhhc2VyLkN1cnZlcy5QYXRoXHJcbiAgICBhbGxFbmVtaWVzOiB7IFtrZXk6IHN0cmluZ106IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCB9ID0ge31cclxuICAgIG5leHRFbmVteTogbnVtYmVyID0gMFxyXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmVcclxuXHJcbiAgICB0b3dlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxyXG4gICAgYnVsbGV0czogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwXHJcblxyXG4gICAgdGVycmFpbjogVGVycmFpblxyXG5cclxuICAgIHdhdmVNYW5hZ2VyOiBXYXZlTWFuYWdlclxyXG4gICAgdG93ZXJNYW5hZ2VyOiBUb3dlck1hbmFnZXJcclxuXHJcbiAgICBzY2VuZVBhcmVudEtleTogc3RyaW5nO1xyXG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb25cclxuXHJcbiAgICBwcml2YXRlIHRvd2VyUGFyZW50OiBUb3dlciAgLy8gdG8gd2hhdCB0b3dlciBkb2VzIHRoaXMgc2NlbmUgY29ycmVzcG9uZD8gdW5kZWZpbmVkIGZvciByb290XHJcbiAgICBwcml2YXRlIGVuZEhlYWx0aEJhcjogSGVhbHRoQmFyXHJcblxyXG4gICAgLy8gaGFwcGVucyB3aGVuIGFuIGVuZW15IHJlYWNoZXMgdGhlIGVuZFxyXG4gICAgZW5lbXlFbmRDYWxsYmFjazogKG51bWJlcikgPT4gdm9pZFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogVERTY2VuZUNvbmZpZywgbWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBrZXk6IGNvbmZpZy5zY2VuZUtleSwgLy9gdGRTY2VuZSR7VVVJRC51dWlkdjQoKX1gLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRlcnJhaW4gPSBjb25maWcudGVycmFpbjtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gY29uZmlnLnNjZW5lTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5zY2VuZVBhcmVudEtleSA9IGNvbmZpZy5zY2VuZVBhcmVudEtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIC8vIHRoaXMgZ3JhcGhpY3MgZWxlbWVudCBpcyBvbmx5IGZvciB2aXN1YWxpemF0aW9uLFxyXG4gICAgICAgIC8vIGl0cyBub3QgcmVsYXRlZCB0byBvdXIgcGF0aFxyXG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGVycmFpbi5jcmVhdGUodGhpcylcclxuICAgICAgICB0aGlzLnRlcnJhaW4uZHJhdyhncmFwaGljcylcclxuXHJcbiAgICAgICAgLy8gdGhlIHBhdGggZm9yIG91ciBlbmVtaWVzXHJcbiAgICAgICAgLy8gcGFyYW1ldGVycyBhcmUgdGhlIHN0YXJ0IHggYW5kIHkgb2Ygb3VyIHBhdGhcclxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyID0gbmV3IFdhdmVNYW5hZ2VyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG93ZXJNYW5hZ2VyID0gbmV3IFRvd2VyTWFuYWdlcih0aGlzKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgRU5FTVlfQ09ORklHUykge1xyXG4gICAgICAgICAgICB0aGlzLmFsbEVuZW1pZXNbZW5lbXkubmFtZV0gPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IGVuZW15LmNsYXNzLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3dlcnMgPSB0aGlzLmFkZC5ncm91cCh7Y2xhc3NUeXBlOiBUb3dlciwgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IEJ1bGxldCwgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcclxuICAgICAgICBmb3IgKGxldCBlTmFtZSBpbiB0aGlzLmFsbEVuZW1pZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuYWxsRW5lbWllc1tlTmFtZV0sIHRoaXMuYnVsbGV0cywgdGhpcy5kYW1hZ2VFbmVteSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyID0gbmV3IFdhdmVNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zdCBjYW0gPSB0aGlzLmNhbWVyYXMubWFpblxyXG4gICAgICAgIGNhbS5zY3JvbGxYID0gLUhVRF9XSURUSFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgZm9yZWdyb3VuZCBzY2VuZSBoYXMgaW5wdXQgZW5hYmxlZCAmIGlzIHZpc2libGU7IGFsbCBzY2VuZXMgYXJlIGJlaW5nIHVwZGF0ZWRcclxuICAgIHB1YmxpYyBzZXRJc0ZvcmVncm91bmQoaXNGb3JlZ3JvdW5kU2NlbmUsIGdvaW5nSW5zaWRlOiBib29sZWFuLCBpID0gbnVsbCwgaiA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSBpc0ZvcmVncm91bmRTY2VuZTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0ZvcmVncm91bmRTY2VuZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoZ29pbmdJbnNpZGUsIGksIGopXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlSW4oZ29pbmdJbnNpZGUsIGksIGopXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlSW4oZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGksIGopIHtcclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5wYW4odGhpcy50ZXJyYWluLncgKiBUSUxFX1NJWkUgLyAyLCB0aGlzLnRlcnJhaW4uaCAqIFRJTEVfU0laRSAvIDIsIDEpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Wm9vbSgoZ29pbmdJbnNpZGUgPyAxIC8gMyA6IDMpKVxyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlSW4oU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMSwgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFkZU91dChnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xyXG4gICAgICAgIC8vIFRha2UgYSBzY3JlZW5zaG90XHJcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnNuYXBzaG90QXJlYShcclxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgsXHJcbiAgICAgICAgICAgIC10aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZLFxyXG4gICAgICAgICAgICBURF9TQ0VORV9XSURUSCxcclxuICAgICAgICAgICAgVERfU0NFTkVfSEVJR0hULFxyXG4gICAgICAgICAgICAoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBLZXkgPSBgc25hcC0ke3RoaXMuc2NlbmUua2V5fWBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzLmV4aXN0cyhzbmFwS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMucmVtb3ZlKHNuYXBLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5hZGRJbWFnZShzbmFwS2V5LCBpbWFnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnaW5nOiBzaG93IHRoZSBzY3JlZW5zaG90XHJcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KFNDRU5FX1RSQU5TSVRJT05fTVMsIDAsIDAsIDApXHJcbiAgICAgICAgaWYgKGdvaW5nSW5zaWRlKSB7XHJcbiAgICAgICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDMsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih4LCB5LCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygxIC8gMywgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGFtYWdlRW5lbXkoZW5lbXksIGJ1bGxldCkge1xyXG4gICAgICAgIC8vIG9ubHkgaWYgYm90aCBlbmVteSBhbmQgYnVsbGV0IGFyZSBhbGl2ZVxyXG4gICAgICAgIGlmIChlbmVteS5hY3RpdmUgPT09IHRydWUgJiYgYnVsbGV0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyB3ZSByZW1vdmUgdGhlIGJ1bGxldCByaWdodCBhd2F5XHJcbiAgICAgICAgICAgIGJ1bGxldC5oaXQoKVxyXG5cclxuICAgICAgICAgICAgLy8gZGVjcmVhc2UgdGhlIGVuZW15IGhwIHdpdGggYnVsbGV0IGRhbWFnZVxyXG4gICAgICAgICAgICBlbmVteS5yZWNlaXZlRGFtYWdlKGJ1bGxldC5kYW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmcmFtZU51bWJlciA9IDA7XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGUgKiAoICsgIVBsYXllckluZm8uaXNQYXVzZWQpO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lTnVtYmVyKys7XHJcbiAgICAgICAgdGhpcy53YXZlTWFuYWdlci51cGRhdGUoZGVsdGEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lTnVtYmVyICUgNjAgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgVXBkYXRlIHRoOiAke3RoaXMuc2NlbmUua2V5fSBlOiAke3RoaXMuaW5wdXQuZW5hYmxlZH0gfCBsOiAke3RoaXMuc2NlbmVMZXZlbH0gfCBwOiAke3RoaXMuc2NlbmVQYXJlbnQ/LnNjZW5lLmtleX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmRIZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIuaGVhbHRoID0gdGhpcy50b3dlclBhcmVudC5oZWFsdGhCYXIuaGVhbHRoXHJcbiAgICAgICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnVsbGV0KHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHJhbmdlLCBidWxsZXRTcGVlZE1vZCkge1xyXG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0KCkgYXMgQnVsbGV0O1xyXG4gICAgICAgIGlmIChidWxsZXQpIHtcclxuICAgICAgICAgICAgYnVsbGV0LmZpcmUoeCwgeSwgYW5nbGUsIGRhbWFnZSwgcmFuZ2UsIGJ1bGxldFNwZWVkTW9kLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9HcmlkUG9zKHgsIHkpIHtcclxuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoKHggKyB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxYKSAvIFRJTEVfU0laRSk7XHJcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSkgLyBUSUxFX1NJWkUpO1xyXG4gICAgICAgIHJldHVybiBbaSwgal1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbmNsaWNrIG9uIHNjZW5lICR7dGhpcy5zY2VuZS5rZXl9YClcclxuICAgICAgICBjb25zdCBbaSwgal0gPSB0aGlzLnRvR3JpZFBvcyhwb2ludGVyLngsIHBvaW50ZXIueSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2xpY2tlZCBjb29yZGluYXRlczogJHtpfSAke2p9YClcclxuICAgICAgICBsZXQgcG90ZW50aWFsRXhpc3RpbmdUb3dlciA9IHRoaXMudGVycmFpbi50cnlHZXRFeGlzdGluZ1Rvd2VyKGksIGopO1xyXG4gICAgICAgIGlmIChwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dpdGNoaW5nIHRvIGFuIGV4aXN0aW5nIHRvd2VyXCIpXHJcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUocG90ZW50aWFsRXhpc3RpbmdUb3dlci5nZXRJbm5lclRvd2VyU2NlbmVLZXkoKSwgdHJ1ZSwgaSwgailcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMudGVycmFpbi5wYXRoVGlsZXNbdGhpcy50ZXJyYWluLnBhdGhUaWxlcy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGlmIChpID09PSBlbmRbMF0gJiYgaiA9PT0gZW5kWzFdICYmIHRoaXMuc2NlbmVQYXJlbnRLZXkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2l0Y2hpbmcgdmlhIGVuZFwiKVxyXG4gICAgICAgICAgICB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHRoaXMuc2NlbmVQYXJlbnRLZXksIGZhbHNlLCBpLCBqKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZW15UmVhY2hlZEVuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZW5lbXlFbmRDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG93ZXJQYXJlbnQocGFyZW50OiBUb3dlcikge1xyXG4gICAgICAgIHRoaXMudG93ZXJQYXJlbnQgPSBwYXJlbnRcclxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodGhpcylcclxuXHJcbiAgICAgICAgbGV0IFtpLCBqXSA9IHRoaXMudGVycmFpbi5wYXRoVGlsZXNbdGhpcy50ZXJyYWluLnBhdGhUaWxlcy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcclxuXHJcbiAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIubWFrZSh4LCB5LCBUSUxFX1NJWkUgLSAxNCwgMC41KVxyXG4gICAgICAgIHRoaXMuYWRkLmNvbnRhaW5lcigwLCAwLCB0aGlzLmVuZEhlYWx0aEJhcilcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3dlclBhcmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3dlclBhcmVudFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGVycmFpbiB9IGZyb20gXCIuLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi90ZFNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVERTY2VuZUNvbmZpZyB7XHJcbiAgICB0ZXJyYWluOiBUZXJyYWluO1xyXG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb24gXHJcbiAgICBzY2VuZVBhcmVudEtleTogc3RyaW5nO1xyXG4gICAgc2NlbmVLZXk6IHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRlcnJhaW46IFRlcnJhaW4sIHNjZW5lTGV2ZWw6IG51bWJlciwgc2NlbmVQYXJlbnRLZXk6IHN0cmluZywgc2NlbmVLZXk6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy50ZXJyYWluID0gdGVycmFpbjtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gc2NlbmVMZXZlbDtcclxuICAgICAgICB0aGlzLnNjZW5lUGFyZW50S2V5ID0gc2NlbmVQYXJlbnRLZXk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUtleSA9IHNjZW5lS2V5XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvbWV0YVNjZW5lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTb3VuZE1hbmFnZXIge1xyXG4gICAgbXVzaWM6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBidWlsZFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgZGFtYWdlU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBzaG9vdFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgbXVsdGlzaG90U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBsZXZlbHVwU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBzbmlwZXJTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lID0gbWV0YVNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTb3VuZHMoKSB7XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUubG9hZC5hdWRpbyhcIm1haW5fbXVzaWNcIiwgJy4vc291bmRzL2dhbWVqYW1fTEQ0OC5vZ2cnKTtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZS5sb2FkLmF1ZGlvKCdidWlsZF9zb3VuZCcsICcuL3NvdW5kcy9idWlsZC53YXYnKTtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZS5sb2FkLmF1ZGlvKCdkYW1hZ2Vfc291bmQnLCAnLi9zb3VuZHMvZGFtYWdlLndhdicpO1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lLmxvYWQuYXVkaW8oJ2Jhc2ljX3Nob290JywgJy4vc291bmRzL3R1cnJldHNob3Qud2F2Jyk7XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUubG9hZC5hdWRpbygnbXVsdGlzaG90X3Nob290JywgJy4vc291bmRzL211bHRpc2hvdC53YXYnKTtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZS5sb2FkLmF1ZGlvKCdsZXZlbHVwX3NvdW5kJywgJy4vc291bmRzL2xldmVsdXAud2F2Jyk7XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUubG9hZC5hdWRpbygnc25pcGVyX3Nob290JywgJy4vc291bmRzL3NuaXBlci53YXYnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTb3VuZHMoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpYyA9IHRoaXMubWV0YVNjZW5lLnNvdW5kLmFkZChcIm1haW5fbXVzaWNcIiwge1wibG9vcFwiOiB0cnVlLCBcInZvbHVtZVwiOiAwLjA3fSk7XHJcbiAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRTb3VuZCA9IHRoaXMubWV0YVNjZW5lLnNvdW5kLmFkZCgnYnVpbGRfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAxfSk7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2VTb3VuZCA9IHRoaXMubWV0YVNjZW5lLnNvdW5kLmFkZCgnZGFtYWdlX3NvdW5kJywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4xNX0pO1xyXG4gICAgICAgIHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMubWV0YVNjZW5lLnNvdW5kLmFkZCgnYmFzaWNfc2hvb3QnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjAzfSk7XHJcbiAgICAgICAgdGhpcy5tdWx0aXNob3RTb3VuZCA9IHRoaXMubWV0YVNjZW5lLnNvdW5kLmFkZCgnbXVsdGlzaG90X3Nob290JywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4wM30pO1xyXG4gICAgICAgIHRoaXMubGV2ZWx1cFNvdW5kID0gdGhpcy5tZXRhU2NlbmUuc291bmQuYWRkKCdsZXZlbHVwX3NvdW5kJywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4wMn0pO1xyXG4gICAgICAgIHRoaXMuc25pcGVyU291bmQgPSB0aGlzLm1ldGFTY2VuZS5zb3VuZC5hZGQoJ3NuaXBlcl9zaG9vdCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDAuMDJ9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCJcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcclxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi90b3dlcnNcIlxyXG5cclxuZXhwb3J0IGVudW0gVGlsZVR5cGUge1xyXG4gICAgU3RhcnQsIFBhdGgsIEVuZCwgT2NjdXBpZWQsIEJ1aWxkYWJsZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVElMRV9TSVpFID0gNjRcclxuZXhwb3J0IGNvbnN0IExFVkVMX09GRlNFVCA9IDE1ICogVElMRV9TSVpFXHJcbmV4cG9ydCBjb25zdCBNQVhfV0lEVEggPSAxMFxyXG5leHBvcnQgY29uc3QgTUFYX0hFSUdIVCA9IDhcclxuXHJcbmNvbnN0IE5fVElMRVNFVF9TUFJJVEVTID0gMTAgIC8vIGhvdyBtYW55IHNwcml0ZXMgYXJlIGluIHRoZSB0aWxlc2V0P1xyXG5cclxudHlwZSBHcmlkUG9zID0gW2ludGVnZXIsIGludGVnZXJdXHJcblxyXG5leHBvcnQgY2xhc3MgVGVycmFpbiB7XHJcbiAgICB0b3dlcnM6IFRvd2VyW11bXVxyXG4gICAgdGlsZXM6IFRpbGVUeXBlW11bXVxyXG5cclxuICAgIHRpbGVTcHJpdGVzOiBpbnRlZ2VyW11bXVxyXG5cclxuICAgIHBhdGg6IFBoYXNlci5DdXJ2ZXMuUGF0aCAgLy8gVGhlIFBoYXNlciBwYXRoIChmb3IgZW5lbXkgbW92ZW1lbnQpXHJcbiAgICBwYXRoVGlsZXM6IEdyaWRQb3NbXSAgLy8gVGhlIHNlcXVlbmNlIG9mIHRpbGVzIG1ha2luZyB1cCB0aGUgcGF0aFxyXG5cclxuICAgIHRpbnQ6IGludGVnZXIgLy8gY29sb3IgYXMgYSAyNC1iaXQgaW50XHJcblxyXG4gICAgdzogbnVtYmVyXHJcbiAgICBoOiBudW1iZXJcclxuXHJcbiAgICBwb3J0YWxGcm9tOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcbiAgICBwb3J0YWxUbzogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxyXG5cclxuICAgIC8vIHRvZG86IGdlbmVyYXRlL2xvYWQgdGVycmFpblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IGludGVnZXIsIGhlaWdodDogaW50ZWdlcikge1xyXG4gICAgICAgIHRoaXMudyA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oID0gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpXHJcbiAgICAgICAgdGhpcy5zZXR1cFNwcml0ZXMoc2NlbmUpXHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJzID0gaW5pdDJEQXJyYXk8VG93ZXI+KHRoaXMudywgdGhpcy5oLCBudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU3ByaXRlcyhzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHRoaXMudGlsZVNwcml0ZXMgPSBpbml0MkRBcnJheSh0aGlzLncsIHRoaXMuaCwgVGlsZVR5cGUuQnVpbGRhYmxlKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaV1bal0gPSByYW5kb21GcmVlU3ByaXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RGlyID0gKHBpOiBpbnRlZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGF0aFRpbGVzLCBwaSlcclxuICAgICAgICAgICAgbGV0IFtpMSwgajFdID0gdGhpcy5wYXRoVGlsZXNbcGldXHJcbiAgICAgICAgICAgIGxldCBbaTIsIGoyXSA9IHRoaXMucGF0aFRpbGVzW3BpICsgMV1cclxuXHJcbiAgICAgICAgICAgIGxldCBbZGksIGRqXSA9IFtpMiAtIGkxLCBqMiAtIGoxXVxyXG4gICAgICAgICAgICBpZiAoZGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaiA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXREaXIgZmFpbGVkXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBwaSA9IDA7IHBpIDwgdGhpcy5wYXRoVGlsZXMubGVuZ3RoOyBwaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBbaTEsIGoxXSA9IHRoaXMucGF0aFRpbGVzW3BpXVxyXG5cclxuICAgICAgICAgICAgaWYgKHBpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDZcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwaSA9PSB0aGlzLnBhdGhUaWxlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA3XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZDEgPSAoZ2V0RGlyKHBpIC0gMSkgKyAyKSAlIDRcclxuICAgICAgICAgICAgICAgIGxldCBkMiA9IGdldERpcihwaSlcclxuICAgICAgICAgICAgICAgIGlmIChkMSA+IGQyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2QxLCBkMl0gPSBbZDIsIGQxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gT3JkZXIgb2Ygc3ByaXRlcyAoMDIgbWVhbmluZyBkMT0wLCBkMj0yKTpcclxuICAgICAgICAgICAgICAgIC8vIDAxIDAyIDAzIDEyIDEzIDIzXHJcbiAgICAgICAgICAgICAgICBpZiAoZDEgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IGQyIC0gMVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkMSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgKyAxXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA1IC8vIG9ubHkgMjMgbGVmdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbnQgPSBQaGFzZXIuRGlzcGxheS5Db2xvci5HZXRDb2xvcihcclxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhpLCBqKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCAndGlsZXNldCcsIHRoaXMudGlsZVNwcml0ZXNbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuQnVpbGRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldFRpbnQodGhpcy50aW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbEZyb20gPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksIFwicG9ydGFsRnJvbVwiLCAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxUbyA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgXCJwb3J0YWxUb1wiLCAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xyXG4gICAgICAgIC8vIHRoaXMuZHJhd0dyaWQoZ3JhcGhpY3MpXHJcblxyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgzLCAweGZmZmZmZiwgMSk7XHJcbiAgICAgICAgLy8gdmlzdWFsaXplIHRoZSBwYXRoXHJcbiAgICAgICAgdGhpcy5wYXRoLmRyYXcoZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgICB0aGlzLnBvcnRhbEZyb20uYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxGcm9tX3NwaW5cIixcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9ydGFsVG8uYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxUb19zcGluXCIsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3R3JpZChncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKSB7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4MDAwMGZmLCAwLjgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmg7IGkrKykge1xyXG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oMCwgaSAqIFRJTEVfU0laRSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhUSUxFX1NJWkUgKiAxMCwgaSAqIFRJTEVfU0laRSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMudzsgaisrKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhqICogVElMRV9TSVpFLCAwKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKGogKiBUSUxFX1NJWkUsIFRJTEVfU0laRSAqIDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblBsYWNlVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluQm91bmRzKGksIGopICYmIHRoaXMudGlsZXNbaV1bal0gPT09IFRpbGVUeXBlLkJ1aWxkYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0RXhpc3RpbmdUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgaWYgKGkgPCAwIHx8IGogPCAwIHx8IGkgPj0gdGhpcy53IHx8IGogPj0gdGhpcy5oKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0b3dlcjogVG93ZXIpIHtcclxuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIHRoaXMudGlsZXNbaV1bal0gPSBUaWxlVHlwZS5PY2N1cGllZDtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3dlcnNbaV1bal0gPSB0b3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBbXVxyXG5cclxuICAgICAgICBsZXQgZWRnZXM6IEdyaWRQb3NbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLncgLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgMF0pXHJcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goW2ksIHRoaXMuaCAtIDFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMuaCAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFswLCBqXSlcclxuICAgICAgICAgICAgZWRnZXMucHVzaChbdGhpcy53IC0gMSwgal0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlXHJcblxyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDBcclxuICAgICAgICB3aGlsZSAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgbGV0IGZyb20gPSByYW5kb21JdGVtKGVkZ2VzKVxyXG4gICAgICAgICAgICBsZXQgdG87XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHRvID0gcmFuZG9tSXRlbShlZGdlcylcclxuICAgICAgICAgICAgfSB3aGlsZSAodG8gPT0gZnJvbSlcclxuXHJcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLnJhbmRvbVdhbGsoZnJvbSwgdG8pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaW5MZW5ndGggPSAyNVxyXG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCAmJiBwYXRoLmxlbmd0aCA+PSBtaW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdHMrK1xyXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPT0gNDAwKSBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgaW5cIiwgYXR0ZW1wdHMsIFwiYXR0ZW1wdHNcIilcclxuXHJcbiAgICAgICAgdGhpcy50aWxlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhwYXRoW2ldWzBdLCBwYXRoW2ldWzFdKVxyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbHRlbmF0aXZlbHk6IHRoaXMucGF0aCA9IG5ldyBQaGFzZXIuQ3VydmVzLlBhdGgoLi4uKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYXRoID0gc2NlbmUuYWRkLnBhdGgoeCwgeSlcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IG5ldyBQaGFzZXIuQ3VydmVzLlBhdGgoeCwgeSlcclxuICAgICAgICAgICAgICAgIC8vIHNjZW5lLmFkZE9iamVjdCh0aGlzLnBhdGgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgubGluZVRvKHgsIHkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzZXRUbyA9IFRpbGVUeXBlLlBhdGhcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VG8gPSBUaWxlVHlwZS5TdGFydFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gcGF0aC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUbyA9IFRpbGVUeXBlLkVuZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzW3BhdGhbaV1bMF1dW3BhdGhbaV1bMV1dID0gc2V0VG9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIHRlcnJhaW4uXCIpXHJcblxyXG4gICAgICAgIHRoaXMucGF0aFRpbGVzID0gcGF0aFxyXG4gICAgICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tV2Fsayhmcm9tOiBHcmlkUG9zLCB0bzogR3JpZFBvcyk6IEFycmF5PEdyaWRQb3M+IHtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdXHJcbiAgICAgICAgbGV0IHNlZW4gPSBuZXcgU2V0KClcclxuXHJcbiAgICAgICAgY29uc3QgYWRkVG9QYXRoID0gKHBvczogR3JpZFBvcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhbm5lZCBvZiB0aGlzLm5laWdoYm9ycyhwYXRoW3BhdGgubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vlbi5hZGQoYmFubmVkLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aC5wdXNoKHBvcylcclxuICAgICAgICAgICAgc2Vlbi5hZGQocG9zLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGRUb1BhdGgoZnJvbSlcclxuXHJcbiAgICAgICAgbGV0IHN0ZXBzID0gMFxyXG4gICAgICAgIHdoaWxlIChwYXRoW3BhdGgubGVuZ3RoIC0gMV0gIT0gdG8pIHtcclxuICAgICAgICAgICAgc3RlcHMrK1xyXG4gICAgICAgICAgICBpZiAoc3RlcHMgPT0gMTAwKSBicmVha1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICAgICAgICBpZiAocG9zLnRvU3RyaW5nKCkgPT09IHRvLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoICAvLyBTdWNjZXNzIVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FuZHMgPSB0aGlzLm5laWdoYm9ycyhwb3MpXHJcbiAgICAgICAgICAgIGNhbmRzID0gY2FuZHMuZmlsdGVyKHAgPT4gIXNlZW4uaGFzKHAudG9TdHJpbmcoKSkpXHJcblxyXG4gICAgICAgICAgICBpZiAoY2FuZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCAgLy8gRmFpbCFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IHJhbmRvbUl0ZW0oY2FuZHMpXHJcbiAgICAgICAgICAgIGFkZFRvUGF0aChuZXh0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGhcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5laWdoYm9ycyhwb3M6IEdyaWRQb3MsIHBhZCA9IDApIHtcclxuICAgICAgICBsZXQgcmVzID0gW1xyXG4gICAgICAgICAgICBbcG9zWzBdICsgMSwgcG9zWzFdXSxcclxuICAgICAgICAgICAgW3Bvc1swXSAtIDEsIHBvc1sxXV0sXHJcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSArIDFdLFxyXG4gICAgICAgICAgICBbcG9zWzBdLCBwb3NbMV0gLSAxXSxcclxuICAgICAgICBdXHJcbiAgICAgICAgcmVzID0gcmVzLmZpbHRlcihwID0+IHRoaXMuaW5Cb3VuZHMocFswXSwgcFsxXSkpXHJcblxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuXHJcbiAgICBmcm9tR3JpZFBvcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIFsoaSArIDAuNSkgKiBUSUxFX1NJWkUsIChqICsgMC41KSAqIFRJTEVfU0laRV1cclxuICAgIH1cclxuXHJcbiAgICBpbkJvdW5kcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCBwYWQgPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChpID49IHBhZFxyXG4gICAgICAgICAgICAmJiBpIDwgdGhpcy53IC0gcGFkXHJcbiAgICAgICAgICAgICYmIGogPj0gcGFkXHJcbiAgICAgICAgICAgICYmIGogPCB0aGlzLmggLSBwYWQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUl0ZW0oYXJyYXkpIHtcclxuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKFBsYXllckluZm8uTGV2ZWxSTkcuZnJhYygpICogYXJyYXkubGVuZ3RoKV1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tRnJlZVNwcml0ZSgpIHtcclxuICAgIGNvbnN0IG5TcGVjaWFsU3ByaXRlcyA9IDhcclxuICAgIHJldHVybiBuU3BlY2lhbFNwcml0ZXMgKyBNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIChOX1RJTEVTRVRfU1BSSVRFUyAtIG5TcGVjaWFsU3ByaXRlcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQyREFycmF5PFRWYWw+KGRpbTEsIGRpbTIsIHZhbHVlOiBUVmFsKTogVFZhbFtdW10ge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShkaW0xKVxyXG4gICAgICAgIC5maWxsKGZhbHNlKVxyXG4gICAgICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KGRpbTIpXHJcbiAgICAgICAgICAgIC5maWxsKHZhbHVlKSk7XHJcbn0iLCJpbXBvcnQgKiBhcyBjZmcgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG5pbXBvcnQgKiBhcyB0b3dlcnMgZnJvbSBcIi4vdG93ZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG93ZXJNYW5hZ2VyIHtcclxuICAgIHNjZW5lOiBURFNjZW5lXHJcbiAgICB0b3dlclR5cGVzOiB7IFtrZXk6c3RyaW5nXTogYW55fSA9IHtcclxuICAgICAgICAnQmFzaWMnOiBbdG93ZXJzLkJhc2ljVHVycmV0LCBjZmcuQmFzaWNdLFxyXG4gICAgICAgICdNdWx0aXNob3QnOiBbdG93ZXJzLk11bHRpc2hvdFR1cnJldCwgY2ZnLk11bHRpc2hvdF0sXHJcbiAgICAgICAgJ1NuaXBlcic6IFt0b3dlcnMuU25pcGVyVHVycmV0LCBjZmcuU25pcGVyXSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxhY2VUb3dlcihwb2ludGVyLCB0b3dlclR5cGUpIHtcclxuICAgICAgICBjb25zdCBbaSwgal0gPSB0aGlzLnNjZW5lLnRvR3JpZFBvcyhwb2ludGVyLngsIHBvaW50ZXIueSlcclxuICAgICAgICBpZiAodGhpcy5zY2VuZS50ZXJyYWluLmNhblBsYWNlVG93ZXIoaSwgaikpIHtcclxuICAgICAgICAgICAgdmFyIHRvd2VyOiB0b3dlcnMuVG93ZXIgPSB0aGlzLnNjZW5lLnRvd2Vycy5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFkZFNjZW5lKHRoaXMuc2NlbmUuc2NlbmUua2V5KVxyXG4gICAgICAgICAgICBpZiAodG93ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRvd2VyLm1ha2UoaSwgaiwgbmV3U2NlbmUuc2NlbmUua2V5LCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVsxXSwgdGhpcy50b3dlclR5cGVzW3Rvd2VyVHlwZV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5tb25leSAtPSB0b3dlci5jb25maWcucHJpY2VcclxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldFRvd2VyUGFyZW50KHRvd2VyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uIH0gZnJvbSBcIi4vdGVycmFpblwiO1xyXG5cclxuaW1wb3J0IHsgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGLCBUT1dFUl9IRUFMVEhfUkVHRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG5pbXBvcnQgeyBUZXJyYWluLCBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7IFRvd2VyQ29uZmlnLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XHJcbmltcG9ydCB7IEh1ZFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2h1ZFNjZW5lXCI7XHJcblxyXG5cclxuLy8gdG9kbzogbW92ZSB0byBzY2VuZT9cclxuZnVuY3Rpb24gZ2V0RW5lbXkoeCwgeSwgcmFuZ2UsIGVuZW1pZXMsIG51bVRvR2V0KTogRW5lbXlCYXNlW10ge1xyXG4gICAgbGV0IG91dEVuZW1pZXM6IEVuZW15QmFzZVtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgZW5lbXlHcm91cCBpbiBlbmVtaWVzKSB7XHJcbiAgICAgICAgbGV0IGVuZW15VW5pdHMgPSBlbmVtaWVzW2VuZW15R3JvdXBdLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVVuaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteVVuaXRzW2ldLmFjdGl2ZSAmJiBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHgsIHksIGVuZW15VW5pdHNbaV0ueCwgZW5lbXlVbml0c1tpXS55KSA8PSByYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgb3V0RW5lbWllcy5wdXNoKGVuZW15VW5pdHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdXRFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBvdXRFbmVtaWVzLnNvcnQoKGEsIGIpID0+IGIuZm9sbG93ZXIudCAtIGEuZm9sbG93ZXIudClcclxuICAgICAgICBvdXRFbmVtaWVzLmxlbmd0aCA9IE1hdGgubWluKG51bVRvR2V0LCBvdXRFbmVtaWVzLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gb3V0RW5lbWllc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgY29uZmlnOiBUb3dlckNvbmZpZ1xyXG4gICAgc3RhdHM6IFRvd2VyQ29uZmlnXHJcblxyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuXHJcbiAgICB0b3dlclR1cnJldDogX1Rvd2VyVHVycmV0XHJcbiAgICB0b3dlck1pZDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxyXG4gICAgdG93ZXJCYXNlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcbiAgICBoZWFsdGhCYXI6IEhlYWx0aEJhclxyXG4gICAgcmFuZ2VJbmRpY2F0b3I6IFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZVxyXG5cclxuICAgIGxldmVsOiBpbnRlZ2VyXHJcbiAgICBsZXZlbFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcblxyXG4gICAgLy8gTG9jYXRpb24gaW4gdGhlIHRkU2NlbmVcclxuICAgIHhDb29yZDogbnVtYmVyXHJcbiAgICB5Q29vcmQ6IG51bWJlclxyXG5cclxuICAgIC8vIFRoZXNlIGFyZSB1c2VkIGZvciB0aGUgbGV2ZWx1cCBlZmZlY3RcclxuICAgIHBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyXHJcbiAgICBlbWl0dGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlclxyXG5cclxuICAgIHByaXZhdGUgaW5uZXJUb3dlclNjZW5lS2V5OiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0b3dlclNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIodG93ZXJTY2VuZSwgMCwgMClcclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodG93ZXJTY2VuZSlcclxuICAgICAgICB0aGlzLnNjZW5lID0gdG93ZXJTY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ3BhcnRpY2xlX3JlZCcpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IHRoaXMucGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICBsaWZlc3BhbjogMjAwLFxyXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnLFxyXG4gICAgICAgICAgICBzcGVlZDogMCxcclxuICAgICAgICAgICAgc2NhbGU6IHtzdGFydDogMCwgZW5kOiAxfSxcclxuICAgICAgICAgICAgb246IGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxldmVsVXAoKSB7XHJcbiAgICAgICAgdGhpcy5sZXZlbCsrO1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLmlucHV0LmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUuc291bmRNYW5hZ2VyLmxldmVsdXBTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5leHBsb2RlKDIwLCB0aGlzLnhDb29yZCwgdGhpcy55Q29vcmQpOyAgLy8gdGhpcy54IGRvZXNuJ3Qgd29yayBidHdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBtYWtlKGk6IG51bWJlciwgajogbnVtYmVyLCBpbm5lclRvd2VyU2NlbmVLZXk6IHN0cmluZywgY29uZmlnOiBUb3dlckNvbmZpZywgdG93ZXJDbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuc3RhdHMgPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldCA9IG5ldyB0b3dlckNsYXNzTmFtZSh0aGlzLnNjZW5lLCB0aGlzLmNvbmZpZywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy54Q29vcmQgPSBpICogVElMRV9TSVpFICsgVElMRV9TSVpFIC8gMlxyXG4gICAgICAgIHRoaXMueUNvb3JkID0gaiAqIFRJTEVfU0laRSArIFRJTEVfU0laRSAvIDJcclxuXHJcbiAgICAgICAgdGhpcy50b3dlckJhc2UgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodGhpcy54Q29vcmQsIHRoaXMueUNvb3JkLCAndG93ZXJiYXNlcycsIHRoaXMuY29uZmlnLnNwcml0ZUJhc2UpO1xyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldFRpbnQodGhpcy5jb25maWcudGludEJhc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJCYXNlKTtcclxuICAgICAgICB0aGlzLnRvd2VyTWlkID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCwgJ3Rvd2VybWlkcycsIHRoaXMuY29uZmlnLnNwcml0ZU1pZCk7XHJcbiAgICAgICAgdGhpcy50b3dlck1pZC5zZXRUaW50KHRoaXMuY29uZmlnLnRpbnRNaWQpO1xyXG4gICAgICAgIHRoaXMudG93ZXJNaWQuYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogYHRvd2VyTWlkc19zcGluYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlck1pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3IgPSB0aGlzLnNjZW5lLmFkZC5jaXJjbGUoXHJcbiAgICAgICAgICAgIHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCwgY29uZmlnLnJhbmdlKDEpLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmNvbG91cixcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5hbHBoYVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRTdHJva2VTdHlsZShSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VXaWR0aCwgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlQ29sb3VyKTtcclxuICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMucmFuZ2VJbmRpY2F0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyQmFzZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmxpc3QuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY29uc3RydWN0b3IubmFtZS5tYXRjaCgvXi4rRW5lbXkkLykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGh1ZFNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJodWRTY2VuZVwiKSBhcyBIdWRTY2VuZVxyXG4gICAgICAgICAgICBodWRTY2VuZS5zZXREZXNjcmlwdGlvblRvd2VyKHRoaXMuY29uZmlnLCB0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4geyB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnBsYWNlKGksIGosIHRoaXMuc2NlbmUudGVycmFpbik7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBsYWNlVG93ZXIoaSwgaiwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJUdXJyZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci5tYWtlKHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCArIFRJTEVfU0laRSAvIDIgLSA4LCBUSUxFX1NJWkUgLSAxNClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmhlYWx0aEJhcilcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDFcclxuXHJcbiAgICAgICAgY29uc3QgcGFkID0gM1xyXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcclxuICAgICAgICAgICAgdGhpcy54Q29vcmQgKyAxNSwgdGhpcy55Q29vcmQgLSA0LCBcIlwiICsgdGhpcy5sZXZlbCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5sZXZlbFRleHQpXHJcblxyXG4gICAgICAgIHRoaXMuaW5uZXJUb3dlclNjZW5lS2V5ID0gaW5uZXJUb3dlclNjZW5lS2V5XHJcblxyXG4gICAgICAgIGxldCBpbm5lclRvd2VyU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChpbm5lclRvd2VyU2NlbmVLZXkpIGFzIFREU2NlbmVcclxuICAgICAgICBpbm5lclRvd2VyU2NlbmUub25FbmVteVJlYWNoZWRFbmQoKGRhbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5oZWFsdGggLT0gZGFtYWdlICogREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZSAqICggKyAhUGxheWVySW5mby5pc1BhdXNlZCk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQudXBkYXRlKGRlbHRhKVxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci5oZWFsdGggKz0gVE9XRVJfSEVBTFRIX1JFR0VOICogZGVsdGFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyLmhlYWx0aCA+PSAxLjApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIubGV2ZWxVcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVXAoKVxyXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5zZXRUZXh0KFwiXCIgKyB0aGlzLmxldmVsKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCAtIDEpIDwgdGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlU2NhbGUgPSB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpIC8gdGhpcy5zdGF0cy5yYW5nZSgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0U2NhbGUocmFuZ2VTY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbm5lclRvd2VyU2NlbmVLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJUb3dlclNjZW5lS2V5XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBfVG93ZXJUdXJyZXQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2Uge1xyXG4gICAgbmV4dFRpYzogbnVtYmVyXHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgYmFzZVg6IG51bWJlclxyXG4gICAgYmFzZVk6IG51bWJlclxyXG4gICAgcGFyZW50OiBUb3dlclxyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIHNwcml0ZTogc3RyaW5nLCB0aW50OiBudW1iZXIsIHBhcmVudDogVG93ZXIpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgJ3Rvd2VydG9wcycsIHNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zZXRUaW50KHRpbnQpO1xyXG4gICAgICAgIHRoaXMubmV4dFRpYyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Ugd2lsbCBwbGFjZSB0aGUgdG93ZXIgYWNjb3JkaW5nIHRvIHRoZSBncmlkXHJcbiAgICBwbGFjZShpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0ZXJyYWluOiBUZXJyYWluKSB7XHJcbiAgICAgICAgW3RoaXMueCwgdGhpcy55XSA9IHRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcclxuICAgICAgICB0aGlzLmJhc2VYID0gdGhpcy54XHJcbiAgICAgICAgdGhpcy5iYXNlWSA9IHRoaXMueVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoKSB7XHJcbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteShcclxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hbGxFbmVtaWVzLCAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZW5lbWllcykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBlbmVtaWVzWzBdXHJcblxyXG4gICAgICAgICAgICBsZXQgW3hQcmVkLCB5UHJlZF0gPSB0aGlzLnByZWRpY3RFbmVteVBvc2l0aW9uRm9yU2hvdChlbmVteSlcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgeFByZWQsIHlQcmVkKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkQnVsbGV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5maXJlQW5pbWF0aW9uKGFuZ2xlLCBkYW1hZ2UpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZS5pbnB1dC5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3RhdHMubmFtZSA9PT0gXCJTbmlwZXJcIikgIC8vIHRlbXBvcmFyeSBoYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUuc291bmRNYW5hZ2VyLnNuaXBlclNvdW5kLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5zb3VuZE1hbmFnZXIuc2hvb3RTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHByZWRpY3RFbmVteVBvc2l0aW9uRm9yU2hvdChlbmVteTogRW5lbXlCYXNlKSB7XHJcbiAgICAgICAgLy8gQXBwcm94aW1hdGUgd2hlcmUgdGhlIGVuZW15IGlzIGdvaW5nIHRvIGJlIHdoZW4gdGhlIGJ1bGxldCBoaXRzIGl0LlxyXG5cclxuICAgICAgICAvLyBDb21wdXRlIHRoZSB0aW1lIHRvIGhpdCBlbmVteSB3aGVuIGFpbWluZyBkaXJlY3RseSBhdCBpdFxyXG4gICAgICAgIGxldCBkaXN0YW5jZSA9IFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIGVuZW15LngsIGVuZW15LnkpXHJcbiAgICAgICAgbGV0IHNwZWVkID0gdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2QgKiB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbClcclxuICAgICAgICBsZXQgbXNUb0hpdCA9IGRpc3RhbmNlIC8gc3BlZWQgKiAxMDAwXHJcblxyXG4gICAgICAgIC8vIFNob290IGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgZW5lbXkgd2lsbCBiZSBhZnRlciBtc1RvSGl0IG1pbGxpc2Vjb25kcy5cclxuICAgICAgICBsZXQgdDIgPSBlbmVteS5mb2xsb3dlci50ICsgZW5lbXkuc3RhdHMuc3BlZWQgKiBtc1RvSGl0XHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KE1hdGgubWluKHQyLCAxKSlcclxuICAgICAgICByZXR1cm4gW3Jlcy54ICsgZW5lbXkueE9mZnNldCwgcmVzLnkgKyBlbmVteS55T2Zmc2V0XVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAoYW5nbGUgKyBNYXRoLlBJIC8gMikgKiBQaGFzZXIuTWF0aC5SQURfVE9fREVHO1xyXG4gICAgICAgIGxldCByZWNvaWwgPSBNYXRoLm1pbihkYW1hZ2UgKiAwLjUsIDI1KVxyXG4gICAgICAgIHRoaXMueCA9IHRoaXMuYmFzZVhcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLmJhc2VZXHJcbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcclxuICAgICAgICAgICAgdGFyZ2V0czogdGhpcyxcclxuICAgICAgICAgICAgZHVyYXRpb246IE1hdGgubWluKHRoaXMucGFyZW50LmNvbmZpZy5maXJlcmF0ZSh0aGlzLnBhcmVudC5sZXZlbCkgKiAwLjgsIDEwMCArIGRhbWFnZSksXHJcbiAgICAgICAgICAgIHg6IHRoaXMueCArIE1hdGguY29zKGFuZ2xlICsgTWF0aC5QSSkgKiByZWNvaWwsXHJcbiAgICAgICAgICAgIHk6IHRoaXMueSArIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSkgKiByZWNvaWwsXHJcbiAgICAgICAgICAgIGVhc2U6ICdRdWFkJyxcclxuICAgICAgICAgICAgeW95bzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFRpbWU6IG51bWJlciA9IDBcclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRUaWMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmlyZSgpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGljID0gdGhpcy5sYXN0VGltZSArIHRoaXMucGFyZW50LnN0YXRzLmZpcmVyYXRlKHRoaXMucGFyZW50LmxldmVsKVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWMgPSB0aGlzLmxhc3RUaW1lICsgNTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWNUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNdWx0aXNob3RUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZmlyZSgpIHsgIC8vIHRoaXMgYmVoYXZpb3VyIHNob3VsZCBiZSBpbiBfVG93ZXJUdXJyZXQuZmlyZSBidHdcclxuICAgICAgICBsZXQgbnVtVGFyZ2V0cyA9IDNcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3RhdHMubnVtVGFyZ2V0cykge1xyXG4gICAgICAgICAgICBudW1UYXJnZXRzID0gdGhpcy5wYXJlbnQuc3RhdHMubnVtVGFyZ2V0cyh0aGlzLnBhcmVudC5sZXZlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlbmVtaWVzID0gZ2V0RW5lbXkodGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSwgdGhpcy5zY2VuZS5hbGxFbmVtaWVzLCBudW1UYXJnZXRzKTtcclxuXHJcbiAgICAgICAgaWYgKGVuZW1pZXMgJiYgZW5lbWllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVuZW15IG9mIGVuZW1pZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIGVuZW15LngsIGVuZW15LnkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhbWFnZSA9IHRoaXMucGFyZW50LnN0YXRzLmRhbWFnZSh0aGlzLnBhcmVudC5sZXZlbClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkQnVsbGV0KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCBhbmdsZSxcclxuICAgICAgICAgICAgICAgICAgICBkYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmJ1bGxldFNwZWVkTW9kXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJlQW5pbWF0aW9uKGFuZ2xlLCBkYW1hZ2UpXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY2VuZSA9PSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hY3RpdmVTY2VuZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5zb3VuZE1hbmFnZXIubXVsdGlzaG90U291bmQucGxheSgpOyAgLy8gdGhpcyBzaG91bGQgYmUgaW4gY29uZmlnIGlmIHRoaXMgd2VyZSBkb25lIHByb3Blcmx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbmlwZXJUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmVteUNvbmZpZywgUEFVU0VfQUZURVJfV0FWRV9USU1FLCBFTkVNWV9DT05GSUdTLCBXYXZlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG4vLyBpbXBvcnQgeyBFbmVteSwgRmF0RW5lbXl9IGZyb20gXCIuL2VuZW15XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdhdmVNYW5hZ2VyIHtcclxuICAgIHNjZW5lOiBURFNjZW5lXHJcbiAgICBjdXJyZW50V2F2ZTogaW50ZWdlciA9IDBcclxuICAgIG5leHRFbmVteTogaW50ZWdlciA9IDBcclxuICAgIGRlYWREYW5nZXI6IGludGVnZXIgPSAwXHJcbiAgICByZW1haW5pbmdEYW5nZXI6IGludGVnZXIgPSAwXHJcbiAgICB3YXZlRGlmZmljdWx0eTogaW50ZWdlciA9IDBcclxuXHJcbiAgICB3YXZlQWN0aXZlOiBib29sZWFuICAvLyBmYWxzZSBmb3IgbmVzdGVkIHdhdmVzXHJcbiAgICBuZXh0V2F2ZVRpbWU6IGludGVnZXIgPSAwXHJcbiAgICByZXNwYXduUXVldWU6IFtFbmVteUNvbmZpZywgaW50ZWdlcl1bXSA9IFtdO1xyXG4gICAgcmVzcGF3bkhlYWx0aDogaW50ZWdlciAgLy8gemVybyB1bmxlc3MgcmVzcGF3bmluZyBlbmVteSwgaGFja1xyXG5cclxuICAgIGVuZW15SW50ZXJ2YWw6IGludGVnZXJcclxuXHJcbiAgICBxdWV1ZWRFbmVteTogYW55XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIHNldCBmYWxzZSBmb3IgbmVzdGVkIGJlaGF2aW9yIGluIHVwZGF0ZSgpXHJcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA+IDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmdldFdhdmVEaWZmaWN1bHR5KCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSAxZTkgLy8gYSBsb3RcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0V2F2ZURpZmZpY3VsdHkoKSB7XHJcbiAgICAgICAgLy9UT0RPOiBhZGQgZGlmZmljdWx0eSBzY2FsaW5nIGFuZCBiYWxhbmNpbmcgZm9yIHdhdmVzXHJcbiAgICAgICAgdGhpcy53YXZlRGlmZmljdWx0eSA9IFdhdmVDb25maWcub3V0ZXJXYXZlRGFuZ2VyKHRoaXMuY3VycmVudFdhdmUpXHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgPSB0aGlzLndhdmVEaWZmaWN1bHR5XHJcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gV2F2ZUNvbmZpZy5vdXRlckVuZW15SW50ZXJ2YWxcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHRXYXZlKCkge1xyXG4gICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZSsrO1xyXG4gICAgICAgIHRoaXMuZ2V0V2F2ZURpZmZpY3VsdHkoKTtcclxuICAgICAgICBQbGF5ZXJJbmZvLndhdmVIZWFsdGhSZWdlbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyB3YXZlICcgKyB0aGlzLmN1cnJlbnRXYXZlICsgJywgd2F2ZSBkaWZmaWN1bHR5OiAnICsgdGhpcy53YXZlRGlmZmljdWx0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzcGF3bkVuZW15KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc3Bhd25RdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwYXduID0gdGhpcy5yZXNwYXduUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNwYXduSGVhbHRoID0gcmVzcGF3blsxXTtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmVzcGF3blswXS5kYW5nZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbcmVzcGF3blswXS5uYW1lXS5nZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYW5kRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbmVteS5kYW5nZXIgPD0gdGhpcy5yZW1haW5pbmdEYW5nZXIpICYmIChlbmVteS5taW5XYXZlIDw9IHRoaXMuY3VycmVudFdhdmUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyYW5kRW5lbXkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmFuZEVuZW15LmRhbmdlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyYW5kRW5lbXkubmFtZV0uZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IDA7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3Bhd24ocmVzcGF3bjogRW5lbXlDb25maWcsIHJlbWFpbmluZ0hlYWx0aDogaW50ZWdlcikge1xyXG4gICAgICAgIHRoaXMucmVzcGF3blF1ZXVlLnB1c2goW3Jlc3Bhd24sIHJlbWFpbmluZ0hlYWx0aF0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGFcclxuICAgICAgICBsZXQgZW5lbXk6IEVuZW15QmFzZVxyXG4gICAgICAgIGxldCB3YXZlOiBpbnRlZ2VyXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMud2F2ZUFjdGl2ZSAmJiB0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0V2F2ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmUoKTsgIC8vIG5vIHdhdmVzIGluIG5lc3RlZCBsYXllcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdEYW5nZXIgPiAwICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNwYXduRW5lbXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkRGFuZ2VyID09PSB0aGlzLndhdmVEaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhdmUgXCIgKyB0aGlzLmN1cnJlbnRXYXZlICsgXCIgY29tcGxldGUhIE5leHQgd2F2ZSBpbiBcIiArIFBBVVNFX0FGVEVSX1dBVkVfVElNRSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWREYW5nZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXZlVGltZSA9IHRoaXMubGFzdFRpbWUgKyBQQVVTRV9BRlRFUl9XQVZFX1RJTUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2F2ZSA9IHRoaXMuY3VycmVudFdhdmVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucXVldWVkRW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5lbXkubWluV2F2ZSA8PSAyICogV2F2ZUNvbmZpZy5sZXZlbFRvV2F2ZSh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gdGhpcy5sYXN0VGltZSAqIChXYXZlQ29uZmlnLmRhbmdlclBlclNlYyh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpICogMC4wMDEpXHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSAodGhpcy5xdWV1ZWRFbmVteS5kYW5nZXIgKiAxLjApXHJcbiAgICAgICAgICAgIGlmIChhID4gYikge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5xdWV1ZWRFbmVteS5uYW1lXS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGFzdFRpbWUsIGIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZEVuZW15ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3YXZlID0gV2F2ZUNvbmZpZy5sZXZlbFRvV2F2ZSh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5lbXkpIHtcclxuICAgICAgICAgICAgZW5lbXkuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICBlbmVteS5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIGVuZW15IGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxyXG4gICAgICAgICAgICBlbmVteS5zdGFydE9uUGF0aCh3YXZlLCB0aGlzLnJlc3Bhd25IZWFsdGgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bhd25IZWFsdGggPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXh0RW5lbXkgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5lbmVteUludGVydmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRFbmVteShmaWx0ZXJfZm4pOiBFbmVteUNvbmZpZyB7XHJcbiAgICAgICAgbGV0IGF2YWlsRW5lbWllcyA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7ICAvLyBTZWxlY3QgYWxsIGVuZW1pZXMgdGhhdCBjYW4gYmUgc3Bhd25lZFxyXG4gICAgICAgICAgICBpZiAoZW5lbXkubWluV2F2ZSA+PSAwICYmIGZpbHRlcl9mbihlbmVteSkpXHJcbiAgICAgICAgICAgICAgICBhdmFpbEVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXZhaWxFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBvbmUgb2YgdGhlbVxyXG4gICAgICAgICAgICBsZXQgcmFuZEVuZW15ID0gYXZhaWxFbmVtaWVzW01hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogYXZhaWxFbmVtaWVzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZEVuZW15XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==