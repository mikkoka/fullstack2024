const Header = ({name}) => {
    return (
    <h2>{name}</h2>
    )
  }
  const Part = ({name, exercises}) => {
  
    return (
      <p>{name} {exercises}</p>
    )
  }
  
  const Course = ({course}) => {
  
    return (
      <>
        <Header name={course.name}/>
        {course.parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
      </>
    )
  }
  



  
  export default Course