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
    PlayerInfo.money = 10;
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
            var _a = this.predictEnemyPositionForShot(enemy), xPred = _a[0], yPred = _a[1];
            var angle = Phaser.Math.Angle.Between(this.x, this.y, xPred, yPred);
            var damage = this.parent.stats.damage(this.parent.level);
            this.scene.addBullet(this.x, this.y, angle, damage, this.parent.stats.range(this.parent.level), this.parent.stats.bulletSpeedMod);
            this.fireAnimation(angle, damage);
            if (this.scene == this.scene.metaScene.activeScene)
                this.scene.metaScene.shootSound.play();
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
        var t2 = enemy.follower.t + enemy.speed * msToHit;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlcnJhaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvd2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QUcsQ0FBQyxDQUFDO1lBRXZCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLFNBQVM7UUFDMUIsSUFBSSxZQUFZLEdBQUcsRUFBRTtRQUNyQixLQUFpQixVQUFhLEVBQWIsd0NBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRSxFQUFHLHlDQUF5QztZQUF4RSxJQUFJLEtBQUs7WUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLDRCQUE0QjtZQUM1QixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RixPQUFPLFNBQVM7U0FDbkI7YUFBTTtZQUNILE9BQU8sSUFBSTtTQUNkO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQXhJWSxrQ0FBVyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuL3BsYXllckluZm9cIlxuaW1wb3J0IHtURFNjZW5lfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXG5cbmV4cG9ydCBjb25zdCBSQURJVVMgPSAxMFxuXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgZHg6IG51bWJlciA9IDBcbiAgICBkeTogbnVtYmVyID0gMFxuICAgIGxpZmVzcGFuOiBudW1iZXIgPSAwXG4gICAgc3BlZWQ6IG51bWJlclxuICAgIGRhbWFnZTogaW50ZWdlclxuXG4gICAgYnVsbGV0SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxuICAgIHBhcnRpY2xlczogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJNYW5hZ2VyXG4gICAgZW1pdHRlcjogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcblxuICAgICAgICB0aGlzLmR4ID0gMDtcbiAgICAgICAgdGhpcy5keSA9IDA7XG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xuXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg2MDAsIDEpO1xuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMCwgMCwgJ2J1bGxldCcpXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYnVsbGV0SW1hZ2UpXG5cbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ3BhcnRpY2xlX3JlZCcpXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IHRoaXMucGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xuICAgICAgICAgICAgc3BlZWQ6IDEwMCxcbiAgICAgICAgICAgIHNjYWxlOiB7c3RhcnQ6IDAuMywgZW5kOiAwfSxcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXG4gICAgICAgICAgICBsaWZlc3BhbjogMTAwLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJlKHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHRvd2VyUmFuZ2UsIHNwZWVkTW9kLCBzY2VuZSkge1xuICAgICAgICB0aGlzLmRhbWFnZSA9IGRhbWFnZTtcbiAgICAgICAgdGhpcy5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKHRvd2VyUmFuZ2UgKiBzcGVlZE1vZCwgMSk7XG5cbiAgICAgICAgdGhpcy5zZXRBY3RpdmUodHJ1ZSk7XG5cbiAgICAgICAgLy8gIEJ1bGxldHMgZmlyZSBmcm9tIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiB0byB0aGUgZ2l2ZW4geC95XG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2Uuc2V0UG9zaXRpb24oeCwgeSk7XG5cbiAgICAgICAgLy8gIHdlIGRvbid0IG5lZWQgdG8gcm90YXRlIHRoZSBidWxsZXRzIGFzIHRoZXkgYXJlIHJvdW5kXG4gICAgICAgIC8vICB0aGlzLnNldFJvdGF0aW9uKGFuZ2xlKTtcbiAgICAgICAgLy8gVE9ETzogZmlndXJlIG91dCBob3cgdG8gYnJpbmcgdG8gZnJvbnRcblxuICAgICAgICB0aGlzLmR4ID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICB0aGlzLmR5ID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwIC8gc3BlZWRNb2Q7XG5cbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmUuaXNWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5mbG93KDApICAvLyBhcmd1bWVudDogZnJlcXVlbmN5ICgwID0gYWx3YXlzKVxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLnN0YXJ0Rm9sbG93KHRoaXMuYnVsbGV0SW1hZ2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMuYnVsbGV0SW1hZ2UpO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMucGFydGljbGVzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmV4cGxvZGUoMTAsIHRoaXMuYnVsbGV0SW1hZ2UueCwgdGhpcy5idWxsZXRJbWFnZS55KVxuICAgIH1cblxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcblxuICAgICAgICB0aGlzLmxpZmVzcGFuIC09IGRlbHRhO1xuXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueCArPSB0aGlzLmR4ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueSArPSB0aGlzLmR5ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XG5cbiAgICAgICAgKHRoaXMuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkuc2V0Q2lyY2xlKFJBRElVUywgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpO1xuXG4gICAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5kZXN0cm95KCk7IC8vIGRpc2FibGUgZW1pdHRvciAoYWxzbyBjb3VsZCBleHBsb2RlIGl0KVxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLm1hbmFnZXIucmVtb3ZlRW1pdHRlcih0aGlzLmVtaXR0ZXIpXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZW5lbSBmcm9tIFwiLi9lbmVteVwiO1xuXG4vLyBlbmVteSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSBob3cgbXVjaCBoZWFsdGggdG93ZXIgbG9zZXNcbi8vICh0b3dlciBoZWFsdGggaXMgZnJvbSAwIHRvIDEpXG5leHBvcnQgY29uc3QgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGID0gMC4yXG5cbmV4cG9ydCBjb25zdCBUT1dFUl9IRUFMVEhfUkVHRU4gPSAwLjAwMDAxICogMlxuXG5leHBvcnQgY29uc3QgUEFVU0VfQUZURVJfV0FWRV9USU1FID0gMzAwMDtcblxuZXhwb3J0IGNvbnN0IFBMQVlFUl9IRUFMVEhfUkVHRU46IG51bWJlciA9IDA7ICAvLyBob3cgbXVjaCBoZWFsdGggcGVyIHdhdmUsIGNhbiBiZSA8IDFcblxuZXhwb3J0IGNvbnN0IFJBTkdFX0lORElDQVRPUl9DT05GSUcgPSB7XG4gICAgJ2NvbG91cic6IDB4YmJiYmZmLFxuICAgICdhbHBoYSc6IDIxMCxcbiAgICAnZWRnZUNvbG91cic6IDB4ODA4MGZmLFxuICAgICdlZGdlV2lkdGgnOiA0XG59O1xuXG5leHBvcnQgY29uc3QgV2F2ZUNvbmZpZyA9IHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIG91dGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSG93IG11Y2ggdGltZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIHNwYXducyBpbiBhIHdhdmVcbiAgICBvdXRlckVuZW15SW50ZXJ2YWw6IDUwMCxcbiAgICAvLyBIb3cgbXVjaCBkYW5nZXIgaW4gYSB3YXZlXG4gICAgb3V0ZXJXYXZlRGFuZ2VyOiAod2F2ZSkgPT4gKHdhdmUgKyAxKSAgKiAxMCxcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gaW5uZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIb3cgbXVjaCBkYW5nZXIgcGVyIHNlY29uZCBpcyBnZW5lcmF0ZWUgaW4gaW5uZXIgZGVwdGhzP1xuICAgIGRhbmdlclBlclNlYzogKGxldmVsKSA9PiAxMCpsZXZlbCxcbiAgICAvLyBUbyB3aGF0IHdhdmUgbnVtYmVyIGRvZXMgYSB0b3dlciBsZXZlbCBjb3JyZXNwb25kPyAoZm9yIGVuZW15IHNjYWxpbmcpXG4gICAgbGV2ZWxUb1dhdmU6IChsZXZlbCkgPT4gMyAqIGxldmVsLFxufVxuXG5leHBvcnQgdHlwZSBFbmVteUNvbmZpZyA9IHtcbiAgICBuYW1lOiBzdHJpbmcgIC8vIG11c3QgYmUgc2FtZSBhcyBjb25maWcgb2JqZWN0IG5hbWVcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nICAvLyBuYW1lIHRvIGJlIGRpc3BsYXllZCB0byBwbGF5ZXJcbiAgICBjbGFzczogYW55ICAvLyBjbGFzcyBvZiB0aGUgZW5lbXkgYXMgZGVmaW5lZCBpbiAuL2VuZW15LnRzXG4gICAgaHA6IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBjYW4gc2NhbGUgd2l0aCB3YXZlXG4gICAgc3BlZWQ6IG51bWJlciAgLy8gZnJhY3Rpb24gb2YgcGF0aFxuICAgIG1vbmV5OiBpbnRlZ2VyICAvLyBvbi1raWxsIHJld2FyZFxuICAgIGRhbWFnZTogaW50ZWdlciAgLy8gZGFtYWdlIGRlYWx0IG9uIHJlYWNoaW5nIGVuZFxuICAgIGFybW91cjogKGludGVnZXIpID0+IGludGVnZXIgIC8vIGZsYXQgcmVkdWN0aW9uIG9mIGluY29taW5nIGRhbWFnZVxuICAgIGRhbmdlcjogaW50ZWdlciAgLy8gZm9yIGNhbGN1bGF0aW5nIHdhdmUgZGlmZmljdWx0eVxuICAgIHNwcml0ZU5hbWU6IHN0cmluZyAgLy8gc3ByaXRlIGFzIGltcG9ydGVkIGluIG1ldGFTY2VuZS5wcmVsb2FkXG4gICAgdGludDogaW50ZWdlclxuICAgIHNwbGl0PzogeyAgLy8gb3B0aW9uYWwgc3BsaXQgaW5mb1xuICAgICAgICBjZmc6IEVuZW15Q29uZmlnICAvLyBUT0RPOiBtYWtlIHNwbGl0IGludG8gbXVsdGlwbGUgdHlwZXMgcG9zc2libGU/XG4gICAgICAgIGFtb3VudDogaW50ZWdlclxuICAgIH1cbiAgICBtaW5XYXZlOiBpbnRlZ2VyICAvLyBmaXJzdCB3YXZlIHRoaXMgY2FuIHNwYXduLCAtMSB0byBuZXZlciBzcGF3blxuICAgIGJsdXJiPzogc3RyaW5nICAvLyBzaG93biB0byBwbGF5ZXJcbn1cblxuZXhwb3J0IGNvbnN0IFdlYWs6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ1dlYWsnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdOb3JtYWwnLFxuICAgICdjbGFzcyc6IGVuZW0uV2Vha0VuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAxNSArIDE0Kih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcbiAgICAnbW9uZXknOiAxLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcbiAgICAnc3ByaXRlTmFtZSc6ICd3ZWFrRW5lbXknLFxuICAgICdkYW5nZXInOiAxMCxcbiAgICAndGludCc6IDB4ZmZmZmZmLFxuICAgICdtaW5XYXZlJzogMCxcbiAgICAnYmx1cmInOiAnVG9vIGN1dGUgdG8ga2lsbC4uLiBzdXJlbHkuJ1xufVxuXG5leHBvcnQgY29uc3QgRmF0OiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdGYXQnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdDaG9uaycsXG4gICAgJ2NsYXNzJzogZW5lbS5GYXRFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTAwICsgNzAgKiAod2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gNDAwMDAsXG4gICAgJ21vbmV5JzogMyxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDEwMCxcbiAgICAnc3ByaXRlTmFtZSc6ICdmYXRFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnbWluV2F2ZSc6IDE0LFxuXHQnYmx1cmInOiAnTGFyZ2UgYW5kIGluIGNoYXJnZS4nXG59XG5cbmV4cG9ydCBjb25zdCBBcm1vdXJlZDogRW5lbXlDb25maWcgPSB7XG4gICAgJ25hbWUnOiAnQXJtb3VyZWQnLFxuICAgICdkaXNwbGF5TmFtZSc6ICdBcm1vdXJlZCcsXG4gICAgJ2NsYXNzJzogZW5lbS5Bcm1vdXJlZEVuZW15LFxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDE0Kih3YXZlLTEpLFxuICAgICdzcGVlZCc6IDEgLyAzMDAwMCxcbiAgICAnbW9uZXknOiAyLFxuICAgICdkYW1hZ2UnOiAxLFxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gTWF0aC5taW4oMyArIChNYXRoLmZsb29yKHdhdmUvNSkpLDE0KSxcbiAgICAnZGFuZ2VyJzogMTAwLFxuICAgICdzcHJpdGVOYW1lJzogJ2FybW91cmVkRW5lbXknLFxuICAgICd0aW50JzogMHhmZmZmZmYsXG4gICAgJ21pbldhdmUnOiAxMCxcblx0J2JsdXJiJzogJ1RoZSBoYXQgaXMgc3VycHJpc2luZ2x5IHN0dXJkeS4nXG59XG5cbmV4cG9ydCBjb25zdCBGYXN0OiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdGYXN0JyxcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BlZWR5JyxcbiAgICAnY2xhc3MnOiBlbmVtLkZhc3RFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTAgKyAxMCood2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gMTAwMDAsXG4gICAgJ21vbmV5JzogMSxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDMwLFxuICAgICdzcHJpdGVOYW1lJzogJ2Zhc3RFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnbWluV2F2ZSc6IDYsXG5cdCdibHVyYic6ICdUaGUgYm9vdHMgYXJlblxcJ3QganVzdCBmb3Igc2hvdyEnXG59XG5cbmV4cG9ydCBjb25zdCBTcGxpdHRlclNtYWxsOiBFbmVteUNvbmZpZyA9IHtcbiAgICAnbmFtZSc6ICdTcGxpdHRlclNtYWxsJyxcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BsaXR0ZXIgYmFieScsXG4gICAgJ2NsYXNzJzogZW5lbS5TcGxpdHRlclNtYWxsRW5lbXksXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwICsgOCood2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXG4gICAgJ21vbmV5JzogMCxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDIwLFxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyU21hbGxFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnbWluV2F2ZSc6IC0xLFxuXHQnYmx1cmInOiAnQXd3LCBsb29rLCB0aGV5XFwncmUganVzdCBiYWJpZXMhJ1xufVxuXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJCaWc6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ1NwbGl0dGVyQmlnJyxcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BsaXR0ZXInLFxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJCaWdFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyAyMCood2F2ZS0xKSxcbiAgICAnc3BlZWQnOiAxIC8gMzAwMDAsXG4gICAgJ21vbmV5JzogMSxcbiAgICAnZGFtYWdlJzogMSxcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXG4gICAgJ2Rhbmdlcic6IDMwLFxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyQmlnRW5lbXknLFxuICAgICd0aW50JzogMHhmZmZmZmYsXG4gICAgJ3NwbGl0Jzoge1xuICAgICAgICAnY2ZnJzogU3BsaXR0ZXJTbWFsbCxcbiAgICAgICAgJ2Ftb3VudCc6IDJcbiAgICB9LFxuICAgICdtaW5XYXZlJzogOCxcblx0J2JsdXJiJzogJ0V5ZXMgdG8gbWVldCB5b3UuJ1xufVxuXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJGYXQ6IEVuZW15Q29uZmlnID0ge1xuICAgICduYW1lJzogJ1NwbGl0dGVyRmF0JyxcbiAgICAnZGlzcGxheU5hbWUnOiAnVGhlIEJpZyBPbmUnLFxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJGYXRFbmVteSxcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTAwICsgNDAqKHdhdmUtMSksXG4gICAgJ3NwZWVkJzogMSAvIDQwMDAwLFxuICAgICdtb25leSc6IDIsXG4gICAgJ2RhbWFnZSc6IDEsXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxuICAgICdkYW5nZXInOiAyMDAsXG4gICAgJ3Nwcml0ZU5hbWUnOiAnc3BsaXR0ZXJGYXRFbmVteScsXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcbiAgICAnc3BsaXQnOiB7XG4gICAgICAgICdjZmcnOiBTcGxpdHRlckJpZyxcbiAgICAgICAgJ2Ftb3VudCc6IDJcbiAgICB9LFxuICAgICdtaW5XYXZlJzogMTgsXG5cdCdibHVyYic6ICdFeWVzIHRvIG1lZXQgeW91Li4uIHR3by4nXG59XG5cblxuXG5leHBvcnQgY29uc3QgRU5FTVlfQ09ORklHUyA9IFtXZWFrLCBGYXQsIEFybW91cmVkLCBGYXN0LCBTcGxpdHRlckJpZywgU3BsaXR0ZXJTbWFsbCwgU3BsaXR0ZXJGYXRdXG5cblxuZXhwb3J0IHR5cGUgVG93ZXJDb25maWcgPSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgZGFtYWdlOiAoaW50ZWdlcikgPT4gbnVtYmVyXG4gICAgZmlyZXJhdGU6IChpbnRlZ2VyKSA9PiBudW1iZXIgIC8vIG1pbGlzZWNvbmRzIGJldHdlZW4gZWFjaCBzaG90XG4gICAgcmFuZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcbiAgICBudW1UYXJnZXRzPzogKGludGVnZXIpID0+IGludGVnZXIgIC8vIHNldCBmb3IgdG93ZXJzIHRoYXQgdGFyZ2V0IG11bHRpcGxlIGVuZW1pZXNcbiAgICBidWxsZXRTcGVlZE1vZDogbnVtYmVyICAvLyBidWxsZXQgd2lsbCByZWFjaCByYW5nZSBpbiAxL2J1bGxldFNwZWVkTW9kIHNlY29uZHNcbiAgICBwcmljZTogbnVtYmVyXG4gICAgc3ByaXRlQmFzZTogaW50ZWdlclxuICAgIHNwcml0ZU1pZDogaW50ZWdlclxuICAgIHNwcml0ZVRvcDogaW50ZWdlclxuICAgIHRpbnRCYXNlOiBpbnRlZ2VyXG4gICAgdGludE1pZDogaW50ZWdlclxuICAgIHRpbnRUb3A6IGludGVnZXJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxufVxuXG5leHBvcnQgY29uc3QgQmFzaWM6IFRvd2VyQ29uZmlnID0ge1xuICAgICduYW1lJzogXCJCYXNpY1wiLFxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiAxNSArIDMwICogKGxldmVsLTEpLFxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDEwMDAsXG4gICAgJ3JhbmdlJzogbGV2ZWwgPT4gMTUwLFxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXG4gICAgJ3ByaWNlJzogNSxcbiAgICAnc3ByaXRlQmFzZSc6IDAsXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXG4gICAgJ3Nwcml0ZVRvcCc6IDAsXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRNaWQnOiAweDY3NWE5YyxcbiAgICAndGludFRvcCc6IDB4YWFhYWZmLFxuICAgICdkZXNjcmlwdGlvbic6IFwiTm90aGluZyBmYW5jeS4gRGFtYWdlIGdyb3dzIHdpdGggbGV2ZWwuXCIsXG59XG5cblxuZXhwb3J0IGNvbnN0IFNuaXBlcjogVG93ZXJDb25maWcgPSB7XG4gICAgJ25hbWUnOiBcIlNuaXBlclwiLFxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiA1MCArIDEyMCAqIChsZXZlbC0xKSxcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiA0MDAwLFxuICAgICdyYW5nZSc6IGxldmVsID0+IDIwMCArIDM1ICogbGV2ZWwsXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNSxcbiAgICAncHJpY2UnOiAxMCxcbiAgICAnc3ByaXRlQmFzZSc6IDAsXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXG4gICAgJ3Nwcml0ZVRvcCc6IDEsXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRNaWQnOiAweDNhNzE1ZCxcbiAgICAndGludFRvcCc6IDB4NDhhYzgxLFxuICAgICdkZXNjcmlwdGlvbic6IFwiTG9uZyByYW5nZSwgYnV0IGZpcmVzIHNsb3dseS4gRGFtYWdlIGFuZCByYW5nZSBncm93IHdpdGggbGV2ZWwuXCIsXG59XG5cblxuZXhwb3J0IGNvbnN0IE11bHRpc2hvdDogVG93ZXJDb25maWcgPSB7XG4gICAgJ25hbWUnOiBcIk11bHRpc2hvdFwiLFxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiAxNSArIDIwKihsZXZlbC0xKSxcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiAxMDAwLFxuICAgICdyYW5nZSc6IGxldmVsID0+IDk1ICsgMyoobGV2ZWwtMSksXG4gICAgJ251bVRhcmdldHMnOiBsZXZlbCA9PiAzICsgTWF0aC5mbG9vcihsZXZlbCAvIDIpLFxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXG4gICAgJ3ByaWNlJzogNyxcbiAgICAnc3ByaXRlQmFzZSc6IDAsXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXG4gICAgJ3Nwcml0ZVRvcCc6IDIsXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXG4gICAgJ3RpbnRNaWQnOiAweDdmNGQ2MSxcbiAgICAndGludFRvcCc6IDB4YWE0ZTYxLFxuICAgICdkZXNjcmlwdGlvbic6IFwiQ2FuIHNob290IGF0IG11bHRpcGxlIGVuZW1pZXMgYXQgb25jZS4gRGFtYWdlLCByYW5nZSwgYW5kIG51bWJlciBvZiB0YXJnZXRzIGdyb3cgd2l0aCBsZXZlbC5cIixcbn1cblxuZXhwb3J0IGNvbnN0IFRPV0VSX0NPTkZJR1MgPSBbQmFzaWMsIE11bHRpc2hvdCwgU25pcGVyXSIsIi8vIGltcG9ydCB7IEdyaWRQb3NpdGlvbiwgUG9zaXRpb24sIFRlcnJhaW4gfSBmcm9tIFwiLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgKiBhcyBjZmcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBIdWRTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9odWRTY2VuZVwiO1xuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL21ldGFTY2VuZVwiO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcbiAgICBzdGF0czogY2ZnLkVuZW15Q29uZmlnO1xuXG4gICAgZm9sbG93ZXI6IGFueVxuICAgIGhwOiBpbnRlZ2VyXG4gICAgeU9mZnNldDogbnVtYmVyID0gUGhhc2VyLk1hdGguUk5ELmludGVnZXJJblJhbmdlKC0yMCwgMjApO1xuICAgIHhPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcbiAgICBzY2VuZTogVERTY2VuZSAvLyB0eXBlIGFzc2VydGlvblxuICAgIHNwZWVkOiBudW1iZXI7XG5cblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBzdGF0cykge1xuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgc3RhdHMuc3ByaXRlTmFtZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0cyA9IHN0YXRzO1xuICAgICAgICB0aGlzLmZvbGxvd2VyID0geyB0OiAwLCB2ZWM6IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCkgfTtcblxuICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKCk7XG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUgPT0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWN0aXZlU2NlbmUpXG4gICAgICAgICAgICAgICAgKHRoaXMuc2NlbmUuc2NlbmUuZ2V0KCdodWRTY2VuZScpIGFzIEh1ZFNjZW5lKS5zZXREZXNjcmlwdGlvbkVuZW15KHRoaXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG4gICAgICAgIC8vIG1vdmUgdGhlIHQgcG9pbnQgYWxvbmcgdGhlIHBhdGgsIDAgaXMgdGhlIHN0YXJ0IGFuZCAxIGlzIHRoZSBlbmRcbiAgICAgICAgdGhpcy5mb2xsb3dlci50ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcblxuICAgICAgICAvLyBnZXQgdGhlIG5ldyB4IGFuZCB5IGNvb3JkaW5hdGVzIGluIHZlY1xuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcblxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA+IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudmVjLnggPCB0aGlzLnggLSB0aGlzLnhPZmZzZXQpIHtcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSB0cnVlXG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgZW5lbXkgeCBhbmQgeSB0byB0aGUgbmV3bHkgb2J0YWluZWQgeCBhbmQgeVxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZm9sbG93ZXIudmVjLnggKyB0aGlzLnhPZmZzZXQsIHRoaXMuZm9sbG93ZXIudmVjLnkgKyB0aGlzLnlPZmZzZXQpO1xuXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXRoLCByZW1vdmUgdGhlIGVuZW15XG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnQgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5yZWFjaEVuZCgpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFscGhhID0gMVxuICAgICAgICB0aGlzLmFuZ2xlID0gMFxuICAgICAgICB0aGlzLnNjYWxlID0gMVxuICAgIH1cblxuICAgIHJlYWNoRW5kKCkge1xuICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlbWFpbmluZ0RhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlcjtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBodWRTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwiaHVkU2NlbmVcIikgYXMgSHVkU2NlbmVcblxuICAgICAgICAgICAgUGxheWVySW5mby5ocCAtPSB0aGlzLnN0YXRzLmRhbWFnZTtcbiAgICAgICAgICAgIGh1ZFNjZW5lLmhwUmVkbmVzcyA9IDFcblxuICAgICAgICAgICAgY29uc3QgbWV0YVNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJtZXRhU2NlbmVcIikgYXMgTWV0YVNjZW5lXG4gICAgICAgICAgICBtZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKS5jYW1lcmFzLm1haW4uc2hha2UoMjAwLCAwLjAwNSlcbiAgICAgICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLmRhbWFnZVNvdW5kLnBsYXkoKTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZXNwYXduKHRoaXMuc3RhdHMsIHRoaXMuaHApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5lbmVteUVuZENhbGxiYWNrKHRoaXMuc3RhdHMuZGFtYWdlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRPblBhdGgod2F2ZSwgcmVzcGF3bkhlYWx0aCwgc3RhcnRfdCA9IDApIHtcbiAgICAgICAgLy8gc2V0IHRoZSB0IHBhcmFtZXRlciBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhdGhcbiAgICAgICAgdGhpcy5mb2xsb3dlci50ID0gc3RhcnRfdDtcblxuICAgICAgICBpZiAocmVzcGF3bkhlYWx0aCA+IDApXG4gICAgICAgICAgICB0aGlzLmhwID0gcmVzcGF3bkhlYWx0aDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMuc3RhdHMuaHAod2F2ZSk7XG5cbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3RhdHMuc3BlZWQ7XG4gICAgICAgIHRoaXMudGludCA9IHRoaXMuc3RhdHMudGludDtcblxuICAgICAgICAvLyBnZXQgeCBhbmQgeSBvZiB0aGUgZ2l2ZW4gdCBwb2ludFxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcblxuICAgICAgICAvLyBzZXQgdGhlIHggYW5kIHkgb2Ygb3VyIGVuZW15IHRvIHRoZSByZWNlaXZlZCBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5mb2xsb3dlci52ZWMueCwgdGhpcy5mb2xsb3dlci52ZWMueSk7XG5cbiAgICAgICAgbGV0IGZyYW1lUmF0ZSA9IE1hdGgubWluKDYwLCB0aGlzLnN0YXRzLnNwZWVkICogNDAwMDAgKiAxNSlcbiAgICAgICAgaWYgKHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJmYXRFbmVteVwiIHx8IHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJzcGxpdHRlckZhdEVuZW15XCIpIHsgLy8gaGFja1xuICAgICAgICAgICAgZnJhbWVSYXRlICo9IDAuNVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hbmltcy5wbGF5KHtcbiAgICAgICAgICAgIGtleTogYCR7dGhpcy5zdGF0cy5zcHJpdGVOYW1lfV93YWxrYCxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZnJhbWVSYXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlY2VpdmVEYW1hZ2UoZGFtYWdlOiBpbnRlZ2VyKSB7XG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlIC0gdGhpcy5zdGF0cy5hcm1vdXIodGhpcy5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZSk7XG5cbiAgICAgICAgLy8gaWYgaHAgZHJvcHMgYmVsb3cgMCB3ZSBkZWFjdGl2YXRlIHRoaXMgZW5lbXlcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMub25EZWF0aCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlYXRoKCkge1xuICAgICAgICB0aGlzLm9uRGVhdGhBYmlsaXR5KCk7XG4gICAgICAgIGlmICh0aGlzLnN0YXRzLnNwbGl0KVxuICAgICAgICAgICAgdGhpcy5vbkRlYXRoU3BsaXQoKVxuXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApIHsgIC8vIEFkZCBnb2xkIGluIGJhc2UgbGF5ZXIgb25seVxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLm1vbmV5ICs9IHRoaXMuc3RhdHMubW9uZXk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgICAgIGFscGhhOiAwLFxuICAgICAgICAgICAgYW5nbGU6IFBsYXllckluZm8uUk5HLnNpZ24oKSAqIDE4MCxcbiAgICAgICAgICAgIHNjYWxlOiAwLjUsXG4gICAgICAgICAgICBkdXJhdGlvbjogUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoNjAwLCA4MDApLFxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMidcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLmVuZW1pZXNTbGFpbisrO1xuICAgIH1cblxuICAgIG9uRGVhdGhTcGxpdCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdHMuc3BsaXQuYW1vdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXdFbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnN0YXRzLnNwbGl0LmNmZy5uYW1lXS5nZXQoKVxuICAgICAgICAgICAgbmV3RW5lbXkuc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgIG5ld0VuZW15LnNldEFjdGl2ZSh0cnVlKTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyIC09IHRoaXMuc3RhdHMuc3BsaXQuY2ZnLmRhbmdlcjtcbiAgICAgICAgICAgIG5ld0VuZW15LnN0YXJ0T25QYXRoKHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmUsIDAsIHRoaXMuZm9sbG93ZXIudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlYXRoQWJpbGl0eSgpIHsgIC8vIG92ZXJyaWRlIHRoaXMgZm9yIHNwZWNpYWwgb24tZGVhdGggYWJpbGl0aWVzXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2Vha0VuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLldlYWspXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmF0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuRmF0KVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFybW91cmVkRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuQXJtb3VyZWQpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRmFzdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkZhc3QpXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJCaWdFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlckJpZylcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdHRlclNtYWxsRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJTbWFsbClcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdHRlckZhdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyRmF0KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXG5pbXBvcnQgeyBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCJcblxuZXhwb3J0IGNsYXNzIEhlYWx0aEJhciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuICAgIHN0YXRpYyBIRUFMVEhfQ09MT1IgPSAweGY4ZmYzNiAvLzB4ZmY0NDQ0XG4gICAgc3RhdGljIEhFQUxUSF9MT1NTX0NPTE9SID0gMHg3ZDdkN2QgLy8gMHg0NGZmNDRcblxuICAgIHNjZW5lOiBURFNjZW5lXG5cbiAgICBwcml2YXRlIF9oZWFsdGg6IG51bWJlciA9IDEgIC8vIDAgdG8gMVxuICAgIHNsb3dIZWFsdGg6IG51bWJlclxuXG4gICAgYmdCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBoZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcbiAgICBzbG93SGVhbHRoQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXG5cbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICB3aWR0aDogbnVtYmVyXG4gICAgbWF4SGVhbHRoOiBudW1iZXJcblxuICAgIGNvbnN0cnVjdG9yKHNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKVxuICAgIH1cblxuICAgIG1ha2UoeCwgeSwgd2lkdGgsIGhlYWx0aD0wKSB7XG4gICAgICAgIHRoaXMueCA9IHhcbiAgICAgICAgdGhpcy55ID0geVxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcblxuICAgICAgICAvLyBoZWFsdGggYmFyIGJhc2UvYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmJnQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoICsgNCwgNiwgMHgwMDAwMDApXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYmdCYXIpXG5cbiAgICAgICAgLy8gdmlzdWFsaXphdGlvbiBvZiBoZWFsdGggbG9zc2VzXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICB3aWR0aCwgNCxcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfTE9TU19DT0xPUixcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLnNsb3dIZWFsdGhCYXIpXG4gICAgICAgIFxuICAgICAgICAvLyBoZWFsdGggYmFyIGl0c2VsZlxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcbiAgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICB3aWR0aCwgNCxcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfQ09MT1IsXG4gICAgICAgIClcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXG5cbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGhcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gaGVhbHRoXG4gICAgfVxuXG4gICAgc2V0IGhlYWx0aChoKSB7XG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGgpKVxuICAgIH1cblxuICAgIGdldCBoZWFsdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGhcbiAgICB9XG5cbiAgICBwdWJsaWMgbGV2ZWxVcCgpIHtcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gMDtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZShkZWx0YSkge1xuICAgICAgICBjb25zdCBjb2VmID0gTWF0aC5wb3coMC45OSwgZGVsdGEvMTAwMCAqIDYwKVxuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSBjb2VmICogdGhpcy5zbG93SGVhbHRoICsgKDEgLSBjb2VmKSAqIHRoaXMuaGVhbHRoXG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5oZWFsdGhcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyLndpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuc2xvd0hlYWx0aFxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xuaW1wb3J0IHsgSHVkU2NlbmUsIEhVRF9XSURUSCB9IGZyb20gJy4vc2NlbmVzL2h1ZFNjZW5lJztcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21ldGFTY2VuZSc7XG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZSdcbmltcG9ydCB7IFREU2NlbmVDb25maWcgfSBmcm9tICcuL3NjZW5lcy90ZFNjZW5lQ29uZmlnJztcbmltcG9ydCB7IFRlcnJhaW4gfSBmcm9tICcuL3RlcnJhaW4nO1xuXG5sZXQgbWV0YVNjZW5lID0gbmV3IE1ldGFTY2VuZSgpXG5sZXQgaHVkU2NlbmUgPSBuZXcgSHVkU2NlbmUobWV0YVNjZW5lKTtcblxubGV0IGxldmVscyA9IFtcbiAgbWV0YVNjZW5lLFxuICBodWRTY2VuZSxcbl1cblxuY29uc3QgZ2FtZUNvbmZpZyA9IHtcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIHBhcmVudDogJ2NvbnRlbnQnLFxuICB3aWR0aDogVERfU0NFTkVfV0lEVEggKyBIVURfV0lEVEggKiAyLFxuICBoZWlnaHQ6IFREX1NDRU5FX0hFSUdIVCxcbiAgcGh5c2ljczoge1xuICAgIGRlZmF1bHQ6ICdhcmNhZGUnXG4gIH0sXG4gIHNjZW5lOiBsZXZlbHMsXG4gIHNlZWQ6IFtcIjQyXCJdXG59O1xuXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBQTEFZRVJfSEVBTFRIX1JFR0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbmZvIHtcbiAgICBzdGF0aWMgbW9uZXk6IG51bWJlciA9IDEwO1xuICAgIHN0YXRpYyBocDogbnVtYmVyID0gMTA7XG4gICAgc3RhdGljIHRpbWVTY2FsZTogbnVtYmVyID0gMTtcbiAgICAvLyBzdGF0aWMgUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoW1wiNDJcIl0pO1xuICAgIHN0YXRpYyBSTkcgPSBuZXcgUGhhc2VyLk1hdGguUmFuZG9tRGF0YUdlbmVyYXRvcigpO1xuXG4gICAgc3RhdGljIHJlZ2VuUHJvZ3Jlc3M6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIHdhdmVIZWFsdGhSZWdlbigpIHtcbiAgICAgICAgUGxheWVySW5mby5yZWdlblByb2dyZXNzICs9IFBMQVlFUl9IRUFMVEhfUkVHRU47XG4gICAgICAgIGxldCByZXN0b3JlZCA9IE1hdGguZmxvb3IoUGxheWVySW5mby5yZWdlblByb2dyZXNzKTtcbiAgICAgICAgUGxheWVySW5mby5ocCArPSByZXN0b3JlZDtcbiAgICAgICAgUGxheWVySW5mby5yZWdlblByb2dyZXNzIC09IHJlc3RvcmVkO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZVxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICBrZXk6IFwiZ2FtZU92ZXJTY2VuZVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoNTEyLCAyNTYsIDEwMjQsIDUxMiwgMHhhYTQ0NDQsIDAuNSk7XG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSg1MTIsIDI1Ni00MCwgNTEyLTEyOCwgMjU2LTY0LCAweDQ0NDQ0NCk7XG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAxNjAsIFwiWU9VIERJRURcIiwge2ZvbnRTaXplOiAnMzBweCBib2xkJywgY29sb3I6IFwicmVkXCJ9KS5zZXRPcmlnaW4oMC41KTtcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDE5MCwgYExhc3Qgd2F2ZSB3aXRuZXNzZWQ6ICR7dGhpcy5tZXRhU2NlbmUuZ2V0Um9vdFREU2NlbmUoKS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZX1gKS5zZXRPcmlnaW4oMC41KTtcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIxMCwgYFdlYWx0aCB0YWtlbiB0byB0aGUgZ3JhdmU6ICR7UGxheWVySW5mby5tb25leX1gKS5zZXRPcmlnaW4oMC41KTtcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIzMCwgYEludmFkZXJzIHZhbnF1aXNoZWQ6ICR7dGhpcy5tZXRhU2NlbmUuZW5lbWllc1NsYWlufWApLnNldE9yaWdpbigwLjUpO1xuXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAyODAsIGBDTElDSyBUTyBEQVJFIEFHQUlOYCkuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgIH1cblxuICAgIGN1cnJlbnRUaW1lID0gMDtcbiAgICByZWxvYWRlZCA9IGZhbHNlO1xuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhXG4gICAgfVxuXG5cblxufSIsImltcG9ydCB7IFRvd2VyQ29uZmlnLCBUT1dFUl9DT05GSUdTLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLCBFbmVteUNvbmZpZywgV2F2ZUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuLi9lbmVteVwiO1xuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBNQVhfSEVJR0hULCBNQVhfV0lEVEgsIFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuLi90b3dlcnNcIjtcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xuaW1wb3J0IHsgVERTY2VuZSwgVERfU0NFTkVfSEVJR0hULCBURF9TQ0VORV9XSURUSCB9IGZyb20gXCIuL3RkU2NlbmVcIjtcblxuY29uc3QgSFVEX0JHX0NPTE9SID0gMHhmZjhhNmQgIC8vMHhmZmFhN2RcbmV4cG9ydCBjb25zdCBIVURfV0lEVEggPSBUSUxFX1NJWkUgKiAzXG5cbmV4cG9ydCBjbGFzcyBIdWRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG5cbiAgICBtb25leVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgd2F2ZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG4gICAgaHBUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuICAgIGhwUmVkbmVzczogbnVtYmVyIC8vIDAgdG8gMVxuICAgIGRlcHRoVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBnb1VwVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBkZXNjcmlwdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XG5cbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZTtcbiAgICBiYWNrVG9Sb290U2NlbmVCdXR0b246IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xuICAgIGJ1eVRvd2VySWNvbnM6IEJ1eVRvd2VySWNvbltdXG5cbiAgICBsYXN0QWN0aXZlU2NlbmU6IFREU2NlbmVcbiAgICBwYXJlbnRTY2VuZXNJbWFnZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVtdXG4gICAgc2xvd1NwZWVkVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG4gICAgZmFzdFNwZWVkVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XG5cbiAgICBjb25zdHJ1Y3RvcihtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGtleTogXCJodWRTY2VuZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICBsZXQgdyA9IEhVRF9XSURUSFxuICAgICAgICBsZXQgaCA9IFRJTEVfU0laRSAqIE1BWF9IRUlHSFRcbiAgICAgICAgY29uc3QgeExlZnQgPSB3IC8gMlxuICAgICAgICBjb25zdCB4UmlnaHQgPSB3ICsgVERfU0NFTkVfV0lEVEggKyB3IC8gMlxuXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSh3IC8gMiwgaCAvIDIsIHcsIGgsIEhVRF9CR19DT0xPUilcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKFxuICAgICAgICAgICAgeFJpZ2h0LCBoIC8gMixcbiAgICAgICAgICAgIHcsIGgsXG4gICAgICAgICAgICBIVURfQkdfQ09MT1IsXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLm1vbmV5VGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDIwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMubW9uZXlUZXh0LnNldE9yaWdpbigwLjUpXG4gICAgICAgIHRoaXMuaHBUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNDAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5ocFJlZG5lc3MgPSAwXG5cbiAgICAgICAgdGhpcy53YXZlVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDYwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMud2F2ZVRleHQuc2V0T3JpZ2luKDAuNSlcblxuICAgICAgICB0aGlzLmRlcHRoVGV4dCA9IHRoaXMuYWRkLnRleHQoeFJpZ2h0LCAyMCwgXCJEZXB0aDogXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0T3JpZ2luKDAuNSlcblxuICAgICAgICB0aGlzLmdvVXBUZXh0ID0gdGhpcy5hZGQudGV4dCh4UmlnaHQsIDUwLCBcIkdvIHVwIHRvOlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRWaXNpYmxlKGZhbHNlKVxuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0ID0gdGhpcy5hZGQudGV4dCg1LCAzMDAsIFwiXCIsIHsgZm9udFNpemU6ICcxMHB0JyB9KTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0V29yZFdyYXBXaWR0aChIVURfV0lEVEggLSAxMCwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucyA9IFtdO1xuICAgICAgICBsZXQgdG93ZXJUeXBlSW5kZXggPSAwO1xuICAgICAgICBmb3IgKGxldCB0b3dlckNvbmZpZyBvZiBUT1dFUl9DT05GSUdTKSB7XG4gICAgICAgICAgICB0aGlzLmJ1eVRvd2VySWNvbnMucHVzaChuZXcgQnV5VG93ZXJJY29uKHRoaXMsIHcgLyAyLCAxMTAgKyA3MCAqIHRvd2VyVHlwZUluZGV4LCB0b3dlckNvbmZpZykpXG4gICAgICAgICAgICB0b3dlclR5cGVJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGFkID0gM1xuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NTAsIFwiPlNsb3c8XCIsIHtcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NzUsIFwiRmFzdFwiLCB7XG4gICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gMSwgbnVsbFxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCI+U2xvdzxcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiRmFzdFwiKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgICAgICAgUGxheWVySW5mby50aW1lU2NhbGUgPSA0LCBudWxsXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIlNsb3dcIilcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiPkZhc3Q8XCIpXG4gICAgICAgIH0pXG5cblxuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG4gICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzID0gW11cbiAgICB9XG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgaWYgKHRoaXMubWV0YVNjZW5lLmlzR2FtZU92ZXIpe1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpXG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YTtcblxuICAgICAgICB0aGlzLm1vbmV5VGV4dC5zZXRUZXh0KCdNb25leTogJyArIFBsYXllckluZm8ubW9uZXkpXG5cbiAgICAgICAgY29uc3QgY3VycmVudFdhdmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRSb290VERTY2VuZSgpLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlXG4gICAgICAgIHRoaXMud2F2ZVRleHQuc2V0VGV4dChgV2F2ZTogJHtjdXJyZW50V2F2ZX1gKVxuXG4gICAgICAgIHRoaXMuaHBUZXh0LnNldFRleHQoJ0hQOiAnICsgUGxheWVySW5mby5ocClcblxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRDb2xvcihQaGFzZXIuRGlzcGxheS5Db2xvci5SR0JUb1N0cmluZyhcbiAgICAgICAgICAgIDI1NSwgMjU1ICogKDEgLSB0aGlzLmhwUmVkbmVzcyksIDI1NSAqICgxIC0gdGhpcy5ocFJlZG5lc3MpXG4gICAgICAgICkpXG4gICAgICAgIGNvbnN0IHNlY3NUb1doaXRlID0gMC41XG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5ocFJlZG5lc3MgLSBkZWx0YSAvIDEwMDAgLyBzZWNzVG9XaGl0ZSlcblxuICAgICAgICB0aGlzLnVwZGF0ZUluZm9CYXNlZE9uQWN0aXZlU2NlbmUoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGljb24gb2YgdGhpcy5idXlUb3dlckljb25zKSB7XG4gICAgICAgICAgICBpY29uLnVwZGF0ZSh0aGlzLmxhc3RUaW1lLCBkZWx0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmhwIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLmdhbWVPdmVyKClcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICB1cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCkge1xuICAgICAgICBsZXQgYWN0aXZlU2NlbmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpO1xuICAgICAgICBpZiAoIWFjdGl2ZVNjZW5lKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoYWN0aXZlU2NlbmUgPT0gdGhpcy5sYXN0QWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdGhpcy5sYXN0QWN0aXZlU2NlbmUgPSBhY3RpdmVTY2VuZTtcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0VGV4dChgRGVwdGg6ICR7YWN0aXZlU2NlbmUuc2NlbmVMZXZlbH1gKVxuXG4gICAgICAgIGNvbnN0IHBhcmVudFNjZW5lcyA9IHRoaXMubWV0YVNjZW5lLmdldFBhcmVudFNjZW5lc1RvUm9vdCgpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUocGFyZW50U2NlbmVzLmxlbmd0aCA+IDApXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudFNjZW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IHNjZW5lSW5kZXggPSAocGFyZW50U2NlbmVzLmxlbmd0aCAtIDEpIC0gaTtcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDAuMVxuICAgICAgICAgICAgY29uc3QgbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQgPSA3O1xuICAgICAgICAgICAgaWYgKHBhcmVudFNjZW5lcy5sZW5ndGggPiBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkge1xuICAgICAgICAgICAgICAgIHNjYWxlIC89ICgocGFyZW50U2NlbmVzLmxlbmd0aCAvIG1heEltYWdlc05vcm1hbFNjYWxlRml0KSAqIDEuMDIyKSAvLyBOT1RFOiBEcmlmdHMsIGhlbmNlIHJlLXNjYWxlIGJ5IHRoaXMgbWFnaWMgbnVtYmVyLCBpZGsgd2h5OyBubyB0aW1lIHRvIGZpZ3VyZSBvdXRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IG5ld0J1dHRvbiA9IHRoaXMuYWRkLmltYWdlKFxuICAgICAgICAgICAgICAgIFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMS41LFxuICAgICAgICAgICAgICAgIDEwMCArIHNjZW5lSW5kZXggKiBzY2FsZSAqIFREX1NDRU5FX0hFSUdIVCAqIDEuMixcbiAgICAgICAgICAgICAgICBgc25hcC0ke3BhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXl9YFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVggPSBzY2FsZVxuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWSA9IHNjYWxlXG4gICAgICAgICAgICBuZXdCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAgICAgICAgIG5ld0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXksIGZhbHNlKSwgdGhpcy5tZXRhU2NlbmUpXG4gICAgICAgICAgICB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5wdXNoKFxuICAgICAgICAgICAgICAgIG5ld0J1dHRvblxuICAgICAgICAgICAgKVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvblRvd2VyKGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyOiBUb3dlciA9IG51bGwpIHtcbiAgICAgICAgbGV0IGxldmVsID0gMVxuICAgICAgICBsZXQgdGV4dCA9IFwiXCJcblxuICAgICAgICBpZiAodG93ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRleHQgPSBgJHtjb25maWcubmFtZX06ICR7Y29uZmlnLmRlc2NyaXB0aW9ufVxcbmBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRleHQgPSBgTGV2ZWwgJHt0b3dlci5sZXZlbH0gJHtjb25maWcubmFtZX0gdG93ZXIuXFxuYFxuICAgICAgICAgICAgbGV2ZWwgPSB0b3dlci5sZXZlbFxuICAgICAgICB9XG5cbiAgICAgICAgdGV4dCArPSBgRGFtYWdlOiAke2NvbmZpZy5kYW1hZ2UobGV2ZWwpfS5cXG5gXG4gICAgICAgIHRleHQgKz0gYEZpcmUgcmF0ZTogJHtjb25maWcuZmlyZXJhdGUobGV2ZWwpLzEwMDB9cy5cXG5gXG4gICAgICAgIHRleHQgKz0gYFJhbmdlOiAke2NvbmZpZy5yYW5nZShsZXZlbCl9LlxcbmBcblxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRUZXh0KHRleHQpXG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb25FbmVteShlbmVteTogRW5lbXlCYXNlKSB7XG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIlxuICAgICAgICBpZiAoZW5lbXkpIHtcbiAgICAgICAgICAgIGxldCB3YXZlOiBpbnRlZ2VyO1xuICAgICAgICAgICAgaWYodGhpcy5tZXRhU2NlbmUuYWN0aXZlU2NlbmUuc2NlbmVMZXZlbCA9PT0gMClcbiAgICAgICAgICAgICAgICB3YXZlID0gZW5lbXkuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmU7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgd2F2ZSA9IFdhdmVDb25maWcubGV2ZWxUb1dhdmUodGhpcy5tZXRhU2NlbmUuYWN0aXZlU2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbCk7XG5cbiAgICAgICAgICAgIHRleHQgKz0gYCR7ZW5lbXkuc3RhdHMuZGlzcGxheU5hbWV9XFxuYDtcbiAgICAgICAgICAgIHRleHQgKz0gYEhlYWx0aDogJHtlbmVteS5ocH0vJHtlbmVteS5zdGF0cy5ocCh3YXZlKX1cXG5gO1xuICAgICAgICAgICAgdGV4dCArPSBgQXJtb3VyOiAke2VuZW15LnN0YXRzLmFybW91cih3YXZlKX1cXG5gO1xuICAgICAgICAgICAgdGV4dCArPSBgU3BlZWQ6ICR7ZW5lbXkuc3BlZWQgKiA2MDAwMH1cXG5gO1xuICAgICAgICAgICAgdGV4dCArPSBgTG9vdDogJHtlbmVteS5zdGF0cy5tb25leX1cXG5gO1xuICAgICAgICAgICAgaWYoZW5lbXkuc3RhdHMuYmx1cmIpXG4gICAgICAgICAgICAgICAgdGV4dCArPSBgXFxuJHtlbmVteS5zdGF0cy5ibHVyYn1cXG5gO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFRleHQodGV4dClcbiAgICB9XG59XG5cbmNsYXNzIEJ1eVRvd2VySWNvbiB7XG4gICAgdG93ZXJOYW1lOiBzdHJpbmdcbiAgICB0b3dlckNvbmZpZzogVG93ZXJDb25maWdcblxuICAgIHNwcml0ZUNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxuICAgIHByaWNlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcbiAgICBodWRTY2VuZTogSHVkU2NlbmVcblxuICAgIG9yaWdYOiBudW1iZXJcbiAgICBvcmlnWTogbnVtYmVyXG5cbiAgICBjb25zdHJ1Y3RvcihodWRTY2VuZTogSHVkU2NlbmUsIHgsIHksIGNvbmZpZykge1xuICAgICAgICB0aGlzLmh1ZFNjZW5lID0gaHVkU2NlbmVcbiAgICAgICAgdGhpcy5vcmlnWCA9IHhcbiAgICAgICAgdGhpcy5vcmlnWSA9IHlcbiAgICAgICAgdGhpcy50b3dlck5hbWUgPSBjb25maWcubmFtZVxuICAgICAgICB0aGlzLnRvd2VyQ29uZmlnID0gY29uZmlnXG5cbiAgICAgICAgbGV0IHRvd2VyQmFzZSA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VyYmFzZXMnLCBjb25maWcuc3ByaXRlQmFzZSk7XG4gICAgICAgIHRvd2VyQmFzZS5zZXRUaW50KGNvbmZpZy50aW50QmFzZSk7XG4gICAgICAgIGxldCB0b3dlck1pZCA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VybWlkcycsIGNvbmZpZy5zcHJpdGVNaWQpO1xuICAgICAgICB0b3dlck1pZC5zZXRUaW50KGNvbmZpZy50aW50TWlkKTtcbiAgICAgICAgbGV0IHRvd2VyVG9wID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJ0b3BzJywgY29uZmlnLnNwcml0ZVRvcCk7XG4gICAgICAgIHRvd2VyVG9wLnNldFRpbnQoY29uZmlnLnRpbnRUb3ApO1xuXG4gICAgICAgIGxldCB0b3dlclJhbmdlID0gaHVkU2NlbmUuYWRkLmNpcmNsZShcbiAgICAgICAgICAgIDAsIDAsIGNvbmZpZy5yYW5nZSgxKSxcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuY29sb3VyLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5hbHBoYVxuICAgICAgICApO1xuICAgICAgICB0b3dlclJhbmdlLnNldFN0cm9rZVN0eWxlKFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VDb2xvdXJcbiAgICAgICAgKTtcbiAgICAgICAgdG93ZXJSYW5nZS5zZXRWaXNpYmxlKGZhbHNlKTtcblxuICAgICAgICB2YXIgc3ByaXRlcyA9IFtcbiAgICAgICAgICAgIHRvd2VyQmFzZSxcbiAgICAgICAgICAgIHRvd2VyTWlkLFxuICAgICAgICAgICAgdG93ZXJUb3AsXG4gICAgICAgICAgICB0b3dlclJhbmdlLFxuICAgICAgICBdXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyID0gaHVkU2NlbmUuYWRkLmNvbnRhaW5lcih4LCB5LCBzcHJpdGVzKVxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5nZXRBbGwoKVxuXG4gICAgICAgIGNvbnN0IHBhZCA9IDNcbiAgICAgICAgdGhpcy5wcmljZVRleHQgPSBodWRTY2VuZS5hZGQudGV4dChcbiAgICAgICAgICAgIHggKyAxNSwgeSwgXCJcIiArIHRoaXMudG93ZXJDb25maWcucHJpY2UsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRTaXplKFRJTEVfU0laRSwgVElMRV9TSVpFKTtcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuc2V0SW50ZXJhY3RpdmUoKVxuICAgICAgICAvLyB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IGNvbnNvbGUubG9nKFwiZm9vYmFyXCIpLCB0aGlzKTtcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyKVxuXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUuc2V0RGVzY3JpcHRpb25Ub3dlcihjb25maWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgcmFuZ2UgaW5kaWNhdG9yIHZpc2libGVcbiAgICAgICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzNdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSkuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICAgICAgZ2FtZU9iamVjdC5saXN0LmZvckVhY2goKHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkgPT4ge1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZycsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpIHtcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxuXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IGRyYWdZO1xuXG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZ2VuZCcsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cblxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUubWV0YVNjZW5lLmJ1aWxkU291bmQucGxheSgpO1xuXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGh1ZFNjZW5lLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpXG4gICAgICAgICAgICBzY2VuZS50b3dlck1hbmFnZXIucGxhY2VUb3dlcihwb2ludGVyLCB0aGlzLnRvd2VyTmFtZSk7XG5cbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IHRoaXMub3JpZ1hcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IHRoaXMub3JpZ1lcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmVzZXRUaW50KCkge1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzJdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50VG9wKTtcbiAgICB9XG5cbiAgICBzZXRTaG9wSWNvblRpbnQodGludDogbnVtYmVyKSB7XG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzBdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRNaWQpO1xuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsyXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRUb3ApO1xuICAgIH1cblxuICAgIHVwZGF0ZVNob3AoKSB7XG4gICAgICAgIC8vIFVuY29tbWVudCB0byBwcmV2ZW50IG5lZ2F0aXZlIG1vbmV5OlxuICAgICAgICB0aGlzLmh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lciwgUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKVxuXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHgwMGZmMDApO1xuICAgICAgICAgICAgdGhpcy5yZXNldFRpbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHhmZjAwMDApO1xuICAgICAgICAgICAgdGhpcy5zZXRTaG9wSWNvblRpbnQoMHg5OTU1NTUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb2xkTW9uZXk6IGludGVnZXIgPSAwXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLm1vbmV5ICE9IHRoaXMub2xkTW9uZXkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xuICAgICAgICAgICAgdGhpcy5vbGRNb25leSA9IFBsYXllckluZm8ubW9uZXk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQge1RlcnJhaW59IGZyb20gXCIuLi90ZXJyYWluXCJcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tIFwiLi9nYW1lT3ZlclNjZW5lXCI7XG5pbXBvcnQge1NDRU5FX1RSQU5TSVRJT05fTVMsIFREU2NlbmV9IGZyb20gXCIuL3RkU2NlbmVcIjtcbmltcG9ydCB7VERTY2VuZUNvbmZpZ30gZnJvbSBcIi4vdGRTY2VuZUNvbmZpZ1wiXG5cbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xuICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIGtleTogJ21ldGFTY2VuZScsXG59O1xuXG5leHBvcnQgY2xhc3MgTWV0YVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcblxuICAgIHB1YmxpYyBzY2VuZXM6IFREU2NlbmVbXVxuICAgIHB1YmxpYyBhY3RpdmVTY2VuZTogVERTY2VuZVxuICAgIG1haW5Tb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcblxuICAgIC8vIFdoeSBhcmUgdGhlc2Ugc291bmRzIGhlcmU/IEJlY2F1c2Ugd2UncmUgb3V0IG9mIHRpbWVcbiAgICBidWlsZFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuICAgIGRhbWFnZVNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuICAgIHNob290U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG4gICAgbXVsdGlzaG90U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XG4gICAgbGV2ZWx1cFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xuXG4gICAgZW5lbWllc1NsYWluOiBpbnRlZ2VyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XG4gICAgICAgIHRoaXMuc2NlbmVzID0gW107XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcblxuICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lID0gdGhpcy5hZGRTY2VuZSgpO1xuICAgICAgICB0aGlzLnNjZW5lc1swXS5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KFwiaHVkU2NlbmVcIik7XG5cbiAgICAgICAgdGhpcy5tYWluU291bmQgPSB0aGlzLnNvdW5kLmFkZChcIm1haW5fbXVzaWNcIiwge1wibG9vcFwiOiB0cnVlLCBcInZvbHVtZVwiOiAwLjA3fSk7XG4gICAgICAgIHRoaXMubWFpblNvdW5kLnBsYXkoKTtcblxuICAgICAgICB0aGlzLmJ1aWxkU291bmQgPSB0aGlzLnNvdW5kLmFkZCgnYnVpbGRfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAxfSk7XG4gICAgICAgIHRoaXMuZGFtYWdlU291bmQgPSB0aGlzLnNvdW5kLmFkZCgnZGFtYWdlX3NvdW5kJywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4xNX0pO1xuICAgICAgICB0aGlzLnNob290U291bmQgPSB0aGlzLnNvdW5kLmFkZCgnc2hvb3Rfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjAzfSk7XG4gICAgICAgIHRoaXMubXVsdGlzaG90U291bmQgPSB0aGlzLnNvdW5kLmFkZCgnbXVsdGlzaG90X3NvdW5kJywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4wM30pO1xuICAgICAgICB0aGlzLmxldmVsdXBTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdsZXZlbHVwX3NvdW5kJywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4wMn0pO1xuICAgIH1cblxuICAvLyBDcmVhdGVzIG5ldyBTY2VuZSwgZW5hYmxlcyBpdCwgYW5kIHNldHMgaXQgaW52aXNpYmxlXG4gICAgcHVibGljIGFkZFNjZW5lKHBhcmVudFNjZW5lS2V5Pzogc3RyaW5nKTogVERTY2VuZSB7XG4gICAgICAgIGxldCBwYXJlbnRTY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShwYXJlbnRTY2VuZUtleSlcbiAgICAgICAgbGV0IHNjZW5lTGV2ZWwgPSAocGFyZW50U2NlbmU/LnNjZW5lTGV2ZWwgPz8gLTEpICsgMTtcblxuICAgICAgICBsZXQgc2NlbmVJbmRleCA9IHRoaXMuc2NlbmVzLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc2NlbmVLZXkgPSBgdGRTY2VuZSR7c2NlbmVJbmRleH1gXG5cbiAgICAgICAgbGV0IG5ld1NjZW5lID0gbmV3IFREU2NlbmUoXG4gICAgICAgICAgICBuZXcgVERTY2VuZUNvbmZpZyhuZXcgVGVycmFpbigxMCwgOCksIHNjZW5lTGV2ZWwsIHBhcmVudFNjZW5lS2V5LCBzY2VuZUtleSksXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKFxuICAgICAgICAgICAgc2NlbmVLZXksXG4gICAgICAgICAgICBuZXdTY2VuZSxcbiAgICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zY2VuZXMucHVzaChuZXdTY2VuZSlcbiAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNjZW5lKSB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AodGhpcy5hY3RpdmVTY2VuZS5zY2VuZS5rZXkpO1xuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1NjZW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRTY2VuZUJ5S2V5KGtleT86IHN0cmluZyk6IFREU2NlbmUgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXQoa2V5KSBhcyBURFNjZW5lXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIG1ha2VzIGN1cnJlbnQgc2NlbmUgaW52aXNpYmxlLCBtYWtlcyBuZXcgc2NlbmUgdmlzaWJsZTsgZG9lc24ndCBjaGFuZ2UgYWN0aXZuZXNzXG4gICAgcHVibGljIHN3aXRjaFRvU2NlbmUobmV3U2NlbmVLZXk6IHN0cmluZywgZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGkgPSAwLCBqID0gMCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lPy5zZXRJc0ZvcmVncm91bmQoZmFsc2UsIGdvaW5nSW5zaWRlLCBpLCBqKTtcbiAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KG5ld1NjZW5lS2V5KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYFN3aXRjaGluZyBmcm9tICR7dGhpcy5hY3RpdmVTY2VuZS5zY2VuZS5rZXl9IChwYXJlbnQgJHt0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lUGFyZW50S2V5fSkgdG9gXG4gICAgICAgICAgICArIGAgJHtuZXdTY2VuZS5zY2VuZS5rZXl9IChwYXJlbnQgJHtuZXdTY2VuZS5zY2VuZVBhcmVudEtleX0pYFxuICAgICAgICApXG5cbiAgICAgICAgbmV3U2NlbmUudGltZS5hZGRFdmVudCh7XG4gICAgICAgICAgICBkZWxheTogU0NFTkVfVFJBTlNJVElPTl9NUyxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lPy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKVxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNjZW5lLnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lID0gbmV3U2NlbmVcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zZXRJc0ZvcmVncm91bmQodHJ1ZSwgZ29pbmdJbnNpZGUsIGksIGopO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcChuZXdTY2VuZUtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIC8vIDEuMDU5NDYzMDk0MzYgfiAyXigxLzEyKSwgaS5lLiBvbmUgc2VtaXRvbmVcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRSYXRlKDEgLyAoTWF0aC5wb3coMS4wNTk0NjMwOTQzNiwgbmV3U2NlbmUuc2NlbmVMZXZlbCkpKVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgcHVibGljIGdhbWVPdmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcil7XG4gICAgICAgICAgICB0aGlzLnNvdW5kLnNldFJhdGUoMSAvIChNYXRoLnBvdygxLjA1OTQ2MzA5NDM2LCAxNSkpKVxuXG4gICAgICAgICAgICB0aGlzLmlzR2FtZU92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGdhbWVPdmVyU2NlbmUgPSB0aGlzLnNjZW5lLmFkZChcImdhbWVPdmVyU2NlbmVcIiwgbmV3IEdhbWVPdmVyU2NlbmUodGhpcykpXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KGdhbWVPdmVyU2NlbmUpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTY2VuZS5zY2VuZS5wYXVzZSgpXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xuICAgICAgICAvLyBsb2FkIHRoZSBnYW1lIGFzc2V0c1xuICAgICAgICB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnYXNzZXRzLycpXG5cbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd3ZWFrRW5lbXknLCAnZW5lbXkucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmYXN0RW5lbXknLCAnZW5lbXlfZmFzdC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2FybW91cmVkRW5lbXknLCAnZW5lbXlfYXJtb3JlZC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyQmlnRW5lbXknLCAnZW5lbXlfc3BsaXRfYmlnLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJTbWFsbEVuZW15JywgJ2VuZW15X3NwbGl0X3NtYWxsLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZmF0RW5lbXknLCAnZW5lbXlfY2hvbmsucG5nJywge2ZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogNTZ9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcGxpdHRlckZhdEVuZW15JywgJ2VuZW15X3NwbGl0X2Nob25rLnBuZycsIHtmcmFtZVdpZHRoOiA1NiwgZnJhbWVIZWlnaHQ6IDU2fSk7XG5cbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnYnVsbGV0LnBuZycpO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3RpbGVzZXQnLFxuICAgICAgICAgICAgJ3RpbGVzZXQucG5nJyxcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VydG9wcycsXG4gICAgICAgICAgICAndG93ZXJ0b3AucG5nJyxcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxuICAgICAgICApXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJtaWRzJyxcbiAgICAgICAgICAgICd0b3dlcm1pZC5wbmcnLFxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcmJhc2VzJyxcbiAgICAgICAgICAgICd0b3dlcmJhc2UucG5nJyxcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxuICAgICAgICApXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGVfcmVkJywgJ3BhcnRpY2xlX3JlZC5wbmcnKTtcblxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3BvcnRhbEZyb20nLCAncG9ydGFsX2Zyb20ucG5nJywge2ZyYW1lV2lkdGg6IDQwLCBmcmFtZUhlaWdodDogNDB9KTtcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0YWxUbycsICdwb3J0YWxfdG8ucG5nJywge2ZyYW1lV2lkdGg6IDQwLCBmcmFtZUhlaWdodDogNDB9KTtcblxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oXCJtYWluX211c2ljXCIsIFwiZ2FtZWphbV9MRDQ4Lm9nZ1wiKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWlsZF9zb3VuZCcsICdidWlsZC53YXYnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdkYW1hZ2Vfc291bmQnLCAnZGFtYWdlLndhdicpO1xuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ3Nob290X3NvdW5kJywgJ3R1cnJldHNob3Qud2F2Jyk7XG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbXVsdGlzaG90X3NvdW5kJywgJ211bHRpc2hvdC53YXYnKTtcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdsZXZlbHVwX3NvdW5kJywgJ2xldmVsdXAud2F2Jyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQW5pbWF0aW9ucygpIHsgLy8gVE9ETzogTWFrZSB0aGlzIG5vdCBkdW1iIGFuZCB1Z2x5XG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcbiAgICAgICAgICAgIGtleTogJ3dlYWtFbmVteV93YWxrJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnd2Vha0VuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdmYXN0RW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2Zhc3RFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAnZmF0RW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2ZhdEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDl9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdzcGxpdHRlckZhdEVuZW15X3dhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdzcGxpdHRlckZhdEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDl9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdhcm1vdXJlZEVuZW15X3dhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdhcm1vdXJlZEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdzcGxpdHRlckJpZ0VuZW15X3dhbGsnLFxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdzcGxpdHRlckJpZ0VuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICdzcGxpdHRlclNtYWxsRW5lbXlfd2FsaycsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NwbGl0dGVyU21hbGxFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAncG9ydGFsRnJvbV9zcGluJyxcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncG9ydGFsRnJvbScsIHtzdGFydDogMCwgZW5kOiA3fSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxuICAgICAgICAgICAgcmVwZWF0OiAtMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xuICAgICAgICAgICAga2V5OiAncG9ydGFsVG9fc3BpbicsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BvcnRhbFRvJywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XG4gICAgICAgICAgICBrZXk6ICd0b3dlck1pZHNfc3BpbicsXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3Rvd2VybWlkcycsIHtzdGFydDogMCwgZW5kOiAxfSksXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDUsXG4gICAgICAgICAgICByZXBlYXQ6IC0xXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEFjdGl2ZVNjZW5lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVTY2VuZTtcbiAgICB9XG5cbiAgICBnZXRQYXJlbnRTY2VuZXNUb1Jvb3QoKSB7XG4gICAgICAgIGxldCBwYXJlbnRTY2VuZXM6IFREU2NlbmVbXSA9IFtdXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0QWN0aXZlU2NlbmUoKTtcblxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50S2V5KSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHNjZW5lLnNjZW5lUGFyZW50S2V5KVxuICAgICAgICAgICAgcGFyZW50U2NlbmVzLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgIHNjZW5lID0gcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudFNjZW5lcztcbiAgICB9XG5cbiAgICBnZXRSb290VERTY2VuZSgpIHtcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRBY3RpdmVTY2VuZSgpO1xuXG4gICAgICAgIHdoaWxlIChzY2VuZT8uc2NlbmVQYXJlbnRLZXkpIHtcbiAgICAgICAgICAgIHNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHNjZW5lLnNjZW5lUGFyZW50S2V5KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNjZW5lXG4gICAgfVxufSIsImltcG9ydCAqIGFzIGVuZW0gZnJvbSBcIi4uL2VuZW15XCI7XG5pbXBvcnQge1Rvd2VyfSBmcm9tIFwiLi4vdG93ZXJzXCI7XG5pbXBvcnQge0J1bGxldH0gZnJvbSBcIi4uL2J1bGxldFwiO1xuaW1wb3J0IHtXYXZlTWFuYWdlcn0gZnJvbSBcIi4uL3dhdmVzXCJcbmltcG9ydCB7VG93ZXJNYW5hZ2VyfSBmcm9tIFwiLi4vdG93ZXJNYW5hZ2VyXCJcbmltcG9ydCB7TUFYX0hFSUdIVCwgTUFYX1dJRFRILCBUZXJyYWluLCBUSUxFX1NJWkV9IGZyb20gXCIuLi90ZXJyYWluXCI7XG5pbXBvcnQge1REU2NlbmVDb25maWd9IGZyb20gXCIuL3RkU2NlbmVDb25maWdcIjtcbmltcG9ydCB7TWV0YVNjZW5lfSBmcm9tIFwiLi9tZXRhU2NlbmVcIjtcbmltcG9ydCB7SFVEX1dJRFRIfSBmcm9tIFwiLi9odWRTY2VuZVwiO1xuaW1wb3J0IHtVVUlEfSBmcm9tIFwiLi4vdXRpbHMvZ3VpZFwiO1xuaW1wb3J0IHtIZWFsdGhCYXJ9IGZyb20gXCIuLi9oZWFsdGhCYXJcIjtcbmltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcbmltcG9ydCB7RU5FTVlfQ09ORklHU30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfVFJBTlNJVElPTl9NUyA9IDUwMFxuZXhwb3J0IGNvbnN0IFREX1NDRU5FX1dJRFRIID0gTUFYX1dJRFRIICogVElMRV9TSVpFXG5leHBvcnQgY29uc3QgVERfU0NFTkVfSEVJR0hUID0gTUFYX0hFSUdIVCAqIFRJTEVfU0laRVxuXG5leHBvcnQgY2xhc3MgVERTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XG4gICAgcGF0aDogUGhhc2VyLkN1cnZlcy5QYXRoXG4gICAgYWxsRW5lbWllczogeyBba2V5OiBzdHJpbmddOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXAgfSA9IHt9XG4gICAgbmV4dEVuZW15OiBudW1iZXIgPSAwXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmVcblxuICAgIHRvd2VyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwXG4gICAgYnVsbGV0czogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwXG5cbiAgICB0ZXJyYWluOiBUZXJyYWluXG5cbiAgICB3YXZlTWFuYWdlcjogV2F2ZU1hbmFnZXJcbiAgICB0b3dlck1hbmFnZXI6IFRvd2VyTWFuYWdlclxuXG4gICAgc2NlbmVQYXJlbnRLZXk6IHN0cmluZztcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvblxuXG4gICAgcHJpdmF0ZSB0b3dlclBhcmVudDogVG93ZXIgIC8vIHRvIHdoYXQgdG93ZXIgZG9lcyB0aGlzIHNjZW5lIGNvcnJlc3BvbmQ/IHVuZGVmaW5lZCBmb3Igcm9vdFxuICAgIHByaXZhdGUgZW5kSGVhbHRoQmFyOiBIZWFsdGhCYXJcblxuICAgIC8vIGhhcHBlbnMgd2hlbiBhbiBlbmVteSByZWFjaGVzIHRoZSBlbmRcbiAgICBlbmVteUVuZENhbGxiYWNrOiAobnVtYmVyKSA9PiB2b2lkXG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFREU2NlbmVDb25maWcsIG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGtleTogY29uZmlnLnNjZW5lS2V5LCAvL2B0ZFNjZW5lJHtVVUlELnV1aWR2NCgpfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGVycmFpbiA9IGNvbmZpZy50ZXJyYWluO1xuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcblxuICAgICAgICB0aGlzLnNjZW5lTGV2ZWwgPSBjb25maWcuc2NlbmVMZXZlbDtcbiAgICAgICAgdGhpcy5zY2VuZVBhcmVudEtleSA9IGNvbmZpZy5zY2VuZVBhcmVudEtleTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCkge1xuICAgICAgICAvLyB0aGlzIGdyYXBoaWNzIGVsZW1lbnQgaXMgb25seSBmb3IgdmlzdWFsaXphdGlvbixcbiAgICAgICAgLy8gaXRzIG5vdCByZWxhdGVkIHRvIG91ciBwYXRoXG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKCk7XG5cbiAgICAgICAgdGhpcy50ZXJyYWluLmNyZWF0ZSh0aGlzKVxuICAgICAgICB0aGlzLnRlcnJhaW4uZHJhdyhncmFwaGljcylcblxuICAgICAgICAvLyB0aGUgcGF0aCBmb3Igb3VyIGVuZW1pZXNcbiAgICAgICAgLy8gcGFyYW1ldGVycyBhcmUgdGhlIHN0YXJ0IHggYW5kIHkgb2Ygb3VyIHBhdGhcbiAgICAgICAgdGhpcy53YXZlTWFuYWdlciA9IG5ldyBXYXZlTWFuYWdlcih0aGlzKTtcbiAgICAgICAgdGhpcy50b3dlck1hbmFnZXIgPSBuZXcgVG93ZXJNYW5hZ2VyKHRoaXMpO1xuXG4gICAgICAgIGZvciAobGV0IGVuZW15IG9mIEVORU1ZX0NPTkZJR1MpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsRW5lbWllc1tlbmVteS5uYW1lXSA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogZW5lbXkuY2xhc3MsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRvd2VycyA9IHRoaXMuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IFRvd2VyLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xuXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5vbkNsaWNrLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IEJ1bGxldCwgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcbiAgICAgICAgZm9yIChsZXQgZU5hbWUgaW4gdGhpcy5hbGxFbmVtaWVzKSB7XG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5hbGxFbmVtaWVzW2VOYW1lXSwgdGhpcy5idWxsZXRzLCB0aGlzLmRhbWFnZUVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XG5cbiAgICAgICAgY29uc3QgY2FtID0gdGhpcy5jYW1lcmFzLm1haW5cbiAgICAgICAgY2FtLnNjcm9sbFggPSAtSFVEX1dJRFRIXG4gICAgfVxuXG4gICAgLy8gT25seSBmb3JlZ3JvdW5kIHNjZW5lIGhhcyBpbnB1dCBlbmFibGVkICYgaXMgdmlzaWJsZTsgYWxsIHNjZW5lcyBhcmUgYmVpbmcgdXBkYXRlZFxuICAgIHB1YmxpYyBzZXRJc0ZvcmVncm91bmQoaXNGb3JlZ3JvdW5kU2NlbmUsIGdvaW5nSW5zaWRlOiBib29sZWFuLCBpID0gbnVsbCwgaiA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5lbmFibGVkID0gaXNGb3JlZ3JvdW5kU2NlbmU7XG5cbiAgICAgICAgaWYgKCFpc0ZvcmVncm91bmRTY2VuZSkge1xuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KGdvaW5nSW5zaWRlLCBpLCBqKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mYWRlSW4oZ29pbmdJbnNpZGUsIGksIGopXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZUluKGdvaW5nSW5zaWRlOiBib29sZWFuLCBpLCBqKSB7XG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih0aGlzLnRlcnJhaW4udyAqIFRJTEVfU0laRSAvIDIsIHRoaXMudGVycmFpbi5oICogVElMRV9TSVpFIC8gMiwgMSlcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Wm9vbSgoZ29pbmdJbnNpZGUgPyAxIC8gMyA6IDMpKVxuXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbihTQ0VORV9UUkFOU0lUSU9OX01TLCAwLCAwLCAwKVxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMSwgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcbiAgICB9XG5cbiAgICBwdWJsaWMgZmFkZU91dChnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xuICAgICAgICAvLyBUYWtlIGEgc2NyZWVuc2hvdFxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIuc25hcHNob3RBcmVhKFxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgsXG4gICAgICAgICAgICAtdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSxcbiAgICAgICAgICAgIFREX1NDRU5FX1dJRFRILFxuICAgICAgICAgICAgVERfU0NFTkVfSEVJR0hULFxuICAgICAgICAgICAgKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcEtleSA9IGBzbmFwLSR7dGhpcy5zY2VuZS5rZXl9YFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzLmV4aXN0cyhzbmFwS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzLnJlbW92ZShzbmFwS2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5hZGRJbWFnZShzbmFwS2V5LCBpbWFnZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dpbmc6IHNob3cgdGhlIHNjcmVlbnNob3RcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uZmFkZU91dChTQ0VORV9UUkFOU0lUSU9OX01TLCAwLCAwLCAwKVxuICAgICAgICBpZiAoZ29pbmdJbnNpZGUpIHtcbiAgICAgICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygzLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ucGFuKHgsIHksIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMSAvIDMsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYW1hZ2VFbmVteShlbmVteSwgYnVsbGV0KSB7XG4gICAgICAgIC8vIG9ubHkgaWYgYm90aCBlbmVteSBhbmQgYnVsbGV0IGFyZSBhbGl2ZVxuICAgICAgICBpZiAoZW5lbXkuYWN0aXZlID09PSB0cnVlICYmIGJ1bGxldC5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0aGUgYnVsbGV0IHJpZ2h0IGF3YXlcbiAgICAgICAgICAgIGJ1bGxldC5oaXQoKVxuXG4gICAgICAgICAgICAvLyBkZWNyZWFzZSB0aGUgZW5lbXkgaHAgd2l0aCBidWxsZXQgZGFtYWdlXG4gICAgICAgICAgICBlbmVteS5yZWNlaXZlRGFtYWdlKGJ1bGxldC5kYW1hZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJhbWVOdW1iZXIgPSAwO1xuXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xuXG4gICAgICAgIHRoaXMuZnJhbWVOdW1iZXIrKztcbiAgICAgICAgdGhpcy53YXZlTWFuYWdlci51cGRhdGUoZGVsdGEpXG5cbiAgICAgICAgaWYgKHRoaXMuZnJhbWVOdW1iZXIgJSA2MCA9PSAwKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgVXBkYXRlIHRoOiAke3RoaXMuc2NlbmUua2V5fSBlOiAke3RoaXMuaW5wdXQuZW5hYmxlZH0gfCBsOiAke3RoaXMuc2NlbmVMZXZlbH0gfCBwOiAke3RoaXMuc2NlbmVQYXJlbnQ/LnNjZW5lLmtleX1gKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZEhlYWx0aEJhcikge1xuICAgICAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIuaGVhbHRoID0gdGhpcy50b3dlclBhcmVudC5oZWFsdGhCYXIuaGVhbHRoXG4gICAgICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci51cGRhdGUoZGVsdGEpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRCdWxsZXQoeCwgeSwgYW5nbGUsIGRhbWFnZSwgcmFuZ2UsIGJ1bGxldFNwZWVkTW9kKSB7XG4gICAgICAgIGxldCBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0KCkgYXMgQnVsbGV0O1xuICAgICAgICBpZiAoYnVsbGV0KSB7XG4gICAgICAgICAgICBidWxsZXQuZmlyZSh4LCB5LCBhbmdsZSwgZGFtYWdlLCByYW5nZSwgYnVsbGV0U3BlZWRNb2QsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9HcmlkUG9zKHgsIHkpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKCh4ICsgdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWCkgLyBUSUxFX1NJWkUpO1xuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZKSAvIFRJTEVfU0laRSk7XG4gICAgICAgIHJldHVybiBbaSwgal1cbiAgICB9XG5cbiAgICBvbkNsaWNrKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG9uY2xpY2sgb24gc2NlbmUgJHt0aGlzLnNjZW5lLmtleX1gKVxuICAgICAgICBjb25zdCBbaSwgal0gPSB0aGlzLnRvR3JpZFBvcyhwb2ludGVyLngsIHBvaW50ZXIueSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGNsaWNrZWQgY29vcmRpbmF0ZXM6ICR7aX0gJHtqfWApXG4gICAgICAgIGxldCBwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyID0gdGhpcy50ZXJyYWluLnRyeUdldEV4aXN0aW5nVG93ZXIoaSwgaik7XG4gICAgICAgIGlmIChwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB0byBhbiBleGlzdGluZyB0b3dlclwiKVxuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuc3dpdGNoVG9TY2VuZShwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyLmdldElubmVyVG93ZXJTY2VuZUtleSgpLCB0cnVlLCBpLCBqKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGlmIChpID09PSBlbmRbMF0gJiYgaiA9PT0gZW5kWzFdICYmIHRoaXMuc2NlbmVQYXJlbnRLZXkpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dpdGNoaW5nIHZpYSBlbmRcIilcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUodGhpcy5zY2VuZVBhcmVudEtleSwgZmFsc2UsIGksIGopXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkVuZW15UmVhY2hlZEVuZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVuZW15RW5kQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgIH1cblxuICAgIHNldFRvd2VyUGFyZW50KHBhcmVudDogVG93ZXIpIHtcbiAgICAgICAgdGhpcy50b3dlclBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodGhpcylcblxuICAgICAgICBsZXQgW2ksIGpdID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXG4gICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcblxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5tYWtlKHgsIHksIFRJTEVfU0laRSAtIDE0LCAwLjUpXG4gICAgICAgIHRoaXMuYWRkLmNvbnRhaW5lcigwLCAwLCB0aGlzLmVuZEhlYWx0aEJhcilcbiAgICB9XG5cbiAgICBnZXRUb3dlclBhcmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJQYXJlbnRcbiAgICB9XG59IiwiaW1wb3J0IHsgVGVycmFpbiB9IGZyb20gXCIuLi90ZXJyYWluXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xuXG5leHBvcnQgY2xhc3MgVERTY2VuZUNvbmZpZyB7XG4gICAgdGVycmFpbjogVGVycmFpbjtcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvbiBcbiAgICBzY2VuZVBhcmVudEtleTogc3RyaW5nO1xuICAgIHNjZW5lS2V5OiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKHRlcnJhaW46IFRlcnJhaW4sIHNjZW5lTGV2ZWw6IG51bWJlciwgc2NlbmVQYXJlbnRLZXk6IHN0cmluZywgc2NlbmVLZXk6IHN0cmluZyl7XG4gICAgICAgIHRoaXMudGVycmFpbiA9IHRlcnJhaW47XG5cbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gc2NlbmVMZXZlbDtcbiAgICAgICAgdGhpcy5zY2VuZVBhcmVudEtleSA9IHNjZW5lUGFyZW50S2V5O1xuICAgICAgICB0aGlzLnNjZW5lS2V5ID0gc2NlbmVLZXlcbiAgICB9XG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIlxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vdG93ZXJzXCJcblxuZXhwb3J0IGVudW0gVGlsZVR5cGUge1xuICAgIFN0YXJ0LCBQYXRoLCBFbmQsIE9jY3VwaWVkLCBCdWlsZGFibGVcbn1cblxuZXhwb3J0IGNvbnN0IFRJTEVfU0laRSA9IDY0XG5leHBvcnQgY29uc3QgTEVWRUxfT0ZGU0VUID0gMTUgKiBUSUxFX1NJWkVcbmV4cG9ydCBjb25zdCBNQVhfV0lEVEggPSAxMFxuZXhwb3J0IGNvbnN0IE1BWF9IRUlHSFQgPSA4XG5cbmNvbnN0IE5fVElMRVNFVF9TUFJJVEVTID0gMTAgIC8vIGhvdyBtYW55IHNwcml0ZXMgYXJlIGluIHRoZSB0aWxlc2V0P1xuXG50eXBlIEdyaWRQb3MgPSBbaW50ZWdlciwgaW50ZWdlcl1cblxuZXhwb3J0IGNsYXNzIFRlcnJhaW4ge1xuICAgIHRvd2VyczogVG93ZXJbXVtdXG4gICAgdGlsZXM6IFRpbGVUeXBlW11bXVxuXG4gICAgdGlsZVNwcml0ZXM6IGludGVnZXJbXVtdXG5cbiAgICBwYXRoOiBQaGFzZXIuQ3VydmVzLlBhdGggIC8vIFRoZSBQaGFzZXIgcGF0aCAoZm9yIGVuZW15IG1vdmVtZW50KVxuICAgIHBhdGhUaWxlczogR3JpZFBvc1tdICAvLyBUaGUgc2VxdWVuY2Ugb2YgdGlsZXMgbWFraW5nIHVwIHRoZSBwYXRoXG5cbiAgICB0aW50OiBpbnRlZ2VyIC8vIGNvbG9yIGFzIGEgMjQtYml0IGludFxuXG4gICAgdzogbnVtYmVyXG4gICAgaDogbnVtYmVyXG5cbiAgICBwb3J0YWxGcm9tOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXG4gICAgcG9ydGFsVG86IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcblxuICAgIC8vIHRvZG86IGdlbmVyYXRlL2xvYWQgdGVycmFpblxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBpbnRlZ2VyLCBoZWlnaHQ6IGludGVnZXIpIHtcbiAgICAgICAgdGhpcy53ID0gd2lkdGhcbiAgICAgICAgdGhpcy5oID0gaGVpZ2h0XG4gICAgfVxuXG4gICAgY3JlYXRlKHNjZW5lOiBURFNjZW5lKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKVxuICAgICAgICB0aGlzLnNldHVwU3ByaXRlcyhzY2VuZSlcblxuICAgICAgICB0aGlzLnRvd2VycyA9IGluaXQyREFycmF5PFRvd2VyPih0aGlzLncsIHRoaXMuaCwgbnVsbClcbiAgICB9XG5cbiAgICBzZXR1cFNwcml0ZXMoc2NlbmU6IFREU2NlbmUpIHtcbiAgICAgICAgdGhpcy50aWxlU3ByaXRlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnc7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaV1bal0gPSByYW5kb21GcmVlU3ByaXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdldERpciA9IChwaTogaW50ZWdlcikgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYXRoVGlsZXMsIHBpKVxuICAgICAgICAgICAgbGV0IFtpMSwgajFdID0gdGhpcy5wYXRoVGlsZXNbcGldXG4gICAgICAgICAgICBsZXQgW2kyLCBqMl0gPSB0aGlzLnBhdGhUaWxlc1twaSArIDFdXG5cbiAgICAgICAgICAgIGxldCBbZGksIGRqXSA9IFtpMiAtIGkxLCBqMiAtIGoxXVxuICAgICAgICAgICAgaWYgKGRpID09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaiA9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGogPT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0RGlyIGZhaWxlZFwiKVxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHBpID0gMDsgcGkgPCB0aGlzLnBhdGhUaWxlcy5sZW5ndGg7IHBpKyspIHtcbiAgICAgICAgICAgIGxldCBbaTEsIGoxXSA9IHRoaXMucGF0aFRpbGVzW3BpXVxuXG4gICAgICAgICAgICBpZiAocGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDZcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGkgPT0gdGhpcy5wYXRoVGlsZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGQxID0gKGdldERpcihwaSAtIDEpICsgMikgJSA0XG4gICAgICAgICAgICAgICAgbGV0IGQyID0gZ2V0RGlyKHBpKVxuICAgICAgICAgICAgICAgIGlmIChkMSA+IGQyKSB7XG4gICAgICAgICAgICAgICAgICAgIFtkMSwgZDJdID0gW2QyLCBkMV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gT3JkZXIgb2Ygc3ByaXRlcyAoMDIgbWVhbmluZyBkMT0wLCBkMj0yKTpcbiAgICAgICAgICAgICAgICAvLyAwMSAwMiAwMyAxMiAxMyAyM1xuICAgICAgICAgICAgICAgIGlmIChkMSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IGQyIC0gMVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZDEgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSBkMiArIDFcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gNSAvLyBvbmx5IDIzIGxlZnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRpbnQgPSBQaGFzZXIuRGlzcGxheS5Db2xvci5HZXRDb2xvcihcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcbiAgICAgICAgKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmZyb21HcmlkUG9zKGksIGopXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCAndGlsZXNldCcsIHRoaXMudGlsZVNwcml0ZXNbaV1bal0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2ldW2pdID09IFRpbGVUeXBlLkJ1aWxkYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc2V0VGludCh0aGlzLnRpbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2ldW2pdID09IFRpbGVUeXBlLlN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsRnJvbSA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgXCJwb3J0YWxGcm9tXCIsIDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2ldW2pdID09IFRpbGVUeXBlLkVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFRvID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCBcInBvcnRhbFRvXCIsIDApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhdyhncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKSB7XG4gICAgICAgIC8vIHRoaXMuZHJhd0dyaWQoZ3JhcGhpY3MpXG5cbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDMsIDB4ZmZmZmZmLCAxKTtcbiAgICAgICAgLy8gdmlzdWFsaXplIHRoZSBwYXRoXG4gICAgICAgIHRoaXMucGF0aC5kcmF3KGdyYXBoaWNzKTtcblxuICAgICAgICB0aGlzLnBvcnRhbEZyb20uYW5pbXMucGxheSh7XG4gICAgICAgICAgICBrZXk6IFwicG9ydGFsRnJvbV9zcGluXCIsXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvcnRhbFRvLmFuaW1zLnBsYXkoe1xuICAgICAgICAgICAga2V5OiBcInBvcnRhbFRvX3NwaW5cIixcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZHJhd0dyaWQoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgMHgwMDAwZmYsIDAuOCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5oOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbygwLCBpICogVElMRV9TSVpFKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhUSUxFX1NJWkUgKiAxMCwgaSAqIFRJTEVfU0laRSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy53OyBqKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhqICogVElMRV9TSVpFLCAwKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhqICogVElMRV9TSVpFLCBUSUxFX1NJWkUgKiA4KTtcbiAgICAgICAgfVxuICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhblBsYWNlVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5pbkJvdW5kcyhpLCBqKSAmJiB0aGlzLnRpbGVzW2ldW2pdID09PSBUaWxlVHlwZS5CdWlsZGFibGU7XG4gICAgfVxuXG4gICAgcHVibGljIHRyeUdldEV4aXN0aW5nVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0b3dlcjogVG93ZXIpIHtcbiAgICAgICAgaWYgKGkgPCAwIHx8IGogPCAwIHx8IGkgPj0gdGhpcy53IHx8IGogPj0gdGhpcy5oKSByZXR1cm4gbnVsbFxuXG4gICAgICAgIHRoaXMudGlsZXNbaV1bal0gPSBUaWxlVHlwZS5PY2N1cGllZDtcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJzW2ldW2pdID0gdG93ZXI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZSgpOiBudW1iZXIge1xuICAgICAgICBsZXQgcGF0aCA9IFtdXG5cbiAgICAgICAgbGV0IGVkZ2VzOiBHcmlkUG9zW10gPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudyAtIDE7IGkrKykge1xuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgMF0pXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFtpLCB0aGlzLmggLSAxXSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMuaCAtIDE7IGorKykge1xuICAgICAgICAgICAgZWRnZXMucHVzaChbMCwgal0pXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFt0aGlzLncgLSAxLCBqXSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2VcblxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXG4gICAgICAgIHdoaWxlICghc3VjY2Vzcykge1xuICAgICAgICAgICAgbGV0IGZyb20gPSByYW5kb21JdGVtKGVkZ2VzKVxuICAgICAgICAgICAgbGV0IHRvO1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIHRvID0gcmFuZG9tSXRlbShlZGdlcylcbiAgICAgICAgICAgIH0gd2hpbGUgKHRvID09IGZyb20pXG5cbiAgICAgICAgICAgIHBhdGggPSB0aGlzLnJhbmRvbVdhbGsoZnJvbSwgdG8pXG5cbiAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IDI1XG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCAmJiBwYXRoLmxlbmd0aCA+PSBtaW5MZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMrK1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID09IDQwMCkgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIGluXCIsIGF0dGVtcHRzLCBcImF0dGVtcHRzXCIpXG5cbiAgICAgICAgdGhpcy50aWxlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhwYXRoW2ldWzBdLCBwYXRoW2ldWzFdKVxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGFsdGVuYXRpdmVseTogdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCguLi4pXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYXRoID0gc2NlbmUuYWRkLnBhdGgoeCwgeSlcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGggPSBuZXcgUGhhc2VyLkN1cnZlcy5QYXRoKHgsIHkpXG4gICAgICAgICAgICAgICAgLy8gc2NlbmUuYWRkT2JqZWN0KHRoaXMucGF0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoLmxpbmVUbyh4LCB5KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgc2V0VG8gPSBUaWxlVHlwZS5QYXRoXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VG8gPSBUaWxlVHlwZS5TdGFydFxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IHBhdGgubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNldFRvID0gVGlsZVR5cGUuRW5kXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGlsZXNbcGF0aFtpXVswXV1bcGF0aFtpXVsxXV0gPSBzZXRUb1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgdGVycmFpbi5cIilcblxuICAgICAgICB0aGlzLnBhdGhUaWxlcyA9IHBhdGhcbiAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByYW5kb21XYWxrKGZyb206IEdyaWRQb3MsIHRvOiBHcmlkUG9zKTogQXJyYXk8R3JpZFBvcz4ge1xuICAgICAgICBsZXQgcGF0aCA9IFtdXG4gICAgICAgIGxldCBzZWVuID0gbmV3IFNldCgpXG5cbiAgICAgICAgY29uc3QgYWRkVG9QYXRoID0gKHBvczogR3JpZFBvcykgPT4ge1xuICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFubmVkIG9mIHRoaXMubmVpZ2hib3JzKHBhdGhbcGF0aC5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Vlbi5hZGQoYmFubmVkLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0aC5wdXNoKHBvcylcbiAgICAgICAgICAgIHNlZW4uYWRkKHBvcy50b1N0cmluZygpKVxuICAgICAgICB9XG5cbiAgICAgICAgYWRkVG9QYXRoKGZyb20pXG5cbiAgICAgICAgbGV0IHN0ZXBzID0gMFxuICAgICAgICB3aGlsZSAocGF0aFtwYXRoLmxlbmd0aCAtIDFdICE9IHRvKSB7XG4gICAgICAgICAgICBzdGVwcysrXG4gICAgICAgICAgICBpZiAoc3RlcHMgPT0gMTAwKSBicmVha1xuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXVxuXG4gICAgICAgICAgICBpZiAocG9zLnRvU3RyaW5nKCkgPT09IHRvLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aCAgLy8gU3VjY2VzcyFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNhbmRzID0gdGhpcy5uZWlnaGJvcnMocG9zKVxuICAgICAgICAgICAgY2FuZHMgPSBjYW5kcy5maWx0ZXIocCA9PiAhc2Vlbi5oYXMocC50b1N0cmluZygpKSlcblxuICAgICAgICAgICAgaWYgKGNhbmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsICAvLyBGYWlsIVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5leHQgPSByYW5kb21JdGVtKGNhbmRzKVxuICAgICAgICAgICAgYWRkVG9QYXRoKG5leHQpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGF0aFxuICAgIH1cblxuICAgIHByaXZhdGUgbmVpZ2hib3JzKHBvczogR3JpZFBvcywgcGFkID0gMCkge1xuICAgICAgICBsZXQgcmVzID0gW1xuICAgICAgICAgICAgW3Bvc1swXSArIDEsIHBvc1sxXV0sXG4gICAgICAgICAgICBbcG9zWzBdIC0gMSwgcG9zWzFdXSxcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSArIDFdLFxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdIC0gMV0sXG4gICAgICAgIF1cbiAgICAgICAgcmVzID0gcmVzLmZpbHRlcihwID0+IHRoaXMuaW5Cb3VuZHMocFswXSwgcFsxXSkpXG5cbiAgICAgICAgcmV0dXJuIHJlc1xuICAgIH1cblxuICAgIGZyb21HcmlkUG9zKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcbiAgICAgICAgcmV0dXJuIFsoaSArIDAuNSkgKiBUSUxFX1NJWkUsIChqICsgMC41KSAqIFRJTEVfU0laRV1cbiAgICB9XG5cbiAgICBpbkJvdW5kcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCBwYWQgPSAwKSB7XG4gICAgICAgIHJldHVybiAoaSA+PSBwYWRcbiAgICAgICAgICAgICYmIGkgPCB0aGlzLncgLSBwYWRcbiAgICAgICAgICAgICYmIGogPj0gcGFkXG4gICAgICAgICAgICAmJiBqIDwgdGhpcy5oIC0gcGFkKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tSXRlbShhcnJheSkge1xuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIGFycmF5Lmxlbmd0aCldXG59XG5cbmZ1bmN0aW9uIHJhbmRvbUZyZWVTcHJpdGUoKSB7XG4gICAgY29uc3QgblNwZWNpYWxTcHJpdGVzID0gOFxuICAgIHJldHVybiBuU3BlY2lhbFNwcml0ZXMgKyBNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIChOX1RJTEVTRVRfU1BSSVRFUyAtIG5TcGVjaWFsU3ByaXRlcykpXG59XG5cbmZ1bmN0aW9uIGluaXQyREFycmF5PFRWYWw+KGRpbTEsIGRpbTIsIHZhbHVlOiBUVmFsKTogVFZhbFtdW10ge1xuICAgIHJldHVybiBuZXcgQXJyYXkoZGltMSlcbiAgICAgICAgLmZpbGwoZmFsc2UpXG4gICAgICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KGRpbTIpXG4gICAgICAgICAgICAuZmlsbCh2YWx1ZSkpO1xufSIsImltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcbmltcG9ydCAqIGFzIHRvd2VycyBmcm9tIFwiLi90b3dlcnNcIjtcblxuZXhwb3J0IGNsYXNzIFRvd2VyTWFuYWdlciB7XG4gICAgc2NlbmU6IFREU2NlbmVcbiAgICB0b3dlclR5cGVzOiB7IFtrZXk6c3RyaW5nXTogYW55fSA9IHtcbiAgICAgICAgJ0Jhc2ljJzogW3Rvd2Vycy5CYXNpY1R1cnJldCwgY2ZnLkJhc2ljXSxcbiAgICAgICAgJ011bHRpc2hvdCc6IFt0b3dlcnMuTXVsdGlzaG90VHVycmV0LCBjZmcuTXVsdGlzaG90XSxcbiAgICAgICAgJ1NuaXBlcic6IFt0b3dlcnMuU25pcGVyVHVycmV0LCBjZmcuU25pcGVyXSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgfVxuXG4gICAgcHVibGljIHBsYWNlVG93ZXIocG9pbnRlciwgdG93ZXJUeXBlKSB7XG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMuc2NlbmUudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxuICAgICAgICBpZiAodGhpcy5zY2VuZS50ZXJyYWluLmNhblBsYWNlVG93ZXIoaSwgaikpIHtcbiAgICAgICAgICAgIHZhciB0b3dlcjogdG93ZXJzLlRvd2VyID0gdGhpcy5zY2VuZS50b3dlcnMuZ2V0KCk7XG5cbiAgICAgICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFkZFNjZW5lKHRoaXMuc2NlbmUuc2NlbmUua2V5KVxuICAgICAgICAgICAgaWYgKHRvd2VyKSB7XG4gICAgICAgICAgICAgICAgdG93ZXIubWFrZShpLCBqLCBuZXdTY2VuZS5zY2VuZS5rZXksIHRoaXMudG93ZXJUeXBlc1t0b3dlclR5cGVdWzFdLCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVswXSk7XG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5tb25leSAtPSB0b3dlci5jb25maWcucHJpY2VcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zZXRUb3dlclBhcmVudCh0b3dlcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBpbXBvcnQgeyBHcmlkUG9zaXRpb24gfSBmcm9tIFwiLi90ZXJyYWluXCI7XG5cbmltcG9ydCB7IERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiwgVE9XRVJfSEVBTFRIX1JFR0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9oZWFsdGhCYXJcIjtcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xuaW1wb3J0IHsgVGVycmFpbiwgVElMRV9TSVpFIH0gZnJvbSBcIi4vdGVycmFpblwiO1xuaW1wb3J0IHsgVG93ZXJDb25maWcsIFJBTkdFX0lORElDQVRPUl9DT05GSUcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcblxuXG4vLyB0b2RvOiBtb3ZlIHRvIHNjZW5lP1xuZnVuY3Rpb24gZ2V0RW5lbXkoeCwgeSwgcmFuZ2UsIGVuZW1pZXMsIG51bVRvR2V0KTogRW5lbXlCYXNlW10ge1xuICAgIGxldCBvdXRFbmVtaWVzOiBFbmVteUJhc2VbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgZW5lbXlHcm91cCBpbiBlbmVtaWVzKSB7XG4gICAgICAgIGxldCBlbmVteVVuaXRzID0gZW5lbWllc1tlbmVteUdyb3VwXS5nZXRDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15VW5pdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlbmVteVVuaXRzW2ldLmFjdGl2ZSAmJiBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHgsIHksIGVuZW15VW5pdHNbaV0ueCwgZW5lbXlVbml0c1tpXS55KSA8PSByYW5nZSkge1xuICAgICAgICAgICAgICAgIG91dEVuZW1pZXMucHVzaChlbmVteVVuaXRzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChvdXRFbmVtaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb3V0RW5lbWllcy5zb3J0KChhLCBiKSA9PiBiLmZvbGxvd2VyLnQgLSBhLmZvbGxvd2VyLnQpXG4gICAgICAgIG91dEVuZW1pZXMubGVuZ3RoID0gTWF0aC5taW4obnVtVG9HZXQsIG91dEVuZW1pZXMubGVuZ3RoKVxuICAgICAgICByZXR1cm4gb3V0RW5lbWllc1xuICAgIH1cbiAgICByZXR1cm4gbnVsbFxufVxuXG5cbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xuICAgIGNvbmZpZzogVG93ZXJDb25maWdcbiAgICBzdGF0czogVG93ZXJDb25maWdcblxuICAgIHNjZW5lOiBURFNjZW5lXG5cbiAgICB0b3dlclR1cnJldDogX1Rvd2VyVHVycmV0XG4gICAgdG93ZXJNaWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcbiAgICB0b3dlckJhc2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcbiAgICBoZWFsdGhCYXI6IEhlYWx0aEJhclxuICAgIHJhbmdlSW5kaWNhdG9yOiBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGVcblxuICAgIGxldmVsOiBpbnRlZ2VyXG4gICAgbGV2ZWxUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxuXG4gICAgeENvb3JkOiBudW1iZXJcbiAgICB5Q29vcmQ6IG51bWJlclxuXG4gICAgcGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXJcbiAgICBlbWl0dGVyOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlclxuXG4gICAgcHJpdmF0ZSBpbm5lclRvd2VyU2NlbmVLZXk6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IodG93ZXJTY2VuZTogVERTY2VuZSkge1xuICAgICAgICBzdXBlcih0b3dlclNjZW5lLCAwLCAwKVxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodG93ZXJTY2VuZSlcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRvd2VyU2NlbmU7XG5cbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ3BhcnRpY2xlX3JlZCcpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLnBhcnRpY2xlcy5jcmVhdGVFbWl0dGVyKHtcbiAgICAgICAgICAgIGxpZmVzcGFuOiAyMDAsXG4gICAgICAgICAgICBibGVuZE1vZGU6ICdBREQnLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBzY2FsZToge3N0YXJ0OiAwLCBlbmQ6IDF9LFxuICAgICAgICAgICAgb246IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBsZXZlbFVwKCkge1xuICAgICAgICB0aGlzLmxldmVsKys7XG4gICAgICAgIGlmICh0aGlzLnNjZW5lID09IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFjdGl2ZVNjZW5lKVxuICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUubGV2ZWx1cFNvdW5kLnBsYXkoKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmV4cGxvZGUoMjAsIHRoaXMueENvb3JkLCB0aGlzLnlDb29yZCk7ICAvLyB0aGlzLnggZG9lc24ndCB3b3JrIGJ0d1xuICAgIH1cblxuXG4gICAgcHVibGljIG1ha2UoaTogbnVtYmVyLCBqOiBudW1iZXIsIGlubmVyVG93ZXJTY2VuZUtleTogc3RyaW5nLCBjb25maWc6IFRvd2VyQ29uZmlnLCB0b3dlckNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xuICAgICAgICB0aGlzLnN0YXRzID0gdGhpcy5jb25maWc7XG5cbiAgICAgICAgdGhpcy50b3dlclR1cnJldCA9IG5ldyB0b3dlckNsYXNzTmFtZSh0aGlzLnNjZW5lLCB0aGlzLmNvbmZpZywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQuc2V0VmlzaWJsZSh0cnVlKTtcblxuICAgICAgICB0aGlzLnhDb29yZCA9IGkgKiBUSUxFX1NJWkUgKyBUSUxFX1NJWkUgLyAyXG4gICAgICAgIHRoaXMueUNvb3JkID0gaiAqIFRJTEVfU0laRSArIFRJTEVfU0laRSAvIDJcblxuICAgICAgICB0aGlzLnRvd2VyQmFzZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh0aGlzLnhDb29yZCwgdGhpcy55Q29vcmQsICd0b3dlcmJhc2VzJywgdGhpcy5jb25maWcuc3ByaXRlQmFzZSk7XG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldFRpbnQodGhpcy5jb25maWcudGludEJhc2UpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnRvd2VyQmFzZSk7XG4gICAgICAgIHRoaXMudG93ZXJNaWQgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUodGhpcy54Q29vcmQsIHRoaXMueUNvb3JkLCAndG93ZXJtaWRzJywgdGhpcy5jb25maWcuc3ByaXRlTWlkKTtcbiAgICAgICAgdGhpcy50b3dlck1pZC5zZXRUaW50KHRoaXMuY29uZmlnLnRpbnRNaWQpO1xuICAgICAgICB0aGlzLnRvd2VyTWlkLmFuaW1zLnBsYXkoe1xuICAgICAgICAgICAga2V5OiBgdG93ZXJNaWRzX3NwaW5gXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJNaWQpO1xuXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3IgPSB0aGlzLnNjZW5lLmFkZC5jaXJjbGUoXG4gICAgICAgICAgICB0aGlzLnhDb29yZCwgdGhpcy55Q29vcmQsIGNvbmZpZy5yYW5nZSgxKSxcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuY29sb3VyLFxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5hbHBoYVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFN0cm9rZVN0eWxlKFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZVdpZHRoLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VDb2xvdXIpO1xuICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICB0aGlzLmFkZCh0aGlzLnJhbmdlSW5kaWNhdG9yKTtcblxuICAgICAgICB0aGlzLnRvd2VyQmFzZS5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgICAgICB0aGlzLnRvd2VyQmFzZS5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmxpc3QuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnN0cnVjdG9yLm5hbWUubWF0Y2goL14uK0VuZW15JC8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUodHJ1ZSk7XG5cbiAgICAgICAgICAgIGxldCBodWRTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwiaHVkU2NlbmVcIikgYXMgSHVkU2NlbmVcbiAgICAgICAgICAgIGh1ZFNjZW5lLnNldERlc2NyaXB0aW9uVG93ZXIodGhpcy5jb25maWcsIHRoaXMpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvd2VyQmFzZS5vbigncG9pbnRlcm91dCcsICgpID0+IHsgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKGZhbHNlKSB9KTtcblxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnBsYWNlKGksIGosIHRoaXMuc2NlbmUudGVycmFpbik7XG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wbGFjZVRvd2VyKGksIGosIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJUdXJyZXQpO1xuXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLm1ha2UodGhpcy54Q29vcmQsIHRoaXMueUNvb3JkICsgVElMRV9TSVpFIC8gMiAtIDgsIFRJTEVfU0laRSAtIDE0KVxuICAgICAgICB0aGlzLmFkZCh0aGlzLmhlYWx0aEJhcilcblxuICAgICAgICB0aGlzLmxldmVsID0gMVxuXG4gICAgICAgIGNvbnN0IHBhZCA9IDNcbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KFxuICAgICAgICAgICAgdGhpcy54Q29vcmQgKyAxNSwgdGhpcy55Q29vcmQgLSA0LCBcIlwiICsgdGhpcy5sZXZlbCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICB0aGlzLmFkZCh0aGlzLmxldmVsVGV4dClcblxuICAgICAgICB0aGlzLmlubmVyVG93ZXJTY2VuZUtleSA9IGlubmVyVG93ZXJTY2VuZUtleVxuXG4gICAgICAgIGxldCBpbm5lclRvd2VyU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChpbm5lclRvd2VyU2NlbmVLZXkpIGFzIFREU2NlbmVcbiAgICAgICAgaW5uZXJUb3dlclNjZW5lLm9uRW5lbXlSZWFjaGVkRW5kKChkYW1hZ2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmhlYWx0aCAtPSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUZcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XG5cbiAgICAgICAgdGhpcy50b3dlclR1cnJldC51cGRhdGUoZGVsdGEpXG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIuaGVhbHRoICs9IFRPV0VSX0hFQUxUSF9SRUdFTiAqIGRlbHRhXG5cbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyLmhlYWx0aCA+PSAxLjApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmxldmVsVXAoKTtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxVcCgpXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5zZXRUZXh0KFwiXCIgKyB0aGlzLmxldmVsKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsIC0gMSkgPCB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlU2NhbGUgPSB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpIC8gdGhpcy5zdGF0cy5yYW5nZSgxKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFNjYWxlKHJhbmdlU2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxuICAgIH1cblxuICAgIGdldElubmVyVG93ZXJTY2VuZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJUb3dlclNjZW5lS2V5XG4gICAgfVxufVxuXG5cbmFic3RyYWN0IGNsYXNzIF9Ub3dlclR1cnJldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XG4gICAgbmV4dFRpYzogbnVtYmVyXG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgYmFzZVg6IG51bWJlclxuICAgIGJhc2VZOiBudW1iZXJcbiAgICBwYXJlbnQ6IFRvd2VyXG5cbiAgICBzY2VuZTogVERTY2VuZVxuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIHNwcml0ZTogc3RyaW5nLCB0aW50OiBudW1iZXIsIHBhcmVudDogVG93ZXIpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICd0b3dlcnRvcHMnLCBzcHJpdGUpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5zZXRUaW50KHRpbnQpO1xuICAgICAgICB0aGlzLm5leHRUaWMgPSAwO1xuICAgIH1cblxuICAgIC8vIHdlIHdpbGwgcGxhY2UgdGhlIHRvd2VyIGFjY29yZGluZyB0byB0aGUgZ3JpZFxuICAgIHBsYWNlKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHRlcnJhaW46IFRlcnJhaW4pIHtcbiAgICAgICAgW3RoaXMueCwgdGhpcy55XSA9IHRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcbiAgICAgICAgdGhpcy5iYXNlWCA9IHRoaXMueFxuICAgICAgICB0aGlzLmJhc2VZID0gdGhpcy55XG4gICAgfVxuXG4gICAgZmlyZSgpIHtcbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteShcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIDFcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGVuZW1pZXMpIHtcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGVuZW1pZXNbMF1cblxuICAgICAgICAgICAgbGV0IFt4UHJlZCwgeVByZWRdID0gdGhpcy5wcmVkaWN0RW5lbXlQb3NpdGlvbkZvclNob3QoZW5lbXkpXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCB4UHJlZCwgeVByZWQpO1xuXG4gICAgICAgICAgICBsZXQgZGFtYWdlID0gdGhpcy5wYXJlbnQuc3RhdHMuZGFtYWdlKHRoaXMucGFyZW50LmxldmVsKVxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxuICAgICAgICAgICAgICAgIGRhbWFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZSA9PSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hY3RpdmVTY2VuZSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLm1ldGFTY2VuZS5zaG9vdFNvdW5kLnBsYXkoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHByZWRpY3RFbmVteVBvc2l0aW9uRm9yU2hvdChlbmVteTogRW5lbXlCYXNlKSB7XG4gICAgICAgIC8vIEFwcHJveGltYXRlIHdoZXJlIHRoZSBlbmVteSBpcyBnb2luZyB0byBiZSB3aGVuIHRoZSBidWxsZXQgaGl0cyBpdC5cblxuICAgICAgICAvLyBDb21wdXRlIHRoZSB0aW1lIHRvIGhpdCBlbmVteSB3aGVuIGFpbWluZyBkaXJlY3RseSBhdCBpdFxuICAgICAgICBsZXQgZGlzdGFuY2UgPSBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBlbmVteS54LCBlbmVteS55KVxuICAgICAgICBsZXQgc3BlZWQgPSB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZCAqIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKVxuICAgICAgICBsZXQgbXNUb0hpdCA9IGRpc3RhbmNlIC8gc3BlZWQgKiAxMDAwXG5cbiAgICAgICAgLy8gU2hvb3QgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBlbmVteSB3aWxsIGJlIGFmdGVyIG1zVG9IaXQgbWlsbGlzZWNvbmRzLlxuICAgICAgICBsZXQgdDIgPSBlbmVteS5mb2xsb3dlci50ICsgZW5lbXkuc3BlZWQgKiBtc1RvSGl0XG4gICAgICAgIGxldCByZXMgPSB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludChNYXRoLm1pbih0MiwgMSkpXG4gICAgICAgIHJldHVybiBbcmVzLnggKyBlbmVteS54T2Zmc2V0LCByZXMueSArIGVuZW15LnlPZmZzZXRdXG4gICAgfVxuXG4gICAgZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKSB7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAoYW5nbGUgKyBNYXRoLlBJIC8gMikgKiBQaGFzZXIuTWF0aC5SQURfVE9fREVHO1xuICAgICAgICBsZXQgcmVjb2lsID0gTWF0aC5taW4oZGFtYWdlICogMC41LCAyNSlcbiAgICAgICAgdGhpcy54ID0gdGhpcy5iYXNlWFxuICAgICAgICB0aGlzLnkgPSB0aGlzLmJhc2VZXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICAgICAgZHVyYXRpb246IE1hdGgubWluKHRoaXMucGFyZW50LmNvbmZpZy5maXJlcmF0ZSh0aGlzLnBhcmVudC5sZXZlbCkgKiAwLjgsIDEwMCArIGRhbWFnZSksXG4gICAgICAgICAgICB4OiB0aGlzLnggKyBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkpICogcmVjb2lsLFxuICAgICAgICAgICAgeTogdGhpcy55ICsgTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJKSAqIHJlY29pbCxcbiAgICAgICAgICAgIGVhc2U6ICdRdWFkJyxcbiAgICAgICAgICAgIHlveW86IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHVwZGF0ZShkZWx0YSkge1xuICAgICAgICB0aGlzLmxhc3RUaW1lICs9IGRlbHRhXG5cbiAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRUaWMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcmUoKSlcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWMgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5wYXJlbnQuc3RhdHMuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGljID0gdGhpcy5sYXN0VGltZSArIDUwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFzaWNUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xuXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIE11bHRpc2hvdFR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xuICAgIH1cblxuXG4gICAgZmlyZSgpIHsgIC8vIHRoaXMgYmVoYXZpb3VyIHNob3VsZCBiZSBpbiBfVG93ZXJUdXJyZXQuZmlyZSBidHdcbiAgICAgICAgbGV0IG51bVRhcmdldHMgPSAzXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zdGF0cy5udW1UYXJnZXRzKSB7XG4gICAgICAgICAgICBudW1UYXJnZXRzID0gdGhpcy5wYXJlbnQuc3RhdHMubnVtVGFyZ2V0cyh0aGlzLnBhcmVudC5sZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteSh0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLCB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIG51bVRhcmdldHMpO1xuXG4gICAgICAgIGlmIChlbmVtaWVzICYmIGVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgZW5lbWllcykge1xuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIGVuZW15LngsIGVuZW15LnkpO1xuICAgICAgICAgICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCBhbmdsZSxcbiAgICAgICAgICAgICAgICAgICAgZGFtYWdlLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmJ1bGxldFNwZWVkTW9kXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zY2VuZSA9PSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hY3RpdmVTY2VuZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUubXVsdGlzaG90U291bmQucGxheSgpOyAgLy8gdGhpcyBzaG91bGQgYmUgaW4gY29uZmlnIGlmIHRoaXMgd2VyZSBkb25lIHByb3Blcmx5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNuaXBlclR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEVuZW15Q29uZmlnLCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUsIEVORU1ZX0NPTkZJR1MsIFdhdmVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XG4vLyBpbXBvcnQgeyBFbmVteSwgRmF0RW5lbXl9IGZyb20gXCIuL2VuZW15XCI7XG5cblxuZXhwb3J0IGNsYXNzIFdhdmVNYW5hZ2VyIHtcbiAgICBzY2VuZTogVERTY2VuZVxuICAgIGN1cnJlbnRXYXZlOiBpbnRlZ2VyID0gMFxuICAgIG5leHRFbmVteTogaW50ZWdlciA9IDBcbiAgICBkZWFkRGFuZ2VyOiBpbnRlZ2VyID0gMFxuICAgIHJlbWFpbmluZ0RhbmdlcjogaW50ZWdlciA9IDBcbiAgICB3YXZlRGlmZmljdWx0eTogaW50ZWdlciA9IDBcblxuICAgIHdhdmVBY3RpdmU6IGJvb2xlYW4gIC8vIGZhbHNlIGZvciBuZXN0ZWQgd2F2ZXNcbiAgICBuZXh0V2F2ZVRpbWU6IGludGVnZXIgPSAwXG4gICAgcmVzcGF3blF1ZXVlOiBbRW5lbXlDb25maWcsIGludGVnZXJdW10gPSBbXTtcbiAgICByZXNwYXduSGVhbHRoOiBpbnRlZ2VyICAvLyB6ZXJvIHVubGVzcyByZXNwYXduaW5nIGVuZW15LCBoYWNrXG5cbiAgICBlbmVteUludGVydmFsOiBpbnRlZ2VyXG5cbiAgICBxdWV1ZWRFbmVteTogYW55XG5cbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG5cbiAgICAgICAgLy8gc2V0IGZhbHNlIGZvciBuZXN0ZWQgYmVoYXZpb3IgaW4gdXBkYXRlKClcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA+IDApO1xuXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApXG4gICAgICAgICAgICB0aGlzLmdldFdhdmVEaWZmaWN1bHR5KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDFlOSAvLyBhIGxvdFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFdhdmVEaWZmaWN1bHR5KCkge1xuICAgICAgICAvL1RPRE86IGFkZCBkaWZmaWN1bHR5IHNjYWxpbmcgYW5kIGJhbGFuY2luZyBmb3Igd2F2ZXNcbiAgICAgICAgdGhpcy53YXZlRGlmZmljdWx0eSA9IFdhdmVDb25maWcub3V0ZXJXYXZlRGFuZ2VyKHRoaXMuY3VycmVudFdhdmUpXG4gICAgICAgIHRoaXMucmVtYWluaW5nRGFuZ2VyID0gdGhpcy53YXZlRGlmZmljdWx0eVxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSBXYXZlQ29uZmlnLm91dGVyRW5lbXlJbnRlcnZhbFxuICAgIH1cblxuICAgIHByaXZhdGUgbmV4dFdhdmUoKSB7XG4gICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY3VycmVudFdhdmUrKztcbiAgICAgICAgdGhpcy5nZXRXYXZlRGlmZmljdWx0eSgpO1xuICAgICAgICBQbGF5ZXJJbmZvLndhdmVIZWFsdGhSZWdlbigpO1xuICAgICAgICBjb25zb2xlLmxvZygnU3RhcnRpbmcgd2F2ZSAnICsgdGhpcy5jdXJyZW50V2F2ZSArICcsIHdhdmUgZGlmZmljdWx0eTogJyArIHRoaXMud2F2ZURpZmZpY3VsdHkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25FbmVteSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzcGF3blF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCByZXNwYXduID0gdGhpcy5yZXNwYXduUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMucmVzcGF3bkhlYWx0aCA9IHJlc3Bhd25bMV07XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByZXNwYXduWzBdLmRhbmdlcjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbcmVzcGF3blswXS5uYW1lXS5nZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByYW5kRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoZW5lbXkuZGFuZ2VyIDw9IHRoaXMucmVtYWluaW5nRGFuZ2VyKSAmJiAoZW5lbXkubWluV2F2ZSA8PSB0aGlzLmN1cnJlbnRXYXZlKVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmFuZEVuZW15KSB7XG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByYW5kRW5lbXkuZGFuZ2VyO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyYW5kRW5lbXkubmFtZV0uZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IDA7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNwYXduKHJlc3Bhd246IEVuZW15Q29uZmlnLCByZW1haW5pbmdIZWFsdGg6IGludGVnZXIpIHtcbiAgICAgICAgdGhpcy5yZXNwYXduUXVldWUucHVzaChbcmVzcGF3biwgcmVtYWluaW5nSGVhbHRoXSk7XG4gICAgfVxuXG5cbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB1cGRhdGUoZGVsdGEpIHtcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxuICAgICAgICBsZXQgZW5lbXk6IEVuZW15QmFzZVxuICAgICAgICBsZXQgd2F2ZTogaW50ZWdlclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMud2F2ZUFjdGl2ZSAmJiB0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0V2F2ZVRpbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXZlKCk7ICAvLyBubyB3YXZlcyBpbiBuZXN0ZWQgbGF5ZXJzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdEYW5nZXIgPiAwICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRFbmVteSkge1xuICAgICAgICAgICAgICAgIGVuZW15ID0gdGhpcy5zcGF3bkVuZW15KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkRGFuZ2VyID09PSB0aGlzLndhdmVEaWZmaWN1bHR5KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXYXZlIFwiICsgdGhpcy5jdXJyZW50V2F2ZSArIFwiIGNvbXBsZXRlISBOZXh0IHdhdmUgaW4gXCIgKyBQQVVTRV9BRlRFUl9XQVZFX1RJTUUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGVhZERhbmdlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F2ZVRpbWUgPSB0aGlzLmxhc3RUaW1lICsgUEFVU0VfQUZURVJfV0FWRV9USU1FO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2F2ZSA9IHRoaXMuY3VycmVudFdhdmVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWV1ZWRFbmVteSkge1xuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuZW15Lm1pbldhdmUgPD0gMiAqIFdhdmVDb25maWcubGV2ZWxUb1dhdmUodGhpcy5zY2VuZS5nZXRUb3dlclBhcmVudCgpLmxldmVsKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmxhc3RUaW1lICogKFdhdmVDb25maWcuZGFuZ2VyUGVyU2VjKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbCkgKiAwLjAwMSlcbiAgICAgICAgICAgIGNvbnN0IGIgPSAodGhpcy5xdWV1ZWRFbmVteS5kYW5nZXIgKiAxLjApXG4gICAgICAgICAgICBpZiAoYSA+IGIpIHtcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnF1ZXVlZEVuZW15Lm5hbWVdLmdldCgpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGFzdFRpbWUsIGIpXG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRFbmVteSA9IG51bGxcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2F2ZSA9IFdhdmVDb25maWcubGV2ZWxUb1dhdmUodGhpcy5zY2VuZS5nZXRUb3dlclBhcmVudCgpLmxldmVsKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZW15KSB7XG4gICAgICAgICAgICBlbmVteS5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgICAgICBlbmVteS5zZXRWaXNpYmxlKHRydWUpO1xuXG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgZW5lbXkgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYXRoXG4gICAgICAgICAgICBlbmVteS5zdGFydE9uUGF0aCh3YXZlLCB0aGlzLnJlc3Bhd25IZWFsdGgpO1xuICAgICAgICAgICAgdGhpcy5yZXNwYXduSGVhbHRoID0gMDtcblxuICAgICAgICAgICAgdGhpcy5uZXh0RW5lbXkgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5lbmVteUludGVydmFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSYW5kRW5lbXkoZmlsdGVyX2ZuKTogRW5lbXlDb25maWcge1xuICAgICAgICBsZXQgYXZhaWxFbmVtaWVzID0gW11cbiAgICAgICAgZm9yKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7ICAvLyBTZWxlY3QgYWxsIGVuZW1pZXMgdGhhdCBjYW4gYmUgc3Bhd25lZFxuICAgICAgICAgICAgaWYgKGVuZW15Lm1pbldhdmUgPj0gMCAmJiBmaWx0ZXJfZm4oZW5lbXkpKVxuICAgICAgICAgICAgICAgIGF2YWlsRW5lbWllcy5wdXNoKGVuZW15KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdmFpbEVuZW1pZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBvbmUgb2YgdGhlbVxuICAgICAgICAgICAgbGV0IHJhbmRFbmVteSA9IGF2YWlsRW5lbWllc1tNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIGF2YWlsRW5lbWllcy5sZW5ndGgpXTtcbiAgICAgICAgICAgIHJldHVybiByYW5kRW5lbXlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9