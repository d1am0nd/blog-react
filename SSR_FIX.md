# SSR Hydration Mismatch Fix Plan

## Problem Analysis
**React Error 418**: Hydration mismatch between server-rendered content and client-side rendering
- Server returns empty `#root` div, indicating SSR is not working properly
- Client-side app attempts to hydrate an empty container
- This causes React to detect a mismatch and regenerate the entire tree

## Root Cause Analysis
Based on codebase examination, identified potential issues:

1. **Server Build Issues**: Server uses `server.cjs` built from `node/server.tsx`
2. **Routing Mismatch**: Server uses `StaticRouter`, client uses `BrowserRouter` 
3. **Context/State Mismatch**: Server provides context, client expects `window.__PRELOADED_STATE__`
4. **Build Configuration**: Vite SSR configuration may have issues
5. **Entry Point Mismatch**: Server references `/js/app.js` but client builds to different path

## Debugging & Fix Plan

### ✅ Phase 1: Investigation & Setup
- [x] Analyze React error 418 and codebase structure
- [x] Examine server-side rendering setup and client hydration
- [x] Identify potential mismatches between SSR and client builds
- [ ] **Add debugging scripts to package.json for better visibility**
- [ ] **Test server build generation**
- [ ] **Verify client build output structure**

### ⏳ Phase 2: Build System Verification  
- [ ] **Run server build and check output**: `npm run production-server`
- [ ] **Run client build and verify js/app.js exists**: `npm run production`  
- [ ] **Test if server.cjs actually starts without errors**
- [ ] **Add debug logging to server rendering process**
- [ ] **Create test endpoint to verify SSR rendering independently**

### 📋 Phase 3: Server-Side Rendering Fix
- [ ] **Fix server route handler in node/routes/app/index.tsx**
- [ ] **Verify renderHtml function works with current React version**  
- [ ] **Fix styled-components SSR integration**
- [ ] **Ensure preloaded state serialization works correctly**
- [ ] **Test server rendering produces non-empty HTML**

### 📋 Phase 4: Client-Side Hydration Fix  
- [ ] **Fix hydrateRoot call in src/ts/index.tsx**
- [ ] **Ensure client expects same HTML structure as server provides**
- [ ] **Verify preloaded state is properly deserialized**
- [ ] **Test hydration works without errors**

### 📋 Phase 5: Router & Context Alignment
- [ ] **Align StaticRouter (server) and BrowserRouter (client) behavior**
- [ ] **Ensure SSRContext provides consistent data structure**
- [ ] **Fix any route path mismatches between server and client**
- [ ] **Test routing works for all defined routes**

### 📋 Phase 6: Testing & Validation
- [ ] **Add test script for SSR rendering: `npm run test:ssr`**
- [ ] **Add script to compare server HTML vs client expectations**
- [ ] **Test all routes render correctly with SSR**
- [ ] **Verify no hydration warnings in browser console**
- [ ] **Clean up any temporary test files created during debugging**

### 📋 Phase 7: Production Readiness
- [ ] **Ensure linting passes: `npm run lint`**
- [ ] **Verify TypeScript compilation: `npx tsc --noEmit`**
- [ ] **Test production builds work correctly**
- [ ] **Update documentation if needed**

## Technical Details Found

### Current Structure
- **Server Entry**: `node/server.tsx` → builds to `server.cjs`
- **Client Entry**: `src/ts/index.tsx` → builds to `public/js/main.js` 
- **SSR Component**: `src/ts/Server.tsx` (uses StaticRouter)
- **Client Component**: `src/ts/App.tsx` (uses BrowserRouter)

### Key Files to Focus On
- `node/routes/app/html.tsx` - Server HTML rendering
- `src/ts/index.tsx` - Client hydration entry point
- `vite.config.js` - Build configuration
- `node/routes/app/index.tsx` - Server route handling

## Debug Instructions

**When adding debug information, always update this file with:**
1. What was discovered
2. What was fixed
3. What still needs attention
4. Any temporary files created (mark for cleanup)

**Test Commands to Add:**
```bash
# Add to package.json scripts section
"test:ssr": "node -e \"console.log('Testing SSR...'); require('./server.cjs')\"",
"debug:server": "node --inspect server.cjs",  
"debug:render": "node -e \"const {renderHtml} = require('./node/routes/app/html'); console.log(renderHtml({title:'Test',description:'Test',url:'/'}, {}))\""
```

## Current Status: Investigation Phase
- ✅ Analyzed error 418 (hydration mismatch)
- ✅ Identified server returns empty #root
- ✅ Found potential build/routing issues
- ⏳ Next: Add debugging scripts and test builds

---
*Last updated: 2025-08-28*
*Auto-update this file whenever new debugging info is discovered*