import ellipiseIcon from "../assets/images/icon-ellipsis.svg";
const Card = ({ id, cardColor, img, title, time, timeInWord }) => {
  return (
    <div
      className={`card card${id}`}
      style={{ backgroundColor: `${cardColor}` }}
    >
      <div className="iconsCont">
        <img className="icons" src={img} alt="" />
      </div>
      <div className="cardInfo">
        <div className="topic">
          <h3>{title}</h3>
          <img className="ellipsisIcon" src={ellipiseIcon} alt="" />
        </div>
        <div className="content">
          <span className="bigtext">{time}hrs</span>
          <span className="smalltext">
            {timeInWord} - {time}hrs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
