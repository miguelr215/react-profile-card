import './App.css';

function App() {
  return (
    <div className="container">
      <Card />
    </div>
  );
}

function ProfilePic(props) {
  return (
    <div className="profile-pic">
      <img src={props.imgUrl} alt={props.name} />
    </div>
  );
}

function CardDetails(props) {
  return (
    <div className="details">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills-container">
      <Skill skill="HTML" emoji="👌" bgColor="teal" />
      <Skill skill="CSS" emoji="✔️" bgColor="orange" />
      <Skill skill="JavaScript" emoji="👍🏽" bgColor="yellow" />
      <Skill skill="React" emoji="💥" bgColor="skyblue" />
      <Skill skill="Communication" emoji="📞" bgColor="silver" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ background: props.bgColor }}>
      <span>{props.skill}</span> <span>{props.emoji}</span>
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <ProfilePic
        name="Samantha"
        imgUrl="https://randomuser.me/api/portraits/women/95.jpg"
      />
      <CardDetails
        name="Samantha"
        description="Works hard, plays hard! Philadelphia native, pizza and cheesesteak conniseur. Always focused on the goal of getting the job done."
      />
      <SkillList />
    </div>
  );
}

export default App;
