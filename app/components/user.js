var React = require('react-native');
var style_sheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;
var TouchableOpacity = React.TouchableOpacity;

var Signin = require('./signin.js');

function render() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
    style={styles.click_and_disappear}
    onPress={() => this.props.parent.setState({show_user: false})}>
      </TouchableOpacity>
      <Signin />
    </View>
  );
}

var user = React.createClass({
  render: render
});

var styles = style_sheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'blue',
    flex: 1,
    padding: 10,
    //paddingBottom: 6,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  click_and_disappear: {
    flex:1,
    borderWidth: 1,
    borderColor: 'green'
  },
  user: {
    backgroundColor: 'white',
    height: 100
  }
});

module.exports = user;
