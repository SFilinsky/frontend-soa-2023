# Tooling choices

## React

React has been chosen because it is the most popular frontend framework as of 2023 
(based on [stackoverflow stats](https://insights.stackoverflow.com/trends?tags=reactjs%2Cvue.js%2Cangular%2Csvelte%2Cangularjs%2Cvuejs3)),
which means it has the most information on it and is the easiest to find developers to work with 
(not mentioning I want to shake off rust a bit and take a look on it's latest features :D)

## Next.js

React on its own is a great library that defines architecture of the project, but it misses important features that
will be needed for the project:
- routing
- pre-rendering
- page streaming
- SEO optimisation

In 2023, React documentation itself [recommends usage](https://react.dev/learn/start-a-new-react-project) of some 
wrapper around it in modern applications.

I liked Next.js from them the most because of user experience centric approach which focuses on performance and 
optimising application loading performance while allowing developer to focus on shipping features.

Also, it will be great fit for micro frontends architecture I've chosen for main application part
(there is [official example](https://vercel.com/templates/next.js/microfrontends) for it).