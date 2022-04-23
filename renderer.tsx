/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { HelmReleaseDetails, HelmReleaseDetailsProps } from "./src/components/helm-release-details";
import { HelmReleasePage } from "./src/components/helm-release-page";
import { HelmRelease} from "./src/helm-release"

export function HelmReleaseIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="HelmReleases"/>
}

export default class HelmReleaseExtension extends Renderer.LensExtension {
  clusterPages = [{
    id: "helm-releases",
    components: {
      Page: () => <HelmReleasePage extension={this} />,
      MenuIcon: HelmReleaseIcon,
    }
  }]

  clusterPageMenus = [
    {
      target: { pageId: "helm-releases" },
      title: "Flux Helm Releases",
      components: {
        Icon: HelmReleaseIcon,
      }
    },
  ];

  kubeObjectDetailItems = [{
    kind: HelmRelease.kind,
    apiVersions: ["helm.toolkit.fluxcd.io/v2beta1"],
    components: {
      Details: (props: HelmReleaseDetailsProps) => <HelmReleaseDetails {...props} />
    }
  }]
}
