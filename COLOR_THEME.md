# Stackenzo Brand Color Theme

## Primary Colors (Based on Logo - Dark olive green Theme)

### Dark olive green (Primary Brand Color)
- **Primary olive green**: `#047857` (olive green-700)
- **Medium olive green**: `#059669` (olive green-600)
- **Light olive green**: `#10B981` (olive green-500)
- **Accent olive green**: `#34D399` (olive green-400)

### Secondary Colors
- **White**: `#FFFFFF`
- **Light Gray**: `#F3F4F6` (gray-100)
- **Medium Gray**: `#E5E7EB` (gray-200)

## Background Colors

### Dark Theme (Current)
- **Primary Background**: `#030712` (gray-950)
- **Secondary Background**: `#111827` (gray-900)
- **Tertiary Background**: `#1F2937` (gray-800)
- **Card Background**: `#374151` (gray-700)

### Light Theme (Alternative)
- **Primary Background**: `#FFFFFF` (white)
- **Secondary Background**: `#F9FAFB` (gray-50)
- **Tertiary Background**: `#F3F4F6` (gray-100)
- **Card Background**: `#E5E7EB` (gray-200)

## Text Colors

### Light Text (On Dark Backgrounds)
- **Primary Text**: `#FFFFFF` (white)
- **Secondary Text**: `#D1D5DB` (gray-300)
- **Muted Text**: `#9CA3AF` (gray-400)
- **Disabled Text**: `#6B7280` (gray-500)

### Dark Text (On Light Backgrounds)
- **Primary Text**: `#111827` (gray-900)
- **Secondary Text**: `#1F2937` (gray-800)
- **Muted Text**: `#4B5563` (gray-600)
- **olive green Text**: `#047857` (olive green-700)

## Accent Colors

### Success/Positive
- **Success olive green**: `#10B981` (olive green-500)
- **Light olive green**: `#34D399` (olive green-400)
- **Dark olive green**: `#047857` (olive green-700)

### Info/Links
- **Info Blue**: `#3B82F6` (blue-500)
- **Light Blue**: `#60A5FA` (blue-400)

### Warning
- **Warning olive green**: `#F59E0B` (olive green-500)
- **Light olive green**: `#FBBF24` (olive green-400)

### Error/Danger
- **Error Red**: `#EF4444` (red-500)
- **Light Red**: `#F87171` (red-400)

## Gradient Combinations

### Primary Gradients (olive green Theme)
```css
/* Dark olive green to Light olive green */
background: linear-gradient(to right, #047857, #10B981);

/* olive green to Teal */
background: linear-gradient(to right, #059669, #14B8A6);

/* Emerald to olive green */
background: linear-gradient(to right, #10B981, #34D399);
```

### Hero Section Gradients
```css
/* Dark olive green to Forest */
background: linear-gradient(to bottom right, #064E3B, #065F46, #047857);

/* olive green to Blue */
background: linear-gradient(to right, #047857, #0891B2, #0284C7);

/* Emerald to Teal */
background: linear-gradient(to bottom, #059669, #0D9488, #14B8A6);
```

## Border Colors

### Default Borders
- **Light Border**: `rgba(255, 255, 255, 0.1)` (white/10)
- **Medium Border**: `#374151` (gray-700)
- **Dark Border**: `#1F2937` (gray-800)

### Accent Borders
- **olive green Border**: `#10B981` (olive green-500)
- **olive green Border Hover**: `#059669` (olive green-600)
- **Dark olive green Border**: `#047857` (olive green-700)

## Button Colors

### Primary Button (olive green)
```css
background: #047857;
color: #FFFFFF;
hover: #059669;
```

### Secondary Button (Outlined)
```css
border: 2px solid #047857;
color: #047857;
hover-background: #047857;
hover-color: #FFFFFF;
```

### Ghost Button
```css
background: rgba(4, 120, 87, 0.1);
color: #047857;
hover: rgba(4, 120, 87, 0.2);
```

### Light Button (On Dark Background)
```css
background: #FFFFFF;
color: #047857;
hover: #F3F4F6;
```

## Card Hover Effects

### Hover States
```css
/* Card Hover */
border-color: #10B981;
transform: translateY(-5px);

/* Button Hover */
background: #059669;
box-shadow: 0 10px 25px rgba(4, 120, 87, 0.3);
```

## Opacity Variations

### olive green Opacity
- **10%**: `rgba(4, 120, 87, 0.1)` - Subtle backgrounds
- **20%**: `rgba(4, 120, 87, 0.2)` - Hover states
- **30%**: `rgba(4, 120, 87, 0.3)` - Active states
- **50%**: `rgba(4, 120, 87, 0.5)` - Semi-transparent overlays

## Tailwind CSS Classes Reference

### Primary Colors
- `bg-olive green-700` - Primary olive green background
- `text-olive green-700` - Primary olive green text
- `border-olive green-700` - Primary olive green border
- `hover:bg-olive green-600` - Hover state

### Backgrounds
- `bg-gray-950` - Main background (dark)
- `bg-gray-900` - Section background (dark)
- `bg-gray-800` - Card background (dark)
- `bg-white` - Main background (light)
- `bg-gray-50` - Section background (light)

### Gradients
- `from-olive green-700 to-olive green-500` - Primary gradient
- `from-emerald-600 via-olive green-600 to-teal-600` - Hero gradient
- `from-gray-900 to-gray-800` - Subtle gradient

## Usage Guidelines

### Do's ✅
- Use dark olive green (#047857) for primary CTAs and important elements
- Use white/light gray for clean, modern UI elements
- Use dark backgrounds (gray-950, gray-900) for main sections
- Use white text for primary content on dark backgrounds
- Use gradients for hero sections with olive green tones
- Maintain consistent hover states with olive green accent

### Don'ts ❌
- Don't use bright olive green for large background areas
- Don't mix too many gradient combinations in one section
- Don't use low contrast text colors
- Don't overuse bright colors - keep olive green as accent
- Don't use pure black (#000000) for backgrounds

## Accessibility

### Contrast Ratios
- olive green-700 (#047857) on White (#FFFFFF): ✅ AAA (7.8:1)
- White (#FFFFFF) on olive green-700 (#047857): ✅ AAA (7.8:1)
- White (#FFFFFF) on Gray-950 (#030712): ✅ AAA (19.5:1)
- olive green-700 (#047857) on Gray-100 (#F3F4F6): ✅ AAA (7.2:1)

### Color Blind Friendly
- Use icons alongside colors for status indicators
- Don't rely solely on color to convey information
- Maintain sufficient contrast for all text

## Implementation Example

```jsx
// Primary Button (olive green)
<button className="px-8 py-3 bg-olive green-700 text-white rounded-full font-semibold hover:bg-olive green-600 transition">
  Get Started
</button>

// Secondary Button (Outlined)
<button className="px-8 py-3 border-2 border-olive green-700 text-olive green-700 rounded-full font-semibold hover:bg-olive green-700 hover:text-white transition">
  Learn More
</button>

// Light Button (On Dark Background)
<button className="px-8 py-3 bg-white text-olive green-700 rounded-full font-semibold hover:bg-gray-100 transition">
  Contact Us
</button>

// Card with Hover
<div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-olive green-500 transition">
  Content
</div>

// Gradient Hero
<section className="bg-gradient-to-br from-emerald-900 via-olive green-900 to-teal-900">
  Hero Content
</section>
```

## Color Palette Summary

| Color Name | Hex Code | Tailwind Class | Usage |
|------------|----------|----------------|-------|
| Primary olive green | #047857 | olive green-700 | Buttons, CTAs, Highlights |
| Medium olive green | #059669 | olive green-600 | Hover states |
| Light olive green | #10B981 | olive green-500 | Accents, borders |
| Accent olive green | #34D399 | olive green-400 | Gradients |
| White | #FFFFFF | white | Text, backgrounds |
| Light Gray | #F3F4F6 | gray-100 | Light backgrounds |
| Background Dark | #030712 | gray-950 | Main background |
| Background Medium | #111827 | gray-900 | Sections |
| Background Light | #1F2937 | gray-800 | Cards |
| Text Primary | #FFFFFF | white | Main text (dark mode) |
| Text Primary | #111827 | gray-900 | Main text (light mode) |
| Text Secondary | #D1D5DB | gray-300 | Secondary text |
| Border Default | #374151 | gray-700 | Default borders |
| Border Accent | #10B981 | olive green-500 | Hover borders |

## Brand Identity

### What the Colors Represent
- **Dark olive green**: Trust, technology, growth, stability, professionalism
- **White/Light Gray**: Simplicity, clarity, modern UI, cleanliness
- **Combination**: Perfect for tech startups, SaaS products, professional platforms

### Emotional Impact
- olive green evokes: Growth, innovation, reliability, eco-friendliness
- White evokes: Simplicity, sophistication, modernity
- Together: Professional, trustworthy, forward-thinking

---

**Note**: This color scheme works for both dark and light modes. The primary brand color (dark olive green #047857) remains consistent across both themes.
