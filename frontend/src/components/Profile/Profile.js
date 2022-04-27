import React, {useState} from "react";

export const Profile = () => {
    const [user] = useState(localStorage.getItem("user"));

    return (
        <>
            <body>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <a>Profile Page of {JSON.stringify(user)}</a>
                <br/>
                <br/>
            </div>
            </body>
        </>
    )
};