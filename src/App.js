import React from "react";
import "./App.css";
import Layout from "./Layout";
import { useState } from "react";

const App = () => {
    const [todos, setTodos] = useState([
        { id: 0, title: "Javascript 공부하기", text: "자바스크립트를 공부해 봅시다", isDone: false },
        { id: 1, title: "React 공부하기", text: "리액트를 공부해 봅시다", isDone: false },
        { id: 2, title: "Typescript 공부하기", text: "타입스크립트를 공부해 봅시다", isDone: true },
    ]);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const textChangeHandler = (event) => {
        setText(event.target.value);
    };

    // 추가버튼
    const addButtonHandler = () => {
        const newTodos = {
            id: todos[todos.length - 1].id + 1,
            text: text,
            title: title,
            isDone: false,
        };
        setTodos([...todos, newTodos]);
        setTitle("");
        setText("");
    };

    // 삭제버튼
    const RemoveButtonHandler = (id) => {
        const deleteTodos = todos.filter((todo) => todo.id !== id);
        setTodos(deleteTodos);
    };

    // 완료버튼
    const ClearButtonHandler = (id) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone, // isDone 값을 반대로 변경
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    return (
        <Layout>
            <div>
                <div className="add-container">
                    <div className="add-context-container">
                        <div>
                            제목 : &nbsp;
                            <input value={title} onChange={(event) => titleChangeHandler(event)} />
                        </div>
                        <div>
                            내용 : &nbsp;
                            <input value={text} onChange={textChangeHandler} />
                        </div>
                    </div>
                    <button onClick={addButtonHandler}>추가하기</button>
                </div>

                <div>
                    <h1>Working</h1>
                </div>
                <div className="app-style">
                    {todos
                        .filter(function (todo) {
                            return todo.isDone === false;
                        })
                        .map(function (item) {
                            return (
                                <div key={item.id} className="square-style">
                                    <div>{item.text}</div>
                                    <br />
                                    <div>{item.title}</div>
                                    <button onClick={() => RemoveButtonHandler(item.id)}>삭제</button>
                                    <button onClick={() => ClearButtonHandler(item.id)}>완료</button>
                                </div>
                            );
                        })}
                </div>
                <div>
                    <h1>Done</h1>
                </div>
                <div className="app-style">
                    {todos
                        .filter(function (item) {
                            return item.isDone === true;
                        })
                        .map(function (item) {
                            return (
                                <div key={item.id} className="square-style">
                                    <div>{item.text}</div>
                                    <br />
                                    <div>{item.title}</div>
                                    <button onClick={() => RemoveButtonHandler(item.id)}>삭제</button>
                                    <button onClick={() => ClearButtonHandler(item.id)}>취소</button>
                                </div>
                            );
                        })}
                </div>
            </div>
        </Layout>
    );
};

export default App;
