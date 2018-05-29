export const character = {
    'spriteFramesFront': [],
    'spriteFramesBack': [],
    'spriteFramesLeft': [],
    'spriteFramesRight': [],
    'width': 97,
    'height': 134,
    'game': null,
    'animationStep': 0,
    'maxAnimationStep': 0,
    'delay': 0,

    init(game) {
        this.game = game
        const sxLeft = 1898
        const sxRight = 2295
        const sxBack = 2120
        const sxFront = 2494

        this.spriteFramesLeft = [{sxLeft, 'sy': 100}, {sxLeft, 'sy': 302}, {sxLeft, 'sy': 489}]
        this.spriteFramesRight = [{sxRight, 'sy': 100}, {sxRight, 'sy': 302}, {sxRight, 'sy': 489}]
        this.spriteFramesBack = [{sxBack, 'sy': 97}, {sxBack, 'sy': 302}, {sxBack, 'sy': 489}]
        this.spriteFramesFront = [{sxFront, 'sy': 97}, {sxFront, 'sy': 302}, {sxFront, 'sy': 489}]

        this.maxAnimationStep = this.spriteFramesLeft.length - 1

    },
    update() {
        this.delay += 1
        if (this.delay === 10) {
            this.animationStep = this.animationStep < this.maxAnimationStep ? this.animationStep + 1 : 0
            this.delay = 0
        }
        /*if (this.game.hasStarted) {

        }*/
        if (this.game.gameController.activeKeys.includes('ArrowLeft') && this.game.gameController.activeKeys.length === 1) {
            this.game.drawImageFromSprite({
                'sx': this.spriteFramesLeft[this.animationStep].sxLeft,
                'sy': this.spriteFramesLeft[this.animationStep].sy,
                'sw': this.width,
                'sh': this.height,
                'dx': this.game.canvas.width / 2 - this.width / 2,
                'dy': this.game.canvas.height / 2 - this.height / 2,
                'dw': this.width,
                'dh': this.height
            })
        }
        if (this.game.gameController.activeKeys.includes('ArrowRight') && this.game.gameController.activeKeys.length === 1) {
            this.game.drawImageFromSprite({
                'sx': this.spriteFramesRight[this.animationStep].sxRight,
                'sy': this.spriteFramesRight[this.animationStep].sy,
                'sw': this.width,
                'sh': this.height,
                'dx': this.game.canvas.width / 2 - this.width / 2,
                'dy': this.game.canvas.height / 2 - this.height / 2,
                'dw': this.width,
                'dh': this.height
            })
        }
        if (this.game.gameController.activeKeys.includes('ArrowUp')) {
            this.game.drawImageFromSprite({
                'sx': this.spriteFramesBack[this.animationStep].sxBack,
                'sy': this.spriteFramesBack[this.animationStep].sy,
                'sw': this.width,
                'sh': this.height,
                'dx': this.game.canvas.width / 2 - this.width / 2,
                'dy': this.game.canvas.height / 2 - this.height / 2,
                'dw': this.width,
                'dh': this.height
            })
        }
        if (this.game.gameController.activeKeys.includes('ArrowDown')) {
            this.game.drawImageFromSprite({
                'sx': this.spriteFramesFront[this.animationStep].sxFront,
                'sy': this.spriteFramesFront[this.animationStep].sy,
                'sw': this.width,
                'sh': this.height,
                'dx': this.game.canvas.width / 2 - this.width / 2,
                'dy': this.game.canvas.height / 2 - this.height / 2,
                'dw': this.width,
                'dh': this.height
            })
        }
        if (this.game.gameController.activeKeys.length === 0 || this.game.gameController.activeKeys[0] === ' ') {
            this.game.drawImageFromSprite({
                'sx': 2493,
                'sy': 100,
                'sw': this.width,
                'sh': this.height,
                'dx': this.game.canvas.width / 2 - this.width / 2,
                'dy': this.game.canvas.height / 2 - this.height / 2,
                'dw': this.width,
                'dh': this.height
            })
        }

    }
}