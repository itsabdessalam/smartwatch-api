# Smartwatch API

## 📦 Requirements

This project should be working as expected with the following minimal version of:

| Dependency |   Version   |
| ---------- | :---------: |
| Node       | >= v12.14.1 |
| npm        | >= v6.14.5  |
| express    | >= v4.17.1  |

## 🔒Environment variables

```text
DB_HOST=""
DB_PORT=""
DB_USER=""
DB_PASSWORD=""
DB_DATABASE=""
JWT_SECRET=""
JWT_EXPIRATION=""
JWT_TOKEN_HEADER=""
```

## 🚀 Quick start

1. **Clone the git repository**

    ```bash
    # cloning git repository into `mysmartwatch-api` folder
    git clone https://github.com/itsabdessalam/smartwatch-api mysmartwatch-api

    # install project dependencies
    cd mysmartwatch-api && npm install
    ```

2. **Start Developing**

    **Dev Version**

    ```bash
    npm run develop
    ```

    **Prod Version**

    ```bash
    npm run start
    ```

3. **Use a REST Client and start editing files!**

    > Project is running at <http://localhost:3000>

## 🧐 What's inside?

```
.
├── node_modules        # This is the directory of the modules (npm packages) for the project
├── config
├── controllers
├── database
├── middleware
├── models
├── routes
├── utils
├── validators
├── .gitignore          # This file tells git which files it should not track
├── .eslintrc.js        # This is the configuration file for ESLint
├── .prettierrc.js      # This is the configuration file for Prettier
├── .env
├── package.json        # This file tells npm which packages to install for the project
└── README.md
```