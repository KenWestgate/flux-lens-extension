/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { Common, Renderer } from "@k8slens/extensions";
import type { HelmRepository } from "../../api/helm-repository/helm-repository";

const {
  Component: {
    terminalStore,
    MenuItem,
    Icon,
  },
  Navigation,
} = Renderer;
const {
  App,
} = Common;


export interface HelmRepositoryMenuProps extends Renderer.Component.KubeObjectMenuProps<HelmRepository> {
}

export function HelmRepositoryMenu(props: HelmRepositoryMenuProps) {
  const { object: helmRepository, toolbar } = props;

  if (!helmRepository) {
    return null;
  }

  const helmRepositoryName = helmRepository.getName();
  const helmRepositoryNamespace = helmRepository.getNs();
  const fluxPath = /* App.Preferences.getFluxPath() || */ "flux";

  const sendToTerminal = (command: string) => {
    terminalStore.sendCommand(command, {
      enter: true,
      newTab: true,
    });
    Navigation.hideDetails();
  };

  const reconcile = () => {
    sendToTerminal(`${fluxPath} reconcile source helm ${helmRepositoryName} --namespace ${helmRepositoryNamespace}`);
  };

  return (
    <>
      <MenuItem onClick={reconcile}>
        <Icon material="refresh" interactive={toolbar} tooltip={toolbar && "Reconcile"} />
        <span className="title">Reconcile</span>
      </MenuItem>
    </>
  );
}
