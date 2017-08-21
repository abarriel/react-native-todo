import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyleSheet, Text, View, TextInput } from 'react-native';
// import SingleTodo from '../SingleTodo';
import { getVisibleTodos } from '../../selectors';
import { addTodo, deleteTodo, updateTodo } from '../../actions/todos';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: 'center',
    flex: 1,
  },
  h1: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: -1, height: -1 },
  },
});

const App = ({ deleteTodo, todos, updateTodo, addTodo }) => {  // eslint-disable-line 
  const handleKeyPress = ({ key, target: { value } }) => {
    if (key === 'Enter' && value) {
      addTodo(value);
    }
  };

  return (<View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.h1}>odos</Text>
      <TextInput placeholder="What needs to be done?" onKeyPress={handleKeyPress} />
    </View>
    <View style={styles.main}>
      <Text></Text>
    </View>
    <View style={styles.footer} />
  </View>);
};

//   /*return (
//     <div className="todoapp">
//       <header className="header">
//         <h1>todos</h1>
//         <input className="new-todo" type="text" placeholder="What needs to be done?" onKeyPress={handleKeyPress} />
//       </header>
//       <section className="main">
//         <ul className="todo-list">
//           {(todos).map((doc) => <SingleTodo key={doc._id} todo={doc} deleteTodo={deleteTodo} updateTodo={updateTodo} />, todos)}
//         </ul>
//       </section>
//     </div>);

const mapStateToProps = createStructuredSelector({
  todos: getVisibleTodos,
});

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
