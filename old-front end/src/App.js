import React, {Component} from 'react';
import './App.css';
import MochooButton from './components/MochooButton/MochooBotton';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import ToolTipFilter from './components/Filters/ToolTipFilter'
import Filter from './components/Filters/Filter'
import ToggleFiltersButton from './components/toggleFiltersButton/toggleFiltersButton';
import {default as configs} from './config/config';
import axios from 'axios';
import Marks from './components/Filters/marks';

class App extends Component {

  state = {
    showMovie: false
  };


  getMovie = async () => {

    const url =  `http://${configs.backEndHost}:${configs.backEndPort}/${configs.backEndApi}/movie`;
    try {
      const response = await axios.get(url);
      // TODO remove this when in prod
      console.log(response.data);
      console.log(url);
      this.setState({
        movie :response.data,
        showMovie: true
      });

    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    let movies = null;

    if (this.state.showMovie) {
      movies = (
          <div>
            <Movie  movie={this.state.movie} />
         </div>
      )
    }

    return (
        <div>

        </div>
    )
  }
}

export default App;
