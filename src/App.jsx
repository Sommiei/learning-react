// import { createBrowserRouter, RouterProvider } from "react-router-dom"
import  {Navbar} from './components/Navbar'
// import  {Body} from './components/body'
import { contFirebase } from './components/contFirebase';
// import  {Footer} from './components/Footer'
// import  {Workingwithapi} from './components/workingwithapi'
// import { Workingwithapiarray } from './components/workingwithapiarray'
// import {ShowInputValue } from './components/showInputValue'
// import { AxiosPages } from "./components/axiospages"
// import { GetDataBaseUsers } from "./components/getDataBaseUsers"
// import {WorkingWithArray1} from "./components/workingwitharray1"
// import {Art} from "./components/art"
// import { Components1 } from "./components/components1"
// import {Appp} from "./components/Appp.jsx"
// import {UserParent } from './components/UseContext.jsx/UserParent.jsx'



const routes = createBrowserRouter(
  [
//   {path:"/", element: <Body/>},
//     {path:"/ada", element: <ShowInputValue/>},
//     {path:"/pages", element: <AxiosPages/>},
//     {path:"/api", element:<GetDataBaseUsers/> },
//     {path:"/apii", element:<WorkingWithArray1/> },
//     {path:"/ari", element:<Art/> },
//     {path:"/effi", element:<Components1/> },
        {path:"/fb", element: <contFirebase/>},






]
)




function App() {
  return (
    <>
     <Navbar/>
      {/* <Body/> */}
     {/* <Body />  */}
     {/* <Workingwithapi /> */}
     {/* <Workingwithapiarray /> */}
     {/* <ShowInputValue/> */}
     {/* <Appp/>
     <Components1/> */}
    

     
     {/* <RouterProvider router={routes}/> */}


    </>
  )
}

export default App