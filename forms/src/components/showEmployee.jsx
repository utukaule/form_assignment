
import React from "react";

import "./list.css";

export const EmployeeData = ({ data }) => {

    return (

        <div className="main">

            <table  className="table">

                <thead class="thead">

                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Salry</th>
                        <th>Maratial State</th>
                        <th>Address</th>
                    </tr>

                </thead>

                <tbody className="tbody">

                    {data.map((e) =>
                        <tr className="row" >
                            <td>{e.Name}</td>
                            <td>{e.Age}</td>
                            <td>{e.Gender}</td>
                            <td>{e.Department}</td>
                            <td>{e.Role}</td>
                            <td>{e.Salry}</td>
                            <td>{e.Maritialstate}</td>
                            <td>{e.Address}</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}