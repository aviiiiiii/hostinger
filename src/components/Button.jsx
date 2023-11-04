
function Button({text,onClickFunc}) {
  
  return (
    <button id={text} onClick={onClickFunc}>{text}</button>
  )
}

export default Button