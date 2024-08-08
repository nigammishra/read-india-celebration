// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
    
//     <div className="App">
      
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import About from './pages/About'
import Partners from './component/Partners';
import Initiative from './pages/Initiative';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
// import ImageSlider from './Imageslider';
function App() {
  return (
    <Router> 
      <Header/>
      {/* <Header/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Initiative" element={<Initiative/>}/>
        <Route exact path="/Gallery" element={<Gallery/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <ImageSlider/> */}
      <Partners/>
      <Footer/>
    </Router>
  );
}

export default App;