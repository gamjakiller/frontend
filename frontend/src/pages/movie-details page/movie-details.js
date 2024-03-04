import React from "react";
import { Link } from "react-router-dom";
import "../../styles/movie-details page/movie-details.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import CardCinema from "../../components/molecules/cardCinema";

export default function MovieDetails() {
  const navigate = useNavigate();
  const { movie } = useSelector((state) => state);
  let release_date = movie?.data?.release_date.slice(0, 10);

  // CHECK IS ALREADY LOGIN
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isSignIn");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/Sign-in");
    }
  }, []);

  return (
    <div
      id="movie-details"
      className=" container-fluid clearfix"
      style={{ paddingLeft: "0", paddingRight: "0", fontFamily: "inherit" }}
    >
      {/* NAVBAR */}
      <Navbar />
      {/* END OF NAVBAR */}

      {/* DETAILS MOVIE */}
      <div
        className="container details-movie pt-5"
        style={{ marginTop: "80px" }}
      >
        <div className="row pb-5">
          <div className="col-4">
            <div
              className="card p-5 text-center"
              style={{ width: "335px", borderRadius: "20px" }}
            >
              <img
                src={movie?.data?.photo}
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col-8 detail">
            <h2 className="title-movie">{movie?.data?.name}</h2>
            <p className="genre-movies mb-4">{movie?.data?.genre}</p>
            <div className="table-details">
              <div className="row">
                <div className="col-3">
                  <p className="sub-title">Release date</p>
                  <p className="content">{movie?.data?.release_date}</p>
                </div>
                <div className="col-8 offset-1">
                  <p className="sub-title">Directed by</p>
                  <p className="content">{movie?.data?.directed_by}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-3">
                  <p className="sub-title">Duration</p>
                  <p className="content">{movie?.data?.duration}</p>
                </div>
                <div className="col-8 offset-1">
                  <p className="sub-title">Casts</p>
                  <p className="content">{movie?.data?.casts}</p>
                </div>
              </div>
              <div className="row synopsis">
                <h5 className="sub-title-synopsis">Synopsis</h5>
                <p>{movie?.data?.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END OF DETAILS MOVIE */}

      {/* SHOWTIMES */}
      <div
        className="container-fluid show-times"
        style={{ backgroundColor: "#F5F6F8" }}
      >
        <div className="container pt-5 pb-4">
          <div
            className="sub-title text-center"
            style={{ marginBottom: "30px" }}
          >
            <h4>Showtimes and Tickets</h4>
          </div>
          <div
            className="dropdown-date-city text-center"
            style={{ marginBottom: "30px", width: "100%" }}
          >
            <input type="date" class="btn btn-primary date" />
            <input
              type="text"
              class="form-control address d-inline ms-2"
              id="exampleFormControlInput1"
              placeholder="Address"
            />
          </div>
        </div>
      </div>
      {/* END OF SHOWTIMES */}

      {/* CARD CINEMA */}
      <div
        className="container-fluid text-text-decoration-none pb-5"
        style={{ backgroundColor: "#F5F6F8" }}
      >
        <div className="container border-bottom">
          <div className="row pb-4">
            {/* EBV.ID CINEMA */}
            <div className="col-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "white",
                  height: "380px",
                  border: "0",
                }}
              >
                {/* CINEMA NAME*/}
                <div
                  className="row pt-4 pe-4 pb-2 ps-3 border-bottom ms-1"
                  style={{ width: "350px" }}
                >
                  <div className="col-5">
                    <img
                      src={require("../../asset/ebu.id.png")}
                      alt="ebu.id"
                      className="mt-3"
                    ></img>
                  </div>
                  <div className="col-6 offset-1">
                    <h4 className="CINEMA-name">ebv.id</h4>
                    <p
                      className="address"
                      style={{ fontSize: "12px", color: "#6E7191" }}
                    >
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                {/* TIME */}
                <div className="row pt-4 pe-4 pb-2 ps-4 time">
                  <div className="col-3">
                    <p
                      style={{
                        fontSize: "15px",
                        marginBottom: "25px",
                        color: "#4E4B66",
                      }}
                    >
                      08:30am
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      10:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      12:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      02:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      04:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      07:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      08:30pm
                    </p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price">
                  <div className="row pt-2 pe-4 ps-4 price">
                    <div className="col-3">
                      <p style={{ fontSize: "17px", color: "#6B6B6B" }}>
                        Price
                      </p>
                    </div>
                    <div className="col-5 offset-4">
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        $10.00/seat
                      </p>
                    </div>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="row pt-3 pe-4 pb-2 ps-4 btn">
                  <div className="col-12">
                    <Link to="/order-page">
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary shadow "
                          style={{ backgroundColor: "#5F2EEA" }}
                          type="button"
                        >
                          Book now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* CINEONE21 */}
            <div className="col-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "white",
                  height: "380px",
                  border: "0",
                }}
              >
                {/* CINEMA NAME*/}
                <div
                  className="row pt-4 pe-4 pb-2 ps-3 border-bottom ms-1"
                  style={{ width: "350px" }}
                >
                  <div className="col-5">
                    <img
                      src={require("../../asset/cineone.21.png")}
                      alt="ebu.id"
                      className="mt-4"
                      style={{ width: "130px" }}
                    ></img>
                  </div>
                  <div className="col-6 offset-1">
                    <h4 className="CINEMA-name">CineOne21</h4>
                    <p
                      className="address"
                      style={{ fontSize: "12px", color: "#6E7191" }}
                    >
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                {/* TIME */}
                <div className="row pt-4 pe-4 pb-2 ps-4 time">
                  <div className="col-3">
                    <p
                      style={{
                        fontSize: "15px",
                        marginBottom: "25px",
                        color: "#4E4B66",
                      }}
                    >
                      08:30am
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      10:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      12:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      02:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      04:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      07:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      08:30pm
                    </p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price">
                  <div className="row pt-2 pe-4 ps-4 price">
                    <div className="col-3">
                      <p style={{ fontSize: "17px", color: "#6B6B6B" }}>
                        Price
                      </p>
                    </div>
                    <div className="col-5 offset-4">
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        $10.00/seat
                      </p>
                    </div>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="row pt-3 pe-4 pb-2 ps-4 btn">
                  <div className="col-12">
                    <Link to="/order-page">
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary shadow "
                          style={{ backgroundColor: "#5F2EEA" }}
                          type="button"
                        >
                          Book now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* HIFLIX CINEMA */}
            <div className="col-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "white",
                  height: "380px",
                  border: "0",
                }}
              >
                {/* CINEMA NAME*/}
                <div
                  className="row pt-4 pe-4 pb-3 ps-3 border-bottom ms-1"
                  style={{ width: "350px" }}
                >
                  <div className="col-5">
                    <img
                      src={require("../../asset/hiflix.png")}
                      alt="ebu.id"
                      className="mt-3"
                      style={{ width: "130px" }}
                    ></img>
                  </div>
                  <div className="col-6 offset-1">
                    <h5 className="CINEMA-name">hiflix Cinema</h5>
                    <p
                      className="address"
                      style={{ fontSize: "12px", color: "#6E7191" }}
                    >
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                {/* TIME */}
                <div className="row pt-4 pe-4 pb-2 ps-4 time">
                  <div className="col-3">
                    <p
                      style={{
                        fontSize: "15px",
                        marginBottom: "25px",
                        color: "#4E4B66",
                      }}
                    >
                      08:30am
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      10:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      12:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      02:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      04:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      07:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      08:30pm
                    </p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price">
                  <div className="row pt-2 pe-4 ps-4 price">
                    <div className="col-3">
                      <p style={{ fontSize: "17px", color: "#6B6B6B" }}>
                        Price
                      </p>
                    </div>
                    <div className="col-5 offset-4">
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        $10.00/seat
                      </p>
                    </div>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="row pt-3 pe-4 pb-2 ps-4 btn">
                  <div className="col-12">
                    <Link to="/order-page">
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary shadow "
                          style={{ backgroundColor: "#5F2EEA" }}
                          type="button"
                        >
                          Book now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* {cinema.map((item, key) => {
              return (
                <div className="col-4" key={key}>
                  <CardCinema
                    name={item?.name}
                    image={item?.image}
                  />
                </div>
              );
            })} */}
          </div>
          <div className="row pb-5">
            {/* EBV.ID CINEMA */}
            <div className="col-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "white",
                  height: "380px",
                  border: "0",
                }}
              >
                {/* CINEMA NAME*/}
                <div
                  className="row pt-4 pe-4 pb-2 ps-3 border-bottom ms-1"
                  style={{ width: "350px" }}
                >
                  <div className="col-5">
                    <img
                      src={require("../../asset/ebu.id.png")}
                      alt="ebu.id"
                      className="mt-3"
                    ></img>
                  </div>
                  <div className="col-6 offset-1">
                    <h4 className="CINEMA-name">ebv.id</h4>
                    <p
                      className="address"
                      style={{ fontSize: "12px", color: "#6E7191" }}
                    >
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                {/* TIME */}
                <div className="row pt-4 pe-4 pb-2 ps-4 time">
                  <div className="col-3">
                    <p
                      style={{
                        fontSize: "15px",
                        marginBottom: "25px",
                        color: "#4E4B66",
                      }}
                    >
                      08:30am
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      10:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      12:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      02:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      04:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      07:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      08:30pm
                    </p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price">
                  <div className="row pt-2 pe-4 ps-4 price">
                    <div className="col-3">
                      <p style={{ fontSize: "17px", color: "#6B6B6B" }}>
                        Price
                      </p>
                    </div>
                    <div className="col-5 offset-4">
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        $10.00/seat
                      </p>
                    </div>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="row pt-3 pe-4 pb-2 ps-4 btn">
                  <div className="col-12">
                    <Link to="/order-page">
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary shadow "
                          style={{ backgroundColor: "#5F2EEA" }}
                          type="button"
                        >
                          Book now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* CINEONE21 */}
            <div className="col-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "white",
                  height: "380px",
                  border: "0",
                }}
              >
                {/* CINEMA NAME*/}
                <div
                  className="row pt-4 pe-4 pb-2 ps-3 border-bottom ms-1"
                  style={{ width: "350px" }}
                >
                  <div className="col-5">
                    <img
                      src={require("../../asset/cineone.21.png")}
                      alt="ebu.id"
                      className="mt-4"
                      style={{ width: "130px" }}
                    ></img>
                  </div>
                  <div className="col-6 offset-1">
                    <h4 className="CINEMA-name">CineOne21</h4>
                    <p
                      className="address"
                      style={{ fontSize: "12px", color: "#6E7191" }}
                    >
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                {/* TIME */}
                <div className="row pt-4 pe-4 pb-2 ps-4 time">
                  <div className="col-3">
                    <p
                      style={{
                        fontSize: "15px",
                        marginBottom: "25px",
                        color: "#4E4B66",
                      }}
                    >
                      08:30am
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      10:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      12:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      02:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      04:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      07:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      08:30pm
                    </p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price">
                  <div className="row pt-2 pe-4 ps-4 price">
                    <div className="col-3">
                      <p style={{ fontSize: "17px", color: "#6B6B6B" }}>
                        Price
                      </p>
                    </div>
                    <div className="col-5 offset-4">
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        $10.00/seat
                      </p>
                    </div>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="row pt-3 pe-4 pb-2 ps-4 btn">
                  <div className="col-12">
                    <Link to="/order-page">
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary shadow "
                          style={{ backgroundColor: "#5F2EEA" }}
                          type="button"
                        >
                          Book now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* HIFLIX CINEMA */}
            <div className="col-4">
              <div
                className="card shadow-sm"
                style={{
                  backgroundColor: "white",
                  height: "380px",
                  border: "0",
                }}
              >
                {/* CINEMA NAME*/}
                <div
                  className="row pt-4 pe-4 pb-3 ps-3 border-bottom ms-1"
                  style={{ width: "350px" }}
                >
                  <div className="col-5">
                    <img
                      src={require("../../asset/hiflix.png")}
                      alt="ebu.id"
                      className="mt-3"
                      style={{ width: "130px" }}
                    ></img>
                  </div>
                  <div className="col-6 offset-1">
                    <h5 className="CINEMA-name">hiflix Cinema</h5>
                    <p
                      className="address"
                      style={{ fontSize: "12px", color: "#6E7191" }}
                    >
                      Whatever street No.12, South Purwokerto
                    </p>
                  </div>
                </div>
                {/* TIME */}
                <div className="row pt-4 pe-4 pb-2 ps-4 time">
                  <div className="col-3">
                    <p
                      style={{
                        fontSize: "15px",
                        marginBottom: "25px",
                        color: "#4E4B66",
                      }}
                    >
                      08:30am
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      10:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      12:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      02:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      04:30pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#A0A3BD" }}>
                      07:00pm
                    </p>
                  </div>
                  <div className="col-3">
                    <p style={{ fontSize: "15px", color: "#6E7191" }}>
                      08:30pm
                    </p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price">
                  <div className="row pt-2 pe-4 ps-4 price">
                    <div className="col-3">
                      <p style={{ fontSize: "17px", color: "#6B6B6B" }}>
                        Price
                      </p>
                    </div>
                    <div className="col-5 offset-4">
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        $10.00/seat
                      </p>
                    </div>
                  </div>
                </div>
                {/* BUTTON */}
                <div className="row pt-3 pe-4 pb-2 ps-4 btn">
                  <div className="col-12">
                    <Link to="/order-page">
                      <div class="d-grid gap-2">
                        <button
                          class="btn btn-primary shadow "
                          style={{ backgroundColor: "#5F2EEA" }}
                          type="button"
                        >
                          Book now
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* {cinema.map((item, key) => {
              return (
                <div className="col-4" key={key}>
                  <CardCinema
                    name={item?.name}
                    image={item?.image}
                  />
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
      {/* END OF CARD CINEMA */}

      {/* FOOTER */}
      <Footer />
      {/* END OF FOOTER */}
    </div>
  );
}
