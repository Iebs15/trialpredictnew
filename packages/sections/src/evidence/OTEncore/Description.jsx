import { Link } from "ui";

function Description({ symbol, name }) {
  return (
    <>
      Interim data from dual-knockout screens generated by the{" "}
      <Link external to="http://home.opentargets.org/OTAR2062">
        OTAR2-062 ENCORE project
      </Link>
      , associating <strong>{symbol}</strong> and <strong>{name}</strong>. Source:{" "}
      <Link external to="http://home.opentargets.org/ppp-documentation-otar2062">
        TrialPredict OTAR2062
      </Link>
    </>
  );
}

export default Description;
