import React , { Component } from 'react';


class ItemDetails extends Component {

  render(){

    return(
            <div className="container item-detail">


                   {this.props.response.map((value,index)=>{
                     return (
                       <div className="item" key={index}>
                         <div className="item-heading">
                        <h5 className="display-6 item_title">Item Details</h5>
                       <p className="text-left post">Posted On : {value.postedOn} </p>
                        </div>

                        <div className="product-title">
                         <p className="title text-center">{value.title}</p>
                        </div>

                       <div className="content">
                       <div className="row">
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5 text-center">
                           <p>Price</p>
                         </div>
                         <div className="col-md-2 col-sm-2 col-2 col-lg-2">
                           <p>:</p>
                         </div>
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5 text-center">
                           <p>{value.unitPrice}</p>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">Category</p>
                         </div>
                         <div className="col-md-2 col-sm-2 col-2 col-lg-2">
                           <p>:</p>
                         </div>
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">{value.category.category_name}</p>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">Sub-Category</p>
                         </div>
                         <div className="col-md-2 col-sm-2 col-2 col-lg-2">
                           <p>:</p>
                         </div>
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">{value.category.subCategory_name}</p>
                         </div>
                       </div>
                       <div className="row">
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">Available Quantity</p>
                         </div>
                         <div className="col-md-2 col-sm-2 col-2 col-lg-2">
                           <p>:</p>
                         </div>
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">{value.quantity}</p>
                         </div>
                       </div>
                     </div>
                       </div>
                     )
                   })}
                   {this.props.response.map((value,index)=>{
                     if(value.delivery==="yes")
                     {
                     return (
                       <div className="row item-delivery" key={index}>
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">Arrange for Delivery</p>
                         </div>
                         <div className="col-md-2 col-sm-2 col-2 col-lg-2">
                           <p>:</p>
                         </div>
                         <div className="col-md-5 col-sm-5 col-5 col-lg-5">
                           <p className="text-center">{value.delivery}</p>
                         </div>
                       </div>
                     )
                   }
                    else{
                      return (
                        <div className="item-delivery">

                        </div>
                      )
                    }
                   })}



                 <div className="description">
                       <h5 className="display-6 desc-title">Description</h5>
                       <div className="desc-content">
                       {this.props.response.map((value,key)=>{
                         return (
                            <p key={key}> {value.comment} </p>
                         )
                       })}
                        </div>
                       </div>

                </div>
    );
  }

}

export default ItemDetails;
