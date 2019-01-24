import React from 'react';
import '../App.css';

const EditFriend = props => {
  return (
    <div>
      <form>
      Name: <input placeholder="Name" type="text"
      onChange={props.editHandler} name="nameEdit" />
      <button onClick={props.saveEdit} value={props.nameValue}>Save</button>
      </form>