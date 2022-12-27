import React,{useEffect} from 'react';
import {Plus, RefreshCcw, Search, Trash2} from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { addModalState } from '../../redux/features/modal/modalSlice';
import { addNotes, addSearchvalue, filterSearch, high, isSearched, latest, normal, oldest } from '../../redux/features/notes/notesSlice';

const Navbar = ({refresher}) => {

const dispatch = useDispatch();
const searchValue = useSelector((state) => state.notes.searchValue);

useEffect(() =>{
  if(searchValue === ''){
    JSON.parse(localStorage.getItem('myNotes')) == null 
    ? dispatch(addNotes([])) 
    : dispatch(addNotes(JSON.parse(localStorage.getItem('myNotes'))))
  }
},[searchValue])

const deleteAll = () =>{
    const pass = window.confirm('Are you sure you want to delete all notes ?')
    if(!pass){
        return
    }
    localStorage.removeItem('myNotes')
    refresher()
}

  return (
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">My Notes</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item dropdown my-3">
          <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By:
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" onClick={()=> dispatch(latest())}>Latest first</a></li>
            <li><a className="dropdown-item" onClick={()=> dispatch(oldest())}>Oldest first</a></li>
            <li><a className="dropdown-item" onClick={()=> dispatch(high())}>Priority high</a></li>
            <li><a className="dropdown-item" onClick={()=> dispatch(normal())}>Priority normal</a></li>
          </ul>
        </li>

        <li className='nav-item mx-2'>
            <button className='nav-link btn btn-sm btn-success text-light px-2 my-3' onClick={()=> dispatch(addModalState(true))}><Plus/>Add new</button>
        </li>
        <li className='nav-item mx-2'>
            <button className='nav-link btn btn-sm btn-danger text-light px-2 my-3' onClick={deleteAll}><Trash2/> Delete All</button>
        </li>

      </ul>
      <form className="d-flex" onSubmit={() => dispatch(filterSearch())}>
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        onChange={(e)=> {
          dispatch(addSearchvalue(e.target.value)); 
          dispatch(filterSearch());
          dispatch(isSearched(true));
        }} 
        />
        <button className="btn btn-outline-success" type="submit">{searchValue ? <Search/> : <RefreshCcw/>}</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Navbar;