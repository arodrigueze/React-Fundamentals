import './App.css';

import React, { Component } from 'react';

import FilterableProductTable from './components/FilterableProductTable.js'
import Header from './components/Header'
import { connect } from 'react-redux'
import { fetchProducts } from './redux/ActionCreators'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  container: {
    padding: 50,
    maxWidth: '600px'
  }
};

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts)
})

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div className={classes.container}>
          <FilterableProductTable />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App))
