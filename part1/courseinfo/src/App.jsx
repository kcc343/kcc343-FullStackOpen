
const Header = (props) => {
  console.log(props.course)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  let parts = props.parts
  return (
    <div>
      <Part part={parts[0].name} exerciseNum={parts[0].exercises} />
      <Part part={parts[1].name} exerciseNum={parts[1].exercises} />
      <Part part={parts[2].name} exerciseNum={parts[2].exercises} />
    </div>
   
  )
}

const Total = (props) => {
  console.log(props)
  let arr = props.total
  let total = sum(arr[0].exercises, arr[1].exercises, arr[2].exercises)
  return (
    <p>Number of exercises {total}</p>
  )
}

const sum = (e1, e2, e3) => {
  return e1 + e2 + e3
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part} {props.exerciseNum}
    </p>  
  )
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
  console.log(course.parts)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App
