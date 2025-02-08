import Title from "./Title"
import Messier from "./Messier"
import Todo from "./Todo"

function getContent(section) {
  switch(section) {
    case 'main':
      return (
        <Title/>
      )
    case 'messier':
      return (
        <Messier/>
      )
    case 'todo':
      return (
        <Todo/>
      )
    default:
      return (
        <>
          {section}
        </>
      )
  }
}

export default function Content({ section }) {
  return (
    <div id='content'>
      {getContent(section)}
    </div>
  )
}