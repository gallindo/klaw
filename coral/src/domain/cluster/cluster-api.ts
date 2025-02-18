import { Environment } from "src/domain/environment";
import { KlawApiResponse } from "types/utils";
import api, { API_PATHS } from "src/services/api";

const getClusterInfoFromEnvironment = async ({
  envSelected,
  envType,
}: {
  envSelected: string;
  envType: Environment["type"];
}): Promise<KlawApiResponse<"getClusterInfoFromEnv">> => {
  const params = new URLSearchParams({ envSelected, envType });
  return api.get<KlawApiResponse<"getClusterInfoFromEnv">>(
    API_PATHS.getClusterInfoFromEnv,
    params
  );
};

function getClusterDetails(clusterId: string) {
  const params = new URLSearchParams({ clusterId });
  return api.get<KlawApiResponse<"getClusterDetails">>(
    API_PATHS.getClusterDetails,
    params
  );
}

export { getClusterInfoFromEnvironment, getClusterDetails };
