import { Link } from "ui";

function Description({ symbol }) {
  return (
    <>
      Target tractability assessment for <strong>{symbol}</strong>. Source:{" "}
      <Link external to="https://platform-docs.opentargets.org/target/tractability">
        TrialPredict
      </Link>
      .
    </>
  );
}

export default Description;
