import './App.css';
import All from './components/All';
import Bank from './components/Bank';
import Forms from './components/Forms';
import Fsearch from './components/Fsearch';
import Products from './components/Products';
import Searchbar from './components/Searchbar';
import Slidebar from './components/Slidebar';

import './css/bootstrap.css';

function App() {
  return (
    <>
    <div className='container-fluid sample'>
      <div className='row'>
      <Fsearch />
      </div>
      <div className='row'>
        <Searchbar/>

      </div>
      <div className='row'>
        <Slidebar/>
      </div>
      <div className='row'>
        <Bank/>
      </div>
      <div className='row'>
        <All/>
        <Products/>
      
      </div>
      <div className='row'>

        <Forms/>
      </div>
      
    </div>
    
    </>
  );
}

export default App;
