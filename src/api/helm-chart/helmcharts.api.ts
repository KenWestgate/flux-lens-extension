// /**
//  * Copyright (c) KenWestgate. All rights reserved.
//  * Licensed under MIT License. See LICENSE in root directory for more information.
//  */
// import { Renderer, Common } from "@k8slens/extensions";
// import { autoBind } from "@k8slens/extensions/dist/src/common/utils";
// import type { KubeJsonApiData } from "@k8slens/extensions/dist/src/common/k8s-api/kube-json-api";
// import { isClusterPageContext } from "@k8slens/extensions/dist/src/common/utils";

// //  import { KubeObject } from "../kube-object";
// //  import { autoBind, cpuUnitsToNumber, iter, unitsToBytes } from "../../../renderer/utils";
// //  import { IMetrics, metricsApi } from "./metrics.api";
// //  import { KubeApi } from "../kube-api";
// //  import type { KubeJsonApiData } from "../kube-json-api";
// //  import { isClusterPageContext } from "../../utils/cluster-id-url-parsing";

// export class HelmChartsApi extends Renderer.K8sApi.KubeApi<HelmChart> {
// }

// export interface HelmChart {
//   spec: {
//     suspend?: boolean;
//   };
// }

// export class HelmChart extends Renderer.K8sApi.KubeObject {
//   static kind = "HelmChart";
//   static namespaced = true;
//   static apiBase = "/apis/helm.toolkit.fluxcd.io/v2beta1/helmcharts";

//   constructor(data: KubeJsonApiData) {
//     super(data);
//     autoBind(this);
//     console.log("here we go...");
//   }

//   isSuspended() {
//     // return this.spec.suspend;
//     console.log("hello");
//     return true;
//   }
// }

// let helmChartsApi: HelmChartsApi;

// if (isClusterPageContext()) {
//   helmChartsApi = new HelmChartsApi({
//     objectConstructor: HelmChart,
//   });
// }

// export {
//   helmChartsApi,
// };