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

Potentially some metadata-based rendering will be required, meaning there will be list of configurations for specific
games on backend, that will be transferred to client. Based on provided configuration form with questions to user might
vary.