# Concepts to cover

- React refresher

  - ✓ React Magic
    - ✓ auto-sanitizing
    - ✓ synthetic events
  - Thinking in React (https://react.dev/learn/thinking-in-react)
  - ✓ React Rerendering
  - ✓ React Ref

- Best practices

  - ✓ Eslint-plugin-react

    - ✓ How React handles falsey values (react/jsx-no-leaked-render)
    - ✓ Do not define a component in another component (react/no-unstable-nested-components)
    - ✓ object as default prop can trigger unnecessary rerenders (react/no-object-type-as-default-prop)

  - Readability

    - ✓ Componentization with children
    - ✓ Keep rendering logic in render call

  - ✓ Performance
    - lazy loading
      - React.lazy + React.Suspense
    - Use Preact + preact/compat
      - React main.js: 127.18 kB
      - Preact main.js: 94.46 kB
    - ✓ UseEffect clean-up
    - ✓ UseEffect vs onClick

- Advanced Techniques
  - HOC vs render prop vs hooks
