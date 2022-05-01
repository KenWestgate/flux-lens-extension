/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";

import { KustomizationDetails, KustomizationDetailsProps } from "./src/components/kustomization/kustomization-details";
import { KustomizationMenu, KustomizationMenuProps } from "./src/components/kustomization/kustomization-menu";
import { KustomizationPage } from "./src/components/kustomization/kustomization-page";
import { Kustomization } from "./src/api/kustomization/kustomization"

import { GitRepositoryDetails, GitRepositoryDetailsProps } from "./src/components/git-repository/git-repository-details";
import { GitRepositoryMenu, GitRepositoryMenuProps } from "./src/components/git-repository/git-repository-menu";
import { GitRepositoryPage } from "./src/components/git-repository/git-repository-page";
import { GitRepository } from "./src/api/git-repository/git-repository"

import { HelmRepositoryDetails, HelmRepositoryDetailsProps } from "./src/components/helm-repository/helm-repository-details";
import { HelmRepositoryMenu, HelmRepositoryMenuProps } from "./src/components/helm-repository/helm-repository-menu";
import { HelmRepositoryPage } from "./src/components/helm-repository/helm-repository-page";
import { HelmRepository } from "./src/api/helm-repository/helm-repository"

import { HelmReleaseDetails, HelmReleaseDetailsProps } from "./src/components/helm-release/helm-release-details";
import { HelmReleaseMenu, HelmReleaseMenuProps } from "./src/components/helm-release/helm-release-menu";
import { HelmReleasePage } from "./src/components/helm-release/helm-release-page";
import { HelmRelease } from "./src/api/helm-release/helm-release"

export function FluxIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Flux" />
}

export function KustomizationIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Kustomizations" />
}

export function GitRepositoryIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Git Repositories" />
}

export function HelmRepositoryIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Helm Repositories" />
}

export function HelmReleaseIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Helm Releases" />
}

export default class FluxExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "kustomizations",
      components: {
        Page: () => <KustomizationPage extension={this} />,
        MenuIcon: GitRepositoryIcon,
      }
    },
    {
      id: "git-repositories",
      components: {
        Page: () => <GitRepositoryPage extension={this} />,
        MenuIcon: GitRepositoryIcon,
      }
    },
    {
      id: "helm-repositories",
      components: {
        Page: () => <HelmRepositoryPage extension={this} />,
        MenuIcon: HelmRepositoryIcon,
      }
    },
    {
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
      id: "kustomizations-menu",
      parentId: "flux-main-menu",
      target: { pageId: "kustomizations" },
      title: "Kustomizations",
      components: {
        Icon: KustomizationIcon,
      }
    },
    {
      id: "git-repositories-menu",
      parentId: "flux-main-menu",
      target: { pageId: "git-repositories" },
      title: "Git Repositories",
      components: {
        Icon: GitRepositoryIcon,
      }
    },
    {
      id: "helm-repositories-menu",
      parentId: "flux-main-menu",
      target: { pageId: "helm-repositories" },
      title: "Helm Repositories",
      components: {
        Icon: HelmRepositoryIcon,
      }
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
    kind: Kustomization.kind,
    apiVersions: ["kustomize.toolkit.fluxcd.io/v1beta2"],
    components: {
      Details: (props: KustomizationDetailsProps) => <KustomizationDetails {...props} />
    }
  },
  {
    kind: GitRepository.kind,
    apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
    components: {
      Details: (props: GitRepositoryDetailsProps) => <GitRepositoryDetails {...props} />
    }
  },
  {
    kind: HelmRepository.kind,
    apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
    components: {
      Details: (props: HelmRepositoryDetailsProps) => <HelmRepositoryDetails {...props} />
    }
  },
  {
    kind: HelmRelease.kind,
    apiVersions: ["helm.toolkit.fluxcd.io/v2beta1"],
    components: {
      Details: (props: HelmReleaseDetailsProps) => <HelmReleaseDetails {...props} />
    }
  }];

  kubeObjectMenuItems = [
    {
      kind: Kustomization.kind,
      apiVersions: ["kustomize.toolkit.fluxcd.io/v1beta2"],
      components: {
        MenuItem: (props: KustomizationMenuProps) => <KustomizationMenu {...props} />,
      },
    },
    {
      kind: GitRepository.kind,
      apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
      components: {
        MenuItem: (props: GitRepositoryMenuProps) => <GitRepositoryMenu {...props} />,
      },
    },
    {
      kind: HelmRepository.kind,
      apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
      components: {
        MenuItem: (props: HelmRepositoryMenuProps) => <HelmRepositoryMenu {...props} />,
      },
    },
    {
    kind: HelmRelease.kind,
    apiVersions: ["helm.toolkit.fluxcd.io/v2beta1"],
    components: {
      MenuItem: (props: HelmReleaseMenuProps) => <HelmReleaseMenu {...props} />,
    },
  }];
}
