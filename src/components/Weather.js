import React from "react";
import { NavLink } from "react-router-dom";
import { closeCard } from "../redux/home-reducer";



const Weather = (props) => {
  let cityName = React.createRef();

  const onChangeInputText = () => {
    props.updateText(cityName.current.value);
  };

  return (
    <div className="weather">
      <div className="weather-body">
        <div className="search-block">
          <button
            className="search-block__btn"
            onClick={() => {
              props.showCityWeather(cityName.current.value);
            }}
          >
            search
          </button>
          <input
            className="search-block__input"
            placeholder="Введите город"
            ref={cityName}
            onChange={onChangeInputText}
            type="text"
            value={props.inputText}
          />
        </div>
        <div className="city-wrapper">
          {[].concat(props.cities).map((c) => {
            return (
              <div className="card" key={c.id}>
                <div
                  className="card__close"
                  onClick={() => {
                    props.closeCard(c.id);
                  }}
                >
                  <img
                    className="card__close-img"
                    src="https://image.flaticon.com/icons/png/128/1828/1828665.png"
                    alt="close"
                  />
                </div>
                <h3 className="card__name"> {c.name}</h3>
                <p className="card__country"><i class="fas fa-street-view card__location-icon"></i> {c.sys.country}</p>
                <div className="card__border"></div>
                <img
                  src={
                    "http://openweathermap.org/img/w/" +
                    c.weather[0].icon +
                    ".png"
                  }
                  alt="weather"
                  className="card__img"
                />

                <p className="card__temp">
                  {Math.round(c.main.temp - 273)}&deg;C
                </p>
                <p className="card__description">{c.weather[0].main}</p>
                <NavLink to={`/profile/${c.id}`}>
                  <button className="card__btn">go</button>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
