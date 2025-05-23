import { useState, useEffect } from 'react'
import api from './api_service'

const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    type,
    value,
    onChange
  }
}

const useResource = (baseUrl) => {
  const [resources, setResources] = useState([])

  const fetchResources = async () => {
    const response = await api.getAll(baseUrl)
    setResources(response)
  }

  const create = async (resource) => {
    try {
      const response = await api.create(baseUrl, resource)
      setResources(resources.concat(response))
    } catch (erro) {
      if (erro.response.status === 401) {
        alert('unauthorized, please login')
      } else {
        throw erro
      }
    }

  }

  const service = {
    create,
    fetchResources
  }

  return [
    resources, service
  ]
}

const App = () => {
  const content = useField('text')
  const username = useField('text')
  const name = useField('text')
  const password = useField('password')

  const [notes, noteService] = useResource('http://localhost:3001/api/notes')
  const [persons, personService] = useResource('http://localhost:3001/api/users')

  useEffect(() => {
    noteService.fetchResources()
    personService.fetchResources()
  }, [])

  const handleNoteSubmit = (event) => {
    event.preventDefault()
    noteService.create({ content: content.value })
  }

  const handlePersonSubmit = (event) => {
    event.preventDefault()
    personService.create({ name: name.value, username: username.value, password: password.value })
  }

  return (
    <div>
      <h2>notes</h2>
      <form onSubmit={handleNoteSubmit}>
        <input {...content} />
        <button>create</button>
      </form>

      <ul>
        {notes.map(n => <li key={n.id}>{n.content}</li>)}
      </ul>

      <h2>persons</h2>
      <form onSubmit={handlePersonSubmit}>
        name <input {...name} /> <br />
        username <input {...username} /> <br />
        password <input {...password} />
        <button>create</button>
      </form>
      <ul>
        {persons.map(n => <li key={n.id}>{n.name}</li>)}
      </ul>
    </div>
  )
}

export default App