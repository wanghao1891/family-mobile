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
      <TextInput
         style={styles.username}
         placeholder='Current Password'
         value={this.state.current_password}
         onChangeText={(text) => this.setState({current_password: text})}
         secureTextEntry={true}>
      </TextInput>
      <TextInput
         style={styles.password}
         placeholder='New Password'
         value={this.state.new_password}
         onChangeText={(text) => this.setState({new_password: text})}
         secureTextEntry={true}>
      </TextInput>
      <TextInput
         style={styles.password}
         placeholder='New Password (again)'
         value={this.state.new_password_again}
         onChangeText={(text) => this.setState({new_password_again: text})}
         secureTextEntry={true}>
      </TextInput>
      <TouchableOpacity style={styles.signin_button}
                        onPress={this.change_password}
                        underlayColor='#99d9f4'>
        <Text style={styles.signin_text}>Change password</Text>
      </TouchableOpacity>
    </View>
  );
}

function change_password() {
  Meteor.Accounts.changePassword(this.state.current_password,
                                 this.state.new_password,
                                 function(error) {
                                   if(error) {
                                     console.log('change password:', error);
                                   }
                                 });
}

function get_initial_state() {
  return {
    current_password: '',
    new_password: '',
    new_password_again: ''
  };
}

var change_password = React.createClass({
  render: render,
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

module.exports = change_password;
