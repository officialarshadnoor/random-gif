import React, {useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/UseGif';

const API_KEY  = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const{gif,loading,fetchData} = useGif();

  return (
  <div className='w-1/2 h-[450px] shadow-sm bg-green-500 max-[640px]:w-full rounded-lg border border-[#999] flex flex-col items-center gap-y-5 mt-5'>
 <h1 className='text-2xl underline uppercase font-bold'>Random Gif</h1>
    
    {
       loading ? (<Spinner/>) : (<img src={gif} loading='lazy'/>) 
    }
    
    <button onClick={() => fetchData()}
    className='w-9/12 bg-[#eee] text-lg py-2 px-5 rounded-lg'
    >
         Generate 
    </button>
  </div>
  )
}

export default Random