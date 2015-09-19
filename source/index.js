window.React = require("react")
window.Pixi = require("pixi.js")

window.Loop = require("<scripts>/utilities/Loop")
window.Input = require("<scripts>/utilities/Input")

window.WIDTH = 16
window.HEIGHT = 12

var FrameView = require("<scripts>/views/FrameView")
//var CameraView = require("<scripts>/views/CameraView")
var WorldChunkView = require("<scripts>/views/WorldChunkView")

var world = {
    chunks: {
        "0x0": {
            timestamp: Date.now(),
            tiles: {
                "0x0": {
                    "position": {"x": 0, "y": 0},
                    "color": "#B97A57",
                },
                "1x1": {
                    "position": {"x": 1, "y": 1},
                    "color": "#B97A57",
                },
            }
        }
    }
}

var GameView = React.createClass({
    render: function() {
        return (
            <FrameView aspect-ratio={WIDTH + "x" + HEIGHT}>
                <WorldChunkView data={world.chunks["0x0"]}/>
            </FrameView>
        )
    },
    componentDidMount: function() {
        Loop(function(tick) {
            //console.log(tick)
        }.bind(this))
    }
})

React.render(<GameView/>, document.body)
