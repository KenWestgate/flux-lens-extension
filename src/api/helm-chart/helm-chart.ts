import { Renderer} from "@k8slens/extensions";

export class HelmChart extends Renderer.K8sApi.KubeObject {
  static kind = "HelmChart"
  static apiVersions = ["source.toolkit.fluxcd.io/v1beta1"];
  static namespaced = true
  static apiBase = "/apis/source.toolkit.fluxcd.io/v1beta1/helmcharts";

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
    chart: string;
    interval: string;
    reconcileStrategy: string;
    sourceRef: {
      kind: string;
      name: string;
      namespace?: string;
    }
    version: string;
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
  }
}
