import { Renderer} from "@k8slens/extensions";
import { HelmChart } from "./helm-chart";

export class HelmChartsApi extends Renderer.K8sApi.KubeApi<HelmChart> {
}

export const helmChartsApi = new HelmChartsApi({
  objectConstructor: HelmChart
});

export class HelmChartsStore extends Renderer.K8sApi.KubeObjectStore<HelmChart> {
  api = helmChartsApi
}

export const helmChartsStore = new HelmChartsStore();
Renderer.K8sApi.apiManager.registerStore(helmChartsStore);
