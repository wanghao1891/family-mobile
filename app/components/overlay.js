'use strict';

var React = require('react-native');
var Animated = React.Animated;
var StyleSheet = React.StyleSheet;
var View = React.View;
var Dimensions = React.Dimensions;

var DEFAULT_ANIMATE_TIME = 300;

function get_initial_state() {
  return {
    fadeAnim: new Animated.Value(0),
    overlayStyle: styles.emptyOverlay //on android opacity=0 also can cover screen, so use overlayStyle fix it
  };
}

function on_animated_end() {
  !this.props.visible&&this.setState({overlayStyle:styles.emptyOverlay});
}

function component_will_receive_props(new_props) {
  new_props.visible && this.setState({
    overlayStyle: styles.fullOverlay
  });
  return Animated.timing(this.state.fadeAnim, {
    toValue: new_props.visible ? 1 : 0,
    duration: DEFAULT_ANIMATE_TIME
  }).start(this.on_animated_end);
}

function render() {
  return (
    <Animated.View style={[this.state.overlayStyle, {opacity: this.state.fadeAnim}]}>
      {this.props.children}
    </Animated.View>
  );
}

module.exports = React.createClass({
  getInitialState: get_initial_state,
  on_animated_end: on_animated_end,
  componentWillReceiveProps: component_will_receive_props,
  render: render
});

var styles = StyleSheet.create({
    fullOverlay: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        position: 'absolute'
    },
    emptyOverlay: {
        backgroundColor: 'transparent',
        position: 'absolute'
    }
});
