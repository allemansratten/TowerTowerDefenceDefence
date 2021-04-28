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
        this.levelupSound = this.sound.add('levelup_sound', { 'loop': false, 'volume': 0.02 });
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
        this.load.audio('levelup_sound', 'levelup.wav');
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
        if (this.scene == this.scene.metaScene.activeScene)
            this.scene.metaScene.levelupSound.play();
        this.emitter.explode(20, this.xCoord, this.yCoord); // this.x doesn't work btw
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
        delta *= playerInfo_1.PlayerInfo.timeScale;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlcnJhaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvd2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUV6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxtQkFBUyxHQUFHLG1CQUFTLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxtQkFBUyxHQUFHLG1CQUFTLEdBQUcsQ0FBQztRQUUzQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFD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QUFDLElBQUksQ0FBQyxDQUFDO1lBRXZCLDJDQUEyQztZQUMzQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7WUFFdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDdkQ7SUFDTCxDQUFDO0lBRU8sa0NBQVksR0FBcEIsVUFBcUIsU0FBUztRQUMxQixJQUFJLFlBQVksR0FBRyxFQUFFO1FBQ3JCLEtBQWlCLFVBQWEsRUFBYix3Q0FBYSxFQUFiLDJCQUFhLEVBQWIsSUFBYSxFQUFFLEVBQUcseUNBQXlDO1lBQXhFLElBQUksS0FBSztZQUNULElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztnQkFDdEMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUVELElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsNEJBQTRCO1lBQzVCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sU0FBUztTQUNuQjthQUFNO1lBQ0gsT0FBTyxJQUFJO1NBQ2Q7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBeElZLGtDQUFXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4vcGxheWVySW5mb1wiXG5pbXBvcnQge1REU2NlbmV9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcblxuZXhwb3J0IGNvbnN0IFJBRElVUyA9IDEwXG5cbmV4cG9ydCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcblxuICAgIHNjZW5lOiBURFNjZW5lXG5cbiAgICBkeDogbnVtYmVyID0gMFxuICAgIGR5OiBudW1iZXIgPSAwXG4gICAgbGlmZXNwYW46IG51bWJlciA9IDBcbiAgICBzcGVlZDogbnVtYmVyXG4gICAgZGFtYWdlOiBpbnRlZ2VyXG5cbiAgICBidWxsZXRJbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXG4gICAgcGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXJcbiAgICBlbWl0dGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlclxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDApO1xuXG4gICAgICAgIHRoaXMuZHggPSAwO1xuICAgICAgICB0aGlzLmR5ID0gMDtcbiAgICAgICAgdGhpcy5saWZlc3BhbiA9IDA7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKDYwMCwgMSk7XG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgwLCAwLCAnYnVsbGV0JylcbiAgICAgICAgdGhpcy5hZGQodGhpcy5idWxsZXRJbWFnZSlcblxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMuc2NlbmUuYWRkLnBhcnRpY2xlcygncGFydGljbGVfcmVkJylcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gdGhpcy5wYXJ0aWNsZXMuY3JlYXRlRW1pdHRlcih7XG4gICAgICAgICAgICBzcGVlZDogMTAwLFxuICAgICAgICAgICAgc2NhbGU6IHtzdGFydDogMC4zLCBlbmQ6IDB9LFxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnQUREJyxcbiAgICAgICAgICAgIGxpZmVzcGFuOiAxMDAsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpcmUoeCwgeSwgYW5nbGUsIGRhbWFnZSwgdG93ZXJSYW5nZSwgc3BlZWRNb2QsIHNjZW5lKSB7XG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xuICAgICAgICB0aGlzLnNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQodG93ZXJSYW5nZSAqIHNwZWVkTW9kLCAxKTtcblxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcblxuICAgICAgICAvLyAgQnVsbGV0cyBmaXJlIGZyb20gdGhlIG1pZGRsZSBvZiB0aGUgc2NyZWVuIHRvIHRoZSBnaXZlbiB4L3lcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS5zZXRQb3NpdGlvbih4LCB5KTtcblxuICAgICAgICAvLyAgd2UgZG9uJ3QgbmVlZCB0byByb3RhdGUgdGhlIGJ1bGxldHMgYXMgdGhleSBhcmUgcm91bmRcbiAgICAgICAgLy8gIHRoaXMuc2V0Um90YXRpb24oYW5nbGUpO1xuICAgICAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBicmluZyB0byBmcm9udFxuXG4gICAgICAgIHRoaXMuZHggPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgICAgIHRoaXMuZHkgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICAgICAgdGhpcy5saWZlc3BhbiA9IDEwMDAgLyBzcGVlZE1vZDtcblxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZS5pc1Zpc2libGUoKSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmZsb3coMCkgIC8vIGFyZ3VtZW50OiBmcmVxdWVuY3kgKDAgPSBhbHdheXMpXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuc3RhcnRGb2xsb3codGhpcy5idWxsZXRJbWFnZSk7XG4gICAgICAgICAgICAvLyB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AodGhpcy5idWxsZXRJbWFnZSk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AodGhpcy5wYXJ0aWNsZXMpO1xuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZXhwbG9kZSgxMCwgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpXG4gICAgfVxuXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xuXG4gICAgICAgIHRoaXMubGlmZXNwYW4gLT0gZGVsdGE7XG5cbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS54ICs9IHRoaXMuZHggKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS55ICs9IHRoaXMuZHkgKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcblxuICAgICAgICAodGhpcy5ib2R5IGFzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5KS5zZXRDaXJjbGUoUkFESVVTLCB0aGlzLmJ1bGxldEltYWdlLngsIHRoaXMuYnVsbGV0SW1hZ2UueSk7XG5cbiAgICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzLmRlc3Ryb3koKTsgLy8gZGlzYWJsZSBlbWl0dG9yIChhbHNvIGNvdWxkIGV4cGxvZGUgaXQpXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIubWFuYWdlci5yZW1vdmVFbWl0dGVyKHRoaXMuZW1pdHRlcilcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuL2VuZW15XCI7XG5cbi8vIGVuZW15IGRhbWFnZSAqIERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiA9IGhvdyBtdWNoIGhlYWx0aCB0b3dlciBsb3Nlc1xuLy8gKHRvd2VyIGhlYWx0aCBpcyBmcm9tIDAgdG8gMSlcbmV4cG9ydCBjb25zdCBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSAwLjRcblxuZXhwb3J0IGNvbnN0IFRPV0VSX0hFQUxUSF9SRUdFTiA9IDAuMDAwMDEgKiAyXG5cbmV4cG9ydCBjb25zdCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUgPSAzMDAwO1xuXG5leHBvcnQgY29uc3QgUExBWUVSX0hFQUxUSF9SRUdFTjogbnVtYmVyID0gMDsgIC8vIGhvdyBtdWNoIGhlYWx0aCBwZXIgd2F2ZSwgY2FuIGJlIDwgMVxuXG5leHBvcnQgY29uc3QgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyA9IHtcbiAgICAnY29sb3VyJzogMHhiYmJiZmYsXG4gICAgJ2FscGhhJzogMjEwLFxuICAgICdlZGdlQ29sb3VyJzogMHg4MDgwZmYsXG4gICAgJ2VkZ2VXaWR0aCc6IDRcbn07XG5cbmV4cG9ydCBjb25zdCBXYXZlQ29uZmlnID0ge1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gb3V0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIb3cgbXVjaCB0aW1lIGJldHdlZW4gY29uc2VjdXRpdmUgc3Bhd25zIGluIGEgd2F2ZVxuICAgIG91dGVyRW5lbXlJbnRlcnZhbDogNTAwLFxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBpbiBhIHdhdmVcbiAgICBvdXRlcldhdmVEYW5nZXI6ICh3YXZlKSA9PiAod2F2ZSArMSkgICogMTAsXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIGlubmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG93IG11Y2ggZGFuZ2VyIHBlciBzZWNvbmQgaXMgZ2VuZXJhdGVlIGluIGlubmVyIGRlcHRocz9cbiAgICBkYW5nZXJQZXJTZWM6IChsZXZlbCkgPT4gMTAqbGV2ZWwsXG4gICAgLy8gVG8gd2hhdCB3YXZlIG51bWJlciBkb2VzIGEgdG93ZXIgbGV2ZWwgY29ycmVzcG9uZD8gKGZvciBlbmVteSBzY2FsaW5nKVxuICAgIGxldmVsVG9XYXZlOiAobGV2ZWwpID0+IDMgKiBsZXZlbCxcbn1cblxuZXhwb3J0IHR5cGUgRW5lbXlDb25maWcgPSB7XG4gICAgbmFtZTogc3RyaW5nICAvLyBtdXN0IGJlIHNhbWUgYXMgY29uZmlnIG9iamVjdCBuYW1lXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyAgLy8gbmFtZSB0byBiZSBkaXNwbGF5ZWQgdG8gcGxheWVyXG4gICAgY2xhc3M6IGFueSAgLy8gY2xhc3Mgb2YgdGhlIGVuZW15IGFzIGRlZmluZWQgaW4gLi9lbmVteS50c1xuICAgIGhwOiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gY2FuIHNjYWxlIHdpdGggd2F2ZVxuICAgIHNwZWVkOiBudW1iZXIgIC8vIGZyYWN0aW9uIG9mIHBhdGhcbiAgICBtb25leTogaW50ZWdlciAgLy8gb24ta2lsbCByZXdhcmRcbiAgICBkYW1hZ2U6IGludGVnZXIgIC8vIGRhbWFnZSBkZWFsdCBvbiByZWFjaGluZyBlbmRcbiAgICBhcm1vdXI6IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBmbGF0IHJlZHVjdGlvbiBvZiBpbmNvbWluZyBkYW1hZ2VcbiAgICBkYW5nZXI6IGludGVnZXIgIC8vIGZvciBjYWxjdWxhdGluZyB3YXZlIGRpZmZpY3VsdHlcbiAgICBzcHJpdGVOYW1lOiBzdHJpbmcgIC8vIHNwcml0ZSBhcyBpbXBvcnRlZCBpbiBtZXRhU2NlbmUucHJlbG9hZFxuICAgIHRpbnQ6IGludGVnZXJcbiAgICBzcGxpdD86IHsgIC8vIG9wdGlvbmFsIHNwbGl0IGluZm9cbiAgICAgICAgY2ZnOiBFbmVteUNvbmZpZyAgLy8gVE9ETzogbWFrZSBzcGxpdCBpbnRvIG11bHRpcGxlIHR5cGVzIHBvc3NpYmxlP1xuICAgICAgICBhbW91bnQ6IGludGVnZXJcbiAgICB9XG4gICAgbWluV2F2ZTogaW50ZWdlciAgLy8gZmlyc3Qgd2F2ZSB0aGlzIGNhbiBzcGF3biwgLTEgdG8gbmV2ZXIgc3Bhd25cbiAgICBibHVyYj86IHN0cmluZyAgLy8gc2hvd24gdG8gcGxheWVyXG59XG5cbmV4cG9ydCBjb25zdCBXZWFrOiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdXZWFrJyxcbiAgICAnZGlzcGxheU5hbWUnOiAnTm9ybWFsJyxcbiAgICAnY2xhc3MnOiBlbmVtLldlYWtFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyA3Kih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcbiAgICAnbW9uZXknOiAxLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcbiAgICAnc3ByaXRlTmFtZSc6ICd3ZWFrRW5lbXknLFxuICAgICdkYW5nZXInOiAxMCxcbiAgICAndGludCc6IDB4ZmZmZmZmLFxuICAgICdtaW5XYXZlJzogMCxcbiAgICAnYmx1cmInOiAnVG9vIGN1dGUgdG8ga2lsbC4uLiBzdXJlbHkuJ1xufVxuXG5leHBvcnQgY29uc3QgRmF0OiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdGYXQnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdDaG9uaycsXG4gICAgJ2NsYXNzJzogZW5lbS5GYXRFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTAwICsgMzUgKiAod2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gNDAwMDAsXG4gICAgJ21vbmV5JzogNCxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDEwMCxcbiAgICAnc3ByaXRlTmFtZSc6ICdmYXRFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnbWluV2F2ZSc6IDE0LFxuXHQnYmx1cmInOiAnTGFyZ2UgYW5kIGluIGNoYXJnZS4nXG59XG5cbmV4cG9ydCBjb25zdCBBcm1vdXJlZDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnQXJtb3VyZWQnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdBcm1vdXJlZCcsXG4gICAgJ2NsYXNzJzogZW5lbS5Bcm1vdXJlZEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDcqKHdhdmUtMSksXG4gICAgJ3NwZWVkJzogMSAvIDMwMDAwLFxuICAgICdtb25leSc6IDMsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiBNYXRoLm1pbigzICsgKE1hdGguZmxvb3Iod2F2ZS81KSksMTQpLFxuICAgICdkYW5nZXInOiAxMDAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnYXJtb3VyZWRFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnbWluV2F2ZSc6IDEwLFxuXHQnYmx1cmInOiAnVGhlIGhhdCBpcyBzdXJwcmlzaW5nbHkgc3R1cmR5Lidcbn1cblxuZXhwb3J0IGNvbnN0IEZhc3Q6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ0Zhc3QnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGVlZHknLFxuICAgICdjbGFzcyc6IGVuZW0uRmFzdEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxNSArIDUqKHdhdmUtMSksXG4gICAgJ3NwZWVkJzogMSAvIDEwMDAwLFxuICAgICdtb25leSc6IDEsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxuICAgICdkYW5nZXInOiAzMCxcbiAgICAnc3ByaXRlTmFtZSc6ICdmYXN0RW5lbXknLFxuICAgICd0aW50JzogMHhmZmZmZmYsXG4gICAgJ21pbldhdmUnOiA2LFxuXHQnYmx1cmInOiAnVGhlIGJvb3RzIGFyZW5cXCd0IGp1c3QgZm9yIHNob3chJ1xufVxuXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJTbWFsbDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJTbWFsbCcsXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1NwbGl0dGVyIGJhYnknLFxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJTbWFsbEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxMCs0Kih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcbiAgICAnbW9uZXknOiAwLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcbiAgICAnZGFuZ2VyJzogMjAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnc3BsaXR0ZXJTbWFsbEVuZW15JyxcbiAgICAndGludCc6IDB4ZmZmZmZmLFxuICAgICdtaW5XYXZlJzogLTEsXG5cdCdibHVyYic6ICdBd3csIGxvb2ssIHRoZXlcXCdyZSBqdXN0IGJhYmllcyEnXG59XG5cbmV4cG9ydCBjb25zdCBTcGxpdHRlckJpZzogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJCaWcnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGxpdHRlcicsXG4gICAgJ2NsYXNzJzogZW5lbS5TcGxpdHRlckJpZ0VuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDUqKHdhdmUtMSksXG4gICAgJ3NwZWVkJzogMSAvIDMwMDAwLFxuICAgICdtb25leSc6IDIsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxuICAgICdkYW5nZXInOiAzMCxcbiAgICAnc3ByaXRlTmFtZSc6ICdzcGxpdHRlckJpZ0VuZW15JyxcbiAgICAndGludCc6IDB4ZmZmZmZmLFxuICAgICdzcGxpdCc6IHtcbiAgICAgICAgJ2NmZyc6IFNwbGl0dGVyU21hbGwsXG4gICAgICAgICdhbW91bnQnOiAyXG4gICAgfSxcbiAgICAnbWluV2F2ZSc6IDgsXG5cdCdibHVyYic6ICdFeWVzIHRvIG1lZXQgeW91Lidcbn1cblxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyRmF0OiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdTcGxpdHRlckZhdCcsXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1RoZSBCaWcgT25lJyxcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyRmF0RW5lbXksXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwMCArIDEwKih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyA0MDAwMCxcbiAgICAnbW9uZXknOiAyLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcbiAgICAnZGFuZ2VyJzogMjAwLFxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyRmF0RW5lbXknLFxuICAgICd0aW50JzogMHhmZmZmZmYsXG4gICAgJ3NwbGl0Jzoge1xuICAgICAgICAnY2ZnJzogU3BsaXR0ZXJCaWcsXG4gICAgICAgICdhbW91bnQnOiAyXG4gICAgfSxcbiAgICAnbWluV2F2ZSc6IDE4LFxuXHQnYmx1cmInOiAnRXllcyB0byBtZWV0IHlvdS4uLiB0d28uJ1xufVxuXG5cblxuZXhwb3J0IGNvbnN0IEVORU1ZX0NPTkZJR1MgPSBbV2VhaywgRmF0LCBBcm1vdXJlZCwgRmFzdCwgU3BsaXR0ZXJCaWcsIFNwbGl0dGVyU21hbGwsIFNwbGl0dGVyRmF0XVxuXG5cbmV4cG9ydCB0eXBlIFRvd2VyQ29uZmlnID0ge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGRhbWFnZTogKGludGVnZXIpID0+IG51bWJlclxuICAgIGZpcmVyYXRlOiAoaW50ZWdlcikgPT4gbnVtYmVyICAvLyBtaWxpc2Vjb25kcyBiZXR3ZWVuIGVhY2ggc2hvdFxuICAgIHJhbmdlOiAoaW50ZWdlcikgPT4gbnVtYmVyXG4gICAgbnVtVGFyZ2V0cz86IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBzZXQgZm9yIHRvd2VycyB0aGF0IHRhcmdldCBtdWx0aXBsZSBlbmVtaWVzXG4gICAgYnVsbGV0U3BlZWRNb2Q6IG51bWJlciAgLy8gYnVsbGV0IHdpbGwgcmVhY2ggcmFuZ2UgaW4gMS9idWxsZXRTcGVlZE1vZCBzZWNvbmRzXG4gICAgcHJpY2U6IG51bWJlclxuICAgIHNwcml0ZUJhc2U6IGludGVnZXJcbiAgICBzcHJpdGVNaWQ6IGludGVnZXJcbiAgICBzcHJpdGVUb3A6IGludGVnZXJcbiAgICB0aW50QmFzZTogaW50ZWdlclxuICAgIHRpbnRNaWQ6IGludGVnZXJcbiAgICB0aW50VG9wOiBpbnRlZ2VyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IEJhc2ljOiBUb3dlckNvbmZpZyA9IHtcbiAgICAnbmFtZSc6IFwiQmFzaWNcIixcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMTUgKyAzMCAqIChsZXZlbC0xKSxcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiAxMDAwLFxuICAgICdyYW5nZSc6IGxldmVsID0+IDEyNSxcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA0LFxuICAgICdwcmljZSc6IDUsXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxuICAgICdzcHJpdGVNaWQnOiAwLFxuICAgICdzcHJpdGVUb3AnOiAwLFxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxuICAgICd0aW50TWlkJzogMHg2NzVhOWMsXG4gICAgJ3RpbnRUb3AnOiAweGFhYWFmZixcbiAgICAnZGVzY3JpcHRpb24nOiBcIk5vdGhpbmcgZmFuY3kuIERhbWFnZSBncm93cyB3aXRoIGxldmVsLlwiLFxufVxuXG5cbmV4cG9ydCBjb25zdCBTbmlwZXI6IFRvd2VyQ29uZmlnID0ge1xuICAgICduYW1lJzogXCJTbmlwZXJcIixcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gNTAgKyAxMjAgKiAobGV2ZWwtMSksXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gNDAwMCxcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiAyMDAgKyAzNSAqIGxldmVsLFxuICAgICdidWxsZXRTcGVlZE1vZCc6IDUsXG4gICAgJ3ByaWNlJzogMTAsXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxuICAgICdzcHJpdGVNaWQnOiAwLFxuICAgICdzcHJpdGVUb3AnOiAxLFxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxuICAgICd0aW50TWlkJzogMHgzYTcxNWQsXG4gICAgJ3RpbnRUb3AnOiAweDQ4YWM4MSxcbiAgICAnZGVzY3JpcHRpb24nOiBcIkxvbmcgcmFuZ2UsIGJ1dCBmaXJlcyBzbG93bHkuIERhbWFnZSBhbmQgcmFuZ2UgZ3JvdyB3aXRoIGxldmVsLlwiLFxufVxuXG5cbmV4cG9ydCBjb25zdCBNdWx0aXNob3Q6IFRvd2VyQ29uZmlnID0ge1xuICAgICduYW1lJzogXCJNdWx0aXNob3RcIixcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMTUgKyAyMCoobGV2ZWwtMSksXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gMTAwMCxcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiA5NSArIDUqKGxldmVsLTEpLFxuICAgICdudW1UYXJnZXRzJzogbGV2ZWwgPT4gMyArIGxldmVsLFxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXG4gICAgJ3ByaWNlJzogNyxcbiAgICAnc3ByaXRlQmFzZSc6IDAsXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXG4gICAgJ3Nwcml0ZVRvcCc6IDIsXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRNaWQnOiAweDdmNGQ2MSxcbiAgICAndGludFRvcCc6IDB4YWE0ZTYxLFxuICAgICdkZXNjcmlwdGlvbic6IFwiQ2FuIHNob290IGF0IG11bHRpcGxlIGVuZW1pZXMgYXQgb25jZS4gRGFtYWdlLCByYW5nZSwgYW5kIG51bWJlciBvZiB0YXJnZXRzIGdyb3cgd2l0aCBsZXZlbC5cIixcbn1cblxuZXhwb3J0IGNvbnN0IFRPV0VSX0NPTkZJR1MgPSBbQmFzaWMsIE11bHRpc2hvdCwgU25pcGVyXSIsIi8vIGltcG9ydCB7IEdyaWRQb3NpdGlvbiwgUG9zaXRpb24sIFRlcnJhaW4gfSBmcm9tIFwiLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgKiBhcyBjZmcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBIdWRTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9odWRTY2VuZVwiO1xuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL21ldGFTY2VuZVwiO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcbiAgICBzdGF0czogY2ZnLkVuZW15Q29uZmlnO1xuXG4gICAgZm9sbG93ZXI6IGFueVxuICAgIGhwOiBpbnRlZ2VyXG4gICAgeU9mZnNldDogbnVtYmVyID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKC0yMCwgMjApO1xuICAgIHhPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcbiAgICBzY2VuZTogVERTY2VuZSAvLyB0eXBlIGFzc2VydGlvblxuICAgIHNwZWVkOiBudW1iZXI7XG5cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBzdGF0cykge1xuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgc3RhdHMuc3ByaXRlTmFtZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0cyA9IHN0YXRzO1xuICAgICAgICB0aGlzLmZvbGxvd2VyID0geyB0OiAwLCB2ZWM6IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCkgfTtcblxuICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUgPT0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWN0aXZlU2NlbmUpXG4gICAgICAgICAgICAgICAgKHRoaXMuc2NlbmUuc2NlbmUuZ2V0KCdodWRTY2VuZScpIGFzIEh1ZFNjZW5lKS5zZXREZXNjcmlwdGlvbkVuZW15KHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG4gICAgICAgIC8vIG1vdmUgdGhlIHQgcG9pbnQgYWxvbmcgdGhlIHBhdGgsIDAgaXMgdGhlIHN0YXJ0IGFuZCAxIGlzIHRoZSBlbmRcbiAgICAgICAgdGhpcy5mb2xsb3dlci50ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcblxuICAgICAgICAvLyBnZXQgdGhlIG5ldyB4IGFuZCB5IGNvb3JkaW5hdGVzIGluIHZlY1xuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcblxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA+IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudmVjLnggPCB0aGlzLnggLSB0aGlzLnhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgZW5lbXkgeCBhbmQgeSB0byB0aGUgbmV3bHkgb2J0YWluZWQgeCBhbmQgeVxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZm9sbG93ZXIudmVjLnggKyB0aGlzLnhPZmZzZXQsIHRoaXMuZm9sbG93ZXIudmVjLnkgKyB0aGlzLnlPZmZzZXQpO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXRoLCByZW1vdmUgdGhlIGVuZW15XG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnQgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5yZWFjaEVuZCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFscGhhID0gMVxuICAgICAgICB0aGlzLmFuZ2xlID0gMFxuICAgICAgICB0aGlzLnNjYWxlID0gMVxuICAgIH1cblxuICAgIHJlYWNoRW5kKCkge1xuICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlbWFpbmluZ0RhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlcjtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBodWRTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwiaHVkU2NlbmVcIikgYXMgSHVkU2NlbmVcblxuICAgICAgICAgICAgUGxheWVySW5mby5ocCAtPSB0aGlzLnN0YXRzLmRhbWFnZTtcbiAgICAgICAgICAgIGh1ZFNjZW5lLmhwUmVkbmVzcyA9IDFcblxuICAgICAgICAgICAgY29uc3QgbWV0YVNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJtZXRhU2NlbmVcIikgYXMgTWV0YVNjZW5lXG4gICAgICAgICAgICBtZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKS5jYW1lcmFzLm1haW4uc2hha2UoMjAwLCAwLjAwNSlcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLmRhbWFnZVNvdW5kLnBsYXkoKTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZXNwYXduKHRoaXMuc3RhdHMsIHRoaXMuaHApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5lbmVteUVuZENhbGxiYWNrKHRoaXMuc3RhdHMuZGFtYWdlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRPblBhdGgod2F2ZSwgcmVzcGF3bkhlYWx0aCwgc3RhcnRfdCA9IDApIHtcbiAgICAgICAgLy8gc2V0IHRoZSB0IHBhcmFtZXRlciBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhdGhcbiAgICAgICAgdGhpcy5mb2xsb3dlci50ID0gc3RhcnRfdDtcblxuICAgICAgICBpZiAocmVzcGF3bkhlYWx0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmhwID0gcmVzcGF3bkhlYWx0aDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMuc3RhdHMuaHAod2F2ZSk7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3RhdHMuc3BlZWQ7XG4gICAgICAgIHRoaXMudGludCA9IHRoaXMuc3RhdHMudGludDtcblxuICAgICAgICAvLyBnZXQgeCBhbmQgeSBvZiB0aGUgZ2l2ZW4gdCBwb2ludFxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHggYW5kIHkgb2Ygb3VyIGVuZW15IHRvIHRoZSByZWNlaXZlZCBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5mb2xsb3dlci52ZWMueCwgdGhpcy5mb2xsb3dlci52ZWMueSk7XG5cbiAgICAgICAgbGV0IGZyYW1lUmF0ZSA9IE1hdGgubWluKDYwLCB0aGlzLnN0YXRzLnNwZWVkICogNDAwMDAgKiAxNSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJmYXRFbmVteVwiIHx8IHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJzcGxpdHRlckZhdEVuZW15XCIpIHsgLy8gaGFja1xuICAgICAgICAgICAgZnJhbWVSYXRlICo9IDAuNVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KHtcbiAgICAgICAgICAgIGtleTogYCR7dGhpcy5zdGF0cy5zcHJpdGVOYW1lfV93YWxrYCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZnJhbWVSYXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVEYW1hZ2UoZGFtYWdlOiBpbnRlZ2VyKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlIC0gdGhpcy5zdGF0cy5hcm1vdXIodGhpcy5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZSk7XG5cbiAgICAgICAgLy8gaWYgaHAgZHJvcHMgYmVsb3cgMCB3ZSBkZWFjdGl2YXRlIHRoaXMgZW5lbXlcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub25EZWF0aCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlYXRoKCkge1xuICAgICAgICB0aGlzLm9uRGVhdGhBYmlsaXR5KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzLnNwbGl0KVxuICAgICAgICAgICAgdGhpcy5vbkRlYXRoU3BsaXQoKVxuXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApIHsgIC8vIEFkZCBnb2xkIGluIGJhc2UgbGF5ZXIgb25seVxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLm1vbmV5ICs9IHRoaXMuc3RhdHMubW9uZXk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgICAgIGFscGhhOiAwLFxuICAgICAgICAgICAgYW5nbGU6IFBsYXllckluZm8uUk5HLnNpZ24oKSAqIDE4MCxcbiAgICAgICAgICAgIHNjYWxlOiAwLjUsXG4gICAgICAgICAgICBkdXJhdGlvbjogUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoNjAwLCA4MDApLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLmVuZW1pZXNTbGFpbisrO1xuICAgIH1cblxuICAgIG9uRGVhdGhTcGxpdCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdHMuc3BsaXQuYW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdFbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnN0YXRzLnNwbGl0LmNmZy5uYW1lXS5nZXQoKVxuICAgICAgICAgICAgbmV3RW5lbXkuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgIG5ld0VuZW15LnNldEFjdGl2ZSh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyIC09IHRoaXMuc3RhdHMuc3BsaXQuY2ZnLmRhbmdlcjtcbiAgICAgICAgICAgIG5ld0VuZW15LnN0YXJ0T25QYXRoKHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmUsIDAsIHRoaXMuZm9sbG93ZXIudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlYXRoQWJpbGl0eSgpIHsgIC8vIG92ZXJyaWRlIHRoaXMgZm9yIHNwZWNpYWwgb24tZGVhdGggYWJpbGl0aWVzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2Vha0VuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLldlYWspXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmF0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuRmF0KVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFybW91cmVkRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuQXJtb3VyZWQpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFzdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkZhc3QpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJCaWdFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlckJpZylcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdHRlclNtYWxsRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJTbWFsbClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdHRlckZhdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyRmF0KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXG5pbXBvcnQgeyBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCJcblxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuICAgIHN0YXRpYyBIRUFMVEhfQ09MT1IgPSAweGY4ZmYzNiAvLzB4ZmY0NDQ0XG4gICAgc3RhdGljIEhFQUxUSF9MT1NTX0NPTE9SID0gMHg3ZDdkN2QgLy8gMHg0NGZmNDRcblxuICAgIHNjZW5lOiBURFNjZW5lXG5cbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlciA9IDEgIC8vIDAgdG8gMVxuICAgIHNsb3dIZWFsdGg6IG51bWJlclxuXG4gICAgYmdCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBoZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBzbG93SGVhbHRoQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG5cbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgbWF4SGVhbHRoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKVxuICAgIH1cblxuICAgIG1ha2UoeCwgeSwgd2lkdGgsIGhlYWx0aD0wKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcblxuICAgICAgICAvLyBoZWFsdGggYmFyIGJhc2UvYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmJnQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoICsgNCwgNiwgMHgwMDAwMDApXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYmdCYXIpXG5cbiAgICAgICAgLy8gdmlzdWFsaXphdGlvbiBvZiBoZWFsdGggbG9zc2VzXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICB3aWR0aCwgNCxcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfTE9TU19DT0xPUixcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLnNsb3dIZWFsdGhCYXIpXG4gICAgICAgIFxuICAgICAgICAvLyBoZWFsdGggYmFyIGl0c2VsZlxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICB3aWR0aCwgNCxcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfQ09MT1IsXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXG5cbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGhcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gaGVhbHRoXG4gICAgfVxuXG4gICAgc2V0IGhlYWx0aChoKSB7XG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGgpKVxuICAgIH1cblxuICAgIGdldCBoZWFsdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGhcbiAgICB9XG5cbiAgICBwdWJsaWMgbGV2ZWxVcCgpIHtcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YSkge1xuICAgICAgICBjb25zdCBjb2VmID0gTWF0aC5wb3coMC45OSwgZGVsdGEvMTAwMCAqIDYwKVxuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSBjb2VmICogdGhpcy5zbG93SGVhbHRoICsgKDEgLSBjb2VmKSAqIHRoaXMuaGVhbHRoXG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5oZWFsdGhcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2xvd0hlYWx0aFxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IHsgSHVkU2NlbmUsIEhVRF9XSURUSCB9IGZyb20gJy4vc2NlbmVzL2h1ZFNjZW5lJztcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21ldGFTY2VuZSc7XG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZSdcbmltcG9ydCB7IFREU2NlbmVDb25maWcgfSBmcm9tICcuL3NjZW5lcy90ZFNjZW5lQ29uZmlnJztcbmltcG9ydCB7IFRlcnJhaW4gfSBmcm9tICcuL3RlcnJhaW4nO1xuXG5sZXQgbWV0YVNjZW5lID0gbmV3IE1ldGFTY2VuZSgpXG5sZXQgaHVkU2NlbmUgPSBuZXcgSHVkU2NlbmUobWV0YVNjZW5lKTtcblxubGV0IGxldmVscyA9IFtcbiAgbWV0YVNjZW5lLFxuICBodWRTY2VuZSxcbl1cblxuY29uc3QgZ2FtZUNvbmZpZyA9IHtcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHBhcmVudDogJ2NvbnRlbnQnLFxuICB3aWR0aDogVERfU0NFTkVfV0lEVEggKyBIVURfV0lEVEggKiAyLFxuICBoZWlnaHQ6IFREX1NDRU5FX0hFSUdIVCxcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnXG4gIH0sXG4gIHNjZW5lOiBsZXZlbHMsXG4gIHNlZWQ6IFtcIjQyXCJdXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBQTEFZRVJfSEVBTFRIX1JFR0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbmZvIHtcbiAgICBzdGF0aWMgbW9uZXk6IG51bWJlciA9IDU7XG4gICAgc3RhdGljIGhwOiBudW1iZXIgPSAxMDtcbiAgICBzdGF0aWMgdGltZVNjYWxlOiBudW1iZXIgPSAxO1xuICAgIC8vIHN0YXRpYyBSTkcgPSBuZXcgUGhhc2VyLk1hdGguUmFuZG9tRGF0YUdlbmVyYXRvcihbXCI0MlwiXSk7XG4gICAgc3RhdGljIFJORyA9IG5ldyBQaGFzZXIuTWF0aC5SYW5kb21EYXRhR2VuZXJhdG9yKCk7XG5cbiAgICBzdGF0aWMgcmVnZW5Qcm9ncmVzczogbnVtYmVyID0gMDtcblxuICAgIHB1YmxpYyBzdGF0aWMgd2F2ZUhlYWx0aFJlZ2VuKCkge1xuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgKz0gUExBWUVSX0hFQUxUSF9SRUdFTjtcbiAgICAgICAgbGV0IHJlc3RvcmVkID0gTWF0aC5mbG9vcihQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MpO1xuICAgICAgICBQbGF5ZXJJbmZvLmhwICs9IHJlc3RvcmVkO1xuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgLT0gcmVzdG9yZWQ7XG4gICAgfVxufSIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vbWV0YVNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lXG4gICAgY29uc3RydWN0b3IobWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGtleTogXCJnYW1lT3ZlclNjZW5lXCIsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSg1MTIsIDI1NiwgMTAyNCwgNTEyLCAweGFhNDQ0NCwgMC41KTtcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKDUxMiwgMjU2LTQwLCA1MTItMTI4LCAyNTYtNjQsIDB4NDQ0NDQ0KTtcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDE2MCwgXCJZT1UgRElFRFwiLCB7Zm9udFNpemU6ICczMHB4IGJvbGQnLCBjb2xvcjogXCJyZWRcIn0pLnNldE9yaWdpbigwLjUpO1xuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMTkwLCBgTGFzdCB3YXZlIHdpdG5lc3NlZDogJHt0aGlzLm1ldGFTY2VuZS5nZXRSb290VERTY2VuZSgpLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlfWApLnNldE9yaWdpbigwLjUpO1xuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMjEwLCBgV2VhbHRoIHRha2VuIHRvIHRoZSBncmF2ZTogJHtQbGF5ZXJJbmZvLm1vbmV5fWApLnNldE9yaWdpbigwLjUpO1xuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMjMwLCBgSW52YWRlcnMgdmFucXVpc2hlZDogJHt0aGlzLm1ldGFTY2VuZS5lbmVtaWVzU2xhaW59YCkuc2V0T3JpZ2luKDAuNSk7XG5cbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDI4MCwgYENMSUNLIFRPIERBUkUgQUdBSU5gKS5zZXRJbnRlcmFjdGl2ZSgpLnNldE9yaWdpbigwLjUpLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgfVxuXG4gICAgY3VycmVudFRpbWUgPSAwO1xuICAgIHJlbG9hZGVkID0gZmFsc2U7XG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFcbiAgICB9XG5cblxuXG59IiwiaW1wb3J0IHsgVG93ZXJDb25maWcsIFRPV0VSX0NPTkZJR1MsIFJBTkdFX0lORElDQVRPUl9DT05GSUcsIEVuZW15Q29uZmlnLCBXYXZlQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4uL2VuZW15XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcbmltcG9ydCB7IE1BWF9IRUlHSFQsIE1BWF9XSURUSCwgVGVycmFpbiwgVElMRV9TSVpFIH0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4uL3Rvd2Vyc1wiO1xuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vbWV0YVNjZW5lXCI7XG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xuXG5jb25zdCBIVURfQkdfQ09MT1IgPSAweGZmOGE2ZCAgLy8weGZmYWE3ZFxuZXhwb3J0IGNvbnN0IEhVRF9XSURUSCA9IFRJTEVfU0laRSAqIDNcblxuZXhwb3J0IGNsYXNzIEh1ZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIG1vbmV5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICB3YXZlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBocFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgaHBSZWRuZXNzOiBudW1iZXIgLy8gMCB0byAxXG4gICAgZGVwdGhUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGdvVXBUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGRlc2NyaXB0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcblxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lO1xuICAgIGJhY2tUb1Jvb3RTY2VuZUJ1dHRvbjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgYnV5VG93ZXJJY29uczogQnV5VG93ZXJJY29uW11cblxuICAgIGxhc3RBY3RpdmVTY2VuZTogVERTY2VuZVxuICAgIHBhcmVudFNjZW5lc0ltYWdlczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlW11cbiAgICBzbG93U3BlZWRUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcbiAgICBmYXN0U3BlZWRUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICAgICAga2V5OiBcImh1ZFNjZW5lXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubWV0YVNjZW5lID0gbWV0YVNjZW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIGxldCB3ID0gSFVEX1dJRFRIXG4gICAgICAgIGxldCBoID0gVElMRV9TSVpFICogTUFYX0hFSUdIVFxuICAgICAgICBjb25zdCB4TGVmdCA9IHcgLyAyXG4gICAgICAgIGNvbnN0IHhSaWdodCA9IHcgKyBURF9TQ0VORV9XSURUSCArIHcgLyAyXG5cbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKHcgLyAyLCBoIC8gMiwgdywgaCwgSFVEX0JHX0NPTE9SKVxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoXG4gICAgICAgICAgICB4UmlnaHQsIGggLyAyLFxuICAgICAgICAgICAgdywgaCxcbiAgICAgICAgICAgIEhVRF9CR19DT0xPUixcbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMubW9uZXlUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgMjAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcbiAgICAgICAgdGhpcy5tb25leVRleHQuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5ocFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0MCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLmhwVGV4dC5zZXRPcmlnaW4oMC41KVxuICAgICAgICB0aGlzLmhwUmVkbmVzcyA9IDBcblxuICAgICAgICB0aGlzLndhdmVUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNjAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcbiAgICAgICAgdGhpcy53YXZlVGV4dC5zZXRPcmlnaW4oMC41KVxuXG4gICAgICAgIHRoaXMuZGVwdGhUZXh0ID0gdGhpcy5hZGQudGV4dCh4UmlnaHQsIDIwLCBcIkRlcHRoOiBcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xuICAgICAgICB0aGlzLmRlcHRoVGV4dC5zZXRPcmlnaW4oMC41KVxuXG4gICAgICAgIHRoaXMuZ29VcFRleHQgPSB0aGlzLmFkZC50ZXh0KHhSaWdodCwgNTAsIFwiR28gdXAgdG86XCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRPcmlnaW4oMC41KVxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUoZmFsc2UpXG5cbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KDUsIDMwMCwgXCJcIiwgeyBmb250U2l6ZTogJzEwcHQnIH0pO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRXb3JkV3JhcFdpZHRoKEhVRF9XSURUSCAtIDEwLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy5idXlUb3dlckljb25zID0gW107XG4gICAgICAgIGxldCB0b3dlclR5cGVJbmRleCA9IDA7XG4gICAgICAgIGZvciAobGV0IHRvd2VyQ29uZmlnIG9mIFRPV0VSX0NPTkZJR1MpIHtcbiAgICAgICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucy5wdXNoKG5ldyBCdXlUb3dlckljb24odGhpcywgdyAvIDIsIDExMCArIDcwICogdG93ZXJUeXBlSW5kZXgsIHRvd2VyQ29uZmlnKSlcbiAgICAgICAgICAgIHRvd2VyVHlwZUluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWQgPSAzXG4gICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQ1MCwgXCI+U2xvdzxcIiwge1xuICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQ3NSwgXCJGYXN0XCIsIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KVxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KVxuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgUGxheWVySW5mby50aW1lU2NhbGUgPSAxLCBudWxsXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIj5TbG93PFwiKVxuICAgICAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldFRleHQoXCJGYXN0XCIpXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnRpbWVTY2FsZSA9IDQsIG51bGxcbiAgICAgICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dC5zZXRUZXh0KFwiU2xvd1wiKVxuICAgICAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldFRleHQoXCI+RmFzdDxcIilcbiAgICAgICAgfSlcblxuXG4gICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcbiAgICAgICAgdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXMgPSBbXVxuICAgIH1cblxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwXG4gICAgcHVibGljIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBpZiAodGhpcy5tZXRhU2NlbmUuaXNHYW1lT3Zlcil7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xuICAgICAgICB0aGlzLmxhc3RUaW1lICs9IGRlbHRhO1xuXG4gICAgICAgIHRoaXMubW9uZXlUZXh0LnNldFRleHQoJ01vbmV5OiAnICsgUGxheWVySW5mby5tb25leSlcblxuICAgICAgICBjb25zdCBjdXJyZW50V2F2ZSA9IHRoaXMubWV0YVNjZW5lLmdldFJvb3RURFNjZW5lKCkud2F2ZU1hbmFnZXIuY3VycmVudFdhdmVcbiAgICAgICAgdGhpcy53YXZlVGV4dC5zZXRUZXh0KGBXYXZlOiAke2N1cnJlbnRXYXZlfWApXG5cbiAgICAgICAgdGhpcy5ocFRleHQuc2V0VGV4dCgnSFA6ICcgKyBQbGF5ZXJJbmZvLmhwKVxuXG4gICAgICAgIHRoaXMuaHBUZXh0LnNldENvbG9yKFBoYXNlci5EaXNwbGF5LkNvbG9yLlJHQlRvU3RyaW5nKFxuICAgICAgICAgICAgMjU1LCAyNTUgKiAoMSAtIHRoaXMuaHBSZWRuZXNzKSwgMjU1ICogKDEgLSB0aGlzLmhwUmVkbmVzcylcbiAgICAgICAgKSlcbiAgICAgICAgY29uc3Qgc2Vjc1RvV2hpdGUgPSAwLjVcbiAgICAgICAgdGhpcy5ocFJlZG5lc3MgPSBNYXRoLm1heCgwLCB0aGlzLmhwUmVkbmVzcyAtIGRlbHRhIC8gMTAwMCAvIHNlY3NUb1doaXRlKVxuXG4gICAgICAgIHRoaXMudXBkYXRlSW5mb0Jhc2VkT25BY3RpdmVTY2VuZSgpO1xuXG4gICAgICAgIGZvciAoY29uc3QgaWNvbiBvZiB0aGlzLmJ1eVRvd2VySWNvbnMpIHtcbiAgICAgICAgICAgIGljb24udXBkYXRlKHRoaXMubGFzdFRpbWUsIGRlbHRhKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFBsYXllckluZm8uaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuZ2FtZU92ZXIoKVxuICAgICAgICB9XG5cblxuICAgIH1cblxuICAgIHVwZGF0ZUluZm9CYXNlZE9uQWN0aXZlU2NlbmUoKSB7XG4gICAgICAgIGxldCBhY3RpdmVTY2VuZSA9IHRoaXMubWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKCk7XG4gICAgICAgIGlmICghYWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChhY3RpdmVTY2VuZSA9PSB0aGlzLmxhc3RBY3RpdmVTY2VuZSkgeyByZXR1cm47IH1cblxuICAgICAgICB0aGlzLmxhc3RBY3RpdmVTY2VuZSA9IGFjdGl2ZVNjZW5lO1xuICAgICAgICB0aGlzLmRlcHRoVGV4dC5zZXRUZXh0KGBEZXB0aDogJHthY3RpdmVTY2VuZS5zY2VuZUxldmVsfWApXG5cbiAgICAgICAgY29uc3QgcGFyZW50U2NlbmVzID0gdGhpcy5tZXRhU2NlbmUuZ2V0UGFyZW50U2NlbmVzVG9Sb290KClcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXNbaV07XG4gICAgICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0VmlzaWJsZShwYXJlbnRTY2VuZXMubGVuZ3RoID4gMClcblxuICAgICAgICBmb3IgKGxldCBpID0gcGFyZW50U2NlbmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgc2NlbmVJbmRleCA9IChwYXJlbnRTY2VuZXMubGVuZ3RoIC0gMSkgLSBpO1xuICAgICAgICAgICAgbGV0IHNjYWxlID0gMC4xXG4gICAgICAgICAgICBjb25zdCBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCA9IDc7XG4gICAgICAgICAgICBpZiAocGFyZW50U2NlbmVzLmxlbmd0aCA+IG1heEltYWdlc05vcm1hbFNjYWxlRml0KSB7XG4gICAgICAgICAgICAgICAgc2NhbGUgLz0gKChwYXJlbnRTY2VuZXMubGVuZ3RoIC8gbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQpICogMS4wMjIpIC8vIE5PVEU6IERyaWZ0cywgaGVuY2UgcmUtc2NhbGUgYnkgdGhpcyBtYWdpYyBudW1iZXIsIGlkayB3aHk7IG5vIHRpbWUgdG8gZmlndXJlIG91dFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbmV3QnV0dG9uID0gdGhpcy5hZGQuaW1hZ2UoXG4gICAgICAgICAgICAgICAgVERfU0NFTkVfV0lEVEggKyBIVURfV0lEVEggKiAxLjUsXG4gICAgICAgICAgICAgICAgMTAwICsgc2NlbmVJbmRleCAqIHNjYWxlICogVERfU0NFTkVfSEVJR0hUICogMS4yLFxuICAgICAgICAgICAgICAgIGBzbmFwLSR7cGFyZW50U2NlbmVzW2ldLnNjZW5lLmtleX1gXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWCA9IHNjYWxlXG4gICAgICAgICAgICBuZXdCdXR0b24uc2NhbGVZID0gc2NhbGVcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICAgICAgbmV3QnV0dG9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUocGFyZW50U2NlbmVzW2ldLnNjZW5lLmtleSwgZmFsc2UpLCB0aGlzLm1ldGFTY2VuZSlcbiAgICAgICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzLnB1c2goXG4gICAgICAgICAgICAgICAgbmV3QnV0dG9uXG4gICAgICAgICAgICApXG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uVG93ZXIoY29uZmlnOiBUb3dlckNvbmZpZywgdG93ZXI6IFRvd2VyID0gbnVsbCkge1xuICAgICAgICBsZXQgbGV2ZWwgPSAxXG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIlxuXG4gICAgICAgIGlmICh0b3dlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGV4dCA9IGAke2NvbmZpZy5uYW1lfTogJHtjb25maWcuZGVzY3JpcHRpb259XFxuYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IGBMZXZlbCAke3Rvd2VyLmxldmVsfSAke2NvbmZpZy5uYW1lfSB0b3dlci5cXG5gXG4gICAgICAgICAgICBsZXZlbCA9IHRvd2VyLmxldmVsXG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0ICs9IGBEYW1hZ2U6ICR7Y29uZmlnLmRhbWFnZShsZXZlbCl9LlxcbmBcbiAgICAgICAgdGV4dCArPSBgRmlyZSByYXRlOiAke2NvbmZpZy5maXJlcmF0ZShsZXZlbCkvMTAwMH1zLlxcbmBcbiAgICAgICAgdGV4dCArPSBgUmFuZ2U6ICR7Y29uZmlnLnJhbmdlKGxldmVsKX0uXFxuYFxuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFRleHQodGV4dClcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbkVuZW15KGVuZW15OiBFbmVteUJhc2UpIHtcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiXG4gICAgICAgIGlmIChlbmVteSkge1xuICAgICAgICAgICAgbGV0IHdhdmU6IGludGVnZXI7XG4gICAgICAgICAgICBpZih0aGlzLm1ldGFTY2VuZS5hY3RpdmVTY2VuZS5zY2VuZUxldmVsID09PSAwKVxuICAgICAgICAgICAgICAgIHdhdmUgPSBlbmVteS5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB3YXZlID0gV2F2ZUNvbmZpZy5sZXZlbFRvV2F2ZSh0aGlzLm1ldGFTY2VuZS5hY3RpdmVTY2VuZS5nZXRUb3dlclBhcmVudCgpLmxldmVsKTtcblxuICAgICAgICAgICAgdGV4dCArPSBgJHtlbmVteS5zdGF0cy5kaXNwbGF5TmFtZX1cXG5gO1xuICAgICAgICAgICAgdGV4dCArPSBgSGVhbHRoOiAke2VuZW15LmhwfS8ke2VuZW15LnN0YXRzLmhwKHdhdmUpfVxcbmA7XG4gICAgICAgICAgICB0ZXh0ICs9IGBBcm1vdXI6ICR7ZW5lbXkuc3RhdHMuYXJtb3VyKHdhdmUpfVxcbmA7XG4gICAgICAgICAgICB0ZXh0ICs9IGBTcGVlZDogJHtlbmVteS5zcGVlZCAqIDYwMDAwfVxcbmA7XG4gICAgICAgICAgICB0ZXh0ICs9IGBMb290OiAke2VuZW15LnN0YXRzLm1vbmV5fVxcbmA7XG4gICAgICAgICAgICBpZihlbmVteS5zdGF0cy5ibHVyYilcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGBcXG4ke2VuZW15LnN0YXRzLmJsdXJifVxcbmA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0VGV4dCh0ZXh0KVxuICAgIH1cbn1cblxuY2xhc3MgQnV5VG93ZXJJY29uIHtcbiAgICB0b3dlck5hbWU6IHN0cmluZ1xuICAgIHRvd2VyQ29uZmlnOiBUb3dlckNvbmZpZ1xuXG4gICAgc3ByaXRlQ29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyXG4gICAgcHJpY2VUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGh1ZFNjZW5lOiBIdWRTY2VuZVxuXG4gICAgb3JpZ1g6IG51bWJlclxuICAgIG9yaWdZOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKGh1ZFNjZW5lOiBIdWRTY2VuZSwgeCwgeSwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuaHVkU2NlbmUgPSBodWRTY2VuZVxuICAgICAgICB0aGlzLm9yaWdYID0geFxuICAgICAgICB0aGlzLm9yaWdZID0geVxuICAgICAgICB0aGlzLnRvd2VyTmFtZSA9IGNvbmZpZy5uYW1lXG4gICAgICAgIHRoaXMudG93ZXJDb25maWcgPSBjb25maWdcblxuICAgICAgICBsZXQgdG93ZXJCYXNlID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJiYXNlcycsIGNvbmZpZy5zcHJpdGVCYXNlKTtcbiAgICAgICAgdG93ZXJCYXNlLnNldFRpbnQoY29uZmlnLnRpbnRCYXNlKTtcbiAgICAgICAgbGV0IHRvd2VyTWlkID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJtaWRzJywgY29uZmlnLnNwcml0ZU1pZCk7XG4gICAgICAgIHRvd2VyTWlkLnNldFRpbnQoY29uZmlnLnRpbnRNaWQpO1xuICAgICAgICBsZXQgdG93ZXJUb3AgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcnRvcHMnLCBjb25maWcuc3ByaXRlVG9wKTtcbiAgICAgICAgdG93ZXJUb3Auc2V0VGludChjb25maWcudGludFRvcCk7XG5cbiAgICAgICAgbGV0IHRvd2VyUmFuZ2UgPSBodWRTY2VuZS5hZGQuY2lyY2xlKFxuICAgICAgICAgICAgMCwgMCwgY29uZmlnLnJhbmdlKDEpLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXG4gICAgICAgICk7XG4gICAgICAgIHRvd2VyUmFuZ2Uuc2V0U3Ryb2tlU3R5bGUoXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VXaWR0aCxcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91clxuICAgICAgICApO1xuICAgICAgICB0b3dlclJhbmdlLnNldFZpc2libGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzcHJpdGVzID0gW1xuICAgICAgICAgICAgdG93ZXJCYXNlLFxuICAgICAgICAgICAgdG93ZXJNaWQsXG4gICAgICAgICAgICB0b3dlclRvcCxcbiAgICAgICAgICAgIHRvd2VyUmFuZ2UsXG4gICAgICAgIF1cbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIgPSBodWRTY2VuZS5hZGQuY29udGFpbmVyKHgsIHksIHNwcml0ZXMpXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLmdldEFsbCgpXG5cbiAgICAgICAgY29uc3QgcGFkID0gM1xuICAgICAgICB0aGlzLnByaWNlVGV4dCA9IGh1ZFNjZW5lLmFkZC50ZXh0KFxuICAgICAgICAgICAgeCArIDE1LCB5LCBcIlwiICsgdGhpcy50b3dlckNvbmZpZy5wcmljZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldFNpemUoVElMRV9TSVpFLCBUSUxFX1NJWkUpO1xuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSgpXG4gICAgICAgIC8vIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gY29uc29sZS5sb2coXCJmb29iYXJcIiksIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5zcHJpdGVDb250YWluZXIpXG5cbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5odWRTY2VuZS5zZXREZXNjcmlwdGlvblRvd2VyKGNvbmZpZylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaHVkU2NlbmUuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgICAgICBnYW1lT2JqZWN0Lmxpc3QuZm9yRWFjaCgoc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSA9PiB7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkge1xuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZHJhZ1k7XG5cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnZW5kJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICAvLyBUaGlzIG1ha2VzIHJhbmdlIGluZGljYXRvciB2aXNpYmxlXG4gICAgICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFszXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUpLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5odWRTY2VuZS5tZXRhU2NlbmUuYnVpbGRTb3VuZC5wbGF5KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNjZW5lID0gaHVkU2NlbmUubWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKClcbiAgICAgICAgICAgIHNjZW5lLnRvd2VyTWFuYWdlci5wbGFjZVRvd2VyKHBvaW50ZXIsIHRoaXMudG93ZXJOYW1lKTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdC54ID0gdGhpcy5vcmlnWFxuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gdGhpcy5vcmlnWVxuICAgICAgICB9LCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXNldFRpbnQoKSB7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzBdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50TWlkKTtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRUb3ApO1xuICAgIH1cblxuICAgIHNldFNob3BJY29uVGludCh0aW50OiBudW1iZXIpIHtcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMF0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aW50ICYgdGhpcy50b3dlckNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzJdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XG4gICAgfVxuXG4gICAgdXBkYXRlU2hvcCgpIHtcbiAgICAgICAgLy8gVW5jb21tZW50IHRvIHByZXZlbnQgbmVnYXRpdmUgbW9uZXk6XG4gICAgICAgIHRoaXMuaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyLCBQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpXG5cbiAgICAgICAgaWYgKFBsYXllckluZm8ubW9uZXkgPj0gdGhpcy50b3dlckNvbmZpZy5wcmljZSkge1xuICAgICAgICAgICAgdGhpcy5wcmljZVRleHQuc2V0VGludCgweDAwZmYwMCk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VGludCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wcmljZVRleHQuc2V0VGludCgweGZmMDAwMCk7XG4gICAgICAgICAgICB0aGlzLnNldFNob3BJY29uVGludCgweDk5NTU1NSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbGRNb25leTogaW50ZWdlciA9IDBcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcbiAgICAgICAgaWYgKFBsYXllckluZm8ubW9uZXkgIT0gdGhpcy5vbGRNb25leSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVTaG9wKCk7XG4gICAgICAgICAgICB0aGlzLm9sZE1vbmV5ID0gUGxheWVySW5mby5tb25leTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcbmltcG9ydCB7VGVycmFpbn0gZnJvbSBcIi4uL3RlcnJhaW5cIlxuaW1wb3J0IHsgR2FtZU92ZXJTY2VuZSB9IGZyb20gXCIuL2dhbWVPdmVyU2NlbmVcIjtcbmltcG9ydCB7U0NFTkVfVFJBTlNJVElPTl9NUywgVERTY2VuZX0gZnJvbSBcIi4vdGRTY2VuZVwiO1xuaW1wb3J0IHtURFNjZW5lQ29uZmlnfSBmcm9tIFwiLi90ZFNjZW5lQ29uZmlnXCJcblxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XG4gICAgYWN0aXZlOiB0cnVlLFxuICAgIHZpc2libGU6IHRydWUsXG4gICAga2V5OiAnbWV0YVNjZW5lJyxcbn07XG5cbmV4cG9ydCBjbGFzcyBNZXRhU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xuXG4gICAgcHVibGljIHNjZW5lczogVERTY2VuZVtdXG4gICAgcHVibGljIGFjdGl2ZVNjZW5lOiBURFNjZW5lXG4gICAgbWFpblNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuXG4gICAgLy8gV2h5IGFyZSB0aGVzZSBzb3VuZHMgaGVyZT8gQmVjYXVzZSB3ZSdyZSBvdXQgb2YgdGltZVxuICAgIGJ1aWxkU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG4gICAgZGFtYWdlU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG4gICAgc2hvb3RTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcbiAgICBtdWx0aXNob3RTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcbiAgICBsZXZlbHVwU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG5cbiAgICBlbmVtaWVzU2xhaW46IGludGVnZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKVxuXG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSB0aGlzLmFkZFNjZW5lKCk7XG4gICAgICAgIHRoaXMuc2NlbmVzWzBdLnNjZW5lLnNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJodWRTY2VuZVwiKTtcblxuICAgICAgICB0aGlzLm1haW5Tb3VuZCA9IHRoaXMuc291bmQuYWRkKFwibWFpbl9tdXNpY1wiLCB7XCJsb29wXCI6IHRydWUsIFwidm9sdW1lXCI6IDAuMDd9KTtcbiAgICAgICAgdGhpcy5tYWluU291bmQucGxheSgpO1xuXG4gICAgICAgIHRoaXMuYnVpbGRTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdidWlsZF9zb3VuZCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDF9KTtcbiAgICAgICAgdGhpcy5kYW1hZ2VTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdkYW1hZ2Vfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjE1fSk7XG4gICAgICAgIHRoaXMuc2hvb3RTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdzaG9vdF9zb3VuZCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDAuMDN9KTtcbiAgICAgICAgdGhpcy5tdWx0aXNob3RTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdtdWx0aXNob3Rfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjAzfSk7XG4gICAgICAgIHRoaXMubGV2ZWx1cFNvdW5kID0gdGhpcy5zb3VuZC5hZGQoJ2xldmVsdXBfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjAyfSk7XG4gICAgfVxuXG4gIC8vIENyZWF0ZXMgbmV3IFNjZW5lLCBlbmFibGVzIGl0LCBhbmQgc2V0cyBpdCBpbnZpc2libGVcbiAgICBwdWJsaWMgYWRkU2NlbmUocGFyZW50U2NlbmVLZXk/OiBzdHJpbmcpOiBURFNjZW5lIHtcbiAgICAgICAgbGV0IHBhcmVudFNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHBhcmVudFNjZW5lS2V5KVxuICAgICAgICBsZXQgc2NlbmVMZXZlbCA9IChwYXJlbnRTY2VuZT8uc2NlbmVMZXZlbCA/PyAtMSkgKyAxO1xuXG4gICAgICAgIGxldCBzY2VuZUluZGV4ID0gdGhpcy5zY2VuZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY2VuZUtleSA9IGB0ZFNjZW5lJHtzY2VuZUluZGV4fWBcblxuICAgICAgICBsZXQgbmV3U2NlbmUgPSBuZXcgVERTY2VuZShcbiAgICAgICAgICAgIG5ldyBURFNjZW5lQ29uZmlnKG5ldyBUZXJyYWluKDEwLCA4KSwgc2NlbmVMZXZlbCwgcGFyZW50U2NlbmVLZXksIHNjZW5lS2V5KSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoXG4gICAgICAgICAgICBzY2VuZUtleSxcbiAgICAgICAgICAgIG5ld1NjZW5lLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKG5ld1NjZW5lKVxuICAgICAgICBuZXdTY2VuZS5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2NlbmUpIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCh0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcblxuICAgICAgICByZXR1cm4gbmV3U2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFNjZW5lQnlLZXkoa2V5Pzogc3RyaW5nKTogVERTY2VuZSB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmdldChrZXkpIGFzIFREU2NlbmVcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gbWFrZXMgY3VycmVudCBzY2VuZSBpbnZpc2libGUsIG1ha2VzIG5ldyBzY2VuZSB2aXNpYmxlOyBkb2Vzbid0IGNoYW5nZSBhY3Rpdm5lc3NcbiAgICBwdWJsaWMgc3dpdGNoVG9TY2VuZShuZXdTY2VuZUtleTogc3RyaW5nLCBnb2luZ0luc2lkZTogYm9vbGVhbiwgaSA9IDAsIGogPSAwKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNldElzRm9yZWdyb3VuZChmYWxzZSwgZ29pbmdJbnNpZGUsIGksIGopO1xuICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkobmV3U2NlbmVLZXkpXG5cbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgU3dpdGNoaW5nIGZyb20gJHt0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleX0gKHBhcmVudCAke3RoaXMuYWN0aXZlU2NlbmUuc2NlbmVQYXJlbnRLZXl9KSB0b2BcbiAgICAgICAgICAgICsgYCAke25ld1NjZW5lLnNjZW5lLmtleX0gKHBhcmVudCAke25ld1NjZW5lLnNjZW5lUGFyZW50S2V5fSlgXG4gICAgICAgIClcblxuICAgICAgICBuZXdTY2VuZS50aW1lLmFkZEV2ZW50KHtcbiAgICAgICAgICAgIGRlbGF5OiBTQ0VORV9UUkFOU0lUSU9OX01TLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNjZW5lLnNldFZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSBuZXdTY2VuZVxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldElzRm9yZWdyb3VuZCh0cnVlLCBnb2luZ0luc2lkZSwgaSwgaik7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKG5ld1NjZW5lS2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gMS4wNTk0NjMwOTQzNiB+IDJeKDEvMTIpLCBpLmUuIG9uZSBzZW1pdG9uZVxuICAgICAgICB0aGlzLnNvdW5kLnNldFJhdGUoMSAvIChNYXRoLnBvdygxLjA1OTQ2MzA5NDM2LCBuZXdTY2VuZS5zY2VuZUxldmVsKSkpXG4gICAgfVxuXG4gICAgcHVibGljIGlzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICBwdWJsaWMgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKXtcbiAgICAgICAgICAgIHRoaXMuc291bmQuc2V0UmF0ZSgxIC8gKE1hdGgucG93KDEuMDU5NDYzMDk0MzYsIDE1KSkpXG5cbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgICAgICBsZXQgZ2FtZU92ZXJTY2VuZSA9IHRoaXMuc2NlbmUuYWRkKFwiZ2FtZU92ZXJTY2VuZVwiLCBuZXcgR2FtZU92ZXJTY2VuZSh0aGlzKSlcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoZ2FtZU92ZXJTY2VuZSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLnBhdXNlKClcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHByZWxvYWQoKSB7XG4gICAgICAgIC8vIGxvYWQgdGhlIGdhbWUgYXNzZXRzXG4gICAgICAgIHRoaXMubG9hZC5zZXRCYXNlVVJMKCdhc3NldHMvJylcblxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3dlYWtFbmVteScsICdlbmVteS5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Zhc3RFbmVteScsICdlbmVteV9mYXN0LnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYXJtb3VyZWRFbmVteScsICdlbmVteV9hcm1vcmVkLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJCaWdFbmVteScsICdlbmVteV9zcGxpdF9iaWcucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcGxpdHRlclNtYWxsRW5lbXknLCAnZW5lbXlfc3BsaXRfc21hbGwucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmYXRFbmVteScsICdlbmVteV9jaG9uay5wbmcnLCB7ZnJhbWVXaWR0aDogNTYsIGZyYW1lSGVpZ2h0OiA1Nn0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyRmF0RW5lbXknLCAnZW5lbXlfc3BsaXRfY2hvbmsucG5nJywge2ZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogNTZ9KTtcblxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdidWxsZXQucG5nJyk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndGlsZXNldCcsXG4gICAgICAgICAgICAndGlsZXNldC5wbmcnLFxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJ0b3BzJyxcbiAgICAgICAgICAgICd0b3dlcnRvcC5wbmcnLFxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcm1pZHMnLFxuICAgICAgICAgICAgJ3Rvd2VybWlkLnBuZycsXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VyYmFzZXMnLFxuICAgICAgICAgICAgJ3Rvd2VyYmFzZS5wbmcnLFxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdwYXJ0aWNsZV9yZWQnLCAncGFydGljbGVfcmVkLnBuZycpO1xuXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9ydGFsRnJvbScsICdwb3J0YWxfZnJvbS5wbmcnLCB7ZnJhbWVXaWR0aDogNDAsIGZyYW1lSGVpZ2h0OiA0MH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BvcnRhbFRvJywgJ3BvcnRhbF90by5wbmcnLCB7ZnJhbWVXaWR0aDogNDAsIGZyYW1lSGVpZ2h0OiA0MH0pO1xuXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbyhcIm1haW5fbXVzaWNcIiwgXCJnYW1lamFtX0xENDgub2dnXCIpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2J1aWxkX3NvdW5kJywgJ2J1aWxkLndhdicpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2RhbWFnZV9zb3VuZCcsICdkYW1hZ2Uud2F2Jyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnc2hvb3Rfc291bmQnLCAndHVycmV0c2hvdC53YXYnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdtdWx0aXNob3Rfc291bmQnLCAnbXVsdGlzaG90LndhdicpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2xldmVsdXBfc291bmQnLCAnbGV2ZWx1cC53YXYnKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBbmltYXRpb25zKCkgeyAvLyBUT0RPOiBNYWtlIHRoaXMgbm90IGR1bWIgYW5kIHVnbHlcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnd2Vha0VuZW15X3dhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCd3ZWFrRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2Zhc3RFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZmFzdEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdmYXRFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZmF0RW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogOX0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3NwbGl0dGVyRmF0RW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NwbGl0dGVyRmF0RW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogOX0pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ2FybW91cmVkRW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2FybW91cmVkRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3NwbGl0dGVyQmlnRW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NwbGl0dGVyQmlnRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3NwbGl0dGVyU21hbGxFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc3BsaXR0ZXJTbWFsbEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdwb3J0YWxGcm9tX3NwaW4nLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwb3J0YWxGcm9tJywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdwb3J0YWxUb19zcGluJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncG9ydGFsVG8nLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3Rvd2VyTWlkc19zcGluJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygndG93ZXJtaWRzJywge3N0YXJ0OiAwLCBlbmQ6IDF9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogNSxcbiAgICAgICAgICAgIHJlcGVhdDogLTFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QWN0aXZlU2NlbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVNjZW5lO1xuICAgIH1cblxuICAgIGdldFBhcmVudFNjZW5lc1RvUm9vdCgpIHtcbiAgICAgICAgbGV0IHBhcmVudFNjZW5lczogVERTY2VuZVtdID0gW11cbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRBY3RpdmVTY2VuZSgpO1xuXG4gICAgICAgIHdoaWxlIChzY2VuZT8uc2NlbmVQYXJlbnRLZXkpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFNjZW5lQnlLZXkoc2NlbmUuc2NlbmVQYXJlbnRLZXkpXG4gICAgICAgICAgICBwYXJlbnRTY2VuZXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgc2NlbmUgPSBwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50U2NlbmVzO1xuICAgIH1cblxuICAgIGdldFJvb3RURFNjZW5lKCkge1xuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldEFjdGl2ZVNjZW5lKCk7XG5cbiAgICAgICAgd2hpbGUgKHNjZW5lPy5zY2VuZVBhcmVudEtleSkge1xuICAgICAgICAgICAgc2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkoc2NlbmUuc2NlbmVQYXJlbnRLZXkpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2NlbmVcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZW5lbSBmcm9tIFwiLi4vZW5lbXlcIjtcbmltcG9ydCB7VG93ZXJ9IGZyb20gXCIuLi90b3dlcnNcIjtcbmltcG9ydCB7QnVsbGV0fSBmcm9tIFwiLi4vYnVsbGV0XCI7XG5pbXBvcnQge1dhdmVNYW5hZ2VyfSBmcm9tIFwiLi4vd2F2ZXNcIlxuaW1wb3J0IHtUb3dlck1hbmFnZXJ9IGZyb20gXCIuLi90b3dlck1hbmFnZXJcIlxuaW1wb3J0IHtNQVhfSEVJR0hULCBNQVhfV0lEVEgsIFRlcnJhaW4sIFRJTEVfU0laRX0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcbmltcG9ydCB7VERTY2VuZUNvbmZpZ30gZnJvbSBcIi4vdGRTY2VuZUNvbmZpZ1wiO1xuaW1wb3J0IHtNZXRhU2NlbmV9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xuaW1wb3J0IHtIVURfV0lEVEh9IGZyb20gXCIuL2h1ZFNjZW5lXCI7XG5pbXBvcnQge1VVSUR9IGZyb20gXCIuLi91dGlscy9ndWlkXCI7XG5pbXBvcnQge0hlYWx0aEJhcn0gZnJvbSBcIi4uL2hlYWx0aEJhclwiO1xuaW1wb3J0IHtQbGF5ZXJJbmZvfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHtFTkVNWV9DT05GSUdTfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBTQ0VORV9UUkFOU0lUSU9OX01TID0gNTAwXG5leHBvcnQgY29uc3QgVERfU0NFTkVfV0lEVEggPSBNQVhfV0lEVEggKiBUSUxFX1NJWkVcbmV4cG9ydCBjb25zdCBURF9TQ0VORV9IRUlHSFQgPSBNQVhfSEVJR0hUICogVElMRV9TSVpFXG5cbmV4cG9ydCBjbGFzcyBURFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcbiAgICBwYXRoOiBQaGFzZXIuQ3VydmVzLlBhdGhcbiAgICBhbGxFbmVtaWVzOiB7IFtrZXk6IHN0cmluZ106IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCB9ID0ge31cbiAgICBuZXh0RW5lbXk6IG51bWJlciA9IDBcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZVxuXG4gICAgdG93ZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXBcbiAgICBidWxsZXRzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXBcblxuICAgIHRlcnJhaW46IFRlcnJhaW5cblxuICAgIHdhdmVNYW5hZ2VyOiBXYXZlTWFuYWdlclxuICAgIHRvd2VyTWFuYWdlcjogVG93ZXJNYW5hZ2VyXG5cbiAgICBzY2VuZVBhcmVudEtleTogc3RyaW5nO1xuICAgIHNjZW5lTGV2ZWw6IG51bWJlcjsgLy8gTGV2ZWwgb2YgcmVjdXJzaW9uXG5cbiAgICBwcml2YXRlIHRvd2VyUGFyZW50OiBUb3dlciAgLy8gdG8gd2hhdCB0b3dlciBkb2VzIHRoaXMgc2NlbmUgY29ycmVzcG9uZD8gdW5kZWZpbmVkIGZvciByb290XG4gICAgcHJpdmF0ZSBlbmRIZWFsdGhCYXI6IEhlYWx0aEJhclxuXG4gICAgLy8gaGFwcGVucyB3aGVuIGFuIGVuZW15IHJlYWNoZXMgdGhlIGVuZFxuICAgIGVuZW15RW5kQ2FsbGJhY2s6IChudW1iZXIpID0+IHZvaWRcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogVERTY2VuZUNvbmZpZywgbWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoe1xuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICAgICAga2V5OiBjb25maWcuc2NlbmVLZXksIC8vYHRkU2NlbmUke1VVSUQudXVpZHY0KCl9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50ZXJyYWluID0gY29uZmlnLnRlcnJhaW47XG4gICAgICAgIHRoaXMubWV0YVNjZW5lID0gbWV0YVNjZW5lO1xuXG4gICAgICAgIHRoaXMuc2NlbmVMZXZlbCA9IGNvbmZpZy5zY2VuZUxldmVsO1xuICAgICAgICB0aGlzLnNjZW5lUGFyZW50S2V5ID0gY29uZmlnLnNjZW5lUGFyZW50S2V5O1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XG4gICAgICAgIC8vIHRoaXMgZ3JhcGhpY3MgZWxlbWVudCBpcyBvbmx5IGZvciB2aXN1YWxpemF0aW9uLFxuICAgICAgICAvLyBpdHMgbm90IHJlbGF0ZWQgdG8gb3VyIHBhdGhcbiAgICAgICAgdmFyIGdyYXBoaWNzID0gdGhpcy5hZGQuZ3JhcGhpY3MoKTtcblxuICAgICAgICB0aGlzLnRlcnJhaW4uY3JlYXRlKHRoaXMpXG4gICAgICAgIHRoaXMudGVycmFpbi5kcmF3KGdyYXBoaWNzKVxuXG4gICAgICAgIC8vIHRoZSBwYXRoIGZvciBvdXIgZW5lbWllc1xuICAgICAgICAvLyBwYXJhbWV0ZXJzIGFyZSB0aGUgc3RhcnQgeCBhbmQgeSBvZiBvdXIgcGF0aFxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyID0gbmV3IFdhdmVNYW5hZ2VyKHRoaXMpO1xuICAgICAgICB0aGlzLnRvd2VyTWFuYWdlciA9IG5ldyBUb3dlck1hbmFnZXIodGhpcyk7XG5cbiAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgRU5FTVlfQ09ORklHUykge1xuICAgICAgICAgICAgdGhpcy5hbGxFbmVtaWVzW2VuZW15Lm5hbWVdID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7Y2xhc3NUeXBlOiBlbmVteS5jbGFzcywgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogVG93ZXIsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlfSk7XG5cbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogQnVsbGV0LCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xuICAgICAgICBmb3IgKGxldCBlTmFtZSBpbiB0aGlzLmFsbEVuZW1pZXMpIHtcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmFsbEVuZW1pZXNbZU5hbWVdLCB0aGlzLmJ1bGxldHMsIHRoaXMuZGFtYWdlRW5lbXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53YXZlTWFuYWdlciA9IG5ldyBXYXZlTWFuYWdlcih0aGlzKTtcblxuICAgICAgICBjb25zdCBjYW0gPSB0aGlzLmNhbWVyYXMubWFpblxuICAgICAgICBjYW0uc2Nyb2xsWCA9IC1IVURfV0lEVEhcbiAgICB9XG5cbiAgICAvLyBPbmx5IGZvcmVncm91bmQgc2NlbmUgaGFzIGlucHV0IGVuYWJsZWQgJiBpcyB2aXNpYmxlOyBhbGwgc2NlbmVzIGFyZSBiZWluZyB1cGRhdGVkXG4gICAgcHVibGljIHNldElzRm9yZWdyb3VuZChpc0ZvcmVncm91bmRTY2VuZSwgZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGkgPSBudWxsLCBqID0gbnVsbCkge1xuICAgICAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSBpc0ZvcmVncm91bmRTY2VuZTtcblxuICAgICAgICBpZiAoIWlzRm9yZWdyb3VuZFNjZW5lKSB7XG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoZ29pbmdJbnNpZGUsIGksIGopXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZhZGVJbihnb2luZ0luc2lkZSwgaSwgailcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBmYWRlSW4oZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGksIGopIHtcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ucGFuKHRoaXMudGVycmFpbi53ICogVElMRV9TSVpFIC8gMiwgdGhpcy50ZXJyYWluLmggKiBUSUxFX1NJWkUgLyAyLCAxKVxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5zZXRab29tKChnb2luZ0luc2lkZSA/IDEgLyAzIDogMykpXG5cbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uZmFkZUluKFNDRU5FX1RSQU5TSVRJT05fTVMsIDAsIDAsIDApXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygxLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBmYWRlT3V0KGdvaW5nSW5zaWRlOiBib29sZWFuLCBpLCBqKSB7XG4gICAgICAgIC8vIFRha2UgYSBzY3JlZW5zaG90XG4gICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlci5zbmFwc2hvdEFyZWEoXG4gICAgICAgICAgICAtdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWCxcbiAgICAgICAgICAgIC10aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZLFxuICAgICAgICAgICAgVERfU0NFTkVfV0lEVEgsXG4gICAgICAgICAgICBURF9TQ0VORV9IRUlHSFQsXG4gICAgICAgICAgICAoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwS2V5ID0gYHNuYXAtJHt0aGlzLnNjZW5lLmtleX1gXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXMuZXhpc3RzKHNuYXBLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMucmVtb3ZlKHNuYXBLZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzLmFkZEltYWdlKHNuYXBLZXksIGltYWdlKTtcblxuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2luZzogc2hvdyB0aGUgc2NyZWVuc2hvdFxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KFNDRU5FX1RSQU5TSVRJT05fTVMsIDAsIDAsIDApXG4gICAgICAgIGlmIChnb2luZ0luc2lkZSkge1xuICAgICAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMudGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDMsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5wYW4oeCwgeSwgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygxIC8gMywgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhbWFnZUVuZW15KGVuZW15LCBidWxsZXQpIHtcbiAgICAgICAgLy8gb25seSBpZiBib3RoIGVuZW15IGFuZCBidWxsZXQgYXJlIGFsaXZlXG4gICAgICAgIGlmIChlbmVteS5hY3RpdmUgPT09IHRydWUgJiYgYnVsbGV0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRoZSBidWxsZXQgcmlnaHQgYXdheVxuICAgICAgICAgICAgYnVsbGV0LmhpdCgpXG5cbiAgICAgICAgICAgIC8vIGRlY3JlYXNlIHRoZSBlbmVteSBocCB3aXRoIGJ1bGxldCBkYW1hZ2VcbiAgICAgICAgICAgIGVuZW15LnJlY2VpdmVEYW1hZ2UoYnVsbGV0LmRhbWFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcmFtZU51bWJlciA9IDA7XG5cbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG5cbiAgICAgICAgdGhpcy5mcmFtZU51bWJlcisrO1xuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyLnVwZGF0ZShkZWx0YSlcblxuICAgICAgICBpZiAodGhpcy5mcmFtZU51bWJlciAlIDYwID09IDApIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBVcGRhdGUgdGg6ICR7dGhpcy5zY2VuZS5rZXl9IGU6ICR7dGhpcy5pbnB1dC5lbmFibGVkfSB8IGw6ICR7dGhpcy5zY2VuZUxldmVsfSB8IHA6ICR7dGhpcy5zY2VuZVBhcmVudD8uc2NlbmUua2V5fWApXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5kSGVhbHRoQmFyKSB7XG4gICAgICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5oZWFsdGggPSB0aGlzLnRvd2VyUGFyZW50LmhlYWx0aEJhci5oZWFsdGhcbiAgICAgICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEJ1bGxldCh4LCB5LCBhbmdsZSwgZGFtYWdlLCByYW5nZSwgYnVsbGV0U3BlZWRNb2QpIHtcbiAgICAgICAgbGV0IGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXQoKSBhcyBCdWxsZXQ7XG4gICAgICAgIGlmIChidWxsZXQpIHtcbiAgICAgICAgICAgIGJ1bGxldC5maXJlKHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHJhbmdlLCBidWxsZXRTcGVlZE1vZCwgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0dyaWRQb3MoeCwgeSkge1xuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoKHggKyB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxYKSAvIFRJTEVfU0laRSk7XG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcigoeSArIHRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFkpIC8gVElMRV9TSVpFKTtcbiAgICAgICAgcmV0dXJuIFtpLCBqXVxuICAgIH1cblxuICAgIG9uQ2xpY2socG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgb25jbGljayBvbiBzY2VuZSAke3RoaXMuc2NlbmUua2V5fWApXG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2xpY2tlZCBjb29yZGluYXRlczogJHtpfSAke2p9YClcbiAgICAgICAgbGV0IHBvdGVudGlhbEV4aXN0aW5nVG93ZXIgPSB0aGlzLnRlcnJhaW4udHJ5R2V0RXhpc3RpbmdUb3dlcihpLCBqKTtcbiAgICAgICAgaWYgKHBvdGVudGlhbEV4aXN0aW5nVG93ZXIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dpdGNoaW5nIHRvIGFuIGV4aXN0aW5nIHRvd2VyXCIpXG4gICAgICAgICAgICB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBvdGVudGlhbEV4aXN0aW5nVG93ZXIuZ2V0SW5uZXJUb3dlclNjZW5lS2V5KCksIHRydWUsIGksIGopXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLnRlcnJhaW4ucGF0aFRpbGVzW3RoaXMudGVycmFpbi5wYXRoVGlsZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgaWYgKGkgPT09IGVuZFswXSAmJiBqID09PSBlbmRbMV0gJiYgdGhpcy5zY2VuZVBhcmVudEtleSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2l0Y2hpbmcgdmlhIGVuZFwiKVxuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuc3dpdGNoVG9TY2VuZSh0aGlzLnNjZW5lUGFyZW50S2V5LCBmYWxzZSwgaSwgailcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW5lbXlSZWFjaGVkRW5kKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZW5lbXlFbmRDYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgfVxuXG4gICAgc2V0VG93ZXJQYXJlbnQocGFyZW50OiBUb3dlcikge1xuICAgICAgICB0aGlzLnRvd2VyUGFyZW50ID0gcGFyZW50XG4gICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0aGlzKVxuXG4gICAgICAgIGxldCBbaSwgal0gPSB0aGlzLnRlcnJhaW4ucGF0aFRpbGVzW3RoaXMudGVycmFpbi5wYXRoVGlsZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMudGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxuXG4gICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLm1ha2UoeCwgeSwgVElMRV9TSVpFIC0gMTQsIDAuNSlcbiAgICAgICAgdGhpcy5hZGQuY29udGFpbmVyKDAsIDAsIHRoaXMuZW5kSGVhbHRoQmFyKVxuICAgIH1cblxuICAgIGdldFRvd2VyUGFyZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b3dlclBhcmVudFxuICAgIH1cbn0iLCJpbXBvcnQgeyBUZXJyYWluIH0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi90ZFNjZW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBURFNjZW5lQ29uZmlnIHtcbiAgICB0ZXJyYWluOiBUZXJyYWluO1xuICAgIHNjZW5lTGV2ZWw6IG51bWJlcjsgLy8gTGV2ZWwgb2YgcmVjdXJzaW9uIFxuICAgIHNjZW5lUGFyZW50S2V5OiBzdHJpbmc7XG4gICAgc2NlbmVLZXk6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IodGVycmFpbjogVGVycmFpbiwgc2NlbmVMZXZlbDogbnVtYmVyLCBzY2VuZVBhcmVudEtleTogc3RyaW5nLCBzY2VuZUtleTogc3RyaW5nKXtcbiAgICAgICAgdGhpcy50ZXJyYWluID0gdGVycmFpbjtcblxuICAgICAgICB0aGlzLnNjZW5lTGV2ZWwgPSBzY2VuZUxldmVsO1xuICAgICAgICB0aGlzLnNjZW5lUGFyZW50S2V5ID0gc2NlbmVQYXJlbnRLZXk7XG4gICAgICAgIHRoaXMuc2NlbmVLZXkgPSBzY2VuZUtleVxuICAgIH1cbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi90b3dlcnNcIlxuXG5leHBvcnQgZW51bSBUaWxlVHlwZSB7XG4gICAgU3RhcnQsIFBhdGgsIEVuZCwgT2NjdXBpZWQsIEJ1aWxkYWJsZVxufVxuXG5leHBvcnQgY29uc3QgVElMRV9TSVpFID0gNjRcbmV4cG9ydCBjb25zdCBMRVZFTF9PRkZTRVQgPSAxNSAqIFRJTEVfU0laRVxuZXhwb3J0IGNvbnN0IE1BWF9XSURUSCA9IDEwXG5leHBvcnQgY29uc3QgTUFYX0hFSUdIVCA9IDhcblxuY29uc3QgTl9USUxFU0VUX1NQUklURVMgPSAxMCAgLy8gaG93IG1hbnkgc3ByaXRlcyBhcmUgaW4gdGhlIHRpbGVzZXQ/XG5cbnR5cGUgR3JpZFBvcyA9IFtpbnRlZ2VyLCBpbnRlZ2VyXVxuXG5leHBvcnQgY2xhc3MgVGVycmFpbiB7XG4gICAgdG93ZXJzOiBUb3dlcltdW11cbiAgICB0aWxlczogVGlsZVR5cGVbXVtdXG5cbiAgICB0aWxlU3ByaXRlczogaW50ZWdlcltdW11cblxuICAgIHBhdGg6IFBoYXNlci5DdXJ2ZXMuUGF0aCAgLy8gVGhlIFBoYXNlciBwYXRoIChmb3IgZW5lbXkgbW92ZW1lbnQpXG4gICAgcGF0aFRpbGVzOiBHcmlkUG9zW10gIC8vIFRoZSBzZXF1ZW5jZSBvZiB0aWxlcyBtYWtpbmcgdXAgdGhlIHBhdGhcblxuICAgIHRpbnQ6IGludGVnZXIgLy8gY29sb3IgYXMgYSAyNC1iaXQgaW50XG5cbiAgICB3OiBudW1iZXJcbiAgICBoOiBudW1iZXJcblxuICAgIHBvcnRhbEZyb206IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBwb3J0YWxUbzogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxuXG4gICAgLy8gdG9kbzogZ2VuZXJhdGUvbG9hZCB0ZXJyYWluXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IGludGVnZXIsIGhlaWdodDogaW50ZWdlcikge1xuICAgICAgICB0aGlzLncgPSB3aWR0aFxuICAgICAgICB0aGlzLmggPSBoZWlnaHRcbiAgICB9XG5cbiAgICBjcmVhdGUoc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpXG4gICAgICAgIHRoaXMuc2V0dXBTcHJpdGVzKHNjZW5lKVxuXG4gICAgICAgIHRoaXMudG93ZXJzID0gaW5pdDJEQXJyYXk8VG93ZXI+KHRoaXMudywgdGhpcy5oLCBudWxsKVxuICAgIH1cblxuICAgIHNldHVwU3ByaXRlcyhzY2VuZTogVERTY2VuZSkge1xuICAgICAgICB0aGlzLnRpbGVTcHJpdGVzID0gaW5pdDJEQXJyYXkodGhpcy53LCB0aGlzLmgsIFRpbGVUeXBlLkJ1aWxkYWJsZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudzsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpXVtqXSA9IHJhbmRvbUZyZWVTcHJpdGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2V0RGlyID0gKHBpOiBpbnRlZ2VyKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhdGhUaWxlcywgcGkpXG4gICAgICAgICAgICBsZXQgW2kxLCBqMV0gPSB0aGlzLnBhdGhUaWxlc1twaV1cbiAgICAgICAgICAgIGxldCBbaTIsIGoyXSA9IHRoaXMucGF0aFRpbGVzW3BpICsgMV1cblxuICAgICAgICAgICAgbGV0IFtkaSwgZGpdID0gW2kyIC0gaTEsIGoyIC0gajFdXG4gICAgICAgICAgICBpZiAoZGkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGkgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMlxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaiA9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXREaXIgZmFpbGVkXCIpXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgcGkgPSAwOyBwaSA8IHRoaXMucGF0aFRpbGVzLmxlbmd0aDsgcGkrKykge1xuICAgICAgICAgICAgbGV0IFtpMSwgajFdID0gdGhpcy5wYXRoVGlsZXNbcGldXG5cbiAgICAgICAgICAgIGlmIChwaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gNlxuICAgICAgICAgICAgfSBlbHNlIGlmIChwaSA9PSB0aGlzLnBhdGhUaWxlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gN1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgZDEgPSAoZ2V0RGlyKHBpIC0gMSkgKyAyKSAlIDRcbiAgICAgICAgICAgICAgICBsZXQgZDIgPSBnZXREaXIocGkpXG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgW2QxLCBkMl0gPSBbZDIsIGQxXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBPcmRlciBvZiBzcHJpdGVzICgwMiBtZWFuaW5nIGQxPTAsIGQyPTIpOlxuICAgICAgICAgICAgICAgIC8vIDAxIDAyIDAzIDEyIDEzIDIzXG4gICAgICAgICAgICAgICAgaWYgKGQxID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgLSAxXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkMSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IGQyICsgMVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZDEgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA1IC8vIG9ubHkgMjMgbGVmdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGludCA9IFBoYXNlci5EaXNwbGF5LkNvbG9yLkdldENvbG9yKFxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxuICAgICAgICApXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnc7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuZnJvbUdyaWRQb3MoaSwgailcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksICd0aWxlc2V0JywgdGhpcy50aWxlU3ByaXRlc1tpXVtqXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuQnVpbGRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zZXRUaW50KHRoaXMudGludClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuU3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxGcm9tID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCBcInBvcnRhbEZyb21cIiwgMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsVG8gPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksIFwicG9ydGFsVG9cIiwgMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3KGdyYXBoaWNzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3MpIHtcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZChncmFwaGljcylcblxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMywgMHhmZmZmZmYsIDEpO1xuICAgICAgICAvLyB2aXN1YWxpemUgdGhlIHBhdGhcbiAgICAgICAgdGhpcy5wYXRoLmRyYXcoZ3JhcGhpY3MpO1xuXG4gICAgICAgIHRoaXMucG9ydGFsRnJvbS5hbmltcy5wbGF5KHtcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxGcm9tX3NwaW5cIixcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTBcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9ydGFsVG8uYW5pbXMucGxheSh7XG4gICAgICAgICAgICBrZXk6IFwicG9ydGFsVG9fc3BpblwiLFxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkcmF3R3JpZChncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKSB7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweDAwMDBmZiwgMC44KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmg7IGkrKykge1xuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKDAsIGkgKiBUSUxFX1NJWkUpO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKFRJTEVfU0laRSAqIDEwLCBpICogVElMRV9TSVpFKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLnc7IGorKykge1xuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKGogKiBUSUxFX1NJWkUsIDApO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKGogKiBUSUxFX1NJWkUsIFRJTEVfU0laRSAqIDgpO1xuICAgICAgICB9XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FuUGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluQm91bmRzKGksIGopICYmIHRoaXMudGlsZXNbaV1bal0gPT09IFRpbGVUeXBlLkJ1aWxkYWJsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdHJ5R2V0RXhpc3RpbmdUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XG4gICAgICAgIGlmIChpIDwgMCB8fCBqIDwgMCB8fCBpID49IHRoaXMudyB8fCBqID49IHRoaXMuaCkgcmV0dXJuIG51bGxcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJzW2ldW2pdO1xuICAgIH1cblxuICAgIHB1YmxpYyBwbGFjZVRvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHRvd2VyOiBUb3dlcikge1xuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXG5cbiAgICAgICAgdGhpcy50aWxlc1tpXVtqXSA9IFRpbGVUeXBlLk9jY3VwaWVkO1xuICAgICAgICByZXR1cm4gdGhpcy50b3dlcnNbaV1bal0gPSB0b3dlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlKCk6IG51bWJlciB7XG4gICAgICAgIGxldCBwYXRoID0gW11cblxuICAgICAgICBsZXQgZWRnZXM6IEdyaWRQb3NbXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy53IC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBlZGdlcy5wdXNoKFtpLCAwXSlcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goW2ksIHRoaXMuaCAtIDFdKVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdGhpcy5oIC0gMTsgaisrKSB7XG4gICAgICAgICAgICBlZGdlcy5wdXNoKFswLCBqXSlcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goW3RoaXMudyAtIDEsIGpdKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxuXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDBcbiAgICAgICAgd2hpbGUgKCFzdWNjZXNzKSB7XG4gICAgICAgICAgICBsZXQgZnJvbSA9IHJhbmRvbUl0ZW0oZWRnZXMpXG4gICAgICAgICAgICBsZXQgdG87XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgdG8gPSByYW5kb21JdGVtKGVkZ2VzKVxuICAgICAgICAgICAgfSB3aGlsZSAodG8gPT0gZnJvbSlcblxuICAgICAgICAgICAgcGF0aCA9IHRoaXMucmFuZG9tV2Fsayhmcm9tLCB0bylcblxuICAgICAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gMjVcbiAgICAgICAgICAgIGlmIChwYXRoICE9PSBudWxsICYmIHBhdGgubGVuZ3RoID49IG1pbkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhdHRlbXB0cysrXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPT0gNDAwKSBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgaW5cIiwgYXR0ZW1wdHMsIFwiYXR0ZW1wdHNcIilcblxuICAgICAgICB0aGlzLnRpbGVzID0gaW5pdDJEQXJyYXkodGhpcy53LCB0aGlzLmgsIFRpbGVUeXBlLkJ1aWxkYWJsZSlcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLmZyb21HcmlkUG9zKHBhdGhbaV1bMF0sIHBhdGhbaV1bMV0pXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gYWx0ZW5hdGl2ZWx5OiB0aGlzLnBhdGggPSBuZXcgUGhhc2VyLkN1cnZlcy5QYXRoKC4uLilcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBhdGggPSBzY2VuZS5hZGQucGF0aCh4LCB5KVxuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IG5ldyBQaGFzZXIuQ3VydmVzLlBhdGgoeCwgeSlcbiAgICAgICAgICAgICAgICAvLyBzY2VuZS5hZGRPYmplY3QodGhpcy5wYXRoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgubGluZVRvKHgsIHkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBzZXRUbyA9IFRpbGVUeXBlLlBhdGhcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRUbyA9IFRpbGVUeXBlLlN0YXJ0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gcGF0aC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc2V0VG8gPSBUaWxlVHlwZS5FbmRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50aWxlc1twYXRoW2ldWzBdXVtwYXRoW2ldWzFdXSA9IHNldFRvXG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCB0ZXJyYWluLlwiKVxuXG4gICAgICAgIHRoaXMucGF0aFRpbGVzID0gcGF0aFxuICAgICAgICByZXR1cm4gcGF0aC5sZW5ndGhcbiAgICB9XG5cbiAgICBwcml2YXRlIHJhbmRvbVdhbGsoZnJvbTogR3JpZFBvcywgdG86IEdyaWRQb3MpOiBBcnJheTxHcmlkUG9zPiB7XG4gICAgICAgIGxldCBwYXRoID0gW11cbiAgICAgICAgbGV0IHNlZW4gPSBuZXcgU2V0KClcblxuICAgICAgICBjb25zdCBhZGRUb1BhdGggPSAocG9zOiBHcmlkUG9zKSA9PiB7XG4gICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYW5uZWQgb2YgdGhpcy5uZWlnaGJvcnMocGF0aFtwYXRoLmxlbmd0aCAtIDFdKSkge1xuICAgICAgICAgICAgICAgICAgICBzZWVuLmFkZChiYW5uZWQudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRoLnB1c2gocG9zKVxuICAgICAgICAgICAgc2Vlbi5hZGQocG9zLnRvU3RyaW5nKCkpXG4gICAgICAgIH1cblxuICAgICAgICBhZGRUb1BhdGgoZnJvbSlcblxuICAgICAgICBsZXQgc3RlcHMgPSAwXG4gICAgICAgIHdoaWxlIChwYXRoW3BhdGgubGVuZ3RoIC0gMV0gIT0gdG8pIHtcbiAgICAgICAgICAgIHN0ZXBzKytcbiAgICAgICAgICAgIGlmIChzdGVwcyA9PSAxMDApIGJyZWFrXG4gICAgICAgICAgICBsZXQgcG9zID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdXG5cbiAgICAgICAgICAgIGlmIChwb3MudG9TdHJpbmcoKSA9PT0gdG8udG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoICAvLyBTdWNjZXNzIVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY2FuZHMgPSB0aGlzLm5laWdoYm9ycyhwb3MpXG4gICAgICAgICAgICBjYW5kcyA9IGNhbmRzLmZpbHRlcihwID0+ICFzZWVuLmhhcyhwLnRvU3RyaW5nKCkpKVxuXG4gICAgICAgICAgICBpZiAoY2FuZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgIC8vIEZhaWwhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV4dCA9IHJhbmRvbUl0ZW0oY2FuZHMpXG4gICAgICAgICAgICBhZGRUb1BhdGgobmV4dClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBuZWlnaGJvcnMocG9zOiBHcmlkUG9zLCBwYWQgPSAwKSB7XG4gICAgICAgIGxldCByZXMgPSBbXG4gICAgICAgICAgICBbcG9zWzBdICsgMSwgcG9zWzFdXSxcbiAgICAgICAgICAgIFtwb3NbMF0gLSAxLCBwb3NbMV1dLFxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdICsgMV0sXG4gICAgICAgICAgICBbcG9zWzBdLCBwb3NbMV0gLSAxXSxcbiAgICAgICAgXVxuICAgICAgICByZXMgPSByZXMuZmlsdGVyKHAgPT4gdGhpcy5pbkJvdW5kcyhwWzBdLCBwWzFdKSlcblxuICAgICAgICByZXR1cm4gcmVzXG4gICAgfVxuXG4gICAgZnJvbUdyaWRQb3MoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xuICAgICAgICByZXR1cm4gWyhpICsgMC41KSAqIFRJTEVfU0laRSwgKGogKyAwLjUpICogVElMRV9TSVpFXVxuICAgIH1cblxuICAgIGluQm91bmRzKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHBhZCA9IDApIHtcbiAgICAgICAgcmV0dXJuIChpID49IHBhZFxuICAgICAgICAgICAgJiYgaSA8IHRoaXMudyAtIHBhZFxuICAgICAgICAgICAgJiYgaiA+PSBwYWRcbiAgICAgICAgICAgICYmIGogPCB0aGlzLmggLSBwYWQpXG4gICAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21JdGVtKGFycmF5KSB7XG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogYXJyYXkubGVuZ3RoKV1cbn1cblxuZnVuY3Rpb24gcmFuZG9tRnJlZVNwcml0ZSgpIHtcbiAgICBjb25zdCBuU3BlY2lhbFNwcml0ZXMgPSA4XG4gICAgcmV0dXJuIG5TcGVjaWFsU3ByaXRlcyArIE1hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogKE5fVElMRVNFVF9TUFJJVEVTIC0gblNwZWNpYWxTcHJpdGVzKSlcbn1cblxuZnVuY3Rpb24gaW5pdDJEQXJyYXk8VFZhbD4oZGltMSwgZGltMiwgdmFsdWU6IFRWYWwpOiBUVmFsW11bXSB7XG4gICAgcmV0dXJuIG5ldyBBcnJheShkaW0xKVxuICAgICAgICAuZmlsbChmYWxzZSlcbiAgICAgICAgLm1hcCgoKSA9PiBuZXcgQXJyYXkoZGltMilcbiAgICAgICAgICAgIC5maWxsKHZhbHVlKSk7XG59IiwiaW1wb3J0ICogYXMgY2ZnIGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xuaW1wb3J0ICogYXMgdG93ZXJzIGZyb20gXCIuL3Rvd2Vyc1wiO1xuXG5leHBvcnQgY2xhc3MgVG93ZXJNYW5hZ2VyIHtcbiAgICBzY2VuZTogVERTY2VuZVxuICAgIHRvd2VyVHlwZXM6IHsgW2tleTpzdHJpbmddOiBhbnl9ID0ge1xuICAgICAgICAnQmFzaWMnOiBbdG93ZXJzLkJhc2ljVHVycmV0LCBjZmcuQmFzaWNdLFxuICAgICAgICAnTXVsdGlzaG90JzogW3Rvd2Vycy5NdWx0aXNob3RUdXJyZXQsIGNmZy5NdWx0aXNob3RdLFxuICAgICAgICAnU25pcGVyJzogW3Rvd2Vycy5TbmlwZXJUdXJyZXQsIGNmZy5TbmlwZXJdLFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxhY2VUb3dlcihwb2ludGVyLCB0b3dlclR5cGUpIHtcbiAgICAgICAgY29uc3QgW2ksIGpdID0gdGhpcy5zY2VuZS50b0dyaWRQb3MocG9pbnRlci54LCBwb2ludGVyLnkpXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnRlcnJhaW4uY2FuUGxhY2VUb3dlcihpLCBqKSkge1xuICAgICAgICAgICAgdmFyIHRvd2VyOiB0b3dlcnMuVG93ZXIgPSB0aGlzLnNjZW5lLnRvd2Vycy5nZXQoKTtcblxuICAgICAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWRkU2NlbmUodGhpcy5zY2VuZS5zY2VuZS5rZXkpXG4gICAgICAgICAgICBpZiAodG93ZXIpIHtcbiAgICAgICAgICAgICAgICB0b3dlci5tYWtlKGksIGosIG5ld1NjZW5lLnNjZW5lLmtleSwgdGhpcy50b3dlclR5cGVzW3Rvd2VyVHlwZV1bMV0sIHRoaXMudG93ZXJUeXBlc1t0b3dlclR5cGVdWzBdKTtcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLm1vbmV5IC09IHRvd2VyLmNvbmZpZy5wcmljZVxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldFRvd2VyUGFyZW50KHRvd2VyKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIGltcG9ydCB7IEdyaWRQb3NpdGlvbiB9IGZyb20gXCIuL3RlcnJhaW5cIjtcblxuaW1wb3J0IHsgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGLCBUT1dFUl9IRUFMVEhfUkVHRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gXCIuL2hlYWx0aEJhclwiO1xuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XG5pbXBvcnQgeyBUZXJyYWluLCBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBUb3dlckNvbmZpZywgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgeyBIdWRTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9odWRTY2VuZVwiO1xuXG5cbi8vIHRvZG86IG1vdmUgdG8gc2NlbmU/XG5mdW5jdGlvbiBnZXRFbmVteSh4LCB5LCByYW5nZSwgZW5lbWllcywgbnVtVG9HZXQpOiBFbmVteUJhc2VbXSB7XG4gICAgbGV0IG91dEVuZW1pZXM6IEVuZW15QmFzZVtdID0gW107XG5cbiAgICBmb3IgKGxldCBlbmVteUdyb3VwIGluIGVuZW1pZXMpIHtcbiAgICAgICAgbGV0IGVuZW15VW5pdHMgPSBlbmVtaWVzW2VuZW15R3JvdXBdLmdldENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlVbml0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVuZW15VW5pdHNbaV0uYWN0aXZlICYmIFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4oeCwgeSwgZW5lbXlVbml0c1tpXS54LCBlbmVteVVuaXRzW2ldLnkpIDw9IHJhbmdlKSB7XG4gICAgICAgICAgICAgICAgb3V0RW5lbWllcy5wdXNoKGVuZW15VW5pdHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG91dEVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBvdXRFbmVtaWVzLnNvcnQoKGEsIGIpID0+IGIuZm9sbG93ZXIudCAtIGEuZm9sbG93ZXIudClcbiAgICAgICAgb3V0RW5lbWllcy5sZW5ndGggPSBNYXRoLm1pbihudW1Ub0dldCwgb3V0RW5lbWllcy5sZW5ndGgpXG4gICAgICAgIHJldHVybiBvdXRFbmVtaWVzXG4gICAgfVxuICAgIHJldHVybiBudWxsXG59XG5cblxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XG4gICAgY29uZmlnOiBUb3dlckNvbmZpZ1xuICAgIHN0YXRzOiBUb3dlckNvbmZpZ1xuXG4gICAgc2NlbmU6IFREU2NlbmVcblxuICAgIHRvd2VyVHVycmV0OiBfVG93ZXJUdXJyZXRcbiAgICB0b3dlck1pZDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxuICAgIHRvd2VyQmFzZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxuICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyXG4gICAgcmFuZ2VJbmRpY2F0b3I6IFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZVxuXG4gICAgbGV2ZWw6IGludGVnZXJcbiAgICBsZXZlbFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgICB4Q29vcmQ6IG51bWJlclxuICAgIHlDb29yZDogbnVtYmVyXG5cbiAgICBwYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlclxuICAgIGVtaXR0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyXG5cbiAgICBwcml2YXRlIGlubmVyVG93ZXJTY2VuZUtleTogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3Rvcih0b3dlclNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHRvd2VyU2NlbmUsIDAsIDApXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0b3dlclNjZW5lKVxuICAgICAgICB0aGlzLnNjZW5lID0gdG93ZXJTY2VuZTtcblxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMuc2NlbmUuYWRkLnBhcnRpY2xlcygncGFydGljbGVfcmVkJyk7XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IHRoaXMucGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xuICAgICAgICAgICAgbGlmZXNwYW46IDIwMCxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXG4gICAgICAgICAgICBzcGVlZDogMCxcbiAgICAgICAgICAgIHNjYWxlOiB7c3RhcnQ6IDAsIGVuZDogMX0sXG4gICAgICAgICAgICBvbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGxldmVsVXAoKSB7XG4gICAgICAgIHRoaXMubGV2ZWwrKztcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUgPT0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWN0aXZlU2NlbmUpXG4gICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5sZXZlbHVwU291bmQucGxheSgpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZXhwbG9kZSgyMCwgdGhpcy54Q29vcmQsIHRoaXMueUNvb3JkKTsgIC8vIHRoaXMueCBkb2Vzbid0IHdvcmsgYnR3XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgbWFrZShpOiBudW1iZXIsIGo6IG51bWJlciwgaW5uZXJUb3dlclNjZW5lS2V5OiBzdHJpbmcsIGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyQ2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnXG4gICAgICAgIHRoaXMuc3RhdHMgPSB0aGlzLmNvbmZpZztcblxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0ID0gbmV3IHRvd2VyQ2xhc3NOYW1lKHRoaXMuc2NlbmUsIHRoaXMuY29uZmlnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgIHRoaXMueENvb3JkID0gaSAqIFRJTEVfU0laRSArIFRJTEVfU0laRSAvIDJcbiAgICAgICAgdGhpcy55Q29vcmQgPSBqICogVElMRV9TSVpFICsgVElMRV9TSVpFIC8gMlxuXG4gICAgICAgIHRoaXMudG93ZXJCYXNlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCwgJ3Rvd2VyYmFzZXMnLCB0aGlzLmNvbmZpZy5zcHJpdGVCYXNlKTtcbiAgICAgICAgdGhpcy50b3dlckJhc2Uuc2V0VGludCh0aGlzLmNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJCYXNlKTtcbiAgICAgICAgdGhpcy50b3dlck1pZCA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0aGlzLnhDb29yZCwgdGhpcy55Q29vcmQsICd0b3dlcm1pZHMnLCB0aGlzLmNvbmZpZy5zcHJpdGVNaWQpO1xuICAgICAgICB0aGlzLnRvd2VyTWlkLnNldFRpbnQodGhpcy5jb25maWcudGludE1pZCk7XG4gICAgICAgIHRoaXMudG93ZXJNaWQuYW5pbXMucGxheSh7XG4gICAgICAgICAgICBrZXk6IGB0b3dlck1pZHNfc3BpbmBcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlck1pZCk7XG5cbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvciA9IHRoaXMuc2NlbmUuYWRkLmNpcmNsZShcbiAgICAgICAgICAgIHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCwgY29uZmlnLnJhbmdlKDEpLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0U3Ryb2tlU3R5bGUoUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91cik7XG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMuYWRkKHRoaXMucmFuZ2VJbmRpY2F0b3IpO1xuXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4ubGlzdC5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY29uc3RydWN0b3IubmFtZS5tYXRjaCgvXi4rRW5lbXkkLykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAgICAgbGV0IGh1ZFNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJodWRTY2VuZVwiKSBhcyBIdWRTY2VuZVxuICAgICAgICAgICAgaHVkU2NlbmUuc2V0RGVzY3JpcHRpb25Ub3dlcih0aGlzLmNvbmZpZywgdGhpcylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4geyB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpIH0pO1xuXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQucGxhY2UoaSwgaiwgdGhpcy5zY2VuZS50ZXJyYWluKTtcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBsYWNlVG93ZXIoaSwgaiwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlclR1cnJldCk7XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIubWFrZSh0aGlzLnhDb29yZCwgdGhpcy55Q29vcmQgKyBUSUxFX1NJWkUgLyAyIC0gOCwgVElMRV9TSVpFIC0gMTQpXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoQmFyKVxuXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxXG5cbiAgICAgICAgY29uc3QgcGFkID0gM1xuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoXG4gICAgICAgICAgICB0aGlzLnhDb29yZCArIDE1LCB0aGlzLnlDb29yZCAtIDQsIFwiXCIgKyB0aGlzLmxldmVsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIHRoaXMuYWRkKHRoaXMubGV2ZWxUZXh0KVxuXG4gICAgICAgIHRoaXMuaW5uZXJUb3dlclNjZW5lS2V5ID0gaW5uZXJUb3dlclNjZW5lS2V5XG5cbiAgICAgICAgbGV0IGlubmVyVG93ZXJTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KGlubmVyVG93ZXJTY2VuZUtleSkgYXMgVERTY2VuZVxuICAgICAgICBpbm5lclRvd2VyU2NlbmUub25FbmVteVJlYWNoZWRFbmQoKGRhbWFnZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuaGVhbHRoIC09IGRhbWFnZSAqIERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcblxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnVwZGF0ZShkZWx0YSlcblxuICAgICAgICB0aGlzLmhlYWx0aEJhci5oZWFsdGggKz0gVE9XRVJfSEVBTFRIX1JFR0VOICogZGVsdGFcblxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIuaGVhbHRoID49IDEuMCkge1xuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIubGV2ZWxVcCgpO1xuICAgICAgICAgICAgdGhpcy5sZXZlbFVwKClcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0LnNldFRleHQoXCJcIiArIHRoaXMubGV2ZWwpXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwgLSAxKSA8IHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VTY2FsZSA9IHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCkgLyB0aGlzLnN0YXRzLnJhbmdlKDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0U2NhbGUocmFuZ2VTY2FsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhlYWx0aEJhci51cGRhdGUoZGVsdGEpXG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUb3dlclNjZW5lS2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclRvd2VyU2NlbmVLZXlcbiAgICB9XG59XG5cblxuYWJzdHJhY3QgY2xhc3MgX1Rvd2VyVHVycmV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcbiAgICBuZXh0VGljOiBudW1iZXJcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBiYXNlWDogbnVtYmVyXG4gICAgYmFzZVk6IG51bWJlclxuICAgIHBhcmVudDogVG93ZXJcblxuICAgIHNjZW5lOiBURFNjZW5lXG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgc3ByaXRlOiBzdHJpbmcsIHRpbnQ6IG51bWJlciwgcGFyZW50OiBUb3dlcikge1xuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgJ3Rvd2VydG9wcycsIHNwcml0ZSk7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLnNldFRpbnQodGludCk7XG4gICAgICAgIHRoaXMubmV4dFRpYyA9IDA7XG4gICAgfVxuXG4gICAgLy8gd2Ugd2lsbCBwbGFjZSB0aGUgdG93ZXIgYWNjb3JkaW5nIHRvIHRoZSBncmlkXG4gICAgcGxhY2UoaTogaW50ZWdlciwgajogaW50ZWdlciwgdGVycmFpbjogVGVycmFpbikge1xuICAgICAgICBbdGhpcy54LCB0aGlzLnldID0gdGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxuICAgICAgICB0aGlzLmJhc2VYID0gdGhpcy54XG4gICAgICAgIHRoaXMuYmFzZVkgPSB0aGlzLnlcbiAgICB9XG5cbiAgICBmaXJlKCkge1xuICAgICAgICBsZXQgZW5lbWllcyA9IGdldEVuZW15KFxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWxsRW5lbWllcywgMVxuICAgICAgICApO1xuICAgICAgICBpZiAoZW5lbWllcykge1xuICAgICAgICAgICAgbGV0IGVuZW15ID0gZW5lbWllc1swXVxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgZW5lbXkueCwgZW5lbXkueSk7XG4gICAgICAgICAgICBsZXQgZGFtYWdlID0gdGhpcy5wYXJlbnQuc3RhdHMuZGFtYWdlKHRoaXMucGFyZW50LmxldmVsKVxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxuICAgICAgICAgICAgICAgIGRhbWFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZSA9PSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hY3RpdmVTY2VuZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5zaG9vdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSkge1xuICAgICAgICB0aGlzLmFuZ2xlID0gKGFuZ2xlICsgTWF0aC5QSSAvIDIpICogUGhhc2VyLk1hdGguUkFEX1RPX0RFRztcbiAgICAgICAgbGV0IHJlY29pbCA9IE1hdGgubWluKGRhbWFnZSAqIDAuNSwgMjUpXG4gICAgICAgIHRoaXMueCA9IHRoaXMuYmFzZVhcbiAgICAgICAgdGhpcy55ID0gdGhpcy5iYXNlWVxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBNYXRoLm1pbih0aGlzLnBhcmVudC5jb25maWcuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpICogMC44LCAxMDAgKyBkYW1hZ2UpLFxuICAgICAgICAgICAgeDogdGhpcy54ICsgTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJKSAqIHJlY29pbCxcbiAgICAgICAgICAgIHk6IHRoaXMueSArIE1hdGguc2luKGFuZ2xlICsgTWF0aC5QSSkgKiByZWNvaWwsXG4gICAgICAgICAgICBlYXNlOiAnUXVhZCcsXG4gICAgICAgICAgICB5b3lvOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbGFzdFRpbWU6IG51bWJlciA9IDBcbiAgICB1cGRhdGUoZGVsdGEpIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0VGljKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maXJlKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGljID0gdGhpcy5sYXN0VGltZSArIHRoaXMucGFyZW50LnN0YXRzLmZpcmVyYXRlKHRoaXMucGFyZW50LmxldmVsKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpYyA9IHRoaXMubGFzdFRpbWUgKyA1MDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJhc2ljVHVycmV0IGV4dGVuZHMgX1Rvd2VyVHVycmV0IHtcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY29uZmlnLnNwcml0ZVRvcCwgY29uZmlnLnRpbnRUb3AsIHBhcmVudCk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBNdWx0aXNob3RUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcbiAgICB9XG5cblxuICAgIGZpcmUoKSB7ICAvLyB0aGlzIGJlaGF2aW91ciBzaG91bGQgYmUgaW4gX1Rvd2VyVHVycmV0LmZpcmUgYnR3XG4gICAgICAgIGxldCBudW1UYXJnZXRzID0gM1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3RhdHMubnVtVGFyZ2V0cykge1xuICAgICAgICAgICAgbnVtVGFyZ2V0cyA9IHRoaXMucGFyZW50LnN0YXRzLm51bVRhcmdldHModGhpcy5wYXJlbnQubGV2ZWwpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbmVtaWVzID0gZ2V0RW5lbXkodGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSwgdGhpcy5zY2VuZS5hbGxFbmVtaWVzLCBudW1UYXJnZXRzKTtcblxuICAgICAgICBpZiAoZW5lbWllcyAmJiBlbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGVuZW15IG9mIGVuZW1pZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBlbmVteS54LCBlbmVteS55KTtcbiAgICAgICAgICAgICAgICBsZXQgZGFtYWdlID0gdGhpcy5wYXJlbnQuc3RhdHMuZGFtYWdlKHRoaXMucGFyZW50LmxldmVsKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkQnVsbGV0KFxuICAgICAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXG4gICAgICAgICAgICAgICAgICAgIGRhbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJlQW5pbWF0aW9uKGFuZ2xlLCBkYW1hZ2UpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUgPT0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWN0aXZlU2NlbmUpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLm11bHRpc2hvdFNvdW5kLnBsYXkoKTsgIC8vIHRoaXMgc2hvdWxkIGJlIGluIGNvbmZpZyBpZiB0aGlzIHdlcmUgZG9uZSBwcm9wZXJseVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbmlwZXJUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFbmVteUNvbmZpZywgUEFVU0VfQUZURVJfV0FWRV9USU1FLCBFTkVNWV9DT05GSUdTLCBXYXZlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xuLy8gaW1wb3J0IHsgRW5lbXksIEZhdEVuZW15fSBmcm9tIFwiLi9lbmVteVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBXYXZlTWFuYWdlciB7XG4gICAgc2NlbmU6IFREU2NlbmVcbiAgICBjdXJyZW50V2F2ZTogaW50ZWdlciA9IDBcbiAgICBuZXh0RW5lbXk6IGludGVnZXIgPSAwXG4gICAgZGVhZERhbmdlcjogaW50ZWdlciA9IDBcbiAgICByZW1haW5pbmdEYW5nZXI6IGludGVnZXIgPSAwXG4gICAgd2F2ZURpZmZpY3VsdHk6IGludGVnZXIgPSAwXG5cbiAgICB3YXZlQWN0aXZlOiBib29sZWFuICAvLyBmYWxzZSBmb3IgbmVzdGVkIHdhdmVzXG4gICAgbmV4dFdhdmVUaW1lOiBpbnRlZ2VyID0gMFxuICAgIHJlc3Bhd25RdWV1ZTogW0VuZW15Q29uZmlnLCBpbnRlZ2VyXVtdID0gW107XG4gICAgcmVzcGF3bkhlYWx0aDogaW50ZWdlciAgLy8gemVybyB1bmxlc3MgcmVzcGF3bmluZyBlbmVteSwgaGFja1xuXG4gICAgZW5lbXlJbnRlcnZhbDogaW50ZWdlclxuXG4gICAgcXVldWVkRW5lbXk6IGFueVxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuXG4gICAgICAgIC8vIHNldCBmYWxzZSBmb3IgbmVzdGVkIGJlaGF2aW9yIGluIHVwZGF0ZSgpXG4gICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9ICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPiAwKTtcblxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKVxuICAgICAgICAgICAgdGhpcy5nZXRXYXZlRGlmZmljdWx0eSgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSAxZTkgLy8gYSBsb3RcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRXYXZlRGlmZmljdWx0eSgpIHtcbiAgICAgICAgLy9UT0RPOiBhZGQgZGlmZmljdWx0eSBzY2FsaW5nIGFuZCBiYWxhbmNpbmcgZm9yIHdhdmVzXG4gICAgICAgIHRoaXMud2F2ZURpZmZpY3VsdHkgPSBXYXZlQ29uZmlnLm91dGVyV2F2ZURhbmdlcih0aGlzLmN1cnJlbnRXYXZlKVxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IHRoaXMud2F2ZURpZmZpY3VsdHlcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gV2F2ZUNvbmZpZy5vdXRlckVuZW15SW50ZXJ2YWxcbiAgICB9XG5cbiAgICBwcml2YXRlIG5leHRXYXZlKCkge1xuICAgICAgICB0aGlzLndhdmVBY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlKys7XG4gICAgICAgIHRoaXMuZ2V0V2F2ZURpZmZpY3VsdHkoKTtcbiAgICAgICAgUGxheWVySW5mby53YXZlSGVhbHRoUmVnZW4oKTtcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIHdhdmUgJyArIHRoaXMuY3VycmVudFdhdmUgKyAnLCB3YXZlIGRpZmZpY3VsdHk6ICcgKyB0aGlzLndhdmVEaWZmaWN1bHR5KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNwYXduRW5lbXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3Bhd25RdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzcGF3biA9IHRoaXMucmVzcGF3blF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICB0aGlzLnJlc3Bhd25IZWFsdGggPSByZXNwYXduWzFdO1xuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmVzcGF3blswXS5kYW5nZXI7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5hbGxFbmVtaWVzW3Jlc3Bhd25bMF0ubmFtZV0uZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmFuZEVuZW15ID0gdGhpcy5nZXRSYW5kRW5lbXkoKGVuZW15KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGVuZW15LmRhbmdlciA8PSB0aGlzLnJlbWFpbmluZ0RhbmdlcikgJiYgKGVuZW15Lm1pbldhdmUgPD0gdGhpcy5jdXJyZW50V2F2ZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJhbmRFbmVteSkge1xuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmFuZEVuZW15LmRhbmdlcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbcmFuZEVuZW15Lm5hbWVdLmdldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgPSAwO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzcGF3bihyZXNwYXduOiBFbmVteUNvbmZpZywgcmVtYWluaW5nSGVhbHRoOiBpbnRlZ2VyKSB7XG4gICAgICAgIHRoaXMucmVzcGF3blF1ZXVlLnB1c2goW3Jlc3Bhd24sIHJlbWFpbmluZ0hlYWx0aF0pO1xuICAgIH1cblxuXG4gICAgbGFzdFRpbWU6IG51bWJlciA9IDBcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhKSB7XG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGFcbiAgICAgICAgbGV0IGVuZW15OiBFbmVteUJhc2VcbiAgICAgICAgbGV0IHdhdmU6IGludGVnZXJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLndhdmVBY3RpdmUgJiYgdGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dFdhdmVUaW1lKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F2ZSgpOyAgLy8gbm8gd2F2ZXMgaW4gbmVzdGVkIGxheWVyc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucmVtYWluaW5nRGFuZ2VyID4gMCAmJiB0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0RW5lbXkpIHtcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc3Bhd25FbmVteSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGVhZERhbmdlciA9PT0gdGhpcy53YXZlRGlmZmljdWx0eSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2F2ZSBcIiArIHRoaXMuY3VycmVudFdhdmUgKyBcIiBjb21wbGV0ZSEgTmV4dCB3YXZlIGluIFwiICsgUEFVU0VfQUZURVJfV0FWRV9USU1FKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWREYW5nZXIgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmVUaW1lID0gdGhpcy5sYXN0VGltZSArIFBBVVNFX0FGVEVSX1dBVkVfVElNRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhdmUgPSB0aGlzLmN1cnJlbnRXYXZlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucXVldWVkRW5lbXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZEVuZW15ID0gdGhpcy5nZXRSYW5kRW5lbXkoKGVuZW15KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmVteS5taW5XYXZlIDw9IDIgKiBXYXZlQ29uZmlnLmxldmVsVG9XYXZlKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhID0gdGhpcy5sYXN0VGltZSAqIChXYXZlQ29uZmlnLmRhbmdlclBlclNlYyh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpICogMC4wMDEpXG4gICAgICAgICAgICBjb25zdCBiID0gKHRoaXMucXVldWVkRW5lbXkuZGFuZ2VyICogMS4wKVxuICAgICAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5xdWV1ZWRFbmVteS5uYW1lXS5nZXQoKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxhc3RUaW1lLCBiKVxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSBudWxsXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdhdmUgPSBXYXZlQ29uZmlnLmxldmVsVG9XYXZlKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmVteSkge1xuICAgICAgICAgICAgZW5lbXkuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgZW5lbXkuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIGVuZW15IGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxuICAgICAgICAgICAgZW5lbXkuc3RhcnRPblBhdGgod2F2ZSwgdGhpcy5yZXNwYXduSGVhbHRoKTtcbiAgICAgICAgICAgIHRoaXMucmVzcGF3bkhlYWx0aCA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMubmV4dEVuZW15ID0gdGhpcy5sYXN0VGltZSArIHRoaXMuZW5lbXlJbnRlcnZhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmFuZEVuZW15KGZpbHRlcl9mbik6IEVuZW15Q29uZmlnIHtcbiAgICAgICAgbGV0IGF2YWlsRW5lbWllcyA9IFtdXG4gICAgICAgIGZvcihsZXQgZW5lbXkgb2YgRU5FTVlfQ09ORklHUykgeyAgLy8gU2VsZWN0IGFsbCBlbmVtaWVzIHRoYXQgY2FuIGJlIHNwYXduZWRcbiAgICAgICAgICAgIGlmIChlbmVteS5taW5XYXZlID49IDAgJiYgZmlsdGVyX2ZuKGVuZW15KSlcbiAgICAgICAgICAgICAgICBhdmFpbEVuZW1pZXMucHVzaChlbmVteSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXZhaWxFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFBpY2sgYSByYW5kb20gb25lIG9mIHRoZW1cbiAgICAgICAgICAgIGxldCByYW5kRW5lbXkgPSBhdmFpbEVuZW1pZXNbTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiBhdmFpbEVuZW1pZXMubGVuZ3RoKV07XG4gICAgICAgICAgICByZXR1cm4gcmFuZEVuZW15XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==