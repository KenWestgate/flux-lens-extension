import { Renderer} from "@k8slens/extensions";
import { Kustomization } from "./kustomization";

export class KustomizationsApi extends Renderer.K8sApi.KubeApi<Kustomization> {
}

export const kustomizationsApi = new KustomizationsApi({
  objectConstructor: Kustomization
});

export class KustomizationsStore extends Renderer.K8sApi.KubeObjectStore<Kustomization> {
  api = kustomizationsApi
}

export const kustomizationsStore = new KustomizationsStore();
Renderer.K8sApi.apiManager.registerStore(kustomizationsStore);
