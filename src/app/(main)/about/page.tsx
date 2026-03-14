"use client";

import {
  Column,
  Row,
  Grid,
  Heading,
  Text,
  Button,
  Card,
  Avatar,
  AvatarGroup,
  Timeline,
  CountFx,
  FlipFx,
  Icon,
  Background,
  RevealFx,
} from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";

const teamMembers = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", initials: "AR" },
  { name: "Jordan Patel", role: "CTO & Co-Founder", initials: "JP" },
  { name: "Mika Tanaka", role: "VP Engineering", initials: "MT" },
  { name: "Sasha Okoye", role: "VP Product", initials: "SO" },
  { name: "Emily Zhang", role: "Head of Design", initials: "EZ" },
  { name: "David Kim", role: "Head of Data Science", initials: "DK" },
];

const companyStats = [
  { value: 10000, suffix: "+", label: "Customers" },
  { value: 85, suffix: "", label: "Team Members" },
  { value: 12, suffix: "", label: "Countries" },
  { value: 4, suffix: "", label: "Years" },
];

const historyItems = [
  { label: "2022", description: "Founded in San Francisco by Alex Rivera and Jordan Patel", state: "success" as const },
  { label: "2023", description: "Launched public beta, reached 1,000 users in first month", state: "success" as const },
  { label: "2024", description: "Series A funding, expanded to 50 team members across 8 countries", state: "success" as const },
  { label: "2025", description: "10,000+ customers, 200+ integrations, SOC 2 Type II certified", state: "success" as const },
  { label: "2026", description: "General availability of AI-powered predictive analytics", state: "active" as const },
];

const values = [
  {
    icon: "lightbulb" as const,
    title: "Clarity First",
    description: "We believe the best analytics surface signal, not noise. Every feature we build must make data clearer.",
    back: "We ruthlessly cut features that add complexity without proportional value. Simple is hard, and worth it.",
  },
  {
    icon: "bolt" as const,
    title: "Speed Matters",
    description: "Fast queries, fast dashboards, fast decisions. Performance is a feature, not an afterthought.",
    back: "Sub-second is our bar. If a query takes over a second, we treat it as a bug.",
  },
  {
    icon: "shield" as const,
    title: "Trust by Default",
    description: "Your data is sacred. We earn trust through transparency, compliance, and security by design.",
    back: "SOC 2, GDPR, HIPAA — not checkboxes but fundamental principles baked into every layer.",
  },
  {
    icon: "heart" as const,
    title: "Customer Obsessed",
    description: "We build what our customers need, not what sounds impressive. Feedback drives our roadmap.",
    back: "Every team member spends time on support. Empathy for users is how we build better products.",
  },
];

export default function AboutPage() {
  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.about.title}
        description={meta.about.description}
        path={meta.about.path}
      />

      {/* Hero */}
      <Column
        fillWidth
        maxWidth="l"
        horizontal="center"
        paddingX="l"
        paddingY="80"
        gap="24"
        align="center"
        style={{ margin: "0 auto" }}
      >
        <Heading variant="display-strong-l" align="center" wrap="balance">
          Making data intelligence accessible to every team
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          We started NovaPulse because we believed analytics should be fast, intuitive,
          and available to everyone — not just data engineers.
        </Text>
      </Column>

      {/* Company Stats */}
      <Column fillWidth background="surface" borderY="neutral-alpha-medium">
        <Row
          fillWidth
          maxWidth="l"
          paddingX="l"
          paddingY="48"
          horizontal="center"
          gap="48"
          wrap
          style={{ margin: "0 auto" }}
        >
          {companyStats.map((stat) => (
            <Column key={stat.label} horizontal="center" gap="4" align="center" flex={1} minWidth="0">
              <Row vertical="end" gap="2">
                <Heading variant="display-strong-l">
                  <CountFx value={stat.value} speed={1500} effect="smooth" />
                </Heading>
                {stat.suffix && <Heading variant="display-strong-l">{stat.suffix}</Heading>}
              </Row>
              <Text variant="label-default-s" onBackground="neutral-weak">{stat.label}</Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Values */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="80" gap="48" style={{ margin: "0 auto" }}>
        <Column horizontal="center" gap="16" align="center">
          <Text variant="label-strong-s" onBackground="brand-medium">OUR VALUES</Text>
          <Heading variant="heading-strong-xl" align="center">
            What drives us
          </Heading>
        </Column>

        <Grid columns="2" gap="24" s={{ columns: "1" }}>
          {values.map((v) => (
            <RevealFx key={v.title}>
              <FlipFx
                fillWidth
                front={
                  <Card padding="32" gap="16" direction="column" border="neutral-alpha-medium" fillWidth minHeight={200}>
                    <Row width={48} height={48} radius="m" background="brand-alpha-medium" center>
                      <Icon name={v.icon} size="m" onBackground="brand-medium" />
                    </Row>
                    <Heading variant="heading-strong-m">{v.title}</Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak">{v.description}</Text>
                  </Card>
                }
                back={
                  <Card padding="32" gap="16" direction="column" border="brand-medium" background="surface" fillWidth minHeight={200} center>
                    <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                      {v.back}
                    </Text>
                  </Card>
                }
              />
            </RevealFx>
          ))}
        </Grid>
      </Column>

      {/* Team */}
      <Column fillWidth background="surface" borderY="neutral-alpha-medium">
        <Column fillWidth maxWidth="l" paddingX="l" paddingY="80" gap="48" style={{ margin: "0 auto" }}>
          <Column horizontal="center" gap="16" align="center">
            <Text variant="label-strong-s" onBackground="brand-medium">TEAM</Text>
            <Heading variant="heading-strong-xl" align="center">
              The people behind NovaPulse
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              A distributed team of 85+ across 12 countries, united by a passion for making data accessible.
            </Text>
          </Column>

          <Grid columns="3" gap="24" m={{ columns: "2" }} s={{ columns: "1" }}>
            {teamMembers.map((member) => (
              <RevealFx key={member.name}>
                <Card padding="24" gap="16" direction="column" border="neutral-alpha-medium" fillWidth horizontal="center" align="center">
                  <Avatar value={member.initials} size="xl" />
                  <Column gap="4" align="center">
                    <Text variant="heading-strong-s">{member.name}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">{member.role}</Text>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* Company History */}
      <Column fillWidth maxWidth="m" paddingX="l" paddingY="80" gap="48" style={{ margin: "0 auto" }}>
        <Column horizontal="center" gap="16" align="center">
          <Text variant="label-strong-s" onBackground="brand-medium">OUR JOURNEY</Text>
          <Heading variant="heading-strong-xl" align="center">
            From idea to 10,000+ customers
          </Heading>
        </Column>
        <Timeline items={historyItems} size="l" />
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
            Join our team
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            We are always looking for talented people who share our passion for data.
          </Text>
          <Row gap="16" horizontal="center" wrap>
            <Button href="/contact" size="m" arrowIcon>
              View Open Positions
            </Button>
            <Button href="/contact" variant="secondary" size="m">
              Contact Us
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
