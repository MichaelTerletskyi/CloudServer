import React, {forwardRef, useEffect, useRef, useState} from 'react'
import axios from "axios";

import Checkbox from '@material-ui/core/Checkbox'
import MaUTable from '@material-ui/core/Table'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TablePaginationActions from './TablePaginationActions'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableToolbar from './TableToolbar'
import {
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useSortBy,
    useTable,
} from 'react-table'
import {IP_DETAILS, USER} from "../../../consts/StorageEntities";
import {DATA_API_URL} from "../../../consts/APIUrls";

const IndeterminateCheckbox = forwardRef(
    ({indeterminate, ...rest}, ref) => {
        const defaultRef = useRef();
        const resolvedRef = ref || defaultRef;

        React.useEffect(() => {
            resolvedRef.current.indeterminate = indeterminate
        }, [resolvedRef, indeterminate]);

        return (
            <>
                <Checkbox ref={resolvedRef} {...rest} />
            </>
        )
    }
);

const inputStyle = {
    padding: 0,
    margin: 0,
    border: 0,
    background: 'transparent',
};

const EditableCell = ({value: initialValue, row: {index}, column: {id}, updateMyData,}) => {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value)
    };

    const onBlur = () => {
        updateMyData(index, id, value)
    };

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue]);

    return (
        <input
            style={inputStyle}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    )
};

EditableCell.propTypes = {
    cell: PropTypes.shape({
        value: PropTypes.any.isRequired,
    }),
    row: PropTypes.shape({
        index: PropTypes.number.isRequired,
    }),
    column: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
    updateMyData: PropTypes.func.isRequired,
};

const defaultColumn = {
    Cell: EditableCell,
};

const EnhancedTable = ({columns, data, setData, updateMyData, skipPageReset}) => {
    const {
        getTableProps,
        headerGroups,
        prepareRow,
        page,
        gotoPage,
        setPageSize,
        preGlobalFilteredRows,
        setGlobalFilter,
        state: {pageIndex, pageSize, selectedRowIds, globalFilter},
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            autoResetPage: !skipPageReset,
            updateMyData,
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        hooks => {
            hooks.allColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({getToggleAllRowsSelectedProps}) => (
                        <div>
                            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                        </div>
                    ),
                    // The cell can use the individual row's getToggleRowSelectedProps method
                    // to the render a checkbox
                    Cell: ({row}) => (
                        <div>
                            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                        </div>
                    ),
                },
                ...columns,
            ])
        }
    );

    const handleChangePage = (event, newPage) => {
        gotoPage(newPage)
    };

    const handleChangeRowsPerPage = event => {
        setPageSize(Number(event.target.value))
    };

    const removeByIndexs = (array, indexs) => {
        let arr = [];
        for (let i = 0; i < array.length; i++) {
            if (containsIndex(i, indexs)) {
                let removedKey = array[i].originalFilename;
                if (removedKey !== USER && removedKey !== IP_DETAILS) {
                    let removedId = array[i].id;
                    axios.delete(DATA_API_URL + "/delete/file/by/id=" + removedId)
                        .then((response) => {
                            // TODO work with response
                            if (response.data) {
                                sessionStorage.removeItem(removedKey);
                            }
                        });
                }
            } else {
                arr.push(array[i]);
            }
        }
        return arr;
    };

    function containsIndex(i, indexs) {
        for (let j = 0; j < indexs.length; j++) {
            if (i == indexs[j]) {
                return true;
            }
        }
        return false;
    }

    const deleteFileHandler = event => {
        const newData = removeByIndexs(
            data,
            Object.keys(selectedRowIds).map(x => parseInt(x, 10))
        );
        setData(newData)
    };

    const addFileHandler = file => {
        alert("addFileHandler");
        const newData = data.concat([file]);
        setData(newData)
    };

    return (
        <TableContainer>
            <TableToolbar
                numSelected={Object.keys(selectedRowIds).length}
                deleteFileHandler={deleteFileHandler}
                addFileHandler={addFileHandler}
                preGlobalFilteredRows={preGlobalFilteredRows}
                setGlobalFilter={setGlobalFilter}
                globalFilter={globalFilter}
            />
            <MaUTable {...getTableProps()}>
                <TableHead>
                    {headerGroups.map(headerGroup => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <TableCell
                                    {...(column.id === 'selection'
                                        ? column.getHeaderProps()
                                        : column.getHeaderProps(column.getSortByToggleProps()))}
                                >
                                    {column.render('Header')}
                                    {column.id !== 'selection' ? (
                                        <TableSortLabel
                                            active={column.isSorted}
                                            direction={column.isSortedDesc ? 'desc' : 'asc'}
                                        />
                                    ) : null}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <TableCell {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </TableCell>
                                    )
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5, 10, 25, 50, 100, {label: 'All', value: data.length},
                            ]}
                            colSpan={3}
                            count={data.length}
                            rowsPerPage={pageSize}
                            page={pageIndex}
                            SelectProps={{
                                inputProps: {'aria-label': 'rows per page'},
                                native: true,
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </MaUTable>
        </TableContainer>
    )
};

EnhancedTable.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    updateMyData: PropTypes.func.isRequired,
    setData: PropTypes.func.isRequired,
    skipPageReset: PropTypes.bool.isRequired,
};

export default EnhancedTable