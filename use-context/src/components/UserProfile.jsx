import React, { useState, createContext } from 'react';
import ProfileDisplay from './ProfileDisplay';

//create an input that fills up a user information
// empty object to fill userinfo
//1. Name , 2. Last Name, 3. Age, 4. Gender
//then those user information are passed down in Profile Display
export const UserInput = createContext();
const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({ name: '', lastName: '', age: '', gender: '' });
  // The square brackets around e.target.name dynamically access the property of the userInfo object
  // that matches the name attribute of the input field being updated. This allows the function to
  // update the corresponding property in the userInfo object without hardcoding each input field.
  // For this to work, the input's name attribute must match the property name in the userInfo object.

  // This event handler is designed to dynamically update the userInfo state object.
  // It listens for changes in the input fields and updates the corresponding property in the userInfo object.
  // The "e" parameter represents the event object, and "e.target.name" refers to the name attribute of the input field.
  // By using the name attribute as a key, the handler ensures that the correct property in the userInfo object is updated
  // with the value entered by the user ("e.target.value"). This approach eliminates the need for separate handlers for each input field.
  const userInputValues = (e) => {
    // if no square brackets, it treats it as a key in the key value pair which is the property name
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(e);
  };

  return (
    <UserInput.Provider value={userInfo}>
      <div>
        <h2>UserProfile Section</h2>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="name"
            placeholder="Enter your first name"
            onChange={userInputValues}
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            onChange={userInputValues}
          />

          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            placeholder="Enter your age"
            onChange={userInputValues}
          />

          <label htmlFor="gender">Gender:</label>
          <select name="gender" id="gender" onChange={userInputValues}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </form>

        {/* <h1>Profile Information test</h1>
      <h3>{userInfo.name}</h3>
      <h3>{userInfo.lastName}</h3>
      <h3>{userInfo.age}</h3>
      <h3>{userInfo.gender}</h3> */}

        <ProfileDisplay />
      </div>
    </UserInput.Provider>
  );
};

export default UserProfile;
