var EditorCursorView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            position: "absolute",
            width: this.props.entity.scale * 4 + "em",
            height: this.props.entity.scale * 4 + "em",
            top: (Math.round(this.props.entity.position.y / 4) * 4) + "em",
            left: (Math.round(this.props.entity.position.x / 4) * 4) + "em",
            border: "1em dashed #111",
        }
    }
})

module.exports = EditorCursorView
