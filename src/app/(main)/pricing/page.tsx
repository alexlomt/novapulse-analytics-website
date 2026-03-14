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
  ToggleButton,
  Tag,
  Feedback,
  ShineFx,
  Background,
  RevealFx,
} from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    description: "For small teams getting started with analytics",
    monthlyPrice: 0,
    annualPrice: 0,
    cta: "Start Free",
    ctaVariant: "secondary" as const,
    recommended: false,
    features: [
      { name: "Up to 1M events/month", included: true },
      { name: "5 dashboards", included: true },
      { name: "7-day data retention", included: true },
      { name: "3 team members", included: true },
      { name: "Community support", included: true },
      { name: "Predictive analytics", included: false },
      { name: "Custom integrations", included: false },
      { name: "SSO/SAML", included: false },
    ],
  },
  {
    name: "Growth",
    description: "For growing teams that need deeper insights",
    monthlyPrice: 79,
    annualPrice: 59,
    cta: "Start Trial",
    ctaVariant: "primary" as const,
    recommended: true,
    features: [
      { name: "Up to 50M events/month", included: true },
      { name: "Unlimited dashboards", included: true },
      { name: "90-day data retention", included: true },
      { name: "25 team members", included: true },
      { name: "Priority support", included: true },
      { name: "Predictive analytics", included: true },
      { name: "Custom integrations", included: true },
      { name: "SSO/SAML", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For organizations with advanced needs",
    monthlyPrice: -1,
    annualPrice: -1,
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
    recommended: false,
    features: [
      { name: "Unlimited events", included: true },
      { name: "Unlimited dashboards", included: true },
      { name: "Unlimited retention", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Dedicated support + SLA", included: true },
      { name: "Predictive analytics", included: true },
      { name: "Custom integrations", included: true },
      { name: "SSO/SAML + audit logs", included: true },
    ],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.pricing.title}
        description={meta.pricing.description}
        path={meta.pricing.path}
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
        <Heading variant="display-strong-l" align="center">
          Simple, transparent pricing
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Start free. Scale as you grow. No surprises.
        </Text>

        <Row gap="8" vertical="center">
          <Text variant="label-default-s" onBackground={annual ? "neutral-weak" : "neutral-strong"}>Monthly</Text>
          <ToggleButton
            label=""
            selected={annual}
            onClick={() => setAnnual(!annual)}
            prefixIcon={annual ? "check" : undefined}
          />
          <Text variant="label-default-s" onBackground={annual ? "neutral-strong" : "neutral-weak"}>
            Annual
          </Text>
          {annual && <Tag label="Save 25%" variant="success" size="s" />}
        </Row>
      </Column>

      {/* Plans */}
      <Column fillWidth maxWidth="l" paddingX="l" paddingBottom="80" style={{ margin: "0 auto" }}>
        <Grid columns="3" gap="24" m={{ columns: "1" }}>
          {plans.map((plan) => (
            <RevealFx key={plan.name}>
              <Card
                padding="32"
                gap="24"
                direction="column"
                border={plan.recommended ? "brand-medium" : "neutral-alpha-medium"}
                fillWidth
                fillHeight
              >
                {plan.recommended && (
                  <Row horizontal="center">
                    <Tag label="Most Popular" variant="brand" size="s" />
                  </Row>
                )}
                <Column gap="8">
                  <Heading variant="heading-strong-l">{plan.name}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">{plan.description}</Text>
                </Column>

                <Row vertical="end" gap="4">
                  {plan.monthlyPrice === -1 ? (
                    <Heading variant="display-strong-m">Custom</Heading>
                  ) : (
                    <>
                      <Heading variant="display-strong-m">
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </Heading>
                      <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="4">
                        /mo{annual && plan.annualPrice > 0 ? ", billed annually" : ""}
                      </Text>
                    </>
                  )}
                </Row>

                {plan.recommended ? (
                  <ShineFx>
                    <Button href="/contact" variant={plan.ctaVariant} size="m" fillWidth arrowIcon>
                      {plan.cta}
                    </Button>
                  </ShineFx>
                ) : (
                  <Button href="/contact" variant={plan.ctaVariant} size="m" fillWidth>
                    {plan.cta}
                  </Button>
                )}

                <Column gap="12">
                  {plan.features.map((feature) => (
                    <Row key={feature.name} gap="12" vertical="center">
                      <Icon
                        name={feature.included ? "check" : "xMark"}
                        size="s"
                        onBackground={feature.included ? "success-medium" : "neutral-weak"}
                      />
                      <Text
                        variant="body-default-s"
                        onBackground={feature.included ? "neutral-strong" : "neutral-weak"}
                      >
                        {feature.name}
                      </Text>
                    </Row>
                  ))}
                </Column>
              </Card>
            </RevealFx>
          ))}
        </Grid>
      </Column>

      {/* Enterprise CTA */}
      <Column fillWidth background="surface" borderY="neutral-alpha-medium">
        <Column fillWidth maxWidth="m" paddingX="l" paddingY="64" gap="24" style={{ margin: "0 auto" }}>
          <Feedback variant="info" title="Need a custom plan?">
            <Text variant="body-default-m" onBackground="neutral-weak">
              Enterprise plans include custom SLAs, dedicated support, data residency options,
              and volume discounts. Our team will work with you to build the right plan.
            </Text>
          </Feedback>
          <Row horizontal="center">
            <Button href="/contact" variant="primary" size="m" arrowIcon>
              Talk to Sales
            </Button>
          </Row>
        </Column>
      </Column>
    </Column>
  );
}
