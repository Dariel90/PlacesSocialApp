import React from 'react'
import './NewGoal.css';

const NewGoal = () => {
    return (
        <form className="new-goal">
            <input type="text"></input>
            <button type="submit">Add Goal</button>
        </form>
    )
}

export default NewGoal;
