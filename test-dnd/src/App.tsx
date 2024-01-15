import "./styles.css";
import { rectSortingStrategy } from "@dnd-kit/sortable";
import { MultipleContainers } from "./examples/Sortable/MultipleContainers";

export default function App() {
  return (
    <div className="App">
      <MultipleContainers strategy={rectSortingStrategy} />
    </div>
  );
}
