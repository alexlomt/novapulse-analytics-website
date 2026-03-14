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
  Background,
  RevealFx,
  LetterFx,
  CountFx,
  AccordionGroup,
  BlockQuote,
  ShineFx,
} from "@once-ui-system/core";

const stats = [
  { value: 10000, suffix: "+", label: "Active Users" },
  { value: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
  { value: 50, suffix: "M+", label: "Events / Day" },
  { value: 200, suffix: "+", label: "Integrations" },
];

const features = [
  {
    icon: "chart" as const,
    title: "Real-Time Dashboards",
    description: "Monitor your metrics live with sub-second latency. Build custom dashboards in minutes.",
  },
  {
    icon: "cpu" as const,
    title: "AI-Powered Insights",
    description: "Predictive analytics and anomaly detection powered by machine learning.",
  },
  {
    icon: "bolt" as const,
    title: "Blazing Fast Queries",
    description: "Query billions of rows in milliseconds with our distributed engine.",
  },
  {
    icon: "shield" as const,
    title: "Enterprise Security",
    description: "SOC 2 Type II, GDPR, and HIPAA compliant. Your data stays yours.",
  },
  {
    icon: "puzzle" as const,
    title: "200+ Integrations",
    description: "Connect to every tool in your stack. AWS, GCP, Snowflake, and more.",
  },
  {
    icon: "bell" as const,
    title: "Smart Alerts",
    description: "Get notified before issues become incidents. Slack, PagerDuty, email built in.",
  },
];

const testimonials = [
  {
    quote: "NovaPulse cut our incident response time by 70%. The real-time dashboards are a game-changer for our SRE team.",
    author: "Sarah Chen",
    role: "VP Engineering, ScaleUp Inc.",
  },
  {
    quote: "We evaluated 8 analytics platforms. NovaPulse was the only one that handled our 50M daily events without breaking a sweat.",
    author: "Marcus Webb",
    role: "CTO, DataStream Labs",
  },
  {
    quote: "The AI anomaly detection caught a revenue-impacting bug 4 hours before our monitoring would have. Paid for itself in a week.",
    author: "Priya Sharma",
    role: "Head of Data, FinTrack",
  },
];

const faqItems = [
  {
    title: "How does NovaPulse handle data privacy?",
    content: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        We are SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit.
        You retain full ownership of your data, and we never share it with third parties.
      </Text>
    ),
  },
  {
    title: "Can I try NovaPulse for free?",
    content: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        Yes! Our Starter plan is free forever with up to 1M events per month. No credit card required to get started.
      </Text>
    ),
  },
  {
    title: "What integrations do you support?",
    content: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        We support 200+ integrations including AWS, GCP, Azure, Snowflake, BigQuery, Segment, Slack, PagerDuty, and many more.
        Custom webhooks and REST API are also available.
      </Text>
    ),
  },
  {
    title: "How fast is the setup?",
    content: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        Most teams are up and running in under 15 minutes. Install our SDK, point it at your data source, and start building dashboards immediately.
      </Text>
    ),
  },
  {
    title: "Do you offer enterprise support?",
    content: (
      <Text variant="body-default-m" onBackground="neutral-weak">
        Enterprise plans include dedicated support, custom SLAs, SSO/SAML, and a dedicated solutions engineer. Contact us for details.
      </Text>
    ),
  },
];

export default function HomePage() {
  return (
    <Column fillWidth>
      {/* Hero */}
      <Column fillWidth position="relative" overflow="hidden">
        <Background
          fill
          position="absolute"
          gradient={{
            display: true,
            opacity: 40,
            x: 50,
            y: 0,
            width: 100,
            height: 100,
            tilt: -15,
          }}
          dots={{
            display: true,
            opacity: 20,
            size: "2",
            color: "brand-on-background-weak",
          }}
        />
        <Column
          fillWidth
          maxWidth="l"
          horizontal="center"
          paddingX="l"
          paddingY="104"
          gap="32"
          align="center"
          position="relative"
          style={{ margin: "0 auto" }}
        >
          <RevealFx>
            <Badge title="Now in General Availability" arrow href="/features" />
          </RevealFx>
          <RevealFx delay={0.1}>
            <Heading variant="display-strong-xl" align="center" wrap="balance">
              <LetterFx trigger="instant" speed="medium">
                Data intelligence that moves at your speed
              </LetterFx>
            </Heading>
          </RevealFx>
          <RevealFx delay={0.2}>
            <Column maxWidth="m" horizontal="center">
              <Text
                variant="heading-default-l"
                onBackground="neutral-weak"
                align="center"
                wrap="balance"
              >
                NovaPulse delivers real-time analytics, predictive insights, and
                seamless integrations so your team can make smarter decisions, faster.
              </Text>
            </Column>
          </RevealFx>
          <RevealFx delay={0.3}>
            <Row gap="16" horizontal="center" wrap>
              <Button href="/contact" size="m" arrowIcon>
                Start Free Trial
              </Button>
              <Button href="/features" variant="secondary" size="m">
                See Features
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>

      {/* Stats */}
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
          {stats.map((stat) => (
            <Column key={stat.label} horizontal="center" gap="4" align="center" flex={1} minWidth="0">
              <Row vertical="end" gap="2">
                <Heading variant="display-strong-l">
                  <CountFx
                    value={stat.value}
                    decimals={stat.decimals ?? 0}
                    speed={1500}
                    effect="smooth"
                  />
                </Heading>
                <Heading variant="display-strong-l">{stat.suffix}</Heading>
              </Row>
              <Text variant="label-default-s" onBackground="neutral-weak">
                {stat.label}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Features */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="80" gap="48" style={{ margin: "0 auto" }}>
        <Column horizontal="center" gap="16" align="center">
          <Text variant="label-strong-s" onBackground="brand-medium">FEATURES</Text>
          <Heading variant="heading-strong-xl" align="center">
            Everything you need to understand your data
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center">
            From real-time monitoring to AI-powered predictions, NovaPulse gives
            you the complete toolkit for data-driven decisions.
          </Text>
        </Column>

        <Grid columns="3" gap="24" m={{ columns: "2" }} s={{ columns: "1" }}>
          {features.map((feature) => (
            <RevealFx key={feature.title}>
              <Card padding="32" gap="16" direction="column" border="neutral-alpha-medium" fillWidth fillHeight>
                <Row width={48} height={48} radius="m" background="brand-alpha-medium" center>
                  <Icon name={feature.icon} size="m" onBackground="brand-medium" />
                </Row>
                <Heading variant="heading-strong-m">{feature.title}</Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">{feature.description}</Text>
              </Card>
            </RevealFx>
          ))}
        </Grid>
      </Column>

      {/* Testimonials */}
      <Column fillWidth background="surface" borderY="neutral-alpha-medium">
        <Column fillWidth maxWidth="l" paddingX="l" paddingY="80" gap="48" style={{ margin: "0 auto" }}>
          <Column horizontal="center" gap="16" align="center">
            <Text variant="label-strong-s" onBackground="brand-medium">TESTIMONIALS</Text>
            <Heading variant="heading-strong-xl" align="center">
              Trusted by data-driven teams
            </Heading>
          </Column>

          <Grid columns="3" gap="24" m={{ columns: "1" }}>
            {testimonials.map((t) => (
              <RevealFx key={t.author}>
                <Card padding="32" gap="24" direction="column" border="neutral-alpha-medium" fillWidth fillHeight>
                  <BlockQuote
                    author={{ name: t.author }}
                    subline={
                      <Text variant="label-default-s" onBackground="neutral-weak">{t.role}</Text>
                    }
                  >
                    {t.quote}
                  </BlockQuote>
                </Card>
              </RevealFx>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* FAQ */}
      <Column fillWidth maxWidth="m" paddingX="l" paddingY="80" gap="48" style={{ margin: "0 auto" }}>
        <Column horizontal="center" gap="16" align="center">
          <Text variant="label-strong-s" onBackground="brand-medium">FAQ</Text>
          <Heading variant="heading-strong-xl" align="center">
            Frequently asked questions
          </Heading>
        </Column>
        <AccordionGroup items={faqItems} size="l" />
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
          paddingY="80"
          gap="32"
          align="center"
          position="relative"
          style={{ margin: "0 auto" }}
        >
          <Heading variant="display-strong-l" align="center">
            Ready to unlock your data?
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
            Join 10,000+ teams already using NovaPulse to make smarter, faster decisions.
          </Text>
          <Row gap="16" horizontal="center" wrap>
            <ShineFx>
              <Button href="/contact" size="m" arrowIcon>
                Start Free Trial
              </Button>
            </ShineFx>
            <Button href="/pricing" variant="secondary" size="m">
              View Pricing
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
