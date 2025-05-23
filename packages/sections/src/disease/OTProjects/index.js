import { isPrivateDiseaseSection } from "@ot/constants";

const id = "otProjects";

export const definition = {
  id,
  name: "TrialPredict Projects",
  shortName: "OP",
  hasData: data => data.otarProjects?.length > 0,
  isPrivate: isPrivateDiseaseSection(id),
};
