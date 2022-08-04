/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { Common, Renderer } from "@k8slens/extensions";
import type { Kustomization } from "../../api/kustomization/kustomization";

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
  const { object: kustomization, toolbar } = props;

  if (!kustomization) {
    return null;
  }

  const kustomizationName = kustomization.getName();
  const kustomizationNamespace = kustomization.getNs();
  const fluxPath = /* App.Preferences.getFluxPath() || */ "flux";

  const sendToTerminal = (command: string) => {
    terminalStore.sendCommand(command, {
      enter: true,
      newTab: true,
    });
    Navigation.hideDetails();
  };

  const reconcile = () => {
    sendToTerminal(`${fluxPath} reconcile kustomization ${kustomizationName} --namespace ${kustomizationNamespace}`);
  };

  const suspend = () => {
    sendToTerminal(`${fluxPath} suspend kustomization ${kustomizationName} --namespace ${kustomizationNamespace}`);
  };

  const resume = () => {
    sendToTerminal(`${fluxPath} resume kustomization ${kustomizationName} --namespace ${kustomizationNamespace}`);
  };

  return (
    <>
      {
        kustomization.isSuspended()
          ? (
            <MenuItem onClick={resume}>
              <Icon material="play_circle_filled" interactive={toolbar} tooltip={toolbar && "Resume"} />
              <span className="title">Resume</span>
            </MenuItem>
          )
          : (
            <>
              <MenuItem onClick={reconcile}>
                <Icon material="refresh" interactive={toolbar} tooltip={toolbar && "Reconcile"} />
                <span className="title">Reconcile</span>
              </MenuItem>
              <MenuItem onClick={suspend}>
                <Icon material="pause_circle_filled" interactive={toolbar} tooltip={toolbar && "Suspend"} />
                <span className="title">Suspend</span>
              </MenuItem>
            </>
          )
      }
    </>
  );
}
