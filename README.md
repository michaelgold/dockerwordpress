# dockerwordpress

## Installation

### Docker
In the terminal type:
- `docker-compose up -d` 
This will start the docker containers

### Node Dependencies
In the terminal type:
- `cd app`
- `yarn install`
This will install the node modules for Webpack's hot-reloading which we will use when editing

### Website Configuration

In the browser visit: http://localhost:8000
- Follow the prompts for the Wordpress installation

In the browser visit: http://localhost:8000/wp-admin/themes.php
- Set the theme to "Vuejs Wordpress theme starter"

In the browser visit: http://localhost:8000/wp-admin/options-permalink.php
- Set the Common Settings to "Post Name." This will enable the Wordpress Rest API 

## Development
In the terninal type:
- `docker-compose up -d` 
- `cd app`
- `yarn run watch`
This will start the Docker containers and then run a Webpack server to enable hot-reloading

In a text editor, modify components in the path `app/src/components`

For example, changing the Vue file `app/src/components/Home.vue` will modify 
the home page.

Note: saving the file in the text editor should automtically update the wordpress site running at http://localhost:8000
