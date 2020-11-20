import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import RunningProject from './Components/RunningProject/RunningProject';
import OurAchievements from './Components/OurAchievements/OurAchievements';
import DedicatedTeam from './Components/DedicatedTeam/DedicatedTeam';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <RunningProject />
      <OurAchievements />
      <DedicatedTeam />
      <Footer />
    </>
  );
}

export default App;
