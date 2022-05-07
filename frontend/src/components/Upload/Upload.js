import React, {useState} from 'react'
import {USER} from "../../consts/StorageEntities";
import {DATA_API_URL, SAVE_FILES_BY_USER_ID} from "../../consts/APIUrls";
import axios from "axios";

export const Upload = () => {
    const [user] = useState(sessionStorage.getItem(USER));
    const [userId] = useState(JSON.parse(user).id);
    const [files, setFiles] = useState([]);
    const [success, setSuccess] = useState(false);

    function handleChange(event) {
        setFiles(event.target.files)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        const url = DATA_API_URL + SAVE_FILES_BY_USER_ID + userId;
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
            formData.append('fileName', files[i].name);
        }

        // TODO Work with msg response
        axios
            .post(url, formData, config)
            .then((response) => {
                alert(JSON.stringify(response.data));
                response.data.forEach(file => {
                    sessionStorage.setItem(JSON.parse(JSON.stringify(file)).originalFilename, JSON.stringify(file));
                });
            setSuccess(true);
        });
    }

    if(success) {
        setSuccess(false);
        setTimeout(function () {
            window.location.reload();
        }, 3000);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>Upload File</h1>
                <input type="file" onChange={handleChange} multiple/>
                <br/>
                <button type="submit">Upload</button>

                {/*TODO HERE*/}
                {/*<h1>Upload {success ? "successfully" : "failed"}</h1>*/}
            </form>
        </div>
    );
};