import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../lib/Api";

export default function useMovie() {
  const { movie_id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [similar, setSimilar] = useState(null);

  useEffect(() => {
    api
      .get(movie_id)
      .then((d_data) => {
        if ("error" in d_data) {
          navigate("/notFound");
        } else {
          setDetails(d_data);
          return api.load("Similar", movie_id, 12);
        }
      })
      .then((s_data) => setSimilar(s_data.results));
  }, [movie_id]);

  return { details, similar };
}
