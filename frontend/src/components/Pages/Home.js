import React, {useState} from "react";

export const Home = () => {
    const [user] = useState(localStorage.getItem("user"));
    const [files] = useState(localStorage.getItem("files"));

    return (
        <div>
            <h1>{JSON.stringify(user)}</h1>
            <h1>{JSON.stringify(files)}</h1>
        </div>
    );
};