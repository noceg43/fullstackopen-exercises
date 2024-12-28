import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import axios from 'axios'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)



  const hook = () => {
    console.log('effect')
  
    const eventHandler = persons => {
      console.log('promise fulfilled')
      setPersons(persons)
    }

    const promise = personsService.getAll()
    promise.then(eventHandler)
    }
    
    // the hook function is executed always after the component is rendered
    // the second paramater [] define how often the hook function is called (only one time if empty)
    useEffect(hook, [])



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

  const showNotificationMessage = (message, isError = false) => {
    setNotificationMessage({message, isError})
    setTimeout(() => {
      setNotificationMessage(null)
    }, 5000)
  }
  
  const addPerson = (event) => {
    event.preventDefault()
    
    const index = persons.findIndex(x => x.name == newName)

    const newPerson = {
      name: newName,
      number: newNumber
    }

    if (index == -1) {
      personsService.create(newPerson).then((added) => {
        showNotificationMessage('Added ' + newPerson.name)
        setPersons(persons.concat(added))
        setNewName('')
        setNewNumber('')
      }
    )

    } else {
      // ask to edit the number
      const editPerson = persons[index]
      if( window.confirm('This person is already saved on the list, do you want to update the number ?')) {
        personsService.update(editPerson.id, newPerson)
        .then((updatedPerson) => {
          setPersons(persons.map(person => person.id == editPerson.id ? updatedPerson : person))
          showNotificationMessage('Updated ' + newPerson.name + " number")
          setNewName('')
          setNewNumber('')
        })
        .catch((error) => {
          showNotificationMessage('Information of ' + newPerson.name + " has already been deleted from the server", true)
        })
  
      }

    }
  }

  const deletePerson = (person) => {
   if( window.confirm('Do you want to delete this person ?')) {
    personsService.deleteItem(person.id).then((response) => console.log(response))
    setPersons(persons.filter(p => p.id != person.id))
   }
  }


  const filteredPersons =
  filter == '' ? persons :
  persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div>
      <Notification message={notificationMessage} />
      <h2>Phonebook</h2>
        <div>
          <Filter text={filter} handleFilterChange={handleFilterChange}></Filter>
        </div>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} name={newName} handlePersonChange={handlePersonChange} number={newNumber} handleNumberChange={handleNumberChange}>
      </PersonForm>
      <h2>Numbers</h2>
      <Persons persons = {filteredPersons} onDelete = {deletePerson}></Persons>
    </div>
  )
}


export default App