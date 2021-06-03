import{cityWeatherAPI} from '../api/api';

let initialState = {
  cities: [],
  inputText: "",
  preloader: false,
};

const homeReducer = (state = initialState, action) => {
  let currentCity = 0;

  switch (action.type) {
    case "SET_CITY": {
      let copy = { ...state };
      copy.cities = [...state.cities];
      copy.cities.push(action.city);
      copy.inputText = "";
      if (copy.cities.length > 3) {
        alert("нельзя вывес больше трех городов за раз");
        copy.cities = [];
      }
      copy.cities.map((c) => {
        if (c.name == copy.cities[0].name) {
          currentCity += 1;
          console.log(currentCity);
          if (currentCity == 2) {
            copy.cities.pop(copy.cities);
            currentCity = 0;
          }
        }
      });
      return copy;
    }
    case "UPDATE_INPUT_TEXT": {
      return {
        ...state,
        inputText: "",
        inputText: action.newText,
      };
    }
    case "TOGGLE_PRELOADER": {
      return {
        ...state,
        preloader: action.isFetching,
      };
    }

    case "CLOSE_CARD": {
      return {
        ...state,
        cities: state.cities.filter((c) => {
          if (c.id != action.cityId) {
            return { ...c };
          }
        }),
      };
    }
  }
  return state;
};

export const setCity = (city) => {
  return { type: "SET_CITY", city };
};
export const updateText = (newText) => {
  return { type: "UPDATE_INPUT_TEXT", newText };
};
export const isPreloader = (isFetching) => {
  return { type: "TOGGLE_PRELOADER", isFetching };
};

export const closeCard = (cityId) => {
  return { type: "CLOSE_CARD", cityId };
};

export const getCityWeatherThunkCreator = (cityName) => {
  return (dispatch) => {
        dispatch(isPreloader(true))
      cityWeatherAPI.showWeather(cityName)
      .then((response) => {
      dispatch(isPreloader(false));
     dispatch(setCity(response.data))
    });
  };
};
export default homeReducer;
