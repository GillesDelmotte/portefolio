require("./scss/main.scss");
import {background} from './background'
import {gameController} from './gameController'
import {character} from './character'
import {controller} from './controller'
import {button} from './button'

document.querySelector('.character').style.display = 'none';
document.querySelector('.background').style.display = 'none';
document.querySelector('.skills').style.display = 'none';
document.querySelector('.contact').style.display = 'none';
document.querySelector('.menu').style.display = 'block';
document.querySelector('body').insertAdjacentHTML("afterbegin", '<canvas> </canvas>');
document.querySelector('canvas').style.backgroundColor = 'black';
document.querySelector('#sound').volume = 0.1
document.querySelector('#sound').removeAttribute('controls')

document.querySelector('body').addEventListener('click', (e) => {

    const playButton = document.querySelector('.play')
    const playButton2 = document.querySelector('.playControls')
    const controls = document.querySelector('.controls')
    const exitControl = document.querySelector('.exitControl')
    const exitCharacter = document.querySelector('.exitCharacter')
    const exitSkills = document.querySelector('.exitSkills')
    const exitContact = document.querySelector('.exitContact')
    const soundControls = document.querySelector('.soundControls')

    const click = document.querySelector('#soundClick')
    click.volume = 0.1

    if (e.target === playButton || e.target === playButton2) {
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.menuControls').style.display = 'none'

        click.play()
    }

    if (e.target === controls) {
        document.querySelector('.menu').style.display = 'none'
        document.querySelector('.menuControls').style.display = 'block'
        click.play()
    }

    if (e.target === exitControl) {
        document.querySelector('.menu').style.display = 'block'
        document.querySelector('.menuControls').style.display = 'none'
        document.querySelector('.character').style.display = 'none'
        click.play()
    }

    if(e.target === exitCharacter){
        document.querySelector('.character').style.display = 'none'
        click.play()

    }

    if(e.target === exitSkills){
        document.querySelector('.skills').style.display = 'none'
        click.play()

    }

    if(e.target === exitContact){
        document.querySelector('.contact').style.display = 'none'
        click.play()

    }

    if (e.target === soundControls) {
        if (game.button.spriteFrameSound.sy === 1182) {
            game.button.spriteFrameSound.sy = 1358
            const music = document.querySelector('#sound')
            music.pause()
            music.volume = 0.1
            click.play()
            document.querySelector('.soundControls').style.backgroundPosition = '-845px -1105px'


        } else if (game.button.spriteFrameSound.sy === 1358) {
            game.button.spriteFrameSound.sy = 1182
            const music = document.querySelector('#sound')

            music.play()
            music.volume = 0.1
            click.play()
            document.querySelector('.soundControls').style.backgroundPosition = '-844px -1005px'
        }
    }

})


const game = {
    'sprite': new Image,
    'sprite2': new Image,
    'spriteSheetSrc': '../public/assets/images/spriteGame.png',
    'spriteSheetSrc2': '../public/assets/images/spriteMap.png',
    'canvas': document.querySelector('canvas'),
    'c': null,
    'gameController': gameController,
    'background': background,
    'character': character,
    'controller': controller,
    'button': button,
    'hasStarted': false,
    'requestAnimationId': 0,


    init() {
        this.c = this.canvas.getContext('2d')
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.sprite.src = this.spriteSheetSrc
        this.sprite2.src = this.spriteSheetSrc2

        this.sprite.addEventListener('load', (e) => {
            this.background.init(this)
            this.character.init(this)
            this.gameController.init(this)
            this.controller.init(this)
            this.button.init(this)
            this.animate()
        })
    },

    drawImageFromSprite(coordinates) {
        this.c.drawImage(this.sprite, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh)
    },
    drawImageFromSprite2(coordinates) {
        this.c.drawImage(this.sprite2, coordinates.sx, coordinates.sy, coordinates.sw, coordinates.sh, coordinates.dx, coordinates.dy, coordinates.dw, coordinates.dh)
    },
    animate() {
        this.requestAnimationId = window.requestAnimationFrame(() => {
            this.animate()
        })
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.background.update()
        this.character.update()
        this.controller.update()
        this.button.update()


    },
    cancelAnimation() {
        window.cancelAnimationFrame(this.requestAnimationId)
    }

}


game.init();

