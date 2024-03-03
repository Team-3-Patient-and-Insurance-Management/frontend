import React, { useState, useEffect } from 'react';

export default function DoctorUser() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:8080/getUser?userID=l6cdDWJFUVNP2DR3TzZuIavMnuu1";

  const fetchInfo = async () => {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1 style={{ color: "green" }}>Using JavaScript Fetch API</h1>
      <center>
        <div
          style={{
            width: "15em",
            backgroundColor: "#35D841",
            padding: 2,
            borderRadius: 10,
            marginBlock: 10,
          }}
        >
          <h2 style={{ color: "black" }}>{data.toString()}</h2>
          <p style={{ fontSize: 20, color: 'white' }}>First Name: {data.firstName}</p>
          <p style={{ fontSize: 20, color: 'white' }}>Last Name: {data.lastName}</p>
          <p style={{ fontSize: 20, color: 'white' }}>Address: {data.streetAddress}</p>
          <p style={{ fontSize: 20, color: 'white' }}>Phone Number: {data.phoneNumber}</p>
          <p style={{ fontSize: 20, color: 'white' }}>Email: {data.email}</p>
          <p style={{ fontSize: 20, color: 'white' }}>Date of Birth: {data.dateOfBirth}</p>

          <p style={{ fontSize: 20, color: 'white' }}>country: {data.country}</p>
          <p style={{ fontSize: 20, color: 'white' }}>lic: {data.doctorLicense}</p>

        </div>
      </center>
    </div>
  );
}
