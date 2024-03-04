import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as movieReducer from "../../store/movies/index";
import { useNavigate } from "react-router-dom";

export default function AllMoviesCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { image, name, genre, url } = props;
  return (
    <div>
      <div
        className="card p-2 text-center  shadow-sm mb-5"
        style={{ width: "180px", marginLeft: "15px", height: "400px" }}
      >
        <div>
          <img
            src={image}
            className="card-img-top"
            alt="movie photo"
            style={{ height: "210px", objectFit: "cover" }}
          />
        </div>
        <div className="card-body">
          <h5
            className="card-title title-movie"
            style={{
              height: "50px",
            }}
          >
            {name}
          </h5>
          <p className="card-text genre border-bottom pb-2">{genre}</p>
          <button
            className="btn btn-outline-primary d-grid gap-2"
            style={{ width: "100%" }}
            onClick={() => {
              axios
                .get(
                  `${process.env.REACT_APP_URL_BACKEND}/movies/search/${name}`
                )
                .then(({ data }) => {
                  dispatch(
                    movieReducer.setDetail({
                      data: data?.data?.[0],
                      slug: url,
                    })
                  );
                  navigate(`/Detail-movies/${url}`);
                });
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
