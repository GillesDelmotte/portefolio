export const gameController = {

    'activeKeys': [],
    'possibleKeys': [
        'ArrowRight',
        'ArrowLeft',
        'ArrowUp',
        'ArrowDown',
        ' '
    ],
    'game': null,
    'mouseX': null,
    'mouseY': null,

    init(game) {
        this.game = game

        window.addEventListener('keydown', (e) => {
            const click = document.querySelector('#soundClick')
            click.volume = 0.1

            if (this.possibleKeys.includes(e.key) && !this.activeKeys.includes(e.key)) {
                this.activeKeys.push(e.key)
                click.play()
            }
        })
        window.addEventListener('keyup', (e) => {
            if (this.activeKeys.includes(e.key)) {
                this.activeKeys.splice(this.activeKeys.indexOf(e.key), 1)
            }
        })
        window.addEventListener('click', (e) => {
            this.mouseX = e.clientX
            this.mouseY = e.clientY
            const click = document.querySelector('#soundClick')
            click.volume = 0.1
            /*
            * CONTROLLERS
            * */

            if (this.mouseY > this.game.controller.spriteFrameLeft.dy &&
                this.mouseY < this.game.controller.spriteFrameLeft.dy + this.game.controller.spriteFrameLeft.dh) {
                if (this.mouseX > this.game.controller.spriteFrameLeft.dx &&
                    this.mouseX < this.game.controller.spriteFrameLeft.dx + this.game.controller.spriteFrameLeft.dx +
                    this.game.controller.spriteFrameLeft.dw - 20 &&
                    this.activeKeys.length === 0) {
                    this.activeKeys.push('ArrowLeft')
                    click.play()
                } else if (this.mouseX > this.game.controller.spriteFrameRight.dx &&
                    this.mouseX < this.game.controller.spriteFrameRight.dx + this.game.controller.spriteFrameRight.dw - 20 &&
                    this.activeKeys.length === 0) {
                    this.activeKeys.push('ArrowRight')
                    click.play()
                } else if (this.activeKeys.length === 1) {
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowRight'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowLeft'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowDown'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowUp'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf(' '), 1)
                    click.play()


                }
            }

            if (this.mouseX > this.game.controller.spriteFrameUp.dx &&
                this.mouseX < this.game.controller.spriteFrameUp.dx + this.game.controller.spriteFrameUp.dw) {
                if (this.mouseY > this.game.controller.spriteFrameUp.dy &&
                    this.mouseY < this.game.controller.spriteFrameUp.dy + this.game.controller.spriteFrameUp.dh &&
                    this.activeKeys.length === 0) {

                    this.activeKeys.push('ArrowUp')
                    click.play()


                } else if (this.mouseY > this.game.controller.spriteFrameDown.dy &&
                    this.mouseY < this.game.controller.spriteFrameDown.dy + this.game.controller.spriteFrameDown.dh &&
                    this.activeKeys.length === 0) {

                    this.activeKeys.push('ArrowDown')
                    click.play()


                } else if (this.activeKeys.length === 1) {
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowUp'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowDown'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowLeft'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf('ArrowRight'), 1)
                    this.activeKeys.splice(this.activeKeys.indexOf(' '), 1)
                    click.play()

                }
            }

            if (this.mouseX > this.game.controller.spriteFrameOk.dx &&
                this.mouseX < this.game.controller.spriteFrameOk.dx + this.game.controller.spriteFrameOk.dw &&
                this.mouseY > this.game.controller.spriteFrameOk.dy &&
                this.mouseY < this.game.controller.spriteFrameOk.dy + this.game.controller.spriteFrameOk.dh) {
                this.activeKeys.push(' ')
                this.activeKeys.splice(this.activeKeys.indexOf(' '), 1)
                click.play()


            }

            /*
            * BUTTON SOUND
            * */

            if (this.mouseX > this.game.button.spriteFrameSound.dx &&
                this.mouseX < this.game.button.spriteFrameSound.dx + this.game.button.spriteFrameSound.dw &&
                this.mouseY > this.game.button.spriteFrameSound.dy &&
                this.mouseY < this.game.button.spriteFrameSound.dy + this.game.button.spriteFrameSound.dh) {

                if (this.game.button.spriteFrameSound.sy === 1182) {
                    this.game.button.spriteFrameSound.sy = 1358

                    const music = document.querySelector('#sound')
                    music.pause()
                    click.play()




                } else if (this.game.button.spriteFrameSound.sy === 1358) {

                    this.game.button.spriteFrameSound.sy = 1182

                    const music = document.querySelector('#sound')
                    music.play()
                    music.volume = 0.1
                    click.play()



                }
            }

            if (this.mouseX > this.game.button.spriteFrameUser.dx &&
                this.mouseX < this.game.button.spriteFrameUser.dx + this.game.button.spriteFrameUser.dw &&
                this.mouseY > this.game.button.spriteFrameUser.dy &&
                this.mouseY < this.game.button.spriteFrameUser.dy + this.game.button.spriteFrameUser.dh) {
                    document.querySelector('.character').style.display = 'block'
                    click.play()

            }

            if (this.mouseX > this.game.button.spriteFrameSetting.dx &&
                this.mouseX < this.game.button.spriteFrameSetting.dx + this.game.button.spriteFrameSetting.dw &&
                this.mouseY > this.game.button.spriteFrameSetting.dy &&
                this.mouseY < this.game.button.spriteFrameSetting.dy + this.game.button.spriteFrameSetting.dh) {
                document.querySelector('.skills').style.display = 'block'
                click.play()

            }

            if (this.mouseX > this.game.button.spriteFrameContact.dx &&
                this.mouseX < this.game.button.spriteFrameContact.dx + this.game.button.spriteFrameContact.dw &&
                this.mouseY > this.game.button.spriteFrameContact.dy &&
                this.mouseY < this.game.button.spriteFrameContact.dy + this.game.button.spriteFrameContact.dh) {
                document.querySelector('.contact').style.display = 'block'
                click.play()

            }

        })
    }
}