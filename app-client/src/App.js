import './App.css';
import { React, useEffect, useState } from 'react'
import AppRouter from './router'
import { callMyServer } from './service/user-service'

function App() {
  const [result, setResult] = useState()

  //יוזאפקט עוזר לנו להעלות את הפונקציה בתחילה
  useEffect(callBasicApi, [])

  function callBasicApi() {
    callMyServer().then(res => { setResult(res) })
  }
  useEffect(callMyServer, [])

  return (
    <div className="App">
      {result}
      <AppRouter />
    </div>
  );
}

export default App;
