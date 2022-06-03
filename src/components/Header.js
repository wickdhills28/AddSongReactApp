import PropTypes from "prop-types"
import Button from "./Button"

const header = (props) => {
  return (
      <header class='header'>
          <h1>{props.title}</h1>
          <Button onClick={props.onClick} color='green' text={props.text}/> 
      </header>
  )
}

// set default values
header.defaultProps = {
    title: "UMBRELLAS"
}


// This is a way to make code more robust by declaring types of each prop
header.propTypes = {
    title: PropTypes.string.isRequired
}

export default header