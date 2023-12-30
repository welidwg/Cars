import WrapperDash from "./Layout/WrapperDash";
import AddCarForm from "./forms/AddCarForm";

export default function AddCarPage(props) {
  return (
    <WrapperDash>
      <div class="card">
        <div className="card-header text-dark fw-bold text-center color-1 fs-4">
          Ajouter une voiture
        </div>
        <div class="card-body">
          <AddCarForm />
        </div>
      </div>
    </WrapperDash>
  );
}
