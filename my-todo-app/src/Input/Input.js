import React from 'react';
import "./Input.css"

const Input = () => {
    const onSubmitHandler = (event) => {
        console.log("Form submitted")
    };

    const onChangeHandler = (event) => {
        console.log("Input changed")
    };


    return (
        <React.Fragment>
            <form onSubmit={onSubmitHandler}>
                <input
                    type='text'
                    placeholder='📝 Add Task'
                    className = "appInput"
                    onChange={onChangeHandler}
                />
            </form>
        </React.Fragment>
    );
};

export default Input