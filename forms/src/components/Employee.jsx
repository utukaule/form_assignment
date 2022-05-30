
import React, { useState, useEffect } from "react";
import { Employeeinput } from "./Employeeinput";

import { EmployeeData } from "./showEmployee";

import "./form.css";

export const Employee = () => {


    const [show, setShow] = useState(true);

    const [formdata, setFormdata] = useState({
        Name: "",
        Age: "",
        Gender: "",
        Department: "",
        Role: "",
        Salry: "",
        Maritialstate: "",
        Address: ""

    });

    const [data, setData] = useState([]);

    const handleChange = (e) => {

        setFormdata({
            ...formdata, [e.target.id]: e.target.value ,
        })

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            await fetch(` http://localhost:8080/posts`, {

                method: "POST",
                body: JSON.stringify(formdata),
                headers: { "Content-Type": "application/json" }

            })

            getdata()

        }
        catch (err) {

            console.log(err)

        }
    }

    const getdata = async () => {
        try {

            let data = await fetch("http://localhost:8080/posts");

            data = await data.json();

            //console.log(data)
            setData(data);

        }
        catch (err) {
            console.log(err)
        }
    };


    useEffect(() => {

        getdata();

    }, []);


    return (
        <div>


            <button className="btn1" onClick={() => {
                setShow(!show);
            }}> Form  </button>



            {show ? null : <Employeeinput handleChange={handleChange} handleSubmit={handleSubmit} data={data} />}

            <EmployeeData data={data} />

        </div>
    )
}