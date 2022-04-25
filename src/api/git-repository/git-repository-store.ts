import { Renderer} from "@k8slens/extensions";
import { GitRepository } from "./git-repository";

export class GitRepositoriesApi extends Renderer.K8sApi.KubeApi<GitRepository> {
}

export const gitRepositoriesApi = new GitRepositoriesApi({
  objectConstructor: GitRepository
});

export class GitRepositoriesStore extends Renderer.K8sApi.KubeObjectStore<GitRepository> {
  api = gitRepositoriesApi
}

export const gitRepositoriesStore = new GitRepositoriesStore();
Renderer.K8sApi.apiManager.registerStore(gitRepositoriesStore);
