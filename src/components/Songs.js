import Song from './Song'


const Songs = (props) => {
  return (
    // <div>Song</div>
    // one element always needs to be returned
    <>
    {props.songs.map((song)=>(
      <Song key = {song.Id} song = {song} 
      onDelete={props.onDelete}
      onToggle = {props.onToggle}/>
    ))}
    </>
  )
}

export default Songs