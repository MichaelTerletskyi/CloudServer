import React, {useState} from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './components/EnhancedTable'

import {USER_FILES} from "../../consts/StorageEntities";

export const Files = () => {
    const [files] = useState(sessionStorage.getItem(USER_FILES));

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

    const [data, setData] = React.useState(JSON.parse(files));
    const [skipPageReset, setSkipPageReset] = React.useState(false);

    const updateMyData = (rowIndex, columnId, value) => {
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
            <a>{sessionStorage.length}</a>

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