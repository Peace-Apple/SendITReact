import React from "react";
import image from "../../../assets/images/im3.png"

const ParcelForm = props => (
    <div className="main-content">
    <table>
        <tbody>
        <tr>
            <td>
                <div className="img-order">
                    <img src={image} alt="text" /><br />
                </div>
            </td>
            <td>
            <div className="form-content">
            <form id="create_parcel" onSubmit={props.onSubmit}>
                <table>
                <tbody>
                    <tr>
                    <td colSpan="2"><h2>Create a Parcel Delivery Order</h2></td>
                    </tr>
                    <tr>
                        <td>FROM:</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="text" name="pickup_location" placeholder="Enter pickup location" onChange={props.onChange} required /></td>
                    </tr>
                    <tr>
                        <td>TO:</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="text" name="destination" placeholder="Enter destination" onChange={props.onChange} required /></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="text" name="receivers_name" placeholder="Receivers Name" onChange={props.onChange} required /></td>
                    </tr>
                    <tr>
                        <td>WEIGHT:</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><input type="number" name="weight" placeholder="KG (Eg: 1)" onChange={props.onChange} required /></td>
                    </tr>
                    <tr>
                    <td>
                        <button type="submit" id="parcel_button">Submit</button>
                    </td>
                    <td>
                        <button type="reset">Clear</button>
                    </td>
                    </tr>
                </tbody>
                </table>
            </form>
    
            </div>
            </td>
        </tr>
        </tbody>
    </table>
</div>
);

export default ParcelForm;
