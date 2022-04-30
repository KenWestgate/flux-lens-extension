import { Renderer} from "@k8slens/extensions";

export class CrossNamespaceSourceRef {
  apiVersion?: string;
  kind: string;
  name: string;
  namespace?: string;
}

export class Kustomization extends Renderer.K8sApi.KubeObject {
  static kind = "Kustomization"
  static namespaced = true
  static apiBase = "/apis/kustomize.toolkit.fluxcd.io/v1beta2/kustomizations";

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
    sourceRef: CrossNamespaceSourceRef;
    suspend?: boolean;
    targetNamespace?: string;
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
