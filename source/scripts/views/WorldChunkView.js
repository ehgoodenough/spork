var WorldChunkView = React.createClass({
    render: function() {
        return (
            <canvas ref="canvas"
                width={WIDTH * 4} height={HEIGHT * 4}
                style={{width: WIDTH + "em", height: HEIGHT + "em"}}/>
        )
    },
    renderCanvas: function() {
        console.log("Rendering WorldChunk", this.timestamp)
        var canvas = this.refs.canvas.getDOMNode().getContext("2d")
        canvas.fillStyle = "#EFE4B0"
        canvas.fillRect(0, 0, WIDTH * 4, HEIGHT * 4)
        for(var coords in this.props.data.tiles) {
            var tile = this.props.data.tiles[coords]
            canvas.fillStyle = tile.color
            canvas.fillRect(tile.position.x * 4, tile.position.y * 4, 4, 4)
        }
    },
    componentDidMount: function() {
        this.timestamp = this.props.data.timestamp
        this.renderCanvas()
    },
    shouldComponentUpdate: function(props) {
        return this.timestamp != props.data.timestamp
    },
    componentDidUpdate: function() {
        this.timestamp = this.props.data.timestamp
        this.renderCanvas()
    }
})

module.exports = WorldChunkView
