window.React = require("react")
window.Pixi = require("pixi.js")

window.Loop = require("<scripts>/utilities/Loop")
window.Input = require("<scripts>/utilities/Input")

window.WIDTH = 128
window.HEIGHT = 96
window.TILE = 8
window.TWIDTH = WIDTH / TILE
window.THEIGHT = HEIGHT / TILE
window.COLORS = {
    "brown1": "#EFE4B0",
    "brown2": "#B97A57",
    "green": "#22B14C",
    "blue": "#00A2E8",
    "gray1": "#C3C3C3",
    "gray2": "#7F7F7F",
    "white": "#FFFFFF",
    "black": "#111111",
}
window.WORLD = {
    "tiles": {
        "6x6":{
            "chunk": 3,
            "position":{
                "tx":6,
                "ty":6
            },
            "color":COLORS.blue,
        },
        "5x5":{
            "chunk": 3,
            "position":{
                "tx":5,
                "ty":5
            },
            "color":COLORS.blue,
        },
        "4x5":{
            "chunk": 3,
            "position":{
                "tx":4,
                "ty":5
            },
            "color":COLORS.blue,
        },
        "5x6":{
            "chunk": 3,
            "position":{
                "tx":5,
                "ty":6
            },
            "color":COLORS.blue,
        },
        "4x6":{
            "chunk": 3,
            "position":{
                "tx":4,
                "ty":6
            },
            "color":COLORS.blue,
        },
        "5x4":{
            "chunk": 3,
            "position":{
                "tx":5,
                "ty":4
            },
            "color":COLORS.blue,
        },
        "6x4":{
            "chunk": 3,
            "position":{
                "tx":6,
                "ty":4
            },
            "color":COLORS.blue,
        },
        "6x5":{
            "chunk": 3,
            "position":{
                "tx":6,
                "ty":5
            },
            "color":COLORS.blue,
        },

        "4x4":{
            "chunk": 2,
            "color":COLORS.brown2,
            "position":{
                "tx":4,
                "ty":4
            }
        },
        "3x4":{
            "chunk": 2,
            "position":{
                "tx":3,
                "ty":4
            },"color":COLORS.brown2
        },
        "3x3":{
            "chunk": 2,
            "position":{
                "tx":3,
                "ty":3
            },"color":COLORS.brown2,
        },
        "3x2":{
            "chunk": 2,
            "position":{
                "tx":3,
                "ty":2
            },"color":COLORS.brown2,
        },
        "2x2":{
            "chunk": 2,
            "position":{
                "tx":2,
                "ty":2
            },"color":COLORS.brown2,
        },
        "2x3":{
            "chunk": 2,
            "position":{
                "tx":2,
                "ty":3
            },"color":COLORS.brown2,
        },
        "2x4":{
            "chunk": 2,
            "position":{
                "tx":2,
                "ty":4
            },"color":COLORS.brown2,
        },
        "4x3":{
            "chunk": 2,
            "position":{
                "tx":4,
                "ty":3
            },"color":COLORS.brown2,
        },
        "4x2":{
            "chunk": 2,
            "position":{
                "tx":4,
                "ty":2
            },"color":COLORS.brown2,
        },


        "1x2":{
            "chunk": 1,
            "position":{
                "tx":1,
                "ty":2
            },"color":COLORS.blue,
        },
        "0x2":{
            "chunk": 1,
            "position":{
                "tx":0,
                "ty":2
            },"color":COLORS.blue,
        },
        "0x1":{
            "chunk": 1,
            "position":{
                "tx":0,
                "ty":1
            },"color":COLORS.blue,
        },
        "1x0":{
            "chunk": 1,
            "position":{
                "tx":1,
                "ty":0
            },"color":COLORS.blue,
        },
        "2x0":{
            "chunk": 1,
            "position":{
                "tx":2,
                "ty":0
            },"color":COLORS.blue,
        },
        "2x1":{
            "chunk": 1,
            "position":{
                "tx":2,
                "ty":1
            },"color":COLORS.blue,
        },
        "0x0":{
            "chunk": 1,
            "position":{
                "tx":0,
                "ty":0
            },
            "color":COLORS.blue
        },
        "1x1":{
            "chunk": 1,
            "color":COLORS.blue,
            "position":{
                "tx":1,
                "ty":1
            }
        },
    },
}

var HeroView = require("<scripts>/views/HeroView")
var WorldView = require("<scripts>/views/WorldView")
var WorldChunkView = require("<scripts>/views/WorldChunkView")
var FrameView = require("<scripts>/views/FrameView")
var EditorCursorView = require("<scripts>/views/EditorCursorView")
var CameraView = require("<scripts>/views/CameraView")

class Point {
    constructor(protopoint) {
        this.x = protopoint.x || protopoint.tx * TILE || 0
        this.y = protopoint.y || protopoint.ty * TILE || 0
    }
    get tx() {
        return Math.floor(this.x / TILE)
    }
    get ty() {
        return Math.floor(this.y / TILE)
    }
    set tx(tx) {
        this.x = tx * TILE
    }
    set ty(ty) {
        this.y = ty * TILE
    }
    get string() {
        return this.x + "x" + this.y
    }
    get tstring() {
        return this.tx + "x" + this.ty
    }
}

class Hero {
    constructor() {
        this.height = 8
        this.width = 8
        this.position = new Point({x: 14, y: 14})
    }
    get chunk() {
        var tile = game.world.tiles[this.position.tstring]
        return !!tile ? tile.chunk : undefined
    }
}

window.game = {
    "mode": "play",
    "world": WORLD,
    "hero": new Hero(),
    "editor": {
        "cursor": {
            "scale": 1,
            "position": {
                "tx": 0,
                "ty": 0,
            },
            "movement": {
                "x": 0,
                "y": 0,
            }
        },
    },
}

var GameView = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio={WIDTH + "x" + HEIGHT}>
                <CameraView entity={game.hero}>
                    <WorldChunkView cx={0} cy={0} rendered={"hello"}/>
                    <HeroView entity={game.hero}/>
                </CameraView>
            </FrameView>
        )
    },
    componentDidMount: function() {
        Loop(function(tick) {
            if(Input.isJustDown("<tab>")) {
                if(game.mode == "play") {
                    game.mode = "edit"
                    // todo: do not reposition the cursor if it is already on the screen
                    game.editor.cursor.position.tx = Math.round((game.hero.position.x - (game.hero.width / 2)) / TILE)
                    game.editor.cursor.position.ty = Math.round((game.hero.position.y - (game.hero.width / 2)) / TILE)
                } else if(game.mode == "edit") {
                    game.mode = "play"
                }
            }
            if(game.mode == "play") {
                if(Input.isDown("W")
                || Input.isDown("<up>")) {
                    game.hero.position.y -= 1
                } if(Input.isDown("S")
                || Input.isDown("<down>")) {
                    game.hero.position.y += 1
                } if(Input.isDown("A")
                || Input.isDown("<left>")) {
                    game.hero.position.x -= 1
                } if(Input.isDown("D")
                || Input.isDown("<right>")) {
                    game.hero.position.x += 1
                }
            } else if(game.mode == "edit") {
                if(Input.isDown("<shift>")) {
                    // shifting
                } else {
                    var SPEED = 0.1
                    if(Input.isJustDown("W")
                    || Input.isJustDown("<up>")) {
                        game.editor.cursor.movement.y = -SPEED
                        if(game.editor.cursor.position.ty - 1 >= 0) {
                            game.editor.cursor.position.ty -= 1
                        }
                    } else if(Input.isDown("W")
                    || Input.isDown("<up>")) {
                        game.editor.cursor.movement.y += tick
                        if(game.editor.cursor.movement.y > SPEED) {
                            game.editor.cursor.movement.y -= SPEED
                            if(game.editor.cursor.position.ty - 1 >= 0) {
                                game.editor.cursor.position.ty -= 1
                            }
                        }
                    } if(Input.isJustDown("S")
                    || Input.isJustDown("<down>")) {
                        game.editor.cursor.movement.y = -SPEED
                        if(game.editor.cursor.position.ty + 1 < HEIGHT / TILE) {
                            game.editor.cursor.position.ty += 1
                        }
                    } else if(Input.isDown("S")
                    || Input.isDown("<down>")) {
                        game.editor.cursor.movement.y += tick
                        if(game.editor.cursor.movement.y > SPEED) {
                            game.editor.cursor.movement.y -= SPEED
                            if(game.editor.cursor.position.ty + 1 < HEIGHT / TILE) {
                                game.editor.cursor.position.ty += 1
                            }
                        }
                    } if(Input.isJustDown("A")
                    || Input.isJustDown("<left>")) {
                        game.editor.cursor.movement.x = -SPEED
                        if(game.editor.cursor.position.tx - 1 >= 0) {
                            game.editor.cursor.position.tx -= 1
                        }
                    } else if(Input.isDown("A")
                    || Input.isDown("<left>")) {
                        game.editor.cursor.movement.x += tick
                        if(game.editor.cursor.movement.x > SPEED) {
                            game.editor.cursor.movement.x -= SPEED
                            if(game.editor.cursor.position.tx - 1 >= 0) {
                                game.editor.cursor.position.tx -= 1
                            }
                        }
                    } if(Input.isJustDown("D")
                    || Input.isJustDown("<right>")) {
                        game.editor.cursor.movement.x = -SPEED
                        if(game.editor.cursor.position.tx + 1 < WIDTH / TILE) {
                            game.editor.cursor.position.tx += 1
                        }
                    } else if(Input.isDown("D")
                    || Input.isDown("<right>")) {
                        game.editor.cursor.movement.x += tick
                        if(game.editor.cursor.movement.x > SPEED) {
                            game.editor.cursor.movement.x -= SPEED
                            if(game.editor.cursor.position.tx + 1 < WIDTH / TILE) {
                                game.editor.cursor.position.tx += 1
                            }
                        }
                    } if(Input.isDown("<space>")) {
                        var tx = game.editor.cursor.position.tx
                        var ty = game.editor.cursor.position.ty
                        for(var txi = tx; txi < tx + game.editor.cursor.scale; txi++) {
                            for(var tyi = ty; tyi < ty + game.editor.cursor.scale; tyi++) {
                                game.world.tiles[txi + "x" + tyi] = {
                                    "position": {"tx": txi, "ty": tyi},
                                    "color": "#B97A57",
                                }
                            }
                        }
                    }
                }
            }
            this.forceUpdate()
        }.bind(this))
    }
})

React.render(<GameView/>, document.body)
