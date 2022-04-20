import React, {useState} from "react";

export const Home = () => {
    const [user] = useState(localStorage.getItem("user"));

    return (
        <div>
            <h1>{JSON.stringify(user)}</h1>

            <h1>::</h1>

            <h1>{localStorage.length}</h1>
        </div>
    );
};