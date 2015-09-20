var HeroView = React.createClass({
    render: function() {
        return (
            <div style={this.renderStyle()}/>
        )
    },
    renderStyle: function() {
        return {
            width: this.props.entity.width + "em",
            height: this.props.entity.height + "em",
            top: this.props.entity.position.y - (this.props.entity.width / 2) + "em",
            left: this.props.entity.position.x - (this.props.entity.height / 2) + "em",
            backgroundColor: COLORS["green"],
            position: "absolute",
        }
    }
})

module.exports = HeroView
