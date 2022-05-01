import { Renderer} from "@k8slens/extensions";

export class HelmRepository extends Renderer.K8sApi.KubeObject {
  static kind = "HelmRepository"
  static namespaced = true
  static apiBase = "/apis/source.toolkit.fluxcd.io/v1beta1/helmrepositories";

  kind: string
  apiVersion: string
  metadata: {
    name: string;
    namespace: string;
    selfLink: string;
    uid: string;
    resourceVersion: string;
    creationTimestamp: string;
    labels: {
      [key: string]: string;
    };
    annotations: {
      [key: string]: string;
    };
  }
  spec: {
    interval: string;
    timeout: string;
    url: string;
  }
  status: {
    conditions: {
      lastTransitionTime: string;
      message: string;
      reason: string;
      status: string;
      type?: string;
    }[];
  }
}
