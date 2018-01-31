import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchData} from './actions/index';
import ItemDetails from './components/itemdetails';
import ImageCarousel from './components/imagecarousel';
import Seller from './components/sellerDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  componentDidMount()
  {
    let loc = window.location;
    let id = loc.search.substr(1,3);
        console.log(id);
        this.props.fetchData(id);
  }

  render() {
    console.log('the response is',this.props.response);
    if(!this.props.response)
    {
      return (
                  <div className="loading">
                    <h4> Loading <i className="fas fa-spinner"></i></h4>
                  </div>
      );
    }  else if (typeof this.props.response[this.props.response.length]==="undefined")
    {
      return (
              <div className="Message-id-not-found">
              <h4> The Data is not available for the selected id </h4>
              </div>
      );
    } else {
    return (
    <div className="App">
      <div className="header Appname container-fluid">
        <h5 className="app-title">FarmBazaar</h5>
      </div>
      {this.props.response.map((value,key)=>{
        return <ImageCarousel key={key} pics={value.imageArray} />
      })}
       <ItemDetails response={this.props.response}/>
       <Seller data={this.props.response}/>
    </div>
  );
}
  }
}


function mapStateToProps(state)
{
  return {response:state.response}
}

export default connect(mapStateToProps,{fetchData})(App);
