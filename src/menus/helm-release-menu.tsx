/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { Common, Renderer } from "@k8slens/extensions";
import type { HelmRelease } from "../api/helmreleases.api";

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


export interface HelmReleaseMenuProps extends Renderer.Component.KubeObjectMenuProps<HelmRelease> {
}

export function HelmReleaseMenu(props: HelmReleaseMenuProps) {
  const { object: helmRelease, toolbar } = props;

  if (!helmRelease) {
    return null;
  }

  const helmReleaseName = helmRelease.getName();
  const helmReleaseNamespace = helmRelease.getNs();

  const fluxPath = /* App.Preferences.getFluxPath() || */ "flux";

  const sendToTerminal = (command: string) => {
    terminalStore.sendCommand(command, {
      enter: true,
      newTab: true,
    });
    Navigation.hideDetails();
  };

  const reconcile = () => {
    sendToTerminal(`${fluxPath} reconcile helmrelease ${helmReleaseName} --namespace ${helmReleaseNamespace}`);
  };

  const suspend = () => {
    sendToTerminal(`${fluxPath} suspend helmrelease ${helmReleaseName} --namespace ${helmReleaseNamespace}`);
  };

  const resume = () => {
    sendToTerminal(`${fluxPath} resume helmrelease ${helmReleaseName} --namespace ${helmReleaseNamespace}`);
  };

  return (
    <>
      <MenuItem onClick={reconcile}>
        <Icon svg="ssh" interactive={toolbar} tooltip={toolbar && "Reconcile"}/>
        <span className="title">Reconcile</span>
      </MenuItem>
      {
        helmRelease.isSuspended()
        ? (
          <MenuItem onClick={resume}>
            <Icon svg="ssh" interactive={toolbar} tooltip={toolbar && "Resume"}/>
            <span className="title">Resume</span>
          </MenuItem>
        )
        : (
          <MenuItem onClick={suspend}>
            <Icon svg="ssh" interactive={toolbar} tooltip={toolbar && "Suspend"}/>
            <span className="title">Suspend</span>
          </MenuItem>
        )
      }
    </>
  );
}
