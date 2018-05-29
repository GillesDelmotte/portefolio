export const button = {
    'spriteFrameSound': {
        'sx': 1964,
        'sy': 1182,
        'sw': 142,
        'sh': 131,
        'dx': 0,
        'dy': 20,
        'dw': 142/1.5,
        'dh': 131/1.5
    },
    'spriteFrameUser': {
        'sx': 1964,
        'sy': 1542,
        'sw': 142,
        'sh': 131,
        'dx': 0,
        'dy': 20,
        'dw': 142/1.5,
        'dh': 131/1.5
    },
    'spriteFrameContact': {
        'sx': 1964,
        'sy': 1718,
        'sw': 142,
        'sh': 131,
        'dx': 0,
        'dy': 20,
        'dw': 142/1.5,
        'dh': 131/1.5
    },
    'spriteFrameSetting': {
        'sx': 1964,
        'sy': 1900,
        'sw': 142,
        'sh': 131,
        'dx': 0,
        'dy': 20,
        'dw': 142/1.5,
        'dh': 131/1.5
    },

    'game': null,

    init(game){
        this.game = game
        this.spriteFrameSound.dx = this.game.canvas.width - this.spriteFrameSound.dw - 20
        this.spriteFrameContact.dx = this.game.canvas.width - (this.spriteFrameSound.dw * 2)  - 40
        this.spriteFrameSetting.dx = this.game.canvas.width - (this.spriteFrameSound.dw * 3)  - 60
        this.spriteFrameUser.dx = this.game.canvas.width - (this.spriteFrameSound.dw * 4)  - 80
        this.game.drawImageFromSprite(this.spriteFrameSound)
        this.game.drawImageFromSprite(this.spriteFrameUser)
        this.game.drawImageFromSprite(this.spriteFrameContact)
        this.game.drawImageFromSprite(this.spriteFrameSetting)
    },
    update(){
        this.game.drawImageFromSprite(this.spriteFrameSound)
        this.game.drawImageFromSprite(this.spriteFrameUser)
        this.game.drawImageFromSprite(this.spriteFrameContact)
        this.game.drawImageFromSprite(this.spriteFrameSetting)
    }
}