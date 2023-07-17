import Alert from './components/Alert';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
// import About from './components/About';
function App() {
  const [mode,setMode]=useState('light');
 const [alert,setAlert]=useState(null);

 const showAlert=(message,type)=>
 {
  setAlert({
    msg:message,
    type:type
  })
 }

const toggleMode=()=>{
  if(mode==='light')
  {
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  }
else
{
  setMode('light');
  document.body.style.backgroundColor='white';
}
}

  return (
    <>
<NavBar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading="Enter the text to analyze below" mode={mode} />
{/* <About/> */}
</div>
</>
  );
}

export default App;
