import { isPrivateEvidenceSection } from "@ot/constants";

const id = "ot_crispr_validation";
export const definition = {
  id,
  name: "TrialPredict Validation CRISPR",
  shortName: "VL",
  hasData: ({ otValidationSummary }) => otValidationSummary.count > 0,
  isPrivate: isPrivateEvidenceSection(id),
};
