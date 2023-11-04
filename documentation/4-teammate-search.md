## Teammate search modules

Teammate search will contain several modules, each of them having its own responsibility and a team that
will maintain it. Perfectly each team should maintain one or little amount of simpler modules.

### Container module

Can be done using plain HTML or Web Components since it won't contain much functionality expect for the mounting other
modules and auth.

Authorisation will be done using [OAUTH 2.0](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow).
Auth module is responsive for collecting user data and handling auth, but

### Search info form module

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