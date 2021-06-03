import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux';
import { getCityProfileThunkCreator } from '../redux/profile-reducer';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component{
    constructor(props){  
        super(props)
    }

    componentDidMount(){
        let cityId=this.props.match.params.cityId;
        if(cityId==undefined){
            cityId=703448;
        }
        this.props.getCityProfileThunkCreator(cityId)
    }

    render(){
        return(
            <Profile {...this.props}profile={this.props.profile}/>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        profile:state.profilePage.profile,
    }
}

 let WithUrlDataContainerComponent= withRouter(ProfileContainer);
 export default connect(mapStateToProps,{getCityProfileThunkCreator})(WithUrlDataContainerComponent)