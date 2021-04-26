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
exports.TOWER_CONFIGS = exports.Multishot = exports.Sniper = exports.Basic = exports.ENEMY_CONFIGS = exports.SplitterBig = exports.SplitterSmall = exports.Fast = exports.Armoured = exports.Fat = exports.Weak = exports.WaveConfig = exports.RANGE_INDICATOR_CONFIG = exports.PLAYER_HEALTH_REGEN = exports.PAUSE_AFTER_WAVE_TIME = exports.TOWER_HEALTH_REGEN = exports.DAMAGE_TO_TOWER_HEALTH_COEF = void 0;
var enem = __webpack_require__(/*! ./enemy */ "./src/enemy.ts");
// enemy damage * DAMAGE_TO_TOWER_HEALTH_COEF = how much health tower loses
// (tower health is from 0 to 1)
exports.DAMAGE_TO_TOWER_HEALTH_COEF = 0.4;
exports.TOWER_HEALTH_REGEN = 0.00001 * 3;
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
    'minWave': 14
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
    'minWave': 10
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
    'minWave': 6
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
    'minWave': -1
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
    'minWave': 8
};
exports.ENEMY_CONFIGS = [exports.Weak, exports.Fat, exports.Armoured, exports.Fast, exports.SplitterBig, exports.SplitterSmall];
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
    'damage': function (level) { return 5 + 15 * (level - 1); },
    'firerate': function (level) { return 800; },
    'range': function (level) { return 90; },
    'numTargets': function (level) { return 3; },
    'bulletSpeedMod': 4,
    'price': 10,
    'spriteBase': 0,
    'spriteMid': 0,
    'spriteTop': 2,
    'tintBase': 0xffffff,
    'tintMid': 0x7f4d61,
    'tintTop': 0xaa4e61,
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
exports.SplitterSmallEnemy = exports.SplitterBigEnemy = exports.FastEnemy = exports.ArmouredEnemy = exports.FatEnemy = exports.WeakEnemy = exports.EnemyBase = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1bGxldC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmVteS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVhbHRoQmFyLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXJJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvZ2FtZU92ZXJTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL2h1ZFNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvbWV0YVNjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2VuZXMvdGRTY2VuZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NlbmVzL3RkU2NlbmVDb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlcnJhaW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rvd2VyTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG93ZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy93YXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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QUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDNUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLO1FBQ25CLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2xCLE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDdEYsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU07WUFDOUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU07WUFDOUMsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFDTixDQUFDO0lBR0QsNkJBQU0sR0FBTixVQUFPLEtBQUs7UUFDUixJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUs7UUFFdEIsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7O2dCQUU1RSxJ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QUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUVELElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekIsNEJBQTRCO1lBQzVCLElBQUksU0FBUyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sU0FBUztTQUNuQjthQUFNO1lBQ0gsT0FBTyxJQUFJO1NBQ2Q7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDO0FBdElZLGtDQUFXIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvbWFpbi50c1wiLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCJcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSQURJVVMgPSAxMFxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1bGxldCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIge1xyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgZHg6IG51bWJlciA9IDBcclxuICAgIGR5OiBudW1iZXIgPSAwXHJcbiAgICBsaWZlc3BhbjogbnVtYmVyID0gMFxyXG4gICAgc3BlZWQ6IG51bWJlclxyXG4gICAgZGFtYWdlOiBpbnRlZ2VyXHJcblxyXG4gICAgYnVsbGV0SW1hZ2U6IFBoYXNlci5HYW1lT2JqZWN0cy5JbWFnZVxyXG4gICAgcGFydGljbGVzOiBQaGFzZXIuR2FtZU9iamVjdHMuUGFydGljbGVzLlBhcnRpY2xlRW1pdHRlck1hbmFnZXJcclxuICAgIGVtaXR0ZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5QYXJ0aWNsZXMuUGFydGljbGVFbWl0dGVyXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuZHggPSAwO1xyXG4gICAgICAgIHRoaXMuZHkgPSAwO1xyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gUGhhc2VyLk1hdGguR2V0U3BlZWQoNjAwLCAxKTtcclxuICAgICAgICB0aGlzLmJ1bGxldEltYWdlID0gdGhpcy5zY2VuZS5hZGQuaW1hZ2UoMCwgMCwgJ2J1bGxldCcpXHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSh4LCB5LCBhbmdsZSwgZGFtYWdlLCB0b3dlclJhbmdlLCBzcGVlZE1vZCkge1xyXG4gICAgICAgIHRoaXMuZGFtYWdlID0gZGFtYWdlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBQaGFzZXIuTWF0aC5HZXRTcGVlZCh0b3dlclJhbmdlICogc3BlZWRNb2QsIDEpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5idWxsZXRJbWFnZSlcclxuXHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSB0aGlzLnNjZW5lLmFkZC5wYXJ0aWNsZXMoJ3BhcnRpY2xlX3JlZCcpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIC8vICBCdWxsZXRzIGZpcmUgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSBzY3JlZW4gdG8gdGhlIGdpdmVuIHgveVxyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2Uuc2V0UG9zaXRpb24oeCwgeSk7XHJcblxyXG4gICAgICAgIC8vICB3ZSBkb24ndCBuZWVkIHRvIHJvdGF0ZSB0aGUgYnVsbGV0cyBhcyB0aGV5IGFyZSByb3VuZFxyXG4gICAgICAgIC8vICB0aGlzLnNldFJvdGF0aW9uKGFuZ2xlKTtcclxuICAgICAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IGhvdyB0byBicmluZyB0byBmcm9udFxyXG5cclxuICAgICAgICB0aGlzLmR4ID0gTWF0aC5jb3MoYW5nbGUpO1xyXG4gICAgICAgIHRoaXMuZHkgPSBNYXRoLnNpbihhbmdsZSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwL3NwZWVkTW9kO1xyXG5cclxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSB0aGlzLnBhcnRpY2xlcy5jcmVhdGVFbWl0dGVyKHtcclxuICAgICAgICAgICAgc3BlZWQ6IDEwMCxcclxuICAgICAgICAgICAgc2NhbGU6IHsgc3RhcnQ6IDAuMywgZW5kOiAwIH0sXHJcbiAgICAgICAgICAgIGJsZW5kTW9kZTogJ0FERCcsXHJcbiAgICAgICAgICAgIGxpZmVzcGFuOiAxMDAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLnN0YXJ0Rm9sbG93KHRoaXMuYnVsbGV0SW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGhpdCgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIuZXhwbG9kZSgxMCwgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKF8sIGRlbHRhKSB7XHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XHJcblxyXG4gICAgICAgIHRoaXMubGlmZXNwYW4gLT0gZGVsdGE7XHJcblxyXG4gICAgICAgIHRoaXMuYnVsbGV0SW1hZ2UueCArPSB0aGlzLmR4ICogKHRoaXMuc3BlZWQgKiBkZWx0YSk7XHJcbiAgICAgICAgdGhpcy5idWxsZXRJbWFnZS55ICs9IHRoaXMuZHkgKiAodGhpcy5zcGVlZCAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgKHRoaXMuYm9keSBhcyBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSkuc2V0Q2lyY2xlKFJBRElVUywgdGhpcy5idWxsZXRJbWFnZS54LCB0aGlzLmJ1bGxldEltYWdlLnkpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuZGVzdHJveSgpOyAvLyBkaXNhYmxlIGVtaXR0b3IgKGFsc28gY291bGQgZXhwbG9kZSBpdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZW5lbSBmcm9tIFwiLi9lbmVteVwiO1xyXG5cclxuLy8gZW5lbXkgZGFtYWdlICogREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGID0gaG93IG11Y2ggaGVhbHRoIHRvd2VyIGxvc2VzXHJcbi8vICh0b3dlciBoZWFsdGggaXMgZnJvbSAwIHRvIDEpXHJcbmV4cG9ydCBjb25zdCBEQU1BR0VfVE9fVE9XRVJfSEVBTFRIX0NPRUYgPSAwLjRcclxuXHJcbmV4cG9ydCBjb25zdCBUT1dFUl9IRUFMVEhfUkVHRU4gPSAwLjAwMDAxICogM1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBVVNFX0FGVEVSX1dBVkVfVElNRSA9IDMwMDA7XHJcblxyXG5leHBvcnQgY29uc3QgUExBWUVSX0hFQUxUSF9SRUdFTjogbnVtYmVyID0gMDsgIC8vIGhvdyBtdWNoIGhlYWx0aCBwZXIgd2F2ZSwgY2FuIGJlIDwgMVxyXG5cclxuZXhwb3J0IGNvbnN0IFJBTkdFX0lORElDQVRPUl9DT05GSUcgPSB7XHJcbiAgICAnY29sb3VyJzogMHhiYmJiZmYsXHJcbiAgICAnYWxwaGEnOiAyMTAsXHJcbiAgICAnZWRnZUNvbG91cic6IDB4ODA4MGZmLFxyXG4gICAgJ2VkZ2VXaWR0aCc6IDRcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXYXZlQ29uZmlnID0ge1xyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLSBvdXRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgLy8gSG93IG11Y2ggdGltZSBiZXR3ZWVuIGNvbnNlY3V0aXZlIHNwYXducyBpbiBhIHdhdmVcclxuICAgIG91dGVyRW5lbXlJbnRlcnZhbDogNTAwLFxyXG4gICAgLy8gSG93IG11Y2ggZGFuZ2VyIGluIGEgd2F2ZVxyXG4gICAgb3V0ZXJXYXZlRGFuZ2VyOiAod2F2ZSkgPT4gKHdhdmUgKzEpICAqIDEwLFxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0gaW5uZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIC8vIEhvdyBtdWNoIGRhbmdlciBwZXIgc2Vjb25kIGlzIGdlbmVyYXRlZSBpbiBpbm5lciBkZXB0aHM/XHJcbiAgICBkYW5nZXJQZXJTZWM6IChsZXZlbCkgPT4gMTAqbGV2ZWwsXHJcbiAgICAvLyBUbyB3aGF0IHdhdmUgbnVtYmVyIGRvZXMgYSB0b3dlciBsZXZlbCBjb3JyZXNwb25kPyAoZm9yIGVuZW15IHNjYWxpbmcpXHJcbiAgICBsZXZlbFRvV2F2ZTogKGxldmVsKSA9PiAzICogbGV2ZWwsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEVuZW15Q29uZmlnID0ge1xyXG4gICAgbmFtZTogc3RyaW5nICAvLyBtdXN0IGJlIHNhbWUgYXMgY29uZmlnIG9iamVjdCBuYW1lXHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nICAvLyBuYW1lIHRvIGJlIGRpc3BsYXllZCB0byBwbGF5ZXJcclxuICAgIGNsYXNzOiBhbnkgIC8vIGNsYXNzIG9mIHRoZSBlbmVteSBhcyBkZWZpbmVkIGluIC4vZW5lbXkudHNcclxuICAgIGhwOiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gY2FuIHNjYWxlIHdpdGggd2F2ZVxyXG4gICAgc3BlZWQ6IG51bWJlciAgLy8gZnJhY3Rpb24gb2YgcGF0aFxyXG4gICAgbW9uZXk6IGludGVnZXIgIC8vIG9uLWtpbGwgcmV3YXJkXHJcbiAgICBkYW1hZ2U6IGludGVnZXIgIC8vIGRhbWFnZSBkZWFsdCBvbiByZWFjaGluZyBlbmRcclxuICAgIGFybW91cjogKGludGVnZXIpID0+IGludGVnZXIgIC8vIGZsYXQgcmVkdWN0aW9uIG9mIGluY29taW5nIGRhbWFnZVxyXG4gICAgZGFuZ2VyOiBpbnRlZ2VyICAvLyBmb3IgY2FsY3VsYXRpbmcgd2F2ZSBkaWZmaWN1bHR5XHJcbiAgICBzcHJpdGVOYW1lOiBzdHJpbmcgIC8vIHNwcml0ZSBhcyBpbXBvcnRlZCBpbiBtZXRhU2NlbmUucHJlbG9hZFxyXG4gICAgdGludDogaW50ZWdlclxyXG4gICAgc3BsaXQ/OiB7ICAvLyBvcHRpb25hbCBzcGxpdCBpbmZvXHJcbiAgICAgICAgY2ZnOiBFbmVteUNvbmZpZyAgLy8gVE9ETzogbWFrZSBzcGxpdCBpbnRvIG11bHRpcGxlIHR5cGVzIHBvc3NpYmxlP1xyXG4gICAgICAgIGFtb3VudDogaW50ZWdlclxyXG4gICAgfVxyXG4gICAgbWluV2F2ZTogaW50ZWdlciAgLy8gZmlyc3Qgd2F2ZSB0aGlzIGNhbiBzcGF3biwgLTEgdG8gbmV2ZXIgc3Bhd25cclxuICAgIGJsdXJiPzogc3RyaW5nICAvLyBzaG93biB0byBwbGF5ZXJcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdlYWs6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnV2VhaycsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnTm9ybWFsJyxcclxuICAgICdjbGFzcyc6IGVuZW0uV2Vha0VuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDIwICsgOSood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyAyMDAwMCxcclxuICAgICdtb25leSc6IDEsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3dlYWtFbmVteScsXHJcbiAgICAnZGFuZ2VyJzogMTAsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAwLFxyXG4gICAgJ2JsdXJiJzogJ1RvbyBjdXRlIHRvIGtpbGwuLi4gc3VyZWx5LidcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZhdDogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdGYXQnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ0Nob25rJyxcclxuICAgICdjbGFzcyc6IGVuZW0uRmF0RW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTAwICsgNDUgKiAod2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyA0MDAwMCxcclxuICAgICdtb25leSc6IDIsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAxMDAsXHJcbiAgICAnc3ByaXRlTmFtZSc6ICdmYXRFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAxNFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXJtb3VyZWQ6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnQXJtb3VyZWQnLFxyXG4gICAgJ2Rpc3BsYXlOYW1lJzogJ0FybW91cmVkJyxcclxuICAgICdjbGFzcyc6IGVuZW0uQXJtb3VyZWRFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAyMCArIDkqKHdhdmUtMSksXHJcbiAgICAnc3BlZWQnOiAxIC8gMzAwMDAsXHJcbiAgICAnbW9uZXknOiAyLFxyXG4gICAgJ2RhbWFnZSc6IDEsXHJcbiAgICAnYXJtb3VyJzogKHdhdmUpID0+IE1hdGgubWluKDMgKyAoTWF0aC5mbG9vcih3YXZlLzUpKSwxNCksXHJcbiAgICAnZGFuZ2VyJzogMTAwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnYXJtb3VyZWRFbmVteScsXHJcbiAgICAndGludCc6IDB4ZmZmZmZmLFxyXG4gICAgJ21pbldhdmUnOiAxMFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmFzdDogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdGYXN0JyxcclxuICAgICdkaXNwbGF5TmFtZSc6ICdTcGVlZHknLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5GYXN0RW5lbXksXHJcbiAgICAnaHAnOiAod2F2ZSkgPT4gMTUgKyA3Kih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDEwMDAwLFxyXG4gICAgJ21vbmV5JzogMSxcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDMwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnZmFzdEVuZW15JyxcclxuICAgICd0aW50JzogMHhmZmZmZmYsXHJcbiAgICAnbWluV2F2ZSc6IDZcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNwbGl0dGVyU21hbGw6IEVuZW15Q29uZmlnID0ge1xyXG4gICAgJ25hbWUnOiAnU3BsaXR0ZXJTbWFsbCcsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BsaXR0ZXIgYmFieScsXHJcbiAgICAnY2xhc3MnOiBlbmVtLlNwbGl0dGVyU21hbGxFbmVteSxcclxuICAgICdocCc6ICh3YXZlKSA9PiAxMCs1Kih3YXZlLTEpLFxyXG4gICAgJ3NwZWVkJzogMSAvIDIwMDAwLFxyXG4gICAgJ21vbmV5JzogMCxcclxuICAgICdkYW1hZ2UnOiAxLFxyXG4gICAgJ2FybW91cic6ICh3YXZlKSA9PiAwLFxyXG4gICAgJ2Rhbmdlcic6IDIwLFxyXG4gICAgJ3Nwcml0ZU5hbWUnOiAnc3BsaXR0ZXJTbWFsbEVuZW15JyxcclxuICAgICd0aW50JzogMHhmZmZmZmYsXHJcbiAgICAnbWluV2F2ZSc6IC0xXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTcGxpdHRlckJpZzogRW5lbXlDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6ICdTcGxpdHRlckJpZycsXHJcbiAgICAnZGlzcGxheU5hbWUnOiAnU3BsaXR0ZXInLFxyXG4gICAgJ2NsYXNzJzogZW5lbS5TcGxpdHRlckJpZ0VuZW15LFxyXG4gICAgJ2hwJzogKHdhdmUpID0+IDIwICsgNyood2F2ZS0xKSxcclxuICAgICdzcGVlZCc6IDEgLyAzMDAwMCxcclxuICAgICdtb25leSc6IDEsXHJcbiAgICAnZGFtYWdlJzogMSxcclxuICAgICdhcm1vdXInOiAod2F2ZSkgPT4gMCxcclxuICAgICdkYW5nZXInOiAzMCxcclxuICAgICdzcHJpdGVOYW1lJzogJ3NwbGl0dGVyQmlnRW5lbXknLFxyXG4gICAgJ3RpbnQnOiAweGZmZmZmZixcclxuICAgICdzcGxpdCc6IHtcclxuICAgICAgICAnY2ZnJzogU3BsaXR0ZXJTbWFsbCxcclxuICAgICAgICAnYW1vdW50JzogMlxyXG4gICAgfSxcclxuICAgICdtaW5XYXZlJzogOFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBFTkVNWV9DT05GSUdTID0gW1dlYWssIEZhdCwgQXJtb3VyZWQsIEZhc3QsIFNwbGl0dGVyQmlnLCBTcGxpdHRlclNtYWxsXVxyXG5cclxuXHJcbmV4cG9ydCB0eXBlIFRvd2VyQ29uZmlnID0ge1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBkYW1hZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcclxuICAgIGZpcmVyYXRlOiAoaW50ZWdlcikgPT4gbnVtYmVyICAvLyBtaWxpc2Vjb25kcyBiZXR3ZWVuIGVhY2ggc2hvdFxyXG4gICAgcmFuZ2U6IChpbnRlZ2VyKSA9PiBudW1iZXJcclxuICAgIG51bVRhcmdldHM/OiAoaW50ZWdlcikgPT4gaW50ZWdlciAgLy8gc2V0IGZvciB0b3dlcnMgdGhhdCB0YXJnZXQgbXVsdGlwbGUgZW5lbWllc1xyXG4gICAgYnVsbGV0U3BlZWRNb2Q6IG51bWJlciAgLy8gYnVsbGV0IHdpbGwgcmVhY2ggcmFuZ2UgaW4gMS9idWxsZXRTcGVlZE1vZCBzZWNvbmRzXHJcbiAgICBwcmljZTogbnVtYmVyXHJcbiAgICBzcHJpdGVCYXNlOiBpbnRlZ2VyXHJcbiAgICBzcHJpdGVNaWQ6IGludGVnZXJcclxuICAgIHNwcml0ZVRvcDogaW50ZWdlclxyXG4gICAgdGludEJhc2U6IGludGVnZXJcclxuICAgIHRpbnRNaWQ6IGludGVnZXJcclxuICAgIHRpbnRUb3A6IGludGVnZXJcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCYXNpYzogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiQmFzaWNcIixcclxuICAgICdkYW1hZ2UnOiBsZXZlbCA9PiAxNSArIDMwICogKGxldmVsLTEpLFxyXG4gICAgJ2ZpcmVyYXRlJzogbGV2ZWwgPT4gMTAwMCxcclxuICAgICdyYW5nZSc6IGxldmVsID0+IDEyNSxcclxuICAgICdidWxsZXRTcGVlZE1vZCc6IDQsXHJcbiAgICAncHJpY2UnOiA1LFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMCxcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDY3NWE5YyxcclxuICAgICd0aW50VG9wJzogMHhhYWFhZmYsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIk5vdGhpbmcgZmFuY3kuIERhbWFnZSBncm93cyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNuaXBlcjogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiU25pcGVyXCIsXHJcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gMjUgKyA1MCAqIChsZXZlbC0xKSxcclxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDQwMDAsXHJcbiAgICAncmFuZ2UnOiBsZXZlbCA9PiAyMDAgKyAzNSAqIGxldmVsLFxyXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNSxcclxuICAgICdwcmljZSc6IDIwLFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMSxcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDNhNzE1ZCxcclxuICAgICd0aW50VG9wJzogMHg0OGFjODEsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIkxvbmcgcmFuZ2UsIGJ1dCBmaXJlcyBzbG93bHkuIERhbWFnZSBhbmQgcmFuZ2UgZ3JvdyB3aXRoIGxldmVsLlwiLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE11bHRpc2hvdDogVG93ZXJDb25maWcgPSB7XHJcbiAgICAnbmFtZSc6IFwiTXVsdGlzaG90XCIsXHJcbiAgICAnZGFtYWdlJzogbGV2ZWwgPT4gNSArIDE1KihsZXZlbC0xKSxcclxuICAgICdmaXJlcmF0ZSc6IGxldmVsID0+IDgwMCxcclxuICAgICdyYW5nZSc6IGxldmVsID0+IDkwLFxyXG4gICAgJ251bVRhcmdldHMnOiBsZXZlbCA9PiAzLFxyXG4gICAgJ2J1bGxldFNwZWVkTW9kJzogNCxcclxuICAgICdwcmljZSc6IDEwLFxyXG4gICAgJ3Nwcml0ZUJhc2UnOiAwLFxyXG4gICAgJ3Nwcml0ZU1pZCc6IDAsXHJcbiAgICAnc3ByaXRlVG9wJzogMixcclxuICAgICd0aW50QmFzZSc6IDB4ZmZmZmZmLFxyXG4gICAgJ3RpbnRNaWQnOiAweDdmNGQ2MSxcclxuICAgICd0aW50VG9wJzogMHhhYTRlNjEsXHJcbiAgICAnZGVzY3JpcHRpb24nOiBcIkNhbiBzaG9vdCBhdCBtdWx0aXBsZSBlbmVtaWVzIGF0IG9uY2UuIERhbWFnZSBhbmQgZmlyZSByYXRlIGdyb3cgd2l0aCBsZXZlbC5cIixcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRPV0VSX0NPTkZJR1MgPSBbQmFzaWMsIE11bHRpc2hvdCwgU25pcGVyXSIsIi8vIGltcG9ydCB7IEdyaWRQb3NpdGlvbiwgUG9zaXRpb24sIFRlcnJhaW4gfSBmcm9tIFwiLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQgKiBhcyBjZmcgZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEh1ZFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL2h1ZFNjZW5lXCI7XHJcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9tZXRhU2NlbmVcIjtcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRW5lbXlCYXNlIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSB7XHJcbiAgICBzdGF0czogY2ZnLkVuZW15Q29uZmlnO1xyXG5cclxuICAgIGZvbGxvd2VyOiBhbnlcclxuICAgIGhwOiBpbnRlZ2VyXHJcbiAgICB5T2Zmc2V0OiBudW1iZXIgPSBQaGFzZXIuTWF0aC5STkQuaW50ZWdlckluUmFuZ2UoLTIwLCAyMCk7XHJcbiAgICB4T2Zmc2V0OiBudW1iZXIgPSBQaGFzZXIuTWF0aC5STkQuaW50ZWdlckluUmFuZ2UoLTIwLCAyMCk7XHJcbiAgICBzY2VuZTogVERTY2VuZSAvLyB0eXBlIGFzc2VydGlvblxyXG4gICAgc3BlZWQ6IG51bWJlcjtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIHN0YXRzKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIDAsIDAsIHN0YXRzLnNwcml0ZU5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgdGhpcy5mb2xsb3dlciA9IHsgdDogMCwgdmVjOiBuZXcgUGhhc2VyLk1hdGguVmVjdG9yMigpIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgKHRoaXMuc2NlbmUuc2NlbmUuZ2V0KCdodWRTY2VuZScpIGFzIEh1ZFNjZW5lKS5zZXREZXNjcmlwdGlvbkVuZW15KHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xyXG4gICAgICAgIC8vIG1vdmUgdGhlIHQgcG9pbnQgYWxvbmcgdGhlIHBhdGgsIDAgaXMgdGhlIHN0YXJ0IGFuZCAxIGlzIHRoZSBlbmRcclxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIG5ldyB4IGFuZCB5IGNvb3JkaW5hdGVzIGluIHZlY1xyXG4gICAgICAgIHRoaXMuc2NlbmUudGVycmFpbi5wYXRoLmdldFBvaW50KHRoaXMuZm9sbG93ZXIudCwgdGhpcy5mb2xsb3dlci52ZWMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci52ZWMueCA+IHRoaXMueCAtIHRoaXMueE9mZnNldCkge1xyXG4gICAgICAgICAgICB0aGlzLmZsaXBYID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZm9sbG93ZXIudmVjLnggPCB0aGlzLnggLSB0aGlzLnhPZmZzZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5mbGlwWCA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBlbmVteSB4IGFuZCB5IHRvIHRoZSBuZXdseSBvYnRhaW5lZCB4IGFuZCB5XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLmZvbGxvd2VyLnZlYy54ICsgdGhpcy54T2Zmc2V0LCB0aGlzLmZvbGxvd2VyLnZlYy55ICsgdGhpcy55T2Zmc2V0KTtcclxuXHJcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIHBhdGgsIHJlbW92ZSB0aGUgZW5lbXlcclxuICAgICAgICBpZiAodGhpcy5mb2xsb3dlci50ID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFjaEVuZCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFscGhhID0gMVxyXG4gICAgICAgIHRoaXMuYW5nbGUgPSAwXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDFcclxuICAgIH1cclxuXHJcbiAgICByZWFjaEVuZCgpIHtcclxuICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLnJlbWFpbmluZ0RhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlcjtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh1ZFNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJodWRTY2VuZVwiKSBhcyBIdWRTY2VuZVxyXG5cclxuICAgICAgICAgICAgUGxheWVySW5mby5ocCAtPSB0aGlzLnN0YXRzLmRhbWFnZTtcclxuICAgICAgICAgICAgaHVkU2NlbmUuaHBSZWRuZXNzID0gMVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbWV0YVNjZW5lID0gdGhpcy5zY2VuZS5zY2VuZS5nZXQoXCJtZXRhU2NlbmVcIikgYXMgTWV0YVNjZW5lXHJcbiAgICAgICAgICAgIG1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpLmNhbWVyYXMubWFpbi5zaGFrZSgyMDAsIDAuMDA1KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS53YXZlTWFuYWdlci5yZXNwYXduKHRoaXMuc3RhdHMsIHRoaXMuaHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuZW5lbXlFbmRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmVuZW15RW5kQ2FsbGJhY2sodGhpcy5zdGF0cy5kYW1hZ2UpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0T25QYXRoKHdhdmUsIHJlc3Bhd25IZWFsdGgsIHN0YXJ0X3QgPSAwKSB7XHJcbiAgICAgICAgLy8gc2V0IHRoZSB0IHBhcmFtZXRlciBhdCB0aGUgc3RhcnQgb2YgdGhlIHBhdGhcclxuICAgICAgICB0aGlzLmZvbGxvd2VyLnQgPSBzdGFydF90O1xyXG5cclxuICAgICAgICBpZiAocmVzcGF3bkhlYWx0aCA+IDApXHJcbiAgICAgICAgICAgIHRoaXMuaHAgPSByZXNwYXduSGVhbHRoO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdGhpcy5ocCA9IHRoaXMuc3RhdHMuaHAod2F2ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLnN0YXRzLnNwZWVkO1xyXG4gICAgICAgIHRoaXMudGludCA9IHRoaXMuc3RhdHMudGludDtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHggYW5kIHkgb2YgdGhlIGdpdmVuIHQgcG9pbnRcclxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGF0aC5nZXRQb2ludCh0aGlzLmZvbGxvd2VyLnQsIHRoaXMuZm9sbG93ZXIudmVjKTtcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSB4IGFuZCB5IG9mIG91ciBlbmVteSB0byB0aGUgcmVjZWl2ZWQgZnJvbSB0aGUgcHJldmlvdXMgc3RlcFxyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy5mb2xsb3dlci52ZWMueCwgdGhpcy5mb2xsb3dlci52ZWMueSk7XHJcblxyXG4gICAgICAgIGxldCBmcmFtZVJhdGUgPSBNYXRoLm1pbig2MCwgdGhpcy5zdGF0cy5zcGVlZCAqIDQwMDAwICogMTUpXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHMuc3ByaXRlTmFtZSA9PSBcImZhdEVuZW15XCIpIHsgLy8gaGFja1xyXG4gICAgICAgICAgICBmcmFtZVJhdGUgKj0gMC41XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1zLnBsYXkoe1xyXG4gICAgICAgICAgICBrZXk6IGAke3RoaXMuc3RhdHMuc3ByaXRlTmFtZX1fd2Fsa2AsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogZnJhbWVSYXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjZWl2ZURhbWFnZShkYW1hZ2U6IGludGVnZXIpIHtcclxuICAgICAgICB0aGlzLmhwIC09IGRhbWFnZSAtIHRoaXMuc3RhdHMuYXJtb3VyKHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuY3VycmVudFdhdmUpO1xyXG5cclxuICAgICAgICAvLyBpZiBocCBkcm9wcyBiZWxvdyAwIHdlIGRlYWN0aXZhdGUgdGhpcyBlbmVteVxyXG4gICAgICAgIGlmICh0aGlzLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGVhdGgoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlYXRoKCkge1xyXG4gICAgICAgIHRoaXMub25EZWF0aEFiaWxpdHkoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkgeyAgLy8gQWRkIGdvbGQgaW4gYmFzZSBsYXllciBvbmx5XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUud2F2ZU1hbmFnZXIuZGVhZERhbmdlciArPSB0aGlzLnN0YXRzLmRhbmdlclxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLm1vbmV5ICs9IHRoaXMuc3RhdHMubW9uZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxyXG4gICAgICAgICAgICBhbHBoYTogMCxcclxuICAgICAgICAgICAgYW5nbGU6IFBsYXllckluZm8uUk5HLnNpZ24oKSAqIDE4MCxcclxuICAgICAgICAgICAgc2NhbGU6IDAuNSxcclxuICAgICAgICAgICAgZHVyYXRpb246IFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDYwMCwgODAwKSxcclxuICAgICAgICAgICAgZWFzZTogJ1Bvd2VyMidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlYXRoQWJpbGl0eSgpIHsgIC8vIG92ZXJyaWRlIHRoaXMgZm9yIHNwZWNpYWwgb24tZGVhdGggYWJpbGl0aWVzXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFrRW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLldlYWspXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYXRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuRmF0KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXJtb3VyZWRFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuQXJtb3VyZWQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYXN0RW5lbXkgZXh0ZW5kcyBFbmVteUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgY2ZnLkZhc3QpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcGxpdHRlckJpZ0VuZW15IGV4dGVuZHMgRW5lbXlCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNmZy5TcGxpdHRlckJpZylcclxuICAgIH1cclxuXHJcbiAgICBvbkRlYXRoQWJpbGl0eSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3RhdHMuc3BsaXQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SIG1pc3Npbmcgc3BsaXQgY29uZmlnIG9uICcgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRzLnNwbGl0LmFtb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdFbmVteSA9IHRoaXMuc2NlbmUuYWxsRW5lbWllc1t0aGlzLnN0YXRzLnNwbGl0LmNmZy5uYW1lXS5nZXQoKVxyXG4gICAgICAgICAgICBuZXdFbmVteS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICBuZXdFbmVteS5zZXRBY3RpdmUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmRlYWREYW5nZXIgLT0gdGhpcy5zdGF0cy5zcGxpdC5jZmcuZGFuZ2VyO1xyXG4gICAgICAgICAgICBuZXdFbmVteS5zdGFydE9uUGF0aCh0aGlzLnNjZW5lLndhdmVNYW5hZ2VyLmN1cnJlbnRXYXZlLCAwLCB0aGlzLmZvbGxvd2VyLnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwbGl0dGVyU21hbGxFbmVteSBleHRlbmRzIEVuZW15QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjZmcuU3BsaXR0ZXJTbWFsbClcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIlxyXG5pbXBvcnQgeyBUSUxFX1NJWkUgfSBmcm9tIFwiLi90ZXJyYWluXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGhCYXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIHN0YXRpYyBIRUFMVEhfQ09MT1IgPSAweGY4ZmYzNiAvLzB4ZmY0NDQ0XHJcbiAgICBzdGF0aWMgSEVBTFRIX0xPU1NfQ09MT1IgPSAweDdkN2Q3ZCAvLyAweDQ0ZmY0NFxyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgcHJpdmF0ZSBfaGVhbHRoOiBudW1iZXIgPSAxICAvLyAwIHRvIDFcclxuICAgIHNsb3dIZWFsdGg6IG51bWJlclxyXG5cclxuICAgIGJnQmFyOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlXHJcbiAgICBoZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuICAgIHNsb3dIZWFsdGhCYXI6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGVcclxuXHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgd2lkdGg6IG51bWJlclxyXG4gICAgbWF4SGVhbHRoOiBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCAwLCAwKVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2UoeCwgeSwgd2lkdGgsIGhlYWx0aD0wKSB7XHJcbiAgICAgICAgdGhpcy54ID0geFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGhcclxuXHJcbiAgICAgICAgLy8gaGVhbHRoIGJhciBiYXNlL2JhY2tncm91bmRcclxuICAgICAgICB0aGlzLmJnQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKDAsIDAsIHdpZHRoICsgNCwgNiwgMHgwMDAwMDApXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5iZ0JhcilcclxuXHJcbiAgICAgICAgLy8gdmlzdWFsaXphdGlvbiBvZiBoZWFsdGggbG9zc2VzXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoQmFyID0gdGhpcy5zY2VuZS5hZGQucmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICAwLCAwLFxyXG4gICAgICAgICAgICB3aWR0aCwgNCxcclxuICAgICAgICAgICAgSGVhbHRoQmFyLkhFQUxUSF9MT1NTX0NPTE9SLFxyXG4gICAgICAgIClcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnNsb3dIZWFsdGhCYXIpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaGVhbHRoIGJhciBpdHNlbGZcclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IHRoaXMuc2NlbmUuYWRkLnJlY3RhbmdsZShcclxuICAgICAgICAgICAgMCwgMCxcclxuICAgICAgICAgICAgd2lkdGgsIDQsXHJcbiAgICAgICAgICAgIEhlYWx0aEJhci5IRUFMVEhfQ09MT1IsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMuYWRkKHRoaXMuaGVhbHRoQmFyKVxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aCA9IGhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IGhlYWx0aFxyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWFsdGgoaCkge1xyXG4gICAgICAgIHRoaXMuX2hlYWx0aCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIGgpKVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWFsdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlYWx0aFxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsZXZlbFVwKCkge1xyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5oZWFsdGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIGNvbnN0IGNvZWYgPSBNYXRoLnBvdygwLjk5LCBkZWx0YS8xMDAwICogNjApXHJcbiAgICAgICAgdGhpcy5zbG93SGVhbHRoID0gY29lZiAqIHRoaXMuc2xvd0hlYWx0aCArICgxIC0gY29lZikgKiB0aGlzLmhlYWx0aFxyXG5cclxuICAgICAgICB0aGlzLmhlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLmhlYWx0aFxyXG4gICAgICAgIHRoaXMuc2xvd0hlYWx0aEJhci53aWR0aCA9IHRoaXMud2lkdGggKiB0aGlzLnNsb3dIZWFsdGhcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInXHJcbmltcG9ydCB7IEh1ZFNjZW5lLCBIVURfV0lEVEggfSBmcm9tICcuL3NjZW5lcy9odWRTY2VuZSc7XHJcbmltcG9ydCB7IE1ldGFTY2VuZSB9IGZyb20gJy4vc2NlbmVzL21ldGFTY2VuZSc7XHJcbmltcG9ydCB7IFREU2NlbmUsIFREX1NDRU5FX0hFSUdIVCwgVERfU0NFTkVfV0lEVEggfSBmcm9tICcuL3NjZW5lcy90ZFNjZW5lJ1xyXG5pbXBvcnQgeyBURFNjZW5lQ29uZmlnIH0gZnJvbSAnLi9zY2VuZXMvdGRTY2VuZUNvbmZpZyc7XHJcbmltcG9ydCB7IFRlcnJhaW4gfSBmcm9tICcuL3RlcnJhaW4nO1xyXG5cclxubGV0IG1ldGFTY2VuZSA9IG5ldyBNZXRhU2NlbmUoKVxyXG5sZXQgaHVkU2NlbmUgPSBuZXcgSHVkU2NlbmUobWV0YVNjZW5lKTtcclxuXHJcbmxldCBsZXZlbHMgPSBbXHJcbiAgbWV0YVNjZW5lLFxyXG4gIGh1ZFNjZW5lLFxyXG5dXHJcblxyXG5jb25zdCBnYW1lQ29uZmlnID0ge1xyXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxyXG4gIHBhcmVudDogJ2NvbnRlbnQnLFxyXG4gIHdpZHRoOiBURF9TQ0VORV9XSURUSCArIEhVRF9XSURUSCAqIDIsXHJcbiAgaGVpZ2h0OiBURF9TQ0VORV9IRUlHSFQsXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ2FyY2FkZSdcclxuICB9LFxyXG4gIHNjZW5lOiBsZXZlbHMsXHJcbiAgc2VlZDogW1wiNDJcIl1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKGdhbWVDb25maWcpOyIsImltcG9ydCB7IFBMQVlFUl9IRUFMVEhfUkVHRU4gfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbmZvIHtcclxuICAgIHN0YXRpYyBtb25leTogbnVtYmVyID0gMTA7XHJcbiAgICBzdGF0aWMgaHA6IG51bWJlciA9IDEwO1xyXG4gICAgc3RhdGljIHRpbWVTY2FsZTogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBSTkcgPSBuZXcgUGhhc2VyLk1hdGguUmFuZG9tRGF0YUdlbmVyYXRvcihbXCI0MlwiXSlcclxuXHJcbiAgICBzdGF0aWMgcmVnZW5Qcm9ncmVzczogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHdhdmVIZWFsdGhSZWdlbigpIHtcclxuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgKz0gUExBWUVSX0hFQUxUSF9SRUdFTjtcclxuICAgICAgICBsZXQgcmVzdG9yZWQgPSBNYXRoLmZsb29yKFBsYXllckluZm8ucmVnZW5Qcm9ncmVzcyk7XHJcbiAgICAgICAgUGxheWVySW5mby5ocCArPSByZXN0b3JlZDtcclxuICAgICAgICBQbGF5ZXJJbmZvLnJlZ2VuUHJvZ3Jlc3MgLT0gcmVzdG9yZWQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vbWV0YVNjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU92ZXJTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcblxyXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmVcclxuICAgIGNvbnN0cnVjdG9yKG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGtleTogXCJnYW1lT3ZlclNjZW5lXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmVcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSg1MTIsIDI1NiwgMTAyNCwgNTEyLCAweGFhNDQ0NCwgMC41KTtcclxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoNTEyLCAyNTYtNDAsIDUxMi0xMjgsIDI1Ni02NCwgMHg0NDQ0NDQpO1xyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAxNjAsIFwiWU9VIERJRURcIikuc2V0T3JpZ2luKDAuNSk7XHJcbiAgICAgICAgdGhpcy5hZGQudGV4dCg1MTIsIDE4MCwgYExhc3Qgd2F2ZSB3aXRuZXNzZWQ6ICR7dGhpcy5tZXRhU2NlbmUuZ2V0Um9vdFREU2NlbmUoKS53YXZlTWFuYWdlci5jdXJyZW50V2F2ZX1gKS5zZXRPcmlnaW4oMC41KTtcclxuICAgICAgICB0aGlzLmFkZC50ZXh0KDUxMiwgMjAwLCBgV2VhbHRoIHRha2VuIHRvIGdyYXZlOiAke1BsYXllckluZm8ubW9uZXl9YCkuc2V0T3JpZ2luKDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnRleHQoNTEyLCAyNTAsIGBEQVJFIEFHQUlOYCkuc2V0SW50ZXJhY3RpdmUoKS5zZXRPcmlnaW4oMC41KS5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlbG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXHJcbiAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnRUaW1lID0gMDtcclxuICAgIHJlbG9hZGVkID0gZmFsc2U7XHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lICs9IGRlbHRhXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBUb3dlckNvbmZpZywgVE9XRVJfQ09ORklHUywgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRywgRW5lbXlDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuLi9lbmVteVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHsgTUFYX0hFSUdIVCwgTUFYX1dJRFRILCBUZXJyYWluLCBUSUxFX1NJWkUgfSBmcm9tIFwiLi4vdGVycmFpblwiO1xyXG5pbXBvcnQgeyBUb3dlciB9IGZyb20gXCIuLi90b3dlcnNcIjtcclxuaW1wb3J0IHsgTWV0YVNjZW5lIH0gZnJvbSBcIi4vbWV0YVNjZW5lXCI7XHJcbmltcG9ydCB7IFREU2NlbmUsIFREX1NDRU5FX0hFSUdIVCwgVERfU0NFTkVfV0lEVEggfSBmcm9tIFwiLi90ZFNjZW5lXCI7XHJcblxyXG5jb25zdCBIVURfQkdfQ09MT1IgPSAweGZmOGE2ZCAgLy8weGZmYWE3ZFxyXG5leHBvcnQgY29uc3QgSFVEX1dJRFRIID0gVElMRV9TSVpFICogM1xyXG5cclxuZXhwb3J0IGNsYXNzIEh1ZFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuXHJcbiAgICBtb25leVRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICB3YXZlVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGhwVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHRcclxuICAgIGhwUmVkbmVzczogbnVtYmVyIC8vIDAgdG8gMVxyXG4gICAgZGVwdGhUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgZ29VcFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcbiAgICBkZXNjcmlwdGlvblRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0XHJcblxyXG4gICAgbWV0YVNjZW5lOiBNZXRhU2NlbmU7XHJcbiAgICBiYWNrVG9Sb290U2NlbmVCdXR0b246IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgYnV5VG93ZXJJY29uczogQnV5VG93ZXJJY29uW11cclxuXHJcbiAgICBsYXN0QWN0aXZlU2NlbmU6IFREU2NlbmVcclxuICAgIHBhcmVudFNjZW5lc0ltYWdlczogUGhhc2VyLkdhbWVPYmplY3RzLkltYWdlW11cclxuICAgIHNsb3dTcGVlZFRleHQ6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgZmFzdFNwZWVkVGV4dDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IobWV0YVNjZW5lOiBNZXRhU2NlbmUpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGtleTogXCJodWRTY2VuZVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1ldGFTY2VuZSA9IG1ldGFTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgICAgIGxldCB3ID0gSFVEX1dJRFRIXHJcbiAgICAgICAgbGV0IGggPSBUSUxFX1NJWkUgKiBNQVhfSEVJR0hUXHJcbiAgICAgICAgY29uc3QgeExlZnQgPSB3IC8gMlxyXG4gICAgICAgIGNvbnN0IHhSaWdodCA9IHcgKyBURF9TQ0VORV9XSURUSCArIHcgLyAyXHJcblxyXG4gICAgICAgIHRoaXMuYWRkLnJlY3RhbmdsZSh3IC8gMiwgaCAvIDIsIHcsIGgsIEhVRF9CR19DT0xPUilcclxuICAgICAgICB0aGlzLmFkZC5yZWN0YW5nbGUoXHJcbiAgICAgICAgICAgIHhSaWdodCwgaCAvIDIsXHJcbiAgICAgICAgICAgIHcsIGgsXHJcbiAgICAgICAgICAgIEhVRF9CR19DT0xPUixcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMubW9uZXlUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgMjAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLm1vbmV5VGV4dC5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuaHBUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNDAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRPcmlnaW4oMC41KVxyXG4gICAgICAgIHRoaXMuaHBSZWRuZXNzID0gMFxyXG5cclxuICAgICAgICB0aGlzLndhdmVUZXh0ID0gdGhpcy5hZGQudGV4dCh4TGVmdCwgNjAsIFwiXCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLndhdmVUZXh0LnNldE9yaWdpbigwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuZGVwdGhUZXh0ID0gdGhpcy5hZGQudGV4dCh4UmlnaHQsIDIwLCBcIkRlcHRoOiBcIiwgeyBmb250U2l6ZTogJzIwcHgnIH0pO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUZXh0LnNldE9yaWdpbigwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuZ29VcFRleHQgPSB0aGlzLmFkZC50ZXh0KHhSaWdodCwgNTAsIFwiR28gdXAgdG86XCIsIHsgZm9udFNpemU6ICcyMHB4JyB9KTtcclxuICAgICAgICB0aGlzLmdvVXBUZXh0LnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgdGhpcy5nb1VwVGV4dC5zZXRWaXNpYmxlKGZhbHNlKVxyXG5cclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dCA9IHRoaXMuYWRkLnRleHQoNSwgMzAwLCBcIlwiLCB7IGZvbnRTaXplOiAnMTBwdCcgfSk7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0V29yZFdyYXBXaWR0aChIVURfV0lEVEggLSAxMCwgZmFsc2UpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1eVRvd2VySWNvbnMgPSBbXTtcclxuICAgICAgICBsZXQgdG93ZXJUeXBlSW5kZXggPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHRvd2VyQ29uZmlnIG9mIFRPV0VSX0NPTkZJR1MpIHtcclxuICAgICAgICAgICAgdGhpcy5idXlUb3dlckljb25zLnB1c2gobmV3IEJ1eVRvd2VySWNvbih0aGlzLCB3IC8gMiwgMTEwICsgNzAgKiB0b3dlclR5cGVJbmRleCwgdG93ZXJDb25maWcpKVxyXG4gICAgICAgICAgICB0b3dlclR5cGVJbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcGFkID0gM1xyXG4gICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dCA9IHRoaXMuYWRkLnRleHQoeExlZnQsIDQ1MCwgXCI+U2xvdzxcIiwge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiB7IGxlZnQ6IHBhZCwgcmlnaHQ6IHBhZCwgdG9wOiBwYWQsIGJvdHRvbTogcGFkIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQgPSB0aGlzLmFkZC50ZXh0KHhMZWZ0LCA0NzUsIFwiRmFzdFwiLCB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwXCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogcGFkLCByaWdodDogcGFkLCB0b3A6IHBhZCwgYm90dG9tOiBwYWQgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2xvd1NwZWVkVGV4dC5zZXRJbnRlcmFjdGl2ZSgpLnNldE9yaWdpbigwLjUpXHJcbiAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldEludGVyYWN0aXZlKCkuc2V0T3JpZ2luKDAuNSlcclxuICAgICAgICB0aGlzLnNsb3dTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnRpbWVTY2FsZSA9IDEsIG51bGxcclxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCI+U2xvdzxcIilcclxuICAgICAgICAgICAgdGhpcy5mYXN0U3BlZWRUZXh0LnNldFRleHQoXCJGYXN0XCIpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmZhc3RTcGVlZFRleHQub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLnRpbWVTY2FsZSA9IDQsIG51bGxcclxuICAgICAgICAgICAgdGhpcy5zbG93U3BlZWRUZXh0LnNldFRleHQoXCJTbG93XCIpXHJcbiAgICAgICAgICAgIHRoaXMuZmFzdFNwZWVkVGV4dC5zZXRUZXh0KFwiPkZhc3Q8XCIpXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCgnaHVkU2NlbmUnKTtcclxuICAgICAgICB0aGlzLnBhcmVudFNjZW5lc0ltYWdlcyA9IFtdXHJcbiAgICB9XHJcblxyXG4gICAgbGFzdFRpbWU6IG51bWJlciA9IDBcclxuICAgIHB1YmxpYyB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXRhU2NlbmUuaXNHYW1lT3Zlcil7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGF1c2UoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsdGEgKj0gUGxheWVySW5mby50aW1lU2NhbGU7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YTtcclxuXHJcbiAgICAgICAgdGhpcy5tb25leVRleHQuc2V0VGV4dCgnTW9uZXk6ICcgKyBQbGF5ZXJJbmZvLm1vbmV5KVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50V2F2ZSA9IHRoaXMubWV0YVNjZW5lLmdldFJvb3RURFNjZW5lKCkud2F2ZU1hbmFnZXIuY3VycmVudFdhdmVcclxuICAgICAgICB0aGlzLndhdmVUZXh0LnNldFRleHQoYFdhdmU6ICR7Y3VycmVudFdhdmV9YClcclxuXHJcbiAgICAgICAgdGhpcy5ocFRleHQuc2V0VGV4dCgnSFA6ICcgKyBQbGF5ZXJJbmZvLmhwKVxyXG5cclxuICAgICAgICB0aGlzLmhwVGV4dC5zZXRDb2xvcihQaGFzZXIuRGlzcGxheS5Db2xvci5SR0JUb1N0cmluZyhcclxuICAgICAgICAgICAgMjU1LCAyNTUgKiAoMSAtIHRoaXMuaHBSZWRuZXNzKSwgMjU1ICogKDEgLSB0aGlzLmhwUmVkbmVzcylcclxuICAgICAgICApKVxyXG4gICAgICAgIGNvbnN0IHNlY3NUb1doaXRlID0gMC41XHJcbiAgICAgICAgdGhpcy5ocFJlZG5lc3MgPSBNYXRoLm1heCgwLCB0aGlzLmhwUmVkbmVzcyAtIGRlbHRhIC8gMTAwMCAvIHNlY3NUb1doaXRlKVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZUluZm9CYXNlZE9uQWN0aXZlU2NlbmUoKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpY29uIG9mIHRoaXMuYnV5VG93ZXJJY29ucykge1xyXG4gICAgICAgICAgICBpY29uLnVwZGF0ZSh0aGlzLmxhc3RUaW1lLCBkZWx0YSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLmhwIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuZ2FtZU92ZXIoKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUluZm9CYXNlZE9uQWN0aXZlU2NlbmUoKSB7XHJcbiAgICAgICAgbGV0IGFjdGl2ZVNjZW5lID0gdGhpcy5tZXRhU2NlbmUuZ2V0QWN0aXZlU2NlbmUoKTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVNjZW5lKSB7IHJldHVybjsgfVxyXG4gICAgICAgIGlmIChhY3RpdmVTY2VuZSA9PSB0aGlzLmxhc3RBY3RpdmVTY2VuZSkgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgdGhpcy5sYXN0QWN0aXZlU2NlbmUgPSBhY3RpdmVTY2VuZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGV4dC5zZXRUZXh0KGBEZXB0aDogJHthY3RpdmVTY2VuZS5zY2VuZUxldmVsfWApXHJcblxyXG4gICAgICAgIGNvbnN0IHBhcmVudFNjZW5lcyA9IHRoaXMubWV0YVNjZW5lLmdldFBhcmVudFNjZW5lc1RvUm9vdCgpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucGFyZW50U2NlbmVzSW1hZ2VzW2ldO1xyXG4gICAgICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ29VcFRleHQuc2V0VmlzaWJsZShwYXJlbnRTY2VuZXMubGVuZ3RoID4gMClcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IHBhcmVudFNjZW5lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBsZXQgc2NlbmVJbmRleCA9IChwYXJlbnRTY2VuZXMubGVuZ3RoIC0gMSkgLSBpO1xyXG4gICAgICAgICAgICBsZXQgc2NhbGUgPSAwLjFcclxuICAgICAgICAgICAgY29uc3QgbWF4SW1hZ2VzTm9ybWFsU2NhbGVGaXQgPSA3O1xyXG4gICAgICAgICAgICBpZiAocGFyZW50U2NlbmVzLmxlbmd0aCA+IG1heEltYWdlc05vcm1hbFNjYWxlRml0KSB7XHJcbiAgICAgICAgICAgICAgICBzY2FsZSAvPSAoKHBhcmVudFNjZW5lcy5sZW5ndGggLyBtYXhJbWFnZXNOb3JtYWxTY2FsZUZpdCkgKiAxLjAyMikgLy8gTk9URTogRHJpZnRzLCBoZW5jZSByZS1zY2FsZSBieSB0aGlzIG1hZ2ljIG51bWJlciwgaWRrIHdoeTsgbm8gdGltZSB0byBmaWd1cmUgb3V0XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBuZXdCdXR0b24gPSB0aGlzLmFkZC5pbWFnZShcclxuICAgICAgICAgICAgICAgIFREX1NDRU5FX1dJRFRIICsgSFVEX1dJRFRIICogMS41LFxyXG4gICAgICAgICAgICAgICAgMTAwICsgc2NlbmVJbmRleCAqIHNjYWxlICogVERfU0NFTkVfSEVJR0hUICogMS4yLFxyXG4gICAgICAgICAgICAgICAgYHNuYXAtJHtwYXJlbnRTY2VuZXNbaV0uc2NlbmUua2V5fWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbmV3QnV0dG9uLnNjYWxlWCA9IHNjYWxlXHJcbiAgICAgICAgICAgIG5ld0J1dHRvbi5zY2FsZVkgPSBzY2FsZVxyXG4gICAgICAgICAgICBuZXdCdXR0b24uc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICAgICAgbmV3QnV0dG9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUocGFyZW50U2NlbmVzW2ldLnNjZW5lLmtleSwgZmFsc2UpLCB0aGlzLm1ldGFTY2VuZSlcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRTY2VuZXNJbWFnZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ld0J1dHRvblxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXREZXNjcmlwdGlvblRvd2VyKGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyOiBUb3dlciA9IG51bGwpIHtcclxuICAgICAgICBsZXQgbGV2ZWwgPSAxXHJcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiXHJcblxyXG4gICAgICAgIGlmICh0b3dlciA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gYCR7Y29uZmlnLm5hbWV9OiAke2NvbmZpZy5kZXNjcmlwdGlvbn1cXG5gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGV4dCA9IGBMZXZlbCAke3Rvd2VyLmxldmVsfSAke2NvbmZpZy5uYW1lfSB0b3dlci5cXG5gXHJcbiAgICAgICAgICAgIGxldmVsID0gdG93ZXIubGV2ZWxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRleHQgKz0gYERhbWFnZTogJHtjb25maWcuZGFtYWdlKGxldmVsKX0uXFxuYFxyXG4gICAgICAgIHRleHQgKz0gYEZpcmUgcmF0ZTogJHtjb25maWcuZmlyZXJhdGUobGV2ZWwpLzEwMDB9cy5cXG5gXHJcbiAgICAgICAgdGV4dCArPSBgUmFuZ2U6ICR7Y29uZmlnLnJhbmdlKGxldmVsKX0uXFxuYFxyXG5cclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uVGV4dC5zZXRUZXh0KHRleHQpXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVzY3JpcHRpb25FbmVteShlbmVteTogRW5lbXlCYXNlKSB7XHJcbiAgICAgICAgbGV0IHRleHQgPSBcIlwiXHJcbiAgICAgICAgaWYgKGVuZW15KSB7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYCR7ZW5lbXkuc3RhdHMuZGlzcGxheU5hbWV9XFxuYDtcclxuICAgICAgICAgICAgdGV4dCArPSBgSGVhbHRoOiAke2VuZW15LmhwfS8ke2VuZW15LnN0YXRzLmhwKDEpfVxcbmA7XHJcbiAgICAgICAgICAgIHRleHQgKz0gYEFybW91cjogJHtlbmVteS5zdGF0cy5kYW1hZ2V9XFxuYDtcclxuICAgICAgICAgICAgdGV4dCArPSBgU3BlZWQ6ICR7ZW5lbXkuc3BlZWQgKiA2MDAwMH1cXG5gO1xyXG4gICAgICAgICAgICBpZihlbmVteS5zdGF0cy5ibHVyYilcclxuICAgICAgICAgICAgICAgIHRleHQgKz0gYFxcbiR7ZW5lbXkuc3RhdHMuYmx1cmJ9XFxuYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvblRleHQuc2V0VGV4dCh0ZXh0KVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBCdXlUb3dlckljb24ge1xyXG4gICAgdG93ZXJOYW1lOiBzdHJpbmdcclxuICAgIHRvd2VyQ29uZmlnOiBUb3dlckNvbmZpZ1xyXG5cclxuICAgIHNwcml0ZUNvbnRhaW5lcjogUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxyXG4gICAgcHJpY2VUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG4gICAgaHVkU2NlbmU6IEh1ZFNjZW5lXHJcblxyXG4gICAgb3JpZ1g6IG51bWJlclxyXG4gICAgb3JpZ1k6IG51bWJlclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh1ZFNjZW5lOiBIdWRTY2VuZSwgeCwgeSwgY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5odWRTY2VuZSA9IGh1ZFNjZW5lXHJcbiAgICAgICAgdGhpcy5vcmlnWCA9IHhcclxuICAgICAgICB0aGlzLm9yaWdZID0geVxyXG4gICAgICAgIHRoaXMudG93ZXJOYW1lID0gY29uZmlnLm5hbWVcclxuICAgICAgICB0aGlzLnRvd2VyQ29uZmlnID0gY29uZmlnXHJcblxyXG4gICAgICAgIGxldCB0b3dlckJhc2UgPSBodWRTY2VuZS5hZGQuc3ByaXRlKDAsIDAsICd0b3dlcmJhc2VzJywgY29uZmlnLnNwcml0ZUJhc2UpO1xyXG4gICAgICAgIHRvd2VyQmFzZS5zZXRUaW50KGNvbmZpZy50aW50QmFzZSk7XHJcbiAgICAgICAgbGV0IHRvd2VyTWlkID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJtaWRzJywgY29uZmlnLnNwcml0ZU1pZCk7XHJcbiAgICAgICAgdG93ZXJNaWQuc2V0VGludChjb25maWcudGludE1pZCk7XHJcbiAgICAgICAgbGV0IHRvd2VyVG9wID0gaHVkU2NlbmUuYWRkLnNwcml0ZSgwLCAwLCAndG93ZXJ0b3BzJywgY29uZmlnLnNwcml0ZVRvcCk7XHJcbiAgICAgICAgdG93ZXJUb3Auc2V0VGludChjb25maWcudGludFRvcCk7XHJcblxyXG4gICAgICAgIGxldCB0b3dlclJhbmdlID0gaHVkU2NlbmUuYWRkLmNpcmNsZShcclxuICAgICAgICAgICAgMCwgMCwgY29uZmlnLnJhbmdlKDEpLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmNvbG91cixcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5hbHBoYVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdG93ZXJSYW5nZS5zZXRTdHJva2VTdHlsZShcclxuICAgICAgICAgICAgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRy5lZGdlV2lkdGgsXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZUNvbG91clxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdG93ZXJSYW5nZS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgdmFyIHNwcml0ZXMgPSBbXHJcbiAgICAgICAgICAgIHRvd2VyQmFzZSxcclxuICAgICAgICAgICAgdG93ZXJNaWQsXHJcbiAgICAgICAgICAgIHRvd2VyVG9wLFxyXG4gICAgICAgICAgICB0b3dlclJhbmdlLFxyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lciA9IGh1ZFNjZW5lLmFkZC5jb250YWluZXIoeCwgeSwgc3ByaXRlcylcclxuICAgICAgICB0aGlzLnNwcml0ZUNvbnRhaW5lci5nZXRBbGwoKVxyXG5cclxuICAgICAgICBjb25zdCBwYWQgPSAzXHJcbiAgICAgICAgdGhpcy5wcmljZVRleHQgPSBodWRTY2VuZS5hZGQudGV4dChcclxuICAgICAgICAgICAgeCArIDE1LCB5LCBcIlwiICsgdGhpcy50b3dlckNvbmZpZy5wcmljZSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldFNpemUoVElMRV9TSVpFLCBUSUxFX1NJWkUpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLnNldEludGVyYWN0aXZlKClcclxuICAgICAgICAvLyB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsICgpID0+IGNvbnNvbGUubG9nKFwiZm9vYmFyXCIpLCB0aGlzKTtcclxuICAgICAgICBodWRTY2VuZS5pbnB1dC5zZXREcmFnZ2FibGUodGhpcy5zcHJpdGVDb250YWluZXIpXHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlQ29udGFpbmVyLm9uKCdwb2ludGVyb3ZlcicsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5odWRTY2VuZS5zZXREZXNjcmlwdGlvblRvd2VyKGNvbmZpZylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQub24oJ2RyYWdzdGFydCcsIChwb2ludGVyLCBnYW1lT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnYW1lT2JqZWN0ICE9IHRoaXMuc3ByaXRlQ29udGFpbmVyKSB7IHJldHVybjsgfVxyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBtYWtlcyByYW5nZSBpbmRpY2F0b3IgdmlzaWJsZVxyXG4gICAgICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFszXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGUpLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBnYW1lT2JqZWN0Lmxpc3QuZm9yRWFjaCgoc3ByaXRlOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKSA9PiB7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIGh1ZFNjZW5lLmlucHV0Lm9uKCdkcmFnJywgZnVuY3Rpb24gKHBvaW50ZXIsIGdhbWVPYmplY3QsIGRyYWdYLCBkcmFnWSkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IGRyYWdYO1xyXG4gICAgICAgICAgICBnYW1lT2JqZWN0LnkgPSBkcmFnWTtcclxuXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgaHVkU2NlbmUuaW5wdXQub24oJ2RyYWdlbmQnLCBmdW5jdGlvbiAocG9pbnRlciwgZ2FtZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAoZ2FtZU9iamVjdCAhPSB0aGlzLnNwcml0ZUNvbnRhaW5lcikgeyByZXR1cm47IH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgbWFrZXMgcmFuZ2UgaW5kaWNhdG9yIHZpc2libGVcclxuICAgICAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbM10gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNoYXBlKS5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5odWRTY2VuZS5tZXRhU2NlbmUuYnVpbGRTb3VuZC5wbGF5KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzY2VuZSA9IGh1ZFNjZW5lLm1ldGFTY2VuZS5nZXRBY3RpdmVTY2VuZSgpXHJcbiAgICAgICAgICAgIHNjZW5lLnRvd2VyTWFuYWdlci5wbGFjZVRvd2VyKHBvaW50ZXIsIHRoaXMudG93ZXJOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGdhbWVPYmplY3QueCA9IHRoaXMub3JpZ1hcclxuICAgICAgICAgICAgZ2FtZU9iamVjdC55ID0gdGhpcy5vcmlnWVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0VGludCgpIHtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFswXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGhpcy50b3dlckNvbmZpZy50aW50TWlkKTtcclxuICAgICAgICAodGhpcy5zcHJpdGVDb250YWluZXIubGlzdFsyXSBhcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlKS5zZXRUaW50KHRoaXMudG93ZXJDb25maWcudGludFRvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2hvcEljb25UaW50KHRpbnQ6IG51bWJlcikge1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzBdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludEJhc2UpO1xyXG4gICAgICAgICh0aGlzLnNwcml0ZUNvbnRhaW5lci5saXN0WzFdIGFzIFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGUpLnNldFRpbnQodGludCAmIHRoaXMudG93ZXJDb25maWcudGludE1pZCk7XHJcbiAgICAgICAgKHRoaXMuc3ByaXRlQ29udGFpbmVyLmxpc3RbMl0gYXMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZSkuc2V0VGludCh0aW50ICYgdGhpcy50b3dlckNvbmZpZy50aW50VG9wKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTaG9wKCkge1xyXG4gICAgICAgIC8vIFVuY29tbWVudCB0byBwcmV2ZW50IG5lZ2F0aXZlIG1vbmV5OlxyXG4gICAgICAgIHRoaXMuaHVkU2NlbmUuaW5wdXQuc2V0RHJhZ2dhYmxlKHRoaXMuc3ByaXRlQ29udGFpbmVyLCBQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpXHJcblxyXG4gICAgICAgIGlmIChQbGF5ZXJJbmZvLm1vbmV5ID49IHRoaXMudG93ZXJDb25maWcucHJpY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmljZVRleHQuc2V0VGludCgweDAwZmYwMCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRUaW50KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcmljZVRleHQuc2V0VGludCgweGZmMDAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2hvcEljb25UaW50KDB4OTk1NTU1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2xkTW9uZXk6IGludGVnZXIgPSAwXHJcbiAgICB1cGRhdGUodGltZSwgZGVsdGEpIHtcclxuICAgICAgICBpZiAoUGxheWVySW5mby5tb25leSAhPSB0aGlzLm9sZE1vbmV5KSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2hvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLm9sZE1vbmV5ID0gUGxheWVySW5mby5tb25leTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHtUZXJyYWlufSBmcm9tIFwiLi4vdGVycmFpblwiXHJcbmltcG9ydCB7IEdhbWVPdmVyU2NlbmUgfSBmcm9tIFwiLi9nYW1lT3ZlclNjZW5lXCI7XHJcbmltcG9ydCB7U0NFTkVfVFJBTlNJVElPTl9NUywgVERTY2VuZX0gZnJvbSBcIi4vdGRTY2VuZVwiO1xyXG5pbXBvcnQge1REU2NlbmVDb25maWd9IGZyb20gXCIuL3RkU2NlbmVDb25maWdcIlxyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgICBhY3RpdmU6IHRydWUsXHJcbiAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAga2V5OiAnbWV0YVNjZW5lJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXRhU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG5cclxuICAgIHB1YmxpYyBzY2VuZXM6IFREU2NlbmVbXVxyXG4gICAgcHVibGljIGFjdGl2ZVNjZW5lOiBURFNjZW5lXHJcbiAgICBtYWluU291bmQ6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQ7XHJcbiAgICBidWlsZFNvdW5kOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICAgICAgICB0aGlzLnNjZW5lcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmltYXRpb25zKClcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVTY2VuZSA9IHRoaXMuYWRkU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnNjZW5lc1swXS5zY2VuZS5zZXRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoXCJodWRTY2VuZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWluU291bmQgPSB0aGlzLnNvdW5kLmFkZChcIm1haW5fbXVzaWNcIiwge1wibG9vcFwiOiB0cnVlLCBcInZvbHVtZVwiOiAwLjF9KTtcclxuICAgICAgICB0aGlzLm1haW5Tb3VuZC5wbGF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRTb3VuZCA9IHRoaXMuc291bmQuYWRkKCdidWlsZF9zb3VuZCcsIHsgJ2xvb3AnOiBmYWxzZSwgJ3ZvbHVtZSc6IDF9KTtcclxuICAgIH1cclxuXHJcbiAgLy8gQ3JlYXRlcyBuZXcgU2NlbmUsIGVuYWJsZXMgaXQsIGFuZCBzZXRzIGl0IGludmlzaWJsZVxyXG4gICAgcHVibGljIGFkZFNjZW5lKHBhcmVudFNjZW5lS2V5Pzogc3RyaW5nKTogVERTY2VuZSB7XHJcbiAgICAgICAgbGV0IHBhcmVudFNjZW5lID0gdGhpcy5nZXRTY2VuZUJ5S2V5KHBhcmVudFNjZW5lS2V5KVxyXG4gICAgICAgIGxldCBzY2VuZUxldmVsID0gKHBhcmVudFNjZW5lPy5zY2VuZUxldmVsID8/IC0xKSArIDE7XHJcblxyXG4gICAgICAgIGxldCBzY2VuZUluZGV4ID0gdGhpcy5zY2VuZXMubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IHNjZW5lS2V5ID0gYHRkU2NlbmUke3NjZW5lSW5kZXh9YFxyXG5cclxuICAgICAgICBsZXQgbmV3U2NlbmUgPSBuZXcgVERTY2VuZShcclxuICAgICAgICAgICAgbmV3IFREU2NlbmVDb25maWcobmV3IFRlcnJhaW4oMTAsIDgpLCBzY2VuZUxldmVsLCBwYXJlbnRTY2VuZUtleSwgc2NlbmVLZXkpLFxyXG4gICAgICAgICAgICB0aGlzLFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKFxyXG4gICAgICAgICAgICBzY2VuZUtleSxcclxuICAgICAgICAgICAgbmV3U2NlbmUsXHJcbiAgICAgICAgICAgIHRydWVcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzLnB1c2gobmV3U2NlbmUpXHJcbiAgICAgICAgbmV3U2NlbmUuc2NlbmUuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2NlbmUpIHRoaXMuc2NlbmUuYnJpbmdUb1RvcCh0aGlzLmFjdGl2ZVNjZW5lLnNjZW5lLmtleSk7XHJcbiAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3U2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjZW5lQnlLZXkoa2V5Pzogc3RyaW5nKTogVERTY2VuZSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgaWYgKGtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY2VuZS5nZXQoa2V5KSBhcyBURFNjZW5lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBtYWtlcyBjdXJyZW50IHNjZW5lIGludmlzaWJsZSwgbWFrZXMgbmV3IHNjZW5lIHZpc2libGU7IGRvZXNuJ3QgY2hhbmdlIGFjdGl2bmVzc1xyXG4gICAgcHVibGljIHN3aXRjaFRvU2NlbmUobmV3U2NlbmVLZXk6IHN0cmluZywgZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGkgPSAwLCBqID0gMCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNldElzRm9yZWdyb3VuZChmYWxzZSwgZ29pbmdJbnNpZGUsIGksIGopO1xyXG4gICAgICAgIGxldCBuZXdTY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShuZXdTY2VuZUtleSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGBTd2l0Y2hpbmcgZnJvbSAke3RoaXMuYWN0aXZlU2NlbmUuc2NlbmUua2V5fSAocGFyZW50ICR7dGhpcy5hY3RpdmVTY2VuZS5zY2VuZVBhcmVudEtleX0pIHRvYFxyXG4gICAgICAgICAgICArIGAgJHtuZXdTY2VuZS5zY2VuZS5rZXl9IChwYXJlbnQgJHtuZXdTY2VuZS5zY2VuZVBhcmVudEtleX0pYFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgbmV3U2NlbmUudGltZS5hZGRFdmVudCh7XHJcbiAgICAgICAgICAgIGRlbGF5OiBTQ0VORV9UUkFOU0lUSU9OX01TLFxyXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmU/LnNjZW5lLnNldFZpc2libGUoZmFsc2UpXHJcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zY2VuZS5zZXRWaXNpYmxlKHRydWUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVNjZW5lID0gbmV3U2NlbmVcclxuICAgICAgICAgICAgICAgIG5ld1NjZW5lLnNldElzRm9yZWdyb3VuZCh0cnVlLCBnb2luZ0luc2lkZSwgaSwgaik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmJyaW5nVG9Ub3AobmV3U2NlbmVLZXkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5icmluZ1RvVG9wKCdodWRTY2VuZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gMS4wNTk0NjMwOTQzNiB+IDJeKDEvMTIpLCBpLmUuIG9uZSBzZW1pdG9uZVxyXG4gICAgICAgIHRoaXMuc291bmQuc2V0UmF0ZSgxIC8gKE1hdGgucG93KDEuMDU5NDYzMDk0MzYsIG5ld1NjZW5lLnNjZW5lTGV2ZWwpKSlcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc0dhbWVPdmVyKXtcclxuICAgICAgICAgICAgdGhpcy5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGdhbWVPdmVyU2NlbmUgPSB0aGlzLnNjZW5lLmFkZChcImdhbWVPdmVyU2NlbmVcIiwgbmV3IEdhbWVPdmVyU2NlbmUodGhpcykpXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuc3RhcnQoZ2FtZU92ZXJTY2VuZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlU2NlbmUuc2NlbmUucGF1c2UoKVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhdXNlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKSB7XHJcbiAgICAgICAgLy8gbG9hZCB0aGUgZ2FtZSBhc3NldHNcclxuICAgICAgICB0aGlzLmxvYWQuc2V0QmFzZVVSTCgnYXNzZXRzLycpXHJcblxyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnd2Vha0VuZW15JywgJ2VuZW15LnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmYXN0RW5lbXknLCAnZW5lbXlfZmFzdC5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYXJtb3VyZWRFbmVteScsICdlbmVteV9hcm1vcmVkLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdzcGxpdHRlckJpZ0VuZW15JywgJ2VuZW15X3NwbGl0X2JpZy5wbmcnLCB7ZnJhbWVXaWR0aDogNDgsIGZyYW1lSGVpZ2h0OiA0OH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnc3BsaXR0ZXJTbWFsbEVuZW15JywgJ2VuZW15X3NwbGl0X3NtYWxsLnBuZycsIHtmcmFtZVdpZHRoOiA0OCwgZnJhbWVIZWlnaHQ6IDQ4fSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdmYXRFbmVteScsICdlbmVteV9jaG9uay5wbmcnLCB7ZnJhbWVXaWR0aDogNTYsIGZyYW1lSGVpZ2h0OiA1Nn0pO1xyXG5cclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2J1bGxldCcsICdidWxsZXQucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0aWxlc2V0JyxcclxuICAgICAgICAgICAgJ3RpbGVzZXQucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ3Rvd2VydG9wcycsXHJcbiAgICAgICAgICAgICd0b3dlcnRvcC5wbmcnLFxyXG4gICAgICAgICAgICB7ZnJhbWVXaWR0aDogNjQsIGZyYW1lSGVpZ2h0OiA2NH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCd0b3dlcm1pZHMnLFxyXG4gICAgICAgICAgICAndG93ZXJtaWQucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgndG93ZXJiYXNlcycsXHJcbiAgICAgICAgICAgICd0b3dlcmJhc2UucG5nJyxcclxuICAgICAgICAgICAge2ZyYW1lV2lkdGg6IDY0LCBmcmFtZUhlaWdodDogNjR9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgncGFydGljbGVfcmVkJywgJ3BhcnRpY2xlX3JlZC5wbmcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0YWxGcm9tJywgJ3BvcnRhbF9mcm9tLnBuZycsIHtmcmFtZVdpZHRoOiA0MCwgZnJhbWVIZWlnaHQ6IDQwfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdwb3J0YWxUbycsICdwb3J0YWxfdG8ucG5nJywge2ZyYW1lV2lkdGg6IDQwLCBmcmFtZUhlaWdodDogNDB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKFwibWFpbl9tdXNpY1wiLCBcImdhbWVqYW1fTEQ0OC5vZ2dcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkLmF1ZGlvKCdidWlsZF9zb3VuZCcsICdidWlsZC53YXYnKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBbmltYXRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbXMuY3JlYXRlKHtcclxuICAgICAgICAgICAga2V5OiAnd2Vha0VuZW15X3dhbGsnLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3dlYWtFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2Zhc3RFbmVteV93YWxrJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdmYXN0RW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdmYXRFbmVteV93YWxrJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdmYXRFbmVteScsIHtzdGFydDogMCwgZW5kOiA5fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ2FybW91cmVkRW5lbXlfd2FsaycsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnYXJtb3VyZWRFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3NwbGl0dGVyQmlnRW5lbXlfd2FsaycsXHJcbiAgICAgICAgICAgIGZyYW1lczogdGhpcy5hbmltcy5nZW5lcmF0ZUZyYW1lTnVtYmVycygnc3BsaXR0ZXJCaWdFbmVteScsIHtzdGFydDogMCwgZW5kOiA3fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3NwbGl0dGVyU21hbGxFbmVteV93YWxrJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdzcGxpdHRlclNtYWxsRW5lbXknLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdwb3J0YWxGcm9tX3NwaW4nLFxyXG4gICAgICAgICAgICBmcmFtZXM6IHRoaXMuYW5pbXMuZ2VuZXJhdGVGcmFtZU51bWJlcnMoJ3BvcnRhbEZyb20nLCB7c3RhcnQ6IDAsIGVuZDogN30pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDEwLFxyXG4gICAgICAgICAgICByZXBlYXQ6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5hbmltcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBrZXk6ICdwb3J0YWxUb19zcGluJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCdwb3J0YWxUbycsIHtzdGFydDogMCwgZW5kOiA3fSksXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTAsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFuaW1zLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGtleTogJ3Rvd2VyTWlkc19zcGluJyxcclxuICAgICAgICAgICAgZnJhbWVzOiB0aGlzLmFuaW1zLmdlbmVyYXRlRnJhbWVOdW1iZXJzKCd0b3dlcm1pZHMnLCB7c3RhcnQ6IDAsIGVuZDogMX0pLFxyXG4gICAgICAgICAgICBmcmFtZVJhdGU6IDUsXHJcbiAgICAgICAgICAgIHJlcGVhdDogLTFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RpdmVTY2VuZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJlbnRTY2VuZXNUb1Jvb3QoKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudFNjZW5lczogVERTY2VuZVtdID0gW11cclxuICAgICAgICBsZXQgc2NlbmUgPSB0aGlzLmdldEFjdGl2ZVNjZW5lKCk7XHJcblxyXG4gICAgICAgIHdoaWxlIChzY2VuZT8uc2NlbmVQYXJlbnRLZXkpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IHRoaXMuZ2V0U2NlbmVCeUtleShzY2VuZS5zY2VuZVBhcmVudEtleSlcclxuICAgICAgICAgICAgcGFyZW50U2NlbmVzLnB1c2gocGFyZW50KTtcclxuICAgICAgICAgICAgc2NlbmUgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGFyZW50U2NlbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvb3RURFNjZW5lKCkge1xyXG4gICAgICAgIGxldCBzY2VuZSA9IHRoaXMuZ2V0QWN0aXZlU2NlbmUoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHNjZW5lPy5zY2VuZVBhcmVudEtleSkge1xyXG4gICAgICAgICAgICBzY2VuZSA9IHRoaXMuZ2V0U2NlbmVCeUtleShzY2VuZS5zY2VuZVBhcmVudEtleSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzY2VuZVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgZW5lbSBmcm9tIFwiLi4vZW5lbXlcIjtcclxuaW1wb3J0IHtUb3dlcn0gZnJvbSBcIi4uL3Rvd2Vyc1wiO1xyXG5pbXBvcnQge0J1bGxldH0gZnJvbSBcIi4uL2J1bGxldFwiO1xyXG5pbXBvcnQge1dhdmVNYW5hZ2VyfSBmcm9tIFwiLi4vd2F2ZXNcIlxyXG5pbXBvcnQge1Rvd2VyTWFuYWdlcn0gZnJvbSBcIi4uL3Rvd2VyTWFuYWdlclwiXHJcbmltcG9ydCB7TUFYX0hFSUdIVCwgTUFYX1dJRFRILCBUZXJyYWluLCBUSUxFX1NJWkV9IGZyb20gXCIuLi90ZXJyYWluXCI7XHJcbmltcG9ydCB7VERTY2VuZUNvbmZpZ30gZnJvbSBcIi4vdGRTY2VuZUNvbmZpZ1wiO1xyXG5pbXBvcnQge01ldGFTY2VuZX0gZnJvbSBcIi4vbWV0YVNjZW5lXCI7XHJcbmltcG9ydCB7SFVEX1dJRFRIfSBmcm9tIFwiLi9odWRTY2VuZVwiO1xyXG5pbXBvcnQge1VVSUR9IGZyb20gXCIuLi91dGlscy9ndWlkXCI7XHJcbmltcG9ydCB7SGVhbHRoQmFyfSBmcm9tIFwiLi4vaGVhbHRoQmFyXCI7XHJcbmltcG9ydCB7UGxheWVySW5mb30gZnJvbSBcIi4uL3BsYXllckluZm9cIjtcclxuaW1wb3J0IHtFTkVNWV9DT05GSUdTfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0NFTkVfVFJBTlNJVElPTl9NUyA9IDUwMFxyXG5leHBvcnQgY29uc3QgVERfU0NFTkVfV0lEVEggPSBNQVhfV0lEVEggKiBUSUxFX1NJWkVcclxuZXhwb3J0IGNvbnN0IFREX1NDRU5FX0hFSUdIVCA9IE1BWF9IRUlHSFQgKiBUSUxFX1NJWkVcclxuXHJcbmV4cG9ydCBjbGFzcyBURFNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHBhdGg6IFBoYXNlci5DdXJ2ZXMuUGF0aFxyXG4gICAgYWxsRW5lbWllczogeyBba2V5OiBzdHJpbmddOiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuR3JvdXAgfSA9IHt9XHJcbiAgICBuZXh0RW5lbXk6IG51bWJlciA9IDBcclxuICAgIG1ldGFTY2VuZTogTWV0YVNjZW5lXHJcblxyXG4gICAgdG93ZXJzOiBQaGFzZXIuR2FtZU9iamVjdHMuR3JvdXBcclxuICAgIGJ1bGxldHM6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Hcm91cFxyXG5cclxuICAgIHRlcnJhaW46IFRlcnJhaW5cclxuXHJcbiAgICB3YXZlTWFuYWdlcjogV2F2ZU1hbmFnZXJcclxuICAgIHRvd2VyTWFuYWdlcjogVG93ZXJNYW5hZ2VyXHJcblxyXG4gICAgc2NlbmVQYXJlbnRLZXk6IHN0cmluZztcclxuICAgIHNjZW5lTGV2ZWw6IG51bWJlcjsgLy8gTGV2ZWwgb2YgcmVjdXJzaW9uXHJcblxyXG4gICAgcHJpdmF0ZSB0b3dlclBhcmVudDogVG93ZXIgIC8vIHRvIHdoYXQgdG93ZXIgZG9lcyB0aGlzIHNjZW5lIGNvcnJlc3BvbmQ/IHVuZGVmaW5lZCBmb3Igcm9vdFxyXG4gICAgcHJpdmF0ZSBlbmRIZWFsdGhCYXI6IEhlYWx0aEJhclxyXG5cclxuICAgIC8vIGhhcHBlbnMgd2hlbiBhbiBlbmVteSByZWFjaGVzIHRoZSBlbmRcclxuICAgIGVuZW15RW5kQ2FsbGJhY2s6IChudW1iZXIpID0+IHZvaWRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFREU2NlbmVDb25maWcsIG1ldGFTY2VuZTogTWV0YVNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIoe1xyXG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAga2V5OiBjb25maWcuc2NlbmVLZXksIC8vYHRkU2NlbmUke1VVSUQudXVpZHY0KCl9YCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy50ZXJyYWluID0gY29uZmlnLnRlcnJhaW47XHJcbiAgICAgICAgdGhpcy5tZXRhU2NlbmUgPSBtZXRhU2NlbmU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVMZXZlbCA9IGNvbmZpZy5zY2VuZUxldmVsO1xyXG4gICAgICAgIHRoaXMuc2NlbmVQYXJlbnRLZXkgPSBjb25maWcuc2NlbmVQYXJlbnRLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpIHtcclxuICAgICAgICAvLyB0aGlzIGdyYXBoaWNzIGVsZW1lbnQgaXMgb25seSBmb3IgdmlzdWFsaXphdGlvbixcclxuICAgICAgICAvLyBpdHMgbm90IHJlbGF0ZWQgdG8gb3VyIHBhdGhcclxuICAgICAgICB2YXIgZ3JhcGhpY3MgPSB0aGlzLmFkZC5ncmFwaGljcygpO1xyXG5cclxuICAgICAgICB0aGlzLnRlcnJhaW4uY3JlYXRlKHRoaXMpXHJcbiAgICAgICAgdGhpcy50ZXJyYWluLmRyYXcoZ3JhcGhpY3MpXHJcblxyXG4gICAgICAgIC8vIHRoZSBwYXRoIGZvciBvdXIgZW5lbWllc1xyXG4gICAgICAgIC8vIHBhcmFtZXRlcnMgYXJlIHRoZSBzdGFydCB4IGFuZCB5IG9mIG91ciBwYXRoXHJcbiAgICAgICAgdGhpcy53YXZlTWFuYWdlciA9IG5ldyBXYXZlTWFuYWdlcih0aGlzKTtcclxuICAgICAgICB0aGlzLnRvd2VyTWFuYWdlciA9IG5ldyBUb3dlck1hbmFnZXIodGhpcyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVuZW15IG9mIEVORU1ZX0NPTkZJR1MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxFbmVtaWVzW2VuZW15Lm5hbWVdID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7Y2xhc3NUeXBlOiBlbmVteS5jbGFzcywgcnVuQ2hpbGRVcGRhdGU6IHRydWV9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJzID0gdGhpcy5hZGQuZ3JvdXAoe2NsYXNzVHlwZTogVG93ZXIsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXQub24oJ3BvaW50ZXJkb3duJywgdGhpcy5vbkNsaWNrLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWxsZXRzID0gdGhpcy5waHlzaWNzLmFkZC5ncm91cCh7Y2xhc3NUeXBlOiBCdWxsZXQsIHJ1bkNoaWxkVXBkYXRlOiB0cnVlfSk7XHJcbiAgICAgICAgZm9yIChsZXQgZU5hbWUgaW4gdGhpcy5hbGxFbmVtaWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGh5c2ljcy5hZGQub3ZlcmxhcCh0aGlzLmFsbEVuZW1pZXNbZU5hbWVdLCB0aGlzLmJ1bGxldHMsIHRoaXMuZGFtYWdlRW5lbXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53YXZlTWFuYWdlciA9IG5ldyBXYXZlTWFuYWdlcih0aGlzKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FtID0gdGhpcy5jYW1lcmFzLm1haW5cclxuICAgICAgICBjYW0uc2Nyb2xsWCA9IC1IVURfV0lEVEhcclxuICAgIH1cclxuXHJcbiAgICAvLyBPbmx5IGZvcmVncm91bmQgc2NlbmUgaGFzIGlucHV0IGVuYWJsZWQgJiBpcyB2aXNpYmxlOyBhbGwgc2NlbmVzIGFyZSBiZWluZyB1cGRhdGVkXHJcbiAgICBwdWJsaWMgc2V0SXNGb3JlZ3JvdW5kKGlzRm9yZWdyb3VuZFNjZW5lLCBnb2luZ0luc2lkZTogYm9vbGVhbiwgaSA9IG51bGwsIGogPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5lbmFibGVkID0gaXNGb3JlZ3JvdW5kU2NlbmU7XHJcblxyXG4gICAgICAgIGlmICghaXNGb3JlZ3JvdW5kU2NlbmUpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWRlT3V0KGdvaW5nSW5zaWRlLCBpLCBqKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZUluKGdvaW5nSW5zaWRlLCBpLCBqKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmFkZUluKGdvaW5nSW5zaWRlOiBib29sZWFuLCBpLCBqKSB7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4ucGFuKHRoaXMudGVycmFpbi53ICogVElMRV9TSVpFIC8gMiwgdGhpcy50ZXJyYWluLmggKiBUSUxFX1NJWkUgLyAyLCAxKVxyXG4gICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnNldFpvb20oKGdvaW5nSW5zaWRlID8gMSAvIDMgOiAzKSlcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uZmFkZUluKFNDRU5FX1RSQU5TSVRJT05fTVMsIDAsIDAsIDApXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uem9vbVRvKDEsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhZGVPdXQoZ29pbmdJbnNpZGU6IGJvb2xlYW4sIGksIGopIHtcclxuICAgICAgICAvLyBUYWtlIGEgc2NyZWVuc2hvdFxyXG4gICAgICAgIHRoaXMuZ2FtZS5yZW5kZXJlci5zbmFwc2hvdEFyZWEoXHJcbiAgICAgICAgICAgIC10aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxYLFxyXG4gICAgICAgICAgICAtdGhpcy5jYW1lcmFzLm1haW4uc2Nyb2xsWSxcclxuICAgICAgICAgICAgVERfU0NFTkVfV0lEVEgsXHJcbiAgICAgICAgICAgIFREX1NDRU5FX0hFSUdIVCxcclxuICAgICAgICAgICAgKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwS2V5ID0gYHNuYXAtJHt0aGlzLnNjZW5lLmtleX1gXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlcy5leGlzdHMoc25hcEtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzLnJlbW92ZShzbmFwS2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dHVyZXMuYWRkSW1hZ2Uoc25hcEtleSwgaW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2luZzogc2hvdyB0aGUgc2NyZWVuc2hvdFxyXG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWFnZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmFzLm1haW4uZmFkZU91dChTQ0VORV9UUkFOU0lUSU9OX01TLCAwLCAwLCAwKVxyXG4gICAgICAgIGlmIChnb2luZ0luc2lkZSkge1xyXG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy50ZXJyYWluLmZyb21HcmlkUG9zKGksIGopXHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhcy5tYWluLnpvb21UbygzLCBTQ0VORV9UUkFOU0lUSU9OX01TLCBcIkxpbmVhclwiKVxyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi5wYW4oeCwgeSwgU0NFTkVfVFJBTlNJVElPTl9NUywgXCJMaW5lYXJcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbWVyYXMubWFpbi56b29tVG8oMSAvIDMsIFNDRU5FX1RSQU5TSVRJT05fTVMsIFwiTGluZWFyXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhbWFnZUVuZW15KGVuZW15LCBidWxsZXQpIHtcclxuICAgICAgICAvLyBvbmx5IGlmIGJvdGggZW5lbXkgYW5kIGJ1bGxldCBhcmUgYWxpdmVcclxuICAgICAgICBpZiAoZW5lbXkuYWN0aXZlID09PSB0cnVlICYmIGJ1bGxldC5hY3RpdmUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRoZSBidWxsZXQgcmlnaHQgYXdheVxyXG4gICAgICAgICAgICBidWxsZXQuaGl0KClcclxuXHJcbiAgICAgICAgICAgIC8vIGRlY3JlYXNlIHRoZSBlbmVteSBocCB3aXRoIGJ1bGxldCBkYW1hZ2VcclxuICAgICAgICAgICAgZW5lbXkucmVjZWl2ZURhbWFnZShidWxsZXQuZGFtYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWVOdW1iZXIgPSAwO1xyXG5cclxuICAgIHVwZGF0ZShfLCBkZWx0YSkge1xyXG4gICAgICAgIGRlbHRhICo9IFBsYXllckluZm8udGltZVNjYWxlO1xyXG5cclxuICAgICAgICB0aGlzLmZyYW1lTnVtYmVyKys7XHJcbiAgICAgICAgdGhpcy53YXZlTWFuYWdlci51cGRhdGUoZGVsdGEpXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lTnVtYmVyICUgNjAgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgVXBkYXRlIHRoOiAke3RoaXMuc2NlbmUua2V5fSBlOiAke3RoaXMuaW5wdXQuZW5hYmxlZH0gfCBsOiAke3RoaXMuc2NlbmVMZXZlbH0gfCBwOiAke3RoaXMuc2NlbmVQYXJlbnQ/LnNjZW5lLmtleX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbmRIZWFsdGhCYXIpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmRIZWFsdGhCYXIuaGVhbHRoID0gdGhpcy50b3dlclBhcmVudC5oZWFsdGhCYXIuaGVhbHRoXHJcbiAgICAgICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQnVsbGV0KHgsIHksIGFuZ2xlLCBkYW1hZ2UsIHJhbmdlLCBidWxsZXRTcGVlZE1vZCkge1xyXG4gICAgICAgIHZhciBidWxsZXQgPSB0aGlzLmJ1bGxldHMuZ2V0KCk7XHJcbiAgICAgICAgaWYgKGJ1bGxldCkge1xyXG4gICAgICAgICAgICBidWxsZXQuZmlyZSh4LCB5LCBhbmdsZSwgZGFtYWdlLCByYW5nZSwgYnVsbGV0U3BlZWRNb2QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b0dyaWRQb3MoeCwgeSkge1xyXG4gICAgICAgIGxldCBpID0gTWF0aC5mbG9vcigoeCArIHRoaXMuY2FtZXJhcy5tYWluLnNjcm9sbFgpIC8gVElMRV9TSVpFKTtcclxuICAgICAgICBsZXQgaiA9IE1hdGguZmxvb3IoKHkgKyB0aGlzLmNhbWVyYXMubWFpbi5zY3JvbGxZKSAvIFRJTEVfU0laRSk7XHJcbiAgICAgICAgcmV0dXJuIFtpLCBqXVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2socG9pbnRlcjogUGhhc2VyLklucHV0LlBvaW50ZXIpIHtcclxuICAgICAgICB0aGlzLmlucHV0LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYG9uY2xpY2sgb24gc2NlbmUgJHt0aGlzLnNjZW5lLmtleX1gKVxyXG4gICAgICAgIGNvbnN0IFtpLCBqXSA9IHRoaXMudG9HcmlkUG9zKHBvaW50ZXIueCwgcG9pbnRlci55KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBjbGlja2VkIGNvb3JkaW5hdGVzOiAke2l9ICR7an1gKVxyXG4gICAgICAgIGxldCBwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyID0gdGhpcy50ZXJyYWluLnRyeUdldEV4aXN0aW5nVG93ZXIoaSwgaik7XHJcbiAgICAgICAgaWYgKHBvdGVudGlhbEV4aXN0aW5nVG93ZXIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzd2l0Y2hpbmcgdG8gYW4gZXhpc3RpbmcgdG93ZXJcIilcclxuICAgICAgICAgICAgdGhpcy5tZXRhU2NlbmUuc3dpdGNoVG9TY2VuZShwb3RlbnRpYWxFeGlzdGluZ1Rvd2VyLmdldElubmVyVG93ZXJTY2VuZUtleSgpLCB0cnVlLCBpLCBqKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZW5kID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgaWYgKGkgPT09IGVuZFswXSAmJiBqID09PSBlbmRbMV0gJiYgdGhpcy5zY2VuZVBhcmVudEtleSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN3aXRjaGluZyB2aWEgZW5kXCIpXHJcbiAgICAgICAgICAgIHRoaXMubWV0YVNjZW5lLnN3aXRjaFRvU2NlbmUodGhpcy5zY2VuZVBhcmVudEtleSwgZmFsc2UsIGksIGopXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW5lbXlSZWFjaGVkRW5kKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5lbmVteUVuZENhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgIH1cclxuXHJcbiAgICBzZXRUb3dlclBhcmVudChwYXJlbnQ6IFRvd2VyKSB7XHJcbiAgICAgICAgdGhpcy50b3dlclBhcmVudCA9IHBhcmVudFxyXG4gICAgICAgIHRoaXMuZW5kSGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih0aGlzKVxyXG5cclxuICAgICAgICBsZXQgW2ksIGpdID0gdGhpcy50ZXJyYWluLnBhdGhUaWxlc1t0aGlzLnRlcnJhaW4ucGF0aFRpbGVzLmxlbmd0aCAtIDFdXHJcbiAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMudGVycmFpbi5mcm9tR3JpZFBvcyhpLCBqKVxyXG5cclxuICAgICAgICB0aGlzLmVuZEhlYWx0aEJhci5tYWtlKHgsIHksIFRJTEVfU0laRSAtIDE0LCAwLjUpXHJcbiAgICAgICAgdGhpcy5hZGQuY29udGFpbmVyKDAsIDAsIHRoaXMuZW5kSGVhbHRoQmFyKVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRvd2VyUGFyZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2VyUGFyZW50XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBUZXJyYWluIH0gZnJvbSBcIi4uL3RlcnJhaW5cIjtcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3RkU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBURFNjZW5lQ29uZmlnIHtcclxuICAgIHRlcnJhaW46IFRlcnJhaW47XHJcbiAgICBzY2VuZUxldmVsOiBudW1iZXI7IC8vIExldmVsIG9mIHJlY3Vyc2lvbiBcclxuICAgIHNjZW5lUGFyZW50S2V5OiBzdHJpbmc7XHJcbiAgICBzY2VuZUtleTogc3RyaW5nXHJcblxyXG4gICAgY29uc3RydWN0b3IodGVycmFpbjogVGVycmFpbiwgc2NlbmVMZXZlbDogbnVtYmVyLCBzY2VuZVBhcmVudEtleTogc3RyaW5nLCBzY2VuZUtleTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLnRlcnJhaW4gPSB0ZXJyYWluO1xyXG5cclxuICAgICAgICB0aGlzLnNjZW5lTGV2ZWwgPSBzY2VuZUxldmVsO1xyXG4gICAgICAgIHRoaXMuc2NlbmVQYXJlbnRLZXkgPSBzY2VuZVBhcmVudEtleTtcclxuICAgICAgICB0aGlzLnNjZW5lS2V5ID0gc2NlbmVLZXlcclxuICAgIH1cclxufSIsImltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCJcclxuaW1wb3J0IHsgVERTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy90ZFNjZW5lXCJcclxuaW1wb3J0IHsgVG93ZXIgfSBmcm9tIFwiLi90b3dlcnNcIlxyXG5cclxuZXhwb3J0IGVudW0gVGlsZVR5cGUge1xyXG4gICAgU3RhcnQsIFBhdGgsIEVuZCwgT2NjdXBpZWQsIEJ1aWxkYWJsZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVElMRV9TSVpFID0gNjRcclxuZXhwb3J0IGNvbnN0IExFVkVMX09GRlNFVCA9IDE1ICogVElMRV9TSVpFXHJcbmV4cG9ydCBjb25zdCBNQVhfV0lEVEggPSAxMFxyXG5leHBvcnQgY29uc3QgTUFYX0hFSUdIVCA9IDhcclxuXHJcbmNvbnN0IE5fVElMRVNFVF9TUFJJVEVTID0gMTAgIC8vIGhvdyBtYW55IHNwcml0ZXMgYXJlIGluIHRoZSB0aWxlc2V0P1xyXG5cclxudHlwZSBHcmlkUG9zID0gW2ludGVnZXIsIGludGVnZXJdXHJcblxyXG5leHBvcnQgY2xhc3MgVGVycmFpbiB7XHJcbiAgICB0b3dlcnM6IFRvd2VyW11bXVxyXG4gICAgdGlsZXM6IFRpbGVUeXBlW11bXVxyXG5cclxuICAgIHRpbGVTcHJpdGVzOiBpbnRlZ2VyW11bXVxyXG5cclxuICAgIHBhdGg6IFBoYXNlci5DdXJ2ZXMuUGF0aCAgLy8gVGhlIFBoYXNlciBwYXRoIChmb3IgZW5lbXkgbW92ZW1lbnQpXHJcbiAgICBwYXRoVGlsZXM6IEdyaWRQb3NbXSAgLy8gVGhlIHNlcXVlbmNlIG9mIHRpbGVzIG1ha2luZyB1cCB0aGUgcGF0aFxyXG5cclxuICAgIHRpbnQ6IGludGVnZXIgLy8gY29sb3IgYXMgYSAyNC1iaXQgaW50XHJcblxyXG4gICAgdzogbnVtYmVyXHJcbiAgICBoOiBudW1iZXJcclxuXHJcbiAgICBwb3J0YWxGcm9tOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlXHJcbiAgICBwb3J0YWxUbzogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxyXG5cclxuICAgIC8vIHRvZG86IGdlbmVyYXRlL2xvYWQgdGVycmFpblxyXG4gICAgY29uc3RydWN0b3Iod2lkdGg6IGludGVnZXIsIGhlaWdodDogaW50ZWdlcikge1xyXG4gICAgICAgIHRoaXMudyA9IHdpZHRoXHJcbiAgICAgICAgdGhpcy5oID0gaGVpZ2h0XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZSgpXHJcbiAgICAgICAgdGhpcy5zZXR1cFNwcml0ZXMoc2NlbmUpXHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJzID0gaW5pdDJEQXJyYXk8VG93ZXI+KHRoaXMudywgdGhpcy5oLCBudWxsKVxyXG4gICAgfVxyXG5cclxuICAgIHNldHVwU3ByaXRlcyhzY2VuZTogVERTY2VuZSkge1xyXG4gICAgICAgIHRoaXMudGlsZVNwcml0ZXMgPSBpbml0MkRBcnJheSh0aGlzLncsIHRoaXMuaCwgVGlsZVR5cGUuQnVpbGRhYmxlKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5oOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaV1bal0gPSByYW5kb21GcmVlU3ByaXRlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZ2V0RGlyID0gKHBpOiBpbnRlZ2VyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucGF0aFRpbGVzLCBwaSlcclxuICAgICAgICAgICAgbGV0IFtpMSwgajFdID0gdGhpcy5wYXRoVGlsZXNbcGldXHJcbiAgICAgICAgICAgIGxldCBbaTIsIGoyXSA9IHRoaXMucGF0aFRpbGVzW3BpICsgMV1cclxuXHJcbiAgICAgICAgICAgIGxldCBbZGksIGRqXSA9IFtpMiAtIGkxLCBqMiAtIGoxXVxyXG4gICAgICAgICAgICBpZiAoZGkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDBcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaiA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDJcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkaiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJnZXREaXIgZmFpbGVkXCIpXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBwaSA9IDA7IHBpIDwgdGhpcy5wYXRoVGlsZXMubGVuZ3RoOyBwaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBbaTEsIGoxXSA9IHRoaXMucGF0aFRpbGVzW3BpXVxyXG5cclxuICAgICAgICAgICAgaWYgKHBpID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IDZcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwaSA9PSB0aGlzLnBhdGhUaWxlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA3XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZDEgPSAoZ2V0RGlyKHBpIC0gMSkgKyAyKSAlIDRcclxuICAgICAgICAgICAgICAgIGxldCBkMiA9IGdldERpcihwaSlcclxuICAgICAgICAgICAgICAgIGlmIChkMSA+IGQyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2QxLCBkMl0gPSBbZDIsIGQxXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gT3JkZXIgb2Ygc3ByaXRlcyAoMDIgbWVhbmluZyBkMT0wLCBkMj0yKTpcclxuICAgICAgICAgICAgICAgIC8vIDAxIDAyIDAzIDEyIDEzIDIzXHJcbiAgICAgICAgICAgICAgICBpZiAoZDEgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGlsZVNwcml0ZXNbaTFdW2oxXSA9IGQyIC0gMVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkMSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aWxlU3ByaXRlc1tpMV1bajFdID0gZDIgKyAxXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGQxID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbGVTcHJpdGVzW2kxXVtqMV0gPSA1IC8vIG9ubHkgMjMgbGVmdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbnQgPSBQaGFzZXIuRGlzcGxheS5Db2xvci5HZXRDb2xvcihcclxuICAgICAgICAgICAgUGxheWVySW5mby5STkcuaW50ZWdlckluUmFuZ2UoMTgwLCAyNTUpLFxyXG4gICAgICAgICAgICBQbGF5ZXJJbmZvLlJORy5pbnRlZ2VySW5SYW5nZSgxODAsIDI1NSksXHJcbiAgICAgICAgICAgIFBsYXllckluZm8uUk5HLmludGVnZXJJblJhbmdlKDE4MCwgMjU1KSxcclxuICAgICAgICApXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhpLCBqKVxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ByaXRlID0gc2NlbmUuYWRkLnNwcml0ZSh4LCB5LCAndGlsZXNldCcsIHRoaXMudGlsZVNwcml0ZXNbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuQnVpbGRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNldFRpbnQodGhpcy50aW50KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbEZyb20gPSBzY2VuZS5hZGQuc3ByaXRlKHgsIHksIFwicG9ydGFsRnJvbVwiLCAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGlsZXNbaV1bal0gPT0gVGlsZVR5cGUuRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxUbyA9IHNjZW5lLmFkZC5zcHJpdGUoeCwgeSwgXCJwb3J0YWxUb1wiLCAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoZ3JhcGhpY3M6IFBoYXNlci5HYW1lT2JqZWN0cy5HcmFwaGljcykge1xyXG4gICAgICAgIC8vIHRoaXMuZHJhd0dyaWQoZ3JhcGhpY3MpXHJcblxyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVTdHlsZSgzLCAweGZmZmZmZiwgMSk7XHJcbiAgICAgICAgLy8gdmlzdWFsaXplIHRoZSBwYXRoXHJcbiAgICAgICAgdGhpcy5wYXRoLmRyYXcoZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgICB0aGlzLnBvcnRhbEZyb20uYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxGcm9tX3NwaW5cIixcclxuICAgICAgICAgICAgZnJhbWVSYXRlOiAxMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9ydGFsVG8uYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogXCJwb3J0YWxUb19zcGluXCIsXHJcbiAgICAgICAgICAgIGZyYW1lUmF0ZTogMTBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3R3JpZChncmFwaGljczogUGhhc2VyLkdhbWVPYmplY3RzLkdyYXBoaWNzKSB7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZVN0eWxlKDEsIDB4MDAwMGZmLCAwLjgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSB0aGlzLmg7IGkrKykge1xyXG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oMCwgaSAqIFRJTEVfU0laRSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhUSUxFX1NJWkUgKiAxMCwgaSAqIFRJTEVfU0laRSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IHRoaXMudzsgaisrKSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhqICogVElMRV9TSVpFLCAwKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKGogKiBUSUxFX1NJWkUsIFRJTEVfU0laRSAqIDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmFwaGljcy5zdHJva2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblBsYWNlVG93ZXIoaTogaW50ZWdlciwgajogaW50ZWdlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluQm91bmRzKGksIGopICYmIHRoaXMudGlsZXNbaV1bal0gPT09IFRpbGVUeXBlLkJ1aWxkYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJ5R2V0RXhpc3RpbmdUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgaWYgKGkgPCAwIHx8IGogPCAwIHx8IGkgPj0gdGhpcy53IHx8IGogPj0gdGhpcy5oKSByZXR1cm4gbnVsbFxyXG4gICAgICAgIHJldHVybiB0aGlzLnRvd2Vyc1tpXVtqXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxhY2VUb3dlcihpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0b3dlcjogVG93ZXIpIHtcclxuICAgICAgICBpZiAoaSA8IDAgfHwgaiA8IDAgfHwgaSA+PSB0aGlzLncgfHwgaiA+PSB0aGlzLmgpIHJldHVybiBudWxsXHJcblxyXG4gICAgICAgIHRoaXMudGlsZXNbaV1bal0gPSBUaWxlVHlwZS5PY2N1cGllZDtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3dlcnNbaV1bal0gPSB0b3dlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBbXVxyXG5cclxuICAgICAgICBsZXQgZWRnZXM6IEdyaWRQb3NbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLncgLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgZWRnZXMucHVzaChbaSwgMF0pXHJcbiAgICAgICAgICAgIGVkZ2VzLnB1c2goW2ksIHRoaXMuaCAtIDFdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IHRoaXMuaCAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBlZGdlcy5wdXNoKFswLCBqXSlcclxuICAgICAgICAgICAgZWRnZXMucHVzaChbdGhpcy53IC0gMSwgal0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlXHJcblxyXG4gICAgICAgIGxldCBhdHRlbXB0cyA9IDBcclxuICAgICAgICB3aGlsZSAoIXN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgbGV0IGZyb20gPSByYW5kb21JdGVtKGVkZ2VzKVxyXG4gICAgICAgICAgICBsZXQgdG87XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHRvID0gcmFuZG9tSXRlbShlZGdlcylcclxuICAgICAgICAgICAgfSB3aGlsZSAodG8gPT0gZnJvbSlcclxuXHJcbiAgICAgICAgICAgIHBhdGggPSB0aGlzLnJhbmRvbVdhbGsoZnJvbSwgdG8pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaW5MZW5ndGggPSAyNVxyXG4gICAgICAgICAgICBpZiAocGF0aCAhPT0gbnVsbCAmJiBwYXRoLmxlbmd0aCA+PSBtaW5MZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXR0ZW1wdHMrK1xyXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPT0gNDAwKSBicmVha1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZWQgaW5cIiwgYXR0ZW1wdHMsIFwiYXR0ZW1wdHNcIilcclxuXHJcbiAgICAgICAgdGhpcy50aWxlcyA9IGluaXQyREFycmF5KHRoaXMudywgdGhpcy5oLCBUaWxlVHlwZS5CdWlsZGFibGUpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgW3gsIHldID0gdGhpcy5mcm9tR3JpZFBvcyhwYXRoW2ldWzBdLCBwYXRoW2ldWzFdKVxyXG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhbHRlbmF0aXZlbHk6IHRoaXMucGF0aCA9IG5ldyBQaGFzZXIuQ3VydmVzLlBhdGgoLi4uKVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5wYXRoID0gc2NlbmUuYWRkLnBhdGgoeCwgeSlcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0aCA9IG5ldyBQaGFzZXIuQ3VydmVzLlBhdGgoeCwgeSlcclxuICAgICAgICAgICAgICAgIC8vIHNjZW5lLmFkZE9iamVjdCh0aGlzLnBhdGgpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGgubGluZVRvKHgsIHkpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBzZXRUbyA9IFRpbGVUeXBlLlBhdGhcclxuICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VG8gPSBUaWxlVHlwZS5TdGFydFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT0gcGF0aC5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUbyA9IFRpbGVUeXBlLkVuZFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbGVzW3BhdGhbaV1bMF1dW3BhdGhbaV1bMV1dID0gc2V0VG9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR2VuZXJhdGVkIHRlcnJhaW4uXCIpXHJcblxyXG4gICAgICAgIHRoaXMucGF0aFRpbGVzID0gcGF0aFxyXG4gICAgICAgIHJldHVybiBwYXRoLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9tV2Fsayhmcm9tOiBHcmlkUG9zLCB0bzogR3JpZFBvcyk6IEFycmF5PEdyaWRQb3M+IHtcclxuICAgICAgICBsZXQgcGF0aCA9IFtdXHJcbiAgICAgICAgbGV0IHNlZW4gPSBuZXcgU2V0KClcclxuXHJcbiAgICAgICAgY29uc3QgYWRkVG9QYXRoID0gKHBvczogR3JpZFBvcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhbm5lZCBvZiB0aGlzLm5laWdoYm9ycyhwYXRoW3BhdGgubGVuZ3RoIC0gMV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vlbi5hZGQoYmFubmVkLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGF0aC5wdXNoKHBvcylcclxuICAgICAgICAgICAgc2Vlbi5hZGQocG9zLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGRUb1BhdGgoZnJvbSlcclxuXHJcbiAgICAgICAgbGV0IHN0ZXBzID0gMFxyXG4gICAgICAgIHdoaWxlIChwYXRoW3BhdGgubGVuZ3RoIC0gMV0gIT0gdG8pIHtcclxuICAgICAgICAgICAgc3RlcHMrK1xyXG4gICAgICAgICAgICBpZiAoc3RlcHMgPT0gMTAwKSBicmVha1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdXHJcblxyXG4gICAgICAgICAgICBpZiAocG9zLnRvU3RyaW5nKCkgPT09IHRvLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoICAvLyBTdWNjZXNzIVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2FuZHMgPSB0aGlzLm5laWdoYm9ycyhwb3MpXHJcbiAgICAgICAgICAgIGNhbmRzID0gY2FuZHMuZmlsdGVyKHAgPT4gIXNlZW4uaGFzKHAudG9TdHJpbmcoKSkpXHJcblxyXG4gICAgICAgICAgICBpZiAoY2FuZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbCAgLy8gRmFpbCFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbmV4dCA9IHJhbmRvbUl0ZW0oY2FuZHMpXHJcbiAgICAgICAgICAgIGFkZFRvUGF0aChuZXh0KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHBhdGhcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5laWdoYm9ycyhwb3M6IEdyaWRQb3MsIHBhZCA9IDApIHtcclxuICAgICAgICBsZXQgcmVzID0gW1xyXG4gICAgICAgICAgICBbcG9zWzBdICsgMSwgcG9zWzFdXSxcclxuICAgICAgICAgICAgW3Bvc1swXSAtIDEsIHBvc1sxXV0sXHJcbiAgICAgICAgICAgIFtwb3NbMF0sIHBvc1sxXSArIDFdLFxyXG4gICAgICAgICAgICBbcG9zWzBdLCBwb3NbMV0gLSAxXSxcclxuICAgICAgICBdXHJcbiAgICAgICAgcmVzID0gcmVzLmZpbHRlcihwID0+IHRoaXMuaW5Cb3VuZHMocFswXSwgcFsxXSkpXHJcblxyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuXHJcbiAgICBmcm9tR3JpZFBvcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIFsoaSArIDAuNSkgKiBUSUxFX1NJWkUsIChqICsgMC41KSAqIFRJTEVfU0laRV1cclxuICAgIH1cclxuXHJcbiAgICBpbkJvdW5kcyhpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCBwYWQgPSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIChpID49IHBhZFxyXG4gICAgICAgICAgICAmJiBpIDwgdGhpcy53IC0gcGFkXHJcbiAgICAgICAgICAgICYmIGogPj0gcGFkXHJcbiAgICAgICAgICAgICYmIGogPCB0aGlzLmggLSBwYWQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUl0ZW0oYXJyYXkpIHtcclxuICAgIHJldHVybiBhcnJheVtNYXRoLmZsb29yKFBsYXllckluZm8uUk5HLmZyYWMoKSAqIGFycmF5Lmxlbmd0aCldXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJhbmRvbUZyZWVTcHJpdGUoKSB7XHJcbiAgICBjb25zdCBuU3BlY2lhbFNwcml0ZXMgPSA4XHJcbiAgICByZXR1cm4gblNwZWNpYWxTcHJpdGVzICsgTWF0aC5mbG9vcihQbGF5ZXJJbmZvLlJORy5mcmFjKCkgKiAoTl9USUxFU0VUX1NQUklURVMgLSBuU3BlY2lhbFNwcml0ZXMpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0MkRBcnJheTxUVmFsPihkaW0xLCBkaW0yLCB2YWx1ZTogVFZhbCk6IFRWYWxbXVtdIHtcclxuICAgIHJldHVybiBuZXcgQXJyYXkoZGltMSlcclxuICAgICAgICAuZmlsbChmYWxzZSlcclxuICAgICAgICAubWFwKCgpID0+IG5ldyBBcnJheShkaW0yKVxyXG4gICAgICAgICAgICAuZmlsbCh2YWx1ZSkpO1xyXG59IiwiaW1wb3J0ICogYXMgY2ZnIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcclxuaW1wb3J0ICogYXMgdG93ZXJzIGZyb20gXCIuL3Rvd2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRvd2VyTWFuYWdlciB7XHJcbiAgICBzY2VuZTogVERTY2VuZVxyXG4gICAgdG93ZXJUeXBlczogeyBba2V5OnN0cmluZ106IGFueX0gPSB7XHJcbiAgICAgICAgJ0Jhc2ljJzogW3Rvd2Vycy5CYXNpY1R1cnJldCwgY2ZnLkJhc2ljXSxcclxuICAgICAgICAnTXVsdGlzaG90JzogW3Rvd2Vycy5NdWx0aXNob3RUdXJyZXQsIGNmZy5NdWx0aXNob3RdLFxyXG4gICAgICAgICdTbmlwZXInOiBbdG93ZXJzLlNuaXBlclR1cnJldCwgY2ZnLlNuaXBlcl0sXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYWNlVG93ZXIocG9pbnRlciwgdG93ZXJUeXBlKSB7XHJcbiAgICAgICAgY29uc3QgW2ksIGpdID0gdGhpcy5zY2VuZS50b0dyaWRQb3MocG9pbnRlci54LCBwb2ludGVyLnkpXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUudGVycmFpbi5jYW5QbGFjZVRvd2VyKGksIGopKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3dlcjogdG93ZXJzLlRvd2VyID0gdGhpcy5zY2VuZS50b3dlcnMuZ2V0KCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbmV3U2NlbmUgPSB0aGlzLnNjZW5lLm1ldGFTY2VuZS5hZGRTY2VuZSh0aGlzLnNjZW5lLnNjZW5lLmtleSlcclxuICAgICAgICAgICAgaWYgKHRvd2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0b3dlci5tYWtlKGksIGosIG5ld1NjZW5lLnNjZW5lLmtleSwgdGhpcy50b3dlclR5cGVzW3Rvd2VyVHlwZV1bMV0sIHRoaXMudG93ZXJUeXBlc1t0b3dlclR5cGVdWzBdKTtcclxuICAgICAgICAgICAgICAgIFBsYXllckluZm8ubW9uZXkgLT0gdG93ZXIuY29uZmlnLnByaWNlXHJcbiAgICAgICAgICAgICAgICBuZXdTY2VuZS5zZXRUb3dlclBhcmVudCh0b3dlcilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIGltcG9ydCB7IEdyaWRQb3NpdGlvbiB9IGZyb20gXCIuL3RlcnJhaW5cIjtcclxuXHJcbmltcG9ydCB7IERBTUFHRV9UT19UT1dFUl9IRUFMVEhfQ09FRiwgVE9XRVJfSEVBTFRIX1JFR0VOIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEhlYWx0aEJhciB9IGZyb20gXCIuL2hlYWx0aEJhclwiO1xyXG5pbXBvcnQgeyBURFNjZW5lIH0gZnJvbSBcIi4vc2NlbmVzL3RkU2NlbmVcIjtcclxuaW1wb3J0IHsgVGVycmFpbiwgVElMRV9TSVpFIH0gZnJvbSBcIi4vdGVycmFpblwiO1xyXG5pbXBvcnQgeyBUb3dlckNvbmZpZywgUkFOR0VfSU5ESUNBVE9SX0NPTkZJRyB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXJJbmZvIH0gZnJvbSBcIi4vcGxheWVySW5mb1wiO1xyXG5pbXBvcnQgeyBFbmVteUJhc2UgfSBmcm9tIFwiLi9lbmVteVwiO1xyXG5pbXBvcnQgeyBIdWRTY2VuZSB9IGZyb20gXCIuL3NjZW5lcy9odWRTY2VuZVwiO1xyXG5cclxuXHJcbi8vIHRvZG86IG1vdmUgdG8gc2NlbmU/XHJcbmZ1bmN0aW9uIGdldEVuZW15KHgsIHksIHJhbmdlLCBlbmVtaWVzLCBudW1Ub0dldCk6IEVuZW15QmFzZVtdIHtcclxuICAgIGxldCBvdXRFbmVtaWVzOiBFbmVteUJhc2VbXSA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGVuZW15R3JvdXAgaW4gZW5lbWllcykge1xyXG4gICAgICAgIGxldCBlbmVteVVuaXRzID0gZW5lbWllc1tlbmVteUdyb3VwXS5nZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5lbXlVbml0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZW5lbXlVbml0c1tpXS5hY3RpdmUgJiYgUGhhc2VyLk1hdGguRGlzdGFuY2UuQmV0d2Vlbih4LCB5LCBlbmVteVVuaXRzW2ldLngsIGVuZW15VW5pdHNbaV0ueSkgPD0gcmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIG91dEVuZW1pZXMucHVzaChlbmVteVVuaXRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAob3V0RW5lbWllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgb3V0RW5lbWllcy5zb3J0KChhLCBiKSA9PiBiLmZvbGxvd2VyLnQgLSBhLmZvbGxvd2VyLnQpXHJcbiAgICAgICAgb3V0RW5lbWllcy5sZW5ndGggPSBNYXRoLm1pbihudW1Ub0dldCwgb3V0RW5lbWllcy5sZW5ndGgpXHJcbiAgICAgICAgcmV0dXJuIG91dEVuZW1pZXNcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG93ZXIgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHtcclxuICAgIGNvbmZpZzogVG93ZXJDb25maWdcclxuICAgIHN0YXRzOiBUb3dlckNvbmZpZ1xyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgdG93ZXJUdXJyZXQ6IF9Ub3dlclR1cnJldFxyXG4gICAgdG93ZXJNaWQ6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGVcclxuICAgIHRvd2VyQmFzZTogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZVxyXG4gICAgaGVhbHRoQmFyOiBIZWFsdGhCYXJcclxuICAgIHJhbmdlSW5kaWNhdG9yOiBQaGFzZXIuR2FtZU9iamVjdHMuU2hhcGVcclxuXHJcbiAgICBsZXZlbDogaW50ZWdlclxyXG4gICAgbGV2ZWxUZXh0OiBQaGFzZXIuR2FtZU9iamVjdHMuVGV4dFxyXG5cclxuICAgIHByaXZhdGUgaW5uZXJUb3dlclNjZW5lS2V5OiBzdHJpbmdcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0b3dlclNjZW5lOiBURFNjZW5lKSB7XHJcbiAgICAgICAgc3VwZXIodG93ZXJTY2VuZSwgMCwgMClcclxuICAgICAgICB0aGlzLmhlYWx0aEJhciA9IG5ldyBIZWFsdGhCYXIodG93ZXJTY2VuZSlcclxuICAgICAgICB0aGlzLnNjZW5lID0gdG93ZXJTY2VuZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbWFrZShpOiBudW1iZXIsIGo6IG51bWJlciwgaW5uZXJUb3dlclNjZW5lS2V5OiBzdHJpbmcsIGNvbmZpZzogVG93ZXJDb25maWcsIHRvd2VyQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWdcclxuICAgICAgICB0aGlzLnN0YXRzID0gdGhpcy5jb25maWc7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQgPSBuZXcgdG93ZXJDbGFzc05hbWUodGhpcy5zY2VuZSwgdGhpcy5jb25maWcsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnNldEFjdGl2ZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnRvd2VyVHVycmV0LnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgIGxldCB4Q29vcmQgPSBpICogVElMRV9TSVpFICsgVElMRV9TSVpFIC8gMlxyXG4gICAgICAgIGxldCB5Q29vcmQgPSBqICogVElMRV9TSVpFICsgVElMRV9TSVpFIC8gMlxyXG5cclxuICAgICAgICB0aGlzLnRvd2VyQmFzZSA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh4Q29vcmQsIHlDb29yZCwgJ3Rvd2VyYmFzZXMnLCB0aGlzLmNvbmZpZy5zcHJpdGVCYXNlKTtcclxuICAgICAgICB0aGlzLnRvd2VyQmFzZS5zZXRUaW50KHRoaXMuY29uZmlnLnRpbnRCYXNlKTtcclxuICAgICAgICB0aGlzLmFkZCh0aGlzLnRvd2VyQmFzZSk7XHJcbiAgICAgICAgdGhpcy50b3dlck1pZCA9IHRoaXMuc2NlbmUuYWRkLnNwcml0ZSh4Q29vcmQsIHlDb29yZCwgJ3Rvd2VybWlkcycsIHRoaXMuY29uZmlnLnNwcml0ZU1pZCk7XHJcbiAgICAgICAgdGhpcy50b3dlck1pZC5zZXRUaW50KHRoaXMuY29uZmlnLnRpbnRNaWQpO1xyXG4gICAgICAgIHRoaXMudG93ZXJNaWQuYW5pbXMucGxheSh7XHJcbiAgICAgICAgICAgIGtleTogYHRvd2VyTWlkc19zcGluYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlck1pZCk7XHJcblxyXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3IgPSB0aGlzLnNjZW5lLmFkZC5jaXJjbGUoXHJcbiAgICAgICAgICAgIHhDb29yZCwgeUNvb3JkLCBjb25maWcucmFuZ2UoMSksXHJcbiAgICAgICAgICAgIFJBTkdFX0lORElDQVRPUl9DT05GSUcuY29sb3VyLFxyXG4gICAgICAgICAgICBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmFscGhhXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFN0cm9rZVN0eWxlKFJBTkdFX0lORElDQVRPUl9DT05GSUcuZWRnZVdpZHRoLCBSQU5HRV9JTkRJQ0FUT1JfQ09ORklHLmVkZ2VDb2xvdXIpO1xyXG4gICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5yYW5nZUluZGljYXRvcik7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJCYXNlLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy50b3dlckJhc2Uub24oJ3BvaW50ZXJvdmVyJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmNoaWxkcmVuLmJyaW5nVG9Ub3AodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4ubGlzdC5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jb25zdHJ1Y3Rvci5uYW1lLm1hdGNoKC9eLitFbmVteSQvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuY2hpbGRyZW4uYnJpbmdUb1RvcChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnJhbmdlSW5kaWNhdG9yLnNldFZpc2libGUodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaHVkU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChcImh1ZFNjZW5lXCIpIGFzIEh1ZFNjZW5lXHJcbiAgICAgICAgICAgIGh1ZFNjZW5lLnNldERlc2NyaXB0aW9uVG93ZXIodGhpcy5jb25maWcsIHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50b3dlckJhc2Uub24oJ3BvaW50ZXJvdXQnLCAoKSA9PiB7IHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0VmlzaWJsZShmYWxzZSkgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudG93ZXJUdXJyZXQucGxhY2UoaSwgaiwgdGhpcy5zY2VuZS50ZXJyYWluKTtcclxuICAgICAgICB0aGlzLnNjZW5lLnRlcnJhaW4ucGxhY2VUb3dlcihpLCBqLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy50b3dlclR1cnJldCk7XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLm1ha2UoeENvb3JkLCB5Q29vcmQgKyBUSUxFX1NJWkUgLyAyIC0gOCwgVElMRV9TSVpFIC0gMTQpXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5oZWFsdGhCYXIpXHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWwgPSAxXHJcblxyXG4gICAgICAgIGNvbnN0IHBhZCA9IDNcclxuICAgICAgICB0aGlzLmxldmVsVGV4dCA9IHRoaXMuc2NlbmUuYWRkLnRleHQoXHJcbiAgICAgICAgICAgIHhDb29yZCArIDE1LCB5Q29vcmQgLSA0LCBcIlwiICsgdGhpcy5sZXZlbCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiBwYWQsIHJpZ2h0OiBwYWQsIHRvcDogcGFkLCBib3R0b206IHBhZCB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgdGhpcy5hZGQodGhpcy5sZXZlbFRleHQpXHJcblxyXG4gICAgICAgIHRoaXMuaW5uZXJUb3dlclNjZW5lS2V5ID0gaW5uZXJUb3dlclNjZW5lS2V5XHJcblxyXG4gICAgICAgIGxldCBpbm5lclRvd2VyU2NlbmUgPSB0aGlzLnNjZW5lLnNjZW5lLmdldChpbm5lclRvd2VyU2NlbmVLZXkpIGFzIFREU2NlbmVcclxuICAgICAgICBpbm5lclRvd2VyU2NlbmUub25FbmVteVJlYWNoZWRFbmQoKGRhbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5oZWFsdGggLT0gZGFtYWdlICogREFNQUdFX1RPX1RPV0VSX0hFQUxUSF9DT0VGXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoXywgZGVsdGEpIHtcclxuICAgICAgICBkZWx0YSAqPSBQbGF5ZXJJbmZvLnRpbWVTY2FsZTtcclxuXHJcbiAgICAgICAgdGhpcy50b3dlclR1cnJldC51cGRhdGUoZGVsdGEpXHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLmhlYWx0aCArPSBUT1dFUl9IRUFMVEhfUkVHRU4gKiBkZWx0YVxyXG5cclxuICAgICAgICBpZiAodGhpcy5oZWFsdGhCYXIuaGVhbHRoID49IDEuMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhlYWx0aEJhci5sZXZlbFVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWwrK1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsVGV4dC5zZXRUZXh0KFwiXCIgKyB0aGlzLmxldmVsKVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdHMucmFuZ2UodGhpcy5sZXZlbCAtIDEpIDwgdGhpcy5zdGF0cy5yYW5nZSh0aGlzLmxldmVsKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmdlU2NhbGUgPSB0aGlzLnN0YXRzLnJhbmdlKHRoaXMubGV2ZWwpIC8gdGhpcy5zdGF0cy5yYW5nZSgxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZ2VJbmRpY2F0b3Iuc2V0U2NhbGUocmFuZ2VTY2FsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGVhbHRoQmFyLnVwZGF0ZShkZWx0YSlcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbm5lclRvd2VyU2NlbmVLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJUb3dlclNjZW5lS2V5XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5hYnN0cmFjdCBjbGFzcyBfVG93ZXJUdXJyZXQgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuSW1hZ2Uge1xyXG4gICAgbmV4dFRpYzogbnVtYmVyXHJcbiAgICB4OiBudW1iZXJcclxuICAgIHk6IG51bWJlclxyXG4gICAgYmFzZVg6IG51bWJlclxyXG4gICAgYmFzZVk6IG51bWJlclxyXG4gICAgcGFyZW50OiBUb3dlclxyXG5cclxuICAgIHNjZW5lOiBURFNjZW5lXHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIHNwcml0ZTogc3RyaW5nLCB0aW50OiBudW1iZXIsIHBhcmVudDogVG93ZXIpIHtcclxuICAgICAgICBzdXBlcihzY2VuZSwgMCwgMCwgJ3Rvd2VydG9wcycsIHNwcml0ZSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgdGhpcy5zZXRUaW50KHRpbnQpO1xyXG4gICAgICAgIHRoaXMubmV4dFRpYyA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2Ugd2lsbCBwbGFjZSB0aGUgdG93ZXIgYWNjb3JkaW5nIHRvIHRoZSBncmlkXHJcbiAgICBwbGFjZShpOiBpbnRlZ2VyLCBqOiBpbnRlZ2VyLCB0ZXJyYWluOiBUZXJyYWluKSB7XHJcbiAgICAgICAgW3RoaXMueCwgdGhpcy55XSA9IHRlcnJhaW4uZnJvbUdyaWRQb3MoaSwgailcclxuICAgICAgICB0aGlzLmJhc2VYID0gdGhpcy54XHJcbiAgICAgICAgdGhpcy5iYXNlWSA9IHRoaXMueVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoKSB7XHJcbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteShcclxuICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hbGxFbmVtaWVzLCAxXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoZW5lbWllcykge1xyXG4gICAgICAgICAgICBsZXQgZW5lbXkgPSBlbmVtaWVzWzBdXHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IFBoYXNlci5NYXRoLkFuZ2xlLkJldHdlZW4odGhpcy54LCB0aGlzLnksIGVuZW15LngsIGVuZW15LnkpO1xyXG4gICAgICAgICAgICBsZXQgZGFtYWdlID0gdGhpcy5wYXJlbnQuc3RhdHMuZGFtYWdlKHRoaXMucGFyZW50LmxldmVsKVxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZEJ1bGxldChcclxuICAgICAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCBhbmdsZSxcclxuICAgICAgICAgICAgICAgIGRhbWFnZSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLnJhbmdlKHRoaXMucGFyZW50LmxldmVsKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnN0YXRzLmJ1bGxldFNwZWVkTW9kXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUFuaW1hdGlvbihhbmdsZSwgZGFtYWdlKSB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IChhbmdsZSArIE1hdGguUEkgLyAyKSAqIFBoYXNlci5NYXRoLlJBRF9UT19ERUc7XHJcbiAgICAgICAgbGV0IHJlY29pbCA9IE1hdGgubWluKGRhbWFnZSAqIDAuNSwgMjUpXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5iYXNlWFxyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuYmFzZVlcclxuICAgICAgICB0aGlzLnNjZW5lLnR3ZWVucy5hZGQoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiB0aGlzLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogTWF0aC5taW4odGhpcy5wYXJlbnQuY29uZmlnLmZpcmVyYXRlKHRoaXMucGFyZW50LmxldmVsKSAqIDAuOCwgMTAwICsgZGFtYWdlKSxcclxuICAgICAgICAgICAgeDogdGhpcy54ICsgTWF0aC5jb3MoYW5nbGUgKyBNYXRoLlBJKSAqIHJlY29pbCxcclxuICAgICAgICAgICAgeTogdGhpcy55ICsgTWF0aC5zaW4oYW5nbGUgKyBNYXRoLlBJKSAqIHJlY29pbCxcclxuICAgICAgICAgICAgZWFzZTogJ1F1YWQnLFxyXG4gICAgICAgICAgICB5b3lvOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSArPSBkZWx0YVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0VGltZSA+IHRoaXMubmV4dFRpYykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJlKCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRUaWMgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5wYXJlbnQuc3RhdHMuZmlyZXJhdGUodGhpcy5wYXJlbnQubGV2ZWwpXHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFRpYyA9IHRoaXMubGFzdFRpbWUgKyA1MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNpY1R1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpc2hvdFR1cnJldCBleHRlbmRzIF9Ub3dlclR1cnJldCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmU6IFREU2NlbmUsIGNvbmZpZywgcGFyZW50KSB7XHJcbiAgICAgICAgc3VwZXIoc2NlbmUsIGNvbmZpZy5zcHJpdGVUb3AsIGNvbmZpZy50aW50VG9wLCBwYXJlbnQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmaXJlKCkgeyAgLy8gdGhpcyBiZWhhdmlvdXIgc2hvdWxkIGJlIGluIF9Ub3dlclR1cnJldC5maXJlIGJ0d1xyXG4gICAgICAgIGxldCBudW1UYXJnZXRzID0gM1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zdGF0cy5udW1UYXJnZXRzKSB7XHJcbiAgICAgICAgICAgIG51bVRhcmdldHMgPSB0aGlzLnBhcmVudC5zdGF0cy5udW1UYXJnZXRzKHRoaXMucGFyZW50LmxldmVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVuZW1pZXMgPSBnZXRFbmVteSh0aGlzLngsIHRoaXMueSwgdGhpcy5wYXJlbnQuc3RhdHMucmFuZ2UodGhpcy5wYXJlbnQubGV2ZWwpLCB0aGlzLnNjZW5lLmFsbEVuZW1pZXMsIG51bVRhcmdldHMpO1xyXG5cclxuICAgICAgICBpZiAoZW5lbWllcyAmJiBlbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZW5lbXkgb2YgZW5lbWllcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuZ2xlID0gUGhhc2VyLk1hdGguQW5nbGUuQmV0d2Vlbih0aGlzLngsIHRoaXMueSwgZW5lbXkueCwgZW5lbXkueSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGFtYWdlID0gdGhpcy5wYXJlbnQuc3RhdHMuZGFtYWdlKHRoaXMucGFyZW50LmxldmVsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGRCdWxsZXQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54LCB0aGlzLnksIGFuZ2xlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zdGF0cy5yYW5nZSh0aGlzLnBhcmVudC5sZXZlbCksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuc3RhdHMuYnVsbGV0U3BlZWRNb2RcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVBbmltYXRpb24oYW5nbGUsIGRhbWFnZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbmlwZXJUdXJyZXQgZXh0ZW5kcyBfVG93ZXJUdXJyZXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lOiBURFNjZW5lLCBjb25maWcsIHBhcmVudCkge1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCBjb25maWcuc3ByaXRlVG9wLCBjb25maWcudGludFRvcCwgcGFyZW50KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFbmVteUNvbmZpZywgUEFVU0VfQUZURVJfV0FWRV9USU1FLCBFTkVNWV9DT05GSUdTLCBXYXZlQ29uZmlnIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEVuZW15QmFzZSB9IGZyb20gXCIuL2VuZW15XCI7XHJcbmltcG9ydCB7IFBsYXllckluZm8gfSBmcm9tIFwiLi9wbGF5ZXJJbmZvXCI7XHJcbmltcG9ydCB7IFREU2NlbmUgfSBmcm9tIFwiLi9zY2VuZXMvdGRTY2VuZVwiO1xyXG4vLyBpbXBvcnQgeyBFbmVteSwgRmF0RW5lbXl9IGZyb20gXCIuL2VuZW15XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdhdmVNYW5hZ2VyIHtcclxuICAgIHNjZW5lOiBURFNjZW5lXHJcbiAgICBjdXJyZW50V2F2ZTogaW50ZWdlciA9IDBcclxuICAgIG5leHRFbmVteTogaW50ZWdlciA9IDBcclxuICAgIGRlYWREYW5nZXI6IGludGVnZXIgPSAwXHJcbiAgICByZW1haW5pbmdEYW5nZXI6IGludGVnZXIgPSAwXHJcbiAgICB3YXZlRGlmZmljdWx0eTogaW50ZWdlciA9IDBcclxuXHJcbiAgICB3YXZlQWN0aXZlOiBib29sZWFuICAvLyBmYWxzZSBmb3IgbmVzdGVkIHdhdmVzXHJcbiAgICBuZXh0V2F2ZVRpbWU6IGludGVnZXIgPSAwXHJcbiAgICByZXNwYXduUXVldWU6IFtFbmVteUNvbmZpZywgaW50ZWdlcl1bXSA9IFtdO1xyXG4gICAgcmVzcGF3bkhlYWx0aDogaW50ZWdlciAgLy8gemVybyB1bmxlc3MgcmVzcGF3bmluZyBlbmVteSwgaGFja1xyXG5cclxuICAgIGVuZW15SW50ZXJ2YWw6IGludGVnZXJcclxuXHJcbiAgICBxdWV1ZWRFbmVteTogYW55XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICAgICAgIC8vIHNldCBmYWxzZSBmb3IgbmVzdGVkIGJlaGF2aW9yIGluIHVwZGF0ZSgpXHJcbiAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA+IDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zY2VuZS5zY2VuZUxldmVsID09PSAwKVxyXG4gICAgICAgICAgICB0aGlzLmdldFdhdmVEaWZmaWN1bHR5KCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSAxZTkgLy8gYSBsb3RcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0V2F2ZURpZmZpY3VsdHkoKSB7XHJcbiAgICAgICAgLy9UT0RPOiBhZGQgZGlmZmljdWx0eSBzY2FsaW5nIGFuZCBiYWxhbmNpbmcgZm9yIHdhdmVzXHJcbiAgICAgICAgdGhpcy53YXZlRGlmZmljdWx0eSA9IFdhdmVDb25maWcub3V0ZXJXYXZlRGFuZ2VyKHRoaXMuY3VycmVudFdhdmUpXHJcbiAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgPSB0aGlzLndhdmVEaWZmaWN1bHR5XHJcbiAgICAgICAgdGhpcy5lbmVteUludGVydmFsID0gV2F2ZUNvbmZpZy5vdXRlckVuZW15SW50ZXJ2YWxcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG5leHRXYXZlKCkge1xyXG4gICAgICAgIHRoaXMud2F2ZUFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2F2ZSsrO1xyXG4gICAgICAgIHRoaXMuZ2V0V2F2ZURpZmZpY3VsdHkoKTtcclxuICAgICAgICBQbGF5ZXJJbmZvLndhdmVIZWFsdGhSZWdlbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdGFydGluZyB3YXZlICcgKyB0aGlzLmN1cnJlbnRXYXZlICsgJywgd2F2ZSBkaWZmaWN1bHR5OiAnICsgdGhpcy53YXZlRGlmZmljdWx0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzcGF3bkVuZW15KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnJlc3Bhd25RdWV1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCByZXNwYXduID0gdGhpcy5yZXNwYXduUXVldWUuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXNwYXduSGVhbHRoID0gcmVzcGF3blsxXTtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmVzcGF3blswXS5kYW5nZXI7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbcmVzcGF3blswXS5uYW1lXS5nZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCByYW5kRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoZW5lbXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChlbmVteS5kYW5nZXIgPD0gdGhpcy5yZW1haW5pbmdEYW5nZXIpICYmIChlbmVteS5taW5XYXZlIDw9IHRoaXMuY3VycmVudFdhdmUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyYW5kRW5lbXkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1haW5pbmdEYW5nZXIgLT0gcmFuZEVuZW15LmRhbmdlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmUuYWxsRW5lbWllc1tyYW5kRW5lbXkubmFtZV0uZ2V0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlbWFpbmluZ0RhbmdlciA9IDA7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc3Bhd24ocmVzcGF3bjogRW5lbXlDb25maWcsIHJlbWFpbmluZ0hlYWx0aDogaW50ZWdlcikge1xyXG4gICAgICAgIHRoaXMucmVzcGF3blF1ZXVlLnB1c2goW3Jlc3Bhd24sIHJlbWFpbmluZ0hlYWx0aF0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgcHVibGljIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHRoaXMubGFzdFRpbWUgKz0gZGVsdGFcclxuICAgICAgICBsZXQgZW5lbXk6IEVuZW15QmFzZVxyXG4gICAgICAgIGxldCB3YXZlOiBpbnRlZ2VyXHJcbiAgICAgICAgaWYgKHRoaXMuc2NlbmUuc2NlbmVMZXZlbCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMud2F2ZUFjdGl2ZSAmJiB0aGlzLmxhc3RUaW1lID4gdGhpcy5uZXh0V2F2ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFdhdmUoKTsgIC8vIG5vIHdhdmVzIGluIG5lc3RlZCBsYXllcnNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW1haW5pbmdEYW5nZXIgPiAwICYmIHRoaXMubGFzdFRpbWUgPiB0aGlzLm5leHRFbmVteSkge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNwYXduRW5lbXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kZWFkRGFuZ2VyID09PSB0aGlzLndhdmVEaWZmaWN1bHR5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldhdmUgXCIgKyB0aGlzLmN1cnJlbnRXYXZlICsgXCIgY29tcGxldGUhIE5leHQgd2F2ZSBpbiBcIiArIFBBVVNFX0FGVEVSX1dBVkVfVElNRSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlYWREYW5nZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53YXZlQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXZlVGltZSA9IHRoaXMubGFzdFRpbWUgKyBQQVVTRV9BRlRFUl9XQVZFX1RJTUU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2F2ZSA9IHRoaXMuY3VycmVudFdhdmVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucXVldWVkRW5lbXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVldWVkRW5lbXkgPSB0aGlzLmdldFJhbmRFbmVteSgoKSA9PiB0cnVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gdGhpcy5sYXN0VGltZSAqIChXYXZlQ29uZmlnLmRhbmdlclBlclNlYyh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpICogMC4wMDEpXHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSAodGhpcy5xdWV1ZWRFbmVteS5kYW5nZXIgKiAxLjApXHJcbiAgICAgICAgICAgIGlmIChhID4gYikge1xyXG4gICAgICAgICAgICAgICAgZW5lbXkgPSB0aGlzLnNjZW5lLmFsbEVuZW1pZXNbdGhpcy5xdWV1ZWRFbmVteS5uYW1lXS5nZXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGFzdFRpbWUsIGIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlZEVuZW15ID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3YXZlID0gV2F2ZUNvbmZpZy5sZXZlbFRvV2F2ZSh0aGlzLnNjZW5lLmdldFRvd2VyUGFyZW50KCkubGV2ZWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW5lbXkpIHtcclxuICAgICAgICAgICAgZW5lbXkuc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICBlbmVteS5zZXRWaXNpYmxlKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgLy8gcGxhY2UgdGhlIGVuZW15IGF0IHRoZSBzdGFydCBvZiB0aGUgcGF0aFxyXG4gICAgICAgICAgICBlbmVteS5zdGFydE9uUGF0aCh3YXZlLCB0aGlzLnJlc3Bhd25IZWFsdGgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc3Bhd25IZWFsdGggPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5uZXh0RW5lbXkgPSB0aGlzLmxhc3RUaW1lICsgdGhpcy5lbmVteUludGVydmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJhbmRFbmVteShmaWx0ZXJfZm4pOiBFbmVteUNvbmZpZyB7XHJcbiAgICAgICAgbGV0IGF2YWlsRW5lbWllcyA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBlbmVteSBvZiBFTkVNWV9DT05GSUdTKSB7ICAvLyBTZWxlY3QgYWxsIGVuZW1pZXMgdGhhdCBjYW4gYmUgc3Bhd25lZFxyXG4gICAgICAgICAgICBpZiAoZW5lbXkubWluV2F2ZSA+PSAwICYmIGZpbHRlcl9mbihlbmVteSkpXHJcbiAgICAgICAgICAgICAgICBhdmFpbEVuZW1pZXMucHVzaChlbmVteSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXZhaWxFbmVtaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gUGljayBhIHJhbmRvbSBvbmUgb2YgdGhlbVxyXG4gICAgICAgICAgICBsZXQgcmFuZEVuZW15ID0gYXZhaWxFbmVtaWVzW01hdGguZmxvb3IoUGxheWVySW5mby5STkcuZnJhYygpICogYXZhaWxFbmVtaWVzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICByZXR1cm4gcmFuZEVuZW15XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==