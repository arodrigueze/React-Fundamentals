import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import _ from 'lodash'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { openAddProductModal, addProduct } from '../redux/ActionCreators'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  select: {
    minWidth: 550
  }
};

const mapStateToProps = state => {
  return {
    products: state.products,
  }
}

const mapDispatchToProps = { openAddProductModal, addProduct }

class AddProductModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: "Others",
      name: "",
      price: "",
      stocked: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleTextFieldChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleTextFieldChangePrice = (e) => {
    this.setState({
      price: e.target.value
    });
  }

  handleChange = event => {
    this.setState(() => {
      return {
        category: event.target.value
      }
    });
  };

  render() {

    return (
      <form>
        <Dialog open={this.props.products.openModalAddProduct}>
          <DialogTitle id="form-dialog-title">ADD PRODUCT</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill the data requested in this dialog to add a product to our
              table, including Product Name, Price and Category
              </DialogContentText>
            <TextField
              margin="dense"
              id="productName"
              label="Product Name"
              type="text"
              fullWidth
              onChange={this.handleTextFieldChangeName}
            />
            <TextField
              margin="dense"
              id="price"
              label="Price"
              type="number"
              fullWidth
              onChange={this.handleTextFieldChangePrice}
            />
            {this.renderCategories()}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.openAddProductModal} color="primary">
              Cancel
              </Button>
            <Button onClick={this.mapProductToState} color="primary">
              Add
              </Button>
          </DialogActions>
        </Dialog>
      </form>
    );
  }

  mapProductToState = () => {
    this.props.addProduct({
      category: this.state.category,
      name: this.state.name,
      price: `$${this.state.price}`,
      stocked: this.state.stocked
    })
    this.props.openAddProductModal()
  }

  renderCategories = () => {
    const { classes } = this.props;
    return <Select
      value={this.state.category}
      className={classes.select}
      onChange={this.handleChange}
      inputProps={{
        name: 'category',
        id: 'categoryId',
        value: this.state.category
      }}
    >
      {this.getSelectItems()}
    </Select>
  }

  getSelectItems = () => {
    const categories = _.chain(this.props.products.products)
      .map('category')
      .uniq()
      .value()

    return _.map(categories, category => {
      return <MenuItem value={category} key={category}>{category}</MenuItem>
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProductModal))