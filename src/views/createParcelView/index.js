import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/header"
import ParcelForm from "../../components/parcels/parcelForm";
import parcelAction from "../../actions/parcelActions";
import { toast } from "react-toastify";

export class ParcelView extends Component {
    state = {
        receivers_name: "",
        pickup_location: "",
        destination: "",
        weight: "",
        errors: {}
      };

      componentWillReceiveProps(nextProps){
          if (nextProps.errors.error_message === "Please use character strings") {
            toast.error("Please use character strings, not numbers", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
              });
          } else if(nextProps.data === true){
            
            toast.success("You have successfully posted a parcel delivery order", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: false,
                pauseOnHover: true,
              });
              this.props.history.push("/parcels");
          }
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }); 
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const parcelData = {  
            receivers_name: this.state.receivers_name,
            pickup_location: this.state.pickup_location,
            destination: this.state.destination,
            weight: this.state.weight,
        }
        this.props.parcelAction(parcelData);
      }

    render() {
      return (
        <div>
          <Header />
          <ParcelForm
          onSubmit={this.handleSubmit}
          onChange={this.onChange}
          />
        </div>
      );
    }
}

export const mapStateToProps = state => ({
  isSuccessful: state.parcelReducer.isSuccessful,
  errors: state.parcelReducer.errors,
  message: state.parcelReducer.message,
  data: state.parcelReducer.data,
});

export default connect(mapStateToProps, 
  { parcelAction })(ParcelView);
