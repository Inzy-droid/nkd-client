import Home from './pages/Home';
import Navbar from './components/nav/Navbar';
import Sidebar from './components/nav/Sidebar';
const App= () => {
   
  return (
      <div >
          <Navbar/>
          <Sidebar/>
          <Home/>
      </div>
  );
};

export default App;
