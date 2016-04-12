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

//if (typeof process === 'undefined') process = {};
//process.nextTick = setImmediate;
//global.process = process;
//
//var DDPClient = require('ddp-client');
//
//let ddpClient = new DDPClient({
//  host: 'localhost',
//  // host: '192.168.1.3', // If using android use your device IP address
//  port: '3000'
//  // url: <your websocket url>
//});

import Meteor, { connectMeteor, MeteorListView } from 'react-native-meteor';
console.log('Meteor', Meteor);
class familymobile extends Component {

//  getInitialState() {
//    return {
//      connected: false,
//      posts: {}
//    };
//  }

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      tasks: {}
    };
  }

  componentDidMount() {
    const url = 'ws://localhost:3000/websocket';
    Meteor.connect(url);
    Meteor.loginWithPassword( 'john', '123456', function(err) {
      console.log('login');
      Meteor.subscribe('tasks');
    });
  }

  getMeteorData() {
    console.log('getMeteorData');

    return {
      tasks: Meteor.collection('tasks').find()
    };
  }

//  componentDidMount() {
//    ddpClient.connect((err, wasReconnect) => {
//      let connected = true;
//      if (err) {
//        connected = false;
//      } else {
//        this.makeSubscription();
//        //this.observePosts();
//      }
//      this.setState({ connected: connected });
//    });
//  }
//
////  componentDidMount() {
////    //var ddpClient = new DDPClient({url: 'ws://localhost:3000/websocket'});
////
////    var ddpclient = new DDPClient({
////      // All properties optional, defaults shown
////      host : "localhost",
////      port : 3000,
////      ssl  : false,
////      autoReconnect : true,
////      autoReconnectTimer : 500,
////      maintainCollections : true,
////      ddpVersion : '1',  // ['1', 'pre2', 'pre1'] available
////      // Use a full url instead of a set of `host`, `port` and `ssl`
////      url: 'ws://localhost:3000/websocket',
////      socketConstructor: WebSocket // Another constructor to create new WebSockets
////    });
////
//////    var ws = new WebSocket('ws://localhost:3000/websocket');
//////
//////    ws.onopen = () => {
//////      // connection opened
//////      ws.send(JSON.stringify({"msg":"connect","version":"1","support":["1","pre2","pre1"]}));
//////    };
//////
//////    ws.onmessage = (e) => {
//////      // a message was received
//////      console.log(e.data);
//////    };
//////
//////    ws.onerror = (e) => {
//////      // an error occurred
//////      console.log(e.message);
//////    };
//////
//////    ws.onclose = (e) => {
//////      // connection closed
//////      console.log(e.code, e.reason);
//////    };
////
////    ddpclient.connect(function() {
////      ddpclient.call('login', [
////        {
////          user: {
////            username: 'john'
////          },
////          password: '123456'
////        }
////      ], function(err, result) {
////        console.log(err, result);
////
////        ddpclient.subscribe('tasks', [], function() {
////          console.log(Date.now(), 'tasks:', ddpclient.collections.tasks);
////        });
////      });
//////      ddpclient.subscribe('tasks');
////    });
////
////    // observe the lists collection
////    var observer = ddpclient.observe('tasks');
////    console.log('observer:', observer);
////    observer.added = function() {
////      console.log('added:', ddpclient.collections.tasks);
////    };
////    observer.changed = function() {
////      console.log('changed:', ddpclient.collections.tasks);
////    };
////    observer.removed = function() {
////      console.log('removed:', ddpclient.collections.tasks);
////    };
////  }
//
//  // This is just extremely simple. We're replacing the entire state whenever the collection changes
//  observePosts() {
////    let observer = ddpClient.observe("tasks");
////    observer.added = (id) => {
////      this.setState({posts: ddpClient.collections.tasks});
////    };
////    observer.changed = (id, oldFields, clearedFields, newFields) => {
////      this.setState({posts: ddpClient.collections.tasks});
////    };
////    observer.removed = (id, oldValue) => {
////      this.setState({posts: ddpClient.collections.tasks});
////    };
//
//    console.log('tasks:', ddpClient.collections.tasks);
//    let observer = ddpClient.collections.observe(() => {
//      return ddpClient.collections.tasks.find();
//    });
//
//    observer.subscribe((results) => {
//      this.setState({tasks: results});
//    });
//  }
//
//  makeSubscription() {
//    ddpClient.subscribe("tasks", [], () => {
//      this.setState({tasks: ddpClient.collections.tasks});
//
//      this.observePosts();
//    });
//  }

  renderRow(task) {
//    console.log('renderRow task:', task);
    return (
        <Text>{task.text}</Text>
    );
  }

  render_tasks() {
    var tasks_collection = Meteor.collection('tasks');
    var tasks = tasks_collection.find();
    return tasks.map(function(task) {
      return <Text key={task._id}>{task.text}</Text>;
    });
  }

  render() {
//    console.log('data:', this.data);
//    let count = Object.keys(this.state.tasks).length;
//    var tasks_collection = Meteor.collection('tasks');
//    var tasks = tasks_collection.find();
//
//    console.log('tasks_collection:', tasks_collection);
//    console.log('tasks:', tasks);
//    console.log('count:', tasks.length);
    return (
      <View style={styles.container}>
        <MeteorListView
           collection='tasks'
           selector={{}}
           options={{sort: {createdAt: -1}}}
           renderRow={this.renderRow}
           />
        {/*this.render_tasks()*/}
      </View>
    );
  }
}

Meteor.connectMeteor(familymobile);

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
