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
        maxWidth="l"
        horizontal="center"
        paddingX="l"
        paddingY="12"
        vertical="center"
        style={{ margin: "0 auto" }}
      >
        <Row horizontal="between" fillWidth vertical="center">
          <SmartLink href="/" unstyled>
            <Text variant="heading-strong-m" onBackground="neutral-strong">
              NovaPulse
            </Text>
          </SmartLink>

          <Row gap="24" vertical="center" hide s={{ hide: false }}>
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

          <Row vertical="center" gap="8" s={{ hide: true }}>
            <ThemeSwitcher />
            <NavIcon isActive={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)} />
          </Row>
        </Row>
      </Row>

      {mobileOpen && (
        <Column
          fillWidth
          padding="l"
          gap="16"
          background="surface"
          borderBottom="neutral-alpha-medium"
          s={{ hide: true }}
        >
          {navLinks.map((link) => (
            <SmartLink key={link.href} href={link.href} unstyled>
              <Text variant="label-default-m" onBackground="neutral-medium">
                {link.label}
              </Text>
            </SmartLink>
          ))}
          <Button href="/contact" variant="primary" size="m" fillWidth>
            Get Started
          </Button>
        </Column>
      )}
    </Column>
  );
}
