# Teammate search modules

Teammate search will contain several modules, each of them having its own responsibility and a team that
will maintain it. Perfectly each team should maintain one or little amount of simpler modules.

## Module requirements

1. Agnostic: submodules should not expose implementation details, meaning it should be initialised and 
loaded to the page through abstract API.
2. Container supports SSR: to allow the best experience, container should be server-side rendered allowing quick 
initial load while submodules can be loaded dynamically.
3. Runtime Integration: submodules are integrated in runtime. More about that in [Integration section](#Submodule-integration).
4. No shared state: if some data needs to be exchanged - functionality should be explicitly provided by container.
5. Container can have dependencies on submodules API.
6. Submodules cannot have dependencies on container, only on events defined in common shared package.

## Submodule integration

Integration is only done in runtime, and in two phases:
1. Synchronously loading state is displayed. It's needed to avoid content flashing, but allows whole page rendering to 
not be blocked.
2. After initial initialisation passed, each component asynchronously initialises its contents.

For that reason, there will be shared package that will provide common basis for component creation.

## Shared events

There is separate package that defines list of events available to all microfrontends. 

It's needed to allow easily track event usages (when they are created or listened to), while reducing direct 
communication between teams since it's not directly part of container or submodules.  

## Module list

### Container module

Can be done using plain HTML or Web Components since it won't contain much functionality expect for the mounting other
modules and auth.

Authorisation will be done using [OAUTH 2.0](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow).

### Auth module

Auth module is responsive for collecting user data and handling auth, but auth info is stored and shared by container
on server-side.

### Search info form module

This part will be different based on game and can be changed to include different elements to form.
For setup, it should use dynamic configurations which are set up on backend side.

### Match results module

Will include UI for displaying results that might be interesting to user. Since it can be different based on game,
this part should be modular and sort results based on user form data backend-side.

Also, it will allow user to choose whom they want to play with.

### Approve contact module

This page will display contact requests, allow to approve them and present contact information.


## Deployment

Project should be automatically deployed to AWS using CI pipelines.