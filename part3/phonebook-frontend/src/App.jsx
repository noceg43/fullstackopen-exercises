import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])


  const hook = () => {
    console.log('effect')
  
    const eventHandler = initialData => {
      console.log('promise fulfilled')
      setPersons(initialData)
    }
  
    const promise = personService.getAll()
    promise.then(eventHandler)
    }
    
    // the hook function is executed always after the component is rendered
    // the second paramater [] define how often the hook function is called (only one time if empty)
    useEffect(hook, []) 


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')



  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if (persons.findIndex(x => x.name == newName) == -1) {
      const newPerson = {
        name: newName,
        number: newNumber
      }

      personService
      .create(newPerson)
      .then(addedPerson => {
        setPersons(persons.concat(addedPerson))
        setNewName('')
        setNewNumber('')
      })
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const filteredPersons =
  filter == '' ? persons :
  persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <Filter text={filter} handleFilterChange={handleFilterChange}></Filter>
        </div>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} name={newName} handlePersonChange={handlePersonChange} number={newNumber} handleNumberChange={handleNumberChange}>
      </PersonForm>
      <h2>Numbers</h2>
      <Persons persons = {filteredPersons}></Persons>
    </div>
  )
}


export default App