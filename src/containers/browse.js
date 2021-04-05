import React, { useContext } from "react";
import { SelectProfileContainer } from "./profiles";
import {FirebaseContext} from "../context/firebase";


export default function BrowseContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  
  const user = firebase.auth().currentUser || {};
  console.log(user);
    return (
      <>
        <SelectProfileContainer user={user}/>
      </>
    );
}
