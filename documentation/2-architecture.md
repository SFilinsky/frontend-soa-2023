# Architecture

System contains two fundamentally different parts, which should be extracted into separate applications 
for easier maintenance.

## Landing app

Landing page is entry experience, which should be served as static content. It should have complete SEO support.

For the purpose of the project, it should be required and enough for this app to be fully statically rendered.

## Teammate search app

Since this app is highly dynamic, I'll use Apollo with subscriptions to dynamically update users on
latest data. In any case, SSR usage should be maximized whenever possible to allow better performance clientside 
and caching.  

This app doesn't have goal to be exposed to search engines, so SEO is not a requirement. However, it should have full
a11y support. 

Each module in detail is covered in ([Teammate search modules](./4-teammate-search.md))

#### Frontend

This part should use microfrontend architecture for UI with following sub frontends:
- Search form module (should ask user about all details needed to find them good match)
- Match results module (should present match results and allow to choose user for contact)
- Approve contact module (should display a notifications about users who want to join
  you and allow you to answer to their invitation)
- Contact page module (should show you contacts of user, so you can find each other in game)

Container module should join all other micro-frontends together and serve as flow manager, meaning that it should
communicate with modules and progress user experience depending on results.

#### Backend

Backend is not this project goal, so it should only use in-memory state with few endpoints, resetting state if 
service stops.

What IS important - backend should follow frontend architecture to minimise communication between teams.

There are several important points for it:
- architecture should minimise consumption surface - as few teams and modules should rely on service as possible
- architecture should keep consumption explicit - it should be easy to detect how service is consumed to identify
usage places and patterns to further improve overall project organisation

Based on those requirements, there are several potential options:
- microservices, one per frontend module + several platform-level services with wider dependencies.
- graphql through Apollo Client, using Apollo Gateway to combine federated schemas that come 
  from several individual services.
  - this option also solves problem of dynamic data update, since Apollo Client includes
    [Subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/).

I'm going to use option 2 for the reason of great tooling support with React, which I'm going to use 
for all microfrontend modules. It will save a lot of dev time which microservices would require, also providing 
solutions to caching and so on.
