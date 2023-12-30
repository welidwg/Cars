import WrapperDash from "./Layout/WrapperDash";

export default function IndexDashboard(props) {
  return (
    <WrapperDash>
      <div class="row" data-aos="zoom-in" data-aos-duration="1000">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Vous avez</h3>
              <p class="card-text">Cars</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Title</h3>
              <p class="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>

      <h5>test</h5>
    </WrapperDash>
  );
}
