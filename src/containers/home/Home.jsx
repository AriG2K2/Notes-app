import React,{useEffect} from 'react'
import { Frown } from 'react-feather'
import {Modal, Navbar, SingleNote } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { addNotes } from '../../redux/features/notes/notesSlice';

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.notes.notesArray);
    const showModal = useSelector((state) => state.modal.modalState);
    const isSearched = useSelector((state) => state.notes.searched);
    const searchedData = useSelector((state) => state.notes.searchedNotesArray);

    useEffect(()=>{
        JSON.parse(localStorage.getItem('myNotes')) == null 
        ? dispatch(addNotes([])) 
        : dispatch(addNotes(JSON.parse(localStorage.getItem('myNotes'))))
    },[])

    const refresher = () =>{
        dispatch(addNotes((JSON.parse(localStorage.getItem('myNotes'))) || [] ))
    }

  return (
    <>
    <Navbar refresher={refresher}/>
    {showModal &&
    <Modal refresher={refresher}/>
    }

    <div className='row justify-content-start mx-0 p-5'>
        {!data.length || data == null
         ?
            <h1 className='text-center display-1 fw-light text-seconday my-5'>
                <Frown size={100}/> No Notes. Create new one.
            </h1>
         :
          isSearched ?
          searchedData.map((item) => (
            <SingleNote key={item.id} item={item} refresher={refresher}/>
          ))

          : data.length && data.map((item)=>(
          <SingleNote key={item.id} item={item} refresher={refresher}/>
        ))
    }
    </div>
    </>
  )
}

export default Home