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
            bullet.fire(x, y, angle, damage, range, bulletSpeedMod);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlcnJhaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvd2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QyxTQUFTLENBQ2QsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ2IsQ0FBQyxFQUFFLENBQUMsRUFDSixZQUFZLENBQ2Y7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDO1FBRWxCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFFNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0UsSUFB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QUFDO1NBQ3ZEO0lBQ0wsQ0FBQztJQUVPLGtDQUFZLEdBQXBCLFVBQXFCLFNBQVM7UUFDMUIsSUFBSSxZQUFZLEdBQUcsRUFBRTtRQUNyQixLQUFpQixVQUFhLEVBQWIsd0NBQWEsRUFBYiwyQkFBYSxFQUFiLElBQWEsRUFBRSxFQUFHLHlDQUF5QztZQUF4RSxJQUFJLEtBQUs7WUFDVCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQ3RDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3pCLDRCQUE0QjtZQUM1QixJQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN0RixPQUFPLFNBQVM7U0FDbkI7YUFBTTtZQUNILE9BQU8sSUFBSTtTQUNkO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQztBQXhJWSxrQ0FBVyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL21haW4udHNcIixcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuL3BsYXllckluZm9cIlxyXG5pbXBvcnQge1REU2NlbmV9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSQURJVVMgPSAxMFxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgZHg6IG51bWJlciA9IDBcclxuICAgIGR5OiBudW1iZXIgPSAwXHJcbiAgICBsaWZlc3BhbjogbnVtYmVyID0gMFxyXG4gICAgc3BlZWQ6IG51bWJlclxyXG4gICAgZGFtYWdlOiBpbnRlZ2VyXHJcblxyXG4gICAgYnVsbGV0SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxyXG4gICAgcGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXJcclxuICAgIGVtaXR0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHggPSAwO1xyXG4gICAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNjAwLCAxKTtcclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMCwgMCwgJ2J1bGxldCcpXHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSh4LCB5LCBhbmdsZSwgZGFtYWdlLCB0b3dlclJhbmdlLCBzcGVlZE1vZCkge1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCh0b3dlclJhbmdlICogc3BlZWRNb2QsIDEpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5idWxsZXRJbWFnZSlcclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ3BhcnRpY2xlX3JlZCcpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vICBCdWxsZXRzIGZpcmUgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4gdG8gdGhlIGdpdmVuIHgveVxyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2Uuc2V0UG9zaXRpb24oeCwgeSk7XHJcblxyXG4gICAgICAgIC8vICB3ZSBkb24ndCBuZWVkIHRvIHJvdGF0ZSB0aGUgYnVsbGV0cyBhcyB0aGV5IGFyZSByb3VuZFxyXG4gICAgICAgIC8vICB0aGlzLnNldFJvdGF0aW9uKGFuZ2xlKTtcclxuICAgICAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBicmluZyB0byBmcm9udFxyXG5cclxuICAgICAgICB0aGlzLmR4ID0gTWF0aC5jb3MoYW5nbGUpO1xyXG4gICAgICAgIHRoaXMuZHkgPSBNYXRoLnNpbihhbmdsZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwIC8gc3BlZWRNb2Q7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IHRoaXMucGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICBzcGVlZDogMTAwLFxyXG4gICAgICAgICAgICBzY2FsZToge3N0YXJ0OiAwLjMsIGVuZDogMH0sXHJcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXHJcbiAgICAgICAgICAgIGxpZmVzcGFuOiAxMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLnN0YXJ0Rm9sbG93KHRoaXMuYnVsbGV0SW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIuZXhwbG9kZSgxMCwgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XHJcblxyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gLT0gZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueCArPSB0aGlzLmR4ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS55ICs9IHRoaXMuZHkgKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgKHRoaXMuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkuc2V0Q2lyY2xlKFJBRElVUywgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZGVzdHJveSgpOyAvLyBkaXNhYmxlIGVtaXR0b3IgKGFsc28gY291bGQgZXhwbG9kZSBpdClcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLm1hbmFnZXIucmVtb3ZlRW1pdHRlcih0aGlzLmVtaXR0ZXIpXHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGVuZW0gZnJvbSBcIi4vZW5lbXlcIjtcclxuXHJcbi8vIGVuZW15IGRhbWFnZSAqIERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiA9IGhvdyBtdWNoIGhlYWx0aCB0b3dlciBsb3Nlc1xyXG4vLyAodG93ZXIgaGVhbHRoIGlzIGZyb20gMCB0byAxKVxyXG5leHBvcnQgY29uc3QgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGID0gMC40XHJcblxyXG5leHBvcnQgY29uc3QgVE9XRVJfSEVBTFRIX1JFR0VOID0gMC4wMDAwMSAqIDJcclxuXHJcbmV4cG9ydCBjb25zdCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUgPSAzMDAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBMQVlFUl9IRUFMVEhfUkVHRU46IG51bWJlciA9IDA7ICAvLyBob3cgbXVjaCBoZWFsdGggcGVyIHdhdmUsIGNhbiBiZSA8IDFcclxuXHJcbmV4cG9ydCBjb25zdCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHID0ge1xyXG4gICAgJ2NvbG91cic6IDB4YmJiYmZmLFxyXG4gICAgJ2FscGhhJzogMjEwLFxyXG4gICAgJ2VkZ2VDb2xvdXInOiAweDgwODBmZixcclxuICAgICdlZGdlV2lkdGgnOiA0XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV2F2ZUNvbmZpZyA9IHtcclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gb3V0ZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEhvdyBtdWNoIHRpbWUgYmV0d2VlbiBjb25zZWN1dGl2ZSBzcGF3bnMgaW4gYSB3YXZlXHJcbiAgICBvdXRlckVuZW15SW50ZXJ2YWw6IDUwMCxcclxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBpbiBhIHdhdmVcclxuICAgIG91dGVyV2F2ZURhbmdlcjogKHdhdmUpID0+ICh3YXZlICsxKSAgKiAxMCxcclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIGlubmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBIb3cgbXVjaCBkYW5nZXIgcGVyIHNlY29uZCBpcyBnZW5lcmF0ZWUgaW4gaW5uZXIgZGVwdGhzP1xyXG4gICAgZGFuZ2VyUGVyU2VjOiAobGV2ZWwpID0+IDEwKmxldmVsLFxyXG4gICAgLy8gVG8gd2hhdCB3YXZlIG51bWJlciBkb2VzIGEgdG93ZXIgbGV2ZWwgY29ycmVzcG9uZD8gKGZvciBlbmVteSBzY2FsaW5nKVxyXG4gICAgbGV2ZWxUb1dhdmU6IChsZXZlbCkgPT4gMyAqIGxldmVsLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBFbmVteUNvbmZpZyA9IHtcclxuICAgIG5hbWU6IHN0cmluZyAgLy8gbXVzdCBiZSBzYW1lIGFzIGNvbmZpZyBvYmplY3QgbmFtZVxyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZyAgLy8gbmFtZSB0byBiZSBkaXNwbGF5ZWQgdG8gcGxheWVyXHJcbiAgICBjbGFzczogYW55ICAvLyBjbGFzcyBvZiB0aGUgZW5lbXkgYXMgZGVmaW5lZCBpbiAuL2VuZW15LnRzXHJcbiAgICBocDogKGludGVnZXIpID0+IGludGVnZXIgIC8vIGNhbiBzY2FsZSB3aXRoIHdhdmVcclxuICAgIHNwZWVkOiBudW1iZXIgIC8vIGZyYWN0aW9uIG9mIHBhdGhcclxuICAgIG1vbmV5OiBpbnRlZ2VyICAvLyBvbi1raWxsIHJld2FyZFxyXG4gICAgZGFtYWdlOiBpbnRlZ2VyICAvLyBkYW1hZ2UgZGVhbHQgb24gcmVhY2hpbmcgZW5kXHJcbiAgICBhcm1vdXI6IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBmbGF0IHJlZHVjdGlvbiBvZiBpbmNvbWluZyBkYW1hZ2VcclxuICAgIGRhbmdlcjogaW50ZWdlciAgLy8gZm9yIGNhbGN1bGF0aW5nIHdhdmUgZGlmZmljdWx0eVxyXG4gICAgc3ByaXRlTmFtZTogc3RyaW5nICAvLyBzcHJpdGUgYXMgaW1wb3J0ZWQgaW4gbWV0YVNjZW5lLnByZWxvYWRcclxuICAgIHRpbnQ6IGludGVnZXJcclxuICAgIHNwbGl0PzogeyAgLy8gb3B0aW9uYWwgc3BsaXQgaW5mb1xyXG4gICAgICAgIGNmZzogRW5lbXlDb25maWcgIC8vIFRPRE86IG1ha2Ugc3BsaXQgaW50byBtdWx0aXBsZSB0eXBlcyBwb3NzaWJsZT9cclxuICAgICAgICBhbW91bnQ6IGludGVnZXJcclxuICAgIH1cclxuICAgIG1pbldhdmU6IGludGVnZXIgIC8vIGZpcnN0IHdhdmUgdGhpcyBjYW4gc3Bhd24sIC0xIHRvIG5ldmVyIHNwYXduXHJcbiAgICBibHVyYj86IHN0cmluZyAgLy8gc2hvd24gdG8gcGxheWVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXZWFrOiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ1dlYWsnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ05vcm1hbCcsXHJcbiAgICAnY2xhc3MnOiBlbmVtLldlYWtFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDcqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXHJcbiAgICAnbW9uZXknOiAxLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICd3ZWFrRW5lbXknLFxyXG4gICAgJ2Rhbmdlcic6IDEwLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogMCxcclxuICAgICdibHVyYic6ICdUb28gY3V0ZSB0byBraWxsLi4uIHN1cmVseS4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGYXQ6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnRmF0JyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdDaG9uaycsXHJcbiAgICAnY2xhc3MnOiBlbmVtLkZhdEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwMCArIDM1ICogKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gNDAwMDAsXHJcbiAgICAnbW9uZXknOiA0LFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMTAwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZmF0RW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogMTQsXHJcblx0J2JsdXJiJzogJ0xhcmdlIGFuZCBpbiBjaGFyZ2UuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXJtb3VyZWQ6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnQXJtb3VyZWQnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ0FybW91cmVkJyxcclxuICAgICdjbGFzcyc6IGVuZW0uQXJtb3VyZWRFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDcqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMzAwMDAsXHJcbiAgICAnbW9uZXknOiAzLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IE1hdGgubWluKDMgKyAoTWF0aC5mbG9vcih3YXZlLzUpKSwxNCksXHJcbiAgICAnZGFuZ2VyJzogMTAwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnYXJtb3VyZWRFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAxMCxcclxuXHQnYmx1cmInOiAnVGhlIGhhdCBpcyBzdXJwcmlzaW5nbHkgc3R1cmR5LidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZhc3Q6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnRmFzdCcsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BlZWR5JyxcclxuICAgICdjbGFzcyc6IGVuZW0uRmFzdEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDE1ICsgNSood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyAxMDAwMCxcclxuICAgICdtb25leSc6IDEsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAzMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ2Zhc3RFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiA2LFxyXG5cdCdibHVyYic6ICdUaGUgYm9vdHMgYXJlblxcJ3QganVzdCBmb3Igc2hvdyEnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTcGxpdHRlclNtYWxsOiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ1NwbGl0dGVyU21hbGwnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1NwbGl0dGVyIGJhYnknLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5TcGxpdHRlclNtYWxsRW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTArNCood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcclxuICAgICdtb25leSc6IDAsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAyMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyU21hbGxFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAtMSxcclxuXHQnYmx1cmInOiAnQXd3LCBsb29rLCB0aGV5XFwncmUganVzdCBiYWJpZXMhJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJCaWc6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJCaWcnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1NwbGl0dGVyJyxcclxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJCaWdFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDUqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMzAwMDAsXHJcbiAgICAnbW9uZXknOiAyLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMzAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdzcGxpdHRlckJpZ0VuZW15JyxcclxuICAgICd0aW50JzogMHhmZmZmZmYsXHJcbiAgICAnc3BsaXQnOiB7XHJcbiAgICAgICAgJ2NmZyc6IFNwbGl0dGVyU21hbGwsXHJcbiAgICAgICAgJ2Ftb3VudCc6IDJcclxuICAgIH0sXHJcbiAgICAnbWluV2F2ZSc6IDgsXHJcblx0J2JsdXJiJzogJ0V5ZXMgdG8gbWVldCB5b3UuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJGYXQ6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJGYXQnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1RoZSBCaWcgT25lJyxcclxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJGYXRFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAxMDAgKyAxMCood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyA0MDAwMCxcclxuICAgICdtb25leSc6IDIsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAyMDAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdzcGxpdHRlckZhdEVuZW15JyxcclxuICAgICd0aW50JzogMHhmZmZmZmYsXHJcbiAgICAnc3BsaXQnOiB7XHJcbiAgICAgICAgJ2NmZyc6IFNwbGl0dGVyQmlnLFxyXG4gICAgICAgICdhbW91bnQnOiAyXHJcbiAgICB9LFxyXG4gICAgJ21pbldhdmUnOiAxOCxcclxuXHQnYmx1cmInOiAnRXllcyB0byBtZWV0IHlvdS4uLiB0d28uJ1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBFTkVNWV9DT05GSUdTID0gW1dlYWssIEZhdCwgQXJtb3VyZWQsIEZhc3QsIFNwbGl0dGVyQmlnLCBTcGxpdHRlclNtYWxsLCBTcGxpdHRlckZhdF1cclxuXHJcblxyXG5leHBvcnQgdHlwZSBUb3dlckNvbmZpZyA9IHtcclxuICAgIG5hbWU6IHN0cmluZ1xyXG4gICAgZGFtYWdlOiAoaW50ZWdlcikgPT4gbnVtYmVyXHJcbiAgICBmaXJlcmF0ZTogKGludGVnZXIpID0+IG51bWJlciAgLy8gbWlsaXNlY29uZHMgYmV0d2VlbiBlYWNoIHNob3RcclxuICAgIHJhbmdlOiAoaW50ZWdlcikgPT4gbnVtYmVyXHJcbiAgICBudW1UYXJnZXRzPzogKGludGVnZXIpID0+IGludGVnZXIgIC8vIHNldCBmb3IgdG93ZXJzIHRoYXQgdGFyZ2V0IG11bHRpcGxlIGVuZW1pZXNcclxuICAgIGJ1bGxldFNwZWVkTW9kOiBudW1iZXIgIC8vIGJ1bGxldCB3aWxsIHJlYWNoIHJhbmdlIGluIDEvYnVsbGV0U3BlZWRNb2Qgc2Vjb25kc1xyXG4gICAgcHJpY2U6IG51bWJlclxyXG4gICAgc3ByaXRlQmFzZTogaW50ZWdlclxyXG4gICAgc3ByaXRlTWlkOiBpbnRlZ2VyXHJcbiAgICBzcHJpdGVUb3A6IGludGVnZXJcclxuICAgIHRpbnRCYXNlOiBpbnRlZ2VyXHJcbiAgICB0aW50TWlkOiBpbnRlZ2VyXHJcbiAgICB0aW50VG9wOiBpbnRlZ2VyXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQmFzaWM6IFRvd2VyQ29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiBcIkJhc2ljXCIsXHJcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMTUgKyAzMCAqIChsZXZlbC0xKSxcclxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDEwMDAsXHJcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiAxMjUsXHJcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA0LFxyXG4gICAgJ3ByaWNlJzogNSxcclxuICAgICdzcHJpdGVCYXNlJzogMCxcclxuICAgICdzcHJpdGVNaWQnOiAwLFxyXG4gICAgJ3Nwcml0ZVRvcCc6IDAsXHJcbiAgICAndGludEJhc2UnOiAweGZmZmZmZixcclxuICAgICd0aW50TWlkJzogMHg2NzVhOWMsXHJcbiAgICAndGludFRvcCc6IDB4YWFhYWZmLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogXCJOb3RoaW5nIGZhbmN5LiBEYW1hZ2UgZ3Jvd3Mgd2l0aCBsZXZlbC5cIixcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTbmlwZXI6IFRvd2VyQ29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiBcIlNuaXBlclwiLFxyXG4gICAgJ2RhbWFnZSc6IGxldmVsID0+IDUwICsgMTIwICogKGxldmVsLTEpLFxyXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gNDAwMCxcclxuICAgICdyYW5nZSc6IGxldmVsID0+IDIwMCArIDM1ICogbGV2ZWwsXHJcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA1LFxyXG4gICAgJ3ByaWNlJzogMTAsXHJcbiAgICAnc3ByaXRlQmFzZSc6IDAsXHJcbiAgICAnc3ByaXRlTWlkJzogMCxcclxuICAgICdzcHJpdGVUb3AnOiAxLFxyXG4gICAgJ3RpbnRCYXNlJzogMHhmZmZmZmYsXHJcbiAgICAndGludE1pZCc6IDB4M2E3MTVkLFxyXG4gICAgJ3RpbnRUb3AnOiAweDQ4YWM4MSxcclxuICAgICdkZXNjcmlwdGlvbic6IFwiTG9uZyByYW5nZSwgYnV0IGZpcmVzIHNsb3dseS4gRGFtYWdlIGFuZCByYW5nZSBncm93IHdpdGggbGV2ZWwuXCIsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgTXVsdGlzaG90OiBUb3dlckNvbmZpZyA9IHtcclxuICAgICduYW1lJzogXCJNdWx0aXNob3RcIixcclxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiAxNSArIDIwKihsZXZlbC0xKSxcclxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDEwMDAsXHJcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiA5NSArIDUqKGxldmVsLTEpLFxyXG4gICAgJ251bVRhcmdldHMnOiBsZXZlbCA9PiAzICsgbGV2ZWwsXHJcbiAgICAnYnVsbGV0U3BlZWRNb2QnOiA0LFxyXG4gICAgJ3ByaWNlJzogNyxcclxuICAgICdzcHJpdGVCYXNlJzogMCxcclxuICAgICdzcHJpdGVNaWQnOiAwLFxyXG4gICAgJ3Nwcml0ZVRvcCc6IDIsXHJcbiAgICAndGludEJhc2UnOiAweGZmZmZmZixcclxuICAgICd0aW50TWlkJzogMHg3ZjRkNjEsXHJcbiAgICAndGludFRvcCc6IDB4YWE0ZTYxLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogXCJDYW4gc2hvb3QgYXQgbXVsdGlwbGUgZW5lbWllcyBhdCBvbmNlLiBEYW1hZ2UsIHJhbmdlLCBhbmQgbnVtYmVyIG9mIHRhcmdldHMgZ3JvdyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVE9XRVJfQ09ORklHUyA9IFtCYXNpYywgTXVsdGlzaG90LCBTbmlwZXJdIiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uLCBQb3NpdGlvbiwgVGVycmFpbiB9IGZyb20gXCIuL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcclxuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL21ldGFTY2VuZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuICAgIHN0YXRzOiBjZmcuRW5lbXlDb25maWc7XHJcblxyXG4gICAgZm9sbG93ZXI6IGFueVxyXG4gICAgaHA6IGludGVnZXJcclxuICAgIHlPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcclxuICAgIHhPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcclxuICAgIHNjZW5lOiBURFNjZW5lIC8vIHR5cGUgYXNzZXJ0aW9uXHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgc3RhdHMpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgc3RhdHMuc3ByaXRlTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLmZvbGxvd2VyID0geyB0OiAwLCB2ZWM6IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCkgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY2VuZSA9PSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hY3RpdmVTY2VuZSlcclxuICAgICAgICAgICAgICAgICh0aGlzLnNjZW5lLnNjZW5lLmdldCgnaHVkU2NlbmUnKSBhcyBIdWRTY2VuZSkuc2V0RGVzY3JpcHRpb25FbmVteSh0aGlzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcclxuICAgICAgICAvLyBtb3ZlIHRoZSB0IHBvaW50IGFsb25nIHRoZSBwYXRoLCAwIGlzIHRoZSBzdGFydCBhbmQgMSBpcyB0aGUgZW5kXHJcbiAgICAgICAgdGhpcy5mb2xsb3dlci50ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBuZXcgeCBhbmQgeSBjb29yZGluYXRlcyBpbiB2ZWNcclxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudmVjLnggPiB0aGlzLnggLSB0aGlzLnhPZmZzZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnZlYy54IDwgdGhpcy54IC0gdGhpcy54T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1cGRhdGUgZW5lbXkgeCBhbmQgeSB0byB0aGUgbmV3bHkgb2J0YWluZWQgeCBhbmQgeVxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5mb2xsb3dlci52ZWMueCArIHRoaXMueE9mZnNldCwgdGhpcy5mb2xsb3dlci52ZWMueSArIHRoaXMueU9mZnNldCk7XHJcblxyXG4gICAgICAgIC8vIGlmIHdlIGhhdmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBwYXRoLCByZW1vdmUgdGhlIGVuZW15XHJcbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudCA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVhY2hFbmQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDFcclxuICAgICAgICB0aGlzLmFuZ2xlID0gMFxyXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxXHJcbiAgICB9XHJcblxyXG4gICAgcmVhY2hFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZW1haW5pbmdEYW5nZXIgKz0gdGhpcy5zdGF0cy5kYW5nZXI7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBodWRTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwiaHVkU2NlbmVcIikgYXMgSHVkU2NlbmVcclxuXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uaHAgLT0gdGhpcy5zdGF0cy5kYW1hZ2U7XHJcbiAgICAgICAgICAgIGh1ZFNjZW5lLmhwUmVkbmVzcyA9IDFcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGFTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwibWV0YVNjZW5lXCIpIGFzIE1ldGFTY2VuZVxyXG4gICAgICAgICAgICBtZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKS5jYW1lcmFzLm1haW4uc2hha2UoMjAwLCAwLjAwNSlcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUuZGFtYWdlU291bmQucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZXNwYXduKHRoaXMuc3RhdHMsIHRoaXMuaHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmVuZW15RW5kQ2FsbGJhY2sodGhpcy5zdGF0cy5kYW1hZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0T25QYXRoKHdhdmUsIHJlc3Bhd25IZWFsdGgsIHN0YXJ0X3QgPSAwKSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSB0IHBhcmFtZXRlciBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhdGhcclxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgPSBzdGFydF90O1xyXG5cclxuICAgICAgICBpZiAocmVzcGF3bkhlYWx0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuaHAgPSByZXNwYXduSGVhbHRoO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMuc3RhdHMuaHAod2F2ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnN0YXRzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMudGludCA9IHRoaXMuc3RhdHMudGludDtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHggYW5kIHkgb2YgdGhlIGdpdmVuIHQgcG9pbnRcclxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSB4IGFuZCB5IG9mIG91ciBlbmVteSB0byB0aGUgcmVjZWl2ZWQgZnJvbSB0aGUgcHJldmlvdXMgc3RlcFxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5mb2xsb3dlci52ZWMueCwgdGhpcy5mb2xsb3dlci52ZWMueSk7XHJcblxyXG4gICAgICAgIGxldCBmcmFtZVJhdGUgPSBNYXRoLm1pbig2MCwgdGhpcy5zdGF0cy5zcGVlZCAqIDQwMDAwICogMTUpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJmYXRFbmVteVwiIHx8IHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PT0gXCJzcGxpdHRlckZhdEVuZW15XCIpIHsgLy8gaGFja1xyXG4gICAgICAgICAgICBmcmFtZVJhdGUgKj0gMC41XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoe1xyXG4gICAgICAgICAgICBrZXk6IGAke3RoaXMuc3RhdHMuc3ByaXRlTmFtZX1fd2Fsa2AsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZnJhbWVSYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZURhbWFnZShkYW1hZ2U6IGludGVnZXIpIHtcclxuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZSAtIHRoaXMuc3RhdHMuYXJtb3VyKHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmUpO1xyXG5cclxuICAgICAgICAvLyBpZiBocCBkcm9wcyBiZWxvdyAwIHdlIGRlYWN0aXZhdGUgdGhpcyBlbmVteVxyXG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVhdGgoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlYXRoKCkge1xyXG4gICAgICAgIHRoaXMub25EZWF0aEFiaWxpdHkoKTtcclxuICAgICAgICBpZiAodGhpcy5zdGF0cy5zcGxpdClcclxuICAgICAgICAgICAgdGhpcy5vbkRlYXRoU3BsaXQoKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7ICAvLyBBZGQgZ29sZCBpbiBiYXNlIGxheWVyIG9ubHlcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyXHJcbiAgICAgICAgICAgIFBsYXllckluZm8ubW9uZXkgKz0gdGhpcy5zdGF0cy5tb25leTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICBhbmdsZTogUGxheWVySW5mby5STkcuc2lnbigpICogMTgwLFxyXG4gICAgICAgICAgICBzY2FsZTogMC41LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoNjAwLCA4MDApLFxyXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUubWV0YVNjZW5lLmVuZW1pZXNTbGFpbisrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGhTcGxpdCgpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0cy5zcGxpdC5hbW91bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3RW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5zdGF0cy5zcGxpdC5jZmcubmFtZV0uZ2V0KClcclxuICAgICAgICAgICAgbmV3RW5lbXkuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgbmV3RW5lbXkuc2V0QWN0aXZlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyIC09IHRoaXMuc3RhdHMuc3BsaXQuY2ZnLmRhbmdlcjtcclxuICAgICAgICAgICAgbmV3RW5lbXkuc3RhcnRPblBhdGgodGhpcy5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZSwgMCwgdGhpcy5mb2xsb3dlci50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWF0aEFiaWxpdHkoKSB7ICAvLyBvdmVycmlkZSB0aGlzIGZvciBzcGVjaWFsIG9uLWRlYXRoIGFiaWxpdGllc1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2Vha0VuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5XZWFrKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmF0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkZhdClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFybW91cmVkRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkFybW91cmVkKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmFzdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5GYXN0KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJCaWdFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJCaWcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGxpdHRlclNtYWxsRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyU21hbGwpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGxpdHRlckZhdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlckZhdClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxyXG5pbXBvcnQgeyBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIHN0YXRpYyBIRUFMVEhfQ09MT1IgPSAweGY4ZmYzNiAvLzB4ZmY0NDQ0XHJcbiAgICBzdGF0aWMgSEVBTFRIX0xPU1NfQ09MT1IgPSAweDdkN2Q3ZCAvLyAweDQ0ZmY0NFxyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXIgPSAxICAvLyAwIHRvIDFcclxuICAgIHNsb3dIZWFsdGg6IG51bWJlclxyXG5cclxuICAgIGJnQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXHJcbiAgICBoZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuICAgIHNsb3dIZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuXHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgd2lkdGg6IG51bWJlclxyXG4gICAgbWF4SGVhbHRoOiBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2UoeCwgeSwgd2lkdGgsIGhlYWx0aD0wKSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuXHJcbiAgICAgICAgLy8gaGVhbHRoIGJhciBiYXNlL2JhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJnQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoICsgNCwgNiwgMHgwMDAwMDApXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5iZ0JhcilcclxuXHJcbiAgICAgICAgLy8gdmlzdWFsaXphdGlvbiBvZiBoZWFsdGggbG9zc2VzXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgICB3aWR0aCwgNCxcclxuICAgICAgICAgICAgSGVhbHRoQmFyLkhFQUxUSF9MT1NTX0NPTE9SLFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnNsb3dIZWFsdGhCYXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaGVhbHRoIGJhciBpdHNlbGZcclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgd2lkdGgsIDQsXHJcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfQ09MT1IsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoQmFyKVxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IGhlYWx0aFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWFsdGgoaCkge1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGgpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWFsdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsZXZlbFVwKCkge1xyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIGNvbnN0IGNvZWYgPSBNYXRoLnBvdygwLjk5LCBkZWx0YS8xMDAwICogNjApXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gY29lZiAqIHRoaXMuc2xvd0hlYWx0aCArICgxIC0gY29lZikgKiB0aGlzLmhlYWx0aFxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLmhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNsb3dIZWFsdGhcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXHJcbmltcG9ydCB7IEh1ZFNjZW5lLCBIVURfV0lEVEggfSBmcm9tICcuL3NjZW5lcy9odWRTY2VuZSc7XHJcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21ldGFTY2VuZSc7XHJcbmltcG9ydCB7IFREU2NlbmUsIFREX1NDRU5FX0hFSUdIVCwgVERfU0NFTkVfV0lEVEggfSBmcm9tICcuL3NjZW5lcy90ZFNjZW5lJ1xyXG5pbXBvcnQgeyBURFNjZW5lQ29uZmlnIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZUNvbmZpZyc7XHJcbmltcG9ydCB7IFRlcnJhaW4gfSBmcm9tICcuL3RlcnJhaW4nO1xyXG5cclxubGV0IG1ldGFTY2VuZSA9IG5ldyBNZXRhU2NlbmUoKVxyXG5sZXQgaHVkU2NlbmUgPSBuZXcgSHVkU2NlbmUobWV0YVNjZW5lKTtcclxuXHJcbmxldCBsZXZlbHMgPSBbXHJcbiAgbWV0YVNjZW5lLFxyXG4gIGh1ZFNjZW5lLFxyXG5dXHJcblxyXG5jb25zdCBnYW1lQ29uZmlnID0ge1xyXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gIHBhcmVudDogJ2NvbnRlbnQnLFxyXG4gIHdpZHRoOiBURF9TQ0VORV9XSURUSCArIEhVRF9XSURUSCAqIDIsXHJcbiAgaGVpZ2h0OiBURF9TQ0VORV9IRUlHSFQsXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ2FyY2FkZSdcclxuICB9LFxyXG4gIHNjZW5lOiBsZXZlbHMsXHJcbiAgc2VlZDogW1wiNDJcIl1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IFBMQVlFUl9IRUFMVEhfUkVHRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbmZvIHtcclxuICAgIHN0YXRpYyBtb25leTogbnVtYmVyID0gNTtcclxuICAgIHN0YXRpYyBocDogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgdGltZVNjYWxlOiBudW1iZXIgPSAxO1xyXG4gICAgLy8gc3RhdGljIFJORyA9IG5ldyBQaGFzZXIuTWF0aC5SYW5kb21EYXRhR2VuZXJhdG9yKFtcIjQyXCJdKTtcclxuICAgIHN0YXRpYyBSTkcgPSBuZXcgUGhhc2VyLk1hdGguUmFuZG9tRGF0YUdlbmVyYXRvcigpO1xyXG5cclxuICAgIHN0YXRpYyByZWdlblByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgd2F2ZUhlYWx0aFJlZ2VuKCkge1xyXG4gICAgICAgIFBsYXllckluZm8ucmVnZW5Qcm9ncmVzcyArPSBQTEFZRVJfSEVBTFRIX1JFR0VOO1xyXG4gICAgICAgIGxldCByZXN0b3JlZCA9IE1hdGguZmxvb3IoUGxheWVySW5mby5yZWdlblByb2dyZXNzKTtcclxuICAgICAgICBQbGF5ZXJJbmZvLmhwICs9IHJlc3RvcmVkO1xyXG4gICAgICAgIFBsYXllckluZm8ucmVnZW5Qcm9ncmVzcyAtPSByZXN0b3JlZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9tZXRhU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT3ZlclNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZVxyXG4gICAgY29uc3RydWN0b3IobWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAga2V5OiBcImdhbWVPdmVyU2NlbmVcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKDUxMiwgMjU2LCAxMDI0LCA1MTIsIDB4YWE0NDQ0LCAwLjUpO1xyXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSg1MTIsIDI1Ni00MCwgNTEyLTEyOCwgMjU2LTY0LCAweDQ0NDQ0NCk7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDE2MCwgXCJZT1UgRElFRFwiLCB7Zm9udFNpemU6ICczMHB4IGJvbGQnLCBjb2xvcjogXCJyZWRcIn0pLnNldE9yaWdpbigwLjUpO1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAxOTAsIGBMYXN0IHdhdmUgd2l0bmVzc2VkOiAke3RoaXMubWV0YVNjZW5lLmdldFJvb3RURFNjZW5lKCkud2F2ZU1hbmFnZXIuY3VycmVudFdhdmV9YCkuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIxMCwgYFdlYWx0aCB0YWtlbiB0byB0aGUgZ3JhdmU6ICR7UGxheWVySW5mby5tb25leX1gKS5zZXRPcmlnaW4oMC41KTtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMjMwLCBgSW52YWRlcnMgdmFucXVpc2hlZDogJHt0aGlzLm1ldGFTY2VuZS5lbmVtaWVzU2xhaW59YCkuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAyODAsIGBDTElDSyBUTyBEQVJFIEFHQUlOYCkuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlbG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudFRpbWUgPSAwO1xyXG4gICAgcmVsb2FkZWQgPSBmYWxzZTtcclxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgKz0gZGVsdGFcclxuICAgIH1cclxuXHJcblxyXG5cclxufSIsImltcG9ydCB7IFRvd2VyQ29uZmlnLCBUT1dFUl9DT05GSUdTLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLCBFbmVteUNvbmZpZywgV2F2ZUNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4uL2VuZW15XCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBNQVhfSEVJR0hULCBNQVhfV0lEVEgsIFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4uL3Rvd2Vyc1wiO1xyXG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tIFwiLi9tZXRhU2NlbmVcIjtcclxuaW1wb3J0IHsgVERTY2VuZSwgVERfU0NFTkVfSEVJR0hULCBURF9TQ0VORV9XSURUSCB9IGZyb20gXCIuL3RkU2NlbmVcIjtcclxuXHJcbmNvbnN0IEhVRF9CR19DT0xPUiA9IDB4ZmY4YTZkICAvLzB4ZmZhYTdkXHJcbmV4cG9ydCBjb25zdCBIVURfV0lEVEggPSBUSUxFX1NJWkUgKiAzXHJcblxyXG5leHBvcnQgY2xhc3MgSHVkU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIG1vbmV5VGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIHdhdmVUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgaHBUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgaHBSZWRuZXNzOiBudW1iZXIgLy8gMCB0byAxXHJcbiAgICBkZXB0aFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBnb1VwVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGRlc2NyaXB0aW9uVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuXHJcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZTtcclxuICAgIGJhY2tUb1Jvb3RTY2VuZUJ1dHRvbjogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBidXlUb3dlckljb25zOiBCdXlUb3dlckljb25bXVxyXG5cclxuICAgIGxhc3RBY3RpdmVTY2VuZTogVERTY2VuZVxyXG4gICAgcGFyZW50U2NlbmVzSW1hZ2VzOiBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2VbXVxyXG4gICAgc2xvd1NwZWVkVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBmYXN0U3BlZWRUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAga2V5OiBcImh1ZFNjZW5lXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lID0gbWV0YVNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgbGV0IHcgPSBIVURfV0lEVEhcclxuICAgICAgICBsZXQgaCA9IFRJTEVfU0laRSAqIE1BWF9IRUlHSFRcclxuICAgICAgICBjb25zdCB4TGVmdCA9IHcgLyAyXHJcbiAgICAgICAgY29uc3QgeFJpZ2h0ID0gdyArIFREX1NDRU5FX1dJRFRIICsgdyAvIDJcclxuXHJcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKHcgLyAyLCBoIC8gMiwgdywgaCwgSFVEX0JHX0NPTE9SKVxyXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZShcclxuICAgICAgICAgICAgeFJpZ2h0LCBoIC8gMixcclxuICAgICAgICAgICAgdywgaCxcclxuICAgICAgICAgICAgSFVEX0JHX0NPTE9SLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5tb25leVRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCAyMCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xyXG4gICAgICAgIHRoaXMubW9uZXlUZXh0LnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgdGhpcy5ocFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0MCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xyXG4gICAgICAgIHRoaXMuaHBUZXh0LnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgdGhpcy5ocFJlZG5lc3MgPSAwXHJcblxyXG4gICAgICAgIHRoaXMud2F2ZVRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA2MCwgXCJcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xyXG4gICAgICAgIHRoaXMud2F2ZVRleHQuc2V0T3JpZ2luKDAuNSlcclxuXHJcbiAgICAgICAgdGhpcy5kZXB0aFRleHQgPSB0aGlzLmFkZC50ZXh0KHhSaWdodCwgMjAsIFwiRGVwdGg6IFwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0T3JpZ2luKDAuNSlcclxuXHJcbiAgICAgICAgdGhpcy5nb1VwVGV4dCA9IHRoaXMuYWRkLnRleHQoeFJpZ2h0LCA1MCwgXCJHbyB1cCB0bzpcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xyXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUoZmFsc2UpXHJcblxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0ID0gdGhpcy5hZGQudGV4dCg1LCAzMDAsIFwiXCIsIHsgZm9udFNpemU6ICcxMHB0JyB9KTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRXb3JkV3JhcFdpZHRoKEhVRF9XSURUSCAtIDEwLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucyA9IFtdO1xyXG4gICAgICAgIGxldCB0b3dlclR5cGVJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgdG93ZXJDb25maWcgb2YgVE9XRVJfQ09ORklHUykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1eVRvd2VySWNvbnMucHVzaChuZXcgQnV5VG93ZXJJY29uKHRoaXMsIHcgLyAyLCAxMTAgKyA3MCAqIHRvd2VyVHlwZUluZGV4LCB0b3dlckNvbmZpZykpXHJcbiAgICAgICAgICAgIHRvd2VyVHlwZUluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBwYWQgPSAzXHJcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNDUwLCBcIj5TbG93PFwiLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQ3NSwgXCJGYXN0XCIsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gMSwgbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIj5TbG93PFwiKVxyXG4gICAgICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQuc2V0VGV4dChcIkZhc3RcIilcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFBsYXllckluZm8udGltZVNjYWxlID0gNCwgbnVsbFxyXG4gICAgICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0VGV4dChcIlNsb3dcIilcclxuICAgICAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldFRleHQoXCI+RmFzdDxcIilcclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xyXG4gICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzID0gW11cclxuICAgIH1cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGFTY2VuZS5pc0dhbWVPdmVyKXtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lICs9IGRlbHRhO1xyXG5cclxuICAgICAgICB0aGlzLm1vbmV5VGV4dC5zZXRUZXh0KCdNb25leTogJyArIFBsYXllckluZm8ubW9uZXkpXHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRXYXZlID0gdGhpcy5tZXRhU2NlbmUuZ2V0Um9vdFREU2NlbmUoKS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZVxyXG4gICAgICAgIHRoaXMud2F2ZVRleHQuc2V0VGV4dChgV2F2ZTogJHtjdXJyZW50V2F2ZX1gKVxyXG5cclxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRUZXh0KCdIUDogJyArIFBsYXllckluZm8uaHApXHJcblxyXG4gICAgICAgIHRoaXMuaHBUZXh0LnNldENvbG9yKFBoYXNlci5EaXNwbGF5LkNvbG9yLlJHQlRvU3RyaW5nKFxyXG4gICAgICAgICAgICAyNTUsIDI1NSAqICgxIC0gdGhpcy5ocFJlZG5lc3MpLCAyNTUgKiAoMSAtIHRoaXMuaHBSZWRuZXNzKVxyXG4gICAgICAgICkpXHJcbiAgICAgICAgY29uc3Qgc2Vjc1RvV2hpdGUgPSAwLjVcclxuICAgICAgICB0aGlzLmhwUmVkbmVzcyA9IE1hdGgubWF4KDAsIHRoaXMuaHBSZWRuZXNzIC0gZGVsdGEgLyAxMDAwIC8gc2Vjc1RvV2hpdGUpXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlSW5mb0Jhc2VkT25BY3RpdmVTY2VuZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGljb24gb2YgdGhpcy5idXlUb3dlckljb25zKSB7XHJcbiAgICAgICAgICAgIGljb24udXBkYXRlKHRoaXMubGFzdFRpbWUsIGRlbHRhKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFBsYXllckluZm8uaHAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1ldGFTY2VuZS5nYW1lT3ZlcigpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSW5mb0Jhc2VkT25BY3RpdmVTY2VuZSgpIHtcclxuICAgICAgICBsZXQgYWN0aXZlU2NlbmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpO1xyXG4gICAgICAgIGlmICghYWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgaWYgKGFjdGl2ZVNjZW5lID09IHRoaXMubGFzdEFjdGl2ZVNjZW5lKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICB0aGlzLmxhc3RBY3RpdmVTY2VuZSA9IGFjdGl2ZVNjZW5lO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUZXh0LnNldFRleHQoYERlcHRoOiAke2FjdGl2ZVNjZW5lLnNjZW5lTGV2ZWx9YClcclxuXHJcbiAgICAgICAgY29uc3QgcGFyZW50U2NlbmVzID0gdGhpcy5tZXRhU2NlbmUuZ2V0UGFyZW50U2NlbmVzVG9Sb290KClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXNbaV07XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRWaXNpYmxlKHBhcmVudFNjZW5lcy5sZW5ndGggPiAwKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gcGFyZW50U2NlbmVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGxldCBzY2VuZUluZGV4ID0gKHBhcmVudFNjZW5lcy5sZW5ndGggLSAxKSAtIGk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZSA9IDAuMVxyXG4gICAgICAgICAgICBjb25zdCBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCA9IDc7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRTY2VuZXMubGVuZ3RoID4gbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQpIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlIC89ICgocGFyZW50U2NlbmVzLmxlbmd0aCAvIG1heEltYWdlc05vcm1hbFNjYWxlRml0KSAqIDEuMDIyKSAvLyBOT1RFOiBEcmlmdHMsIGhlbmNlIHJlLXNjYWxlIGJ5IHRoaXMgbWFnaWMgbnVtYmVyLCBpZGsgd2h5OyBubyB0aW1lIHRvIGZpZ3VyZSBvdXRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IG5ld0J1dHRvbiA9IHRoaXMuYWRkLmltYWdlKFxyXG4gICAgICAgICAgICAgICAgVERfU0NFTkVfV0lEVEggKyBIVURfV0lEVEggKiAxLjUsXHJcbiAgICAgICAgICAgICAgICAxMDAgKyBzY2VuZUluZGV4ICogc2NhbGUgKiBURF9TQ0VORV9IRUlHSFQgKiAxLjIsXHJcbiAgICAgICAgICAgICAgICBgc25hcC0ke3BhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXl9YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuZXdCdXR0b24uc2NhbGVYID0gc2NhbGVcclxuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWSA9IHNjYWxlXHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICBuZXdCdXR0b24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4gdGhpcy5tZXRhU2NlbmUuc3dpdGNoVG9TY2VuZShwYXJlbnRTY2VuZXNbaV0uc2NlbmUua2V5LCBmYWxzZSksIHRoaXMubWV0YVNjZW5lKVxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3QnV0dG9uXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uVG93ZXIoY29uZmlnOiBUb3dlckNvbmZpZywgdG93ZXI6IFRvd2VyID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBsZXZlbCA9IDFcclxuICAgICAgICBsZXQgdGV4dCA9IFwiXCJcclxuXHJcbiAgICAgICAgaWYgKHRvd2VyID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBgJHtjb25maWcubmFtZX06ICR7Y29uZmlnLmRlc2NyaXB0aW9ufVxcbmBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZXh0ID0gYExldmVsICR7dG93ZXIubGV2ZWx9ICR7Y29uZmlnLm5hbWV9IHRvd2VyLlxcbmBcclxuICAgICAgICAgICAgbGV2ZWwgPSB0b3dlci5sZXZlbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGV4dCArPSBgRGFtYWdlOiAke2NvbmZpZy5kYW1hZ2UobGV2ZWwpfS5cXG5gXHJcbiAgICAgICAgdGV4dCArPSBgRmlyZSByYXRlOiAke2NvbmZpZy5maXJlcmF0ZShsZXZlbCkvMTAwMH1zLlxcbmBcclxuICAgICAgICB0ZXh0ICs9IGBSYW5nZTogJHtjb25maWcucmFuZ2UobGV2ZWwpfS5cXG5gXHJcblxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFRleHQodGV4dClcclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvbkVuZW15KGVuZW15OiBFbmVteUJhc2UpIHtcclxuICAgICAgICBsZXQgdGV4dCA9IFwiXCJcclxuICAgICAgICBpZiAoZW5lbXkpIHtcclxuICAgICAgICAgICAgbGV0IHdhdmU6IGludGVnZXI7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWV0YVNjZW5lLmFjdGl2ZVNjZW5lLnNjZW5lTGV2ZWwgPT09IDApXHJcbiAgICAgICAgICAgICAgICB3YXZlID0gZW5lbXkuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHdhdmUgPSBXYXZlQ29uZmlnLmxldmVsVG9XYXZlKHRoaXMubWV0YVNjZW5lLmFjdGl2ZVNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpO1xyXG5cclxuICAgICAgICAgICAgdGV4dCArPSBgJHtlbmVteS5zdGF0cy5kaXNwbGF5TmFtZX1cXG5gO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGBIZWFsdGg6ICR7ZW5lbXkuaHB9LyR7ZW5lbXkuc3RhdHMuaHAod2F2ZSl9XFxuYDtcclxuICAgICAgICAgICAgdGV4dCArPSBgQXJtb3VyOiAke2VuZW15LnN0YXRzLmFybW91cih3YXZlKX1cXG5gO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGBTcGVlZDogJHtlbmVteS5zcGVlZCAqIDYwMDAwfVxcbmA7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYExvb3Q6ICR7ZW5lbXkuc3RhdHMubW9uZXl9XFxuYDtcclxuICAgICAgICAgICAgaWYoZW5lbXkuc3RhdHMuYmx1cmIpXHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGBcXG4ke2VuZW15LnN0YXRzLmJsdXJifVxcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFRleHQodGV4dClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQnV5VG93ZXJJY29uIHtcclxuICAgIHRvd2VyTmFtZTogc3RyaW5nXHJcbiAgICB0b3dlckNvbmZpZzogVG93ZXJDb25maWdcclxuXHJcbiAgICBzcHJpdGVDb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXJcclxuICAgIHByaWNlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGh1ZFNjZW5lOiBIdWRTY2VuZVxyXG5cclxuICAgIG9yaWdYOiBudW1iZXJcclxuICAgIG9yaWdZOiBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodWRTY2VuZTogSHVkU2NlbmUsIHgsIHksIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuaHVkU2NlbmUgPSBodWRTY2VuZVxyXG4gICAgICAgIHRoaXMub3JpZ1ggPSB4XHJcbiAgICAgICAgdGhpcy5vcmlnWSA9IHlcclxuICAgICAgICB0aGlzLnRvd2VyTmFtZSA9IGNvbmZpZy5uYW1lXHJcbiAgICAgICAgdGhpcy50b3dlckNvbmZpZyA9IGNvbmZpZ1xyXG5cclxuICAgICAgICBsZXQgdG93ZXJCYXNlID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJiYXNlcycsIGNvbmZpZy5zcHJpdGVCYXNlKTtcclxuICAgICAgICB0b3dlckJhc2Uuc2V0VGludChjb25maWcudGludEJhc2UpO1xyXG4gICAgICAgIGxldCB0b3dlck1pZCA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VybWlkcycsIGNvbmZpZy5zcHJpdGVNaWQpO1xyXG4gICAgICAgIHRvd2VyTWlkLnNldFRpbnQoY29uZmlnLnRpbnRNaWQpO1xyXG4gICAgICAgIGxldCB0b3dlclRvcCA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VydG9wcycsIGNvbmZpZy5zcHJpdGVUb3ApO1xyXG4gICAgICAgIHRvd2VyVG9wLnNldFRpbnQoY29uZmlnLnRpbnRUb3ApO1xyXG5cclxuICAgICAgICBsZXQgdG93ZXJSYW5nZSA9IGh1ZFNjZW5lLmFkZC5jaXJjbGUoXHJcbiAgICAgICAgICAgIDAsIDAsIGNvbmZpZy5yYW5nZSgxKSxcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuYWxwaGFcclxuICAgICAgICApO1xyXG4gICAgICAgIHRvd2VyUmFuZ2Uuc2V0U3Ryb2tlU3R5bGUoXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZVdpZHRoLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VDb2xvdXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRvd2VyUmFuZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHZhciBzcHJpdGVzID0gW1xyXG4gICAgICAgICAgICB0b3dlckJhc2UsXHJcbiAgICAgICAgICAgIHRvd2VyTWlkLFxyXG4gICAgICAgICAgICB0b3dlclRvcCxcclxuICAgICAgICAgICAgdG93ZXJSYW5nZSxcclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIgPSBodWRTY2VuZS5hZGQuY29udGFpbmVyKHgsIHksIHNwcml0ZXMpXHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuZ2V0QWxsKClcclxuXHJcbiAgICAgICAgY29uc3QgcGFkID0gM1xyXG4gICAgICAgIHRoaXMucHJpY2VUZXh0ID0gaHVkU2NlbmUuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIHggKyAxNSwgeSwgXCJcIiArIHRoaXMudG93ZXJDb25maWcucHJpY2UsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRTaXplKFRJTEVfU0laRSwgVElMRV9TSVpFKTtcclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiBjb25zb2xlLmxvZyhcImZvb2JhclwiKSwgdGhpcyk7XHJcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyKVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUuc2V0RGVzY3JpcHRpb25Ub3dlcihjb25maWcpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgcmFuZ2UgaW5kaWNhdG9yIHZpc2libGVcclxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5saXN0LmZvckVhY2goKHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZycsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZHJhZ1k7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnZW5kJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIG1ha2VzIHJhbmdlIGluZGljYXRvciB2aXNpYmxlXHJcbiAgICAgICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzNdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUubWV0YVNjZW5lLmJ1aWxkU291bmQucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBodWRTY2VuZS5tZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKVxyXG4gICAgICAgICAgICBzY2VuZS50b3dlck1hbmFnZXIucGxhY2VUb3dlcihwb2ludGVyLCB0aGlzLnRvd2VyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSB0aGlzLm9yaWdYXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IHRoaXMub3JpZ1lcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbnQoKSB7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMF0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRUb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNob3BJY29uVGludCh0aW50OiBudW1iZXIpIHtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRNaWQpO1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzJdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2hvcCgpIHtcclxuICAgICAgICAvLyBVbmNvbW1lbnQgdG8gcHJldmVudCBuZWdhdGl2ZSBtb25leTpcclxuICAgICAgICB0aGlzLmh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lciwgUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKVxyXG5cclxuICAgICAgICBpZiAoUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHgwMGZmMDApO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGludCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHhmZjAwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNob3BJY29uVGludCgweDk5NTU1NSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9sZE1vbmV5OiBpbnRlZ2VyID0gMFxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckluZm8ubW9uZXkgIT0gdGhpcy5vbGRNb25leSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNob3AoKTtcclxuICAgICAgICAgICAgdGhpcy5vbGRNb25leSA9IFBsYXllckluZm8ubW9uZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7VGVycmFpbn0gZnJvbSBcIi4uL3RlcnJhaW5cIlxyXG5pbXBvcnQgeyBHYW1lT3ZlclNjZW5lIH0gZnJvbSBcIi4vZ2FtZU92ZXJTY2VuZVwiO1xyXG5pbXBvcnQge1NDRU5FX1RSQU5TSVRJT05fTVMsIFREU2NlbmV9IGZyb20gXCIuL3RkU2NlbmVcIjtcclxuaW1wb3J0IHtURFNjZW5lQ29uZmlnfSBmcm9tIFwiLi90ZFNjZW5lQ29uZmlnXCJcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIGtleTogJ21ldGFTY2VuZScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBwdWJsaWMgc2NlbmVzOiBURFNjZW5lW11cclxuICAgIHB1YmxpYyBhY3RpdmVTY2VuZTogVERTY2VuZVxyXG4gICAgbWFpblNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICAgIC8vIFdoeSBhcmUgdGhlc2Ugc291bmRzIGhlcmU/IEJlY2F1c2Ugd2UncmUgb3V0IG9mIHRpbWVcclxuICAgIGJ1aWxkU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBkYW1hZ2VTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICAgIHNob290U291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBtdWx0aXNob3RTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcbiAgICBlbmVtaWVzU2xhaW46IGludGVnZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IHRoaXMuYWRkU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnNjZW5lc1swXS5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJodWRTY2VuZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluU291bmQgPSB0aGlzLnNvdW5kLmFkZChcIm1haW5fbXVzaWNcIiwge1wibG9vcFwiOiB0cnVlLCBcInZvbHVtZVwiOiAwLjA3fSk7XHJcbiAgICAgICAgdGhpcy5tYWluU291bmQucGxheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkU291bmQgPSB0aGlzLnNvdW5kLmFkZCgnYnVpbGRfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAxfSk7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2VTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdkYW1hZ2Vfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAwLjE1fSk7XHJcbiAgICAgICAgdGhpcy5zaG9vdFNvdW5kID0gdGhpcy5zb3VuZC5hZGQoJ3Nob290X3NvdW5kJywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4wM30pO1xyXG4gICAgICAgIHRoaXMubXVsdGlzaG90U291bmQgPSB0aGlzLnNvdW5kLmFkZCgnbXVsdGlzaG90X3NvdW5kJywgeyAnbG9vcCc6IGZhbHNlLCAndm9sdW1lJzogMC4wM30pO1xyXG4gICAgfVxyXG5cclxuICAvLyBDcmVhdGVzIG5ldyBTY2VuZSwgZW5hYmxlcyBpdCwgYW5kIHNldHMgaXQgaW52aXNpYmxlXHJcbiAgICBwdWJsaWMgYWRkU2NlbmUocGFyZW50U2NlbmVLZXk/OiBzdHJpbmcpOiBURFNjZW5lIHtcclxuICAgICAgICBsZXQgcGFyZW50U2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkocGFyZW50U2NlbmVLZXkpXHJcbiAgICAgICAgbGV0IHNjZW5lTGV2ZWwgPSAocGFyZW50U2NlbmU/LnNjZW5lTGV2ZWwgPz8gLTEpICsgMTtcclxuXHJcbiAgICAgICAgbGV0IHNjZW5lSW5kZXggPSB0aGlzLnNjZW5lcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3Qgc2NlbmVLZXkgPSBgdGRTY2VuZSR7c2NlbmVJbmRleH1gXHJcblxyXG4gICAgICAgIGxldCBuZXdTY2VuZSA9IG5ldyBURFNjZW5lKFxyXG4gICAgICAgICAgICBuZXcgVERTY2VuZUNvbmZpZyhuZXcgVGVycmFpbigxMCwgOCksIHNjZW5lTGV2ZWwsIHBhcmVudFNjZW5lS2V5LCBzY2VuZUtleSksXHJcbiAgICAgICAgICAgIHRoaXMsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoXHJcbiAgICAgICAgICAgIHNjZW5lS2V5LFxyXG4gICAgICAgICAgICBuZXdTY2VuZSxcclxuICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMucHVzaChuZXdTY2VuZSlcclxuICAgICAgICBuZXdTY2VuZS5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5hY3RpdmVTY2VuZSkgdGhpcy5zY2VuZS5icmluZ1RvVG9wKHRoaXMuYWN0aXZlU2NlbmUuc2NlbmUua2V5KTtcclxuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U2NlbmVCeUtleShrZXk/OiBzdHJpbmcpOiBURFNjZW5lIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBpZiAoa2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmdldChrZXkpIGFzIFREU2NlbmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG1ha2VzIGN1cnJlbnQgc2NlbmUgaW52aXNpYmxlLCBtYWtlcyBuZXcgc2NlbmUgdmlzaWJsZTsgZG9lc24ndCBjaGFuZ2UgYWN0aXZuZXNzXHJcbiAgICBwdWJsaWMgc3dpdGNoVG9TY2VuZShuZXdTY2VuZUtleTogc3RyaW5nLCBnb2luZ0luc2lkZTogYm9vbGVhbiwgaSA9IDAsIGogPSAwKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZT8uc2V0SXNGb3JlZ3JvdW5kKGZhbHNlLCBnb2luZ0luc2lkZSwgaSwgaik7XHJcbiAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KG5ld1NjZW5lS2V5KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYFN3aXRjaGluZyBmcm9tICR7dGhpcy5hY3RpdmVTY2VuZS5zY2VuZS5rZXl9IChwYXJlbnQgJHt0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lUGFyZW50S2V5fSkgdG9gXHJcbiAgICAgICAgICAgICsgYCAke25ld1NjZW5lLnNjZW5lLmtleX0gKHBhcmVudCAke25ld1NjZW5lLnNjZW5lUGFyZW50S2V5fSlgXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBuZXdTY2VuZS50aW1lLmFkZEV2ZW50KHtcclxuICAgICAgICAgICAgZGVsYXk6IFNDRU5FX1RSQU5TSVRJT05fTVMsXHJcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTY2VuZT8uc2NlbmUuc2V0VmlzaWJsZShmYWxzZSlcclxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNjZW5lLnNldFZpc2libGUodHJ1ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSBuZXdTY2VuZVxyXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2V0SXNGb3JlZ3JvdW5kKHRydWUsIGdvaW5nSW5zaWRlLCBpLCBqKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcChuZXdTY2VuZUtleSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAvLyAxLjA1OTQ2MzA5NDM2IH4gMl4oMS8xMiksIGkuZS4gb25lIHNlbWl0b25lXHJcbiAgICAgICAgdGhpcy5zb3VuZC5zZXRSYXRlKDEgLyAoTWF0aC5wb3coMS4wNTk0NjMwOTQzNiwgbmV3U2NlbmUuc2NlbmVMZXZlbCkpKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzR2FtZU92ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kLnNldFJhdGUoMSAvIChNYXRoLnBvdygxLjA1OTQ2MzA5NDM2LCAxNSkpKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGdhbWVPdmVyU2NlbmUgPSB0aGlzLnNjZW5lLmFkZChcImdhbWVPdmVyU2NlbmVcIiwgbmV3IEdhbWVPdmVyU2NlbmUodGhpcykpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoZ2FtZU92ZXJTY2VuZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmUuc2NlbmUucGF1c2UoKVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICAgICAgLy8gbG9hZCB0aGUgZ2FtZSBhc3NldHNcclxuICAgICAgICB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnYXNzZXRzLycpXHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnd2Vha0VuZW15JywgJ2VuZW15LnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmYXN0RW5lbXknLCAnZW5lbXlfZmFzdC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYXJtb3VyZWRFbmVteScsICdlbmVteV9hcm1vcmVkLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcGxpdHRlckJpZ0VuZW15JywgJ2VuZW15X3NwbGl0X2JpZy5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJTbWFsbEVuZW15JywgJ2VuZW15X3NwbGl0X3NtYWxsLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmYXRFbmVteScsICdlbmVteV9jaG9uay5wbmcnLCB7ZnJhbWVXaWR0aDogNTYsIGZyYW1lSGVpZ2h0OiA1Nn0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJGYXRFbmVteScsICdlbmVteV9zcGxpdF9jaG9uay5wbmcnLCB7ZnJhbWVXaWR0aDogNTYsIGZyYW1lSGVpZ2h0OiA1Nn0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdidWxsZXQucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0aWxlc2V0JyxcclxuICAgICAgICAgICAgJ3RpbGVzZXQucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VydG9wcycsXHJcbiAgICAgICAgICAgICd0b3dlcnRvcC5wbmcnLFxyXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcm1pZHMnLFxyXG4gICAgICAgICAgICAndG93ZXJtaWQucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJiYXNlcycsXHJcbiAgICAgICAgICAgICd0b3dlcmJhc2UucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGVfcmVkJywgJ3BhcnRpY2xlX3JlZC5wbmcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0YWxGcm9tJywgJ3BvcnRhbF9mcm9tLnBuZycsIHtmcmFtZVdpZHRoOiA0MCwgZnJhbWVIZWlnaHQ6IDQwfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0YWxUbycsICdwb3J0YWxfdG8ucG5nJywge2ZyYW1lV2lkdGg6IDQwLCBmcmFtZUhlaWdodDogNDB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKFwibWFpbl9tdXNpY1wiLCBcImdhbWVqYW1fTEQ0OC5vZ2dcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWlsZF9zb3VuZCcsICdidWlsZC53YXYnKTtcclxuICAgICAgICB0aGlzLmxvYWQuYXVkaW8oJ2RhbWFnZV9zb3VuZCcsICdkYW1hZ2Uud2F2Jyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdzaG9vdF9zb3VuZCcsICd0dXJyZXRzaG90LndhdicpO1xyXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnbXVsdGlzaG90X3NvdW5kJywgJ211bHRpc2hvdC53YXYnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb25zKCkgeyAvLyBUT0RPOiBNYWtlIHRoaXMgbm90IGR1bWIgYW5kIHVnbHlcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3dlYWtFbmVteV93YWxrJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCd3ZWFrRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdmYXN0RW5lbXlfd2FsaycsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZmFzdEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnZmF0RW5lbXlfd2FsaycsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnZmF0RW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogOX0pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdzcGxpdHRlckZhdEVuZW15X3dhbGsnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NwbGl0dGVyRmF0RW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogOX0pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdhcm1vdXJlZEVuZW15X3dhbGsnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2FybW91cmVkRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdzcGxpdHRlckJpZ0VuZW15X3dhbGsnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NwbGl0dGVyQmlnRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdzcGxpdHRlclNtYWxsRW5lbXlfd2FsaycsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc3BsaXR0ZXJTbWFsbEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAncG9ydGFsRnJvbV9zcGluJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwb3J0YWxGcm9tJywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAncG9ydGFsVG9fc3BpbicsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncG9ydGFsVG8nLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICd0b3dlck1pZHNfc3BpbicsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygndG93ZXJtaWRzJywge3N0YXJ0OiAwLCBlbmQ6IDF9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiA1LFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0aXZlU2NlbmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyZW50U2NlbmVzVG9Sb290KCkge1xyXG4gICAgICAgIGxldCBwYXJlbnRTY2VuZXM6IFREU2NlbmVbXSA9IFtdXHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRBY3RpdmVTY2VuZSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50S2V5KSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmdldFNjZW5lQnlLZXkoc2NlbmUuc2NlbmVQYXJlbnRLZXkpXHJcbiAgICAgICAgICAgIHBhcmVudFNjZW5lcy5wdXNoKHBhcmVudCk7XHJcbiAgICAgICAgICAgIHNjZW5lID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudFNjZW5lcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb290VERTY2VuZSgpIHtcclxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldEFjdGl2ZVNjZW5lKCk7XHJcblxyXG4gICAgICAgIHdoaWxlIChzY2VuZT8uc2NlbmVQYXJlbnRLZXkpIHtcclxuICAgICAgICAgICAgc2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkoc2NlbmUuc2NlbmVQYXJlbnRLZXkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc2NlbmVcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIGVuZW0gZnJvbSBcIi4uL2VuZW15XCI7XHJcbmltcG9ydCB7VG93ZXJ9IGZyb20gXCIuLi90b3dlcnNcIjtcclxuaW1wb3J0IHtCdWxsZXR9IGZyb20gXCIuLi9idWxsZXRcIjtcclxuaW1wb3J0IHtXYXZlTWFuYWdlcn0gZnJvbSBcIi4uL3dhdmVzXCJcclxuaW1wb3J0IHtUb3dlck1hbmFnZXJ9IGZyb20gXCIuLi90b3dlck1hbmFnZXJcIlxyXG5pbXBvcnQge01BWF9IRUlHSFQsIE1BWF9XSURUSCwgVGVycmFpbiwgVElMRV9TSVpFfSBmcm9tIFwiLi4vdGVycmFpblwiO1xyXG5pbXBvcnQge1REU2NlbmVDb25maWd9IGZyb20gXCIuL3RkU2NlbmVDb25maWdcIjtcclxuaW1wb3J0IHtNZXRhU2NlbmV9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xyXG5pbXBvcnQge0hVRF9XSURUSH0gZnJvbSBcIi4vaHVkU2NlbmVcIjtcclxuaW1wb3J0IHtVVUlEfSBmcm9tIFwiLi4vdXRpbHMvZ3VpZFwiO1xyXG5pbXBvcnQge0hlYWx0aEJhcn0gZnJvbSBcIi4uL2hlYWx0aEJhclwiO1xyXG5pbXBvcnQge1BsYXllckluZm99IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7RU5FTVlfQ09ORklHU30gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNDRU5FX1RSQU5TSVRJT05fTVMgPSA1MDBcclxuZXhwb3J0IGNvbnN0IFREX1NDRU5FX1dJRFRIID0gTUFYX1dJRFRIICogVElMRV9TSVpFXHJcbmV4cG9ydCBjb25zdCBURF9TQ0VORV9IRUlHSFQgPSBNQVhfSEVJR0hUICogVElMRV9TSVpFXHJcblxyXG5leHBvcnQgY2xhc3MgVERTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwYXRoOiBQaGFzZXIuQ3VydmVzLlBhdGhcclxuICAgIGFsbEVuZW1pZXM6IHsgW2tleTogc3RyaW5nXTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwIH0gPSB7fVxyXG4gICAgbmV4dEVuZW15OiBudW1iZXIgPSAwXHJcbiAgICBtZXRhU2NlbmU6IE1ldGFTY2VuZVxyXG5cclxuICAgIHRvd2VyczogUGhhc2VyLkdhbWVPYmplY3RzLkdyb3VwXHJcbiAgICBidWxsZXRzOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXBcclxuXHJcbiAgICB0ZXJyYWluOiBUZXJyYWluXHJcblxyXG4gICAgd2F2ZU1hbmFnZXI6IFdhdmVNYW5hZ2VyXHJcbiAgICB0b3dlck1hbmFnZXI6IFRvd2VyTWFuYWdlclxyXG5cclxuICAgIHNjZW5lUGFyZW50S2V5OiBzdHJpbmc7XHJcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvblxyXG5cclxuICAgIHByaXZhdGUgdG93ZXJQYXJlbnQ6IFRvd2VyICAvLyB0byB3aGF0IHRvd2VyIGRvZXMgdGhpcyBzY2VuZSBjb3JyZXNwb25kPyB1bmRlZmluZWQgZm9yIHJvb3RcclxuICAgIHByaXZhdGUgZW5kSGVhbHRoQmFyOiBIZWFsdGhCYXJcclxuXHJcbiAgICAvLyBoYXBwZW5zIHdoZW4gYW4gZW5lbXkgcmVhY2hlcyB0aGUgZW5kXHJcbiAgICBlbmVteUVuZENhbGxiYWNrOiAobnVtYmVyKSA9PiB2b2lkXHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBURFNjZW5lQ29uZmlnLCBtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIGtleTogY29uZmlnLnNjZW5lS2V5LCAvL2B0ZFNjZW5lJHtVVUlELnV1aWR2NCgpfWAsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGVycmFpbiA9IGNvbmZpZy50ZXJyYWluO1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lID0gbWV0YVNjZW5lO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lTGV2ZWwgPSBjb25maWcuc2NlbmVMZXZlbDtcclxuICAgICAgICB0aGlzLnNjZW5lUGFyZW50S2V5ID0gY29uZmlnLnNjZW5lUGFyZW50S2V5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgLy8gdGhpcyBncmFwaGljcyBlbGVtZW50IGlzIG9ubHkgZm9yIHZpc3VhbGl6YXRpb24sXHJcbiAgICAgICAgLy8gaXRzIG5vdCByZWxhdGVkIHRvIG91ciBwYXRoXHJcbiAgICAgICAgdmFyIGdyYXBoaWNzID0gdGhpcy5hZGQuZ3JhcGhpY3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXJyYWluLmNyZWF0ZSh0aGlzKVxyXG4gICAgICAgIHRoaXMudGVycmFpbi5kcmF3KGdyYXBoaWNzKVxyXG5cclxuICAgICAgICAvLyB0aGUgcGF0aCBmb3Igb3VyIGVuZW1pZXNcclxuICAgICAgICAvLyBwYXJhbWV0ZXJzIGFyZSB0aGUgc3RhcnQgeCBhbmQgeSBvZiBvdXIgcGF0aFxyXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3dlck1hbmFnZXIgPSBuZXcgVG93ZXJNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsRW5lbWllc1tlbmVteS5uYW1lXSA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogZW5lbXkuY2xhc3MsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRvd2VycyA9IHRoaXMuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IFRvd2VyLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xyXG5cclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIHRoaXMub25DbGljaywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0cyA9IHRoaXMucGh5c2ljcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogQnVsbGV0LCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xyXG4gICAgICAgIGZvciAobGV0IGVOYW1lIGluIHRoaXMuYWxsRW5lbWllcykge1xyXG4gICAgICAgICAgICB0aGlzLnBoeXNpY3MuYWRkLm92ZXJsYXAodGhpcy5hbGxFbmVtaWVzW2VOYW1lXSwgdGhpcy5idWxsZXRzLCB0aGlzLmRhbWFnZUVuZW15KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIgPSBuZXcgV2F2ZU1hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhbSA9IHRoaXMuY2FtZXJhcy5tYWluXHJcbiAgICAgICAgY2FtLnNjcm9sbFggPSAtSFVEX1dJRFRIXHJcbiAgICB9XHJcblxyXG4gICAgLy8gT25seSBmb3JlZ3JvdW5kIHNjZW5lIGhhcyBpbnB1dCBlbmFibGVkICYgaXMgdmlzaWJsZTsgYWxsIHNjZW5lcyBhcmUgYmVpbmcgdXBkYXRlZFxyXG4gICAgcHVibGljIHNldElzRm9yZWdyb3VuZChpc0ZvcmVncm91bmRTY2VuZSwgZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGkgPSBudWxsLCBqID0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGlzRm9yZWdyb3VuZFNjZW5lO1xyXG5cclxuICAgICAgICBpZiAoIWlzRm9yZWdyb3VuZFNjZW5lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZU91dChnb2luZ0luc2lkZSwgaSwgailcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVJbihnb2luZ0luc2lkZSwgaSwgailcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVJbihnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih0aGlzLnRlcnJhaW4udyAqIFRJTEVfU0laRSAvIDIsIHRoaXMudGVycmFpbi5oICogVElMRV9TSVpFIC8gMiwgMSlcclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5zZXRab29tKChnb2luZ0luc2lkZSA/IDEgLyAzIDogMykpXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVJbihTQ0VORV9UUkFOU0lUSU9OX01TLCAwLCAwLCAwKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygxLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlT3V0KGdvaW5nSW5zaWRlOiBib29sZWFuLCBpLCBqKSB7XHJcbiAgICAgICAgLy8gVGFrZSBhIHNjcmVlbnNob3RcclxuICAgICAgICB0aGlzLmdhbWUucmVuZGVyZXIuc25hcHNob3RBcmVhKFxyXG4gICAgICAgICAgICAtdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWCxcclxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFksXHJcbiAgICAgICAgICAgIFREX1NDRU5FX1dJRFRILFxyXG4gICAgICAgICAgICBURF9TQ0VORV9IRUlHSFQsXHJcbiAgICAgICAgICAgIChpbWFnZTogSFRNTEltYWdlRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcEtleSA9IGBzbmFwLSR7dGhpcy5zY2VuZS5rZXl9YFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXMuZXhpc3RzKHNuYXBLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5yZW1vdmUoc25hcEtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzLmFkZEltYWdlKHNuYXBLZXksIGltYWdlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dpbmc6IHNob3cgdGhlIHNjcmVlbnNob3RcclxuICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLmZhZGVPdXQoU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcclxuICAgICAgICBpZiAoZ29pbmdJbnNpZGUpIHtcclxuICAgICAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMudGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMywgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ucGFuKHgsIHksIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDEgLyAzLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYW1hZ2VFbmVteShlbmVteSwgYnVsbGV0KSB7XHJcbiAgICAgICAgLy8gb25seSBpZiBib3RoIGVuZW15IGFuZCBidWxsZXQgYXJlIGFsaXZlXHJcbiAgICAgICAgaWYgKGVuZW15LmFjdGl2ZSA9PT0gdHJ1ZSAmJiBidWxsZXQuYWN0aXZlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0aGUgYnVsbGV0IHJpZ2h0IGF3YXlcclxuICAgICAgICAgICAgYnVsbGV0LmhpdCgpXHJcblxyXG4gICAgICAgICAgICAvLyBkZWNyZWFzZSB0aGUgZW5lbXkgaHAgd2l0aCBidWxsZXQgZGFtYWdlXHJcbiAgICAgICAgICAgIGVuZW15LnJlY2VpdmVEYW1hZ2UoYnVsbGV0LmRhbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZyYW1lTnVtYmVyID0gMDtcclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFtZU51bWJlcisrO1xyXG4gICAgICAgIHRoaXMud2F2ZU1hbmFnZXIudXBkYXRlKGRlbHRhKVxyXG5cclxuICAgICAgICBpZiAodGhpcy5mcmFtZU51bWJlciAlIDYwID09IDApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFVwZGF0ZSB0aDogJHt0aGlzLnNjZW5lLmtleX0gZTogJHt0aGlzLmlucHV0LmVuYWJsZWR9IHwgbDogJHt0aGlzLnNjZW5lTGV2ZWx9IHwgcDogJHt0aGlzLnNjZW5lUGFyZW50Py5zY2VuZS5rZXl9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZW5kSGVhbHRoQmFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLmhlYWx0aCA9IHRoaXMudG93ZXJQYXJlbnQuaGVhbHRoQmFyLmhlYWx0aFxyXG4gICAgICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci51cGRhdGUoZGVsdGEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEJ1bGxldCh4LCB5LCBhbmdsZSwgZGFtYWdlLCByYW5nZSwgYnVsbGV0U3BlZWRNb2QpIHtcclxuICAgICAgICB2YXIgYnVsbGV0ID0gdGhpcy5idWxsZXRzLmdldCgpO1xyXG4gICAgICAgIGlmIChidWxsZXQpIHtcclxuICAgICAgICAgICAgYnVsbGV0LmZpcmUoeCwgeSwgYW5nbGUsIGRhbWFnZSwgcmFuZ2UsIGJ1bGxldFNwZWVkTW9kKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9HcmlkUG9zKHgsIHkpIHtcclxuICAgICAgICBsZXQgaSA9IE1hdGguZmxvb3IoKHggKyB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxYKSAvIFRJTEVfU0laRSk7XHJcbiAgICAgICAgbGV0IGogPSBNYXRoLmZsb29yKCh5ICsgdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSkgLyBUSUxFX1NJWkUpO1xyXG4gICAgICAgIHJldHVybiBbaSwgal1cclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKHBvaW50ZXI6IFBoYXNlci5JbnB1dC5Qb2ludGVyKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBvbmNsaWNrIG9uIHNjZW5lICR7dGhpcy5zY2VuZS5rZXl9YClcclxuICAgICAgICBjb25zdCBbaSwgal0gPSB0aGlzLnRvR3JpZFBvcyhwb2ludGVyLngsIHBvaW50ZXIueSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgY2xpY2tlZCBjb29yZGluYXRlczogJHtpfSAke2p9YClcclxuICAgICAgICBsZXQgcG90ZW50aWFsRXhpc3RpbmdUb3dlciA9IHRoaXMudGVycmFpbi50cnlHZXRFeGlzdGluZ1Rvd2VyKGksIGopO1xyXG4gICAgICAgIGlmIChwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dpdGNoaW5nIHRvIGFuIGV4aXN0aW5nIHRvd2VyXCIpXHJcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUocG90ZW50aWFsRXhpc3RpbmdUb3dlci5nZXRJbm5lclRvd2VyU2NlbmVLZXkoKSwgdHJ1ZSwgaSwgailcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMudGVycmFpbi5wYXRoVGlsZXNbdGhpcy50ZXJyYWluLnBhdGhUaWxlcy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGlmIChpID09PSBlbmRbMF0gJiYgaiA9PT0gZW5kWzFdICYmIHRoaXMuc2NlbmVQYXJlbnRLZXkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2l0Y2hpbmcgdmlhIGVuZFwiKVxyXG4gICAgICAgICAgICB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHRoaXMuc2NlbmVQYXJlbnRLZXksIGZhbHNlLCBpLCBqKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuZW15UmVhY2hlZEVuZChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuZW5lbXlFbmRDYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICB9XHJcblxyXG4gICAgc2V0VG93ZXJQYXJlbnQocGFyZW50OiBUb3dlcikge1xyXG4gICAgICAgIHRoaXMudG93ZXJQYXJlbnQgPSBwYXJlbnRcclxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodGhpcylcclxuXHJcbiAgICAgICAgbGV0IFtpLCBqXSA9IHRoaXMudGVycmFpbi5wYXRoVGlsZXNbdGhpcy50ZXJyYWluLnBhdGhUaWxlcy5sZW5ndGggLSAxXVxyXG4gICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcclxuXHJcbiAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIubWFrZSh4LCB5LCBUSUxFX1NJWkUgLSAxNCwgMC41KVxyXG4gICAgICAgIHRoaXMuYWRkLmNvbnRhaW5lcigwLCAwLCB0aGlzLmVuZEhlYWx0aEJhcilcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb3dlclBhcmVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3dlclBhcmVudFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGVycmFpbiB9IGZyb20gXCIuLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi90ZFNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVERTY2VuZUNvbmZpZyB7XHJcbiAgICB0ZXJyYWluOiBUZXJyYWluO1xyXG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb24gXHJcbiAgICBzY2VuZVBhcmVudEtleTogc3RyaW5nO1xyXG4gICAgc2NlbmVLZXk6IHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRlcnJhaW46IFRlcnJhaW4sIHNjZW5lTGV2ZWw6IG51bWJlciwgc2NlbmVQYXJlbnRLZXk6IHN0cmluZywgc2NlbmVLZXk6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy50ZXJyYWluID0gdGVycmFpbjtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gc2NlbmVMZXZlbDtcclxuICAgICAgICB0aGlzLnNjZW5lUGFyZW50S2V5ID0gc2NlbmVQYXJlbnRLZXk7XHJcbiAgICAgICAgdGhpcy5zY2VuZUtleSA9IHNjZW5lS2V5XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiXHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiXHJcbmltcG9ydCB7IFRvd2VyIH0gZnJvbSBcIi4vdG93ZXJzXCJcclxuXHJcbmV4cG9ydCBlbnVtIFRpbGVUeXBlIHtcclxuICAgIFN0YXJ0LCBQYXRoLCBFbmQsIE9jY3VwaWVkLCBCdWlsZGFibGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRJTEVfU0laRSA9IDY0XHJcbmV4cG9ydCBjb25zdCBMRVZFTF9PRkZTRVQgPSAxNSAqIFRJTEVfU0laRVxyXG5leHBvcnQgY29uc3QgTUFYX1dJRFRIID0gMTBcclxuZXhwb3J0IGNvbnN0IE1BWF9IRUlHSFQgPSA4XHJcblxyXG5jb25zdCBOX1RJTEVTRVRfU1BSSVRFUyA9IDEwICAvLyBob3cgbWFueSBzcHJpdGVzIGFyZSBpbiB0aGUgdGlsZXNldD9cclxuXHJcbnR5cGUgR3JpZFBvcyA9IFtpbnRlZ2VyLCBpbnRlZ2VyXVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlcnJhaW4ge1xyXG4gICAgdG93ZXJzOiBUb3dlcltdW11cclxuICAgIHRpbGVzOiBUaWxlVHlwZVtdW11cclxuXHJcbiAgICB0aWxlU3ByaXRlczogaW50ZWdlcltdW11cclxuXHJcbiAgICBwYXRoOiBQaGFzZXIuQ3VydmVzLlBhdGggIC8vIFRoZSBQaGFzZXIgcGF0aCAoZm9yIGVuZW15IG1vdmVtZW50KVxyXG4gICAgcGF0aFRpbGVzOiBHcmlkUG9zW10gIC8vIFRoZSBzZXF1ZW5jZSBvZiB0aWxlcyBtYWtpbmcgdXAgdGhlIHBhdGhcclxuXHJcbiAgICB0aW50OiBpbnRlZ2VyIC8vIGNvbG9yIGFzIGEgMjQtYml0IGludFxyXG5cclxuICAgIHc6IG51bWJlclxyXG4gICAgaDogbnVtYmVyXHJcblxyXG4gICAgcG9ydGFsRnJvbTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxyXG4gICAgcG9ydGFsVG86IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcclxuXHJcbiAgICAvLyB0b2RvOiBnZW5lcmF0ZS9sb2FkIHRlcnJhaW5cclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoOiBpbnRlZ2VyLCBoZWlnaHQ6IGludGVnZXIpIHtcclxuICAgICAgICB0aGlzLncgPSB3aWR0aFxyXG4gICAgICAgIHRoaXMuaCA9IGhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKVxyXG4gICAgICAgIHRoaXMuc2V0dXBTcHJpdGVzKHNjZW5lKVxyXG5cclxuICAgICAgICB0aGlzLnRvd2VycyA9IGluaXQyREFycmF5PFRvd2VyPih0aGlzLncsIHRoaXMuaCwgbnVsbClcclxuICAgIH1cclxuXHJcbiAgICBzZXR1cFNwcml0ZXMoc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnRpbGVTcHJpdGVzID0gaW5pdDJEQXJyYXkodGhpcy53LCB0aGlzLmgsIFRpbGVUeXBlLkJ1aWxkYWJsZSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnc7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdID0gcmFuZG9tRnJlZVNwcml0ZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGdldERpciA9IChwaTogaW50ZWdlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBhdGhUaWxlcywgcGkpXHJcbiAgICAgICAgICAgIGxldCBbaTEsIGoxXSA9IHRoaXMucGF0aFRpbGVzW3BpXVxyXG4gICAgICAgICAgICBsZXQgW2kyLCBqMl0gPSB0aGlzLnBhdGhUaWxlc1twaSArIDFdXHJcblxyXG4gICAgICAgICAgICBsZXQgW2RpLCBkal0gPSBbaTIgLSBpMSwgajIgLSBqMV1cclxuICAgICAgICAgICAgaWYgKGRpID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAwXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGogPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGogPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiZ2V0RGlyIGZhaWxlZFwiKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGkgPSAwOyBwaSA8IHRoaXMucGF0aFRpbGVzLmxlbmd0aDsgcGkrKykge1xyXG4gICAgICAgICAgICBsZXQgW2kxLCBqMV0gPSB0aGlzLnBhdGhUaWxlc1twaV1cclxuXHJcbiAgICAgICAgICAgIGlmIChwaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA2XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGkgPT0gdGhpcy5wYXRoVGlsZXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gN1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGQxID0gKGdldERpcihwaSAtIDEpICsgMikgJSA0XHJcbiAgICAgICAgICAgICAgICBsZXQgZDIgPSBnZXREaXIocGkpXHJcbiAgICAgICAgICAgICAgICBpZiAoZDEgPiBkMikge1xyXG4gICAgICAgICAgICAgICAgICAgIFtkMSwgZDJdID0gW2QyLCBkMV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIE9yZGVyIG9mIHNwcml0ZXMgKDAyIG1lYW5pbmcgZDE9MCwgZDI9Mik6XHJcbiAgICAgICAgICAgICAgICAvLyAwMSAwMiAwMyAxMiAxMyAyM1xyXG4gICAgICAgICAgICAgICAgaWYgKGQxID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSBkMiAtIDFcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZDEgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IGQyICsgMVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkMSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gNSAvLyBvbmx5IDIzIGxlZnRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW50ID0gUGhhc2VyLkRpc3BsYXkuQ29sb3IuR2V0Q29sb3IoXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcclxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuZnJvbUdyaWRQb3MoaSwgailcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNwcml0ZSA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgJ3RpbGVzZXQnLCB0aGlzLnRpbGVTcHJpdGVzW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2ldW2pdID09IFRpbGVUeXBlLkJ1aWxkYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zZXRUaW50KHRoaXMudGludClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2ldW2pdID09IFRpbGVUeXBlLlN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxGcm9tID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCBcInBvcnRhbEZyb21cIiwgMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbGVzW2ldW2pdID09IFRpbGVUeXBlLkVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsVG8gPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksIFwicG9ydGFsVG9cIiwgMClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGdyYXBoaWNzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3MpIHtcclxuICAgICAgICAvLyB0aGlzLmRyYXdHcmlkKGdyYXBoaWNzKVxyXG5cclxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMywgMHhmZmZmZmYsIDEpO1xyXG4gICAgICAgIC8vIHZpc3VhbGl6ZSB0aGUgcGF0aFxyXG4gICAgICAgIHRoaXMucGF0aC5kcmF3KGdyYXBoaWNzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3J0YWxGcm9tLmFuaW1zLnBsYXkoe1xyXG4gICAgICAgICAgICBrZXk6IFwicG9ydGFsRnJvbV9zcGluXCIsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTBcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBvcnRhbFRvLmFuaW1zLnBsYXkoe1xyXG4gICAgICAgICAgICBrZXk6IFwicG9ydGFsVG9fc3BpblwiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0dyaWQoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgxLCAweDAwMDBmZiwgMC44KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gdGhpcy5oOyBpKyspIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKDAsIGkgKiBUSUxFX1NJWkUpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oVElMRV9TSVpFICogMTAsIGkgKiBUSUxFX1NJWkUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSB0aGlzLnc7IGorKykge1xyXG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oaiAqIFRJTEVfU0laRSwgMCk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhqICogVElMRV9TSVpFLCBUSUxFX1NJWkUgKiA4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlUGF0aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5QbGFjZVRvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbkJvdW5kcyhpLCBqKSAmJiB0aGlzLnRpbGVzW2ldW2pdID09PSBUaWxlVHlwZS5CdWlsZGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyeUdldEV4aXN0aW5nVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xyXG4gICAgICAgIGlmIChpIDwgMCB8fCBqIDwgMCB8fCBpID49IHRoaXMudyB8fCBqID49IHRoaXMuaCkgcmV0dXJuIG51bGxcclxuICAgICAgICByZXR1cm4gdGhpcy50b3dlcnNbaV1bal07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYWNlVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlciwgdG93ZXI6IFRvd2VyKSB7XHJcbiAgICAgICAgaWYgKGkgPCAwIHx8IGogPCAwIHx8IGkgPj0gdGhpcy53IHx8IGogPj0gdGhpcy5oKSByZXR1cm4gbnVsbFxyXG5cclxuICAgICAgICB0aGlzLnRpbGVzW2ldW2pdID0gVGlsZVR5cGUuT2NjdXBpZWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJzW2ldW2pdID0gdG93ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBwYXRoID0gW11cclxuXHJcbiAgICAgICAgbGV0IGVkZ2VzOiBHcmlkUG9zW10gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy53IC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goW2ksIDBdKVxyXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFtpLCB0aGlzLmggLSAxXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCB0aGlzLmggLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgZWRnZXMucHVzaChbMCwgal0pXHJcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goW3RoaXMudyAtIDEsIGpdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZVxyXG5cclxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXHJcbiAgICAgICAgd2hpbGUgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGxldCBmcm9tID0gcmFuZG9tSXRlbShlZGdlcylcclxuICAgICAgICAgICAgbGV0IHRvO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB0byA9IHJhbmRvbUl0ZW0oZWRnZXMpXHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRvID09IGZyb20pXHJcblxyXG4gICAgICAgICAgICBwYXRoID0gdGhpcy5yYW5kb21XYWxrKGZyb20sIHRvKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbWluTGVuZ3RoID0gMjVcclxuICAgICAgICAgICAgaWYgKHBhdGggIT09IG51bGwgJiYgcGF0aC5sZW5ndGggPj0gbWluTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF0dGVtcHRzKytcclxuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID09IDQwMCkgYnJlYWtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIGluXCIsIGF0dGVtcHRzLCBcImF0dGVtcHRzXCIpXHJcblxyXG4gICAgICAgIHRoaXMudGlsZXMgPSBpbml0MkRBcnJheSh0aGlzLncsIHRoaXMuaCwgVGlsZVR5cGUuQnVpbGRhYmxlKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMuZnJvbUdyaWRQb3MocGF0aFtpXVswXSwgcGF0aFtpXVsxXSlcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWx0ZW5hdGl2ZWx5OiB0aGlzLnBhdGggPSBuZXcgUGhhc2VyLkN1cnZlcy5QYXRoKC4uLilcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMucGF0aCA9IHNjZW5lLmFkZC5wYXRoKHgsIHkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGggPSBuZXcgUGhhc2VyLkN1cnZlcy5QYXRoKHgsIHkpXHJcbiAgICAgICAgICAgICAgICAvLyBzY2VuZS5hZGRPYmplY3QodGhpcy5wYXRoKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoLmxpbmVUbyh4LCB5KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc2V0VG8gPSBUaWxlVHlwZS5QYXRoXHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHNldFRvID0gVGlsZVR5cGUuU3RhcnRcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09IHBhdGgubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgc2V0VG8gPSBUaWxlVHlwZS5FbmRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy50aWxlc1twYXRoW2ldWzBdXVtwYXRoW2ldWzFdXSA9IHNldFRvXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCB0ZXJyYWluLlwiKVxyXG5cclxuICAgICAgICB0aGlzLnBhdGhUaWxlcyA9IHBhdGhcclxuICAgICAgICByZXR1cm4gcGF0aC5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmRvbVdhbGsoZnJvbTogR3JpZFBvcywgdG86IEdyaWRQb3MpOiBBcnJheTxHcmlkUG9zPiB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBbXVxyXG4gICAgICAgIGxldCBzZWVuID0gbmV3IFNldCgpXHJcblxyXG4gICAgICAgIGNvbnN0IGFkZFRvUGF0aCA9IChwb3M6IEdyaWRQb3MpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYW5uZWQgb2YgdGhpcy5uZWlnaGJvcnMocGF0aFtwYXRoLmxlbmd0aCAtIDFdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZW4uYWRkKGJhbm5lZC50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBhdGgucHVzaChwb3MpXHJcbiAgICAgICAgICAgIHNlZW4uYWRkKHBvcy50b1N0cmluZygpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVG9QYXRoKGZyb20pXHJcblxyXG4gICAgICAgIGxldCBzdGVwcyA9IDBcclxuICAgICAgICB3aGlsZSAocGF0aFtwYXRoLmxlbmd0aCAtIDFdICE9IHRvKSB7XHJcbiAgICAgICAgICAgIHN0ZXBzKytcclxuICAgICAgICAgICAgaWYgKHN0ZXBzID09IDEwMCkgYnJlYWtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXVxyXG5cclxuICAgICAgICAgICAgaWYgKHBvcy50b1N0cmluZygpID09PSB0by50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aCAgLy8gU3VjY2VzcyFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNhbmRzID0gdGhpcy5uZWlnaGJvcnMocG9zKVxyXG4gICAgICAgICAgICBjYW5kcyA9IGNhbmRzLmZpbHRlcihwID0+ICFzZWVuLmhhcyhwLnRvU3RyaW5nKCkpKVxyXG5cclxuICAgICAgICAgICAgaWYgKGNhbmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGwgIC8vIEZhaWwhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG5leHQgPSByYW5kb21JdGVtKGNhbmRzKVxyXG4gICAgICAgICAgICBhZGRUb1BhdGgobmV4dClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXRoXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBuZWlnaGJvcnMocG9zOiBHcmlkUG9zLCBwYWQgPSAwKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IFtcclxuICAgICAgICAgICAgW3Bvc1swXSArIDEsIHBvc1sxXV0sXHJcbiAgICAgICAgICAgIFtwb3NbMF0gLSAxLCBwb3NbMV1dLFxyXG4gICAgICAgICAgICBbcG9zWzBdLCBwb3NbMV0gKyAxXSxcclxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdIC0gMV0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHJlcyA9IHJlcy5maWx0ZXIocCA9PiB0aGlzLmluQm91bmRzKHBbMF0sIHBbMV0pKVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzXHJcbiAgICB9XHJcblxyXG4gICAgZnJvbUdyaWRQb3MoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xyXG4gICAgICAgIHJldHVybiBbKGkgKyAwLjUpICogVElMRV9TSVpFLCAoaiArIDAuNSkgKiBUSUxFX1NJWkVdXHJcbiAgICB9XHJcblxyXG4gICAgaW5Cb3VuZHMoaTogaW50ZWdlciwgajogaW50ZWdlciwgcGFkID0gMCkge1xyXG4gICAgICAgIHJldHVybiAoaSA+PSBwYWRcclxuICAgICAgICAgICAgJiYgaSA8IHRoaXMudyAtIHBhZFxyXG4gICAgICAgICAgICAmJiBqID49IHBhZFxyXG4gICAgICAgICAgICAmJiBqIDwgdGhpcy5oIC0gcGFkKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21JdGVtKGFycmF5KSB7XHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiBhcnJheS5sZW5ndGgpXVxyXG59XHJcblxyXG5mdW5jdGlvbiByYW5kb21GcmVlU3ByaXRlKCkge1xyXG4gICAgY29uc3QgblNwZWNpYWxTcHJpdGVzID0gOFxyXG4gICAgcmV0dXJuIG5TcGVjaWFsU3ByaXRlcyArIE1hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogKE5fVElMRVNFVF9TUFJJVEVTIC0gblNwZWNpYWxTcHJpdGVzKSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdDJEQXJyYXk8VFZhbD4oZGltMSwgZGltMiwgdmFsdWU6IFRWYWwpOiBUVmFsW11bXSB7XHJcbiAgICByZXR1cm4gbmV3IEFycmF5KGRpbTEpXHJcbiAgICAgICAgLmZpbGwoZmFsc2UpXHJcbiAgICAgICAgLm1hcCgoKSA9PiBuZXcgQXJyYXkoZGltMilcclxuICAgICAgICAgICAgLmZpbGwodmFsdWUpKTtcclxufSIsImltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbmltcG9ydCAqIGFzIHRvd2VycyBmcm9tIFwiLi90b3dlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlck1hbmFnZXIge1xyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuICAgIHRvd2VyVHlwZXM6IHsgW2tleTpzdHJpbmddOiBhbnl9ID0ge1xyXG4gICAgICAgICdCYXNpYyc6IFt0b3dlcnMuQmFzaWNUdXJyZXQsIGNmZy5CYXNpY10sXHJcbiAgICAgICAgJ011bHRpc2hvdCc6IFt0b3dlcnMuTXVsdGlzaG90VHVycmV0LCBjZmcuTXVsdGlzaG90XSxcclxuICAgICAgICAnU25pcGVyJzogW3Rvd2Vycy5TbmlwZXJUdXJyZXQsIGNmZy5TbmlwZXJdLFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGFjZVRvd2VyKHBvaW50ZXIsIHRvd2VyVHlwZSkge1xyXG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMuc2NlbmUudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnRlcnJhaW4uY2FuUGxhY2VUb3dlcihpLCBqKSkge1xyXG4gICAgICAgICAgICB2YXIgdG93ZXI6IHRvd2Vycy5Ub3dlciA9IHRoaXMuc2NlbmUudG93ZXJzLmdldCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5ld1NjZW5lID0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWRkU2NlbmUodGhpcy5zY2VuZS5zY2VuZS5rZXkpXHJcbiAgICAgICAgICAgIGlmICh0b3dlcikge1xyXG4gICAgICAgICAgICAgICAgdG93ZXIubWFrZShpLCBqLCBuZXdTY2VuZS5zY2VuZS5rZXksIHRoaXMudG93ZXJUeXBlc1t0b3dlclR5cGVdWzFdLCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVswXSk7XHJcbiAgICAgICAgICAgICAgICBQbGF5ZXJJbmZvLm1vbmV5IC09IHRvd2VyLmNvbmZpZy5wcmljZVxyXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2V0VG93ZXJQYXJlbnQodG93ZXIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBpbXBvcnQgeyBHcmlkUG9zaXRpb24gfSBmcm9tIFwiLi90ZXJyYWluXCI7XHJcblxyXG5pbXBvcnQgeyBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYsIFRPV0VSX0hFQUxUSF9SRUdFTiB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBIZWFsdGhCYXIgfSBmcm9tIFwiLi9oZWFsdGhCYXJcIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbmltcG9ydCB7IFRlcnJhaW4sIFRJTEVfU0laRSB9IGZyb20gXCIuL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVG93ZXJDb25maWcsIFJBTkdFX0lORElDQVRPUl9DT05GSUcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4vZW5lbXlcIjtcclxuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcclxuXHJcblxyXG4vLyB0b2RvOiBtb3ZlIHRvIHNjZW5lP1xyXG5mdW5jdGlvbiBnZXRFbmVteSh4LCB5LCByYW5nZSwgZW5lbWllcywgbnVtVG9HZXQpOiBFbmVteUJhc2VbXSB7XHJcbiAgICBsZXQgb3V0RW5lbWllczogRW5lbXlCYXNlW10gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBlbmVteUdyb3VwIGluIGVuZW1pZXMpIHtcclxuICAgICAgICBsZXQgZW5lbXlVbml0cyA9IGVuZW1pZXNbZW5lbXlHcm91cF0uZ2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuZW15VW5pdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGVuZW15VW5pdHNbaV0uYWN0aXZlICYmIFBoYXNlci5NYXRoLkRpc3RhbmNlLkJldHdlZW4oeCwgeSwgZW5lbXlVbml0c1tpXS54LCBlbmVteVVuaXRzW2ldLnkpIDw9IHJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRFbmVtaWVzLnB1c2goZW5lbXlVbml0c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG91dEVuZW1pZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIG91dEVuZW1pZXMuc29ydCgoYSwgYikgPT4gYi5mb2xsb3dlci50IC0gYS5mb2xsb3dlci50KVxyXG4gICAgICAgIG91dEVuZW1pZXMubGVuZ3RoID0gTWF0aC5taW4obnVtVG9HZXQsIG91dEVuZW1pZXMubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybiBvdXRFbmVtaWVzXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvd2VyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgICBjb25maWc6IFRvd2VyQ29uZmlnXHJcbiAgICBzdGF0czogVG93ZXJDb25maWdcclxuXHJcbiAgICBzY2VuZTogVERTY2VuZVxyXG5cclxuICAgIHRvd2VyVHVycmV0OiBfVG93ZXJUdXJyZXRcclxuICAgIHRvd2VyTWlkOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcbiAgICB0b3dlckJhc2U6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcclxuICAgIGhlYWx0aEJhcjogSGVhbHRoQmFyXHJcbiAgICByYW5nZUluZGljYXRvcjogUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlXHJcblxyXG4gICAgbGV2ZWw6IGludGVnZXJcclxuICAgIGxldmVsVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuXHJcbiAgICBwcml2YXRlIGlubmVyVG93ZXJTY2VuZUtleTogc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IodG93ZXJTY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHRvd2VyU2NlbmUsIDAsIDApXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRvd2VyU2NlbmUpXHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IHRvd2VyU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1ha2UoaTogbnVtYmVyLCBqOiBudW1iZXIsIGlubmVyVG93ZXJTY2VuZUtleTogc3RyaW5nLCBjb25maWc6IFRvd2VyQ29uZmlnLCB0b3dlckNsYXNzTmFtZSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnXHJcbiAgICAgICAgdGhpcy5zdGF0cyA9IHRoaXMuY29uZmlnO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0ID0gbmV3IHRvd2VyQ2xhc3NOYW1lKHRoaXMuc2NlbmUsIHRoaXMuY29uZmlnLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICBsZXQgeENvb3JkID0gaSAqIFRJTEVfU0laRSArIFRJTEVfU0laRSAvIDJcclxuICAgICAgICBsZXQgeUNvb3JkID0gaiAqIFRJTEVfU0laRSArIFRJTEVfU0laRSAvIDJcclxuXHJcbiAgICAgICAgdGhpcy50b3dlckJhc2UgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoeENvb3JkLCB5Q29vcmQsICd0b3dlcmJhc2VzJywgdGhpcy5jb25maWcuc3ByaXRlQmFzZSk7XHJcbiAgICAgICAgdGhpcy50b3dlckJhc2Uuc2V0VGludCh0aGlzLmNvbmZpZy50aW50QmFzZSk7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlckJhc2UpO1xyXG4gICAgICAgIHRoaXMudG93ZXJNaWQgPSB0aGlzLnNjZW5lLmFkZC5zcHJpdGUoeENvb3JkLCB5Q29vcmQsICd0b3dlcm1pZHMnLCB0aGlzLmNvbmZpZy5zcHJpdGVNaWQpO1xyXG4gICAgICAgIHRoaXMudG93ZXJNaWQuc2V0VGludCh0aGlzLmNvbmZpZy50aW50TWlkKTtcclxuICAgICAgICB0aGlzLnRvd2VyTWlkLmFuaW1zLnBsYXkoe1xyXG4gICAgICAgICAgICBrZXk6IGB0b3dlck1pZHNfc3BpbmBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJNaWQpO1xyXG5cclxuICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yID0gdGhpcy5zY2VuZS5hZGQuY2lyY2xlKFxyXG4gICAgICAgICAgICB4Q29vcmQsIHlDb29yZCwgY29uZmlnLnJhbmdlKDEpLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmNvbG91cixcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5hbHBoYVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRTdHJva2VTdHlsZShSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VXaWR0aCwgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlQ29sb3VyKTtcclxuICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMucmFuZ2VJbmRpY2F0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyQmFzZS5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmxpc3QuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY29uc3RydWN0b3IubmFtZS5tYXRjaCgvXi4rRW5lbXkkLykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGh1ZFNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJodWRTY2VuZVwiKSBhcyBIdWRTY2VuZVxyXG4gICAgICAgICAgICBodWRTY2VuZS5zZXREZXNjcmlwdGlvblRvd2VyKHRoaXMuY29uZmlnLCB0aGlzKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLm9uKCdwb2ludGVyb3V0JywgKCkgPT4geyB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUoZmFsc2UpIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnBsYWNlKGksIGosIHRoaXMuc2NlbmUudGVycmFpbik7XHJcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBsYWNlVG93ZXIoaSwgaiwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJUdXJyZXQpO1xyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci5tYWtlKHhDb29yZCwgeUNvb3JkICsgVElMRV9TSVpFIC8gMiAtIDgsIFRJTEVfU0laRSAtIDE0KVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoQmFyKVxyXG5cclxuICAgICAgICB0aGlzLmxldmVsID0gMVxyXG5cclxuICAgICAgICBjb25zdCBwYWQgPSAzXHJcbiAgICAgICAgdGhpcy5sZXZlbFRleHQgPSB0aGlzLnNjZW5lLmFkZC50ZXh0KFxyXG4gICAgICAgICAgICB4Q29vcmQgKyAxNSwgeUNvb3JkIC0gNCwgXCJcIiArIHRoaXMubGV2ZWwsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMubGV2ZWxUZXh0KVxyXG5cclxuICAgICAgICB0aGlzLmlubmVyVG93ZXJTY2VuZUtleSA9IGlubmVyVG93ZXJTY2VuZUtleVxyXG5cclxuICAgICAgICBsZXQgaW5uZXJUb3dlclNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoaW5uZXJUb3dlclNjZW5lS2V5KSBhcyBURFNjZW5lXHJcbiAgICAgICAgaW5uZXJUb3dlclNjZW5lLm9uRW5lbXlSZWFjaGVkRW5kKChkYW1hZ2UpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIuaGVhbHRoIC09IGRhbWFnZSAqIERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQudXBkYXRlKGRlbHRhKVxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci5oZWFsdGggKz0gVE9XRVJfSEVBTFRIX1JFR0VOICogZGVsdGFcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoQmFyLmhlYWx0aCA+PSAxLjApIHtcclxuICAgICAgICAgICAgdGhpcy5oZWFsdGhCYXIubGV2ZWxVcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsKytcclxuICAgICAgICAgICAgdGhpcy5sZXZlbFRleHQuc2V0VGV4dChcIlwiICsgdGhpcy5sZXZlbClcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwgLSAxKSA8IHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYW5nZVNjYWxlID0gdGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsKSAvIHRoaXMuc3RhdHMucmFuZ2UoMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFNjYWxlKHJhbmdlU2NhbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci51cGRhdGUoZGVsdGEpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5uZXJUb3dlclNjZW5lS2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyVG93ZXJTY2VuZUtleVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYWJzdHJhY3QgY2xhc3MgX1Rvd2VyVHVycmV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlIHtcclxuICAgIG5leHRUaWM6IG51bWJlclxyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXJcclxuICAgIGJhc2VYOiBudW1iZXJcclxuICAgIGJhc2VZOiBudW1iZXJcclxuICAgIHBhcmVudDogVG93ZXJcclxuXHJcbiAgICBzY2VuZTogVERTY2VuZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBzcHJpdGU6IHN0cmluZywgdGludDogbnVtYmVyLCBwYXJlbnQ6IFRvd2VyKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsICd0b3dlcnRvcHMnLCBzcHJpdGUpO1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMuc2V0VGludCh0aW50KTtcclxuICAgICAgICB0aGlzLm5leHRUaWMgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdlIHdpbGwgcGxhY2UgdGhlIHRvd2VyIGFjY29yZGluZyB0byB0aGUgZ3JpZFxyXG4gICAgcGxhY2UoaTogaW50ZWdlciwgajogaW50ZWdlciwgdGVycmFpbjogVGVycmFpbikge1xyXG4gICAgICAgIFt0aGlzLngsIHRoaXMueV0gPSB0ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXHJcbiAgICAgICAgdGhpcy5iYXNlWCA9IHRoaXMueFxyXG4gICAgICAgIHRoaXMuYmFzZVkgPSB0aGlzLnlcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKCkge1xyXG4gICAgICAgIGxldCBlbmVtaWVzID0gZ2V0RW5lbXkoXHJcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWxsRW5lbWllcywgMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGVuZW1pZXMpIHtcclxuICAgICAgICAgICAgbGV0IGVuZW15ID0gZW5lbWllc1swXVxyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBlbmVteS54LCBlbmVteS55KTtcclxuICAgICAgICAgICAgbGV0IGRhbWFnZSA9IHRoaXMucGFyZW50LnN0YXRzLmRhbWFnZSh0aGlzLnBhcmVudC5sZXZlbClcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXHJcbiAgICAgICAgICAgICAgICBkYW1hZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjZW5lID09IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFjdGl2ZVNjZW5lKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUuc2hvb3RTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmaXJlQW5pbWF0aW9uKGFuZ2xlLCBkYW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gKGFuZ2xlICsgTWF0aC5QSSAvIDIpICogUGhhc2VyLk1hdGguUkFEX1RPX0RFRztcclxuICAgICAgICBsZXQgcmVjb2lsID0gTWF0aC5taW4oZGFtYWdlICogMC41LCAyNSlcclxuICAgICAgICB0aGlzLnggPSB0aGlzLmJhc2VYXHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5iYXNlWVxyXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBNYXRoLm1pbih0aGlzLnBhcmVudC5jb25maWcuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpICogMC44LCAxMDAgKyBkYW1hZ2UpLFxyXG4gICAgICAgICAgICB4OiB0aGlzLnggKyBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkpICogcmVjb2lsLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnkgKyBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkpICogcmVjb2lsLFxyXG4gICAgICAgICAgICBlYXNlOiAnUXVhZCcsXHJcbiAgICAgICAgICAgIHlveW86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lICs9IGRlbHRhXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0VGljKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcmUoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpYyA9IHRoaXMubGFzdFRpbWUgKyB0aGlzLnBhcmVudC5zdGF0cy5maXJlcmF0ZSh0aGlzLnBhcmVudC5sZXZlbClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGljID0gdGhpcy5sYXN0VGltZSArIDUwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljVHVycmV0IGV4dGVuZHMgX1Rvd2VyVHVycmV0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY29uZmlnLnNwcml0ZVRvcCwgY29uZmlnLnRpbnRUb3AsIHBhcmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlzaG90VHVycmV0IGV4dGVuZHMgX1Rvd2VyVHVycmV0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY29uZmlnLnNwcml0ZVRvcCwgY29uZmlnLnRpbnRUb3AsIHBhcmVudCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpcmUoKSB7ICAvLyB0aGlzIGJlaGF2aW91ciBzaG91bGQgYmUgaW4gX1Rvd2VyVHVycmV0LmZpcmUgYnR3XHJcbiAgICAgICAgbGV0IG51bVRhcmdldHMgPSAzXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnN0YXRzLm51bVRhcmdldHMpIHtcclxuICAgICAgICAgICAgbnVtVGFyZ2V0cyA9IHRoaXMucGFyZW50LnN0YXRzLm51bVRhcmdldHModGhpcy5wYXJlbnQubGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW5lbWllcyA9IGdldEVuZW15KHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksIHRoaXMuc2NlbmUuYWxsRW5lbWllcywgbnVtVGFyZ2V0cyk7XHJcblxyXG4gICAgICAgIGlmIChlbmVtaWVzICYmIGVuZW1pZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbmVteSBvZiBlbmVtaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBlbmVteS54LCBlbmVteS55KTtcclxuICAgICAgICAgICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZEJ1bGxldChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2NlbmUgPT0gdGhpcy5zY2VuZS5tZXRhU2NlbmUuYWN0aXZlU2NlbmUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5tZXRhU2NlbmUubXVsdGlzaG90U291bmQucGxheSgpOyAgLy8gdGhpcyBzaG91bGQgYmUgaW4gY29uZmlnIGlmIHRoaXMgd2VyZSBkb25lIHByb3Blcmx5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbmlwZXJUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmVteUNvbmZpZywgUEFVU0VfQUZURVJfV0FWRV9USU1FLCBFTkVNWV9DT05GSUdTLCBXYXZlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG4vLyBpbXBvcnQgeyBFbmVteSwgRmF0RW5lbXl9IGZyb20gXCIuL2VuZW15XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdhdmVNYW5hZ2VyIHtcclxuICAgIHNjZW5lOiBURFNjZW5lXHJcbiAgICBjdXJyZW50V2F2ZTogaW50ZWdlciA9IDBcclxuICAgIG5leHRFbmVteTogaW50ZWdlciA9IDBcclxuICAgIGRlYWREYW5nZXI6IGludGVnZXIgPSAwXHJcbiAgICByZW1haW5pbmdEYW5nZXI6IGludGVnZXIgPSAwXHJcbiAgICB3YXZlRGlmZmljdWx0eTogaW50ZWdlciA9IDBcclxuXHJcbiAgICB3YXZlQWN0aXZlOiBib29sZWFuICAvLyBmYWxzZSBmb3IgbmVzdGVkIHdhdmVzXHJcbiAgICBuZXh0V2F2ZVRpbWU6IGludGVnZXIgPSAwXHJcbiAgICByZXNwYXduUXVldWU6IFtFbmVteUNvbmZpZywgaW50ZWdlcl1bXSA9IFtdO1xyXG4gICAgcmVzcGF3bkhlYWx0aDogaW50ZWdlciAgLy8gemVybyB1bmxlc3MgcmVzcGF3bmluZyBlbmVteSwgaGFja1xyXG5cclxuICAgIGVuZW15SW50ZXJ2YWw6IGludGVnZXJcclxuXHJcbiAgICBxdWV1ZWRFbmVteTogYW55XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIHNldCBmYWxzZSBmb3IgbmVzdGVkIGJlaGF2aW9yIGluIHVwZGF0ZSgpXHJcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA+IDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmdldFdhdmVEaWZmaWN1bHR5KCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSAxZTkgLy8gYSBsb3RcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0V2F2ZURpZmZpY3VsdHkoKSB7XHJcbiAgICAgICAgLy9UT0RPOiBhZGQgZGlmZmljdWx0eSBzY2FsaW5nIGFuZCBiYWxhbmNpbmcgZm9yIHdhdmVzXHJcbiAgICAgICAgdGhpcy53YXZlRGlmZmljdWx0eSA9IFdhdmVDb25maWcub3V0ZXJXYXZlRGFuZ2VyKHRoaXMuY3VycmVudFdhdmUpXHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgPSB0aGlzLndhdmVEaWZmaWN1bHR5XHJcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gV2F2ZUNvbmZpZy5vdXRlckVuZW15SW50ZXJ2YWxcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHRXYXZlKCkge1xyXG4gICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZSsrO1xyXG4gICAgICAgIHRoaXMuZ2V0V2F2ZURpZmZpY3VsdHkoKTtcclxuICAgICAgICBQbGF5ZXJJbmZvLndhdmVIZWFsdGhSZWdlbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyB3YXZlICcgKyB0aGlzLmN1cnJlbnRXYXZlICsgJywgd2F2ZSBkaWZmaWN1bHR5OiAnICsgdGhpcy53YXZlRGlmZmljdWx0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzcGF3bkVuZW15KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc3Bhd25RdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwYXduID0gdGhpcy5yZXNwYXduUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNwYXduSGVhbHRoID0gcmVzcGF3blsxXTtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmVzcGF3blswXS5kYW5nZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbcmVzcGF3blswXS5uYW1lXS5nZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYW5kRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbmVteS5kYW5nZXIgPD0gdGhpcy5yZW1haW5pbmdEYW5nZXIpICYmIChlbmVteS5taW5XYXZlIDw9IHRoaXMuY3VycmVudFdhdmUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyYW5kRW5lbXkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmFuZEVuZW15LmRhbmdlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyYW5kRW5lbXkubmFtZV0uZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IDA7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3Bhd24ocmVzcGF3bjogRW5lbXlDb25maWcsIHJlbWFpbmluZ0hlYWx0aDogaW50ZWdlcikge1xyXG4gICAgICAgIHRoaXMucmVzcGF3blF1ZXVlLnB1c2goW3Jlc3Bhd24sIHJlbWFpbmluZ0hlYWx0aF0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGFcclxuICAgICAgICBsZXQgZW5lbXk6IEVuZW15QmFzZVxyXG4gICAgICAgIGxldCB3YXZlOiBpbnRlZ2VyXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMud2F2ZUFjdGl2ZSAmJiB0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0V2F2ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmUoKTsgIC8vIG5vIHdhdmVzIGluIG5lc3RlZCBsYXllcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdEYW5nZXIgPiAwICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNwYXduRW5lbXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkRGFuZ2VyID09PSB0aGlzLndhdmVEaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhdmUgXCIgKyB0aGlzLmN1cnJlbnRXYXZlICsgXCIgY29tcGxldGUhIE5leHQgd2F2ZSBpbiBcIiArIFBBVVNFX0FGVEVSX1dBVkVfVElNRSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWREYW5nZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXZlVGltZSA9IHRoaXMubGFzdFRpbWUgKyBQQVVTRV9BRlRFUl9XQVZFX1RJTUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2F2ZSA9IHRoaXMuY3VycmVudFdhdmVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucXVldWVkRW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5lbXkubWluV2F2ZSA8PSAyICogV2F2ZUNvbmZpZy5sZXZlbFRvV2F2ZSh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gdGhpcy5sYXN0VGltZSAqIChXYXZlQ29uZmlnLmRhbmdlclBlclNlYyh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpICogMC4wMDEpXHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSAodGhpcy5xdWV1ZWRFbmVteS5kYW5nZXIgKiAxLjApXHJcbiAgICAgICAgICAgIGlmIChhID4gYikge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5xdWV1ZWRFbmVteS5uYW1lXS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGFzdFRpbWUsIGIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZEVuZW15ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3YXZlID0gV2F2ZUNvbmZpZy5sZXZlbFRvV2F2ZSh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5lbXkpIHtcclxuICAgICAgICAgICAgZW5lbXkuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICBlbmVteS5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIGVuZW15IGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxyXG4gICAgICAgICAgICBlbmVteS5zdGFydE9uUGF0aCh3YXZlLCB0aGlzLnJlc3Bhd25IZWFsdGgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bhd25IZWFsdGggPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXh0RW5lbXkgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5lbmVteUludGVydmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRFbmVteShmaWx0ZXJfZm4pOiBFbmVteUNvbmZpZyB7XHJcbiAgICAgICAgbGV0IGF2YWlsRW5lbWllcyA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7ICAvLyBTZWxlY3QgYWxsIGVuZW1pZXMgdGhhdCBjYW4gYmUgc3Bhd25lZFxyXG4gICAgICAgICAgICBpZiAoZW5lbXkubWluV2F2ZSA+PSAwICYmIGZpbHRlcl9mbihlbmVteSkpXHJcbiAgICAgICAgICAgICAgICBhdmFpbEVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXZhaWxFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBvbmUgb2YgdGhlbVxyXG4gICAgICAgICAgICBsZXQgcmFuZEVuZW15ID0gYXZhaWxFbmVtaWVzW01hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogYXZhaWxFbmVtaWVzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZEVuZW15XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==