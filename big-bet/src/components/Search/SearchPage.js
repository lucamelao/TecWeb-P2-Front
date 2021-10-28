// Template extraído de:
// https://medium.com/@pradityadhitama/simple-search-bar-component-functionality-in-react-6589fda3385d

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import UserBetList from './UserBetList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [userBetListDefault, setUserBetListDefault] = useState();
  const [userBetList, setUserBetList] = useState();

  const fetchData = async () => {
      // vem da API
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setUserBetList(data) 
         setUserBetListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = userBetListDefault.filter(userBet => {
      return userBet.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setUserBetList(filtered);
  }

//   useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>User's Bets List</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <UserBetList userBetList={userBetList}/>
    </>
   );
}

export default SearchPage