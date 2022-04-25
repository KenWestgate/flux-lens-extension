/**
 * Copyright (c) KenWestgate. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React from "react";
import { Common, Renderer } from "@k8slens/extensions";
import type { GitRepository } from "../../api/git-repository/git-repository";

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


export interface GitRepositoryMenuProps extends Renderer.Component.KubeObjectMenuProps<GitRepository> {
}

export function GitRepositoryMenu(props: GitRepositoryMenuProps) {
  const { object: gitRepository, toolbar } = props;

  if (!gitRepository) {
    return null;
  }

  const gitRepositoryName = gitRepository.getName();
  const gitRepositoryNamespace = gitRepository.getNs();
  const fluxPath = /* App.Preferences.getFluxPath() || */ "flux";

  const sendToTerminal = (command: string) => {
    terminalStore.sendCommand(command, {
      enter: true,
      newTab: true,
    });
    Navigation.hideDetails();
  };

  const reconcile = () => {
    sendToTerminal(`${fluxPath} reconcile source git ${gitRepositoryName} --namespace ${gitRepositoryNamespace}`);
  };

  const suspend = () => {
    sendToTerminal(`${fluxPath} suspend source git ${gitRepositoryName} --namespace ${gitRepositoryNamespace}`);
  };

  const resume = () => {
    sendToTerminal(`${fluxPath} resume source git ${gitRepositoryName} --namespace ${gitRepositoryNamespace}`);
  };

  return (
    <>
      <MenuItem onClick={reconcile}>
        <Icon material="refresh" interactive={toolbar} tooltip={toolbar && "Reconcile"} />
        <span className="title">Reconcile</span>
      </MenuItem>
      {
        gitRepository.isSuspended()
          ? (
            <MenuItem onClick={resume}>
              <Icon material="play_circle_filled" interactive={toolbar} tooltip={toolbar && "Resume"} />
              <span className="title">Resume</span>
            </MenuItem>
          )
          : (
            <MenuItem onClick={suspend}>
              <Icon material="pause_circle_filled" interactive={toolbar} tooltip={toolbar && "Suspend"} />
              <span className="title">Suspend</span>
            </MenuItem>
          )
      }
    </>
  );
}
