import { Renderer} from "@k8slens/extensions";
import { HelmRelease } from "./helm-release";

export class HelmReleasesApi extends Renderer.K8sApi.KubeApi<HelmRelease> {
}

export const helmReleasesApi = new HelmReleasesApi({
  objectConstructor: HelmRelease
});

export class HelmReleasesStore extends Renderer.K8sApi.KubeObjectStore<HelmRelease> {
  api = helmReleasesApi
}

export const helmReleasesStore = new HelmReleasesStore();
Renderer.K8sApi.apiManager.registerStore(helmReleasesStore);
