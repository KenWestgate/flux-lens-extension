import { Renderer } from "@k8slens/extensions";
import React from "react";
import { Kustomization } from "../../api/kustomization/kustomization";

const {
    Component: {
        Badge,
        DrawerItem
    },
} = Renderer;
export interface KustomizationDetailsProps extends Renderer.Component.KubeObjectDetailsProps<Kustomization> {
}

export class KustomizationDetails extends React.Component<KustomizationDetailsProps> {

    render() {
        const { object: kustomization } = this.props;
        if (!kustomization) return null;
        return (
            <div className="Kustomization">
                <DrawerItem name="Suspend">
                    {kustomization.isSuspended() ? "true" : "false"}
                </DrawerItem>
                <DrawerItem name="Created">
                    {kustomization.getAge(true, false)} ago ({kustomization.metadata.creationTimestamp})
                </DrawerItem>
                <DrawerItem name="Status" className="status" labelsOnly>
                    {kustomization.status.conditions.map((condition, index) => {
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
