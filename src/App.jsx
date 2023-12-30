import "./App.css";
import Wrapper from "./components/Wrapper";
import ProfileCard from "./components/ProfileCard";
import userProfile from "./assets/images/user.png";
import Card from "./components/Card";
import data from "./data/data";
function App() {
  return (
    <Wrapper className={"wrapper"}>
      <ProfileCard
        imgSrc={userProfile}
        userName={"Jeremy Robson"}
      ></ProfileCard>
      {data.map(({ id, title, cardColor, img, time, timeInWord }) => (
        <Card
          key={id}
          id={id}
          img={img}
          title={title}
          cardColor={cardColor}
          time={time}
          timeInWord={timeInWord}
        />
      ))}
    </Wrapper>
  );
}

export default App;
