import React from "react";

function Types() {
  return (
    <div className="Type-con">
      <h2>
        <span>Pizza</span> Type
      </h2>
      <div className="Type">
        <div class="card" style={{ width: "15rem" }}>
          <img
            src="https://1.bp.blogspot.com/-QoPIEmEz9zY/YDkuGiH3iaI/AAAAAAAACEY/5h5B9AoRCt4hFho--NFEnQpsD5j0CtlogCLcBGAsYHQ/s1100/pizza.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-danger">
              Click To Order
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "15rem", height: "" }}>
          <img
            src="https://th.bing.com/th/id/OIP.ODzNVC9vgjSXIHv35FqzMAHaEo?pid=ImgDet&rs=1"
            className="card-img-top-one"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-danger">
              Click To Order
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "15rem" }}>
          <img
            src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395__480.jpg"
            class="card-img-top-one"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-danger">
              Click To Order
            </a>
          </div>
        </div>

        <div class="card" style={{ width: "15rem" }}>
          <img
            src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg"
            class="card-img-top-one"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-danger">
              Click To Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Types