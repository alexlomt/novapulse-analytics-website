import { Row, Column, Text, SmartLink, Line, Icon } from "@once-ui-system/core";

const footerLinks = {
  product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/features#integrations" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about#careers" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Status", href: "#" },
  ],
};

export function Footer() {
  return (
    <Column as="footer" fillWidth background="surface" borderTop="neutral-alpha-medium">
      <Column fillWidth maxWidth="l" paddingX="l" paddingY="48" gap="48" style={{ margin: "0 auto" }}>
        <Row fillWidth gap="48" wrap s={{ direction: "column" }}>
          <Column flex={2} gap="16" minWidth="0">
            <Text variant="heading-strong-m" onBackground="neutral-strong">
              NovaPulse
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Real-time data intelligence for modern teams. Make smarter decisions, faster.
            </Text>
            <Row gap="16">
              <SmartLink href="mailto:hello@novapulse.io">
                <Icon name="envelope" size="s" onBackground="neutral-medium" />
              </SmartLink>
            </Row>
          </Column>

          <Row flex={3} gap="48" wrap minWidth="0">
            {Object.entries(footerLinks).map(([category, links]) => (
              <Column key={category} gap="12" minWidth="0" flex={1}>
                <Text variant="label-strong-s" onBackground="neutral-strong" style={{ textTransform: "capitalize" }}>
                  {category}
                </Text>
                {links.map((link) => (
                  <SmartLink key={link.href + link.label} href={link.href}>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {link.label}
                    </Text>
                  </SmartLink>
                ))}
              </Column>
            ))}
          </Row>
        </Row>

        <Line />

        <Row fillWidth horizontal="between" vertical="center" gap="8" s={{ direction: "column" }}>
          <Text variant="body-default-xs" onBackground="neutral-weak">
            &copy; {new Date().getFullYear()} NovaPulse Analytics. All rights reserved.
          </Text>
          <Row gap="16">
            <SmartLink href="#">
              <Text variant="body-default-xs" onBackground="neutral-weak">Privacy</Text>
            </SmartLink>
            <SmartLink href="#">
              <Text variant="body-default-xs" onBackground="neutral-weak">Terms</Text>
            </SmartLink>
          </Row>
        </Row>
      </Column>
    </Column>
  );
}
