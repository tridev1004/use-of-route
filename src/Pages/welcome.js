import { Route } from "react-router-dom";

const Welcome=()=>{
 return <section> <h2>hello</h2>
 <Route path='/welcome/new-user'>
     <p>welcome,Bro</p>
 </Route>
 </section>
}

export default Welcome;