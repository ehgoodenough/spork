var EditorCursorView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            position: "absolute",
            width: this.props.entity.scale * TILE + "em",
            height: this.props.entity.scale * TILE + "em",
            top: this.props.entity.position.ty * TILE + "em",
            left: this.props.entity.position.tx * TILE + "em",
            border: "1em dashed #111",
        }
    }
})

module.exports = EditorCursorView
