# Basic CRUD API

## App Setup

### Pretty code
I <3 pretty code, so I installed XO and Prettier
They run on commit via `npm test`

### Types are our our friend
Don't @ me, I like a little type safety.
You aren't going to see Java in my JavaScript, not a big OO fan, but I do <3 some interfaces to help assert type safety between function calls, but without the constructors

### Badly designed
This code is deliberately poorly designed because we're going to branch the code and refactor to follow the Single Responsibility Principle and provide a better Separation of Concerns

### Environment Variables
To get up and running, you'll need to create a `.env` file, the easiest way is:

```shell
cp .env.example .env
```

Then, you'll need to set the following variables:
`PORT` which defines the port on which the application runs

## Up and Running

### Installation

```shell
# install dependencies
npm install
```

```shell
# setup the git hooks with husky
npm prepare
```

```shell
# start the app
npm start
```

