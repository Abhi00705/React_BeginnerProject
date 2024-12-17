import Accordion from "./Accordion/Accordion";
import Calculator from "./Calculator/Calculator";
import Counter from "./counter/counter";
import FormValidation from "./FormValidation/FormValidation";
import HiddenSearchBar from "./hiddenSearchBar/hiddenSearchBar";
import Meal from "./MealProject/Meal";
import Testemonial from "./Testemonial/Testemonial";
import Todos from "./Todos/Todos";
import ToggleBgColor from "./ToggleBgColor/ToggleBgColor";
import {AccordionData} from'./utils/AccordianData'

function App() {
  

  return (
    <>
      {/* <Counter/> */}
      {/* <Todos/> */}
      {/* <Meal/> */}
      {/* <Calculator/> */}
      {/* <ToggleBgColor/> */}
      {/* <HiddenSearchBar/> */}
    {/* <div className="w-[100vw] h-[100vh] bg-blue-300 flex justify-center items-center">
      <div className="min-w-[50%] min-h-[50%] max-w-[60%]  bg-blue-950 text-white rounded-lg flex flex-col justify-center items-center">
        {AccordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>   */}
    <FormValidation/>
    </>
  )
}

export default App;
