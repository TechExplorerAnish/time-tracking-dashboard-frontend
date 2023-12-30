import Profile from "./Profile";
const ProfileCard = ({ imgSrc, userName }) => {
  return (
    <div className="profileCard">
      <Profile imgSrc={imgSrc} userName={userName}></Profile>
      <div className="timerContainer">
        <h2>Daily</h2>
        <h2>Weekly</h2>
        <h2>Monthly</h2>
      </div>
    </div>
  );
};

export default ProfileCard;
