import React, {useState} from 'react'
import {USER} from "../../consts/StorageEntities";
import {DATA_API_URL, SAVE_FILES_BY_USER_ID} from "../../consts/APIUrls";
import axios from "axios";

export const Upload = () => {
    const [user] = useState(sessionStorage.getItem(USER));
    const [userId] = useState(JSON.parse(user).id);
    const [file, setFile] = useState();
    const [success, setSuccess] = useState(false);

    function handleChange(event) {
        setFile(event.target.files[0])
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = DATA_API_URL + SAVE_FILES_BY_USER_ID + userId;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        // TODO Work with msg response
        axios.post(url, formData, config).then((response) => {
            setSuccess(true);
        });

    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Upload File</h1>
                <input type="file" onChange={handleChange}/>
                <br/>
                <button type="submit">Upload</button>

                {/*TODO HERE*/}
                {/*<h1>Upload {success ? "successfully" : "failed"}</h1>*/}
            </form>
        </div>
    );
};