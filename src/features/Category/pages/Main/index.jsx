import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CategoryList from 'components/categories/CategoryList';
import { getCategoriesAction } from '../../store/actions';
import Loading from 'components/Loading';

class CategoryPage extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <Fragment>
        {categories ? <CategoryList categories={categories} /> : <Loading />}
      </Fragment>
    );
  }
}

CategoryPage.propTypes = {
  categories: PropTypes.array,
  getCategories: PropTypes.func,
};

const mapStateToProps = (state) => ({
  categories: state.categories.items,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategoriesAction()),
});

const connectedCategoryPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryPage);

export { connectedCategoryPage as CategoryPage };
