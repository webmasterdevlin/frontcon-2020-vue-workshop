# vue3-course

```zsh
$ vue create frontcon-2020-vuejs-workshop
```

Push to Github

## Migrate to Vuejs 3

```zsh
$ vue add vue-next
```

## Upgrade to latest npm packages

- Need version lense VS extension
- Go to package.json
- Upgrade all packages

```zsh
$ rm -rf node_modules
```

## Project setup

```zsh
$ npm cache clean -f
$ npm install
```

### Compiles and hot-reloads for development

```zsh
$ npm run serve
```

### Compiles and minifies for production

```zsh
$ npm run build
```

### What to build in order
 - upgrade/migrate to Vue.js 3
 - npm i bootstrap 5 alpha
 - npm i  bootstrap-icon
 - Navbar
 - Heroes (class card)
 - npm i vue-router 4
 - Router
 - npm i vuex 4
 - Setup Vuex 4 - hero module
 - Get Request (v-for)
 - Delete Request (class btn btn-danger)
 - Post Request (Form)
 - Put Request (editingTracker, v-if, v-else)
 - npm i jsonwebtoken
 - npm i -D @types/jsonwebtoken json-server-auth
 - Setup Vuex 4 - auth module
 - Register
 - Login
 - update auth service
 - authGuard
 - update router with meta requiresAuth and router BeforeEach
 - ForgotPassword
 - ContinueAs
 - Done! Now do the Villain part with its own page and Vuex module.

### Vuex Setup

- create store
- write a module
- write a state
- npm i axios
- write an api service
- write a type
- write an action
- write a mutation
- write a getter
- update components with mapGetters and mapActions
- npm i concurrently json-server
- copy-paste db.json
