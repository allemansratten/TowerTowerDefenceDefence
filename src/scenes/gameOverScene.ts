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

    currentTime = 0
    update(_, delta) {
        this.currentTime += delta
        if (this.currentTime > 1000) {
            location.reload()
        }
    }



}