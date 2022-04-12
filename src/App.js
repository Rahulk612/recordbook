import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { StudentList } from './components/StudentsList';
import { AddNew } from './components/AddStudent';

function App() {
  return (
    <div className="App">
      <StudentList/>
    </div>
  );
}

export default App;
