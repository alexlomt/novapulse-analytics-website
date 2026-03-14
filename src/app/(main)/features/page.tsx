"use client";

import {
  Column,
  Row,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Icon,
  Badge,
  Tag,
  Background,
  RevealFx,
  Timeline,
  SegmentedControl,
  Particle,
  LineChart,
  BarChart,
} from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import { useState } from "react";

const featureCategories = [
  {
    value: "analytics",
    label: "Analytics",
    features: [
      {
        icon: "chart" as const,
        title: "Real-Time Dashboards",
        description: "Build interactive dashboards with drag-and-drop widgets. Monitor KPIs, funnels, and cohorts in real time with sub-second refresh.",
        tags: ["Live Data", "Custom Widgets", "Drag & Drop"],
      },
      {
        icon: "trending" as const,
        title: "Predictive Analytics",
        description: "ML-powered forecasting that learns from your data patterns. Predict churn, revenue, and growth with confidence intervals.",
        tags: ["Machine Learning", "Forecasting", "Confidence Scores"],
      },
      {
        icon: "document" as const,
        title: "Custom Reports",
        description: "Schedule automated reports delivered to Slack, email, or any webhook. Build once, share with your entire organization.",
        tags: ["Scheduled", "Auto-Delivery", "Templates"],
      },
    ],
  },
  {
    value: "monitoring",
    label: "Monitoring",
    features: [
      {
        icon: "bell" as const,
        title: "Anomaly Detection",
        description: "AI continuously monitors your metrics and alerts you to anomalies before they become incidents. Reduce MTTR by up to 70%.",
        tags: ["AI-Powered", "Auto-Baseline", "Low Noise"],
      },
      {
        icon: "eye" as const,
        title: "Uptime Monitoring",
        description: "Monitor endpoints from 30+ global locations. Get alerted within seconds of downtime with detailed incident timelines.",
        tags: ["Global Checks", "SSL Monitoring", "Status Pages"],
      },
      {
        icon: "server" as const,
        title: "Infrastructure Metrics",
        description: "Deep visibility into servers, containers, and serverless functions. Auto-discover services and map dependencies.",
        tags: ["Auto-Discovery", "Service Maps", "Resource Tracking"],
      },
    ],
  },
  {
    value: "platform",
    label: "Platform",
    features: [
      {
        icon: "puzzle" as const,
        title: "200+ Integrations",
        description: "Native connectors for AWS, GCP, Azure, Snowflake, BigQuery, Segment, and more. Build custom integrations with our REST API.",
        tags: ["Cloud Native", "REST API", "Webhooks"],
      },
      {
        icon: "shield" as const,
        title: "Enterprise Security",
        description: "SOC 2 Type II, GDPR, HIPAA compliant. SSO/SAML, role-based access, audit logs, and data residency controls.",
        tags: ["SOC 2", "GDPR", "SSO/SAML"],
      },
      {
        icon: "command" as const,
        title: "Developer API",
        description: "Full-featured REST and GraphQL APIs. SDKs for Python, Node.js, Go, and Java. Manage everything programmatically.",
        tags: ["REST", "GraphQL", "Multi-Language SDKs"],
      },
    ],
  },
];

const roadmapItems = [
  { label: "Q1 2026", description: "AI Assistant for natural language queries", state: "success" as const },
  { label: "Q2 2026", description: "Real-time collaboration on dashboards", state: "active" as const },
  { label: "Q3 2026", description: "Custom ML model deployment", state: "default" as const },
  { label: "Q4 2026", description: "Edge analytics and offline mode", state: "default" as const },
];

const demoChartData = [
  { name: "Mon", events: 4200, errors: 120 },
  { name: "Tue", events: 5800, errors: 95 },
  { name: "Wed", events: 6100, errors: 140 },
  { name: "Thu", events: 7200, errors: 80 },
  { name: "Fri", events: 8500, errors: 65 },
  { name: "Sat", events: 5200, errors: 50 },
  { name: "Sun", events: 4800, errors: 70 },
];

const demoBarData = [
  { name: "API", value: 42 },
  { name: "Web", value: 28 },
  { name: "Mobile", value: 18 },
  { name: "IoT", value: 12 },
];

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState("analytics");
  const currentCategory = featureCategories.find((c) => c.value === activeCategory) ?? featureCategories[0];

  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.features.title}
        description={meta.features.description}
        path={meta.features.path}
      />

      {/* Hero */}
      <Column fillWidth position="relative" overflow="hidden">
        <Particle
          fill
          position="absolute"
          density={60}
          speed={0.2}
          size="2"
          color="brand-on-background-weak"
          interactive
          mode="repel"
          opacity={30}
        />
        <Column
          fillWidth
          maxWidth="l"
          horizontal="center"
          paddingX="l"
          paddingY="80"
          gap="24"
          align="center"
          position="relative"
          style={{ margin: "0 auto" }}
        >
          <Badge title="Platform Overview" icon="rocket" />
          <Heading variant="display-strong-l" align="center" wrap="balance">
            Built for teams that move fast
          </Heading>
          <Text variant="heading-default-l" onBackground="neutral-weak" align="center" wrap="balance">
            Every feature designed to reduce noise, surface insights, and help you ship with confidence.
          </Text>
        </Column>
      </Column>

      {/* Feature Categories */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="64" gap="48" style={{ margin: "0 auto" }}>
        <Row horizontal="center">
          <SegmentedControl
            buttons={featureCategories.map((c) => ({ value: c.value, label: c.label }))}
            onToggle={setActiveCategory}
            selected={activeCategory}
            fillWidth={false}
          />
        </Row>

        <Grid columns="3" gap="24" m={{ columns: "2" }} s={{ columns: "1" }}>
          {currentCategory.features.map((feature) => (
            <RevealFx key={feature.title}>
              <Card padding="32" gap="20" direction="column" border="neutral-alpha-medium" fillWidth fillHeight>
                <Row width={48} height={48} radius="m" background="brand-alpha-medium" center>
                  <Icon name={feature.icon} size="m" onBackground="brand-medium" />
                </Row>
                <Heading variant="heading-strong-m">{feature.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">{feature.description}</Text>
                <Row gap="8" wrap>
                  {feature.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant="neutral" size="s" />
                  ))}
                </Row>
              </Card>
            </RevealFx>
          ))}
        </Grid>
      </Column>

      {/* Demo Dashboard */}
      <Column fillWidth background="surface" borderY="neutral-alpha-medium">
        <Column fillWidth maxWidth="l" paddingX="l" paddingY="64" gap="48" style={{ margin: "0 auto" }}>
          <Column horizontal="center" gap="16" align="center">
            <Text variant="label-strong-s" onBackground="brand-medium">DEMO</Text>
            <Heading variant="heading-strong-xl" align="center">
              See your data come alive
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              Interactive dashboards that update in real time. Here is a sample view of event analytics.
            </Text>
          </Column>

          <Grid columns="2" gap="24" s={{ columns: "1" }}>
            <Card padding="24" gap="16" direction="column" border="neutral-alpha-medium" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">Events This Week</Text>
              <LineChart
                series={[
                  { key: "events", color: "var(--brand-solid-strong)" },
                  { key: "errors", color: "var(--accent-solid-strong)" },
                ]}
                data={demoChartData}
                legend={{ display: true }}
              />
            </Card>
            <Card padding="24" gap="16" direction="column" border="neutral-alpha-medium" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">Traffic by Source</Text>
              <BarChart
                series={[{ key: "value", color: "var(--brand-solid-strong)" }]}
                data={demoBarData}
              />
            </Card>
          </Grid>
        </Column>
      </Column>

      {/* Roadmap */}
      <Column fillWidth maxWidth="m" paddingX="l" paddingY="80" gap="48" style={{ margin: "0 auto" }}>
        <Column horizontal="center" gap="16" align="center">
          <Text variant="label-strong-s" onBackground="brand-medium">ROADMAP</Text>
          <Heading variant="heading-strong-xl" align="center">
            What we are building next
          </Heading>
        </Column>
        <Timeline items={roadmapItems} size="l" />
      </Column>

      {/* CTA */}
      <Column fillWidth position="relative" overflow="hidden">
        <Background
          fill
          position="absolute"
          gradient={{ display: true, opacity: 30, x: 50, y: 50, width: 100, height: 100 }}
        />
        <Column
          fillWidth
          maxWidth="m"
          horizontal="center"
          paddingX="l"
          paddingY="64"
          gap="24"
          align="center"
          position="relative"
          style={{ margin: "0 auto" }}
        >
          <Heading variant="heading-strong-xl" align="center">
            Ready to explore?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            Start building dashboards in minutes with our free tier.
          </Text>
          <Button href="/contact" size="m" arrowIcon>
            Start Free Trial
          </Button>
        </Column>
      </Column>
    </Column>
  );
}
