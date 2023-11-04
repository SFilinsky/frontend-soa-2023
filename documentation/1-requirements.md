# Requirements

This document defines reasoning and requirements behind project.

## Project description

The application is platform for finding teammates when playing online games. Kinda "Tinder for gamers".

Application is web-based and should be available from phone.

It should contain landing page that includes marketing info and allows users to enter main experience + 
meta information about project, it's purpose and developers.

Account is email based, there are no password requirements.

Main part of application should allow player to search other players by game name 
or expose themselves to others looking for teammates. Results should be dynamically updated.
User can send other users proposal to join party, but they should handle it themselves in game.

If user is AFK for longer then 5 minutes, application should automatically remove him from search and disconnect.

## Requirements

### Scalability

Project should be designed as if it will be developed and maintained by several development teams.
This means that software architecture should strive to minimise dependencies between teams and reduce 
amount of communication needed to maintain it.

### Quality

User interface should:
- responsively support mobile devices down to 360 px wide (based on [stats](https://gs.statcounter.com/screen-resolution-stats/mobile/worldwide))
- conform to [WCAG2 AA](https://www.w3.org/WAI/WCAG2AA-Conformance)
  - this should be confirmed by automated testing setup

Linting should be set up for all submodules.

### Testing

The code should be covered with all layers of tests: E2E, Integration, Unit.

## Performance

Utilise optimisation techniques like [progressive hydration](https://www.patterns.dev/posts/progressive-hydration),
measurements with [Core Web Vitals](https://web.dev/vitals/)

### Maintainability

It should be easy to replace any technologies used in development, meaning that any library that can be 
potentially replaced in future should not be used directly and instead by hidden under additional 
abstraction layer when possible.

All library and tool choices should be documented on platform level (watch [Unification](#Unification)).

### Unification

All parts of application should share common tooling setup, as if it was organisation with platform level
requirements.

This includes unification of libraries used for UI, as well as config basis for automation pipelines, 
linting and so on.