/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

if (typeof process === 'undefined') process = {};
process.nextTick = setImmediate;
global.process = process;

var DDPClient = require('ddp-client');

class familymobile extends Component {
  componentDidMount() {
    //var ddpClient = new DDPClient({url: 'ws://localhost:3000/websocket'});

    var ddpclient = new DDPClient({
      // All properties optional, defaults shown
      host : "localhost",
      port : 3000,
      ssl  : false,
      autoReconnect : true,
      autoReconnectTimer : 500,
      maintainCollections : true,
      ddpVersion : '1',  // ['1', 'pre2', 'pre1'] available
      // Use a full url instead of a set of `host`, `port` and `ssl`
      url: 'ws://localhost:3000/websocket',
      socketConstructor: WebSocket // Another constructor to create new WebSockets
    });

//    var ws = new WebSocket('ws://localhost:3000/websocket');
//
//    ws.onopen = () => {
//      // connection opened
//      ws.send(JSON.stringify({"msg":"connect","version":"1","support":["1","pre2","pre1"]}));
//    };
//
//    ws.onmessage = (e) => {
//      // a message was received
//      console.log(e.data);
//    };
//
//    ws.onerror = (e) => {
//      // an error occurred
//      console.log(e.message);
//    };
//
//    ws.onclose = (e) => {
//      // connection closed
//      console.log(e.code, e.reason);
//    };

    ddpclient.connect(function() {
      ddpclient.subscribe('tasks', [], function() {
        console.log('tasks:', ddpclient.collections.tasks);
      });
//      ddpclient.subscribe('tasks');
    });

//    // observe the lists collection
//    var observer = ddpclient.observe('tasks');
//    observer.added = function() {
//      console.log(ddpclient.collections.tasks);
//    };
//    observer.changed = function() {
//      console.log(ddpclient.collections.tasks);
//    };
//    observer.removed = function() {
//      console.log(ddpclient.collections.tasks);
//    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('familymobile', () => familymobile);
