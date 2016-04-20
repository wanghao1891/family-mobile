var React = require('react-native');
var style_sheet = React.StyleSheet;
var TextInput = React.TextInput;
var View = React.View;

var Meteor = require('react-native-meteor');

function render() {
  return (
    <View style={styles.container}>
      <TextInput
         style={styles.task_name}
         placeholder='Type to add new tasks'
         value={this.state.task_name}
         onChangeText={(text) => this.setState({task_name: text})}
         onBlur={this.create}
      />
    </View>
  );
}

function create() {
  Meteor.call('tasks.insert', this.state.task_name);
  this.setState({task_name: ''});
}

function get_initial_state() {
  return {
    task_name: ''
  };
}

var create_task = React.createClass({
  render: render,
  getInitialState: get_initial_state,
  create: create
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
  task_name: {
    borderWidth: 1,
    margin: 10,
    width: 200
  }
});

module.exports = create_task;
