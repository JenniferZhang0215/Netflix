import React, { Component } from "react";
import MovieList from "../components/MovieList";
import BottomList from "../components/BottomList";
import Logo from "../components/Logo";
import { connect } from "react-redux";
import { addAction, removeAction, getAllMoviesAction } from "../actions";
import "../index.css";

class App extends Component {
  componentDidMount = () => {
    const { getAllMovies } = this.props;
    getAllMovies();
  };

  render() {
    const { myList, handleRemove, recommendations, handleAdd } = this.props;
    return (
      <div>
        <Logo />
        <MovieList
          dataProperty={myList}
          actionProperty={handleRemove}
          nameProperty="MyList"
          buttonProperty="Remove"
        />
        <MovieList
          dataProperty={recommendations}
          actionProperty={handleAdd}
          nameProperty="Recommendations"
          buttonProperty="Add"
        />
        <BottomList dataProperty={myList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    myList: state.movieList.mylist,
    recommendations: state.movieList.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleRemove: index => {
      dispatch(removeAction(index));
    },
    handleAdd: index => {
      dispatch(addAction(index));
    },
    getAllMovies: () => {
      dispatch(getAllMoviesAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
