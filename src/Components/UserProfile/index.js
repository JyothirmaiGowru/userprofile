const UserProfile = props => {
  const {userdetails} = props
  const {imageurl} = userdetails

  return (
    <div><img src={imageurl} /> </div>
  )
}

export default UserProfile
