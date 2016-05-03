var React = require('react-native');
var style_sheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;
var TouchableOpacity = React.TouchableOpacity;
var TextInput = React.TextInput;

function render() {
  return (
    <View style={styles.container}>
      <TextInput
         style={styles.username}
         placeholder='Username'
         />
      <TextInput
         style={styles.password}
         placeholder='Password'
         />
    </View>
  );
}

var signin = React.createClass({
  render: render
});

var styles = style_sheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 100
  },
  username: {
    borderWidth: 1,
    flex: 1,
    margin: 10,
    marginBottom: 5
  },
  password: {
    borderWidth: 1,
    flex: 1,
    margin: 10,
    marginTop: 5
  }
});

module.exports = signin;
