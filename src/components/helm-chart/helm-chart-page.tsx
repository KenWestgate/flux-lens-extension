/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { helmChartsStore } from "../../api/helm-chart/helm-chart-store";
import { HelmChart } from "../../api/helm-chart/helm-chart";

enum sortBy {
  name = "name",
  namespace = "namespace",
}

export class HelmChartPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="HelmCharts" store={helmChartsStore}
          sortingCallbacks={{
            [sortBy.name]: (helmChart: HelmChart) => helmChart.getName(),
            [sortBy.namespace]: (helmChart: HelmChart) => helmChart.metadata.namespace
          }}
          searchFilters={[
            (helmChart: HelmChart) => helmChart.getSearchFields()
          ]}
          renderHeaderTitle="HelmCharts"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace }
          ]}
          renderTableContents={(helmChart: HelmChart) => [
            helmChart.getName(),
            helmChart.metadata.namespace
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
