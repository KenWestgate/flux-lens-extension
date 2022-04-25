import { Renderer } from "@k8slens/extensions";
import React from "react";
import { GitRepository } from "../../api/git-repository/git-repository";

const {
    Component: {
        Badge,
        DrawerItem
    },
} = Renderer;
export interface GitRepositoryDetailsProps extends Renderer.Component.KubeObjectDetailsProps<GitRepository> {
}

export class GitRepositoryDetails extends React.Component<GitRepositoryDetailsProps> {

    render() {
        const { object: gitRepository } = this.props;
        if (!gitRepository) return null;
        return (
            <div className="GitRepository">
                <DrawerItem name="Suspend">
                    {gitRepository.isSuspended() ? "true" : "false"}
                </DrawerItem>
                <DrawerItem name="Created">
                    {gitRepository.getAge(true, false)} ago ({gitRepository.metadata.creationTimestamp})
                </DrawerItem>
                <DrawerItem name="Status" className="status" labelsOnly>
                    {gitRepository.status.conditions.map((condition, index) => {
                        const { type, reason, message, status } = condition;
                        const kind = type || reason;
                        if (!kind) return null;
                        return (
                            <Badge
                                key={kind + index} label={kind}
                                className={"success " + kind.toLowerCase()}
                                tooltip={message}
                            />
                        );
                    })}
                </DrawerItem>
            </div>
        )
    }
}
