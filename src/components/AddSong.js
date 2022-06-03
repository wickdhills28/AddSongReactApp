import React from 'react'
import {useState} from 'react'


const AddSong = (props) => {
    // component based states
    const [song, setSong] = useState('')
    const [artist, setArtist] = useState('')
    const [favorite, setFavorite] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault() // so that it doesn't submit to a page (the default)

        //validation
        if(!song){
            alert('YOU NEED TO ADD A SONG ')
        }
        if(!artist){
            alert('YOU NEED TO ADD AN ARTIST ')
        }

        props.onAdd({song, artist, favorite})

        // reset the forms state
        setSong('')
        setArtist('')
        setFavorite(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>
                    Song    
                </label>
                <input type='text' placeholder='Add a song' 
                    value={song} onChange={(e)=>setSong(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>
                    Artist    
                </label>
                <input type='text' placeholder='Add the artist'
                    value={artist} onChange={(e)=>setArtist(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>
                    Favorite    
                </label>
                <input type='checkbox' checked={favorite} value={favorite}
                    onChange={(e)=>setFavorite(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value='Save' className='btn btn-block'
                />
        </form>
    )
}

export default AddSong