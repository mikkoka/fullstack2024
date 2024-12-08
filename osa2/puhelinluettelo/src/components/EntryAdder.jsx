const EntryAdder = ({newName, onNewNameChange, newNumber, onNewNumberChange, onClick}) => {
    return (
      <>
        <h2>Add new number</h2>
        <form>
          <div>
            name:&emsp;<input value={newName} onChange={onNewNameChange}/><br/>
            number: <input value={newNumber} onChange={onNewNumberChange}/>
          </div>
          <button type="submit" onClick={onClick}>add</button>
         </form>
      </>
    )
  }

  export default EntryAdder