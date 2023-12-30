const Profile = ({ imgSrc, userName }) => {
  return (
    <div className="profile">
      <img src={imgSrc} alt="" />
      <div className="profileInfo">
        <h1>Report for</h1>
        <p>{userName}</p>
      </div>
    </div>
  );
};

export default Profile;
