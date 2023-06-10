import Datagrid from "./components/Datagrid";
import { columns } from "./constants/column";
import { makeData } from "./helpers/makeData";

function App() {
  return (
    <div>
      <Datagrid columnsTable={columns} dataTable={makeData(100)} />
    </div>
  );
}

export default App;
