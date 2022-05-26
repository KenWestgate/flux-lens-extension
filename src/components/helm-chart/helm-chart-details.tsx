import { Renderer } from "@k8slens/extensions";
import React from "react";
import { HelmChart } from "../../api/helm-chart/helm-chart";

const {
    Component: {
        Badge,
        DrawerItem
    },
} = Renderer;
export interface HelmChartDetailsProps extends Renderer.Component.KubeObjectDetailsProps<HelmChart> {
}

export class HelmChartDetails extends React.Component<HelmChartDetailsProps> {

    render() {
        const { object: helmChart } = this.props;
        if (!helmChart) return null;
        return (
            <div className="HelmChart">
                <DrawerItem name="Created">
                    {helmChart.getAge(true, false)} ago ({helmChart.metadata.creationTimestamp})
                </DrawerItem>
                <DrawerItem name="Status" className="status" labelsOnly>
                    {helmChart.status.conditions.map((condition, index) => {
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
