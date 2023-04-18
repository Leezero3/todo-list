import React from "react";

function Layout(props) {
    return (
        <>
            <header
                style={{
                    alignItems: "center",
                    border: "1px solid #ddd",
                    display: "flex",
                    height: "50px",
                    justifyContent: "space-between",
                    padding: " 0 20px",
                }}
            >
                <div>My Todo List</div>
                <div>React</div>
            </header>
            {props.children}
        </>
    );
}

export default Layout;
