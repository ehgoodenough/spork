var WorldChunkView = React.createClass({
    render: function() {
        return (
            <canvas ref="canvas"
                style={this.renderStyle()}
                width={WIDTH} height={HEIGHT}/>
        )
    },
    renderStyle: function() {
        return {
            width: WIDTH + "em",
            height: HEIGHT + "em",
            top: this.props.cy * HEIGHT + "em",
            left: this.props.cx * WIDTH + "em",
            position: "absolute",
        }
    },
    renderCanvas: function() {
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        canvas.fillStyle = "#EFE4B0"
        canvas.fillRect(0, 0, WIDTH * TILE, HEIGHT * TILE)
        var ctx = this.props.cx / TILE
        var cty = this.props.cy / TILE
        for(var tx = 0; tx < WIDTH / TILE; tx++) {
            for(var ty = 0; ty < WIDTH / TILE; ty++) {
                var tile = game.world.tiles[(tx+ctx) + "x" + (ty+cty)]
                if(!tile) {continue}
                console.log(tile)
                canvas.fillStyle = tile.color
                canvas.fillRect(tx * TILE, ty * TILE, TILE, TILE)
            }
        }
    },
    componentDidMount: function() {
        this.rendered = this.props.rendered
        console.log("Rendering WorldChunkView", this.rendered)
        this.renderCanvas()
    },
    shouldComponentUpdate: function(props) {
        return this.rendered != props.rendered
    },
    componentDidUpdate: function() {
        this.rendered = this.props.rendered
        console.log("Rendering WorldChunkView", this.rendered)
        this.renderCanvas()
    }
})

module.exports = WorldChunkView
