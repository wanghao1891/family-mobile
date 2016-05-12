var React = require('react-native');
var style_sheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;
var TouchableOpacity = React.TouchableOpacity;

function render() {
  console.log('user:', this.props.user);
  var user_name;
  if(this.props.user) {
    user_name = this.props.user.username;
  } else {
    user_name = 'Sign in';
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{this.props.title}({this.props.incomplete_count})</Text>
      <TouchableOpacity style={styles.hide_completed_tasks_button}
                        underlayColor='#99d9f4'
                        onPress={this.toggle_hide_completed}>
        <Text style={styles.hide_completed_tasks_text}>Hide Completed Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.user_button}
                        underlayColor='#99d9f4'
                        onPress={this.show_user}>
        <Text style={styles.user_text}>{user_name}</Text>
      </TouchableOpacity>
    </View>
  );
}

function toggle_hide_completed() {
  var parent = this.props.parent;
  parent.setState({hide_completed: !parent.state.hide_completed});
}

function show_user() {
  var parent = this.props.parent;
  parent.setState({show_user: true});
}

var header = React.createClass({
  render: render,
  toggle_hide_completed: toggle_hide_completed,
  show_user: show_user
});

var styles = style_sheet.create({
  container: {
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    borderWidth: 1,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 20
  },
  hide_completed_tasks_button: {
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 20
  },
  hide_completed_tasks_text: {
    fontWeight: 'bold'
  },
  user_button: {
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 20
  },
  user_text: {
    fontWeight: 'bold'
  }
});

module.exports = header;
