import React, { Component } from "react";

function Appointments({customers}) {

    return (
        <di>
        <table className="appointmentsTable">
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Appointment Time</td>
                </tr>
            </thead>
            <tbody>
                {customers.map((customer, index) => { 
                    return (
                        <tr>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.appointmentTime}</td>
                        </tr>
                    )
                } )}
            </tbody>
        </table>
        </di>
    );
}

export default Appointments;
