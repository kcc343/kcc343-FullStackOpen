
const Header = (props) => {
  console.log(props.course)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  // let parts = props.parts
  return (
    <div>
      <Part part={props.part1.name} exerciseNum={props.part1.exercises} />
      <Part part={props.part2.name} exerciseNum={props.part2.exercises} />
      <Part part={props.part3.name} exerciseNum={props.part3.exercises} />
    </div>
   
  )
}

const Total = (props) => {
  console.log(props)
  // let arr = props.total
  let total = sum(props.part1.exercises, props.part2.exercises, props.part3.exercises)
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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  // let arr = [part1, part2, part3]
  // console.log(arr)
  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total part1={part1} part2={part2} part3={part3} />
    </div>
  )
}

export default App
