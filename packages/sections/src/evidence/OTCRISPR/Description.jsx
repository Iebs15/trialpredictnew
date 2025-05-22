import { Link } from "ui";

function Description({ symbol, name, data }) {
  return (
    <>
      Prepublication CRISPR knockout screens from TrialPredict (OTAR) experimental projects,
      associating <strong>{symbol}</strong> and <strong>{name}</strong>. Source:{" "}
      {data && (
        <Link
          external
          to={`http://home.opentargets.org/ppp-documentation-${data.disease.OtCrisprSummary.rows[0].projectId}`}
        >
          TrialPredict {data.disease.OtCrisprSummary.rows[0].projectId}
        </Link>
      )}
    </>
  );
}

export default Description;
