import { Renderer } from "@k8slens/extensions";
import React from "react";
import { HelmRelease } from "../../helm-release";

const {
    Component: {
        Badge,
        DrawerItem
    },
} = Renderer;
export interface HelmReleaseDetailsProps extends Renderer.Component.KubeObjectDetailsProps<HelmRelease> {
}

export class HelmReleaseDetails extends React.Component<HelmReleaseDetailsProps> {

    render() {
        const { object: helmRelease } = this.props;
        if (!helmRelease) return null;
        return (
            <div className="HelmRelease">
                <DrawerItem name="Suspend">
                    {helmRelease.isSuspended() ? "true" : "false"}
                </DrawerItem>
                <DrawerItem name="Created">
                    {helmRelease.getAge(true, false)} ago ({helmRelease.metadata.creationTimestamp})
                </DrawerItem>
                <DrawerItem name="Status" className="status" labelsOnly>
                    {helmRelease.status.conditions.map((condition, index) => {
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
