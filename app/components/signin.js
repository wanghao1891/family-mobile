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
      <TouchableOpacity style={styles.signin_button}
                        underlayColor='#99d9f4'>
        <Text style={styles.signin_text}>Signin</Text>
      </TouchableOpacity>
    </View>
  );
}

var signin = React.createClass({
  render: render
});

var styles = style_sheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: 150
  },
  username: {
    borderWidth: 1,
    flex: 1,
    margin: 10,
    marginBottom: 5,
    //height: 35
  },
  password: {
    borderWidth: 1,
    flex: 1,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    //height: 35
  },
  signin_button: {
    borderWidth: 1,
    margin: 10,
    marginTop: 5
  },
  signin_text: {
    borderWidth: 1,
    margin: 10
  }
});

module.exports = signin;
