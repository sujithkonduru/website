# Color Migration Guide: olive green → Dark olive green

## Global Find & Replace Instructions

### Step 1: Primary Color Changes
Replace all instances of olive green with olive green:

```
olive green-400 → olive green-700
olive green-300 → olive green-600
olive green-500 → olive green-800
text-olive green-400 → text-olive green-700
bg-olive green-400 → bg-olive green-700
border-olive green-400 → border-olive green-700
hover:text-olive green-300 → hover:text-olive green-600
hover:bg-olive green-300 → hover:bg-olive green-600
hover:border-olive green-400 → hover:border-olive green-700
```

### Step 2: Gradient Changes
Replace gradient combinations:

```
from-olive green-400 to-orange-500 → from-olive green-700 to-olive green-500
from-olive green-400 to-orange-400 → from-olive green-700 to-emerald-600
```

### Step 3: Opacity Changes
Replace opacity variations:

```
bg-olive green-400/10 → bg-olive green-700/10
bg-olive green-400/20 → bg-olive green-700/20
text-olive green-400 → text-olive green-700
```

### Step 4: Hero Section Gradients
Replace hero gradients with olive green theme:

```
from-blue-900 via-purple-900 to-indigo-900 → from-emerald-900 via-olive green-900 to-teal-900
from-purple-900 via-pink-900 to-indigo-900 → from-olive green-900 via-emerald-900 to-teal-900
```

## Files to Update (Priority Order)

### High Priority (Core Components)
1. ✅ `src/Navbar.jsx` - Navigation colors
2. ✅ `src/Footer.jsx` - Footer colors
3. ✅ `src/Home.jsx` - Homepage
4. ✅ `src/About.jsx` - About page
5. ✅ `src/Contact.jsx` - Contact page

### Medium Priority (Service Pages)
6. `src/webservices.jsx`
7. `src/DigitalMarketing.jsx`
8. `src/RND.jsx`

### Medium Priority (Program Pages)
9. `src/Programs.jsx`
10. `src/workshops.jsx`
11. `src/robotics.jsx`

### Low Priority (Other Pages)
12. `src/Career.jsx`
13. `src/Community.jsx`
14. All Modal components

## Quick Migration Script

Use VS Code's Find & Replace (Ctrl+Shift+H) with these patterns:

1. Find: `olive green-400` → Replace: `olive green-700`
2. Find: `olive green-300` → Replace: `olive green-600`
3. Find: `olive green-500` → Replace: `olive green-800`
4. Find: `orange-500` → Replace: `emerald-600`
5. Find: `orange-400` → Replace: `emerald-500`

## Manual Review Required

After automated replacement, manually check:
- Button hover states
- Card border colors
- Text readability on backgrounds
- Gradient transitions
- Icon colors
