# Technical Requirements

## Server-Side for Fetching

**Options:**

- Server components (Next.js)

**Requirements:**

- Fetch country information server-side and return parsed results to the client
- Handle timeouts gracefully
- Implement basic rate limiting
- Cache responses where possible (respect Cache-Control, ETag, Last-Modified headers)

## Deployment

Deploy to a live, publicly accessible URL.

**platform:** Vercel

**Requirements:**

- Accessible via HTTPS
- No local-only dependencies (everything works for any visitor)
- Environment variables properly configured (no exposed secrets)
- Reasonable cold start time if using serverless

## Performance Targets

| Metric                           | Target                               |
| -------------------------------- | ------------------------------------ |
| Landing page Time to Interactive | < 2 seconds                          |
| Initial country load             | < 3 seconds                          |
| Search results                   | < 500ms                              |
| Scrolling through 100+ items     | Smooth (60fps, no jank)              |
| Individual country refresh       | < 5 seconds                          |
| Layout shift during load         | Minimal (use skeletons/placeholders) |

### Lighthouse Benchmarks

Run Lighthouse on your deployed site. Target scores:

| Category       | Target |
| -------------- | ------ |
| Performance    | > 85   |
| Accessibility  | > 90   |
| Best Practices | > 90   |

Include your Lighthouse scores in your README.

## Technology Choice

**choices:**

- Next.js
- React
- React-aria
- motion js

The starter files provide CSS custom properties, CSS modules is required.
