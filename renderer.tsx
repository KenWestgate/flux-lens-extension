/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { GitRepositoryMenu, GitRepositoryMenuProps } from "./src/reconciliations/git-repository-menu";
import { KustomizationMenu, KustomizationMenuProps } from "./src/reconciliations/kustomization-menu";
import { HelmRepositoryMenu, HelmRepositoryMenuProps } from "./src/reconciliations/helm-repository-menu";
import { HelmReleaseMenu, HelmReleaseMenuProps } from "./src/reconciliations/helm-release-menu";

export default class GitRepositoryMenuRendererExtension extends Renderer.LensExtension {
  kubeObjectMenuItems = [
    {
      kind: "GitRepository",
      apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
      components: {
        MenuItem: (props: GitRepositoryMenuProps) => <GitRepositoryMenu {...props} />,
      },
    },
    {
      kind: "Kustomization",
      apiVersions: ["kustomize.toolkit.fluxcd.io/v1beta2"],
      components: {
        MenuItem: (props: KustomizationMenuProps) => <KustomizationMenu {...props} />,
      },
    },
    {
      kind: "HelmRepository",
      apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
      components: {
        MenuItem: (props: HelmRepositoryMenuProps) => <HelmRepositoryMenu {...props} />,
      },
    },
    {
      kind: "HelmRelease",
      apiVersions: ["helm.toolkit.fluxcd.io/v2beta1"],
      components: {
        MenuItem: (props: HelmReleaseMenuProps) => <HelmReleaseMenu {...props} />,
      },
    },
  ];
}

