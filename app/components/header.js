var React = require('react-native');
var style_sheet = React.StyleSheet;
var Text = React.Text;
var View = React.View;

function render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{this.props.title}</Text>
    </View>
  );
}

var header = React.createClass({
  render: render
});

var styles = style_sheet.create({
  container: {
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10
  },
  title: {
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 20
  }
});

module.exports = header;
