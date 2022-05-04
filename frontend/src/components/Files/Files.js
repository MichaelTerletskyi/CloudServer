import React, {useState} from "react";
import {MDBDataTable} from 'mdbreact';

import "./style.css";
import "./styles.scss";

export const Files = () => {
    const [userFiles] = useState(sessionStorage.getItem("user_files"));
    const [userFilesParse] = useState(JSON.parse(userFiles));

    function getFilesData() {
        let arr = [];
        userFilesParse.forEach(file => {
            arr.push(
                {
                    originalFilename: file.originalFilename,
                    contentType: file.contentType,
                    fileName: file.fileName,
                    dateOfUpload: file.dateOfUpload,
                    displaySize: file.displaySize
                }
            )
        });
        return arr;
    }

    const data = {
        columns: [
            {
                label: 'Original File Name',
                field: 'originalFilename',
                sort: 'asc',
                width: 350,
            },
            {
                label: 'Content Type',
                field: 'contentType',
                sort: 'asc',
                width: 270
            },
            {
                label: 'File Name',
                field: 'fileName',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Date Of Upload',
                field: 'dateOfUpload',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Size',
                field: 'displaySize',
                sort: 'asc',
                width: 270
            },

        ],
        rows: getFilesData()
    };


    return (
        <div>
            <br/>
            <br/>
            <br/>

            <MDBDataTable
                striped
                bordered
                small
                data={data}
                btn
                onPageChange={}
            />

        </div>
    )
};