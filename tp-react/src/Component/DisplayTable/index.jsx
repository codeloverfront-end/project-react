import HandleForm from "../HandleForm";

function DisplayTable(){
    return (
      <div>
        <HandleForm />
        <table>
          <thead>
            <tr>
              <th>Catégories</th>
              <th>Dépenses (€)</th>
              <th>Total des dépenses mensuelles(€)</th>
              <th>Détail des dépenses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alimentation</td>
              <td>100</td>
              <td>400</td>
              <td>Achats divers</td>
            </tr>
            <tr>
                <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
export default DisplayTable