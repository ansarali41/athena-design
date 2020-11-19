import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import WhatWeDo from './Components/WhatWeDo/WhatWeDo';
import RunningProject from './Components/RunningProject/RunningProject';
function App() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <RunningProject />
    </>
  );
}

export default App;
