import React from 'react'

import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import GlobalFilter from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: 'black',
                backgroundColor: 'mediumspringgreen'
            }
            : {
                color: 'black',
                backgroundColor: 'yellow'
            },
    title: {
        flex: '1 1 100%',
    },
}));

const TableToolbar = props => {
    const classes = useToolbarStyles();
    const {
        numSelected,
        downloadFileHandler,
        deleteFileHandler,
        preGlobalFilteredRows,
        setGlobalFilter,
        globalFilter,
    } = props;
    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography
                    className={classes.title}
                    color="inherit"
                    variant="subtitle1"
                >
                    {numSelected} {numSelected === 1 ? "file" : "files"} selected
                </Typography>
            ) : (
                <Typography className={classes.title} variant="h6" id="tableTitle">

                </Typography>
            )}

            {numSelected > 0 ? (
                <>
                    <Tooltip title="Download">
                        <IconButton aria-label="update" onClick={downloadFileHandler}>
                            <CloudDownloadIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete">
                        <IconButton aria-label="delete" onClick={deleteFileHandler}>
                            <DeleteIcon/>
                        </IconButton>
                    </Tooltip>
                </>
            ) : (
                <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
            )}
        </Toolbar>
    )
};

TableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
    downloadFileHandler: PropTypes.func.isRequired,
    deleteFileHandler: PropTypes.func.isRequired,
    setGlobalFilter: PropTypes.func.isRequired,
    preGlobalFilteredRows: PropTypes.array.isRequired,
    globalFilter: PropTypes.string.isRequired,
};

export default TableToolbar