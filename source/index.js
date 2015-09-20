window.React = require("react")
window.Pixi = require("pixi.js")

window.Loop = require("<scripts>/utilities/Loop")
window.Input = require("<scripts>/utilities/Input")

window.WIDTH = 128
window.HEIGHT = 96
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

var HeroView = require("<scripts>/views/HeroView")
var FrameView = require("<scripts>/views/FrameView")
var CameraView = require("<scripts>/views/CameraView")
var WorldChunkView = require("<scripts>/views/WorldChunkView")
var EditorCursorView = require("<scripts>/views/EditorCursorView")

var game = {
    "mode": "play",
    "world": {
        "chunks": {
            "0x0": {
                "rendered": Date.now(),
                "position": {"x": 0, "y": 0},
                "tiles": {
                    "0x0": {
                        "color": "#B97A57",
                        "position": {"x": 0, "y": 0},
                    },
                    "1x1": {
                        "color": "#B97A57",
                        "position": {"x": 1, "y": 1},
                    },
                },
            },
            "-1x0": {
                "rendered": Date.now(),
                "position": {"x": -1, "y": 0},
                "tiles": {
                    "4x4": {
                        "color": "#B97A57",
                        "position": {"x": 4, "y": 4},
                    },
                    "6x6": {
                        "color": "#B97A57",
                        "position": {"x": 6, "y": 6},
                    },
                },
            },
        },
    },
    "hero": {
        "width": 8,
        "height": 8,
        "position": {
            "x": 16,
            "y": 16,
        },
    },
    "editor": {
        "cursor": {
            "scale": 2,
            "position": {
                "x": 0,
                "y": 0,
            },
            "movement": {}
        },
    },
}

var GameView = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio={WIDTH + "x" + HEIGHT}>
                <CameraView entity={game.hero}>
                    <WorldChunkView chunk={game.world.chunks["0x0"]}/>
                    <WorldChunkView chunk={game.world.chunks["-1x0"]}/>
                    <HeroView entity={game.hero}/>
                    <EditorCursorView entity={game.editor.cursor}/>
                </CameraView>
            </FrameView>
        )
    },
    componentDidMount: function() {
        Loop(function(tick) {
            if(Input.isJustDown("\\")) {
                if(game.mode == "play") {
                    game.mode = "edit"
                    game.editor.cursor.position.x = Math.round((game.hero.position.x - (game.hero.width / 2)) / 4) * 4
                    game.editor.cursor.position.y = Math.round((game.hero.position.y - (game.hero.width / 2)) / 4) * 4
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
                if(Input.isJustDown("W")
                || Input.isJustDown("<up>")) {
                    game.editor.cursor.movement.y = -0.1
                    game.editor.cursor.position.y -= 4
                } else if(Input.isDown("W")
                || Input.isDown("<up>")) {
                    game.editor.cursor.movement.y += tick
                    if(game.editor.cursor.movement.y > 0.1) {
                        game.editor.cursor.movement.y -= 0.1
                        game.editor.cursor.position.y -= 4
                    }
                } if(Input.isJustDown("S")
                || Input.isJustDown("<down>")) {
                    game.editor.cursor.movement.y = -0.1
                    game.editor.cursor.position.y += 4
                } else if(Input.isDown("S")
                || Input.isDown("<down>")) {
                    game.editor.cursor.movement.y += tick
                    if(game.editor.cursor.movement.y > 0.1) {
                        game.editor.cursor.movement.y -= 0.1
                        game.editor.cursor.position.y += 4
                    }
                } if(Input.isJustDown("A")
                || Input.isJustDown("<left>")) {
                    game.editor.cursor.movement.x = -0.1
                    game.editor.cursor.position.x -= 4
                } else if(Input.isDown("A")
                || Input.isDown("<left>")) {
                    game.editor.cursor.movement.x += tick
                    if(game.editor.cursor.movement.x > 0.1) {
                        game.editor.cursor.movement.x -= 0.1
                        game.editor.cursor.position.x -= 4
                    }
                } if(Input.isJustDown("D")
                || Input.isJustDown("<right>")) {
                    game.editor.cursor.movement.x = -0.1
                    game.editor.cursor.position.x += 4
                } else if(Input.isDown("D")
                || Input.isDown("<right>")) {
                    game.editor.cursor.movement.x += tick
                    if(game.editor.cursor.movement.x > 0.1) {
                        game.editor.cursor.movement.x -= 0.1
                        game.editor.cursor.position.x += 4
                    }
                }
            }
            this.forceUpdate()
        }.bind(this))
    }
})

React.render(<GameView/>, document.body)
