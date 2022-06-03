
// import PropTypes from "prop-types"

// each compenent returns something
// to use it somewhere else import the file and place <component_name/> in the code 
// when calling a component, we can pass in props to use
const Button = (props) => {
    // const onClick = (e) => {
    //     // e is the event object
    // }
  return (
    <button color={props.color}
    onClick = {() => props.onClick()} 
    className='btn' > {props.text} </button>
    )
}


Button.defaultProps ={
    color: 'steelblue'
}

export default Button