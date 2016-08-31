import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const TableTransaction = (props) => {
    return (
        <Table>
            <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>Item</TableHeaderColumn>
                    <TableHeaderColumn>Price</TableHeaderColumn>
                    <TableHeaderColumn>Icon</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>H&M</TableRowColumn>
                    <TableRowColumn>$34</TableRowColumn>
                    <TableRowColumn>Icon</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Milk 1L</TableRowColumn>
                    <TableRowColumn>$5.9</TableRowColumn>
                    <TableRowColumn>Icon</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Rent</TableRowColumn>
                    <TableRowColumn>$600</TableRowColumn>
                    <TableRowColumn>Icon</TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Movie ticket</TableRowColumn>
                    <TableRowColumn>$14</TableRowColumn>
                    <TableRowColumn>Icon</TableRowColumn>
                </TableRow>
            </TableBody>
        </Table>
    );
};

TableTransaction.propTypes = {};

export default TableTransaction;