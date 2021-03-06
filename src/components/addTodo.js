import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions";

const AddTodo = ({dispatch}) => {
    let input;
    let dateInput;

    return (
        <div>
            <h1 className="text-2xl text-center">
                Make your task
            </h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }
                    dispatch(addTodo(input.value, dateInput.value));
                    input.value = '';
                    dateInput.value = ' ';
                }}
                className="mt-16"
            >
                <input
                    ref={node => (input = node)}
                    className="py-2 border-b focus:border-gray-600 border-gray-400 w-64 bg-grey-100"
                    required
                    placeholder='Ex. Write a new blog post!'
                />

                <input ref={node => (dateInput = node)}
                       className="py-2 bg-grey-100 ml-4 bordre-none"
                       type="date"
                       id="todo"
                       name="todo1"
                       min="2001-01-01"
                       required
                />

                <button type="submit"
                        className="py-2 px-6"
                        aria-label="Add Task">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="butt"
                        strokeLinejoin="arcs"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);
