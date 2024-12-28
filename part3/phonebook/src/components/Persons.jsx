const Persons = (props) => {
    console.log(props);

    return props.persons.map((person) => <ul key={person.id} >{person.name} {person.number} <button onClick={() => props.onDelete(person)}>delete</button> </ul>)
}

export default Persons