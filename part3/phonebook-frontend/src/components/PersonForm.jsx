const PersonForm = (props) => {
    console.log(props);

    return <form onSubmit={props.addPerson}>
    <div>
      <p>name: <input value={props.name} onChange={props.handlePersonChange} /></p>
      <p>number: <input value={props.number} onChange={props.handleNumberChange} /></p>
    </div>
    <div>
    <button type="submit" disabled={props.name.trim().length == 0 || props.number.trim().length == 0}>save</button>
    </div>
  </form>
}

export default PersonForm