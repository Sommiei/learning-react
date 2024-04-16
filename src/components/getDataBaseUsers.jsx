import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const GetDataBaseUsers = () => {
  const [GetData, SetGetData] = useState([]);
  // const [loader, setLoader] = useState(false);
   
  const apiurl = ('https://script.google.com/macros/s/AKfycbxH7_mJOYrn5IpyATacibMcOo9o859Pp5gIQbVZxJzw8NaE91F70BG6SXL_8h-Fd0iD/exec?sheetId=1dPGPmLQSJnQ65XOQ6x6ADxiQ0hXZq7XFrkdJptME1zc&sheetName=Sheet1')

  useEffect(() => {
    // Fetch data when component mounts
    getDataUsers();
  }, [apiurl]);

   const getDataUsers = () => {
    // setLoader(true);
    axios
      .get(apiurl)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        SetGetData(response.data.data);
      })
      .catch(function (error) {
        console.log(error); // Set error message in state
      })
      .finally(function () {
        // setLoader(false);
      });
  };

  return (
    <>
      <div>Axios page: Working with (GET Request)</div>
      {/* <button onClick={getDataUsers} className='w-200 h-50 bg-red-500 rounded-xl'>Get users</button>
      {loader && <div className="text-red-500 font-bold text-5xl">Loading...</div>}
      {GetData.length > 0 && (
        
      )} */}
      <div>
         {GetData.map((person, idx)=>
         <div key={idx}>
          <p>Name: {person.Name}</p>
          <p>Phone Number: {person['Phone Number']}</p>
          <p>Email address: {person['Email address']}</p>
         </div>
         )}
        </div>
    </>
  );
};
