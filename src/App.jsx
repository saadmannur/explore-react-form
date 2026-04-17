import './App.css'
import ActionForm from './Component/ActionForm/ActionForm'
import ControlledForm from './Component/ControlledForm/ControlledForm'
import HookForm from './Component/hookForm/HookForm'
import SimpleForm from './Component/SimpleForm/SimpleForm'
import UnControlledForm from './Component/UnControlledForm/UnControlledForm'

function App() {

  return (
    <>
      
      <h2>Explore React Form</h2>

      {/* <SimpleForm></SimpleForm> */}
      {/* <ActionForm></ActionForm> */}
      {/* <ControlledForm></ControlledForm> */}
      {/* <UnControlledForm></UnControlledForm> */}
      <HookForm></HookForm>

      
    </>
  )
}

export default App
