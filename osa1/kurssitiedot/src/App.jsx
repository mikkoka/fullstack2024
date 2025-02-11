const Header = ({course}) => 
(
    <h1>
      {course}
    </h1>
)

const Content = ({parts}) => {
  console.log(parts[1].name)
 return (
    <>
      <Part name = {parts[0].name} exercises = {parts[0].exercises} />
      <Part name = {parts[1].name} exercises = {parts[1].exercises} />
      <Part name = {parts[2].name} exercises = {parts[2].exercises} />
    </>
  )
}


const Total = ({exercises}) =>  {
  
  function laske (total, uusi) {
    return total + parseInt(uusi.exercises)
  }

  return (
    <p>
      Number of exercises {exercises.reduce(laske, 0) }
    </p>
  )
}

const Part = ({name, exercises}) => {

  return   (
    <p>
      {name} {exercises}
    </p>
)
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts} />
      <Total exercises = {parts}/>
    </div>
  )
}

export default App
