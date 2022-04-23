import { Renderer } from "@k8slens/extensions";
import React from "react";
import { helmReleasesStore } from "../helm-release-store";
import { HelmRelease } from "../helm-release";

enum sortBy {
  name = "name",
  namespace = "namespace",
  suspended = "suspended"
}

export class HelmReleasePage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="HelmReleases" store={helmReleasesStore}
          sortingCallbacks={{
            [sortBy.name]: (helmRelease: HelmRelease) => helmRelease.getName(),
            [sortBy.namespace]: (helmRelease: HelmRelease) => helmRelease.metadata.namespace
          }}
          searchFilters={[
            (helmRelease: HelmRelease) => helmRelease.getSearchFields()
          ]}
          renderHeaderTitle="HelmReleases"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
            { title: "Suspended", className: "suspend", sortBy: sortBy.suspended },
          ]}
          renderTableContents={(helmRelease: HelmRelease) => [
            helmRelease.getName(),
            helmRelease.metadata.namespace,
            helmRelease.isSuspended()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
