input.onButtonPressed(Button.A, function () {
    if (shot) {
        freefire = game.createSprite(rov.get(LedSpriteProperty.X), rov.get(LedSpriteProperty.Y))
        freefire.turn(Direction.Left, 90)
        shot = false
    }
})
function crash () {
    if (freefire.isTouching(PUBG)) {
        game.addScore(1)
        freefire.delete()
        PUBG.delete()
        PUBG = game.createSprite(randint(0, 4), 0)
        shot = true
    } else if (freefire.get(LedSpriteProperty.Y) == 0) {
        freefire.delete()
        shot = true
    }
}
input.onButtonPressed(Button.B, function () {
    if (shot) {
        freefire = game.createSprite(rov.get(LedSpriteProperty.X), rov.get(LedSpriteProperty.Y))
        freefire.turn(Direction.Left, 90)
        shot = false
    }
})
let freefire: game.LedSprite = null
let shot = false
let PUBG: game.LedSprite = null
let rov: game.LedSprite = null
rov = game.createSprite(2, 4)
PUBG = game.createSprite(randint(0, 4), 0)
shot = true
game.startCountdown(50000)
basic.forever(function () {
    rov.move(1)
    rov.ifOnEdgeBounce()
    if (freefire) {
        freefire.move(1)
        crash()
    }
    basic.pause(200)
})
