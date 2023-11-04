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

## Tooling and architecture choices

System contains two significantly different parts, which will be extracted into separate applications.

### Landing

Landing page is entry experience, which should be served as static content. It is SE optimised.

Website builder can be used, but to not spread effort too much I'll not use it :)

### Teammate search

Since this part is highly dynamic, I'll use Apollo with subscriptions to dynamically update users on 
latest data.

Each module in detail is covered in ([Teammate search modules](#Teammate-search-modules))

#### Frontend

This part will use microfrontend architecture for UI with following sub frontends:
- Search form module (will ask user about all details needed to find them good match)
- Match results module (will present match results and allow to choose user for contact)
- Approve contact module (will display a notifications about users who want to join 
you and allow you to answer to their invitation)
- Contact page module (will show you contacts of user, so you can find each other in game)

Container module will join all other microfrontends together and serve as flow manager, meaning that it will
communicate with modules and progress user experience depending on results. 
Since flow represents pipeline RxJS can be used for flow management.

#### Backend

Backend will only use in-memory state with few endpoints, resetting state after it stops. 
This is done because the purpose of the project is to build frontend part mainly, which requires
backend to minimal extent, but I don't want to get deep in details.


## Teammate search modules

### Container module

Can be done using plain HTML or Web Components since it won't contain much functionality expect for the mounting other 
modules and auth.

Authorisation will be done using [OAUTH 2.0](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow).
Auth module is responsive for collecting user data and handling auth, but 

### Search info form
  
This part will be different based on game and can be change to include different elements to form. 
For setup, it should use dynamic configurations which are set up on backend side.

### Match results module

Will include UI for displaying results that might be interesting to user. Since it can be different based on game, 
this part should be modular and sort results based on user form data backend-side.

Also, it will allow user to choose whom they want to play with.

### Approve contact module

This part will display any contact requests that will come from other users and allow accepting them.


### Contact page module

## Deployment

Project should be automatically deployed to AWS using CI pipelines.