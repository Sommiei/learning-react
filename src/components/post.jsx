import React, { useState } from 'react';
import axios from 'axios';

const SimpleForm = () => {
    const [Data, SetGetData] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    
        const response = axios.get('https://example.com/api/submit');
        .then((response) => {
            console.log(response.status);
            console.log(response.data);
            SetGetData(response.data); // Assuming setGetUsers is a function to update state
          })
          .catch(function (error) {
            console.log(error);
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(error.response.data.message);
            setGetError(error.message); // Set error message in state
          })
          
          
    



    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('https://example.com/api/submit', { name, email });
            setMessage('Success! Your form has been submitted.');
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (

        <div>
            <>
            <div>
                {Data.map((users,idx)=>(
                    <div key={idx}>
                    <p>Name: {users.Name}</p>
                    <p>Phone Number: {users['Phone Number']}</p>
                    <p>Email address: {users['Email address']}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="max-w-md mx-auto mt-5 p-5 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold mb-5">Submit your Name and Email</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                    Submit
                </button>
            </form>
            {message && <div className="mt-3 text-green-600">{message}</div>}
        </div>
        </>
    );
};

export default SimpleForm;
