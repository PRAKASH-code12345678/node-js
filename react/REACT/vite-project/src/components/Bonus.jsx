import { useContext} from "react"
import { createContext } from "react"

/////solution context API
const UserContext=createContext()
function Bonus(){
    name="ram"
    return<>
    <UserContext.Provider value={name}>
        <Parent/>
    </UserContext.Provider>
    </>

}
export default Bonus


function Parent({name}){
    return<>
    <h2>Parent</h2>
    <Child/>
    </>
}

function Child({name}){
        return<>
    <h2>Child</h2>
    <Greet/>
    </>
}

function Greet (){
    const name=useContext(UserContext)
        return <h2>hello, {name}</h2>
   
    
}