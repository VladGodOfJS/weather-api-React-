
import './App.scss';
import Main from './components/Main';


function App(props) {

  return (
    <div className="main-page">
    <div className="container">
  
          <Main store={props.store} state={props.state}/>
          </div>
    </div>
  );
}

export default App;
