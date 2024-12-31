import personService from './services/persons'
import { useState } from 'react'
import { useEffect } from 'react'
import EntryAdder from './components/EntryAdder'
import EntryList from './components/EntryList'
import EntryFilter from './components/EntryFilter'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const successStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  const errorStyle = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: 16
  }

  const hook = () => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }
  
  useEffect(hook, [])
  
  const addName = (event) => {
    event.preventDefault()
    const oldPerson = persons.find((person) => person.name === newName)
    if (!oldPerson) {
      const newPerson = {name: newName, number: newNumber}
      personService.create(newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        }).then(() => {
          setSuccessMessage(
            `${newPerson.name} added succesfully!`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        }).catch(error => {
          setErrorMessage(
            error.response.data.error
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 15000)
        })

    }  else {

      if (window.confirm(`${newName} is already in the phonebook. Replace number with new number?`)) {
        const updatedPerson = {name: newName, number: newNumber}
        personService.update(oldPerson.id, updatedPerson).then(response => {
          setPersons(persons.map(person => person.id !== response.data.id ? person : response.data))
          setNewName('')
          setNewNumber('')
        }).then(() => {
          setSuccessMessage(
            `${updatedPerson.name} number was updated succesfully!`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
      }
      

    }

  }

  const delHandler = (identifier, event) => {
    console.log(identifier)
    event.preventDefault()
    let del_name = persons.find(element => element.id === identifier).name
    if(window.confirm(`poistetaanko ${del_name}?`)) {
      personService.deleteEntry(identifier)
      .then(response => {
          personService
            .getAll()
            .then(response => {
            setPersons(response.data)
        }).then(() => {
          setSuccessMessage(
            `${del_name} was removed succesfully!`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })
    })      
    .catch(error => {
      console.log('äh')
      setErrorMessage(
        `${del_name} had already been removed from the server!`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })}
  }

  const onNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const onNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const onNewFilterChange = (event) => {
    setNewFilter(event.target.value)
  }



  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={successMessage} style={successStyle} />
        <Notification message={errorMessage} style = {errorStyle}/>
        <EntryFilter newFilter={newFilter} onNewFilterChange={onNewFilterChange}/>
        <EntryAdder newName={newName} onNewNameChange={onNewNameChange} newNumber={newNumber} onNewNumberChange={onNewNumberChange} onClick = {addName}/>
        <EntryList persons={persons} filter={newFilter} delHandler={delHandler}/>
      
      <div>debug: {newFilter}</div>
    </div>
  )

}

export default App
