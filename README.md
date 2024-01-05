# RTS 文档

This repository contains the documentation for RTS - Real-Time Server, published at http://rts.cn/docs/.

## Instructions for contributors

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Building the Docker image

```
$ docker build -t rts-docs .
$ docker run --rm -it -p 8080:80 rts-docs
```

The site will be available on port 8080 on your local machine.
