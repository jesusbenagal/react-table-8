import Datagrid from "./components/Datagrid";
import { columns } from "./constants/column";
import { makeData } from "./helpers/makeData";

function App() {
  const data = makeData(10000);

  return (
    <div>
      <Datagrid columnsTable={columns} dataTable={data} />
    </div>
  );
}

export default App;
