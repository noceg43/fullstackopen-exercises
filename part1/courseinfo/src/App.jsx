const Header = (props) => <h1>{props.course}</h1>


const Content = (props) => {
    return <> <Part part={props.parts[0]} ></Part>
    <Part part={props.parts[1]} ></Part>
    <Part part={props.parts[2]} ></Part>
  </>
  }



const Part = (props) => 
  <p>{props.part.name} {props.part.exercises}</p>



const Total = (props) => {
  const parts = props.parts
  let total = 0
  parts.forEach(part => {
    total += part.exercises
  }) 
  return <p>Number of exercises {total}</p>
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts ={course.parts} ></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default App