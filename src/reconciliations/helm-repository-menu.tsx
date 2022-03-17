/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { Common, Renderer } from "@k8slens/extensions";

type HelmRepository = Renderer.K8sApi.Node;

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
    sendToTerminal(`${fluxPath} reconcile source helm ${nodeName} --namespace ${nodeNamespace}`);
  };

  const suspend = () => {
    sendToTerminal(`${fluxPath} suspend helmrelease ${nodeName} --namespace ${nodeNamespace}`);
  };

  const resume = () => {
    sendToTerminal(`${fluxPath} resume helmrelease ${nodeName} --namespace ${nodeNamespace}`);
  };

  return (
    <>
      <MenuItem onClick={reconcile}>
        <Icon svg="ssh" interactive={toolbar} tooltip={toolbar && "Reconcile"}/>
        <span className="title">Reconcile</span>
      </MenuItem>
      <MenuItem onClick={suspend}>
        <Icon svg="ssh" interactive={toolbar} tooltip={toolbar && "Suspend"}/>
        <span className="title">Suspend</span>
      </MenuItem>
      <MenuItem onClick={resume}>
        <Icon svg="ssh" interactive={toolbar} tooltip={toolbar && "Resume"}/>
        <span className="title">Resume</span>
      </MenuItem>
    </>
  );
}
