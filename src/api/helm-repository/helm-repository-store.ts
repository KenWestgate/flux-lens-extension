import { Renderer} from "@k8slens/extensions";
import { HelmRepository } from "./helm-repository";

export class HelmRepositoriesApi extends Renderer.K8sApi.KubeApi<HelmRepository> {
}

export const helmRepositoriesApi = new HelmRepositoriesApi({
  objectConstructor: HelmRepository
});

export class HelmRepositoriesStore extends Renderer.K8sApi.KubeObjectStore<HelmRepository> {
  api = helmRepositoriesApi
}

export const helmRepositoriesStore = new HelmRepositoriesStore();
Renderer.K8sApi.apiManager.registerStore(helmRepositoriesStore);
