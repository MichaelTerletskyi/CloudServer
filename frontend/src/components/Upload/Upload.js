import React, {useState} from 'react'
import {USER} from "../../consts/StorageEntities";
import {DATA_API_URL, SAVE_FILES_BY_USER_ID} from "../../consts/APIUrls";
import axios from "axios";
import "./style.scss";
import "./styless.css";

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

        axios
            .post(url, formData, config)
            .then((response) => {
                response.data.forEach(file => {
                    sessionStorage.setItem(JSON.parse(JSON.stringify(file)).originalFilename, JSON.stringify(file));
                });
                setSuccess(true);
            });
    }

    if (success) {
        setTimeout(function () {
            setSuccess(false);
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
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <div className="container p-y-1">
                    <div className="row m-b-1">
                        <div className="col-sm-6 offset-sm-3">

                            <div className="form-group inputDnD">
                                <label className="sr-only">File Upload</label>
                                <input type="file" className="form-control-file text-danger font-weight-bold"
                                       id="inputFile"
                                    // accept="image/*"
                                       onChange={handleChange}
                                       multiple
                                       data-title="Choose a files"/>
                            </div>
                            <button type="submit" className="btn btn-dark btn-block">Upload File</button>
                        </div>
                    </div>
                </div>

                <br/>

                <div id="main">
                    <h1 className="uploadMsg" id="title">{success ? "Upload successfully" : ""}</h1>
                </div>

            </form>
        </div>
    );
};