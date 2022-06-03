// import React from 'react'
import Header from './components/Header'
import Songs from './components/Songs'
import AddSong from './components/AddSong'

import {useState} from 'react'

function App() { // state of the button
    const [showAddSong, setShowAddSong] = useState(false)

    // state of the list
    const [songs, setSongs] = useState([
        {
            id: 1,
            song: "LADY OF NAMEK",
            artist: "Tory Lanez",
            favorite: true
        },
        {
            id: 2,
            song: "BALLAD OF A BADMAN",
            artist: "Tory Lanez",
            favorite: true
        },
        {
            id: 3,
            song: "THE COLOR VIOLET",
            artist: "Tory Lanez",
            favorite: true
        },
        {
            id: 4,
            song: "LADY OF NEPTUNE",
            artist: "Tory Lanez",
            favorite: true
        }, {
            id: 5,
            song: "Gasoline",
            artist: "The Weeknd",
            favorite: true
        }

    ])

    // delete song; create it here,
    // pass it down to where you want to use it
    // call the function name with passed arguments in the component that you want to use it
    // add '()=>' before props.funcName() to use it
    const deleteSong = (id) => {
        setSongs(songs.filter((song) => song.id !== id))
    }

    const addSong = (song) => { // create a new id
        const id = Math.floor(Math.random() * 10000) + 1

        // create song object
        const newSong = {
            id,
            ...song
        }
        // ... copies the rest

        // update the Songs state
        setSongs([
            ...songs,
            newSong
        ])
    }

    // '...object,except' means to recopy everything from that object except 'except'
    const toggleFavorite = (id) => {
        setSongs(songs.map((song) => song.id === id ? {
            ...song,
            favorite: !song.favorite
        } : song))

    }


    return (
        <div className="container">

            <Header text={
                    !showAddSong ? ("Add Song") : ("Close")
                }
                onClick={
                    () => setShowAddSong(!showAddSong)
                }/> {
            showAddSong ? (
                <AddSong onAdd={addSong}/>
            ) : ("")
        }

            {
            songs.length > 0 ? (
                <Songs songs={songs}
                    onDelete={deleteSong}
                    onToggle={toggleFavorite}/>
            ) : ('NO Songs')
        } </div>
    );
}

// Using it as a class
// class App extends React.Component{
// render(){
//     return <h1>UMBRELLA SEASON</h1>
// }
// }

export default App;
