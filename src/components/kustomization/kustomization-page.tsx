/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { kustomizationsStore } from "../../api/kustomization/kustomization-store";
import { Kustomization } from "../../api/kustomization/kustomization";

enum sortBy {
  name = "name",
  namespace = "namespace",
  suspend = "suspend"
}

export class KustomizationPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="Kustomizations" store={kustomizationsStore}
          sortingCallbacks={{
            [sortBy.name]: (kustomization: Kustomization) => kustomization.getName(),
            [sortBy.namespace]: (kustomization: Kustomization) => kustomization.metadata.namespace,
            [sortBy.suspend]: (kustomization: Kustomization) => kustomization.isSuspendedText()
          }}
          searchFilters={[
            (kustomization: Kustomization) => kustomization.getSearchFields()
          ]}
          renderHeaderTitle="Kustomizations"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
            { title: "Suspended", className: "suspended" }
          ]}
          renderTableContents={(kustomization: Kustomization) => [
            kustomization.getName(),
            kustomization.metadata.namespace,
            kustomization.isSuspendedText()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
