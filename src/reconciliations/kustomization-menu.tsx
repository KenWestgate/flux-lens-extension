/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { Common, Renderer } from "@k8slens/extensions";

type Kustomization = Renderer.K8sApi.Node;

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


export interface KustomizationMenuProps extends Renderer.Component.KubeObjectMenuProps<Kustomization> {
}

export function KustomizationMenu(props: KustomizationMenuProps) {
  const { object: node, toolbar } = props;

  if (!node) {
    return null;
  }

  const nodeName = node.getName();
  const nodeNamespace = node.getNs();

  const fluxPath = /* App.Preferences.getFluxPath() || */ "flux";

  const sendToTerminal = (command: string) => {
    terminalStore.sendCommand(command, {
      enter: true,
      newTab: true,
    });
    Navigation.hideDetails();
  };

  const reconcile = () => {
    sendToTerminal(`${fluxPath} reconcile kustomization ${nodeName} --namespace ${nodeNamespace}`);
  };

  return (
    <>
      <MenuItem onClick={reconcile}>
        <Icon svg="ssh" interactive={toolbar} tooltip={toolbar && "Reconcile"}/>
        <span className="title">Reconcile</span>
      </MenuItem>
    </>
  );
}
