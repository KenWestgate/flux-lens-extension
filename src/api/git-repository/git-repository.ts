import { Renderer} from "@k8slens/extensions";

export class GitRepository extends Renderer.K8sApi.KubeObject {
  static kind = "GitRepository"
  static namespaced = true
  static apiBase = "/apis/source.toolkit.fluxcd.io/v1beta2/gitrepositories";

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
    gitImplementation: string;
    interval: string;
    suspend?: boolean;
    ref: {
      branch: string;
    }
    timeout: string;
    url: string;
  }
  status: {
    artifact: {
        checksum: string;
        lastUpdateTime: string;
        path: string;
        revision: string;
        url: string;
    },
    conditions: {
      lastTransitionTime: string;
      message: string;
      reason: string;
      status: string;
      type?: string;
    }[];
    lastHandledReconcileAt: string;
    observedGeneration: string;
    url: string;
  }

  isSuspended() {
      if ((this.spec.suspend == undefined) || (this.spec.suspend == null)) {
          return false;
      }
      return this.spec.suspend.valueOf();
  }

  isSuspendedText(): string {
    return this.isSuspended() ? "Yes" : "No"
  }
}
