import React, {useEffect, useState} from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './components/EnhancedTable'

import {IP_DETAILS, USER} from "../../consts/StorageEntities";

export const Files = () => {
    const [data, setData] = useState([]);
    const [skipPageReset, setSkipPageReset] = useState(false);

    useEffect(() => {
        let arr = [];
        for (let i = 0; i < sessionStorage.length; i++) {
            let key = sessionStorage.key(i);
            if (key !== USER && key !== IP_DETAILS) {
                arr.push(sessionStorage.getItem(key));
            }
        }
        setData(JSON.parse("[" + arr + "]"));
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Original File Name',
                accessor: 'originalFilename',
            },
            {
                Header: 'Content Type',
                accessor: 'contentType',
            },
            {
                Header: 'Size',
                accessor: 'displaySize',
            },
            {
                Header: 'Date Of Upload',
                accessor: 'dateOfUpload',
            },
            {
                Header: 'File Name',
                accessor: 'fileName',
            },
        ],
        []
    );


    const updateMyData = (rowIndex, columnId, value) => {
        alert("updateMyData");
        setSkipPageReset(true);
        setData(old =>
            old.map((row, index) => {
                if (index === rowIndex) {
                    return {
                        ...old[rowIndex],
                        [columnId]: value,
                    }
                }
                return row
            })
        )
    };

    return (
        <div>
            <br/>
            <br/>
            <br/>

            <CssBaseline/>
            <EnhancedTable
                columns={columns}
                data={data}
                setData={setData}
                updateMyData={updateMyData}
                skipPageReset={skipPageReset}
            />
        </div>
    )
};