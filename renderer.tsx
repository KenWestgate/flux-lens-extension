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

import { HelmChartDetails, HelmChartDetailsProps } from "./src/components/helm-chart/helm-chart-details";
import { HelmChartMenu, HelmChartMenuProps } from "./src/components/helm-chart/helm-chart-menu";
import { HelmChartPage } from "./src/components/helm-chart/helm-chart-page";
import { HelmChart } from "./src/api/helm-chart/helm-chart"

export function FluxIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} svg='<svg width="64" height="64" viewBox="0 0 64 64"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>flux-icon</title>
  <desc>Created with Sketch.</desc>
  <g id="flux-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Group" transform="translate(11.000000, 2.000000)">
          <path d="M.803134615 15.7791346c-1.049423077-.682500000000001-1.049423077-2.2188461.0-2.9007692L20.1819808.279519231c.573461499999997-.3726923079 1.3125-.3726923079 1.8859615.0L41.4473654 12.8783654c1.0494231.681923100000001 1.0494231 2.2182692.0 2.9007692L22.0679423 28.3779808C21.4944808 28.7506731 20.7554423 28.7506731 20.1819808 28.3779808L.803134615 15.7791346z" id="Fill-1" fill="#326ce5"></path>
          <path d="M24.1851346 18.0023077h1.3442308C26.3145577 18.0023077 26.8055192 17.1525 26.4126346 16.4728846L22.0084038 8.84423077C21.6160962 8.16461538 20.63475 8.16461538 20.2418654 8.84423077L15.8376346 16.4728846C15.4453269 17.1525 15.9357115 18.0023077 16.7209038 18.0023077h1.3448077c.563077.0 1.0194231.456923100000001 1.0194231 1.02v8.7075L19.9874423 28.3165385C20.6791731 28.7665385 21.5710962 28.7665385 22.2628269 28.3165385L23.1651346 27.7298077v-8.7075c0-.563076899999999.456346200000002-1.02 1.02-1.02" id="Fill-3" fill="#c1d2f7"></path>
          <path d="M27.8390769 34.8375577l-4.6742307-3.0386539v1.44C24.6902308 33.8919808 26.2588846 34.4008269 27.8390769 34.8375577" id="Fill-5" fill="#326ce5"></path>
          <path d="M23.1650769 35.8280192v2.0215385C24.7095 38.3209038 26.2723846 38.7080192 27.8191154 39.0893654c5.0515384 1.2455769 9.8226923 2.4213461 13.6592308 6.2584615C41.6733462 45.54225 41.8562308 45.7407115 42.0373846 45.93975 42.4308462 45.1880192 42.2335385 44.1957115 41.4466154 43.6845577l-7.5905769-4.9355769c-1.8426923-.608077000000002-3.72-1.073077-5.5753847-1.53C26.5308462 36.7874423 24.8196923 36.3570577 23.1650769 35.8280192" id="Fill-7" fill="#326ce5"></path>
          <path d="M19.08525 34.1699423C18.4304423 33.8318654 17.7854423 33.4689808 17.1629423 33.0489808l-1.7359615 1.1284615c1.1705769.8607692 2.3965384 1.5588462 3.6582692 2.1438462V34.1699423z" id="Fill-9" fill="#326ce5"></path>
          <path d="M24.8941731 40.6051154C24.3137885 40.4620385 23.7374423 40.3195385 23.1651346 40.1735769V42.1605C23.5885962 42.2666538 24.0114808 42.3722308 24.4326346 42.4760769c5.0515385 1.245 9.8226923 2.4207693 13.6598077 6.2578846C38.0987885 48.7408846 38.1045577 48.7472308 38.1114808 48.7541538L39.75225 47.6868462C39.6524423 47.5824231 39.5584038 47.4751154 39.4545577 47.3718462c-4.2161539-4.2167308-9.4753846-5.513077-14.5603846-6.7667308" id="Fill-11" fill="#326ce5"></path>
          <path d="M19.08525 38.9907115C16.8900577 38.2389808 14.8096731 37.2714808 12.9115962 35.8124423l-1.6996154 1.1053846c2.4167307 1.9932693 5.1075 3.2025 7.8732692 4.0990385V38.9907115z" id="Fill-13" fill="#326ce5"></path>
          <path d="M19.08525 43.3809808C15.3069808 42.3909808 11.7537115 41.18175 8.71794231 38.5388654L7.04717308 39.6252115c3.56538462 3.285 7.80692312 4.658077 12.03807692 5.745577V43.3809808z" id="Fill-15" fill="#326ce5"></path>
          <path d="M23.1650769 46.3935c3.9525 1.02057689999999 7.6690385 2.2407692 10.8173077 5.0446154l1.6615385-1.08c-3.6784616-3.4580769-8.0925-4.8386539-12.4788462-5.9532692V46.3935z" id="Fill-17" fill="#326ce5"></path>
          <path d="M4.57875 41.2299231 2.92990385 42.3018462C2.98759615 42.3612692 3.04009615 42.423 3.09951923 42.4818462 7.31625 46.6985769 12.5743269 47.9949231 17.6599038 49.2485769c4.4042308 1.0851923 8.5944231 2.1201923 12.1390385 4.9096154L31.4893269 53.0591538C27.4958654 49.6968462 22.7385577 48.5158846 18.1214423 47.3781923 13.1206731 46.1453077 8.39567308 44.9758846 4.57875 41.2299231" id="Fill-19" fill="#326ce5"></path>
          <path d="M1.07555769 44.5060962C.883442308 44.3139808.702865385 44.1184038.524019231 43.9216731-.227711538 44.6745577-.139442308 45.9726346.80325 46.5853269l5.70634615 3.7101923c2.52576923 1.0453846 5.16692305 1.6990385 7.76423075 2.3394231 4.0546154.999230799999999 7.9280769 1.9575 11.2840385 4.2807692l1.7255769-1.1226923C23.4676731 52.9245577 19.0403654 51.8255192 14.7347885 50.7639808c-5.05096158-1.245-9.82211542-2.4207693-13.65923081-6.2578846" id="Fill-21" fill="#326ce5"></path>
          <path d="M19.6441154 58.8342692C20.0243077 59.0188846 20.3998846 59.2133077 20.7691154 59.4221538 21.2093077 59.5150385 21.6771923 59.4383077 22.0683462 59.1838846L23.0260385 58.5613846C19.9493077 56.5035 16.5287308 55.461 13.1196923 54.5927308l6.5244231 4.2415384z" id="Fill-23" fill="#326ce5"></path>
      </g>
  </g>
</svg>' tooltip="Flux" />
}

export function KustomizeIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Kustomize" />
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

export function HelmChartIcon(props: Renderer.Component.IconProps) {
  return <Renderer.Component.Icon {...props} material="security" tooltip="Helm Charts" />
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
    },
    {
      id: "helm-charts",
      components: {
        Page: () => <HelmChartPage extension={this} />,
        MenuIcon: HelmChartIcon,
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
      id: "helm-repositories-menu",
      parentId: "flux-main-menu",
      target: { pageId: "helm-repositories" },
      title: "Helm Repositories",
      components: {
        Icon: HelmRepositoryIcon,
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
      id: "flux-kustomizations-menu",
      parentId: "flux-main-menu",
      target: { pageId: "kustomizations" },
      title: "Kustomizations",
      components: {
        Icon: KustomizationIcon,
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
    {
      id: "helm-charts-menu",
      parentId: "flux-main-menu",
      target: { pageId: "helm-charts" },
      title: "Helm Charts",
      components: {
        Icon: HelmChartIcon,
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
  },
  {
    kind: HelmChart.kind,
    apiVersions: ["source.toolkit.fluxcd.io/v1beta1"],
    components: {
      Details: (props: HelmChartDetailsProps) => <HelmChartDetails {...props} />
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
    },
    {
      kind: HelmChart.kind,
      apiVersions: HelmChart.apiVersions,
      components: {
        MenuItem: (props: HelmChartMenuProps) => <HelmChartMenu {...props} />,
      },
    }];
}
