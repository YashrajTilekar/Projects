import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionclick';
import ClassClick from './components/classclick';
import EventBind from './components/eventbind';
import ParentComponent from './components/parentcomponent';
import UserGreeting from './components/usergreeting';
import NameList from './components/namelist';

function App(){
    return (
        <div className='App'>
            <NameList />

            {/* <UserGreeting /> */}

            {/* <ParentComponent /> */}

            {/* <EventBind /> */}

            {/* <FunctionClick />
            <ClassClick /> */}

            {/* <Counter />
            <Message />
            <Greet name = "Yashraj" surname = "Tilekar">
                <p>This is Children props</p>
            </Greet>

            <Greet name = "Pranav" surname = "Rathi">
                <button>Action</button>
            </Greet>
            <Greet name = "Yugandhar" surname = "Pawar" /> */}
            
           {/*  <Welcome name = "Yashraj" surname = "Tilekar"/> 
            <Welcome name = "Pranav" surname = "Rathi"/> 
            <Welcome name = "Yugandhar" surname = "Pawar" /> 
            <Hello /> */}
        </div>
    );
}

export default App;