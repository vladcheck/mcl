# MCL - React component library

MCL is an unopinionated React component library. MCL doesn't enforce its own styles except ones that are essential for the components to make sense and serve their purpose.

## Setup

Use our `<StyleProvider/>` in your application like this:

```tsx
import StyleProvider from "@valdemarchk/mcl";

/* ... */

createRoot(document.getElementById("root"))?.render(() => {
  return <StyleProvider>{/* everything else */}</StyleProvider>;
});
```

After that, you can use MCL components.
