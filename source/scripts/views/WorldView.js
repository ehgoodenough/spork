var WorldView = React.createClass({
    render: function() {
        return (
            <div>
                {this.renderWorldTiles()}
            </div>
        )
    },
    renderWorldTiles: function() {
        var renderings = []
        for(var key in this.props.world.tiles) {
            var tile = this.props.world.tiles[key]
            renderings.push(
                <WorldTileView key={key} tile={tile} chunk={game.hero.chunk}/>
            )
        }
        return renderings
    }
})

var WorldTileView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            width: TILE + "em",
            height: TILE + "em",
            position: "absolute",
            //opacity: this.props.tile.chunk == this.props.chunk ? 1 : 0.5,
            top: (this.props.tile.position.ty * TILE) + "em",
            left: (this.props.tile.position.tx * TILE) + "em",
            backgroundColor: this.props.tile.color,
        }
    }
})

module.exports = WorldView
