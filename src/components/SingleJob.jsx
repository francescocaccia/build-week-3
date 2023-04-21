import { Link } from "react-router-dom";
import JobModale from "./JobModale";
import { useState } from "react";
// import moment from "moment/moment";
// moment().statOf(publication_date).fromNow();

const SingleJob = ({ job }) => {
  let [offertaModale, setOffertaModale] = useState(false);

  return (
    <>
      <div
        key={job?._id}
        className="mt-3 p-2 jobOffer"
        onClick={() => {
          setOffertaModale(true);
        }}
      >
        <Link className="text-decoration-none text-primary">
          <p className="m-0 fw-bold fs-5">{job?.title}</p>
          <p>
            <small className="text-secondary fw-semibold">{job?.company}</small>
          </p>
          <p>
            <small className="text-dark fw-bold">{job?.company_name + " "} </small>

            <small className="text-secondary fw-light">&#183; {" " + job?.candidate_required_location}</small>
          </p>
        </Link>
      </div>
      <hr />
      {offertaModale && (
        <JobModale
          show={offertaModale}
          job={job}
          onHide={() => setOffertaModale(false)}
          setOffertaModale={setOffertaModale}
        />
      )}
    </>
  );
};

export default SingleJob;
