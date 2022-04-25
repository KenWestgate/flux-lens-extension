/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { Renderer } from "@k8slens/extensions";
import React from "react";
import { gitRepositoriesStore } from "../../api/git-repository/git-repository-store";
import { GitRepository } from "../../api/git-repository/git-repository";

enum sortBy {
  name = "name",
  namespace = "namespace",
  suspend = "suspend"
}

export class GitRepositoryPage extends React.Component<{ extension: Renderer.LensExtension }> {

  render() {
    return (
      <Renderer.Component.TabLayout>
        <Renderer.Component.KubeObjectListLayout
          className="GitRepositories" store={gitRepositoriesStore}
          sortingCallbacks={{
            [sortBy.name]: (gitRepository: GitRepository) => gitRepository.getName(),
            [sortBy.namespace]: (gitRepository: GitRepository) => gitRepository.metadata.namespace,
            [sortBy.suspend]: (gitRepository: GitRepository) => gitRepository.isSuspendedText()
          }}
          searchFilters={[
            (gitRepository: GitRepository) => gitRepository.getSearchFields()
          ]}
          renderHeaderTitle="GitRepositories"
          renderTableHeader={[
            { title: "Name", className: "name", sortBy: sortBy.name },
            { title: "Namespace", className: "namespace", sortBy: sortBy.namespace },
            { title: "Url", className: "url" },
            { title: "Suspended", className: "suspended" }
          ]}
          renderTableContents={(gitRepository: GitRepository) => [
            gitRepository.getName(),
            gitRepository.metadata.namespace,
            gitRepository.spec.url,
            gitRepository.isSuspendedText()
          ]}
        />
      </Renderer.Component.TabLayout>
    )
  }
}
