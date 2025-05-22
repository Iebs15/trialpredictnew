import { Link } from "ui";

function Description({ name }) {
  return (
    <>
      Active and closed projects for <strong>{name}</strong>. Source:{" "}
      <Link external to="http://home.opentargets.org/">
        TrialPredict
      </Link>
      .
    </>
  );
}

export default Description;
