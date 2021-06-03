import WeatherContainer from "./WeatherContainer";
import ProfileContainer from "./ProfileContainer";
import { Route } from "react-router";
import { NavLink } from "react-router-dom";

const Main = (props) => {
  return (
    <div className="main">
      <div className="nav">
        <NavLink className="nav__item" activeClassName="item active" to="/weather">Погода</NavLink>
        <NavLink className="nav__item" activeClassName="item active" to="/profile">Детали</NavLink>
        <NavLink className="nav__item" activeClassName="item active" to="/main">Главная</NavLink>
      </div>
      <h1 className="main-title"> <i class="fas fa-cloud"></i>weather app</h1>
      <Route path="/weather" render={() => <WeatherContainer />} />
      <Route path="/profile/:cityId?" render={() => <ProfileContainer />} />
    </div>
  );
};
export default Main;
