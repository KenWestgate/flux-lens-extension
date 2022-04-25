// import { Renderer} from "@k8slens/extensions";

// export interface FluxObject extends Renderer.K8sApi.KubeObject {

//   kind: string
//   apiVersion: string
//   metadata: {
//     name: string;
//     namespace: string;
//     selfLink: string;
//     uid: string;
//     resourceVersion: string;
//     creationTimestamp: string;
//     labels: {
//       [key: string]: string;
//     };
//     annotations: {
//       [key: string]: string;
//     };
//   }
//   spec: {
//     chart: {
//       spec: {
//         chart: string;
//         reconcileStrategy: string;
//         sourceRef: {
//           kind: string;
//           name: string;
//           namespace?: string;
//         }
//         version: string;
//       }
//     },
//     interval: string;
//     suspend?: boolean;
//   }
//   status: {
//     conditions: {
//       lastTransitionTime: string;
//       message: string;
//       reason: string;
//       status: string;
//       type?: string;
//     }[];
//   }

//   isSuspended() {
//       if ((this.spec.suspend == undefined) || (this.spec.suspend == null)) {
//           return false;
//       }
//       return this.spec.suspend.valueOf();
//   }

//   isSuspendedText(): string {
//     return this.isSuspended() ? "Yes" : "No"
//   }
// }
