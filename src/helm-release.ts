import { Renderer} from "@k8slens/extensions";

export class HelmRelease extends Renderer.K8sApi.KubeObject {
  static kind = "HelmRelease"
  static namespaced = true
  static apiBase = "/apis/helm.toolkit.fluxcd.io/v2beta1/helmreleases";

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
    suspend?: boolean;
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

  isSuspended() {
      if (!!this.spec.suspend) {
          return false;
      }
      return this.spec.suspend;
  }
}
