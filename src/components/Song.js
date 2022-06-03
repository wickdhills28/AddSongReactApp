import React from 'react'
import { FaTimes} from 'react-icons/fa'

const Song = (props) => {
  return (
    
    // use backticks `` if you want to embed javascript into strings
    <div className={`song ${props.song.favorite ? 'favorite': ''}`}>

        <h3 onDoubleClick = {()=> props.onToggle(props.song.id)}>
            
            {props.song.song}{' '}
            <FaTimes style={
                {color:'red', cursor:'pointer'}  
                } onClick={() => 
                props.onDelete(props.song.id)
              } 
            />

        </h3>
        <p>{props.song.artist}</p>

    </div>
  )
}

export default Song