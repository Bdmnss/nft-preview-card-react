import "./App.css";
import HeroImg from "/images/image-equilibrium.jpg";
import EthereumIcon from "/images/icon-ethereum.svg";
import ClockIcon from "/images/icon-clock.svg";
import AvatarImg from "/images/image-avatar.png";
import HoverImg from "/images/icon-view.svg";

function App() {
  return (
    <>
      <div className="card">
        <div className="image-container">
        <img src={HeroImg} alt="equilibrium image" className="hero-img" />
        <div className="hover-image-div">
          <img src={HoverImg} alt="hover icon" />
        </div>
        </div>
        <div className="text-div">
          <h1>Equilibrium #3429</h1>
          <p>Our Equilibrium collection promotes balance and calm.</p>
        </div>
        <div className="ethereum-options-div">
          <div className="ethereum-div">
            <img src={EthereumIcon} alt="ethereum icon" />
            <p>0.041 ETH</p>
          </div>
          <div className="clock-div">
            <img src={ClockIcon} alt="clock icon" />
            <p>3 days left</p>
          </div>
        </div>
        <div className="creator-div">
          <img src={AvatarImg} alt="avatar" />
          <p>Creation of <span>Jules Wyvern</span></p>
        </div>
      </div>
    </>
  );
}

export default App;
