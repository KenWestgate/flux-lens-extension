/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { helmRepositoriesStore } from "../../api/helm-repository/helm-repository-store";
import { HelmRepository } from "../../api/helm-repository/helm-repository";

enum sortBy {
  name = "name",
  namespace = "namespace",
  url = "url"
}

export class HelmRepositoryPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="HelmRepositories" store={helmRepositoriesStore}
          sortingCallbacks={{
            [sortBy.name]: (helmRepository: HelmRepository) => helmRepository.getName(),
            [sortBy.namespace]: (helmRepository: HelmRepository) => helmRepository.metadata.namespace,
            [sortBy.url]: (helmRepository: HelmRepository) => helmRepository.spec.url
          }}
          searchFilters={[
            (helmRepository: HelmRepository) => helmRepository.getSearchFields()
          ]}
          renderHeaderTitle="HelmRepositories"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
            { title: "Url", className: "url", sortBy: sortBy.url }
          ]}
          renderTableContents={(helmRepository: HelmRepository) => [
            helmRepository.getName(),
            helmRepository.metadata.namespace,
            helmRepository.spec.url
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
