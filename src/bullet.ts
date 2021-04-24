import { TDScene } from "./scenes/tdScene"

export const RADIUS = 10

export class Bullet extends Phaser.GameObjects.Container {

    scene: TDScene

    dx: number = 0
    dy: number = 0
    lifespan: number = 0
    speed: number

    bulletImage: Phaser.GameObjects.Image
    particles: Phaser.GameObjects.Particles.ParticleEmitterManager
    emitter: Phaser.GameObjects.Particles.ParticleEmitter

    constructor(scene) {
        super(scene, 0, 0);

        this.dx = 0;
        this.dy = 0;
        this.lifespan = 0;

        this.speed = Phaser.Math.GetSpeed(600, 1);
        this.bulletImage = this.scene.add.image(0, 0, 'bullet')
    }

    fire(x, y, angle) {
        this.add(this.bulletImage)

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

        this.lifespan = 300;
        
        this.emitter = this.particles.createEmitter({
            speed: 100,
            scale: { start: 0.3, end: 0 },
            blendMode: 'ADD',
            lifespan: 300,
        });
        this.emitter.startFollow(this.bulletImage);
    }

    hit() {
        this.setActive(false);
        this.setVisible(false);
        this.emitter.explode(10, this.bulletImage.x, this.bulletImage.y)
    }

    update(time, delta) {
        this.lifespan -= delta;

        this.bulletImage.x += this.dx * (this.speed * delta);
        this.bulletImage.y += this.dy * (this.speed * delta);

        (this.body as Phaser.Physics.Arcade.Body).setCircle(RADIUS, this.bulletImage.x, this.bulletImage.y);

        if (this.lifespan <= 0) {
            this.setActive(false);
            this.setVisible(false);
        }
    }
}
