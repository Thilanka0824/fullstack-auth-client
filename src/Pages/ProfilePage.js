import React from 'react'
import { useAuth } from '../Hooks/Auth';
import { AiFillCamera } from 'react-icons/ai';
import ProfileCard from '../Components/ProfileCard';

const ProfilePage = ({item}) => {
  const auth = useAuth()

  
  return (
    // <!-- Button trigger modal -->
    <div className="homepage-main">
      <AiFillCamera size={100} />
      <ProfileCard />
    </div>
  );
}

export default ProfilePage