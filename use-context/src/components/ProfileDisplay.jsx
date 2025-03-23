import { useContext } from 'react';
import { UserInput } from './UserProfile';
const ProfileDisplay = () => {
  const user = useContext(UserInput);
  return (
    <div>
      <h1>Profile Display</h1>
      <h2>{user.name}</h2>
    </div>
  );
};

export default ProfileDisplay;
