import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

  const Dashoard = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    const dataArray =[];
    const datasetArray =[];
    const fetchData = () => {
      return fetch("https://restcountries.com/v2/all")
            .then((response) => response.json())
            .then((data) => {
              data.map((data, index) => {
                //const { code = '' } = data.currencies[0] || '';
                // console.log("aaaaa >>>", data.currencies);
                // console.log("code >>>", code);
                dataArray.push({"name": data.name, "capital": data.capital, "cioc": data.cioc});
              });
              localStorage.setItem('cityData', JSON.stringify(dataArray));
              setUser(JSON.parse(localStorage.getItem('cityData')));
            });
    }
  
    useEffect(() => {
      if(JSON.parse(localStorage.getItem('login')) === false){
        navigate("/login");
      }
      fetchData();
    },[])
  console.log(datasetArray);
    const columns = [{
      selector: row => row.name,
      name: 'City Name'
    }, {
      selector: row => row.capital,
      name: 'Capital'
    }, {
      selector: row => row.cioc,
      name: 'Currency'
    }];
  //   const columns = [
  //     {
  //         name: 'Title',
  //         selector: row => row.title,
  //     },
  //     {
  //         name: 'Year',
  //         selector: row => row.year,
  //     },
  // ];
  const logout = () => {
    localStorage.setItem('login', false);
    navigate("/login")
  };
  return (
    <div>
      <Row>
      <Button onClick={logout}>Log Out</Button>
      </Row>
      <Row>
        <DataTable
        columns={columns}
        data={user}
        />
      </Row> 
    </div>
  );
}
export default Dashoard