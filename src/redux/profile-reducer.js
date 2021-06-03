import {cityProfileAPI} from '../api/api';
let initialState={
    profile:null,
}

const profilePage=(state=initialState,action)=>{
    switch(action.type){
        case "SET_CITY_PROFILE":{
            return{
                ...state,
                profile:action.city
            }
        }
    }
    return state;
}


export const setCityProfile = (city) => {
    return { type: "SET_CITY_PROFILE",city  };
  };

export const getCityProfileThunkCreator = (cityId) => {
  return (dispatch) => {
   cityProfileAPI.showWeather(cityId).then(response=>{
             dispatch(setCityProfile(response.data))
          })
  };
};


export default profilePage;