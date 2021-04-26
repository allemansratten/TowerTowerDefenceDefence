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
    'hp': function (wave) { return 20 + 9 * (wave - 1); },
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
    'hp': function (wave) { return 100 + 45 * (wave - 1); },
    'speed': 1 / 40000,
    'money': 2,
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
    'hp': function (wave) { return 20 + 9 * (wave - 1); },
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
    'hp': function (wave) { return 15 + 7 * (wave - 1); },
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
    'hp': function (wave) { return 10 + 5 * (wave - 1); },
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
    'hp': function (wave) { return 20 + 7 * (wave - 1); },
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
    'displayName': 'Splitter',
    'class': enem.SplitterFatEnemy,
    'hp': function (wave) { return 40 + 5 * (wave - 1); },
    'speed': 1 / 40000,
    'money': 0,
    'damage': 1,
    'armour': function (wave) { return 0; },
    'danger': 200,
    'spriteName': 'splitterFatEnemy',
    'tint': 0xffffff,
    'split': {
        'cfg': exports.SplitterBig,
        'amount': 2
    },
    'minWave': 20
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
    'damage': function (level) { return 25 + 50 * (level - 1); },
    'firerate': function (level) { return 4000; },
    'range': function (level) { return 200 + 35 * level; },
    'bulletSpeedMod': 5,
    'price': 20,
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
    'damage': function (level) { return 10 + 15 * (level - 1); },
    'firerate': function (level) { return 800; },
    'range': function (level) { return 90 + 10 * (level - 1); },
    'numTargets': function (level) { return 3; },
    'bulletSpeedMod': 4,
    'price': 10,
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
var SplitterBigEnemy = /** @class */ (function (_super) {
    __extends(SplitterBigEnemy, _super);
    function SplitterBigEnemy(scene) {
        return _super.call(this, scene, cfg.SplitterBig) || this;
    }
    SplitterBigEnemy.prototype.onDeathAbility = function () {
        if (!this.stats.split) {
            console.log('ERROR missing split config on ' + this.constructor.name);
            return;
        }
        for (var i = 0; i < this.stats.split.amount; i++) {
            var newEnemy = this.scene.allEnemies[this.stats.split.cfg.name].get();
            newEnemy.setVisible(true);
            newEnemy.setActive(true);
            this.scene.waveManager.deadDanger -= this.stats.split.cfg.danger;
            newEnemy.startOnPath(this.scene.waveManager.currentWave, 0, this.follower.t);
        }
    };
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
    PlayerInfo.RNG = new Phaser.Math.RandomDataGenerator(["42"]);
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
        this.add.text(512, 160, "YOU DIED").setOrigin(0.5);
        this.add.text(512, 180, "Last wave witnessed: " + this.metaScene.getRootTDScene().waveManager.currentWave).setOrigin(0.5);
        this.add.text(512, 200, "Wealth taken to grave: " + playerInfo_1.PlayerInfo.money).setOrigin(0.5);
        this.add.text(512, 250, "DARE AGAIN").setInteractive().setOrigin(0.5).on('pointerdown', function () {
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
            text += enemy.stats.displayName + "\n";
            text += "Health: " + enemy.hp + "/" + enemy.stats.hp(1) + "\n";
            text += "Armour: " + enemy.stats.damage + "\n";
            text += "Speed: " + enemy.speed * 60000 + "\n";
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
        _this.isGameOver = false;
        _this.scenes = [];
        return _this;
    }
    MetaScene.prototype.create = function () {
        this.createAnimations();
        this.activeScene = this.addScene();
        this.scenes[0].scene.setVisible(true);
        this.scene.start("hudScene");
        this.mainSound = this.sound.add("main_music", { "loop": true, "volume": 0.1 });
        this.mainSound.play();
        this.buildSound = this.sound.add('build_sound', { 'loop': false, 'volume': 1 });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlcnJhaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvd2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QUFDLGFBQWEsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFFTyxrQ0FBWSxHQUFwQixVQUFxQixTQUFTO1FBQzFCLElBQUksWUFBWSxHQUFHLEVBQUU7UUFDckIsS0FBaUIsVUFBYSxFQUFiLHdDQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUUsRUFBRyx5Q0FBeUM7WUFBeEUsSUFBSSxLQUFLO1lBQ1QsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDO2dCQUN0QyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN6Qiw0QkFBNEI7WUFDNUIsSUFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEYsT0FBTyxTQUFTO1NBQ25CO2FBQU07WUFDSCxPQUFPLElBQUk7U0FDZDtJQUNMLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUM7QUF0SVksa0NBQVciLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9tYWluLnRzXCIsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIlxyXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFJBRElVUyA9IDEwXHJcblxyXG5leHBvcnQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcblxyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuXHJcbiAgICBkeDogbnVtYmVyID0gMFxyXG4gICAgZHk6IG51bWJlciA9IDBcclxuICAgIGxpZmVzcGFuOiBudW1iZXIgPSAwXHJcbiAgICBzcGVlZDogbnVtYmVyXHJcbiAgICBkYW1hZ2U6IGludGVnZXJcclxuXHJcbiAgICBidWxsZXRJbWFnZTogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlXHJcbiAgICBwYXJ0aWNsZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyTWFuYWdlclxyXG4gICAgZW1pdHRlcjogUGhhc2VyLkdhbWVPYmplY3RzLlBhcnRpY2xlcy5QYXJ0aWNsZUVtaXR0ZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5keCA9IDA7XHJcbiAgICAgICAgdGhpcy5keSA9IDA7XHJcbiAgICAgICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCg2MDAsIDEpO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UgPSB0aGlzLnNjZW5lLmFkZC5pbWFnZSgwLCAwLCAnYnVsbGV0JylcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHRvd2VyUmFuZ2UsIHNwZWVkTW9kKSB7XHJcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSBkYW1hZ2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IFBoYXNlci5NYXRoLkdldFNwZWVkKHRvd2VyUmFuZ2UgKiBzcGVlZE1vZCwgMSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmJ1bGxldEltYWdlKVxyXG5cclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IHRoaXMuc2NlbmUuYWRkLnBhcnRpY2xlcygncGFydGljbGVfcmVkJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgICAgLy8gIEJ1bGxldHMgZmlyZSBmcm9tIHRoZSBtaWRkbGUgb2YgdGhlIHNjcmVlbiB0byB0aGUgZ2l2ZW4geC95XHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS5zZXRQb3NpdGlvbih4LCB5KTtcclxuXHJcbiAgICAgICAgLy8gIHdlIGRvbid0IG5lZWQgdG8gcm90YXRlIHRoZSBidWxsZXRzIGFzIHRoZXkgYXJlIHJvdW5kXHJcbiAgICAgICAgLy8gIHRoaXMuc2V0Um90YXRpb24oYW5nbGUpO1xyXG4gICAgICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgaG93IHRvIGJyaW5nIHRvIGZyb250XHJcblxyXG4gICAgICAgIHRoaXMuZHggPSBNYXRoLmNvcyhhbmdsZSk7XHJcbiAgICAgICAgdGhpcy5keSA9IE1hdGguc2luKGFuZ2xlKTtcclxuXHJcbiAgICAgICAgdGhpcy5saWZlc3BhbiA9IDEwMDAvc3BlZWRNb2Q7XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IHRoaXMucGFydGljbGVzLmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgICAgICBzcGVlZDogMTAwLFxyXG4gICAgICAgICAgICBzY2FsZTogeyBzdGFydDogMC4zLCBlbmQ6IDAgfSxcclxuICAgICAgICAgICAgYmxlbmRNb2RlOiAnQUREJyxcclxuICAgICAgICAgICAgbGlmZXNwYW46IDEwMCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIuc3RhcnRGb2xsb3codGhpcy5idWxsZXRJbWFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGl0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5leHBsb2RlKDEwLCB0aGlzLmJ1bGxldEltYWdlLngsIHRoaXMuYnVsbGV0SW1hZ2UueSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy5saWZlc3BhbiAtPSBkZWx0YTtcclxuXHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS54ICs9IHRoaXMuZHggKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlLnkgKz0gdGhpcy5keSAqICh0aGlzLnNwZWVkICogZGVsdGEpO1xyXG5cclxuICAgICAgICAodGhpcy5ib2R5IGFzIFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5KS5zZXRDaXJjbGUoUkFESVVTLCB0aGlzLmJ1bGxldEltYWdlLngsIHRoaXMuYnVsbGV0SW1hZ2UueSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcy5kZXN0cm95KCk7IC8vIGRpc2FibGUgZW1pdHRvciAoYWxzbyBjb3VsZCBleHBsb2RlIGl0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuL2VuZW15XCI7XHJcblxyXG4vLyBlbmVteSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSBob3cgbXVjaCBoZWFsdGggdG93ZXIgbG9zZXNcclxuLy8gKHRvd2VyIGhlYWx0aCBpcyBmcm9tIDAgdG8gMSlcclxuZXhwb3J0IGNvbnN0IERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiA9IDAuNFxyXG5cclxuZXhwb3J0IGNvbnN0IFRPV0VSX0hFQUxUSF9SRUdFTiA9IDAuMDAwMDEgKiAyXHJcblxyXG5leHBvcnQgY29uc3QgUEFVU0VfQUZURVJfV0FWRV9USU1FID0gMzAwMDtcclxuXHJcbmV4cG9ydCBjb25zdCBQTEFZRVJfSEVBTFRIX1JFR0VOOiBudW1iZXIgPSAwOyAgLy8gaG93IG11Y2ggaGVhbHRoIHBlciB3YXZlLCBjYW4gYmUgPCAxXHJcblxyXG5leHBvcnQgY29uc3QgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyA9IHtcclxuICAgICdjb2xvdXInOiAweGJiYmJmZixcclxuICAgICdhbHBoYSc6IDIxMCxcclxuICAgICdlZGdlQ29sb3VyJzogMHg4MDgwZmYsXHJcbiAgICAnZWRnZVdpZHRoJzogNFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFdhdmVDb25maWcgPSB7XHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tIG91dGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAvLyBIb3cgbXVjaCB0aW1lIGJldHdlZW4gY29uc2VjdXRpdmUgc3Bhd25zIGluIGEgd2F2ZVxyXG4gICAgb3V0ZXJFbmVteUludGVydmFsOiA1MDAsXHJcbiAgICAvLyBIb3cgbXVjaCBkYW5nZXIgaW4gYSB3YXZlXHJcbiAgICBvdXRlcldhdmVEYW5nZXI6ICh3YXZlKSA9PiAod2F2ZSArMSkgICogMTAsXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBpbm5lciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gSG93IG11Y2ggZGFuZ2VyIHBlciBzZWNvbmQgaXMgZ2VuZXJhdGVlIGluIGlubmVyIGRlcHRocz9cclxuICAgIGRhbmdlclBlclNlYzogKGxldmVsKSA9PiAxMCpsZXZlbCxcclxuICAgIC8vIFRvIHdoYXQgd2F2ZSBudW1iZXIgZG9lcyBhIHRvd2VyIGxldmVsIGNvcnJlc3BvbmQ/IChmb3IgZW5lbXkgc2NhbGluZylcclxuICAgIGxldmVsVG9XYXZlOiAobGV2ZWwpID0+IDMgKiBsZXZlbCxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRW5lbXlDb25maWcgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmcgIC8vIG11c3QgYmUgc2FtZSBhcyBjb25maWcgb2JqZWN0IG5hbWVcclxuICAgIGRpc3BsYXlOYW1lOiBzdHJpbmcgIC8vIG5hbWUgdG8gYmUgZGlzcGxheWVkIHRvIHBsYXllclxyXG4gICAgY2xhc3M6IGFueSAgLy8gY2xhc3Mgb2YgdGhlIGVuZW15IGFzIGRlZmluZWQgaW4gLi9lbmVteS50c1xyXG4gICAgaHA6IChpbnRlZ2VyKSA9PiBpbnRlZ2VyICAvLyBjYW4gc2NhbGUgd2l0aCB3YXZlXHJcbiAgICBzcGVlZDogbnVtYmVyICAvLyBmcmFjdGlvbiBvZiBwYXRoXHJcbiAgICBtb25leTogaW50ZWdlciAgLy8gb24ta2lsbCByZXdhcmRcclxuICAgIGRhbWFnZTogaW50ZWdlciAgLy8gZGFtYWdlIGRlYWx0IG9uIHJlYWNoaW5nIGVuZFxyXG4gICAgYXJtb3VyOiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gZmxhdCByZWR1Y3Rpb24gb2YgaW5jb21pbmcgZGFtYWdlXHJcbiAgICBkYW5nZXI6IGludGVnZXIgIC8vIGZvciBjYWxjdWxhdGluZyB3YXZlIGRpZmZpY3VsdHlcclxuICAgIHNwcml0ZU5hbWU6IHN0cmluZyAgLy8gc3ByaXRlIGFzIGltcG9ydGVkIGluIG1ldGFTY2VuZS5wcmVsb2FkXHJcbiAgICB0aW50OiBpbnRlZ2VyXHJcbiAgICBzcGxpdD86IHsgIC8vIG9wdGlvbmFsIHNwbGl0IGluZm9cclxuICAgICAgICBjZmc6IEVuZW15Q29uZmlnICAvLyBUT0RPOiBtYWtlIHNwbGl0IGludG8gbXVsdGlwbGUgdHlwZXMgcG9zc2libGU/XHJcbiAgICAgICAgYW1vdW50OiBpbnRlZ2VyXHJcbiAgICB9XHJcbiAgICBtaW5XYXZlOiBpbnRlZ2VyICAvLyBmaXJzdCB3YXZlIHRoaXMgY2FuIHNwYXduLCAtMSB0byBuZXZlciBzcGF3blxyXG4gICAgYmx1cmI/OiBzdHJpbmcgIC8vIHNob3duIHRvIHBsYXllclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2VhazogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdXZWFrJyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdOb3JtYWwnLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5XZWFrRW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyA5Kih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDIwMDAwLFxyXG4gICAgJ21vbmV5JzogMSxcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnd2Vha0VuZW15JyxcclxuICAgICdkYW5nZXInOiAxMCxcclxuICAgICd0aW50JzogMHhmZmZmZmYsXHJcbiAgICAnbWluV2F2ZSc6IDAsXHJcbiAgICAnYmx1cmInOiAnVG9vIGN1dGUgdG8ga2lsbC4uLiBzdXJlbHkuJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmF0OiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ0ZhdCcsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnQ2hvbmsnLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5GYXRFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAxMDAgKyA0NSAqICh3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDQwMDAwLFxyXG4gICAgJ21vbmV5JzogMixcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDEwMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ2ZhdEVuZW15JyxcclxuICAgICd0aW50JzogMHhmZmZmZmYsXHJcbiAgICAnbWluV2F2ZSc6IDE0LFxyXG5cdCdibHVyYic6ICdMYXJnZSBhbmQgaW4gY2hhcmdlLidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFybW91cmVkOiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ0FybW91cmVkJyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdBcm1vdXJlZCcsXHJcbiAgICAnY2xhc3MnOiBlbmVtLkFybW91cmVkRW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyA5Kih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDMwMDAwLFxyXG4gICAgJ21vbmV5JzogMixcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiBNYXRoLm1pbigzICsgKE1hdGguZmxvb3Iod2F2ZS81KSksMTQpLFxyXG4gICAgJ2Rhbmdlcic6IDEwMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ2FybW91cmVkRW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogMTAsXHJcblx0J2JsdXJiJzogJ1RoZSBoYXQgaXMgc3VycHJpc2luZ2x5IHN0dXJkeS4nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGYXN0OiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ0Zhc3QnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ1NwZWVkeScsXHJcbiAgICAnY2xhc3MnOiBlbmVtLkZhc3RFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAxNSArIDcqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMTAwMDAsXHJcbiAgICAnbW9uZXknOiAxLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMzAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdmYXN0RW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogNixcclxuXHQnYmx1cmInOiAnVGhlIGJvb3RzIGFyZW5cXCd0IGp1c3QgZm9yIHNob3chJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3BsaXR0ZXJTbWFsbDogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdTcGxpdHRlclNtYWxsJyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGxpdHRlciBiYWJ5JyxcclxuICAgICdjbGFzcyc6IGVuZW0uU3BsaXR0ZXJTbWFsbEVuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDEwKzUqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMjAwMDAsXHJcbiAgICAnbW9uZXknOiAwLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IDAsXHJcbiAgICAnZGFuZ2VyJzogMjAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdzcGxpdHRlclNtYWxsRW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdtaW5XYXZlJzogLTEsXHJcblx0J2JsdXJiJzogJ0F3dywgbG9vaywgdGhleVxcJ3JlIGp1c3QgYmFiaWVzISdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyQmlnOiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ1NwbGl0dGVyQmlnJyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGxpdHRlcicsXHJcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyQmlnRW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMjAgKyA3Kih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDMwMDAwLFxyXG4gICAgJ21vbmV5JzogMSxcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDMwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnc3BsaXR0ZXJCaWdFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ3NwbGl0Jzoge1xyXG4gICAgICAgICdjZmcnOiBTcGxpdHRlclNtYWxsLFxyXG4gICAgICAgICdhbW91bnQnOiAyXHJcbiAgICB9LFxyXG4gICAgJ21pbldhdmUnOiA4LFxyXG5cdCdibHVyYic6ICdFeWVzIHRvIG1lZXQgeW91LidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyRmF0OiBFbmVteUNvbmZpZyA9IHtcclxuICAgICduYW1lJzogJ1NwbGl0dGVyRmF0JyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGxpdHRlcicsXHJcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyRmF0RW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gNDAgKyA1Kih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDQwMDAwLFxyXG4gICAgJ21vbmV5JzogMCxcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDIwMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyRmF0RW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdzcGxpdCc6IHtcclxuICAgICAgICAnY2ZnJzogU3BsaXR0ZXJCaWcsXHJcbiAgICAgICAgJ2Ftb3VudCc6IDJcclxuICAgIH0sXHJcbiAgICAnbWluV2F2ZSc6IDIwXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEVORU1ZX0NPTkZJR1MgPSBbV2VhaywgRmF0LCBBcm1vdXJlZCwgRmFzdCwgU3BsaXR0ZXJCaWcsIFNwbGl0dGVyU21hbGwsIFNwbGl0dGVyRmF0XVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFRvd2VyQ29uZmlnID0ge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBkYW1hZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcclxuICAgIGZpcmVyYXRlOiAoaW50ZWdlcikgPT4gbnVtYmVyICAvLyBtaWxpc2Vjb25kcyBiZXR3ZWVuIGVhY2ggc2hvdFxyXG4gICAgcmFuZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcclxuICAgIG51bVRhcmdldHM/OiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gc2V0IGZvciB0b3dlcnMgdGhhdCB0YXJnZXQgbXVsdGlwbGUgZW5lbWllc1xyXG4gICAgYnVsbGV0U3BlZWRNb2Q6IG51bWJlciAgLy8gYnVsbGV0IHdpbGwgcmVhY2ggcmFuZ2UgaW4gMS9idWxsZXRTcGVlZE1vZCBzZWNvbmRzXHJcbiAgICBwcmljZTogbnVtYmVyXHJcbiAgICBzcHJpdGVCYXNlOiBpbnRlZ2VyXHJcbiAgICBzcHJpdGVNaWQ6IGludGVnZXJcclxuICAgIHNwcml0ZVRvcDogaW50ZWdlclxyXG4gICAgdGludEJhc2U6IGludGVnZXJcclxuICAgIHRpbnRNaWQ6IGludGVnZXJcclxuICAgIHRpbnRUb3A6IGludGVnZXJcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCYXNpYzogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiQmFzaWNcIixcclxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiAxNSArIDMwICogKGxldmVsLTEpLFxyXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gMTAwMCxcclxuICAgICdyYW5nZSc6IGxldmVsID0+IDEyNSxcclxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXHJcbiAgICAncHJpY2UnOiA1LFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMCxcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDY3NWE5YyxcclxuICAgICd0aW50VG9wJzogMHhhYWFhZmYsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIk5vdGhpbmcgZmFuY3kuIERhbWFnZSBncm93cyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNuaXBlcjogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiU25pcGVyXCIsXHJcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMjUgKyA1MCAqIChsZXZlbC0xKSxcclxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDQwMDAsXHJcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiAyMDAgKyAzNSAqIGxldmVsLFxyXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNSxcclxuICAgICdwcmljZSc6IDIwLFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMSxcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDNhNzE1ZCxcclxuICAgICd0aW50VG9wJzogMHg0OGFjODEsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIkxvbmcgcmFuZ2UsIGJ1dCBmaXJlcyBzbG93bHkuIERhbWFnZSBhbmQgcmFuZ2UgZ3JvdyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE11bHRpc2hvdDogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiTXVsdGlzaG90XCIsXHJcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMTAgKyAxNSoobGV2ZWwtMSksXHJcbiAgICAnZmlyZXJhdGUnOiBsZXZlbCA9PiA4MDAsXHJcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiA5MCArIDEwKihsZXZlbC0xKSxcclxuICAgICdudW1UYXJnZXRzJzogbGV2ZWwgPT4gMyxcclxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXHJcbiAgICAncHJpY2UnOiAxMCxcclxuICAgICdzcHJpdGVCYXNlJzogMCxcclxuICAgICdzcHJpdGVNaWQnOiAwLFxyXG4gICAgJ3Nwcml0ZVRvcCc6IDIsXHJcbiAgICAndGludEJhc2UnOiAweGZmZmZmZixcclxuICAgICd0aW50TWlkJzogMHg3ZjRkNjEsXHJcbiAgICAndGludFRvcCc6IDB4YWE0ZTYxLFxyXG4gICAgJ2Rlc2NyaXB0aW9uJzogXCJDYW4gc2hvb3QgYXQgbXVsdGlwbGUgZW5lbWllcyBhdCBvbmNlLiBEYW1hZ2UsIHJhbmdlLCBhbmQgbnVtYmVyIG9mIHRhcmdldHMgZ3JvdyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVE9XRVJfQ09ORklHUyA9IFtCYXNpYywgTXVsdGlzaG90LCBTbmlwZXJdIiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uLCBQb3NpdGlvbiwgVGVycmFpbiB9IGZyb20gXCIuL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCAqIGFzIGNmZyBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgSHVkU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvaHVkU2NlbmVcIjtcclxuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL21ldGFTY2VuZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbmVteUJhc2UgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlIHtcclxuICAgIHN0YXRzOiBjZmcuRW5lbXlDb25maWc7XHJcblxyXG4gICAgZm9sbG93ZXI6IGFueVxyXG4gICAgaHA6IGludGVnZXJcclxuICAgIHlPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcclxuICAgIHhPZmZzZXQ6IG51bWJlciA9IFBoYXNlci5NYXRoLlJORC5pbnRlZ2VySW5SYW5nZSgtMjAsIDIwKTtcclxuICAgIHNjZW5lOiBURFNjZW5lIC8vIHR5cGUgYXNzZXJ0aW9uXHJcbiAgICBzcGVlZDogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgc3RhdHMpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgc3RhdHMuc3ByaXRlTmFtZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLmZvbGxvd2VyID0geyB0OiAwLCB2ZWM6IG5ldyBQaGFzZXIuTWF0aC5WZWN0b3IyKCkgfTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xyXG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAodGhpcy5zY2VuZS5zY2VuZS5nZXQoJ2h1ZFNjZW5lJykgYXMgSHVkU2NlbmUpLnNldERlc2NyaXB0aW9uRW5lbXkodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XHJcbiAgICAgICAgLy8gbW92ZSB0aGUgdCBwb2ludCBhbG9uZyB0aGUgcGF0aCwgMCBpcyB0aGUgc3RhcnQgYW5kIDEgaXMgdGhlIGVuZFxyXG4gICAgICAgIHRoaXMuZm9sbG93ZXIudCArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgbmV3IHggYW5kIHkgY29vcmRpbmF0ZXMgaW4gdmVjXHJcbiAgICAgICAgdGhpcy5zY2VuZS50ZXJyYWluLnBhdGguZ2V0UG9pbnQodGhpcy5mb2xsb3dlci50LCB0aGlzLmZvbGxvd2VyLnZlYyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnZlYy54ID4gdGhpcy54IC0gdGhpcy54T2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA8IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXBkYXRlIGVuZW15IHggYW5kIHkgdG8gdGhlIG5ld2x5IG9idGFpbmVkIHggYW5kIHlcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHRoaXMuZm9sbG93ZXIudmVjLnggKyB0aGlzLnhPZmZzZXQsIHRoaXMuZm9sbG93ZXIudmVjLnkgKyB0aGlzLnlPZmZzZXQpO1xyXG5cclxuICAgICAgICAvLyBpZiB3ZSBoYXZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgcGF0aCwgcmVtb3ZlIHRoZSBlbmVteVxyXG4gICAgICAgIGlmICh0aGlzLmZvbGxvd2VyLnQgPj0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlYWNoRW5kKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxXHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IDBcclxuICAgICAgICB0aGlzLnNjYWxlID0gMVxyXG4gICAgfVxyXG5cclxuICAgIHJlYWNoRW5kKCkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIucmVtYWluaW5nRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyO1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaHVkU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcImh1ZFNjZW5lXCIpIGFzIEh1ZFNjZW5lXHJcblxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLmhwIC09IHRoaXMuc3RhdHMuZGFtYWdlO1xyXG4gICAgICAgICAgICBodWRTY2VuZS5ocFJlZG5lc3MgPSAxXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZXRhU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcIm1ldGFTY2VuZVwiKSBhcyBNZXRhU2NlbmVcclxuICAgICAgICAgICAgbWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKCkuY2FtZXJhcy5tYWluLnNoYWtlKDIwMCwgMC4wMDUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlc3Bhd24odGhpcy5zdGF0cywgdGhpcy5ocCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5lbmVteUVuZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjayh0aGlzLnN0YXRzLmRhbWFnZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRPblBhdGgod2F2ZSwgcmVzcGF3bkhlYWx0aCwgc3RhcnRfdCA9IDApIHtcclxuICAgICAgICAvLyBzZXQgdGhlIHQgcGFyYW1ldGVyIGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxyXG4gICAgICAgIHRoaXMuZm9sbG93ZXIudCA9IHN0YXJ0X3Q7XHJcblxyXG4gICAgICAgIGlmIChyZXNwYXduSGVhbHRoID4gMClcclxuICAgICAgICAgICAgdGhpcy5ocCA9IHJlc3Bhd25IZWFsdGg7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmhwID0gdGhpcy5zdGF0cy5ocCh3YXZlKTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuc3RhdHMuc3BlZWQ7XHJcbiAgICAgICAgdGhpcy50aW50ID0gdGhpcy5zdGF0cy50aW50O1xyXG5cclxuICAgICAgICAvLyBnZXQgeCBhbmQgeSBvZiB0aGUgZ2l2ZW4gdCBwb2ludFxyXG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KHRoaXMuZm9sbG93ZXIudCwgdGhpcy5mb2xsb3dlci52ZWMpO1xyXG5cclxuICAgICAgICAvLyBzZXQgdGhlIHggYW5kIHkgb2Ygb3VyIGVuZW15IHRvIHRoZSByZWNlaXZlZCBmcm9tIHRoZSBwcmV2aW91cyBzdGVwXHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmZvbGxvd2VyLnZlYy54LCB0aGlzLmZvbGxvd2VyLnZlYy55KTtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lUmF0ZSA9IE1hdGgubWluKDYwLCB0aGlzLnN0YXRzLnNwZWVkICogNDAwMDAgKiAxNSlcclxuICAgICAgICBpZiAodGhpcy5zdGF0cy5zcHJpdGVOYW1lID09PSBcImZhdEVuZW15XCIgfHwgdGhpcy5zdGF0cy5zcHJpdGVOYW1lID09PSBcInNwbGl0dGVyRmF0RW5lbXlcIikgeyAvLyBoYWNrXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZSAqPSAwLjVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogYCR7dGhpcy5zdGF0cy5zcHJpdGVOYW1lfV93YWxrYCxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiBmcmFtZVJhdGVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWNlaXZlRGFtYWdlKGRhbWFnZTogaW50ZWdlcikge1xyXG4gICAgICAgIHRoaXMuaHAgLT0gZGFtYWdlIC0gdGhpcy5zdGF0cy5hcm1vdXIodGhpcy5zY2VuZS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZSk7XHJcblxyXG4gICAgICAgIC8vIGlmIGhwIGRyb3BzIGJlbG93IDAgd2UgZGVhY3RpdmF0ZSB0aGlzIGVuZW15XHJcbiAgICAgICAgaWYgKHRoaXMuaHAgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMub25EZWF0aCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGgoKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlYXRoQWJpbGl0eSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7ICAvLyBBZGQgZ29sZCBpbiBiYXNlIGxheWVyIG9ubHlcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5kZWFkRGFuZ2VyICs9IHRoaXMuc3RhdHMuZGFuZ2VyXHJcbiAgICAgICAgICAgIFBsYXllckluZm8ubW9uZXkgKz0gdGhpcy5zdGF0cy5tb25leTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXHJcbiAgICAgICAgICAgIGFscGhhOiAwLFxyXG4gICAgICAgICAgICBhbmdsZTogUGxheWVySW5mby5STkcuc2lnbigpICogMTgwLFxyXG4gICAgICAgICAgICBzY2FsZTogMC41LFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoNjAwLCA4MDApLFxyXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGhBYmlsaXR5KCkgeyAgLy8gb3ZlcnJpZGUgdGhpcyBmb3Igc3BlY2lhbCBvbi1kZWF0aCBhYmlsaXRpZXNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYWtFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuV2VhaylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhdEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5GYXQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcm1vdXJlZEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5Bcm1vdXJlZClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhc3RFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuRmFzdClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwbGl0dGVyQmlnRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLlNwbGl0dGVyQmlnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVhdGhBYmlsaXR5KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdGF0cy5zcGxpdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1IgbWlzc2luZyBzcGxpdCBjb25maWcgb24gJyArIHRoaXMuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdHMuc3BsaXQuYW1vdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld0VuZW15ID0gdGhpcy5zY2VuZS5hbGxFbmVtaWVzW3RoaXMuc3RhdHMuc3BsaXQuY2ZnLm5hbWVdLmdldCgpXHJcbiAgICAgICAgICAgIG5ld0VuZW15LnNldFZpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIG5ld0VuZW15LnNldEFjdGl2ZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuZGVhZERhbmdlciAtPSB0aGlzLnN0YXRzLnNwbGl0LmNmZy5kYW5nZXI7XHJcbiAgICAgICAgICAgIG5ld0VuZW15LnN0YXJ0T25QYXRoKHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmUsIDAsIHRoaXMuZm9sbG93ZXIudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJTbWFsbEVuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlclNtYWxsKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3BsaXR0ZXJGYXRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJGYXQpXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcclxuaW1wb3J0IHsgVElMRV9TSVpFIH0gZnJvbSBcIi4vdGVycmFpblwiXHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQmFyIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB7XHJcbiAgICBzdGF0aWMgSEVBTFRIX0NPTE9SID0gMHhmOGZmMzYgLy8weGZmNDQ0NFxyXG4gICAgc3RhdGljIEhFQUxUSF9MT1NTX0NPTE9SID0gMHg3ZDdkN2QgLy8gMHg0NGZmNDRcclxuXHJcbiAgICBzY2VuZTogVERTY2VuZVxyXG5cclxuICAgIHByaXZhdGUgX2hlYWx0aDogbnVtYmVyID0gMSAgLy8gMCB0byAxXHJcbiAgICBzbG93SGVhbHRoOiBudW1iZXJcclxuXHJcbiAgICBiZ0JhcjogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZVxyXG4gICAgaGVhbHRoQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXHJcbiAgICBzbG93SGVhbHRoQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXHJcblxyXG4gICAgeDogbnVtYmVyXHJcbiAgICB5OiBudW1iZXJcclxuICAgIHdpZHRoOiBudW1iZXJcclxuICAgIG1heEhlYWx0aDogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMClcclxuICAgIH1cclxuXHJcbiAgICBtYWtlKHgsIHksIHdpZHRoLCBoZWFsdGg9MCkge1xyXG4gICAgICAgIHRoaXMueCA9IHhcclxuICAgICAgICB0aGlzLnkgPSB5XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoXHJcblxyXG4gICAgICAgIC8vIGhlYWx0aCBiYXIgYmFzZS9iYWNrZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5iZ0JhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZSgwLCAwLCB3aWR0aCArIDQsIDYsIDB4MDAwMDAwKVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuYmdCYXIpXHJcblxyXG4gICAgICAgIC8vIHZpc3VhbGl6YXRpb24gb2YgaGVhbHRoIGxvc3Nlc1xyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgd2lkdGgsIDQsXHJcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfTE9TU19DT0xPUixcclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5zbG93SGVhbHRoQmFyKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGhlYWx0aCBiYXIgaXRzZWxmXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIgPSB0aGlzLnNjZW5lLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgICAgICAgIDAsIDAsXHJcbiAgICAgICAgICAgIHdpZHRoLCA0LFxyXG4gICAgICAgICAgICBIZWFsdGhCYXIuSEVBTFRIX0NPTE9SLFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmhlYWx0aEJhcilcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSBoZWFsdGhcclxuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSBoZWFsdGhcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVhbHRoKGgpIHtcclxuICAgICAgICB0aGlzLl9oZWFsdGggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBoKSlcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVhbHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFsdGhcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGV2ZWxVcCgpIHtcclxuICAgICAgICB0aGlzLnNsb3dIZWFsdGggPSAwO1xyXG4gICAgICAgIHRoaXMuaGVhbHRoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICBjb25zdCBjb2VmID0gTWF0aC5wb3coMC45OSwgZGVsdGEvMTAwMCAqIDYwKVxyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IGNvZWYgKiB0aGlzLnNsb3dIZWFsdGggKyAoMSAtIGNvZWYpICogdGhpcy5oZWFsdGhcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5oZWFsdGhcclxuICAgICAgICB0aGlzLnNsb3dIZWFsdGhCYXIud2lkdGggPSB0aGlzLndpZHRoICogdGhpcy5zbG93SGVhbHRoXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJ1xyXG5pbXBvcnQgeyBIdWRTY2VuZSwgSFVEX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvaHVkU2NlbmUnO1xyXG5pbXBvcnQgeyBNZXRhU2NlbmUgfSBmcm9tICcuL3NjZW5lcy9tZXRhU2NlbmUnO1xyXG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZSdcclxuaW1wb3J0IHsgVERTY2VuZUNvbmZpZyB9IGZyb20gJy4vc2NlbmVzL3RkU2NlbmVDb25maWcnO1xyXG5pbXBvcnQgeyBUZXJyYWluIH0gZnJvbSAnLi90ZXJyYWluJztcclxuXHJcbmxldCBtZXRhU2NlbmUgPSBuZXcgTWV0YVNjZW5lKClcclxubGV0IGh1ZFNjZW5lID0gbmV3IEh1ZFNjZW5lKG1ldGFTY2VuZSk7XHJcblxyXG5sZXQgbGV2ZWxzID0gW1xyXG4gIG1ldGFTY2VuZSxcclxuICBodWRTY2VuZSxcclxuXVxyXG5cclxuY29uc3QgZ2FtZUNvbmZpZyA9IHtcclxuICB0eXBlOiBQaGFzZXIuQVVUTyxcclxuICBwYXJlbnQ6ICdjb250ZW50JyxcclxuICB3aWR0aDogVERfU0NFTkVfV0lEVEggKyBIVURfV0lEVEggKiAyLFxyXG4gIGhlaWdodDogVERfU0NFTkVfSEVJR0hULFxyXG4gIHBoeXNpY3M6IHtcclxuICAgIGRlZmF1bHQ6ICdhcmNhZGUnXHJcbiAgfSxcclxuICBzY2VuZTogbGV2ZWxzLFxyXG4gIHNlZWQ6IFtcIjQyXCJdXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiLCJpbXBvcnQgeyBQTEFZRVJfSEVBTFRIX1JFR0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVySW5mbyB7XHJcbiAgICBzdGF0aWMgbW9uZXk6IG51bWJlciA9IDEwO1xyXG4gICAgc3RhdGljIGhwOiBudW1iZXIgPSAxMDtcclxuICAgIHN0YXRpYyB0aW1lU2NhbGU6IG51bWJlciA9IDE7XHJcbiAgICBzdGF0aWMgUk5HID0gbmV3IFBoYXNlci5NYXRoLlJhbmRvbURhdGFHZW5lcmF0b3IoW1wiNDJcIl0pXHJcblxyXG4gICAgc3RhdGljIHJlZ2VuUHJvZ3Jlc3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB3YXZlSGVhbHRoUmVnZW4oKSB7XHJcbiAgICAgICAgUGxheWVySW5mby5yZWdlblByb2dyZXNzICs9IFBMQVlFUl9IRUFMVEhfUkVHRU47XHJcbiAgICAgICAgbGV0IHJlc3RvcmVkID0gTWF0aC5mbG9vcihQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MpO1xyXG4gICAgICAgIFBsYXllckluZm8uaHAgKz0gcmVzdG9yZWQ7XHJcbiAgICAgICAgUGxheWVySW5mby5yZWdlblByb2dyZXNzIC09IHJlc3RvcmVkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPdmVyU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lXHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhU2NlbmU6IE1ldGFTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHtcclxuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBrZXk6IFwiZ2FtZU92ZXJTY2VuZVwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWV0YVNjZW5lID0gbWV0YVNjZW5lXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoNTEyLCAyNTYsIDEwMjQsIDUxMiwgMHhhYTQ0NDQsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKDUxMiwgMjU2LTQwLCA1MTItMTI4LCAyNTYtNjQsIDB4NDQ0NDQ0KTtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMTYwLCBcIllPVSBESUVEXCIpLnNldE9yaWdpbigwLjUpO1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAxODAsIGBMYXN0IHdhdmUgd2l0bmVzc2VkOiAke3RoaXMubWV0YVNjZW5lLmdldFJvb3RURFNjZW5lKCkud2F2ZU1hbmFnZXIuY3VycmVudFdhdmV9YCkuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDIwMCwgYFdlYWx0aCB0YWtlbiB0byBncmF2ZTogJHtQbGF5ZXJJbmZvLm1vbmV5fWApLnNldE9yaWdpbigwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMjUwLCBgREFSRSBBR0FJTmApLnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSkub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxyXG4gICAgICAgICAgICB9ICAgIFxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50VGltZSA9IDA7XHJcbiAgICByZWxvYWRlZCA9IGZhbHNlO1xyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSArPSBkZWx0YVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVG93ZXJDb25maWcsIFRPV0VSX0NPTkZJR1MsIFJBTkdFX0lORElDQVRPUl9DT05GSUcsIEVuZW15Q29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tIFwiLi4vZW5lbXlcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IE1BWF9IRUlHSFQsIE1BWF9XSURUSCwgVGVycmFpbiwgVElMRV9TSVpFIH0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi4vdG93ZXJzXCI7XHJcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL21ldGFTY2VuZVwiO1xyXG5pbXBvcnQgeyBURFNjZW5lLCBURF9TQ0VORV9IRUlHSFQsIFREX1NDRU5FX1dJRFRIIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xyXG5cclxuY29uc3QgSFVEX0JHX0NPTE9SID0gMHhmZjhhNmQgIC8vMHhmZmFhN2RcclxuZXhwb3J0IGNvbnN0IEhVRF9XSURUSCA9IFRJTEVfU0laRSAqIDNcclxuXHJcbmV4cG9ydCBjbGFzcyBIdWRTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgbW9uZXlUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgd2F2ZVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBocFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBocFJlZG5lc3M6IG51bWJlciAvLyAwIHRvIDFcclxuICAgIGRlcHRoVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGdvVXBUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgZGVzY3JpcHRpb25UZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG5cclxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lO1xyXG4gICAgYmFja1RvUm9vdFNjZW5lQnV0dG9uOiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIGJ1eVRvd2VySWNvbnM6IEJ1eVRvd2VySWNvbltdXHJcblxyXG4gICAgbGFzdEFjdGl2ZVNjZW5lOiBURFNjZW5lXHJcbiAgICBwYXJlbnRTY2VuZXNJbWFnZXM6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVtdXHJcbiAgICBzbG93U3BlZWRUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dDtcclxuICAgIGZhc3RTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBrZXk6IFwiaHVkU2NlbmVcIixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICBsZXQgdyA9IEhVRF9XSURUSFxyXG4gICAgICAgIGxldCBoID0gVElMRV9TSVpFICogTUFYX0hFSUdIVFxyXG4gICAgICAgIGNvbnN0IHhMZWZ0ID0gdyAvIDJcclxuICAgICAgICBjb25zdCB4UmlnaHQgPSB3ICsgVERfU0NFTkVfV0lEVEggKyB3IC8gMlxyXG5cclxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUodyAvIDIsIGggLyAyLCB3LCBoLCBIVURfQkdfQ09MT1IpXHJcbiAgICAgICAgdGhpcy5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICB4UmlnaHQsIGggLyAyLFxyXG4gICAgICAgICAgICB3LCBoLFxyXG4gICAgICAgICAgICBIVURfQkdfQ09MT1IsXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLm1vbmV5VGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDIwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy5tb25leVRleHQuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLmhwVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLmhwUmVkbmVzcyA9IDBcclxuXHJcbiAgICAgICAgdGhpcy53YXZlVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDYwLCBcIlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy53YXZlVGV4dC5zZXRPcmlnaW4oMC41KVxyXG5cclxuICAgICAgICB0aGlzLmRlcHRoVGV4dCA9IHRoaXMuYWRkLnRleHQoeFJpZ2h0LCAyMCwgXCJEZXB0aDogXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLmRlcHRoVGV4dC5zZXRPcmlnaW4oMC41KVxyXG5cclxuICAgICAgICB0aGlzLmdvVXBUZXh0ID0gdGhpcy5hZGQudGV4dCh4UmlnaHQsIDUwLCBcIkdvIHVwIHRvOlwiLCB7IGZvbnRTaXplOiAnMjBweCcgfSk7XHJcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0VmlzaWJsZShmYWxzZSlcclxuXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQgPSB0aGlzLmFkZC50ZXh0KDUsIDMwMCwgXCJcIiwgeyBmb250U2l6ZTogJzEwcHQnIH0pO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFdvcmRXcmFwV2lkdGgoSFVEX1dJRFRIIC0gMTAsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5idXlUb3dlckljb25zID0gW107XHJcbiAgICAgICAgbGV0IHRvd2VyVHlwZUluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCB0b3dlckNvbmZpZyBvZiBUT1dFUl9DT05GSUdTKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnV5VG93ZXJJY29ucy5wdXNoKG5ldyBCdXlUb3dlckljb24odGhpcywgdyAvIDIsIDExMCArIDcwICogdG93ZXJUeXBlSW5kZXgsIHRvd2VyQ29uZmlnKSlcclxuICAgICAgICAgICAgdG93ZXJUeXBlSW5kZXgrKztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZCA9IDNcclxuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NTAsIFwiPlNsb3c8XCIsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNDc1LCBcIkZhc3RcIiwge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRJbnRlcmFjdGl2ZSgpLnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgUGxheWVySW5mby50aW1lU2NhbGUgPSAxLCBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dC5zZXRUZXh0KFwiPlNsb3c8XCIpXHJcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiRmFzdFwiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgICAgICAgUGxheWVySW5mby50aW1lU2NhbGUgPSA0LCBudWxsXHJcbiAgICAgICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dC5zZXRUZXh0KFwiU2xvd1wiKVxyXG4gICAgICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQuc2V0VGV4dChcIj5GYXN0PFwiKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AoJ2h1ZFNjZW5lJyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwXHJcbiAgICBwdWJsaWMgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWV0YVNjZW5lLmlzR2FtZU92ZXIpe1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMubW9uZXlUZXh0LnNldFRleHQoJ01vbmV5OiAnICsgUGxheWVySW5mby5tb25leSlcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFdhdmUgPSB0aGlzLm1ldGFTY2VuZS5nZXRSb290VERTY2VuZSgpLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlXHJcbiAgICAgICAgdGhpcy53YXZlVGV4dC5zZXRUZXh0KGBXYXZlOiAke2N1cnJlbnRXYXZlfWApXHJcblxyXG4gICAgICAgIHRoaXMuaHBUZXh0LnNldFRleHQoJ0hQOiAnICsgUGxheWVySW5mby5ocClcclxuXHJcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0Q29sb3IoUGhhc2VyLkRpc3BsYXkuQ29sb3IuUkdCVG9TdHJpbmcoXHJcbiAgICAgICAgICAgIDI1NSwgMjU1ICogKDEgLSB0aGlzLmhwUmVkbmVzcyksIDI1NSAqICgxIC0gdGhpcy5ocFJlZG5lc3MpXHJcbiAgICAgICAgKSlcclxuICAgICAgICBjb25zdCBzZWNzVG9XaGl0ZSA9IDAuNVxyXG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gTWF0aC5tYXgoMCwgdGhpcy5ocFJlZG5lc3MgLSBkZWx0YSAvIDEwMDAgLyBzZWNzVG9XaGl0ZSlcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgaWNvbiBvZiB0aGlzLmJ1eVRvd2VySWNvbnMpIHtcclxuICAgICAgICAgICAgaWNvbi51cGRhdGUodGhpcy5sYXN0VGltZSwgZGVsdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoUGxheWVySW5mby5ocCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLmdhbWVPdmVyKClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVJbmZvQmFzZWRPbkFjdGl2ZVNjZW5lKCkge1xyXG4gICAgICAgIGxldCBhY3RpdmVTY2VuZSA9IHRoaXMubWV0YVNjZW5lLmdldEFjdGl2ZVNjZW5lKCk7XHJcbiAgICAgICAgaWYgKCFhY3RpdmVTY2VuZSkgeyByZXR1cm47IH1cclxuICAgICAgICBpZiAoYWN0aXZlU2NlbmUgPT0gdGhpcy5sYXN0QWN0aXZlU2NlbmUpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgIHRoaXMubGFzdEFjdGl2ZVNjZW5lID0gYWN0aXZlU2NlbmU7XHJcbiAgICAgICAgdGhpcy5kZXB0aFRleHQuc2V0VGV4dChgRGVwdGg6ICR7YWN0aXZlU2NlbmUuc2NlbmVMZXZlbH1gKVxyXG5cclxuICAgICAgICBjb25zdCBwYXJlbnRTY2VuZXMgPSB0aGlzLm1ldGFTY2VuZS5nZXRQYXJlbnRTY2VuZXNUb1Jvb3QoKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnBhcmVudFNjZW5lc0ltYWdlc1tpXTtcclxuICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldFZpc2libGUocGFyZW50U2NlbmVzLmxlbmd0aCA+IDApXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSBwYXJlbnRTY2VuZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IHNjZW5lSW5kZXggPSAocGFyZW50U2NlbmVzLmxlbmd0aCAtIDEpIC0gaTtcclxuICAgICAgICAgICAgbGV0IHNjYWxlID0gMC4xXHJcbiAgICAgICAgICAgIGNvbnN0IG1heEltYWdlc05vcm1hbFNjYWxlRml0ID0gNztcclxuICAgICAgICAgICAgaWYgKHBhcmVudFNjZW5lcy5sZW5ndGggPiBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkge1xyXG4gICAgICAgICAgICAgICAgc2NhbGUgLz0gKChwYXJlbnRTY2VuZXMubGVuZ3RoIC8gbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQpICogMS4wMjIpIC8vIE5PVEU6IERyaWZ0cywgaGVuY2UgcmUtc2NhbGUgYnkgdGhpcyBtYWdpYyBudW1iZXIsIGlkayB3aHk7IG5vIHRpbWUgdG8gZmlndXJlIG91dFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3QnV0dG9uID0gdGhpcy5hZGQuaW1hZ2UoXHJcbiAgICAgICAgICAgICAgICBURF9TQ0VORV9XSURUSCArIEhVRF9XSURUSCAqIDEuNSxcclxuICAgICAgICAgICAgICAgIDEwMCArIHNjZW5lSW5kZXggKiBzY2FsZSAqIFREX1NDRU5FX0hFSUdIVCAqIDEuMixcclxuICAgICAgICAgICAgICAgIGBzbmFwLSR7cGFyZW50U2NlbmVzW2ldLnNjZW5lLmtleX1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVggPSBzY2FsZVxyXG4gICAgICAgICAgICBuZXdCdXR0b24uc2NhbGVZID0gc2NhbGVcclxuICAgICAgICAgICAgbmV3QnV0dG9uLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBhcmVudFNjZW5lc1tpXS5zY2VuZS5rZXksIGZhbHNlKSwgdGhpcy5tZXRhU2NlbmUpXHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXdCdXR0b25cclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb25Ub3dlcihjb25maWc6IFRvd2VyQ29uZmlnLCB0b3dlcjogVG93ZXIgPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGxldmVsID0gMVxyXG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIlxyXG5cclxuICAgICAgICBpZiAodG93ZXIgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGV4dCA9IGAke2NvbmZpZy5uYW1lfTogJHtjb25maWcuZGVzY3JpcHRpb259XFxuYFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBgTGV2ZWwgJHt0b3dlci5sZXZlbH0gJHtjb25maWcubmFtZX0gdG93ZXIuXFxuYFxyXG4gICAgICAgICAgICBsZXZlbCA9IHRvd2VyLmxldmVsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0ZXh0ICs9IGBEYW1hZ2U6ICR7Y29uZmlnLmRhbWFnZShsZXZlbCl9LlxcbmBcclxuICAgICAgICB0ZXh0ICs9IGBGaXJlIHJhdGU6ICR7Y29uZmlnLmZpcmVyYXRlKGxldmVsKS8xMDAwfXMuXFxuYFxyXG4gICAgICAgIHRleHQgKz0gYFJhbmdlOiAke2NvbmZpZy5yYW5nZShsZXZlbCl9LlxcbmBcclxuXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0VGV4dCh0ZXh0KVxyXG4gICAgfVxyXG5cclxuICAgIHNldERlc2NyaXB0aW9uRW5lbXkoZW5lbXk6IEVuZW15QmFzZSkge1xyXG4gICAgICAgIGxldCB0ZXh0ID0gXCJcIlxyXG4gICAgICAgIGlmIChlbmVteSkge1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGAke2VuZW15LnN0YXRzLmRpc3BsYXlOYW1lfVxcbmA7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYEhlYWx0aDogJHtlbmVteS5ocH0vJHtlbmVteS5zdGF0cy5ocCgxKX1cXG5gO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IGBBcm1vdXI6ICR7ZW5lbXkuc3RhdHMuZGFtYWdlfVxcbmA7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYFNwZWVkOiAke2VuZW15LnNwZWVkICogNjAwMDB9XFxuYDtcclxuICAgICAgICAgICAgaWYoZW5lbXkuc3RhdHMuYmx1cmIpXHJcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IGBcXG4ke2VuZW15LnN0YXRzLmJsdXJifVxcbmA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25UZXh0LnNldFRleHQodGV4dClcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQnV5VG93ZXJJY29uIHtcclxuICAgIHRvd2VyTmFtZTogc3RyaW5nXHJcbiAgICB0b3dlckNvbmZpZzogVG93ZXJDb25maWdcclxuXHJcbiAgICBzcHJpdGVDb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXJcclxuICAgIHByaWNlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGh1ZFNjZW5lOiBIdWRTY2VuZVxyXG5cclxuICAgIG9yaWdYOiBudW1iZXJcclxuICAgIG9yaWdZOiBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodWRTY2VuZTogSHVkU2NlbmUsIHgsIHksIGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuaHVkU2NlbmUgPSBodWRTY2VuZVxyXG4gICAgICAgIHRoaXMub3JpZ1ggPSB4XHJcbiAgICAgICAgdGhpcy5vcmlnWSA9IHlcclxuICAgICAgICB0aGlzLnRvd2VyTmFtZSA9IGNvbmZpZy5uYW1lXHJcbiAgICAgICAgdGhpcy50b3dlckNvbmZpZyA9IGNvbmZpZ1xyXG5cclxuICAgICAgICBsZXQgdG93ZXJCYXNlID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJiYXNlcycsIGNvbmZpZy5zcHJpdGVCYXNlKTtcclxuICAgICAgICB0b3dlckJhc2Uuc2V0VGludChjb25maWcudGludEJhc2UpO1xyXG4gICAgICAgIGxldCB0b3dlck1pZCA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VybWlkcycsIGNvbmZpZy5zcHJpdGVNaWQpO1xyXG4gICAgICAgIHRvd2VyTWlkLnNldFRpbnQoY29uZmlnLnRpbnRNaWQpO1xyXG4gICAgICAgIGxldCB0b3dlclRvcCA9IGh1ZFNjZW5lLmFkZC5zcHJpdGUoMCwgMCwgJ3Rvd2VydG9wcycsIGNvbmZpZy5zcHJpdGVUb3ApO1xyXG4gICAgICAgIHRvd2VyVG9wLnNldFRpbnQoY29uZmlnLnRpbnRUb3ApO1xyXG5cclxuICAgICAgICBsZXQgdG93ZXJSYW5nZSA9IGh1ZFNjZW5lLmFkZC5jaXJjbGUoXHJcbiAgICAgICAgICAgIDAsIDAsIGNvbmZpZy5yYW5nZSgxKSxcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuYWxwaGFcclxuICAgICAgICApO1xyXG4gICAgICAgIHRvd2VyUmFuZ2Uuc2V0U3Ryb2tlU3R5bGUoXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZVdpZHRoLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VDb2xvdXJcclxuICAgICAgICApO1xyXG4gICAgICAgIHRvd2VyUmFuZ2Uuc2V0VmlzaWJsZShmYWxzZSk7XHJcblxyXG4gICAgICAgIHZhciBzcHJpdGVzID0gW1xyXG4gICAgICAgICAgICB0b3dlckJhc2UsXHJcbiAgICAgICAgICAgIHRvd2VyTWlkLFxyXG4gICAgICAgICAgICB0b3dlclRvcCxcclxuICAgICAgICAgICAgdG93ZXJSYW5nZSxcclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIgPSBodWRTY2VuZS5hZGQuY29udGFpbmVyKHgsIHksIHNwcml0ZXMpXHJcbiAgICAgICAgdGhpcy5zcHJpdGVDb250YWluZXIuZ2V0QWxsKClcclxuXHJcbiAgICAgICAgY29uc3QgcGFkID0gM1xyXG4gICAgICAgIHRoaXMucHJpY2VUZXh0ID0gaHVkU2NlbmUuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIHggKyAxNSwgeSwgXCJcIiArIHRoaXMudG93ZXJDb25maWcucHJpY2UsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRTaXplKFRJTEVfU0laRSwgVElMRV9TSVpFKTtcclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5zZXRJbnRlcmFjdGl2ZSgpXHJcbiAgICAgICAgLy8gdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiBjb25zb2xlLmxvZyhcImZvb2JhclwiKSwgdGhpcyk7XHJcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyKVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUuc2V0RGVzY3JpcHRpb25Ub3dlcihjb25maWcpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlciwgZ2FtZU9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgcmFuZ2UgaW5kaWNhdG9yIHZpc2libGVcclxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgZ2FtZU9iamVjdC5saXN0LmZvckVhY2goKHNwcml0ZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkgPT4ge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBodWRTY2VuZS5pbnB1dC5vbignZHJhZycsIGZ1bmN0aW9uIChwb2ludGVyLCBnYW1lT2JqZWN0LCBkcmFnWCwgZHJhZ1kpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSBkcmFnWDtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gZHJhZ1k7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnZW5kJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKGdhbWVPYmplY3QgIT0gdGhpcy5zcHJpdGVDb250YWluZXIpIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIG1ha2VzIHJhbmdlIGluZGljYXRvciB2aXNpYmxlXHJcbiAgICAgICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzNdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZSkuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaHVkU2NlbmUubWV0YVNjZW5lLmJ1aWxkU291bmQucGxheSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NlbmUgPSBodWRTY2VuZS5tZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKVxyXG4gICAgICAgICAgICBzY2VuZS50b3dlck1hbmFnZXIucGxhY2VUb3dlcihwb2ludGVyLCB0aGlzLnRvd2VyTmFtZSk7XHJcblxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnggPSB0aGlzLm9yaWdYXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueSA9IHRoaXMub3JpZ1lcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldFRpbnQoKSB7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMF0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aGlzLnRvd2VyQ29uZmlnLnRpbnRUb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNob3BJY29uVGludCh0aW50OiBudW1iZXIpIHtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsxXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRpbnQgJiB0aGlzLnRvd2VyQ29uZmlnLnRpbnRNaWQpO1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzJdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU2hvcCgpIHtcclxuICAgICAgICAvLyBVbmNvbW1lbnQgdG8gcHJldmVudCBuZWdhdGl2ZSBtb25leTpcclxuICAgICAgICB0aGlzLmh1ZFNjZW5lLmlucHV0LnNldERyYWdnYWJsZSh0aGlzLnNwcml0ZUNvbnRhaW5lciwgUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKVxyXG5cclxuICAgICAgICBpZiAoUGxheWVySW5mby5tb25leSA+PSB0aGlzLnRvd2VyQ29uZmlnLnByaWNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHgwMGZmMDApO1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VGludCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJpY2VUZXh0LnNldFRpbnQoMHhmZjAwMDApO1xyXG4gICAgICAgICAgICB0aGlzLnNldFNob3BJY29uVGludCgweDk5NTU1NSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9sZE1vbmV5OiBpbnRlZ2VyID0gMFxyXG4gICAgdXBkYXRlKHRpbWUsIGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKFBsYXllckluZm8ubW9uZXkgIT0gdGhpcy5vbGRNb25leSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNob3AoKTtcclxuICAgICAgICAgICAgdGhpcy5vbGRNb25leSA9IFBsYXllckluZm8ubW9uZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7VGVycmFpbn0gZnJvbSBcIi4uL3RlcnJhaW5cIlxyXG5pbXBvcnQgeyBHYW1lT3ZlclNjZW5lIH0gZnJvbSBcIi4vZ2FtZU92ZXJTY2VuZVwiO1xyXG5pbXBvcnQge1NDRU5FX1RSQU5TSVRJT05fTVMsIFREU2NlbmV9IGZyb20gXCIuL3RkU2NlbmVcIjtcclxuaW1wb3J0IHtURFNjZW5lQ29uZmlnfSBmcm9tIFwiLi90ZFNjZW5lQ29uZmlnXCJcclxuXHJcbmNvbnN0IHNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgIGtleTogJ21ldGFTY2VuZScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTWV0YVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBwdWJsaWMgc2NlbmVzOiBURFNjZW5lW11cclxuICAgIHB1YmxpYyBhY3RpdmVTY2VuZTogVERTY2VuZVxyXG4gICAgbWFpblNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gICAgYnVpbGRTb3VuZDogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihzY2VuZUNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpXHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmUgPSB0aGlzLmFkZFNjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5zY2VuZXNbMF0uc2NlbmUuc2V0VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KFwiaHVkU2NlbmVcIik7XHJcblxyXG4gICAgICAgIHRoaXMubWFpblNvdW5kID0gdGhpcy5zb3VuZC5hZGQoXCJtYWluX211c2ljXCIsIHtcImxvb3BcIjogdHJ1ZSwgXCJ2b2x1bWVcIjogMC4xfSk7XHJcbiAgICAgICAgdGhpcy5tYWluU291bmQucGxheSgpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1aWxkU291bmQgPSB0aGlzLnNvdW5kLmFkZCgnYnVpbGRfc291bmQnLCB7ICdsb29wJzogZmFsc2UsICd2b2x1bWUnOiAxfSk7XHJcbiAgICB9XHJcblxyXG4gIC8vIENyZWF0ZXMgbmV3IFNjZW5lLCBlbmFibGVzIGl0LCBhbmQgc2V0cyBpdCBpbnZpc2libGVcclxuICAgIHB1YmxpYyBhZGRTY2VuZShwYXJlbnRTY2VuZUtleT86IHN0cmluZyk6IFREU2NlbmUge1xyXG4gICAgICAgIGxldCBwYXJlbnRTY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShwYXJlbnRTY2VuZUtleSlcclxuICAgICAgICBsZXQgc2NlbmVMZXZlbCA9IChwYXJlbnRTY2VuZT8uc2NlbmVMZXZlbCA/PyAtMSkgKyAxO1xyXG5cclxuICAgICAgICBsZXQgc2NlbmVJbmRleCA9IHRoaXMuc2NlbmVzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBzY2VuZUtleSA9IGB0ZFNjZW5lJHtzY2VuZUluZGV4fWBcclxuXHJcbiAgICAgICAgbGV0IG5ld1NjZW5lID0gbmV3IFREU2NlbmUoXHJcbiAgICAgICAgICAgIG5ldyBURFNjZW5lQ29uZmlnKG5ldyBUZXJyYWluKDEwLCA4KSwgc2NlbmVMZXZlbCwgcGFyZW50U2NlbmVLZXksIHNjZW5lS2V5KSxcclxuICAgICAgICAgICAgdGhpcyxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLmFkZChcclxuICAgICAgICAgICAgc2NlbmVLZXksXHJcbiAgICAgICAgICAgIG5ld1NjZW5lLFxyXG4gICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnNjZW5lcy5wdXNoKG5ld1NjZW5lKVxyXG4gICAgICAgIG5ld1NjZW5lLnNjZW5lLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNjZW5lKSB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AodGhpcy5hY3RpdmVTY2VuZS5zY2VuZS5rZXkpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1NjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTY2VuZUJ5S2V5KGtleT86IHN0cmluZyk6IFREU2NlbmUgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuZ2V0KGtleSkgYXMgVERTY2VuZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gbWFrZXMgY3VycmVudCBzY2VuZSBpbnZpc2libGUsIG1ha2VzIG5ldyBzY2VuZSB2aXNpYmxlOyBkb2Vzbid0IGNoYW5nZSBhY3Rpdm5lc3NcclxuICAgIHB1YmxpYyBzd2l0Y2hUb1NjZW5lKG5ld1NjZW5lS2V5OiBzdHJpbmcsIGdvaW5nSW5zaWRlOiBib29sZWFuLCBpID0gMCwgaiA9IDApIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lPy5zZXRJc0ZvcmVncm91bmQoZmFsc2UsIGdvaW5nSW5zaWRlLCBpLCBqKTtcclxuICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLmdldFNjZW5lQnlLZXkobmV3U2NlbmVLZXkpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgU3dpdGNoaW5nIGZyb20gJHt0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleX0gKHBhcmVudCAke3RoaXMuYWN0aXZlU2NlbmUuc2NlbmVQYXJlbnRLZXl9KSB0b2BcclxuICAgICAgICAgICAgKyBgICR7bmV3U2NlbmUuc2NlbmUua2V5fSAocGFyZW50ICR7bmV3U2NlbmUuc2NlbmVQYXJlbnRLZXl9KWBcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIG5ld1NjZW5lLnRpbWUuYWRkRXZlbnQoe1xyXG4gICAgICAgICAgICBkZWxheTogU0NFTkVfVFJBTlNJVElPTl9NUyxcclxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lPy5zY2VuZS5zZXRWaXNpYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IG5ld1NjZW5lXHJcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zZXRJc0ZvcmVncm91bmQodHJ1ZSwgZ29pbmdJbnNpZGUsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKG5ld1NjZW5lS2V5KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIDEuMDU5NDYzMDk0MzYgfiAyXigxLzEyKSwgaS5lLiBvbmUgc2VtaXRvbmVcclxuICAgICAgICB0aGlzLnNvdW5kLnNldFJhdGUoMSAvIChNYXRoLnBvdygxLjA1OTQ2MzA5NDM2LCBuZXdTY2VuZS5zY2VuZUxldmVsKSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgIHB1YmxpYyBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNHYW1lT3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBnYW1lT3ZlclNjZW5lID0gdGhpcy5zY2VuZS5hZGQoXCJnYW1lT3ZlclNjZW5lXCIsIG5ldyBHYW1lT3ZlclNjZW5lKHRoaXMpKVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnN0YXJ0KGdhbWVPdmVyU2NlbmUpO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLnBhdXNlKClcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXVzZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCkge1xyXG4gICAgICAgIC8vIGxvYWQgdGhlIGdhbWUgYXNzZXRzXHJcbiAgICAgICAgdGhpcy5sb2FkLnNldEJhc2VVUkwoJ2Fzc2V0cy8nKVxyXG5cclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3dlYWtFbmVteScsICdlbmVteS5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZmFzdEVuZW15JywgJ2VuZW15X2Zhc3QucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2FybW91cmVkRW5lbXknLCAnZW5lbXlfYXJtb3JlZC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJCaWdFbmVteScsICdlbmVteV9zcGxpdF9iaWcucG5nJywge2ZyYW1lV2lkdGg6IDQ4LCBmcmFtZUhlaWdodDogNDh9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyU21hbGxFbmVteScsICdlbmVteV9zcGxpdF9zbWFsbC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnZmF0RW5lbXknLCAnZW5lbXlfY2hvbmsucG5nJywge2ZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogNTZ9KTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3NwbGl0dGVyRmF0RW5lbXknLCAnZW5lbXlfc3BsaXRfY2hvbmsucG5nJywge2ZyYW1lV2lkdGg6IDU2LCBmcmFtZUhlaWdodDogNTZ9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCdidWxsZXQnLCAnYnVsbGV0LnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndGlsZXNldCcsXHJcbiAgICAgICAgICAgICd0aWxlc2V0LnBuZycsXHJcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcnRvcHMnLFxyXG4gICAgICAgICAgICAndG93ZXJ0b3AucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJtaWRzJyxcclxuICAgICAgICAgICAgJ3Rvd2VybWlkLnBuZycsXHJcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VyYmFzZXMnLFxyXG4gICAgICAgICAgICAndG93ZXJiYXNlLnBuZycsXHJcbiAgICAgICAgICAgIHtmcmFtZVdpZHRoOiA2NCwgZnJhbWVIZWlnaHQ6IDY0fVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3BhcnRpY2xlX3JlZCcsICdwYXJ0aWNsZV9yZWQucG5nJyk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9ydGFsRnJvbScsICdwb3J0YWxfZnJvbS5wbmcnLCB7ZnJhbWVXaWR0aDogNDAsIGZyYW1lSGVpZ2h0OiA0MH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgncG9ydGFsVG8nLCAncG9ydGFsX3RvLnBuZycsIHtmcmFtZVdpZHRoOiA0MCwgZnJhbWVIZWlnaHQ6IDQwfSk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbyhcIm1haW5fbXVzaWNcIiwgXCJnYW1lamFtX0xENDgub2dnXCIpO1xyXG4gICAgICAgIHRoaXMubG9hZC5hdWRpbygnYnVpbGRfc291bmQnLCAnYnVpbGQud2F2Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQW5pbWF0aW9ucygpIHsgLy8gVE9ETzogTWFrZSB0aGlzIG5vdCBkdW1iIGFuZCB1Z2x5XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICd3ZWFrRW5lbXlfd2FsaycsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnd2Vha0VuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnZmFzdEVuZW15X3dhbGsnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2Zhc3RFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2ZhdEVuZW15X3dhbGsnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ2ZhdEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDl9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnc3BsaXR0ZXJGYXRFbmVteV93YWxrJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdzcGxpdHRlckZhdEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDl9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnYXJtb3VyZWRFbmVteV93YWxrJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdhcm1vdXJlZEVuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnc3BsaXR0ZXJCaWdFbmVteV93YWxrJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdzcGxpdHRlckJpZ0VuZW15Jywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnc3BsaXR0ZXJTbWFsbEVuZW15X3dhbGsnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3NwbGl0dGVyU21hbGxFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3BvcnRhbEZyb21fc3BpbicsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygncG9ydGFsRnJvbScsIHtzdGFydDogMCwgZW5kOiA3fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3BvcnRhbFRvX3NwaW4nLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BvcnRhbFRvJywge3N0YXJ0OiAwLCBlbmQ6IDd9KSxcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMCxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAndG93ZXJNaWRzX3NwaW4nLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3Rvd2VybWlkcycsIHtzdGFydDogMCwgZW5kOiAxfSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogNSxcclxuICAgICAgICAgICAgcmVwZWF0OiAtMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdGl2ZVNjZW5lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhcmVudFNjZW5lc1RvUm9vdCgpIHtcclxuICAgICAgICBsZXQgcGFyZW50U2NlbmVzOiBURFNjZW5lW10gPSBbXVxyXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0QWN0aXZlU2NlbmUoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHNjZW5lPy5zY2VuZVBhcmVudEtleSkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHNjZW5lLnNjZW5lUGFyZW50S2V5KVxyXG4gICAgICAgICAgICBwYXJlbnRTY2VuZXMucHVzaChwYXJlbnQpO1xyXG4gICAgICAgICAgICBzY2VuZSA9IHBhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYXJlbnRTY2VuZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vdFREU2NlbmUoKSB7XHJcbiAgICAgICAgbGV0IHNjZW5lID0gdGhpcy5nZXRBY3RpdmVTY2VuZSgpO1xyXG5cclxuICAgICAgICB3aGlsZSAoc2NlbmU/LnNjZW5lUGFyZW50S2V5KSB7XHJcbiAgICAgICAgICAgIHNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHNjZW5lLnNjZW5lUGFyZW50S2V5KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHNjZW5lXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBlbmVtIGZyb20gXCIuLi9lbmVteVwiO1xyXG5pbXBvcnQge1Rvd2VyfSBmcm9tIFwiLi4vdG93ZXJzXCI7XHJcbmltcG9ydCB7QnVsbGV0fSBmcm9tIFwiLi4vYnVsbGV0XCI7XHJcbmltcG9ydCB7V2F2ZU1hbmFnZXJ9IGZyb20gXCIuLi93YXZlc1wiXHJcbmltcG9ydCB7VG93ZXJNYW5hZ2VyfSBmcm9tIFwiLi4vdG93ZXJNYW5hZ2VyXCJcclxuaW1wb3J0IHtNQVhfSEVJR0hULCBNQVhfV0lEVEgsIFRlcnJhaW4sIFRJTEVfU0laRX0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcclxuaW1wb3J0IHtURFNjZW5lQ29uZmlnfSBmcm9tIFwiLi90ZFNjZW5lQ29uZmlnXCI7XHJcbmltcG9ydCB7TWV0YVNjZW5lfSBmcm9tIFwiLi9tZXRhU2NlbmVcIjtcclxuaW1wb3J0IHtIVURfV0lEVEh9IGZyb20gXCIuL2h1ZFNjZW5lXCI7XHJcbmltcG9ydCB7VVVJRH0gZnJvbSBcIi4uL3V0aWxzL2d1aWRcIjtcclxuaW1wb3J0IHtIZWFsdGhCYXJ9IGZyb20gXCIuLi9oZWFsdGhCYXJcIjtcclxuaW1wb3J0IHtQbGF5ZXJJbmZvfSBmcm9tIFwiLi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQge0VORU1ZX0NPTkZJR1N9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTQ0VORV9UUkFOU0lUSU9OX01TID0gNTAwXHJcbmV4cG9ydCBjb25zdCBURF9TQ0VORV9XSURUSCA9IE1BWF9XSURUSCAqIFRJTEVfU0laRVxyXG5leHBvcnQgY29uc3QgVERfU0NFTkVfSEVJR0hUID0gTUFYX0hFSUdIVCAqIFRJTEVfU0laRVxyXG5cclxuZXhwb3J0IGNsYXNzIFREU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcGF0aDogUGhhc2VyLkN1cnZlcy5QYXRoXHJcbiAgICBhbGxFbmVtaWVzOiB7IFtrZXk6IHN0cmluZ106IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cCB9ID0ge31cclxuICAgIG5leHRFbmVteTogbnVtYmVyID0gMFxyXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmVcclxuXHJcbiAgICB0b3dlcnM6IFBoYXNlci5HYW1lT2JqZWN0cy5Hcm91cFxyXG4gICAgYnVsbGV0czogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkdyb3VwXHJcblxyXG4gICAgdGVycmFpbjogVGVycmFpblxyXG5cclxuICAgIHdhdmVNYW5hZ2VyOiBXYXZlTWFuYWdlclxyXG4gICAgdG93ZXJNYW5hZ2VyOiBUb3dlck1hbmFnZXJcclxuXHJcbiAgICBzY2VuZVBhcmVudEtleTogc3RyaW5nO1xyXG4gICAgc2NlbmVMZXZlbDogbnVtYmVyOyAvLyBMZXZlbCBvZiByZWN1cnNpb25cclxuXHJcbiAgICBwcml2YXRlIHRvd2VyUGFyZW50OiBUb3dlciAgLy8gdG8gd2hhdCB0b3dlciBkb2VzIHRoaXMgc2NlbmUgY29ycmVzcG9uZD8gdW5kZWZpbmVkIGZvciByb290XHJcbiAgICBwcml2YXRlIGVuZEhlYWx0aEJhcjogSGVhbHRoQmFyXHJcblxyXG4gICAgLy8gaGFwcGVucyB3aGVuIGFuIGVuZW15IHJlYWNoZXMgdGhlIGVuZFxyXG4gICAgZW5lbXlFbmRDYWxsYmFjazogKG51bWJlcikgPT4gdm9pZFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogVERTY2VuZUNvbmZpZywgbWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICBrZXk6IGNvbmZpZy5zY2VuZUtleSwgLy9gdGRTY2VuZSR7VVVJRC51dWlkdjQoKX1gLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRlcnJhaW4gPSBjb25maWcudGVycmFpbjtcclxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2VuZUxldmVsID0gY29uZmlnLnNjZW5lTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5zY2VuZVBhcmVudEtleSA9IGNvbmZpZy5zY2VuZVBhcmVudEtleTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIC8vIHRoaXMgZ3JhcGhpY3MgZWxlbWVudCBpcyBvbmx5IGZvciB2aXN1YWxpemF0aW9uLFxyXG4gICAgICAgIC8vIGl0cyBub3QgcmVsYXRlZCB0byBvdXIgcGF0aFxyXG4gICAgICAgIHZhciBncmFwaGljcyA9IHRoaXMuYWRkLmdyYXBoaWNzKCk7XHJcblxyXG4gICAgICAgIHRoaXMudGVycmFpbi5jcmVhdGUodGhpcylcclxuICAgICAgICB0aGlzLnRlcnJhaW4uZHJhdyhncmFwaGljcylcclxuXHJcbiAgICAgICAgLy8gdGhlIHBhdGggZm9yIG91ciBlbmVtaWVzXHJcbiAgICAgICAgLy8gcGFyYW1ldGVycyBhcmUgdGhlIHN0YXJ0IHggYW5kIHkgb2Ygb3VyIHBhdGhcclxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyID0gbmV3IFdhdmVNYW5hZ2VyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG93ZXJNYW5hZ2VyID0gbmV3IFRvd2VyTWFuYWdlcih0aGlzKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgRU5FTVlfQ09ORklHUykge1xyXG4gICAgICAgICAgICB0aGlzLmFsbEVuZW1pZXNbZW5lbXkubmFtZV0gPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IGVuZW15LmNsYXNzLCBydW5DaGlsZFVwZGF0ZTogdHJ1ZX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3dlcnMgPSB0aGlzLmFkZC5ncm91cCh7Y2xhc3NUeXBlOiBUb3dlciwgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCB0aGlzLm9uQ2xpY2ssIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1bGxldHMgPSB0aGlzLnBoeXNpY3MuYWRkLmdyb3VwKHtjbGFzc1R5cGU6IEJ1bGxldCwgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcclxuICAgICAgICBmb3IgKGxldCBlTmFtZSBpbiB0aGlzLmFsbEVuZW1pZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5waHlzaWNzLmFkZC5vdmVybGFwKHRoaXMuYWxsRW5lbWllc1tlTmFtZV0sIHRoaXMuYnVsbGV0cywgdGhpcy5kYW1hZ2VFbmVteSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyID0gbmV3IFdhdmVNYW5hZ2VyKHRoaXMpO1xyXG5cclxuICAgICAgICBjb25zdCBjYW0gPSB0aGlzLmNhbWVyYXMubWFpblxyXG4gICAgICAgIGNhbS5zY3JvbGxYID0gLUhVRF9XSURUSFxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9ubHkgZm9yZWdyb3VuZCBzY2VuZSBoYXMgaW5wdXQgZW5hYmxlZCAmIGlzIHZpc2libGU7IGFsbCBzY2VuZXMgYXJlIGJlaW5nIHVwZGF0ZWRcclxuICAgIHB1YmxpYyBzZXRJc0ZvcmVncm91bmQoaXNGb3JlZ3JvdW5kU2NlbmUsIGdvaW5nSW5zaWRlOiBib29sZWFuLCBpID0gbnVsbCwgaiA9IG51bGwpIHtcclxuICAgICAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSBpc0ZvcmVncm91bmRTY2VuZTtcclxuXHJcbiAgICAgICAgaWYgKCFpc0ZvcmVncm91bmRTY2VuZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZhZGVPdXQoZ29pbmdJbnNpZGUsIGksIGopXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlSW4oZ29pbmdJbnNpZGUsIGksIGopXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYWRlSW4oZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGksIGopIHtcclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5wYW4odGhpcy50ZXJyYWluLncgKiBUSUxFX1NJWkUgLyAyLCB0aGlzLnRlcnJhaW4uaCAqIFRJTEVfU0laRSAvIDIsIDEpXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uc2V0Wm9vbSgoZ29pbmdJbnNpZGUgPyAxIC8gMyA6IDMpKVxyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlSW4oU0NFTkVfVFJBTlNJVElPTl9NUywgMCwgMCwgMClcclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMSwgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFkZU91dChnb2luZ0luc2lkZTogYm9vbGVhbiwgaSwgaikge1xyXG4gICAgICAgIC8vIFRha2UgYSBzY3JlZW5zaG90XHJcbiAgICAgICAgdGhpcy5nYW1lLnJlbmRlcmVyLnNuYXBzaG90QXJlYShcclxuICAgICAgICAgICAgLXRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgsXHJcbiAgICAgICAgICAgIC10aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZLFxyXG4gICAgICAgICAgICBURF9TQ0VORV9XSURUSCxcclxuICAgICAgICAgICAgVERfU0NFTkVfSEVJR0hULFxyXG4gICAgICAgICAgICAoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNuYXBLZXkgPSBgc25hcC0ke3RoaXMuc2NlbmUua2V5fWBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzLmV4aXN0cyhzbmFwS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMucmVtb3ZlKHNuYXBLZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlcy5hZGRJbWFnZShzbmFwS2V5LCBpbWFnZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnaW5nOiBzaG93IHRoZSBzY3JlZW5zaG90XHJcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltYWdlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5mYWRlT3V0KFNDRU5FX1RSQU5TSVRJT05fTVMsIDAsIDAsIDApXHJcbiAgICAgICAgaWYgKGdvaW5nSW5zaWRlKSB7XHJcbiAgICAgICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLnRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcclxuICAgICAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDMsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnBhbih4LCB5LCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygxIC8gMywgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGFtYWdlRW5lbXkoZW5lbXksIGJ1bGxldCkge1xyXG4gICAgICAgIC8vIG9ubHkgaWYgYm90aCBlbmVteSBhbmQgYnVsbGV0IGFyZSBhbGl2ZVxyXG4gICAgICAgIGlmIChlbmVteS5hY3RpdmUgPT09IHRydWUgJiYgYnVsbGV0LmFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAvLyB3ZSByZW1vdmUgdGhlIGJ1bGxldCByaWdodCBhd2F5XHJcbiAgICAgICAgICAgIGJ1bGxldC5oaXQoKVxyXG5cclxuICAgICAgICAgICAgLy8gZGVjcmVhc2UgdGhlIGVuZW15IGhwIHdpdGggYnVsbGV0IGRhbWFnZVxyXG4gICAgICAgICAgICBlbmVteS5yZWNlaXZlRGFtYWdlKGJ1bGxldC5kYW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmcmFtZU51bWJlciA9IDA7XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVOdW1iZXIrKztcclxuICAgICAgICB0aGlzLndhdmVNYW5hZ2VyLnVwZGF0ZShkZWx0YSlcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVOdW1iZXIgJSA2MCA9PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBVcGRhdGUgdGg6ICR7dGhpcy5zY2VuZS5rZXl9IGU6ICR7dGhpcy5pbnB1dC5lbmFibGVkfSB8IGw6ICR7dGhpcy5zY2VuZUxldmVsfSB8IHA6ICR7dGhpcy5zY2VuZVBhcmVudD8uc2NlbmUua2V5fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVuZEhlYWx0aEJhcikge1xyXG4gICAgICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5oZWFsdGggPSB0aGlzLnRvd2VyUGFyZW50LmhlYWx0aEJhci5oZWFsdGhcclxuICAgICAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRCdWxsZXQoeCwgeSwgYW5nbGUsIGRhbWFnZSwgcmFuZ2UsIGJ1bGxldFNwZWVkTW9kKSB7XHJcbiAgICAgICAgdmFyIGJ1bGxldCA9IHRoaXMuYnVsbGV0cy5nZXQoKTtcclxuICAgICAgICBpZiAoYnVsbGV0KSB7XHJcbiAgICAgICAgICAgIGJ1bGxldC5maXJlKHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHJhbmdlLCBidWxsZXRTcGVlZE1vZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvR3JpZFBvcyh4LCB5KSB7XHJcbiAgICAgICAgbGV0IGkgPSBNYXRoLmZsb29yKCh4ICsgdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWCkgLyBUSUxFX1NJWkUpO1xyXG4gICAgICAgIGxldCBqID0gTWF0aC5mbG9vcigoeSArIHRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFkpIC8gVElMRV9TSVpFKTtcclxuICAgICAgICByZXR1cm4gW2ksIGpdXHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhwb2ludGVyOiBQaGFzZXIuSW5wdXQuUG9pbnRlcikge1xyXG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhgb25jbGljayBvbiBzY2VuZSAke3RoaXMuc2NlbmUua2V5fWApXHJcbiAgICAgICAgY29uc3QgW2ksIGpdID0gdGhpcy50b0dyaWRQb3MocG9pbnRlci54LCBwb2ludGVyLnkpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYGNsaWNrZWQgY29vcmRpbmF0ZXM6ICR7aX0gJHtqfWApXHJcbiAgICAgICAgbGV0IHBvdGVudGlhbEV4aXN0aW5nVG93ZXIgPSB0aGlzLnRlcnJhaW4udHJ5R2V0RXhpc3RpbmdUb3dlcihpLCBqKTtcclxuICAgICAgICBpZiAocG90ZW50aWFsRXhpc3RpbmdUb3dlcikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB0byBhbiBleGlzdGluZyB0b3dlclwiKVxyXG4gICAgICAgICAgICB0aGlzLm1ldGFTY2VuZS5zd2l0Y2hUb1NjZW5lKHBvdGVudGlhbEV4aXN0aW5nVG93ZXIuZ2V0SW5uZXJUb3dlclNjZW5lS2V5KCksIHRydWUsIGksIGopXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLnRlcnJhaW4ucGF0aFRpbGVzW3RoaXMudGVycmFpbi5wYXRoVGlsZXMubGVuZ3RoIC0gMV1cclxuICAgICAgICBpZiAoaSA9PT0gZW5kWzBdICYmIGogPT09IGVuZFsxXSAmJiB0aGlzLnNjZW5lUGFyZW50S2V5KSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3dpdGNoaW5nIHZpYSBlbmRcIilcclxuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuc3dpdGNoVG9TY2VuZSh0aGlzLnNjZW5lUGFyZW50S2V5LCBmYWxzZSwgaSwgailcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmVteVJlYWNoZWRFbmQoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmVuZW15RW5kQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvd2VyUGFyZW50KHBhcmVudDogVG93ZXIpIHtcclxuICAgICAgICB0aGlzLnRvd2VyUGFyZW50ID0gcGFyZW50XHJcbiAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIgPSBuZXcgSGVhbHRoQmFyKHRoaXMpXHJcblxyXG4gICAgICAgIGxldCBbaSwgal0gPSB0aGlzLnRlcnJhaW4ucGF0aFRpbGVzW3RoaXMudGVycmFpbi5wYXRoVGlsZXMubGVuZ3RoIC0gMV1cclxuICAgICAgICBsZXQgW3gsIHldID0gdGhpcy50ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXHJcblxyXG4gICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLm1ha2UoeCwgeSwgVElMRV9TSVpFIC0gMTQsIDAuNSlcclxuICAgICAgICB0aGlzLmFkZC5jb250YWluZXIoMCwgMCwgdGhpcy5lbmRIZWFsdGhCYXIpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG93ZXJQYXJlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJQYXJlbnRcclxuICAgIH1cclxufSIsImltcG9ydCB7IFRlcnJhaW4gfSBmcm9tIFwiLi4vdGVycmFpblwiO1xyXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vdGRTY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFREU2NlbmVDb25maWcge1xyXG4gICAgdGVycmFpbjogVGVycmFpbjtcclxuICAgIHNjZW5lTGV2ZWw6IG51bWJlcjsgLy8gTGV2ZWwgb2YgcmVjdXJzaW9uIFxyXG4gICAgc2NlbmVQYXJlbnRLZXk6IHN0cmluZztcclxuICAgIHNjZW5lS2V5OiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXJyYWluOiBUZXJyYWluLCBzY2VuZUxldmVsOiBudW1iZXIsIHNjZW5lUGFyZW50S2V5OiBzdHJpbmcsIHNjZW5lS2V5OiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMudGVycmFpbiA9IHRlcnJhaW47XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVMZXZlbCA9IHNjZW5lTGV2ZWw7XHJcbiAgICAgICAgdGhpcy5zY2VuZVBhcmVudEtleSA9IHNjZW5lUGFyZW50S2V5O1xyXG4gICAgICAgIHRoaXMuc2NlbmVLZXkgPSBzY2VuZUtleVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIlxyXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuL3Rvd2Vyc1wiXHJcblxyXG5leHBvcnQgZW51bSBUaWxlVHlwZSB7XHJcbiAgICBTdGFydCwgUGF0aCwgRW5kLCBPY2N1cGllZCwgQnVpbGRhYmxlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUSUxFX1NJWkUgPSA2NFxyXG5leHBvcnQgY29uc3QgTEVWRUxfT0ZGU0VUID0gMTUgKiBUSUxFX1NJWkVcclxuZXhwb3J0IGNvbnN0IE1BWF9XSURUSCA9IDEwXHJcbmV4cG9ydCBjb25zdCBNQVhfSEVJR0hUID0gOFxyXG5cclxuY29uc3QgTl9USUxFU0VUX1NQUklURVMgPSAxMCAgLy8gaG93IG1hbnkgc3ByaXRlcyBhcmUgaW4gdGhlIHRpbGVzZXQ/XHJcblxyXG50eXBlIEdyaWRQb3MgPSBbaW50ZWdlciwgaW50ZWdlcl1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXJyYWluIHtcclxuICAgIHRvd2VyczogVG93ZXJbXVtdXHJcbiAgICB0aWxlczogVGlsZVR5cGVbXVtdXHJcblxyXG4gICAgdGlsZVNwcml0ZXM6IGludGVnZXJbXVtdXHJcblxyXG4gICAgcGF0aDogUGhhc2VyLkN1cnZlcy5QYXRoICAvLyBUaGUgUGhhc2VyIHBhdGggKGZvciBlbmVteSBtb3ZlbWVudClcclxuICAgIHBhdGhUaWxlczogR3JpZFBvc1tdICAvLyBUaGUgc2VxdWVuY2Ugb2YgdGlsZXMgbWFraW5nIHVwIHRoZSBwYXRoXHJcblxyXG4gICAgdGludDogaW50ZWdlciAvLyBjb2xvciBhcyBhIDI0LWJpdCBpbnRcclxuXHJcbiAgICB3OiBudW1iZXJcclxuICAgIGg6IG51bWJlclxyXG5cclxuICAgIHBvcnRhbEZyb206IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcclxuICAgIHBvcnRhbFRvOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcblxyXG4gICAgLy8gdG9kbzogZ2VuZXJhdGUvbG9hZCB0ZXJyYWluXHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aDogaW50ZWdlciwgaGVpZ2h0OiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgdGhpcy53ID0gd2lkdGhcclxuICAgICAgICB0aGlzLmggPSBoZWlnaHRcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUoc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlKClcclxuICAgICAgICB0aGlzLnNldHVwU3ByaXRlcyhzY2VuZSlcclxuXHJcbiAgICAgICAgdGhpcy50b3dlcnMgPSBpbml0MkRBcnJheTxUb3dlcj4odGhpcy53LCB0aGlzLmgsIG51bGwpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBTcHJpdGVzKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy50aWxlU3ByaXRlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpXVtqXSA9IHJhbmRvbUZyZWVTcHJpdGUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBnZXREaXIgPSAocGk6IGludGVnZXIpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYXRoVGlsZXMsIHBpKVxyXG4gICAgICAgICAgICBsZXQgW2kxLCBqMV0gPSB0aGlzLnBhdGhUaWxlc1twaV1cclxuICAgICAgICAgICAgbGV0IFtpMiwgajJdID0gdGhpcy5wYXRoVGlsZXNbcGkgKyAxXVxyXG5cclxuICAgICAgICAgICAgbGV0IFtkaSwgZGpdID0gW2kyIC0gaTEsIGoyIC0gajFdXHJcbiAgICAgICAgICAgIGlmIChkaSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRqID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImdldERpciBmYWlsZWRcIilcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBpID0gMDsgcGkgPCB0aGlzLnBhdGhUaWxlcy5sZW5ndGg7IHBpKyspIHtcclxuICAgICAgICAgICAgbGV0IFtpMSwgajFdID0gdGhpcy5wYXRoVGlsZXNbcGldXHJcblxyXG4gICAgICAgICAgICBpZiAocGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gNlxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBpID09IHRoaXMucGF0aFRpbGVzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDdcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkMSA9IChnZXREaXIocGkgLSAxKSArIDIpICUgNFxyXG4gICAgICAgICAgICAgICAgbGV0IGQyID0gZ2V0RGlyKHBpKVxyXG4gICAgICAgICAgICAgICAgaWYgKGQxID4gZDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBbZDEsIGQyXSA9IFtkMiwgZDFdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBPcmRlciBvZiBzcHJpdGVzICgwMiBtZWFuaW5nIGQxPTAsIGQyPTIpOlxyXG4gICAgICAgICAgICAgICAgLy8gMDEgMDIgMDMgMTIgMTMgMjNcclxuICAgICAgICAgICAgICAgIGlmIChkMSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgLSAxXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSBkMiArIDFcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZDEgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDUgLy8gb25seSAyMyBsZWZ0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGludCA9IFBoYXNlci5EaXNwbGF5LkNvbG9yLkdldENvbG9yKFxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcclxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnc7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmZyb21HcmlkUG9zKGksIGopXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzcHJpdGUgPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksICd0aWxlc2V0JywgdGhpcy50aWxlU3ByaXRlc1tpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5CdWlsZGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc2V0VGludCh0aGlzLnRpbnQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5TdGFydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsRnJvbSA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgXCJwb3J0YWxGcm9tXCIsIDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aWxlc1tpXVtqXSA9PSBUaWxlVHlwZS5FbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFRvID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCBcInBvcnRhbFRvXCIsIDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKSB7XHJcbiAgICAgICAgLy8gdGhpcy5kcmF3R3JpZChncmFwaGljcylcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDMsIDB4ZmZmZmZmLCAxKTtcclxuICAgICAgICAvLyB2aXN1YWxpemUgdGhlIHBhdGhcclxuICAgICAgICB0aGlzLnBhdGguZHJhdyhncmFwaGljcyk7XHJcblxyXG4gICAgICAgIHRoaXMucG9ydGFsRnJvbS5hbmltcy5wbGF5KHtcclxuICAgICAgICAgICAga2V5OiBcInBvcnRhbEZyb21fc3BpblwiLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wb3J0YWxUby5hbmltcy5wbGF5KHtcclxuICAgICAgICAgICAga2V5OiBcInBvcnRhbFRvX3NwaW5cIixcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdHcmlkKGdyYXBoaWNzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JhcGhpY3MpIHtcclxuICAgICAgICBncmFwaGljcy5saW5lU3R5bGUoMSwgMHgwMDAwZmYsIDAuOCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuaDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbygwLCBpICogVElMRV9TSVpFKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKFRJTEVfU0laRSAqIDEwLCBpICogVElMRV9TSVpFKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gdGhpcy53OyBqKyspIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKGogKiBUSUxFX1NJWkUsIDApO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oaiAqIFRJTEVfU0laRSwgVElMRV9TSVpFICogOCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZVBhdGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuUGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5Cb3VuZHMoaSwgaikgJiYgdGhpcy50aWxlc1tpXVtqXSA9PT0gVGlsZVR5cGUuQnVpbGRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cnlHZXRFeGlzdGluZ1Rvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcclxuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG93ZXJzW2ldW2pdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwbGFjZVRvd2VyKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHRvd2VyOiBUb3dlcikge1xyXG4gICAgICAgIGlmIChpIDwgMCB8fCBqIDwgMCB8fCBpID49IHRoaXMudyB8fCBqID49IHRoaXMuaCkgcmV0dXJuIG51bGxcclxuXHJcbiAgICAgICAgdGhpcy50aWxlc1tpXVtqXSA9IFRpbGVUeXBlLk9jY3VwaWVkO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXSA9IHRvd2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2VuZXJhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdXHJcblxyXG4gICAgICAgIGxldCBlZGdlczogR3JpZFBvc1tdID0gW11cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMudyAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFtpLCAwXSlcclxuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgdGhpcy5oIC0gMV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgdGhpcy5oIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goWzAsIGpdKVxyXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFt0aGlzLncgLSAxLCBqXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdWNjZXNzID0gZmFsc2VcclxuXHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxyXG4gICAgICAgIHdoaWxlICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgICBsZXQgZnJvbSA9IHJhbmRvbUl0ZW0oZWRnZXMpXHJcbiAgICAgICAgICAgIGxldCB0bztcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgdG8gPSByYW5kb21JdGVtKGVkZ2VzKVxyXG4gICAgICAgICAgICB9IHdoaWxlICh0byA9PSBmcm9tKVxyXG5cclxuICAgICAgICAgICAgcGF0aCA9IHRoaXMucmFuZG9tV2Fsayhmcm9tLCB0bylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1pbkxlbmd0aCA9IDI1XHJcbiAgICAgICAgICAgIGlmIChwYXRoICE9PSBudWxsICYmIHBhdGgubGVuZ3RoID49IG1pbkxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdHRlbXB0cysrXHJcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA9PSA0MDApIGJyZWFrXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdlbmVyYXRlZCBpblwiLCBhdHRlbXB0cywgXCJhdHRlbXB0c1wiKVxyXG5cclxuICAgICAgICB0aGlzLnRpbGVzID0gaW5pdDJEQXJyYXkodGhpcy53LCB0aGlzLmgsIFRpbGVUeXBlLkJ1aWxkYWJsZSlcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBbeCwgeV0gPSB0aGlzLmZyb21HcmlkUG9zKHBhdGhbaV1bMF0sIHBhdGhbaV1bMV0pXHJcbiAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGFsdGVuYXRpdmVseTogdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCguLi4pXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBhdGggPSBzY2VuZS5hZGQucGF0aCh4LCB5KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXRoID0gbmV3IFBoYXNlci5DdXJ2ZXMuUGF0aCh4LCB5KVxyXG4gICAgICAgICAgICAgICAgLy8gc2NlbmUuYWRkT2JqZWN0KHRoaXMucGF0aClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aC5saW5lVG8oeCwgeSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHNldFRvID0gVGlsZVR5cGUuUGF0aFxyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUbyA9IFRpbGVUeXBlLlN0YXJ0XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PSBwYXRoLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIHNldFRvID0gVGlsZVR5cGUuRW5kXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudGlsZXNbcGF0aFtpXVswXV1bcGF0aFtpXVsxXV0gPSBzZXRUb1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgdGVycmFpbi5cIilcclxuXHJcbiAgICAgICAgdGhpcy5wYXRoVGlsZXMgPSBwYXRoXHJcbiAgICAgICAgcmV0dXJuIHBhdGgubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5kb21XYWxrKGZyb206IEdyaWRQb3MsIHRvOiBHcmlkUG9zKTogQXJyYXk8R3JpZFBvcz4ge1xyXG4gICAgICAgIGxldCBwYXRoID0gW11cclxuICAgICAgICBsZXQgc2VlbiA9IG5ldyBTZXQoKVxyXG5cclxuICAgICAgICBjb25zdCBhZGRUb1BhdGggPSAocG9zOiBHcmlkUG9zKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFubmVkIG9mIHRoaXMubmVpZ2hib3JzKHBhdGhbcGF0aC5sZW5ndGggLSAxXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWVuLmFkZChiYW5uZWQudG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwYXRoLnB1c2gocG9zKVxyXG4gICAgICAgICAgICBzZWVuLmFkZChwb3MudG9TdHJpbmcoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFRvUGF0aChmcm9tKVxyXG5cclxuICAgICAgICBsZXQgc3RlcHMgPSAwXHJcbiAgICAgICAgd2hpbGUgKHBhdGhbcGF0aC5sZW5ndGggLSAxXSAhPSB0bykge1xyXG4gICAgICAgICAgICBzdGVwcysrXHJcbiAgICAgICAgICAgIGlmIChzdGVwcyA9PSAxMDApIGJyZWFrXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV1cclxuXHJcbiAgICAgICAgICAgIGlmIChwb3MudG9TdHJpbmcoKSA9PT0gdG8udG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGggIC8vIFN1Y2Nlc3MhXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBjYW5kcyA9IHRoaXMubmVpZ2hib3JzKHBvcylcclxuICAgICAgICAgICAgY2FuZHMgPSBjYW5kcy5maWx0ZXIocCA9PiAhc2Vlbi5oYXMocC50b1N0cmluZygpKSlcclxuXHJcbiAgICAgICAgICAgIGlmIChjYW5kcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsICAvLyBGYWlsIVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBuZXh0ID0gcmFuZG9tSXRlbShjYW5kcylcclxuICAgICAgICAgICAgYWRkVG9QYXRoKG5leHQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGF0aFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmVpZ2hib3JzKHBvczogR3JpZFBvcywgcGFkID0gMCkge1xyXG4gICAgICAgIGxldCByZXMgPSBbXHJcbiAgICAgICAgICAgIFtwb3NbMF0gKyAxLCBwb3NbMV1dLFxyXG4gICAgICAgICAgICBbcG9zWzBdIC0gMSwgcG9zWzFdXSxcclxuICAgICAgICAgICAgW3Bvc1swXSwgcG9zWzFdICsgMV0sXHJcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSAtIDFdLFxyXG4gICAgICAgIF1cclxuICAgICAgICByZXMgPSByZXMuZmlsdGVyKHAgPT4gdGhpcy5pbkJvdW5kcyhwWzBdLCBwWzFdKSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc1xyXG4gICAgfVxyXG5cclxuICAgIGZyb21HcmlkUG9zKGk6IGludGVnZXIsIGo6IGludGVnZXIpIHtcclxuICAgICAgICByZXR1cm4gWyhpICsgMC41KSAqIFRJTEVfU0laRSwgKGogKyAwLjUpICogVElMRV9TSVpFXVxyXG4gICAgfVxyXG5cclxuICAgIGluQm91bmRzKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHBhZCA9IDApIHtcclxuICAgICAgICByZXR1cm4gKGkgPj0gcGFkXHJcbiAgICAgICAgICAgICYmIGkgPCB0aGlzLncgLSBwYWRcclxuICAgICAgICAgICAgJiYgaiA+PSBwYWRcclxuICAgICAgICAgICAgJiYgaiA8IHRoaXMuaCAtIHBhZClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tSXRlbShhcnJheSkge1xyXG4gICAgcmV0dXJuIGFycmF5W01hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogYXJyYXkubGVuZ3RoKV1cclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tRnJlZVNwcml0ZSgpIHtcclxuICAgIGNvbnN0IG5TcGVjaWFsU3ByaXRlcyA9IDhcclxuICAgIHJldHVybiBuU3BlY2lhbFNwcml0ZXMgKyBNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIChOX1RJTEVTRVRfU1BSSVRFUyAtIG5TcGVjaWFsU3ByaXRlcykpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXQyREFycmF5PFRWYWw+KGRpbTEsIGRpbTIsIHZhbHVlOiBUVmFsKTogVFZhbFtdW10ge1xyXG4gICAgcmV0dXJuIG5ldyBBcnJheShkaW0xKVxyXG4gICAgICAgIC5maWxsKGZhbHNlKVxyXG4gICAgICAgIC5tYXAoKCkgPT4gbmV3IEFycmF5KGRpbTIpXHJcbiAgICAgICAgICAgIC5maWxsKHZhbHVlKSk7XHJcbn0iLCJpbXBvcnQgKiBhcyBjZmcgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG5pbXBvcnQgKiBhcyB0b3dlcnMgZnJvbSBcIi4vdG93ZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG93ZXJNYW5hZ2VyIHtcclxuICAgIHNjZW5lOiBURFNjZW5lXHJcbiAgICB0b3dlclR5cGVzOiB7IFtrZXk6c3RyaW5nXTogYW55fSA9IHtcclxuICAgICAgICAnQmFzaWMnOiBbdG93ZXJzLkJhc2ljVHVycmV0LCBjZmcuQmFzaWNdLFxyXG4gICAgICAgICdNdWx0aXNob3QnOiBbdG93ZXJzLk11bHRpc2hvdFR1cnJldCwgY2ZnLk11bHRpc2hvdF0sXHJcbiAgICAgICAgJ1NuaXBlcic6IFt0b3dlcnMuU25pcGVyVHVycmV0LCBjZmcuU25pcGVyXSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxhY2VUb3dlcihwb2ludGVyLCB0b3dlclR5cGUpIHtcclxuICAgICAgICBjb25zdCBbaSwgal0gPSB0aGlzLnNjZW5lLnRvR3JpZFBvcyhwb2ludGVyLngsIHBvaW50ZXIueSlcclxuICAgICAgICBpZiAodGhpcy5zY2VuZS50ZXJyYWluLmNhblBsYWNlVG93ZXIoaSwgaikpIHtcclxuICAgICAgICAgICAgdmFyIHRvd2VyOiB0b3dlcnMuVG93ZXIgPSB0aGlzLnNjZW5lLnRvd2Vycy5nZXQoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuc2NlbmUubWV0YVNjZW5lLmFkZFNjZW5lKHRoaXMuc2NlbmUuc2NlbmUua2V5KVxyXG4gICAgICAgICAgICBpZiAodG93ZXIpIHtcclxuICAgICAgICAgICAgICAgIHRvd2VyLm1ha2UoaSwgaiwgbmV3U2NlbmUuc2NlbmUua2V5LCB0aGlzLnRvd2VyVHlwZXNbdG93ZXJUeXBlXVsxXSwgdGhpcy50b3dlclR5cGVzW3Rvd2VyVHlwZV1bMF0pO1xyXG4gICAgICAgICAgICAgICAgUGxheWVySW5mby5tb25leSAtPSB0b3dlci5jb25maWcucHJpY2VcclxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldFRvd2VyUGFyZW50KHRvd2VyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gaW1wb3J0IHsgR3JpZFBvc2l0aW9uIH0gZnJvbSBcIi4vdGVycmFpblwiO1xyXG5cclxuaW1wb3J0IHsgREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGLCBUT1dFUl9IRUFMVEhfUkVHRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgSGVhbHRoQmFyIH0gZnJvbSBcIi4vaGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG5pbXBvcnQgeyBUZXJyYWluLCBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7IFRvd2VyQ29uZmlnLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XHJcbmltcG9ydCB7IEh1ZFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2h1ZFNjZW5lXCI7XHJcblxyXG5cclxuLy8gdG9kbzogbW92ZSB0byBzY2VuZT9cclxuZnVuY3Rpb24gZ2V0RW5lbXkoeCwgeSwgcmFuZ2UsIGVuZW1pZXMsIG51bVRvR2V0KTogRW5lbXlCYXNlW10ge1xyXG4gICAgbGV0IG91dEVuZW1pZXM6IEVuZW15QmFzZVtdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgZW5lbXlHcm91cCBpbiBlbmVtaWVzKSB7XHJcbiAgICAgICAgbGV0IGVuZW15VW5pdHMgPSBlbmVtaWVzW2VuZW15R3JvdXBdLmdldENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmVteVVuaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteVVuaXRzW2ldLmFjdGl2ZSAmJiBQaGFzZXIuTWF0aC5EaXN0YW5jZS5CZXR3ZWVuKHgsIHksIGVuZW15VW5pdHNbaV0ueCwgZW5lbXlVbml0c1tpXS55KSA8PSByYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgb3V0RW5lbWllcy5wdXNoKGVuZW15VW5pdHNbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvdXRFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBvdXRFbmVtaWVzLnNvcnQoKGEsIGIpID0+IGIuZm9sbG93ZXIudCAtIGEuZm9sbG93ZXIudClcclxuICAgICAgICBvdXRFbmVtaWVzLmxlbmd0aCA9IE1hdGgubWluKG51bVRvR2V0LCBvdXRFbmVtaWVzLmxlbmd0aClcclxuICAgICAgICByZXR1cm4gb3V0RW5lbWllc1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUb3dlciBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG4gICAgY29uZmlnOiBUb3dlckNvbmZpZ1xyXG4gICAgc3RhdHM6IFRvd2VyQ29uZmlnXHJcblxyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuXHJcbiAgICB0b3dlclR1cnJldDogX1Rvd2VyVHVycmV0XHJcbiAgICB0b3dlck1pZDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxyXG4gICAgdG93ZXJCYXNlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcbiAgICBoZWFsdGhCYXI6IEhlYWx0aEJhclxyXG4gICAgcmFuZ2VJbmRpY2F0b3I6IFBoYXNlci5HYW1lT2JqZWN0cy5TaGFwZVxyXG5cclxuICAgIGxldmVsOiBpbnRlZ2VyXHJcbiAgICBsZXZlbFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcblxyXG4gICAgcHJpdmF0ZSBpbm5lclRvd2VyU2NlbmVLZXk6IHN0cmluZ1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRvd2VyU2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih0b3dlclNjZW5lLCAwLCAwKVxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0b3dlclNjZW5lKVxyXG4gICAgICAgIHRoaXMuc2NlbmUgPSB0b3dlclNjZW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtYWtlKGk6IG51bWJlciwgajogbnVtYmVyLCBpbm5lclRvd2VyU2NlbmVLZXk6IHN0cmluZywgY29uZmlnOiBUb3dlckNvbmZpZywgdG93ZXJDbGFzc05hbWUpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuc3RhdHMgPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldCA9IG5ldyB0b3dlckNsYXNzTmFtZSh0aGlzLnNjZW5lLCB0aGlzLmNvbmZpZywgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgICAgbGV0IHhDb29yZCA9IGkgKiBUSUxFX1NJWkUgKyBUSUxFX1NJWkUgLyAyXHJcbiAgICAgICAgbGV0IHlDb29yZCA9IGogKiBUSUxFX1NJWkUgKyBUSUxFX1NJWkUgLyAyXHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHhDb29yZCwgeUNvb3JkLCAndG93ZXJiYXNlcycsIHRoaXMuY29uZmlnLnNwcml0ZUJhc2UpO1xyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldFRpbnQodGhpcy5jb25maWcudGludEJhc2UpO1xyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMudG93ZXJCYXNlKTtcclxuICAgICAgICB0aGlzLnRvd2VyTWlkID0gdGhpcy5zY2VuZS5hZGQuc3ByaXRlKHhDb29yZCwgeUNvb3JkLCAndG93ZXJtaWRzJywgdGhpcy5jb25maWcuc3ByaXRlTWlkKTtcclxuICAgICAgICB0aGlzLnRvd2VyTWlkLnNldFRpbnQodGhpcy5jb25maWcudGludE1pZCk7XHJcbiAgICAgICAgdGhpcy50b3dlck1pZC5hbmltcy5wbGF5KHtcclxuICAgICAgICAgICAga2V5OiBgdG93ZXJNaWRzX3NwaW5gXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnRvd2VyTWlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvciA9IHRoaXMuc2NlbmUuYWRkLmNpcmNsZShcclxuICAgICAgICAgICAgeENvb3JkLCB5Q29vcmQsIGNvbmZpZy5yYW5nZSgxKSxcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5jb2xvdXIsXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuYWxwaGFcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0U3Ryb2tlU3R5bGUoUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91cik7XHJcbiAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnJhbmdlSW5kaWNhdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy50b3dlckJhc2Uuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICB0aGlzLnRvd2VyQmFzZS5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5saXN0LmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmNvbnN0cnVjdG9yLm5hbWUubWF0Y2goL14uK0VuZW15JC8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5jaGlsZHJlbi5icmluZ1RvVG9wKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZSh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBodWRTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KFwiaHVkU2NlbmVcIikgYXMgSHVkU2NlbmVcclxuICAgICAgICAgICAgaHVkU2NlbmUuc2V0RGVzY3JpcHRpb25Ub3dlcih0aGlzLmNvbmZpZywgdGhpcylcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnRvd2VyQmFzZS5vbigncG9pbnRlcm91dCcsICgpID0+IHsgdGhpcy5yYW5nZUluZGljYXRvci5zZXRWaXNpYmxlKGZhbHNlKSB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC5wbGFjZShpLCBqLCB0aGlzLnNjZW5lLnRlcnJhaW4pO1xyXG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wbGFjZVRvd2VyKGksIGosIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnRvd2VyVHVycmV0KTtcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIubWFrZSh4Q29vcmQsIHlDb29yZCArIFRJTEVfU0laRSAvIDIgLSA4LCBUSUxFX1NJWkUgLSAxNClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmhlYWx0aEJhcilcclxuXHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDFcclxuXHJcbiAgICAgICAgY29uc3QgcGFkID0gM1xyXG4gICAgICAgIHRoaXMubGV2ZWxUZXh0ID0gdGhpcy5zY2VuZS5hZGQudGV4dChcclxuICAgICAgICAgICAgeENvb3JkICsgMTUsIHlDb29yZCAtIDQsIFwiXCIgKyB0aGlzLmxldmVsLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLmxldmVsVGV4dClcclxuXHJcbiAgICAgICAgdGhpcy5pbm5lclRvd2VyU2NlbmVLZXkgPSBpbm5lclRvd2VyU2NlbmVLZXlcclxuXHJcbiAgICAgICAgbGV0IGlubmVyVG93ZXJTY2VuZSA9IHRoaXMuc2NlbmUuc2NlbmUuZ2V0KGlubmVyVG93ZXJTY2VuZUtleSkgYXMgVERTY2VuZVxyXG4gICAgICAgIGlubmVyVG93ZXJTY2VuZS5vbkVuZW15UmVhY2hlZEVuZCgoZGFtYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmhlYWx0aCAtPSBkYW1hZ2UgKiBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUZcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnVwZGF0ZShkZWx0YSlcclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIuaGVhbHRoICs9IFRPV0VSX0hFQUxUSF9SRUdFTiAqIGRlbHRhXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhlYWx0aEJhci5oZWFsdGggPj0gMS4wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhbHRoQmFyLmxldmVsVXAoKTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbCsrXHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxUZXh0LnNldFRleHQoXCJcIiArIHRoaXMubGV2ZWwpXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsIC0gMSkgPCB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZ2VTY2FsZSA9IHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCkgLyB0aGlzLnN0YXRzLnJhbmdlKDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYW5nZUluZGljYXRvci5zZXRTY2FsZShyYW5nZVNjYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oZWFsdGhCYXIudXBkYXRlKGRlbHRhKVxyXG4gICAgfVxyXG5cclxuICAgIGdldElubmVyVG93ZXJTY2VuZUtleSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclRvd2VyU2NlbmVLZXlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFic3RyYWN0IGNsYXNzIF9Ub3dlclR1cnJldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZSB7XHJcbiAgICBuZXh0VGljOiBudW1iZXJcclxuICAgIHg6IG51bWJlclxyXG4gICAgeTogbnVtYmVyXHJcbiAgICBiYXNlWDogbnVtYmVyXHJcbiAgICBiYXNlWTogbnVtYmVyXHJcbiAgICBwYXJlbnQ6IFRvd2VyXHJcblxyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgc3ByaXRlOiBzdHJpbmcsIHRpbnQ6IG51bWJlciwgcGFyZW50OiBUb3dlcikge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwLCAndG93ZXJ0b3BzJywgc3ByaXRlKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICAgICAgICB0aGlzLnNldFRpbnQodGludCk7XHJcbiAgICAgICAgdGhpcy5uZXh0VGljID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB3ZSB3aWxsIHBsYWNlIHRoZSB0b3dlciBhY2NvcmRpbmcgdG8gdGhlIGdyaWRcclxuICAgIHBsYWNlKGk6IGludGVnZXIsIGo6IGludGVnZXIsIHRlcnJhaW46IFRlcnJhaW4pIHtcclxuICAgICAgICBbdGhpcy54LCB0aGlzLnldID0gdGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxyXG4gICAgICAgIHRoaXMuYmFzZVggPSB0aGlzLnhcclxuICAgICAgICB0aGlzLmJhc2VZID0gdGhpcy55XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSgpIHtcclxuICAgICAgICBsZXQgZW5lbWllcyA9IGdldEVuZW15KFxyXG4gICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIDFcclxuICAgICAgICApO1xyXG4gICAgICAgIGlmIChlbmVtaWVzKSB7XHJcbiAgICAgICAgICAgIGxldCBlbmVteSA9IGVuZW1pZXNbMF1cclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgZW5lbXkueCwgZW5lbXkueSk7XHJcbiAgICAgICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkQnVsbGV0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5maXJlQW5pbWF0aW9uKGFuZ2xlLCBkYW1hZ2UpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmaXJlQW5pbWF0aW9uKGFuZ2xlLCBkYW1hZ2UpIHtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gKGFuZ2xlICsgTWF0aC5QSSAvIDIpICogUGhhc2VyLk1hdGguUkFEX1RPX0RFRztcclxuICAgICAgICBsZXQgcmVjb2lsID0gTWF0aC5taW4oZGFtYWdlICogMC41LCAyNSlcclxuICAgICAgICB0aGlzLnggPSB0aGlzLmJhc2VYXHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5iYXNlWVxyXG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XHJcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiBNYXRoLm1pbih0aGlzLnBhcmVudC5jb25maWcuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpICogMC44LCAxMDAgKyBkYW1hZ2UpLFxyXG4gICAgICAgICAgICB4OiB0aGlzLnggKyBNYXRoLmNvcyhhbmdsZSArIE1hdGguUEkpICogcmVjb2lsLFxyXG4gICAgICAgICAgICB5OiB0aGlzLnkgKyBNYXRoLnNpbihhbmdsZSArIE1hdGguUEkpICogcmVjb2lsLFxyXG4gICAgICAgICAgICBlYXNlOiAnUXVhZCcsXHJcbiAgICAgICAgICAgIHlveW86IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmxhc3RUaW1lICs9IGRlbHRhXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0VGljKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcmUoKSlcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpYyA9IHRoaXMubGFzdFRpbWUgKyB0aGlzLnBhcmVudC5zdGF0cy5maXJlcmF0ZSh0aGlzLnBhcmVudC5sZXZlbClcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0VGljID0gdGhpcy5sYXN0VGltZSArIDUwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2ljVHVycmV0IGV4dGVuZHMgX1Rvd2VyVHVycmV0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY29uZmlnLnNwcml0ZVRvcCwgY29uZmlnLnRpbnRUb3AsIHBhcmVudCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlzaG90VHVycmV0IGV4dGVuZHMgX1Rvd2VyVHVycmV0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSwgY29uZmlnLCBwYXJlbnQpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY29uZmlnLnNwcml0ZVRvcCwgY29uZmlnLnRpbnRUb3AsIHBhcmVudCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZpcmUoKSB7ICAvLyB0aGlzIGJlaGF2aW91ciBzaG91bGQgYmUgaW4gX1Rvd2VyVHVycmV0LmZpcmUgYnR3XHJcbiAgICAgICAgbGV0IG51bVRhcmdldHMgPSAzXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnN0YXRzLm51bVRhcmdldHMpIHtcclxuICAgICAgICAgICAgbnVtVGFyZ2V0cyA9IHRoaXMucGFyZW50LnN0YXRzLm51bVRhcmdldHModGhpcy5wYXJlbnQubGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZW5lbWllcyA9IGdldEVuZW15KHRoaXMueCwgdGhpcy55LCB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksIHRoaXMuc2NlbmUuYWxsRW5lbWllcywgbnVtVGFyZ2V0cyk7XHJcblxyXG4gICAgICAgIGlmIChlbmVtaWVzICYmIGVuZW1pZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBlbmVteSBvZiBlbmVtaWVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5nbGUgPSBQaGFzZXIuTWF0aC5BbmdsZS5CZXR3ZWVuKHRoaXMueCwgdGhpcy55LCBlbmVteS54LCBlbmVteS55KTtcclxuICAgICAgICAgICAgICAgIGxldCBkYW1hZ2UgPSB0aGlzLnBhcmVudC5zdGF0cy5kYW1hZ2UodGhpcy5wYXJlbnQubGV2ZWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZEJ1bGxldChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLngsIHRoaXMueSwgYW5nbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGFtYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5idWxsZXRTcGVlZE1vZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNuaXBlclR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVuZW15Q29uZmlnLCBQQVVTRV9BRlRFUl9XQVZFX1RJTUUsIEVORU1ZX0NPTkZJR1MsIFdhdmVDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgRW5lbXlCYXNlIH0gZnJvbSBcIi4vZW5lbXlcIjtcclxuaW1wb3J0IHsgUGxheWVySW5mbyB9IGZyb20gXCIuL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCI7XHJcbi8vIGltcG9ydCB7IEVuZW15LCBGYXRFbmVteX0gZnJvbSBcIi4vZW5lbXlcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2F2ZU1hbmFnZXIge1xyXG4gICAgc2NlbmU6IFREU2NlbmVcclxuICAgIGN1cnJlbnRXYXZlOiBpbnRlZ2VyID0gMFxyXG4gICAgbmV4dEVuZW15OiBpbnRlZ2VyID0gMFxyXG4gICAgZGVhZERhbmdlcjogaW50ZWdlciA9IDBcclxuICAgIHJlbWFpbmluZ0RhbmdlcjogaW50ZWdlciA9IDBcclxuICAgIHdhdmVEaWZmaWN1bHR5OiBpbnRlZ2VyID0gMFxyXG5cclxuICAgIHdhdmVBY3RpdmU6IGJvb2xlYW4gIC8vIGZhbHNlIGZvciBuZXN0ZWQgd2F2ZXNcclxuICAgIG5leHRXYXZlVGltZTogaW50ZWdlciA9IDBcclxuICAgIHJlc3Bhd25RdWV1ZTogW0VuZW15Q29uZmlnLCBpbnRlZ2VyXVtdID0gW107XHJcbiAgICByZXNwYXduSGVhbHRoOiBpbnRlZ2VyICAvLyB6ZXJvIHVubGVzcyByZXNwYXduaW5nIGVuZW15LCBoYWNrXHJcblxyXG4gICAgZW5lbXlJbnRlcnZhbDogaW50ZWdlclxyXG5cclxuICAgIHF1ZXVlZEVuZW15OiBhbnlcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHRoaXMuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgICAgICAgLy8gc2V0IGZhbHNlIGZvciBuZXN0ZWQgYmVoYXZpb3IgaW4gdXBkYXRlKClcclxuICAgICAgICB0aGlzLndhdmVBY3RpdmUgPSAodGhpcy5zY2VuZS5zY2VuZUxldmVsID4gMCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjZW5lLnNjZW5lTGV2ZWwgPT09IDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V2F2ZURpZmZpY3VsdHkoKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDFlOSAvLyBhIGxvdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRXYXZlRGlmZmljdWx0eSgpIHtcclxuICAgICAgICAvL1RPRE86IGFkZCBkaWZmaWN1bHR5IHNjYWxpbmcgYW5kIGJhbGFuY2luZyBmb3Igd2F2ZXNcclxuICAgICAgICB0aGlzLndhdmVEaWZmaWN1bHR5ID0gV2F2ZUNvbmZpZy5vdXRlcldhdmVEYW5nZXIodGhpcy5jdXJyZW50V2F2ZSlcclxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IHRoaXMud2F2ZURpZmZpY3VsdHlcclxuICAgICAgICB0aGlzLmVuZW15SW50ZXJ2YWwgPSBXYXZlQ29uZmlnLm91dGVyRW5lbXlJbnRlcnZhbFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dFdhdmUoKSB7XHJcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXYXZlKys7XHJcbiAgICAgICAgdGhpcy5nZXRXYXZlRGlmZmljdWx0eSgpO1xyXG4gICAgICAgIFBsYXllckluZm8ud2F2ZUhlYWx0aFJlZ2VuKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N0YXJ0aW5nIHdhdmUgJyArIHRoaXMuY3VycmVudFdhdmUgKyAnLCB3YXZlIGRpZmZpY3VsdHk6ICcgKyB0aGlzLndhdmVEaWZmaWN1bHR5KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNwYXduRW5lbXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzcGF3blF1ZXVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHJlc3Bhd24gPSB0aGlzLnJlc3Bhd25RdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bhd25IZWFsdGggPSByZXNwYXduWzFdO1xyXG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByZXNwYXduWzBdLmRhbmdlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyZXNwYXduWzBdLm5hbWVdLmdldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJhbmRFbmVteSA9IHRoaXMuZ2V0UmFuZEVuZW15KChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGVuZW15LmRhbmdlciA8PSB0aGlzLnJlbWFpbmluZ0RhbmdlcikgJiYgKGVuZW15Lm1pbldhdmUgPD0gdGhpcy5jdXJyZW50V2F2ZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJhbmRFbmVteSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciAtPSByYW5kRW5lbXkuZGFuZ2VyO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5hbGxFbmVtaWVzW3JhbmRFbmVteS5uYW1lXS5nZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVtYWluaW5nRGFuZ2VyID0gMDtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzcGF3bihyZXNwYXduOiBFbmVteUNvbmZpZywgcmVtYWluaW5nSGVhbHRoOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNwYXduUXVldWUucHVzaChbcmVzcGF3biwgcmVtYWluaW5nSGVhbHRoXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxhc3RUaW1lOiBudW1iZXIgPSAwXHJcbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxyXG4gICAgICAgIGxldCBlbmVteTogRW5lbXlCYXNlXHJcbiAgICAgICAgbGV0IHdhdmU6IGludGVnZXJcclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy53YXZlQWN0aXZlICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRXYXZlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F2ZSgpOyAgLy8gbm8gd2F2ZXMgaW4gbmVzdGVkIGxheWVyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbWFpbmluZ0RhbmdlciA+IDAgJiYgdGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dEVuZW15KSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc3Bhd25FbmVteSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRlYWREYW5nZXIgPT09IHRoaXMud2F2ZURpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiV2F2ZSBcIiArIHRoaXMuY3VycmVudFdhdmUgKyBcIiBjb21wbGV0ZSEgTmV4dCB3YXZlIGluIFwiICsgUEFVU0VfQUZURVJfV0FWRV9USU1FKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVhZERhbmdlciA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhdmVBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmVUaW1lID0gdGhpcy5sYXN0VGltZSArIFBBVVNFX0FGVEVSX1dBVkVfVElNRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3YXZlID0gdGhpcy5jdXJyZW50V2F2ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWV1ZWRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWV1ZWRFbmVteSA9IHRoaXMuZ2V0UmFuZEVuZW15KCgpID0+IHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSB0aGlzLmxhc3RUaW1lICogKFdhdmVDb25maWcuZGFuZ2VyUGVyU2VjKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbCkgKiAwLjAwMSlcclxuICAgICAgICAgICAgY29uc3QgYiA9ICh0aGlzLnF1ZXVlZEVuZW15LmRhbmdlciAqIDEuMClcclxuICAgICAgICAgICAgaWYgKGEgPiBiKSB7XHJcbiAgICAgICAgICAgICAgICBlbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnF1ZXVlZEVuZW15Lm5hbWVdLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sYXN0VGltZSwgYilcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSBudWxsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdhdmUgPSBXYXZlQ29uZmlnLmxldmVsVG9XYXZlKHRoaXMuc2NlbmUuZ2V0VG93ZXJQYXJlbnQoKS5sZXZlbClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbmVteSkge1xyXG4gICAgICAgICAgICBlbmVteS5zZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIGVuZW15LnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBwbGFjZSB0aGUgZW5lbXkgYXQgdGhlIHN0YXJ0IG9mIHRoZSBwYXRoXHJcbiAgICAgICAgICAgIGVuZW15LnN0YXJ0T25QYXRoKHdhdmUsIHRoaXMucmVzcGF3bkhlYWx0aCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzcGF3bkhlYWx0aCA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5leHRFbmVteSA9IHRoaXMubGFzdFRpbWUgKyB0aGlzLmVuZW15SW50ZXJ2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UmFuZEVuZW15KGZpbHRlcl9mbik6IEVuZW15Q29uZmlnIHtcclxuICAgICAgICBsZXQgYXZhaWxFbmVtaWVzID0gW11cclxuICAgICAgICBmb3IobGV0IGVuZW15IG9mIEVORU1ZX0NPTkZJR1MpIHsgIC8vIFNlbGVjdCBhbGwgZW5lbWllcyB0aGF0IGNhbiBiZSBzcGF3bmVkXHJcbiAgICAgICAgICAgIGlmIChlbmVteS5taW5XYXZlID49IDAgJiYgZmlsdGVyX2ZuKGVuZW15KSlcclxuICAgICAgICAgICAgICAgIGF2YWlsRW5lbWllcy5wdXNoKGVuZW15KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChhdmFpbEVuZW1pZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmFuZG9tIG9uZSBvZiB0aGVtXHJcbiAgICAgICAgICAgIGxldCByYW5kRW5lbXkgPSBhdmFpbEVuZW1pZXNbTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiBhdmFpbEVuZW1pZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIHJldHVybiByYW5kRW5lbXlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9