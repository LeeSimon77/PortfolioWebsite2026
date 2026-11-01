
import Popup from 'reactjs-popup';
import "../Styles/FilterListComponent.css"

export default function FilterListComponent() {

  return (
    <div className="FiltersPopup">
      <Popup trigger={<button className="FiltersButton"> Filters v</button>} position="bottom center">
      <div>test</div>
      </Popup>
    </div>
  )
}