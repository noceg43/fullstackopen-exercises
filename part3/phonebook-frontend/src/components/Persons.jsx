const Persons = (props) => {
    console.log(props);

    return props.persons.map((person) => <ul key={person.id} >{person.name} {person.number} </ul>)
}

export default Persons