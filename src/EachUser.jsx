
import './Each.css'
export default function EachUser({user}){

    return (
        <div className='box'>
            <h3>Name: {user.name} </h3>
            <p>Email: {user.email}</p>
        </div>
    )

}