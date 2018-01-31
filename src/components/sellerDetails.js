import React , { Component } from 'react';
var Store = require('../store.png');

class Seller extends Component {
  render(){

    return(
      <div className="container seller-detail">

            <h5 className="display-6 desc-title">Seller Details</h5>

            {this.props.data.map((value,key)=>{
              return (
                 <div className="desc-content" key={key}>
                   <div className="row">
                     <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                       <p>Name</p>
                     </div>
                     <div className="col-md-2 col-sm-2 col-2 col-lg-2">
                       <p>:</p>
                     </div>
                     <div className="col-md-5 col-sm-5 col-5 col-lg-5 text-left">
                       <p>{value.profile.name}</p>
                     </div>
                   </div>
                   <div className="row">
                     <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                       <p>Address</p>
                     </div>
                     <div className="col-md-2 col-sm-2 col-2 col-lg-2">
                       <p>:</p>
                     </div>
                     <div className="col-md-5 col-sm-5 col-5 col-lg-5 text-left">
                       <p>{value.location.district_name} , {value.location.state_name}</p>
                     </div>
                   </div>
                 </div>
              )
            })}


            <div >
              <p className="Appname download app-title">
                <span>Download the App from </span>
                <a href="https://play.google.com/store/apps/details?id=com.ionicframework.agri613318&hl=en"><img src={Store} width="100px" alt="play store"/></a>
              </p>
            </div>
            </div>
    );
  }
}

export default Seller;
