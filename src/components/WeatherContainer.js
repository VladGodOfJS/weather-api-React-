import { connect } from "react-redux";
import Weather from "./Weather";
import { updateText,isPreloader,closeCard } from "../redux/home-reducer";
import React from 'react';
import Preloader from './common/Preloader';
import {getCityWeatherThunkCreator} from '../redux/home-reducer';
import { compose } from "redux";


class WeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  
  showCityWeather=(cityName)=>{

    this.props.getCityWeatherThunkCreator(cityName);
  }
  render() {
      return(
          <>
           {this.props.preloader? <Preloader/> : null}
           <Weather {...this.props}  showCityWeather={this.showCityWeather}/>
         
          </>
      );
  }
}

let mapStateToProps = (state) => {
  return {
    cities: state.homePage.cities,
    inputText: state.homePage.inputText,
    preloader:state.homePage.preloader,
  };
};

export default compose(
  connect(mapStateToProps, { updateText,isPreloader,closeCard,getCityWeatherThunkCreator })
)
(WeatherContainer)


