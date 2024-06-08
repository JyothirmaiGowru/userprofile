import './index.css'

const UserProfile = props => {
  const {userdetails} = props
  const {imageurl, name, role} = userdetails

  return (
    <div className="user-card-container">
      <img src={imageurl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </div>
  )
}

export default UserProfile
