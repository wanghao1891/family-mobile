var React = require('react-native');
var style_sheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;
var TouchableOpacity = React.TouchableOpacity;
var TextInput = React.TextInput;

var Meteor = require('react-native-meteor');

function render() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.signin_button}
                        onPress={this.signout}
                        underlayColor='#99d9f4'>
        <Text style={styles.signin_text}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

function get_initial_state() {
  return {
    username: '',
    password: ''
  };
}

function signout() {
  var username = this.state.username;
  var password = this.state.password;

  Meteor.logout(function(err) {
    console.log('logout');
  });

  this.props.parent.hidden_user();
}

var signout = React.createClass({
  render: render,
  signout: signout,
  getInitialState: get_initial_state
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
    margin: 10,
    textAlign: 'center'
  }
});

module.exports = signout;
