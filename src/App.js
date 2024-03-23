import './App.css';
import Notification from './component/Notification';
import Todaydate from './component/TodayDate';
import Quotes from './component/Quotes';
import MathResult from './component/MathResult';
import Count from './component/Count';
import Movie from './component/Movie';
import Button from './component/Button';
import UserProfile from './component/UserProfile';
import Modal from './component/Modal';
import Blogpost from './component/Blogpost';
import AgeCheck from './component/AgeCheck';
import Fruits from './component/Fruits';
import Gallery from './component/Gallery';
import Greeting from './component/Greeting';
import Loading from './component/Loading';



function App() {
  return (
    <div className="container" width="750px">
      <header className="App-header">
        <AgeCheck/>
        <Blogpost />
        <Count/>
        <Fruits/>
        <Gallery/>
        <Greeting/>
        <Loading/>
      </header>
    </div>
  );
}
export default App;
