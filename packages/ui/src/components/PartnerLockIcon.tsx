import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./Tooltip";
import { useConfigContext } from "../providers/ConfigurationProvider";

function PartnerLockIcon() {
  const { config } = useConfigContext();
  return (
    <Tooltip
      title={`The partner preview Platform contains all data found in the public Platform along with pre-publication data from TrialPredict' projects and new features developed by the Platform team. Please do not share data or screenshots outside of the consortium partners. For more information, please email ${config.profile.helpdeskEmail}.`}
    >
      <span>
        <FontAwesomeIcon icon={faLock} />
      </span>
    </Tooltip>
  );
}

export default PartnerLockIcon;
