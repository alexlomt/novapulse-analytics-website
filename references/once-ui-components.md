# Once UI Components Reference

Source: `@once-ui-system/core` v1.6.4 GitHub source code.
Every prop name and type below comes from the actual component `.tsx` source files.

> **Agents**: When unsure about a prop, check the source at the Once UI GitHub repo.
> Components extending `Flex` inherit all Flex layout/style props (padding, gap, background, etc.).

---

## Layout

**Flex** - Base layout primitive. All layout props flow through here.
Inherits: FlexProps + SpacingProps + SizeProps + StyleProps + CommonProps + DisplayProps.
- **Directional** (FlexProps): `direction` ("row" | "column" | "row-reverse" | "column-reverse"), `wrap` (boolean), `horizontal` ("start" | "center" | "end" | "between" | "around" | "even" | "stretch"), `vertical` (same values), `center` (boolean, shorthand for both), `flex` (0-12, flex grow/shrink value)
- **Spacing** (SpacingProps): `gap`, `padding`, `paddingX`, `paddingY`, `paddingLeft`, `paddingRight`, `paddingTop`, `paddingBottom`, `margin`, `marginX`, `marginY`, `marginLeft`, `marginRight`, `marginTop`, `marginBottom` (SpacingToken | number as REM), `top`, `right`, `bottom`, `left` (SpacingToken | number | CSSUnit), `translateX`, `translateY` (SpacingToken | number | CSSUnit). Use `gap="-1"` to collapse stacked borders.
- **Size** (SizeProps): `width`, `height`, `minWidth`, `minHeight`, `maxWidth`, `maxHeight` (number | SpacingToken | CSSUnit), `fill` (shorthand for fillWidth + fillHeight), `fillWidth`, `fillHeight` (boolean, auto-add minWidth/minHeight="0"), `fit` (shorthand for fitWidth + fitHeight), `fitWidth`, `fitHeight` (boolean, min-content sizing), `aspectRatio`
- **Style** (StyleProps): `background` (Colors | "surface" | "overlay" | "page" | "transparent"), `solid` (Colors), `border` (Colors | "surface" | "transparent" | boolean), `borderTop`, `borderRight`, `borderBottom`, `borderLeft`, `borderX`, `borderY` (same as border), `borderStyle` ("solid" | "dashed"), `borderWidth` (1 | 2 | 4 | 6 | 8), `radius` (RadiusSize | "RadiusSize-RadiusNest"), `topRadius`, `rightRadius`, `bottomRadius`, `leftRadius`, `topLeftRadius`, `topRightRadius`, `bottomLeftRadius`, `bottomRightRadius` (RadiusSize), `shadow` ("xs" | "s" | "m" | "l" | "xl"), `cursor` (CSSProperties["cursor"] | "interactive" | ReactNode), `textVariant` (TextVariant), `textSize` (TextSize), `textType` (TextType), `textWeight` (TextWeight)
- **Display** (DisplayProps): `as` (ElementType — render as any HTML tag), `inline` (boolean), `hide` (boolean), `dark` (boolean — only show in dark mode), `light` (boolean — only show in light mode), `position`, `overflow`, `overflowX`, `overflowY`, `scrollbar` ("default" | "minimal"), `pointerEvents` ("none" | "all" | "auto"), `opacity` (0-100 in steps of 10), `zIndex` (-1 to 10), `transition` ("micro-short" | "micro-medium" | "micro-long" | "macro-short" | "macro-medium" | "macro-long")
- **Common** (CommonProps): `onBackground` (Colors), `onSolid` (Colors), `align` (CSSProperties["textAlign"] — sets text-align, NOT flex alignment), `className`, `children`, `style`
- **Responsive breakpoints**: `xl`, `l`, `m`, `s`, `xs` (each accepts FlexBreakpointProps: `direction?`, `horizontal?`, `vertical?`, `center?`, `hide?`, `position?`, `overflow?`, `overflowX?`, `overflowY?`, `top?`, `right?`, `bottom?`, `left?`, `aspectRatio?`, `style?`). Breakpoints cascade: larger flows down to smaller.
- **Breakpoint pixel values**: xs=480px, s=768px, m=1024px, l=1440px, xl=∞

**Column** - Flex with `direction="column"`. Extends Flex (inherits all Flex props).

**Row** - Flex with default direction (row). Extends Flex (inherits all Flex props).

**Grid** - CSS Grid layout. Extends Flex.
- Props: `columns` (gridSize: 1-12), `rows` (gridSize: 1-12) + all Flex props
- Responsive breakpoints: `xl`, `l`, `m`, `s`, `xs` (each accepts GridBreakpointProps: `columns?`, `hide?`, `overflow?`, `overflowX?`, `overflowY?`, `top?`, `right?`, `bottom?`, `left?`, `aspectRatio?`, `style?`, `position?`)
- Note: For responsive columns, use breakpoint objects: `<Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }}>`

**MasonryGrid** - Masonry-style grid layout. Extends Flex.
- Props: `columns` (number), `gap` (SpacingToken)
- Responsive: `l?: { columns, hide }`, `m?: { columns, hide }`, `s?: { columns, hide }`, `xs?: { columns, hide }`

---

## Typography

**Heading** - Heading text (`h1`-`h6`). Uses TextProps + CommonProps + SpacingProps.
- Props: `as` (ElementType, default `h1`), `variant` (TextVariant), `size`, `weight`, `family?: "display" | "heading" | "body" | "label" | "code"` (override font family), `onBackground`, `onSolid`, `align`, `wrap` (default `"balance"`), `truncate`
- Common variants: `display-strong-l`, `display-strong-m`, `display-strong-s`, `heading-strong-xl`, `heading-strong-l`, `heading-strong-m`, `heading-strong-s`

**Text** - Body/label text. Uses TextProps + CommonProps + SpacingProps.
- Props: `as` (ElementType, default `span`), `variant` (TextVariant), `size`, `weight`, `family?: "display" | "heading" | "body" | "label" | "code"` (override font family), `onBackground`, `onSolid`, `align`, `wrap`, `truncate`
- Common variants: `body-default-l`, `body-default-m`, `body-default-s`, `body-strong-m`, `label-default-m`, `label-default-s`, `label-strong-m`
- Note: When `variant` is set, `size` and `weight` are ignored.

**InlineCode** - Inline code styling. Extends Flex.
- Wraps children in code-styled span.

**BlockQuote** - Block quotation with attribution. Extends Column.
- Props: `children` (required), `preline?` (ReactNode, text above the quote), `subline?` (ReactNode, text below the quote), `separator?: "top" | "bottom" | "both" | "none"` (divider lines), `author?: { name?: ReactNode, avatar?: string }` (attribution with optional avatar image), `link?: { href: string, label: string }` (source link), `align?: "center" | "left" | "right"` (text alignment)

**Kbd** - Keyboard shortcut display. Extends Flex.
- Props: `label` (string), `children` (ReactNode)

---

## Buttons & Actions

**Button** - Primary action button.
- Props: `variant?: "primary" | "secondary" | "tertiary" | "danger"`, `size?: "s" | "m" | "l"`, `label?` (string), `weight?: "default" | "strong"` (default `"strong"`), `rounded?` (boolean), `prefixIcon?` (IconName), `suffixIcon?` (IconName), `loading?`, `disabled?`, `fillWidth?`, `horizontal?: "start" | "center" | "end" | "between"`, `href?` (makes it a link), `arrowIcon?` (boolean), `id?`
- Radius: `"none" | "top" | "right" | "bottom" | "left" | "top-left" | "top-right" | "bottom-right" | "bottom-left"`

**IconButton** - Icon-only button.
- Props: `icon?` (IconName, default `"refresh"`), `size?: "s" | "m" | "l"`, `variant?: "primary" | "secondary" | "tertiary" | "danger" | "ghost"`, `tooltip?` (string), `tooltipPosition?: "top" | "bottom" | "left" | "right"`, `href?`, `id?`
- Radius: same as Button
- Note: Has 5 variants (includes `"ghost"`) vs Button's 4.

**ToggleButton** - Selectable toggle button.
- Props: `label?` (ReactNode), `selected?` (boolean), `variant?: "ghost" | "outline"`, `size?: "s" | "m" | "l"`, `weight?: "default" | "strong"`, `truncate?`, `prefixIcon?`, `suffixIcon?`, `fillWidth?`, `horizontal?`, `href?`
- Radius: same as Button

**SmartLink** - Intelligent link (internal vs external routing).
- Props: `href?`, `prefixIcon?`, `suffixIcon?`, `fillWidth?`, `iconSize?: "xs" | "s" | "m" | "l" | "xl"`, `selected?`, `unstyled?`, `children` (required)

**Arrow** - Animated arrow that triggers on hover of a target element.
- Props: `trigger` (string, CSS selector, required), `scale?` (number, default 0.8), `color?: "onBackground" | "onSolid"`

**NavIcon** - Hamburger menu icon with active state.
- Props: `isActive` (boolean, required), `onClick?`. Extends Flex.

---

## Data Display

**Avatar** - User avatar with image, initials, or icon.
- Props: `size?: "xs" | "s" | "m" | "l" | "xl" | number`, `value?` (string, for initials), `src?` (string, image URL), `loading?`, `empty?`, `icon?` (IconName), `statusIndicator?: { color: "green" | "yellow" | "red" | "gray" }`
- Note: Cannot have both `value` and `src` (throws error). Extends Flex.

**AvatarGroup** - Group of avatars with overflow count.
- Props: `avatars` (AvatarProps[]), `size?: "xs" | "s" | "m" | "l" | "xl"`, `reverse?` (boolean), `limit?` (number, shows +N for overflow)
- Extends Flex.

**Badge** - Announcement badge with optional link and arrow.
- Props: `title?` (string), `icon?` (IconName), `arrow?` (boolean, default true if href), `href?`, `effect?` (boolean, default true), `id?`
- Extends Flex.

**Tag** - Colored label/tag.
- Props: `variant?: ColorScheme | "gradient"` (default `"neutral"`), `size?: "s" | "m" | "l"`, `label?` (string), `prefixIcon?` (IconName), `suffixIcon?` (IconName)
- Extends Flex.

**Chip** - Selectable/removable chip.
- Props: `label` (string, required), `selected?` (boolean, default true), `prefixIcon?` (IconName), `onRemove?` (callback), `onClick?`, `iconButtonProps?`
- Extends Flex.

**StatusIndicator** - Colored status dot.
- Props: `size?: "s" | "m" | "l"`, `color` (required): `"blue" | "indigo" | "violet" | "magenta" | "pink" | "red" | "orange" | "yellow" | "moss" | "green" | "emerald" | "aqua" | "cyan" | "gray"`, `ariaLabel?`
- Extends Flex.

**Pulse** - Animated pulse indicator.
- Props: `variant?` (ColorScheme, default `"brand"`), `size?: "s" | "m" | "l"`
- Extends Row.

**User** - User display with avatar, name, and metadata.
- Props: `name?` (string), `subline?` (ReactNode), `tag?` (string), `tagProps?` (TagProps), `loading?`, `avatarProps?` (AvatarProps)
- Note: `avatarProps` passes through to Avatar component.

**UserMenu** - User avatar with dropdown menu.
- Props: All UserProps + `selected?`, `placement?`, `dropdown?` (ReactNode), `minHeight?`, `minWidth?`, `maxWidth?`

**Logo** - Brand logo display (icon and/or wordmark images).
- Props: `size?: "xs" | "s" | "m" | "l" | "xl"`, `icon?` (string, path to icon image), `wordmark?` (string, path to wordmark image), `href?`, `dark?`, `light?`, `brand?: { copy?, url? }`

**LogoCloud** - Rotating grid of logos.
- Props: `logos` (LogoProps[]), `limit?` (number, default 6), `rotationInterval?` (number, ms)
- Extends Grid.

**Timeline** - Vertical/horizontal timeline.
- Props: `items` (TimelineItem[]: `{ label?, description?, state?: "default" | "active" | "success" | "danger", marker?, children? }`), `alignment?: "left" | "right"`, `size?` (TShirtSizes)
- Extends Flex.

**Tooltip** - Hover tooltip label.
- Props: `label` (ReactNode, required), `prefixIcon?`, `suffixIcon?`
- Extends Row.

**OgCard** - Open Graph preview card (fetches/displays URL metadata).
- Props: `url?`, `ogData?`, `size?: "s" | "m" | "l"`, `direction?`, `serviceConfig?`, `title?`, `description?`, `favicon?`, `image?`, `cardUrl?`, `sizes?`
- Extends Card.

---

## Form Controls

**Input** - Text input field.
- Props: `id` (required), `label?`, `placeholder?`, `height?: "s" | "m"`, `error?`, `errorMessage?`, `description?`, `hasPrefix?` (ReactNode), `hasSuffix?` (ReactNode), `characterCount?`, `cursor?`, `validate?` (function)
- Radius: `"none" | "top" | "right" | "bottom" | "left" | "top-left" | "top-right" | "bottom-right" | "bottom-left"`
- Extends InputHTMLAttributes.

**Textarea** - Multi-line text input.
- Props: `id` (required), `label?`, `placeholder?`, `lines?: number | "auto"` (default 3), `error?`, `errorMessage?`, `description?`, `hasPrefix?`, `hasSuffix?`, `characterCount?`, `resize?: "horizontal" | "vertical" | "both" | "none"`, `validate?`
- Radius: same as Input.

**PasswordInput** - Password input with show/hide toggle. Wraps Input.
- Uses same props as Input (InputProps). Adds eye/eyeOff toggle automatically.

**NumberInput** - Numeric input with increment/decrement.
- Props: `value?` (number), `onChange?` (value: number), `min?`, `max?`, `step?` (default 1), `padStart?` (number)
- Extends Input (minus type/value/onChange).

**Select** - Dropdown select.
- Props: `options` (OptionProps[]), `value?` (string | string[]), `onSelect?`, `emptyState?`, `placement?`, `searchable?`, `fillWidth?`, `multiple?`, `minHeight?`, `minWidth?`, `maxWidth?`
- Extends Input (minus onSelect/value).

**Checkbox** - Checkbox with label.
- Props: `isChecked?`, `isIndeterminate?`, `onToggle?` (callback)
- Inherits InteractiveDetailsProps: `label?`, `description?`, `disabled?`, `iconButtonProps?`
- Extends InputHTMLAttributes.

**RadioButton** - Radio button with label.
- Props: `isChecked?`, `onToggle?`, `name?`, `value?`, `disabled?`
- Inherits InteractiveDetailsProps: `label?`, `description?`
- Extends InputHTMLAttributes.

**Switch** - Toggle switch.
- Props: `isChecked` (required), `onToggle` (required callback), `loading?`, `reverse?`, `ariaLabel?`, `name?`, `value?`, `disabled?`
- Inherits InteractiveDetailsProps: `label?`, `description?`
- Extends InputHTMLAttributes.

**Slider** - Range slider.
- Props: `value` (number, required), `onChange` (callback, required), `min?` (default 0), `max?` (default 100), `step?` (default 1), `label?`, `showValue?`, `disabled?`

**TagInput** - Input that creates tags on Enter/comma.
- Props: `value` (string[], required), `onChange` (callback, required)
- Extends Input (minus onChange/value).

**ColorInput** - Color picker input with hex/rgba support.
- Props: `value` (string, required), `onChange` (callback, required), `supportAlpha?`
- Extends Input (minus onChange/value).

**OTPInput** - One-time password input (multiple digit boxes).
- Props: `length?` (number, default 4), `onComplete?` (callback with code string), `error?`, `errorMessage?`, `disabled?`, `autoFocus?`

**DateInput** - Date picker input.
- Props: `id` (required), `label?`, `placeholder?`, `value?` (Date), `onChange?`, `timePicker?`, `minDate?`, `maxDate?`, `minHeight?`
- Extends Input (minus onChange/value).

**DateRangeInput** - Date range picker input.
- Props: `id` (required), `startLabel`, `endLabel`, `value?` (DateRange), `onChange?`, `minHeight?`
- Extends Input (minus onChange/value/label).

**DatePicker** - Inline calendar date picker.
- Props: `value?` (Date), `onChange?`, `minDate?`, `maxDate?`, `timePicker?`, `previousMonth?`, `nextMonth?`, `defaultDate?`, `defaultTime?: { hours, minutes }`, `size?: "s" | "m" | "l"`, `isNested?`, `currentMonth?` (number), `currentYear?` (number), `onMonthChange?` (callback)
- Extends Flex (minus onChange).

**DateRangePicker** - Inline calendar range picker.
- Props: `value?` (DateRange), `onChange?`, `minDate?`, `maxDate?`, `dual?`, `size?: "s" | "m" | "l"`
- Extends Flex (minus onChange).

**SegmentedControl** - Button group for single selection.
- Props: `buttons` (ButtonOption[]: `{ value, ...ToggleButtonProps }`), `onToggle` (callback with value), `defaultSelected?`, `selected?`, `fillWidth?` (default true), `compact?`
- Extends Scroller (minus onToggle).

---

## Feedback & Overlays

**Dialog** - Modal dialog with optional stacked dialogs.
- Props: `isOpen` (required), `onClose` (required callback), `title` (required, ReactNode), `description?`, `footer?` (ReactNode), `base?` (boolean), `stack?` (boolean), `onHeightChange?`, `minHeight?`
- Extends Flex (minus title).

**Toast** - Notification toast.
- Props: `variant: "success" | "danger"` (required), `icon?` (boolean, default true), `onClose?`, `action?` (ReactNode), `children` (required)
- Auto-dismisses after 6 seconds.

**Toaster** - Toast container (renders via portal).
- Props: `toasts` (array of `{ id, variant, message, action? }`), `removeToast` (callback)

**Banner** - Page-level announcement bar. Extends Row.
- Props: Inherits all Row/Flex props. No custom props. Styled with `solid="brand-medium"`.

**Feedback** - Alert/notification block.
- Props: `variant?: "info" | "danger" | "warning" | "success"`, `icon?` (boolean, default true), `title?`, `description?`, `showCloseButton?`, `onClose?`
- Extends Flex (minus title).

**Spinner** - Loading spinner.
- Props: `size?: "xs" | "s" | "m" | "l" | "xl"`, `ariaLabel?` (default `"Loading"`)
- Extends Flex.

**Skeleton** - Loading placeholder.
- Props: `shape: "line" | "circle" | "block"` (required), `width?: "xl" | "l" | "m" | "s" | "xs"`, `height?: "xl" | "l" | "m" | "s" | "xs"`, `delay?: "1" | "2" | "3" | "4" | "5" | "6"`
- Extends Flex.

**ProgressBar** - Progress indicator.
- Props: `value` (number, required), `min?` (default 0), `max?` (default 100), `label?` (boolean, default true), `barBackground?` (default `"brand-strong"`)
- Extends Flex.

---

## Navigation & Menus

**Dropdown** - Dropdown menu container.
- Props: `selectedOption?`, `onEscape?`, `onSelect?`
- Extends Row (minus onSelect).

**DropdownWrapper** - Wrapper that triggers dropdown on click/focus.
- Props: `trigger` (ReactNode, required), `dropdown` (ReactNode, required), `placement?`, `fillWidth?`, `minWidth?` (number), `maxWidth?` (number), `minHeight?` (number), `disableTriggerClick?`, `closeAfterClick?`, `selectedOption?`, `onSelect?`, `isOpen?`, `onOpenChange?`, `handleArrowNavigation?`, `isNested?`, `navigationLayout?`, `columns?`, `optionsCount?`, `dropdownId?`

**ContextMenu** - Right-click or triggered context menu.
- Props: `children` (ReactNode, required — wraps the trigger element), `dropdown` (ReactNode, required), `placement?`, `fillWidth?`, `minWidth?`, `maxWidth?`, `minHeight?`, `onSelect?`, `closeAfterClick?` (default true), `isOpen?`, `onOpenChange?`, `selectedOption?`

**Option** - Single option item (used inside Dropdown/Select).
- Props: `value` (string, required), `label?`, `href?`, `hasPrefix?`, `hasSuffix?`, `description?`, `danger?`, `selected?`, `disabled?`, `highlighted?`, `onClick?`, `onLinkClick?`
- Extends Row (minus onClick).

**Scroller** - Horizontal/vertical scroll container with fade and nav buttons.
- Props: `direction?: "row" | "column"`, `fadeColor?` (BaseColor), `onItemClick?`, `radius?`
- Extends Flex.

**ScrollToTop** - Floating scroll-to-top button (fixed position).
- Props: `offset?` (number, default 300, scroll distance before showing)
- Extends Flex.

**ScrollLock** - Prevents page scroll (for modals).
- Props: `enabled` (boolean, required), `allowScrollInElement?` (RefObject)

---

## Media & Content

**Media** - Image display with loading state, captions, and lightbox.
- Props: `src` (string, required), `alt?`, `aspectRatio?` (string, default `"original"`), `height?` (number), `loading?`, `objectFit?`, `enlarge?` (boolean, click to lightbox), `unoptimized?`, `sizes?`, `priority?`, `caption?` (ReactNode), `fill?`, `fillWidth?` (default true)
- Extends Flex.

**CompareImage** - Before/after image comparison slider.
- Props: `leftContent: { src, alt? }` (required), `rightContent: { src, alt? }` (required), `aspectRatio?`
- Extends Flex.

**Swiper** - Touch-friendly image/content swiper.
- Props: `items` (SwiperItem[]: `{ slide, alt? }`, required), `controls?: boolean | "contained"` (default true), `indicator?` (boolean, default true), `aspectRatio?` (default `"16 / 9"`), `fill?`, `priority?`, `sizes?`
- Extends Flex.

**Carousel** - Image carousel with thumbnails and autoplay.
- Props: `items` (CarouselItem[]: `{ slide, alt? }`, required), `controls?` (default true), `indicator?: "line" | "thumbnail" | false`, `translateY?`, `aspectRatio?` (default `"original"`), `sizes?`, `revealedByDefault?`, `thumbnail?: { scaling?, height?, sizes? }`, `play?: { auto?, interval?, controls?, progress? }`, `priority?`, `fill?`
- Extends Flex.

**AutoScroll** - Infinite horizontal auto-scrolling marquee.
- Props: `speed?: "slow" | "medium" | "fast"`, `hover?: "slow" | "pause" | "none"`, `reverse?`, `scrollGap?` (number | string)
- Extends Row.

**InfiniteScroll** - Infinite scroll list with sentinel-based loading.
- Props: `items` (T[], required), `renderItem` (callback, required), `loadMore` (async callback, required), `loading?`, `threshold?` (number, default 200)
- Extends Row. Generic: `InfiniteScroll<T>`.

**Line** - Horizontal or vertical divider line.
- Props: `vert?` (boolean, for vertical orientation)
- Extends Flex.

**Icon** - Renders icons from the icon library.
- Props: `name` (IconName, required), `size?`, `onBackground?`, `onSolid?`
- Extends Flex.

---

## Cards

**Card** - Clickable/linkable card container.
- Props: `href?`, `onClick?`, `fillHeight?`
- Extends Flex. Styled with `background="surface"`, `border="neutral-medium"`.

**CursorCard** - Card that follows cursor position.
- Props: `trigger?` (ReactNode), `overlay?` (ReactNode), `placement?: Placement`
- Extends Flex.

**HoverCard** - Card revealed on hover. Wrapper around `Animation` with presets.
- Preset values: `fade={0} slideUp={0.5} scale={0.9} duration={200} triggerType="hover" placement="top" portal`
- Props: All AnimationProps except `triggerType` and `portal` (those are locked to preset values).
- Usage: `<HoverCard trigger={<Button>Hover me</Button>}><Card>Content</Card></HoverCard>`

---

## Accordion

**Accordion** - Expandable/collapsible section.
- Props: `title` (ReactNode, required), `icon?` (string, default `"chevronDown"`), `iconRotation?` (number, default 180), `size?: "s" | "m" | "l"`, `radius?: "xs" | "s" | "m" | "l" | "xl" | "full"`, `open?` (boolean), `onToggle?`
- Exposes imperative handle: `toggle()`, `open()`, `close()`. Extends Flex.

**AccordionGroup** - Group of accordions with auto-collapse.
- Props: `items` (AccordionItem[]), `size?: "s" | "m" | "l"`, `autoCollapse?` (boolean, default true)
- Extends Flex.

---

## Backgrounds & Decorative

**Background** - Decorative background with patterns.
- Props: `gradient?: { display?, opacity?, x?, y?, width?, height?, tilt?, colorStart?, colorEnd? }`, `dots?: { display?, opacity?, color?, size? }`, `grid?: { display?, opacity?, color?, width?, height? }`, `lines?: { display?, opacity?, size?, thickness?, angle?, color? }`, `mask?` (MaskProps)
- Extends Flex.

**Mask** - Content mask with cursor tracking.
- Props: `cursor?` (boolean), `x?` (number), `y?` (number), `radius?` (number, default 50), `reducedMotion?: boolean | "auto"`
- Extends Flex (minus radius/cursor from Flex).

**Fade** - Gradient fade overlay.
- Props: `to?: "bottom" | "top" | "left" | "right"`, `base?` (BaseColor), `blur?` (number), `pattern?: { display?: boolean; size?: SpacingToken; }`
- Extends Flex.

---

## Effects & Animations

**Animation** - Multi-property animation wrapper with trigger support.
- Props: `trigger?` (ReactNode), `children` (ReactNode, required), `fade?` (number), `scale?` (number), `blur?` (number), `slideUp?` (number), `slideDown?` (number), `slideLeft?` (number), `slideRight?` (number), `zoomIn?` (number), `zoomOut?` (number), `triggerType?: "hover" | "click" | "manual"`, `active?`, `delay?` (number), `duration?` (number), `easing?: "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "spring" | "bounce"`, `transformOrigin?`, `childrenPosition?` (CSSProperties["position"]), `reverse?`, `touch?: "disable" | "enable" | "display"`, `portal?`, `placement?`, `offsetDistance?` (SpacingToken)
- Extends Flex.

**LetterFx** - Character-by-character text scramble reveal.
- Props: `children` (ReactNode, required, wraps text content), `trigger?: "hover" | "instant" | "custom"`, `speed?: "fast" | "medium" | "slow"`, `charset?` (string[]), `onTrigger?` (callback with trigger function)
- Note: Wraps children, does NOT have a `text` prop.

**TypeFx** - Typewriter text effect.
- Props: `words` (string | string[], required), `speed?` (number, ms, default 100), `delay?` (number, default 0), `hold?` (number, ms, default 2000), `trigger?: "instant" | "custom"`, `onTrigger?`, `loop?` (boolean, default true)
- Extends Text (minus children).

**CountFx** - Animated number counter.
- Props: `value` (number, required), `speed?` (number, ms, default 1000), `easing?: "linear" | "ease-out" | "ease-in-out"`, `format?` (callback), `separator?` (string), `decimals?` (number), `effect?: "simple" | "wheel" | "smooth"`
- Extends Text.

**CountdownFx** - Countdown timer to target date.
- Props: `targetDate` (Date | string, required), `format?: "HH:MM:SS" | "DD:HH:MM:SS" | "MM:SS"`, `effect?` (same as CountFx, default `"wheel"`), `onComplete?`
- Extends CountFxProps (minus value/format/separator/effect).

**ShineFx** - Shimmering shine effect on text.
- Props: `speed?` (number, seconds, default 1), `disabled?`, `inverse?`, `baseOpacity?` (number, default 0.3), `reducedMotion?: boolean | "auto"`
- Extends Text.

**GlitchFx** - Digital glitch distortion effect.
- Props: `speed?: "slow" | "medium" | "fast"`, `interval?` (number, ms, default 2500), `trigger?: "instant" | "hover" | "custom"`, `continuous?` (boolean, default true)
- Extends Flex.

**FlipFx** - 3D card flip between front and back.
- Props: `front` (ReactNode, required), `back` (ReactNode, required), `flipDirection?: "horizontal" | "vertical"`, `timing?` (number, ms, default 2000), `flipped?` (boolean, controlled), `onFlip?`, `disableClickFlip?`, `autoFlipInterval?` (number, ms)
- Extends Flex.

**RevealFx** - Content reveal with mask animation.
- Props: `children` (required), `speed?: "slow" | "medium" | "fast" | number`, `delay?` (number), `revealedByDefault?`, `translateY?` (number | SpacingToken), `trigger?` (boolean)
- Extends Flex.

**TiltFx** - 3D tilt effect on hover.
- Props: `children` (required), `intensity?` (number, default 1), `reducedMotion?: boolean | "auto"`
- Extends Flex.

**HoloFx** - Holographic light effect.
- Props: `reducedMotion?: boolean | "auto"`, `shine?: { opacity?, filter?, blending?, mask? }`, `burn?: { opacity?, filter?, blending?, mask? }`, `texture?: { opacity?, filter?, blending?, image?, mask? }`
- Extends Flex.

**MatrixFx** - Dot matrix/grid animation.
- Props: `speed?` (number, default 1), `colors?` (string[], default `["brand-solid-medium"]`), `size?` (number, default 3), `spacing?` (number, default 3), `revealFrom?: "center" | "top" | "bottom" | "left" | "right"`, `trigger?: "hover" | "instant" | "mount" | "click" | "manual"`, `active?`, `flicker?`, `bulge?: { type?: "ripple" | "wave", duration?, intensity?, repeat?, delay? }`, `fps?`, `reducedMotion?: boolean | "auto"`
- Extends Flex.

**Particle** - Particle field with interaction.
- Props: `density?` (number, default 100), `color?` (string, default `"brand-on-background-weak"`), `size?` (SpacingToken, default `"2"`), `speed?` (number, default 0.3), `interactive?` (boolean), `mode?: "repel" | "attract"`, `intensity?` (number, default 20), `opacity?`, `reducedMotion?: boolean | "auto"`
- Extends Flex.

**CelebrationFx** - Confetti or fireworks celebration effect.
- Props: `type?: "confetti" | "fireworks"`, `speed?` (number), `colors?` (string[]), `intensity?` (number), `duration?` (number), `trigger?: "mount" | "hover" | "manual" | "click"`, `active?`, `reducedMotion?: boolean | "auto"`
- Extends Flex.

**WeatherFx** - Weather particle effects (rain, snow, leaves, lightning).
- Props: `type?: "rain" | "snow" | "leaves" | "lightning"`, `speed?` (number), `colors?` (string[]), `intensity?` (number), `angle?` (number), `duration?` (number), `trigger?: "mount" | "hover" | "click" | "manual"`, `active?`, `reducedMotion?: boolean | "auto"`
- Extends Flex.

---

## Hover & Cursor

**Hover** - Shows overlay on hover.
- Props: `trigger` (ReactNode, required), `overlay` (ReactNode, required), `interactive?`, `delay?` (number), `hideDelay?` (number), `disabled?`, `touch?: "disable" | "enable" | "display"`
- Extends Flex.

**Cursor** - Custom cursor replacement on hover.
- Props: `cursor` (ReactNode, required), `elementRef` (RefObject, required)
- Standalone component (not Flex-based).

---

## Interactive Details

**InteractiveDetails** - Shared label+description layout used by Checkbox, RadioButton, Switch.
- Props: `label?` (ReactNode), `description?` (ReactNode), `disabled?`, `iconButtonProps?`, `onClick` (required callback)

---

## Theme & Providers

**ThemeInit** - Server-side theme initialization script (prevents flash).
- Props: `config` (ThemeConfig, required): `{ theme, brand, accent, neutral, solid, 'solid-style', border, surface, transition, scaling, 'viz-style' }`

**ThemeSwitcher** - Dark/light/system theme toggle buttons.
- No custom props beyond Row's. Renders three IconButtons (dark, light, system) using `useTheme()` hook internally.
- Extends Row.

**StyleOverlay** - Floating style customization panel toggle.
- Props: `iconButtonProps?`, `zIndex?`
- Extends Flex.

**StylePanel** - Full style/theme customization panel (brand, accent, neutral, border, surface, scaling, transitions, chart mode).
- Extends Flex.

---

## Modules (import from `@once-ui-system/core`)

### SEO

**Meta** - Generates Next.js metadata object. Static method: `Meta.generate(props)`.
- Props: `title`, `description`, `baseURL` (all required), `path?`, `type?: "website" | "article"`, `image?`, `publishedTime?`, `author?: { name, url? }`, `canonical?`, `robots?`, `noindex?`, `nofollow?`, `alternates?`

**Schema** - JSON-LD structured data.
- Props: `as` (required): `"website" | "article" | "blogPosting" | "techArticle" | "webPage" | "organization"`, `title`, `description`, `baseURL`, `path` (all required), `datePublished?`, `dateModified?`, `image?`, `sameAs?`, `author?: { name, url?, image? }`

### Navigation

**Kbar** - Command palette (Cmd+K).
- Items: `KbarItem { id, name, section, shortcut, keywords, href?, perform?, icon?, description?, placeholder? }`
- Trigger: `KbarTrigger { onClick?, children }`

**MegaMenu** - Desktop mega menu navigation.
- Props: `menuGroups` (MenuGroup[], required). Extends Flex.
- Types: `MenuGroup { id, label, suffixIcon?, href?, selected?, sections?, content? }`, `MenuSection { title?, links }`, `MenuLink { label, href, icon?, description?, selected? }`

**MobileMegaMenu** - Mobile version of mega menu.
- Props: `menuGroups` (MenuGroup[]), `onClose?`. Extends Flex.

**HeadingLink** - Heading with copy-link-on-click.
- Props: `id` (string, required), `as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"` (required), `children` (required)
- Extends Row.

**HeadingNav** - Sidebar heading navigation with scroll spy.
- Props: `header?` (boolean, default true)
- Extends Flex.

### Code

**CodeBlock** - Syntax-highlighted code block with tabs, copy, and preview.
- Props: `codes?` (CodeInstance[]), `preview?` (ReactNode), `codeHeight?` (number), `fillHeight?`, `previewPadding?`, `copyButton?` (default true), `styleButton?`, `reloadButton?`, `fullscreenButton?`, `compact?`, `lineNumbers?`, `highlight?`, `onInstanceChange?`
- Extends Flex.

### Media

**MediaUpload** - Drag-and-drop media upload with compression.
- Props: `onFileUpload?` (async callback), `compress?` (default true), `aspectRatio?`, `quality?` (default 0.8), `emptyState?`, `sizes?`, `initialPreviewImage?`, `convertTypes?`, `resizeMaxWidth?`, `resizeMaxHeight?`, `resizeWidth?`, `resizeHeight?`, `loading?`, `accept?` (default `"image/*"`)
- Extends Flex.

### Data Visualization

All chart components share `ChartProps`: `title?`, `description?`, `series` (required), `data` (DataPoint[], required), `legend?`, `date?`, `emptyState?`, `errorState?`, `error?`, `tooltip?` (default true), `grid?`, `axis?`, `variant?`, `loading?`

**BarChart** - Bar chart.
- Additional: `barWidth?: "s" | "m" | "l"`, `hover?`, `reverseY?`, `reverseX?`

**LineChart** - Line chart.
- Additional: `curve?: "linear" | "natural" | "monotone" | "step"`, `reverseY?`, `reverseX?`, `animation?` (default true), `animationBegin?`, `animationDuration?`, `xAxisType?: "number" | "category"`, `xDomain?`

**PieChart** - Pie/donut chart.
- Additional: `ring?: { inner, outer }`, `dataKey?`, `nameKey?`, `origo?: { x, y }`

**LineBarChart** - Combined line and bar chart.
- Additional: `barWidth?`, `curve?`, `reverseY?`, `reverseX?`

**Legend** - Chart legend.
- Props: `payload?`, `labels?: "x" | "y" | "both" | "none"`, `colors?`, `reverseY?`, `direction?: "row" | "column"`, `position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"`, `variant?`

**LinearGauge** - Linear gauge meter.
- Props: `width?`, `height?`, `line?: { count?, width?, length? }`, `value?` (default 50), `labels?: "none" | "percentage" | string[]`, `hue?: "success" | "neutral" | "danger" | [number, number]`, `color?`
- Extends Flex.

**RadialGauge** - Radial/circular gauge meter.
- Props: `width?`, `height?`, `line?: { count?, width?, length? }`, `value?`, `unit?` (ReactNode), `angle?: { start, sweep }`, `direction?: "cw" | "ccw"`, `edgePad?`, `hue?`, `color?`
- Extends Column (minus direction).

**ChartHeader** - Chart title + date range selector.
- Props: `title?`, `description?`, `dateRange?`, `date?`, `onDateRangeChange?`, `presets?`
- Extends Column (minus title/description).

**ChartStatus** - Empty/loading/error state for charts.
- Props: `loading?`, `empty?`, `error?`, `emptyState?`, `errorState?`

**DataTooltip** - Chart hover tooltip.
- Props: `active?`, `payload?`, `label?`, `dataKey?`, `date?`, `colors?`, `variant?`

**Swatch** - Color swatch for chart legends.
- Props: `color` (string, required), `size?: "s" | "m"`, `variant?`

**LinearGradient** / **RadialGradient** - SVG gradient definitions for charts.
- LinearGradient: `id`, `color`, `x1?`, `y1?`, `x2?`, `y2?`, `stops?`, `variant?`
- RadialGradient: `id`, `color`, `cx?`, `cy?`, `r?`, `fx?`, `fy?`, `stops?`, `variant?`

---

## Utility Components

**Table** - Data table with sortable headers.
- Props: `data: { headers: { content, key, sortable? }[], rows: ReactNode[][] }` (required), `onRowClick?`
- Extends Flex (minus title/description).

**List** - Ordered or unordered list.
- Props: `as?: "ul" | "ol"` (default `"ul"`)
- Extends Column.

**ListItem** - List item.
- Extends Text. Renders as `<li>`.

**EmojiPicker** - Full emoji picker grid.

**EmojiPickerDropdown** - Emoji picker in a dropdown.

**FocusTrap** - Traps keyboard focus within children (for modals/dialogs).

**ElementType** - Smart wrapper that renders `<a>` for hrefs, `<button>` for clicks.

---

## Hooks (import from `@once-ui-system/core`)

**useToast()** - Access toast notifications. Returns `{ toasts, addToast, removeToast }`.
- `addToast({ variant: "success" | "danger", message: ReactNode, action?: ReactNode })` — shows a toast notification.
- `removeToast(id: string)` — manually dismisses a toast.
- Must be used within `ToastProvider`.

**useTheme()** - Access theme state. Returns `{ theme, resolvedTheme, setTheme }`.
- `theme` — current setting: `"dark" | "light" | "system"`
- `resolvedTheme` — actual resolved value: `"dark" | "light"`
- `setTheme(theme)` — change theme.
- Must be used within `ThemeProvider`.

**useStyle()** - Access style token state. Returns all style options + `setStyle()`.
- Properties: `neutral`, `brand`, `accent`, `solid`, `solidStyle`, `border`, `surface`, `transition`, `scaling`.
- `setStyle(partial)` — update any style tokens at runtime.
- Must be used within `ThemeProvider`.

**useLayout()** - Access responsive breakpoint state. Returns `{ currentBreakpoint, width, breakpoints, isBreakpoint, maxWidth, minWidth, isDefaultBreakpoints }`.
- `currentBreakpoint` — active breakpoint key: `"xs" | "s" | "m" | "l" | "xl"`
- `width` — current viewport width in pixels.
- `isBreakpoint(key)` — true if current breakpoint matches key.
- `maxWidth(key)` — true if viewport ≤ breakpoint.
- `minWidth(key)` — true if viewport ≥ breakpoint.
- Must be used within `LayoutProvider`.

**useDebounce(value, delay)** - Debounce a value by delay in ms.

**useFetchOg(url)** - Fetch Open Graph metadata for a URL.

**useInViewport(ref)** - Returns boolean, true when element is in viewport.

**useReducedMotion(preference)** - Returns `{ shouldAnimate }` based on user's reduced motion preference. `preference`: `boolean | "auto"`.

---

## Providers / Contexts (import from `@once-ui-system/core`)

All providers are set up in `src/components/Providers.tsx` in the starter. Do not remove or reorder them.

**LayoutProvider** - Provides responsive breakpoint context. Wraps the entire app.
- Optional prop: `breakpoints` (partial override of defaults).
- **Default breakpoint values**: xs=480px, s=768px, m=1024px, l=1440px, xl=∞ (above all).

**ThemeProvider** - Provides theme and style token context.
- Props: `theme`, `brand`, `accent`, `neutral`, `solid`, `solidStyle`, `border`, `surface`, `transition`, `scaling`.
- Exports `useTheme()` and `useStyle()` hooks.

**DataThemeProvider** - Provides data visualization theming (chart variant, mode, axis, tick styles).
- Props: `variant`, `mode`, `height`, `axis`, `tick`.

**ToastProvider** - Provides toast notification system.
- Exports `useToast()` hook. Renders `<Toaster>` portal automatically.

**IconProvider** - Provides the icon library to all `<Icon>` components.
- Props: `icons` (Record<string, IconType> from react-icons). Defined in `src/resources/icons.ts`.
