import React, { useState, useEffect } from 'react';
import ListCast from './components/ListCast';
import Modals from './components/Modals';

function App() {
  let [memberInfo, setMemberInfo] = useState(null);
  const [cast, setCast] = useState(null);

  async function fetchCast() {
    const response = await fetch('cast.json');
    setCast(await response.json());
  }

  useEffect(() => {
    fetchCast();
  });

  return (
    <div className="container">
      <hgroup>
        <img src="images/group.svg" alt="StarGazers Group" />
        <h1>Meet the Stargazers</h1>
        <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <ListCast 
          onChoice={(info) => { setMemberInfo(info) }}
          cast={cast} />
          { memberInfo && 
            <Modals member={memberInfo} 
            handleClose={() => {setMemberInfo(null)}}/>
          }
      </hgroup>
    </div>
  )
}
export default App
