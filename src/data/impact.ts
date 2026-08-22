import { ImpactMetric } from "@/types";

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "clean-mobility",
    title: "Clean Mobility Acceleration",
    value: 120,
    suffix: "k+",
    prefix: "",
    description: "Zero-emission kilometers enabled through intelligent charging availability and reduced range anxiety.",
    category: "Mobility",
  },
  {
    id: "local-empowerment",
    title: "Local Business Revenue",
    value: 45,
    suffix: "%",
    prefix: "+",
    description: "Average foot-traffic & dwell-time spending boost for host businesses operating ZapIn infrastructure.",
    category: "Economic",
  },
  {
    id: "energy-efficiency",
    title: "Energy Utilization Efficiency",
    value: 98,
    suffix: "%",
    prefix: "",
    description: "Uptime and telemetry reliability across edge IoT controllers with dynamic grid load balancing.",
    category: "Energy",
  },
];
