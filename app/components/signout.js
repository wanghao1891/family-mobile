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
      <TouchableOpacity style={styles.change_password_button}
                        onPress={this.change_password}
                        underlayColor='#99d9f4'>
        <Text style={styles.text}>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signout_button}
                        onPress={this.signout}
                        underlayColor='#99d9f4'>
        <Text style={styles.text}>Sign out</Text>
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

function change_password() {
  this.props.parent.setState({
    show_change_password: true
  });
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
  getInitialState: get_initial_state,
  change_password: change_password
});

var styles = style_sheet.create({
  container: {
    borderWidth: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    height: 150
  },
  change_password_button: {
    borderWidth: 1,
    margin: 10,
    marginBottom: 5
  },
  signout_button: {
    borderWidth: 1,
    margin: 10,
    marginTop: 5
  },
  text: {
    borderWidth: 1,
    margin: 10,
    textAlign: 'center'
  }
});

module.exports = signout;
