import React, { createContext, useEffect, useState } from 'react';

// User context creation
export const UserContext = createContext({
 data:null,
 setUserData:() =>{},
 usersList:[],
 setUsersList:() =>{},
 refreshAuth:() =>{}
});

// Making the active user data available over all components
export function UserDataProvider(props){
  
 const [userData, setUser]=useState(null);
 const [usersList, setUsersList]= useState([]);
 
 useEffect(()=>{
   refreshAuth();
 },[]);
 
 // Updating the userData & userList while refreshing the page
 const refreshAuth =()=>{
    const stored_userData = JSON.parse(localStorage.getItem('userData'));
    const stored_usersList = JSON.parse(localStorage.getItem('usersList'));

    if(stored_userData){
      setUser({...stored_userData});
    }
    if(stored_usersList){
      setUsersList([...stored_usersList])
    }
 };
 
 // Updating the active user data
 const addUser = (newUser) =>{
    setUser({...newUser})
 };

 // Updating the users list
 const updateUsersList =(usersList)=>{
   setUsersList([...usersList])
 };

 const contextValue ={
    data: userData,
    setUserData: addUser,
    usersList: usersList,
    setUsersList: updateUsersList
 };

 return <UserContext.Provider value={contextValue}>
    {props.children}
 </UserContext.Provider>
}
