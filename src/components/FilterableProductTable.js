import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Modal from '@material-ui/core/Modal';
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar'
import Typography from '@material-ui/core/Typography';
import _ from 'lodash'
import { connect } from 'react-redux'
import logo from '../logo.svg';
import { openAddProductModal } from '../redux/ActionCreators'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 550,
    borderRadius: 20,
    backgroundColor: '#eae5fd'
  },
  title: {
    color: '#585373'
  }
};

const mapDispatchToProps = { openAddProductModal }
class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };

    // Example to show bind options
    // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  render() {
    const { classes, dispatch } = this.props;

    return (
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <div style={{height: '100px', display: 'flex', alignItems: 'center'}}>
              <img src={logo} className="App-logo" alt="logo" />
              <Typography component="h4" variant="h4" className={classes.title}>
                <i>SEARCHABLE PRODUCT TABLE</i> 
              </Typography>
            </div>
            <SearchBar 
              filterText={this.state.filterText}
              inStockOnly={this.state.inStockOnly}
              onFilterTextChange={this.handleFilterTextChange}
              onInStockChange={this.handleInStockChange}
            />
            <ProductsTable {...this.getProductsTableProps()} />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => dispatch(openAddProductModal)}>ADD PRODUCT</Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }

  handleFilterTextChange = (e) => {
    const filterText = e.target.value
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange () {
    this.setState({
      inStockOnly: !this.state.inStockOnly
    })
  }

  getProductsTableProps = () => {
    return {
      filterText: this.state.filterText,
      inStockOnly: this.state.inStockOnly
    }
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(FilterableProductTable))
