import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/header"
import userParcelsAction from "../../actions/userParcelActions";
import image from '../../assets/images/avatar.jpg';

export class UserParcelView extends Component {
    componentDidMount = () => {
         this.props.userParcelsAction(localStorage.getItem("userID"));
    }

    render() {
    const user_parcels = Object.values(this.props.parcels); 

      return (
        <div>
          <Header />
          <div className="main-content">
                <h2>Welcome to SEND-IT! We deliver as fast as you create your orders!</h2>

                <div className="parcel-link"><a href="/order">Send a Parcel</a></div>
                <div className="user_profile" id="my_profile">
                    <img src={image} alt="text"/>
                    <div>
                        <h2>{localStorage.getItem('username')}</h2>
                        <p><b>Email:</b> {localStorage.getItem('email')}</p>
                        <p><b>Contact:</b> {localStorage.getItem('contact')}</p>
                    </div>
                </div>

                <div id="user_parcels">
                <table width="99%">
                <thead>
                    <tr id="parcels_head">
                        <th>Sender</th>
                        <th>Receiver</th>
                        <th>Pickup Location</th>
                        <th>Destination</th>
                        <th>Weight</th>
                        <th>Order Date</th>
                        <th>Delivery Status</th>
                        <th>Present Location</th>
                        <th>Edit Destination</th>
                        <th>Cancel Delivery</th>
                        <th>View Detail</th>
                    </tr>
                </thead>
                <tbody>
                
                    {user_parcels.map((parcel)=> {
                       return(
                        <tr id="parcels" key={parcel.parcel_id}>
                            <td>{parcel.delivery_status}</td>
                            <td>{parcel.receivers_name}</td>
                            <td>{parcel.pickup_location}</td>
                            <td id="destinationUpdate">{parcel.destination}</td>
                            <td>{parcel.weight}</td>
                            <td>{parcel.order_date}</td>
                            <td id="parcelCancel">{parcel.delivery_status}</td>
                            <td>{parcel.present_location}</td>
                            <td>
                            <p className="links">
                            <label><button >Edit</button></label>
                            </p>
                            </td>
                            <td>
                            <p className="links">
                            <label><button >Cancel</button></label>
                            </p>
                            </td>
                            <td><p className="links">
                                <label><a >View</a></label>
                            </p></td>
                        </tr>
                         )
                         
                      })
                    }
                 
                    </tbody>
                </table>

                </div>
            </div>
        </div>
      );
    }
}

export const mapStateToProps = state => ({
   parcels: state.userParcelsReducer.parcels,
});

export default connect(mapStateToProps, 
  { userParcelsAction })(UserParcelView);
