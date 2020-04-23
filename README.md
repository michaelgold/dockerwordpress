# dockerwordpress

## Installation
In the terminal type:
- `docker-compose up -d` 
This will start the docker containers

In the browser visit: http://localhost:8000
- Follow the prompts for the Wordpress installation
- In the admin sidebar under "Appearance > Themes" Set the theme to "Vuejs Wordpress theme starter"

In the terminal type:
- `cd app`
- `yarn install`
This will install the node modules for Webpack's hot-reloading which we will use when editing

## Development
In the terninal type:
- `cd app`
- `yarn run watch`
This will run a Webpack server to enable hot-reloading

In a text editor, modify components in the path `app/src/components`

For example, changing the Vue file `app/src/components/Home.vue` will modify 
the home page.

Note: saving the file in the text editor should automtically update the wordpress site running at http://localhost:8000