import Preloader from "./common/Preloader"

const Profile=(props)=>{
 
    if(props.profile==null){
        return <Preloader/>
    }
    return(
        <div className="profile">
         <h3 className="profile__name"> {props.profile.name},{props.profile.sys.country}</h3>
         <p className="profile__temp">{Math.round(props.profile.main.temp-273)}&deg;</p>
         <img src={"http://openweathermap.org/img/w/" + props.profile.weather[0].icon+ ".png"} alt="weather" className="profile__img" />
         <p className="profile__weather">{props.profile.weather[0].main} {props.profile.weather[0].description}</p>
         <div className="profile__min-max">
             <p className="profile__min">Min{Math.round(props.profile.main.temp_min-273)}&deg;C</p>
             <div className="profile__min-max-border"></div>
             <p className="profile__min">Max{Math.round(props.profile.main.temp_max-273)}&deg;C</p>
             <div className="profile__min-max-border"></div>
             <p className="profile__hamidity">Hamidity{props.profile.main.humidity}%</p>
             </div>
      
        </div>
    );
}

export default Profile;