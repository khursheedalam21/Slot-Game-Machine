import logo from './logo.svg';
import './App.css';
import SlotM from './Slot_machine';

function App() {
  return (
    <>
    <div className='heading'>
      <h1>Welcome to <span style={{fontWeight:"bold",color:"blue"}}>Slot Machine Game
      </span></h1>
    </div>
    <div className='Smachine'>
      <SlotM x="😄" y="😄" z="😄"/><hr/>
      <SlotM x="😄" y="😠" z="😄"/><hr/>
      <SlotM x="🍎" y="🍌" z="🍎"/><hr/>
      <SlotM x="❤️" y="❤️" z="❤️"/>
      
      

    </div>
    
    </>
  );
}

export default App;
