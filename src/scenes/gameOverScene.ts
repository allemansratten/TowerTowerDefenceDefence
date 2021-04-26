export class GameOverScene extends Phaser.Scene {


    constructor() {
        super({
            active: true,
            visible: true,
            key: "gameOverScene",
        });
    }

    public create() {
        console.log("CREATED")
    }

    currentTime = 0;
    reloaded = false;
    update(_, delta) {
        this.currentTime += delta
        if (this.currentTime > 1000 && !this.reloaded) {
            this.reloaded = true;
            location.reload()
        }
    }



}