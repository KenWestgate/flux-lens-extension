/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { KubeObject } from "@k8slens/extensions/dist/src/common/k8s-api/kube-object";
import { autoBind } from "@k8slens/extensions/dist/src/common/utils";
import { KubeApi } from "@k8slens/extensions/dist/src/common/k8s-api/kube-api";
import type { KubeJsonApiData } from "@k8slens/extensions/dist/src/common/k8s-api/kube-json-api";
import { isClusterPageContext } from "@k8slens/extensions/dist/src/common/utils";

//  import { KubeObject } from "../kube-object";
//  import { autoBind, cpuUnitsToNumber, iter, unitsToBytes } from "../../../renderer/utils";
//  import { IMetrics, metricsApi } from "./metrics.api";
//  import { KubeApi } from "../kube-api";
//  import type { KubeJsonApiData } from "../kube-json-api";
//  import { isClusterPageContext } from "../../utils/cluster-id-url-parsing";

export class HelmReleasesApi extends KubeApi<HelmRelease> {
}

export interface HelmRelease {
  spec: {
    suspend?: boolean;
  };
}

export class HelmRelease extends KubeObject {
  static kind = "HelmRelease";
  static namespaced = true;
  static apiBase = "/apis/helm.toolkit.fluxcd.io/v2beta1/helmreleases";

  constructor(data: KubeJsonApiData) {
    super(data);
    autoBind(this);
  }

  isSuspended() {
    return this.spec.suspend;
  }
}

let helmReleasesApi: HelmReleasesApi;

if (isClusterPageContext()) {
  helmReleasesApi = new HelmReleasesApi({
    objectConstructor: HelmRelease,
  });
}

export {
  helmReleasesApi,
};
