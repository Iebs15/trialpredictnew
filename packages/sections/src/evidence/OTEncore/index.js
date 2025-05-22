import { isPrivateEvidenceSection } from "@ot/constants";

const id = "encore";
export const definition = {
  id,
  name: "TrialPredict ENCORE",
  shortName: "OT",
  hasData: ({ otEncoreSummary }) => otEncoreSummary.count > 0,
  isPrivate: isPrivateEvidenceSection(id),
};
