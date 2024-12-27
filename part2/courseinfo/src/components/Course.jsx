const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
    return <> 
    {props.parts.map(part => 
          <Part key={part.id} part={part} />
        )}
  </>
}

const Part = (props) => 
  <p>{props.part.name} {props.part.exercises}</p>

const Total = (props) => {
  const parts = props.parts
  let exercises = parts.map((part) => part.exercises)
  const total = exercises.reduce((p,c) => p+c,0)
  return <b>total of {total} exercises</b>
}


const Course = ({course}) => {
return <><Header course = {course.name}></Header>
<Content parts = {course.parts}></Content>
<Total parts = {course.parts}></Total>
</>
}

export default Course