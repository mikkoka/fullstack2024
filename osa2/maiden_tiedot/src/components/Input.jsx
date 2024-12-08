const Input = ({text, changeHandler}) => {
    return (
    <p>
      Find countries <input type="text" value={text} onChange={changeHandler}/>
    </p>
    )
  }

export default Input;