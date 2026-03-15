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
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  Slider,
  Dialog,
} from "@once-ui-system/core";
import { useToast } from "@once-ui-system/core";
import { Schema } from "@once-ui-system/core";
import { baseURL, meta } from "@/resources/seo";
import { useState, useCallback } from "react";

const departmentOptions = [
  { value: "sales", label: "Sales" },
  { value: "support", label: "Technical Support" },
  { value: "partnerships", label: "Partnerships" },
  { value: "billing", label: "Billing" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");
  const [teamSize, setTeamSize] = useState(10);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  const handleSubmit = useCallback(async () => {
    if (!name || !email || !department || !message || !termsAccepted) {
      addToast({ variant: "danger", message: "Please fill in all required fields and accept the terms." });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          department,
          message,
          teamSize: String(teamSize),
          termsAccepted,
          newsletterOptIn,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setShowConfirmation(true);
        setName("");
        setEmail("");
        setDepartment("");
        setMessage("");
        setTeamSize(10);
        setTermsAccepted(false);
        setNewsletterOptIn(false);
        addToast({ variant: "success", message: data.message });
      } else {
        addToast({ variant: "danger", message: data.message || "Something went wrong." });
      }
    } catch {
      addToast({ variant: "danger", message: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }, [name, email, department, message, teamSize, termsAccepted, newsletterOptIn, addToast]);

  return (
    <Column fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.contact.title}
        description={meta.contact.description}
        path={meta.contact.path}
      />

      <Column
        fillWidth
        maxWidth="l"
        horizontal="center"
        paddingX="l"
        paddingY="64"
        gap="24"
        align="center"
        style={{ margin: "0 auto" }}
      >
        <Heading variant="display-strong-l" align="center">
          Get in touch
        </Heading>
        <Text variant="heading-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Have a question or want to see a demo? We would love to hear from you.
        </Text>
      </Column>

      <Column fillWidth maxWidth="l" paddingX="l" paddingBottom="64" style={{ margin: "0 auto" }}>
        <Grid columns="5" gap="32" s={{ columns: "1" }}>
          {/* Contact Info */}
          <Column gap="24" style={{ gridColumn: "span 2" }}>
            <Card padding="24" gap="16" direction="column" border="neutral-alpha-medium" fillWidth>
              <Row gap="12" vertical="center">
                <Icon name="envelope" size="m" onBackground="brand-medium" />
                <Column gap="2">
                  <Text variant="label-strong-s">Email</Text>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    as="a"
                    style={{ textDecoration: "none", color: "inherit" }}
                    {...{ href: "mailto:hello@novapulse.io" }}
                  >
                    hello@novapulse.io
                  </Text>
                </Column>
              </Row>
            </Card>

            <Card padding="24" gap="16" direction="column" border="neutral-alpha-medium" fillWidth>
              <Row gap="12" vertical="center">
                <Icon name="phone" size="m" onBackground="brand-medium" />
                <Column gap="2">
                  <Text variant="label-strong-s">Phone</Text>
                  <Text
                    variant="body-default-s"
                    onBackground="neutral-weak"
                    as="a"
                    style={{ textDecoration: "none", color: "inherit" }}
                    {...{ href: "tel:+14155550123" }}
                  >
                    +1 (415) 555-0123
                  </Text>
                </Column>
              </Row>
            </Card>

            <Card padding="24" gap="16" direction="column" border="neutral-alpha-medium" fillWidth>
              <Row gap="12" vertical="center">
                <Icon name="mapPin" size="m" onBackground="brand-medium" />
                <Column gap="2">
                  <Text variant="label-strong-s">Office</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    548 Market St, Suite 300<br />San Francisco, CA 94104
                  </Text>
                </Column>
              </Row>
            </Card>
          </Column>

          {/* Contact Form */}
          <Card
            padding="32"
            gap="24"
            direction="column"
            border="neutral-alpha-medium"
            fillWidth
            style={{ gridColumn: "span 3" }}
          >
            <Heading variant="heading-strong-l">Send us a message</Heading>

            <Row gap="16" fillWidth s={{ direction: "column" }}>
              <Column fillWidth>
                <Input
                  id="name"
                  label="Name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Column>
              <Column fillWidth>
                <Input
                  id="email"
                  label="Email"
                  placeholder="you@company.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Column>
            </Row>

            <Select
              id="department"
              label="Department"
              options={departmentOptions}
              value={department}
              onSelect={(v) => setDepartment(v as string)}
            />

            <Textarea
              id="message"
              label="Message"
              placeholder="Tell us about your analytics needs..."
              lines={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Column gap="8">
              <Text variant="label-default-s" onBackground="neutral-medium">
                Team size: {teamSize}
              </Text>
              <Slider
                value={teamSize}
                onChange={setTeamSize}
                min={1}
                max={500}
                step={1}
                label="Team size"
              />
            </Column>

            <Column gap="16">
              <Checkbox
                label="I accept the terms and conditions"
                isChecked={termsAccepted}
                onToggle={() => setTermsAccepted(!termsAccepted)}
              />
              <Switch
                label="Subscribe to product updates"
                isChecked={newsletterOptIn}
                onToggle={() => setNewsletterOptIn(!newsletterOptIn)}
              />
            </Column>

            <Button
              variant="primary"
              size="m"
              fillWidth
              loading={loading}
              onClick={handleSubmit}
              arrowIcon
            >
              Send Message
            </Button>
          </Card>
        </Grid>
      </Column>

      <Dialog
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Message sent!"
        description="Thank you for reaching out. Our team will get back to you within 24 hours."
        footer={
          <Button variant="primary" size="m" onClick={() => setShowConfirmation(false)}>
            Got it
          </Button>
        }
      />
    </Column>
  );
}
