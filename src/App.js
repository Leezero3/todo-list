import React from "react";
import "./App.css";
import Layout from "./Layout";
import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([
        { id: 0, title: "Javascript 공부하기", text: "자바스르크립트를 공부해 봅시다", isDone: false },
        { id: 1, title: "React 공부하기", text: "리액트를 공부해 봅시다", isDone: false },
    ]);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const textChangeHandler = (event) => {
        setText(event.target.value);
    };

    const clickButtonHandler = () => {
        const newTodos = {
            id: todos.length + 1,
            text: text,
            title: title,
        };
        setTodos([...todos, newTodos]);
    };

    // 삭제버튼
    const clickRemoveButtonHandler = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    // 완료버튼
    const clickClearButtonHandler = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <Layout>
            <div>
                <div>
                    제목 : &nbsp;
                    <input value={title} onChange={(event) => titleChangeHandler(event)} />
                    <br />
                    내용 : &nbsp;
                    <input value={text} onChange={textChangeHandler} />
                    <br />
                </div>
                <br />
                <button onClick={clickButtonHandler}>추가하기</button>
                <div className="app-style">
                    {todos.map(function (item) {
                        return (
                            <div key={item.id} className="square-style">
                                <div>{item.text}</div>
                                <br />
                                <div>{item.title}</div>
                                <button onClick={() => clickRemoveButtonHandler(item.id)}>삭제</button>
                                <button onClick={() => clickClearButtonHandler(item.id)}>완료</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default App;
