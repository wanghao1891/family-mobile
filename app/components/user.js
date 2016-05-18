var React = require('react-native');
var style_sheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;
var TouchableOpacity = React.TouchableOpacity;

var Signin = require('./signin.js');
var Signout = require('./signout.js');
var ChangePassword = require('./change.password.js');

var Meteor = require('react-native-meteor');

function render() {
  var current_ui;

  if(this.state.show_change_password){
    console.log(ChangePassword);
    current_ui = (
        <ChangePassword parent={this}>
        </ChangePassword>
    );
  } else if(Meteor.user()) {
    current_ui = (
        <Signout parent={this}>
        </Signout>
    );
  } else {
    current_ui = (
        <Signin parent={this}>
        </Signin>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
         style={styles.click_and_disappear}
         onPress={() => this.props.parent.setState({show_user: false})}>
      </TouchableOpacity>
      {current_ui}
    </View>
  );
}

function get_initial_state() {
  return {
    show_change_password: false
  };
}

function hidden_user() {
  this.props.parent.setState({
    show_user: false
  });
}

var user = React.createClass({
  render: render,
  hidden_user: hidden_user,
  getInitialState: get_initial_state
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
