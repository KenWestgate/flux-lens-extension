/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { helmReleasesStore } from "../../api/helm-release/helm-release-store";
import { HelmRelease } from "../../api/helm-release/helm-release";

enum sortBy {
  name = "name",
  namespace = "namespace",
  chart = "chart",
  suspend = "suspend"
}

export class HelmReleasePage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="HelmReleases" store={helmReleasesStore}
          sortingCallbacks={{
            [sortBy.name]: (helmRelease: HelmRelease) => helmRelease.getName(),
            [sortBy.namespace]: (helmRelease: HelmRelease) => helmRelease.metadata.namespace,
            [sortBy.chart]: (helmRelease: HelmRelease) => helmRelease.spec.chart.spec.sourceRef.name,
            [sortBy.suspend]: (helmRelease: HelmRelease) => helmRelease.isSuspendedText()
          }}
          searchFilters={[
            (helmRelease: HelmRelease) => helmRelease.getSearchFields()
          ]}
          renderHeaderTitle="HelmReleases"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
            { title: "Chart", className: "chart", sortBy: sortBy.chart },
            { title: "Suspended", className: "suspended" }
          ]}
          renderTableContents={(helmRelease: HelmRelease) => [
            helmRelease.getName(),
            helmRelease.metadata.namespace,
            helmRelease.spec.chart.spec.sourceRef.name,
            helmRelease.isSuspendedText()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
