import Blog from "./Blog"

function Header(props){
    return (
        <>
        <div>
          <h1>My Name is {props.name} and i am {props.age} years old</h1>
          <Blog name={props.name} age={props.age}/>
        </div>
        
        </>
        
    )
}
export default Header