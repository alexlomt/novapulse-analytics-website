"use client";

import { Row, Button, Text, SmartLink, ThemeSwitcher, NavIcon, Column } from "@once-ui-system/core";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Column
      as="header"
      fillWidth
      position="fixed"
      top="0"
      left="0"
      zIndex={10}
      background="surface"
      borderBottom="neutral-alpha-medium"
    >
      <Row
        fillWidth
        horizontal="between"
        vertical="center"
        paddingX="l"
        paddingY="12"
        style={{ maxWidth: "var(--responsive-width-l)", margin: "0 auto" }}
      >
        <SmartLink href="/" unstyled>
          <Text variant="heading-strong-m" onBackground="neutral-strong">
            NovaPulse
          </Text>
        </SmartLink>

        {/* Desktop nav — hidden on mobile via CSS */}
        <Row gap="24" vertical="center" className="desktop-nav">
          {navLinks.map((link) => (
            <SmartLink key={link.href} href={link.href}>
              <Text variant="label-default-s" onBackground="neutral-medium">
                {link.label}
              </Text>
            </SmartLink>
          ))}
          <ThemeSwitcher />
          <Button href="/contact" variant="primary" size="s">
            Get Started
          </Button>
        </Row>

        {/* Mobile nav toggle — hidden on desktop via CSS */}
        <Row vertical="center" className="mobile-nav">
          <NavIcon isActive={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
        </Row>
      </Row>

      {mobileOpen && (
        <Column
          fillWidth
          paddingX="l"
          paddingBottom="l"
          gap="16"
          background="surface"
          borderBottom="neutral-alpha-medium"
        >
          {navLinks.map((link) => (
            <SmartLink key={link.href} href={link.href} unstyled>
              <Text variant="label-default-m" onBackground="neutral-medium">
                {link.label}
              </Text>
            </SmartLink>
          ))}
          <Row paddingTop="8">
            <ThemeSwitcher />
          </Row>
          <Button href="/contact" variant="primary" size="m" fillWidth>
            Get Started
          </Button>
        </Column>
      )}
    </Column>
  );
}
