import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {Global} from './components/Global'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [code,setcode] = useState('in');
  let desh={'in':'India','us':"USA",'cn':'China','kr':'Korea', 'sa':'Saudi Arabia', 'ae':'UAE', 'it':'Itlay', 'ru':'Russia','ua':'Ukraine' }
  const HandleCountry =(e)=>{
    document.getElementById('desh').innerHTML=desh[e];
    setcode(e);
  }

  

  const [mode ,setmode] = useState('light');
    const toggleMode = () =>{
      if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='black';
      }
      else{
        setmode('light');
        document.body.style.backgroundColor='white';
      }
    }

  return (
    <>
      <BrowserRouter>
        <Navbar mode ={mode} toggleMode={toggleMode} HandleCountry={HandleCountry} />
        <Routes>
          <Route path='/' element={<News  key={code}  country={code} category="" Heading="Top Headlines" mode ={mode}/>}/>
          <Route path='/home' element={<News  country={code} category="&category=general" mode ={mode} Heading="Home"/>}/>
          {/* <Route path='/general' element={<News key="general" country={code} category="&category=general" mode ={mode} Heading="General"/>}/> */}
          <Route path='/business' element={<News key="business" country={code} category="&category=business" mode ={mode} Heading="Buisness"/>}/>
          <Route path='/entertainment' element={<News key="entertainment" country={code} mode ={mode} category="&category=entertainment" Heading="Entertainment"/>}/>
          <Route path='/health' element={<News key="health" country={code} category="&category=health" mode ={mode} Heading="Health"/>}/>
          <Route path='/science' element={<News key="science" country={code} category="&category=science" mode ={mode} Heading="Science"/>}/>
          <Route path='/sports' element={<News key="sports" country={code} category="&category=sports" mode ={mode} Heading="Sports"/>}/>
          <Route path='/technology' element={<News key="technology" country={code} category="&category=technology" mode ={mode} Heading="Technology"/>}/>
          <Route path='/Global' element={<Global mode ={mode}/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
