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

var game = {
    "mode": "play",
    "world": {
        "chunks": {
            "0x0": {
                "timestamp": Date.now(),
                "tiles": {
                    "0x0": {
                        "color": "#B97A57",
                        "position": {"x": 0, "y": 0},
                    },
                    "1x1": {
                        "color": "#B97A57",
                        "position": {"x": 1, "y": 1},
                    },
                }
            }
        }
    },
    "hero": {
        "width": 8,
        "height": 8,
        "position": {"x": 16, "y": 16},
        "timestamp": Date.now(),
    }
}

var GameView = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio={WIDTH + "x" + HEIGHT}>
                <CameraView entity={game.hero}>
                    <WorldChunkView chunk={game.world.chunks["0x0"]}/>
                    <HeroView entity={game.hero}/>
                </CameraView>
            </FrameView>
        )
    },
    componentDidMount: function() {
        Loop(function(tick) {
            if(Input.isJustDown("<space>")) {
                if(game.mode == "play") {
                    console.log("Activating EditMode")
                    game.mode = "edit"
                } else if(game.mode == "edit") {
                    console.log("Activating PlayMode")
                    game.mode = "play"
                }
            }
            if(game.mode == "play") {
                if(Input.isDown("W")) {
                    game.hero.position.y -= 1
                    game.hero.timestamp = Date.now()
                } if(Input.isDown("S")) {
                    game.hero.position.y += 1
                    game.hero.timestamp = Date.now()
                } if(Input.isDown("A")) {
                    game.hero.position.x -= 1
                    game.hero.timestamp = Date.now()
                } if(Input.isDown("D")) {
                    game.hero.position.x += 1
                    game.hero.timestamp = Date.now()
                }
            } else if(game.mode == "edit") {
                //?!
            }
            this.forceUpdate()
        }.bind(this))
    }
})

React.render(<GameView/>, document.body)
