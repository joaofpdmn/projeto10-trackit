import React from "react";
import Footer from "./Footer";
import HabitBoxList from "./HabitBoxList";
import Header from "./Header";
import MyHabits from "./MyHabits";

export default function Habits(){
    return(
        <>
        <Header />
        <MyHabits />
        <HabitBoxList />
        <Footer />
        </>
    );
}