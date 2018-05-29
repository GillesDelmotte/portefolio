export const background = {
    'spriteFrame': {
        'sx': 705,
        'sy': 1183,
        'sw': 900,
        'sh': 506,
        'dx': 0,
        'dy': 0,
        'dw': 0,
        'dh': 0
    },
    'game': null,
    'speed': 3,

    init(game) {
        this.game = game
        this.spriteFrame.dw = this.game.canvas.width
        this.spriteFrame.dh = this.game.canvas.height
        this.game.drawImageFromSprite(this.spriteFrame)
    },
    update(){
        if (this.game.gameController.activeKeys.includes('ArrowLeft')) {
            this.spriteFrame.sx += - this.speed
        }
        if (this.game.gameController.activeKeys.includes('ArrowRight')) {
            this.spriteFrame.sx += this.speed

        }
        if (this.game.gameController.activeKeys.includes('ArrowUp')) {
            this.spriteFrame.sy += - this.speed
        }
        if (this.game.gameController.activeKeys.includes('ArrowDown')) {
            this.spriteFrame.sy += this.speed

        }
        this.game.drawImageFromSprite2(this.spriteFrame)
    }
}