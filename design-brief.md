# Layout Structure - NovaPulse Analytics

## Brand Personality
- Professional, modern, data-driven
- Startup-friendly but enterprise-capable
- Clean, analytical, trustworthy
- Target audience: Startup founders, product managers, data analysts
- Key value proposition: Real-time analytics that help startups make data-driven decisions

## Font Selection
**Primary**: Inter (Clean, readable sans-serif excellent for data interfaces and analytics dashboards)
**Code**: JetBrains Mono (Technical monospace for code snippets, API examples, data values)

## Page Structure

### 1. Homepage (/)
- **Navigation**: Fixed dark header with logo, main nav items (Features, Pricing, About, Contact), CTA button
- **Hero**: Background with gradient + dot pattern, RevealFx animated headline, CountFx for key metrics (users served, data points processed), primary CTA "Start Free Trial"
- **Trust/Social Proof**: LogoCloud of customer logos below hero
- **Features**: 3-column Cards with HoverCard interactions showcasing core analytics features
- **Testimonials**: Carousel with customer quotes and metrics improvements
- **Pricing**: SegmentedControl for plan comparison with AccordionGroup FAQ
- **Contact/CTA**: LetterFx animated final call-to-action

### 2. Features (/features)
- **Navigation**: Same as homepage
- **Hero**: MatrixFx or Particle background effect with feature overview
- **Features Grid**: SegmentedControl tabs for different analytics categories
- **Feature Details**: CompareImage components showing before/after analytics views
- **Roadmap**: Timeline component showing product development
- **Feature Tags**: Badge/Tag labels for feature categories and availability

### 3. Pricing (/pricing)
- **Navigation**: Same as homepage
- **Hero**: Clean headline with value proposition
- **Pricing Cards**: 3-tier layout (Starter/Growth/Enterprise) with ShineFx on recommended plan
- **Billing Toggle**: ToggleButton for monthly/annual billing
- **Feature Comparison**: Chip tags for feature availability
- **Status Indicators**: StatusIndicator for plan benefits
- **FAQ**: AccordionGroup for common questions

### 4. Contact (/contact)
- **Navigation**: Same as homepage
- **Contact Form**: Clean form layout with Input, Textarea, Select components
- **Form Controls**: Checkbox for newsletter, Switch for notifications, Slider for company size
- **Submit**: Button with loading state, Toast confirmations
- **Modal**: Dialog for form submission confirmation

### 5. About (/about)
- **Navigation**: Same as homepage
- **Team Section**: AvatarGroup for team photos, User components for detailed bios
- **Company History**: Timeline component showing milestones
- **Statistics**: CountFx for company metrics
- **Values**: FlipFx cards showing company principles

## Content Zones

### Hero CTA
- **Primary action**: "Start Free Trial" - prominent button with ShineFx
- **Secondary action**: "Watch Demo" - ghost button with play icon

### Social Proof
- Customer logos in LogoCloud
- Review quotes with star ratings
- Key metrics: "10,000+ startups trust NovaPulse"

### Services Emphasis
- **Real-time Analytics**: Track user behavior instantly
- **Revenue Insights**: Monitor MRR, churn, expansion
- **Product Metrics**: Feature adoption, user flows
- **Custom Dashboards**: Build analytics for your needs
- **API Integration**: Connect any data source
- **Automated Reports**: Daily/weekly insights delivered

### Contact Priority
- Primary: "Start Free Trial" button (highest prominence)
- Secondary: "Book Demo" form
- Tertiary: Email support contact
- Location: Remote-first company messaging

## Responsive Considerations

### Mobile-specific Layout
- Navigation collapses to hamburger with NavIcon
- Hero text scales down, single-column layout
- Feature cards stack vertically
- Pricing table becomes horizontal scroll with Scroller
- Contact form maintains full width with adjusted spacing

### Content Priority on Small Screens
1. Value proposition and primary CTA
2. Key analytics features
3. Social proof (customer count)
4. Simplified pricing
5. Contact form

## Effects Implementation

### Required Effects
- **RevealFx**: Hero headline animation
- **LetterFx**: CTA text scramble on hover
- **CountFx**: Statistics and metrics
- **CountdownFx**: Limited-time offers
- **ShineFx**: Recommended pricing plan
- **GlitchFx**: Data visualization accent effects
- **Animation**: Micro-interactions throughout
- **TypeFx**: Dynamic text in hero subheadline
- **TiltFx**: Feature cards on hover
- **Particle**: Background ambient animation

### Color Usage
- **Primary brand (blue)**: CTAs, primary navigation, key metrics
- **Accent (cyan)**: Secondary actions, highlights, data visualization
- **Neutral (slate)**: Text, borders, backgrounds
- **Dark theme**: All components optimized for dark backgrounds

## Component Strategy
- **Cards**: Primary container for features, testimonials, pricing
- **Buttons**: Multiple variants (primary blue, secondary cyan, ghost)
- **Badges/Tags**: Feature categorization and status indicators
- **Timeline**: Company history and product roadmap
- **Carousel**: Testimonials and case studies
- **Accordion**: FAQ sections and feature details
- **HoverCard**: Interactive feature previews
- **Media**: Screenshot galleries with lightbox capability