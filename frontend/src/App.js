import React from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about thr course Main Topic!' },
    { id: 'cg3', text: 'Help other students in the course' },
  ];

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal/>
      <GoalList goals={courseGoals} />
    </div>
  );
};
//Same
// class App extends React.Component {
//   render(){
//     return <h1 title="This is React">A React App!<span>Hola</span></h1>
//   }
// }

export default App;
