const Filter = (props) => {
    console.log(props);

    return <div>
    <p>filter shown with<input value={props.text} onChange={props.handleFilterChange} /></p>
  </div>
}

export default Filter