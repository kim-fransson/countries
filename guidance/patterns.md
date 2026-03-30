# UI/UX Patterns: Frontpage

## Patterns to Follow

### Loading & Empty States

- Skeleton screens for content loading — match the shape of real content
- Spinner or progress indicator for refresh operations
- Empty states should be helpful: explain why it's empty and what to do about it
- Error states should be specific

### Search

- Search should be prominently accessible (header bar or keyboard shortcut)
- Results should highlight matching terms
- Include source and date in search results for context
- "No results" should suggest alternatives (check spelling, try different terms)

### Responsive Behavior

- Touch targets minimum 44x44px on mobile

## Anti-Patterns to Avoid

### Layout Pitfalls

- Don't force a fixed sidebar on mobile
- Don't use horizontal scrolling for country items
- Don't hide navigation behind a hamburger menu on desktop — space permits a visible sidebar
- Don't mix card layouts and list layouts in the same view without clear visual separation

### Performance

- Don't load all items on initial render — virtualize or paginate long lists
- Don't fetch images eagerly — lazy load below the fold
- Don't block the UI while countries are refreshing — show a non-blocking progress indicator
- Don't re-fetch countries on every navigation — cache aggressively, refresh in the background

### Error Handling

- Don't show raw error messages or stack traces to users
- Don't silently fail — if a country can't be fetched, tell the user
- Don't retry failed countries aggressively — exponential backoff prevents hammering broken servers
