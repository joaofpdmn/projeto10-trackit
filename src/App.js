import React from 'react';
import './style.css';
import './reset.css';
import Footer from './Footer';
import Header from './Header';
import HabitBoxCreate from './HabitBoxCreate';
import MyHabits from './MyHabits';
import HabitBoxList from './HabitBoxList';
import Today from './Today'

export default function App() {
  return (
    <>
    <Header />
    <MyHabits />
    <HabitBoxCreate />
    <HabitBoxList />
    <Today />
    <Footer />
    </>
  );
}

