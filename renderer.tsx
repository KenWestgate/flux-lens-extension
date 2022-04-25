/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";

import { HelmReleaseDetails, HelmReleaseDetailsProps } from "./src/components/helm-release/helm-release-details";
import { HelmReleaseMenu, HelmReleaseMenuProps } from "./src/components/helm-release/helm-release-menu";
import { HelmReleasePage } from "./src/components/helm-release/helm-release-page";
import { HelmRelease } from "./src/api/helm-release/helm-release"

import { GitRepositoryDetails, GitRepositoryDetailsProps } from "./src/components/git-repository/git-repository-details";
import { GitRepositoryMenu, GitRepositoryMenuProps } from "./src/components/git-repository/git-repository-menu";
import { GitRepositoryPage } from "./src/components/git-repository/git-repository-page";
import { GitRepository } from "./src/api/git-repository/git-repository"

export function FluxIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Flux" />
}

export function HelmReleaseIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Helm Releases" />
}

export function GitRepositoryIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Git Repositories" />
}

export default class FluxExtension extends Renderer.LensExtension {
  clusterPages = [
    {
      id: "git-repositories",
      components: {
        Page: () => <GitRepositoryPage extension={this} />,
        MenuIcon: GitRepositoryIcon,
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
      id: "git-repositories-menu",
      parentId: "flux-main-menu",
      target: { pageId: "git-repositories" },
      title: "Git Repositories",
      components: {
        Icon: GitRepositoryIcon,
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
    kind: GitRepository.kind,
    apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
    components: {
      Details: (props: GitRepositoryDetailsProps) => <GitRepositoryDetails {...props} />
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
      kind: GitRepository.kind,
      apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
      components: {
        MenuItem: (props: GitRepositoryMenuProps) => <GitRepositoryMenu {...props} />,
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
