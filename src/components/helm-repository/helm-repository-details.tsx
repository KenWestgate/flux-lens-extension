import { Renderer } from "@k8slens/extensions";
import React from "react";
import { HelmRepository } from "../../api/helm-repository/helm-repository";

const {
    Component: {
        Badge,
        DrawerItem
    },
} = Renderer;
export interface HelmRepositoryDetailsProps extends Renderer.Component.KubeObjectDetailsProps<HelmRepository> {
}

export class HelmRepositoryDetails extends React.Component<HelmRepositoryDetailsProps> {

    render() {
        const { object: helmRepository } = this.props;
        if (!helmRepository) return null;
        return (
            <div className="HelmRepository">
                <DrawerItem name="Created">
                    {helmRepository.getAge(true, false)} ago ({helmRepository.metadata.creationTimestamp})
                </DrawerItem>
                <DrawerItem name="Status" className="status" labelsOnly>
                    {helmRepository.status.conditions.map((condition, index) => {
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
