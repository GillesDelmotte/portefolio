export const controller = {
    'spriteFrameLeft': {
        'sx': 1856,
        'sy': 851,
        'sw': 84,
        'sh': 138,
        'dx': 20,
        'dy': 0,
        'dw': 84,
        'dh': 138
    },
    'spriteFrameDown': {
        'sx': 1968,
        'sy': 1017,
        'sw': 140,
        'sh': 85,
        'dx': 124,
        'dy': 0,
        'dw': 140,
        'dh': 85
    },
    'spriteFrameOk': {
        'sx': 1968,
        'sy': 852,
        'sw': 144,
        'sh': 133,
        'dx': 126,
        'dy': 0,
        'dw': 144,
        'dh': 133
    },
    'spriteFrameUp': {
        'sx': 1969,
        'sy': 736,
        'sw': 140,
        'sh': 85,
        'dx': 124,
        'dy': 0,
        'dw': 140,
        'dh': 85
    },
    'spriteFrameRight': {
        'sx': 2139,
        'sy': 848,
        'sw': 84,
        'sh': 138,
        'dx': 288,
        'dy': 0,
        'dw': 84,
        'dh': 138
    },
    'game': null,

    init(game) {
        this.game = game
        this.spriteFrameUp.dy = this.game.canvas.height - this.spriteFrameLeft.dh - this.spriteFrameUp.dh - 60 - this.spriteFrameUp.dh
        this.spriteFrameDown.dy = this.game.canvas.height - this.spriteFrameDown.dh - 20
        this.spriteFrameLeft.dy = this.game.canvas.height - this.spriteFrameLeft.dh - this.spriteFrameDown.dh - 40
        this.spriteFrameRight.dy = this.game.canvas.height - this.spriteFrameRight.dh - this.spriteFrameDown.dh - 40
        this.spriteFrameOk.dy = this.game.canvas.height - this.spriteFrameLeft.dh - this.spriteFrameDown.dh - 40
        this.game.drawImageFromSprite(this.spriteFrameDown)
        this.game.drawImageFromSprite(this.spriteFrameUp)
        this.game.drawImageFromSprite(this.spriteFrameLeft)
        this.game.drawImageFromSprite(this.spriteFrameRight)
        this.game.drawImageFromSprite(this.spriteFrameOk)
    },
    update() {
        if(this.game.gameController.activeKeys.includes('ArrowRight')){
            this.spriteFrameRight.sx = 2556
        }else{
            this.spriteFrameRight.sx = 2139
        }

        if(this.game.gameController.activeKeys.includes('ArrowLeft')){
            this.spriteFrameLeft.sx = 2274
        }else{
            this.spriteFrameLeft.sx = 1856
        }

        if(this.game.gameController.activeKeys.includes('ArrowUp')){
            this.spriteFrameUp.sx = 2388
        }else{
            this.spriteFrameUp.sx = 1969
        }

        if(this.game.gameController.activeKeys.includes('ArrowDown')){
            this.spriteFrameDown.sx = 2387
        }else{
            this.spriteFrameDown.sx = 1968
        }

        if(this.game.gameController.activeKeys.includes(' ')){
            this.spriteFrameOk.sx = 2387
        }else{
            this.spriteFrameOk.sx = 1968
        }

        this.game.drawImageFromSprite(this.spriteFrameDown)
        this.game.drawImageFromSprite(this.spriteFrameUp)
        this.game.drawImageFromSprite(this.spriteFrameLeft)
        this.game.drawImageFromSprite(this.spriteFrameRight)
        this.game.drawImageFromSprite(this.spriteFrameOk)
    }


}