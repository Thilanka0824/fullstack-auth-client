import React from 'react'
import { useAuth } from '../Hooks/Auth'


const ProfileCard = () => {
    const auth = useAuth()
  return (
    <div className='profile-card'>
      <h3>{auth.username}</h3>
      <h3>{auth.userEmail}</h3>
      <h3>{auth.creationDate}</h3>
    </div>
  );
}

export default ProfileCard