import Course from './components/Course'

const Total = ({total}) => {
  return (
    <h3>Total of {total} exercises</h3>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
   function laske_kurssi (total, uusi) {
     return total + parseInt(uusi.exercises)
   }

   const laske_kurssit = (total, kurssi) => {
    return total + kurssi.parts.reduce(laske_kurssi,0)
   }

  return (
    <div>
    <h1>Curriculum</h1>
      {courses.map((course) => <Course course={course} key={course.id}/>)}
      <Total total={courses.reduce(laske_kurssit, 0)}/>
    </div>
  )
}

export default App  
