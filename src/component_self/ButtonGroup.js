const React = require('react');
const ReactDOM = require("react-dom");
// const createReactClass = require("create-react-class");
const PropTypes = require("prop-types");
const styles = require('./styles.js');
const css = require("aphrodite").css;

const ButtonGroup = () => ({
    propTypes: {
        value: PropTypes.any,
        buttons: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.any.isRequired,
            content: PropTypes.node,
            title: PropTypes.string,
        })).isRequired,
        onChange: PropTypes.func.isRequired,
        allowEmpty: PropTypes.bool,
    },

    getDefaultProps: function() {
        return {
            value: null,
            allowEmpty: true,
        };
    },

    focus: function() {
        ReactDOM.findDOMNode(this).focus();
        return true;
    },

    toggleSelect: function(newValue) {
        const value = this.props.value;

        if (this.props.allowEmpty) {
            // Select the new button or unselect if it's already selected
            this.props.onChange(value !== newValue ? newValue : null);
        } else {
            this.props.onChange(newValue);
        }
    },

    render: function() {
        const value = this.props.value;
        const buttons = this.props.buttons.map((button, i) => {
            return <button title={button.title}
                           type="button"
                           id={"" + i}
                           ref={"button" + i}
                           key={"" + i}
                           className={css(
                               styles.button.buttonStyle,
                               button.value === value &&
                               styles.button.selectedStyle
                           )}
                           onClick={this.toggleSelect.bind(this, button.value)}
            >
                {button.content || "" + button.value}
            </button>;
        });

        const outerStyle = {
            display: 'inline-block',
        };
        return <div style={outerStyle}>
            {buttons}
        </div>;
    },
});

module.exports = ButtonGroup;