export default function AddCarForm(props) {
  return (
    <>
      <form className="user">
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Marque: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="text"
            placeholder="La marque de votre voiture"
            name="brand"
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Modèle: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="text"
            placeholder="Le modèle de votre voiture"
            name="model"
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Prix: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="text"
            placeholder="example : 15000"
            name="price"
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Kilomètrage: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="text"
            placeholder="example : 20000 "
            name="kms"
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Energie: </label>
          </div>

          <select
            class="form-select form-control-user  shadow-none"
            name="Energie"
          >
            <option selected value={"Essence"}>
              Essence
            </option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Boite: </label>
          </div>

          <select
            class="form-select form-control-user  shadow-none"
            name="Boite"
          >
            <option selected value={"Manuelle"}>
              Manuelle
            </option>
            <option value="Automatique">Automatique</option>
          </select>
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Année: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="number"
            placeholder="example : 2020 "
            name="kms"
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <div className="col-2">
            <label className="text-dark fw-bold">Images: </label>
          </div>
          <input
            className="form-control form-control-user  shadow-none "
            type="file"
            multiple
            name="photos"
          />
        </div>
        {/* <div className="mb-3">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                for="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div> */}
        <a
          className=" primary-btn  d-block btn-user w-100 text-center"
          type="submit"
        >
          Ajouter
        </a>

        <hr />
      </form>
    </>
  );
}
