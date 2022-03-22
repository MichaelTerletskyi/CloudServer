import React from "react";

export const Home = () => {
    return (
        <div>
            <h1>{JSON.stringify(localStorage.getItem("user"))}</h1>
            <h1>{JSON.stringify(localStorage.getItem("user") === null)}</h1>
        </div>
    );
};