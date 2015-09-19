var WorldChunkView = React.createClass({
    render: function() {
        return (
            <canvas ref="canvas"
                width={WIDTH} height={HEIGHT}
                style={{width: WIDTH + "em", height: HEIGHT + "em"}}/>
        )
    },
    renderCanvas: function() {
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        canvas.fillStyle = "#EFE4B0"
        canvas.fillRect(0, 0, WIDTH * 4, HEIGHT * 4)
        for(var coords in this.props.chunk.tiles) {
            var tile = this.props.chunk.tiles[coords]
            canvas.fillStyle = tile.color
            canvas.fillRect(tile.position.x * 4, tile.position.y * 4, 4, 4)
        }
    },
    componentDidMount: function() {
        this.timestamp = this.props.chunk.timestamp
        console.log("Rendering WorldChunkView", this.timestamp)
        this.renderCanvas()
    },
    shouldComponentUpdate: function(props) {
        return this.timestamp != props.chunk.timestamp
    },
    componentDidUpdate: function() {
        this.timestamp = this.props.chunk.timestamp
        console.log("Rendering WorldChunkView", this.timestamp)
        this.renderCanvas()
    }
})

module.exports = WorldChunkView
