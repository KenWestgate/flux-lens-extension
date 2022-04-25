/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { HelmReleaseDetails, HelmReleaseDetailsProps } from "./src/components/helm-release/helm-release-details";
import { HelmReleaseMenu, HelmReleaseMenuProps } from "./src/components/helm-release/helm-release-menu";
import { HelmReleasePage } from "./src/components/helm-release/helm-release-page";
import { HelmRelease } from "./src/helm-release"

export function HelmReleaseIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="HelmReleases" />
}

export function FluxIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Flux" />
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
      id: "flux-main-menu",
      title: "Flux",

      components: {
        Icon: FluxIcon,
      },
    },
    {
      id: "helm-releases-menu",
      parentId: "flux-main-menu",
      target: { pageId: "helm-releases" },
      title: "Helm Releases",
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
  }];
  
  kubeObjectMenuItems = [{
      kind: "HelmRelease",
      apiVersions: ["helm.toolkit.fluxcd.io/v2beta1"],
      components: {
        MenuItem: (props: HelmReleaseMenuProps) => <HelmReleaseMenu {...props} />,
      },
  }];
}
