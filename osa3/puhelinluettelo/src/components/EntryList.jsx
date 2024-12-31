const Button = ({identifier, delHandler}) => {
  
  return (
      <button onClick={() => delHandler(identifier, event)}>delete</button>

  )
}

const EntryList = ({persons, filter, delHandler}) => {

    const shownPersons = persons.filter((person) => person.name.includes(filter))
    return (
      <>
      <h2>Numbers</h2>
      <ul>
        {
          shownPersons.map(person => 
        <li key={person.name}>{person.name} {person.number} <Button identifier={person.id} delHandler = {delHandler}/></li>
        )}
      </ul>
      </>
    )
  }

  export default EntryList