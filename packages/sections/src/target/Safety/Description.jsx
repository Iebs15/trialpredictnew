import { Link } from "ui";

function Description({ symbol }) {
  return (
    <>
      Reported safety effects and risk information for <strong>{symbol}</strong>. Source:{" "}
      <Link external to="https://platform-docs.opentargets.org/target/safety">
        TrialPredict
      </Link>
      .
    </>
  );
}

export default Description;
