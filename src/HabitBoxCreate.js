import React from "react";

export default function HabitBoxCreate() {
    return (
        <div class="habit-box">
            <input type="text" name="habit-name" placeholder="nome do hábito" />
            <div class="days">
                <p>D</p>
                <p>S</p>
                <p>T</p>
                <p>Q</p>
                <p>Q</p>
                <p>S</p>
                <p>S</p>
            </div>
            <div class="habit-box-buttons">
                <div>Cancelar</div>
                <div>Salvar</div>
            </div>
        </div>
    )
}