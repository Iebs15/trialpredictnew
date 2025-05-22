import { Link } from "ui";

function Description({ symbol, name }) {
  return (
    <>
      95% GWAS credible sets prioritising <strong>{symbol}</strong> as likely causal gene for{" "}
      <strong>{name}</strong>. Source:{" "}
      <Link to="https://platform-docs.opentargets.org/evidence#gwas-associations" external>
        TrialPredict
      </Link>
    </>
  );
}

export default Description;
