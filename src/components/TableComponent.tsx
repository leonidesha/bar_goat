import DropDownAcciónon from "./DropDownButton";
import "./TableComponent.css";

export default function TableComponent() {
  return (
    <div className="main_div_table table-responsive">
      <h1>Manage Page</h1>
      <p>This is the manage page content.</p>
      {
        <table className="table_comp table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th>Encabezado 1</th>
              <th>Encabezado 2</th>
              <th>Encabezado 3</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 2</td>
              <DropDownAcciónon>Acción</DropDownAcciónon>
            </tr>
            <tr>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 2</td>
              <DropDownAcciónon>Acción</DropDownAcciónon>
            </tr>
            <tr>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 2</td>
              <DropDownAcciónon>Acción</DropDownAcciónon>
            </tr>
            <tr>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 2</td>
              <DropDownAcciónon>Acción</DropDownAcciónon>
            </tr>
            <tr>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 2</td>
              <DropDownAcciónon>Acción</DropDownAcciónon>
            </tr>
            <tr>
              <td>Dato 3</td>
              <td>Dato 4</td>
              <td>Dato 2</td>
              <DropDownAcciónon>Acción</DropDownAcciónon>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>4 datos</td>
              <td>Dato 2</td>
              <DropDownAcciónon>Acción</DropDownAcciónon>
            </tr>
          </tfoot>
        </table>
      }
    </div>
  );
}
