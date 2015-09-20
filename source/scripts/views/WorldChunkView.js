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
            top: this.props.chunk.position.y * HEIGHT + "em",
            left: this.props.chunk.position.x * WIDTH + "em",
            position: "absolute",
        }
    },
    renderCanvas: function() {
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        canvas.fillStyle = "#EFE4B0"
        canvas.fillRect(0, 0, WIDTH * TILE, HEIGHT * TILE)
        for(var coords in this.props.chunk.tiles) {
            var tile = this.props.chunk.tiles[coords]
            canvas.fillStyle = tile.color
            canvas.fillRect(tile.position.x * TILE, tile.position.y * TILE, TILE, TILE)
        }
    },
    componentDidMount: function() {
        this.rendered = this.props.chunk.rendered
        console.log("Rendering WorldChunkView", this.rendered)
        this.renderCanvas()
    },
    shouldComponentUpdate: function(props) {
        return this.rendered != props.chunk.rendered
    },
    componentDidUpdate: function() {
        this.rendered = this.props.chunk.rendered
        console.log("Rendering WorldChunkView", this.rendered)
        this.renderCanvas()
    }
})

module.exports = WorldChunkView
