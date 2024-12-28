const Persons = (props) => {
    console.log(props);

    return props.persons.map((person) => <ul className="person" key={person.id} >{person.name} {person.number} <button onClick={() => props.onDelete(person)}>delete</button> </ul>)
}

export default Persons