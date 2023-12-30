import WrapperDash from "./Layout/WrapperDash";

export default function Profile(props) {
  return (
    <WrapperDash>
      <div class="card" data-aos="zoom-in" data-aos-duration="1000">
        <div className="card-header color-1 fw-bold fs-4 text-center ">
          {" "}
          Your profile
        </div>
        <div class="card-body">
          <form className="user">
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold">Username: </label>
              </div>
              <input
                className="form-control form-control-user  shadow-none "
                type="text"
                placeholder="Enter your username..."
                defaultValue={"Welid wg"}
                name="username"
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold ">Email: </label>
              </div>
              <input
                className="form-control form-control-user  shadow-none "
                type="email"
                placeholder="Enter Email Address..."
                defaultValue={"wg@gmail.com"}
                name="email"
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold ">Phone: </label>
              </div>
              <input
                className="form-control form-control-user  shadow-none "
                type="tel"
                placeholder="Enter your phone..."
                defaultValue={"55656767"}
                name="phone"
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <div className="col-2">
                <label className="text-dark fw-bold ">New password: </label>
              </div>
              <input
                className="form-control form-control-user  shadow-none "
                type="email"
                placeholder="Change your password here"
                name="newPass"
              />
            </div>

            <a
              className=" primary-btn mt-4 btn-user w-100 text-center"
              type="submit"
            >
              Save
            </a>

            <hr />
          </form>
        </div>
      </div>
    </WrapperDash>
  );
}
