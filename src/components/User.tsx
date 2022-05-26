import React from 'react'
import css from '../index.module.css'
import { SkeletonProfile } from './skeletons/partials/SkeletonProfile';



interface UserProps {

}

export const User: React.FC<UserProps> = ({ }) => {
  const [profile, setProfile] = React.useState({ username: null, email: null, website: null });

  React.useEffect(() => {
    setTimeout(async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const json = await response.json()
      setProfile(json)
    }, 6000)
  })
  console.log(profile)
  return (
    <div className={css.user}>
      <h2>User</h2>
      {profile &&
        (<div className={css.profile}>
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website ?? ""}>{profile.website}</a>
        </div>)
      }
      {!profile.email && <SkeletonProfile />}
    </div>

  );
}