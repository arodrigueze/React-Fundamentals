import React, { Component } from 'react';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import styled from 'styled-components'

const StyledTableCell = styled(TableCell)`
  letter-spacing: 8px !important;
  font-weight: bold !important;
  font-size: 16px !important;
  background-color: #d1c8f8;
  color: #585373;
`

function AddProductModal (props) {
  const category = props.category;

  return (
    <div>Hola</div>
  );
}

export default AddProductModal