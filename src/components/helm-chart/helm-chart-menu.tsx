/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { Common, Renderer } from "@k8slens/extensions";
import type { HelmChart } from "../../api/helm-chart/helm-chart";

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


export interface HelmChartMenuProps extends Renderer.Component.KubeObjectMenuProps<HelmChart> {
}

export function HelmChartMenu(props: HelmChartMenuProps) {
  const { object: helmChart, toolbar } = props;

  if (!helmChart) {
    return null;
  }

  const helmChartName = helmChart.getName();
  const helmChartNamespace = helmChart.getNs();
  const fluxPath = /* App.Preferences.getFluxPath() || */ "flux";

  const sendToTerminal = (command: string) => {
    terminalStore.sendCommand(command, {
      enter: true,
      newTab: true,
    });
    Navigation.hideDetails();
  };

  const reconcile = () => {
    sendToTerminal(`${fluxPath} reconcile helmchart ${helmChartName} --namespace ${helmChartNamespace}`);
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
