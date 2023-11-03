import React from "react";
import ReactGA from "react-ga";
import { RedocStandalone } from "redoc";
import yaml from "js-yaml";

const Blog = () => {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  const yamlStr = `
swagger: 3.0
openapi: 3.0.0
schemes:
  - http
  - https
host: petstore.swagger.io
basePath: /v2
info:
  description: |
    This is a sample server Petstore server.
    You can find out more about Swagger at
    [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).
    For this sample, you can use the api key special-key to test the authorization filters.
    # Introduction
    This API is documented in **OpenAPI format** and is based on
    [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.
    It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)
    tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard
    OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).
    # OpenAPI Specification
    This API is documented in **OpenAPI format** and is based on
    [Petstore sample](http://petstore.swagger.io/) provided by [swagger.io](http://swagger.io) team.
    It was **extended** to illustrate features of [generator-openapi-repo](https://github.com/Rebilly/generator-openapi-repo)
    tool and [ReDoc](https://github.com/Redocly/redoc) documentation. In addition to standard
    OpenAPI syntax we use a few [vendor extensions](https://github.com/Redocly/redoc/blob/master/docs/redoc-vendor-extensions.md).
    # Cross-Origin Resource Sharing
    This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with  [W3C spec](https://www.w3.org/TR/cors/).
    And that allows cross-domain communication from the browser.
    All responses have a wildcard same-origin which makes them completely public and accessible to everyone, including any code on any site.
    # Authentication
    Petstore offers two forms of authentication:
      - API Key
      - OAuth2
    OAuth2 - an open protocol to allow secure authorization in a simple
    and standard method from web, mobile and desktop applications.
    <!-- ReDoc-Inject: <security-definitions> -->
  version: 1.0.0
  title: Swagger Petstore
  termsOfService: 'http://swagger.io/terms/'
  contact:
    email: apiteam@swagger.io
    url: https://github.com/Redocly/redoc
  x-logo:
    url: 'https://redocly.github.io/redoc/petstore-logo.png'
    altText: Petstore logo
  license:
    name: Apache 2.0
    url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
externalDocs:
  description: Find out how to create Github repo for your OpenAPI spec.
  url: 'https://github.com/Rebilly/generator-openapi-repo'
`;
  const nativeObject = yaml.load(yamlStr);

  return (
    <>
      <div>Blog</div>
      <RedocStandalone
        spec={JSON.parse(JSON.stringify(nativeObject))}
        options={{
          nativeScrollbars: false,
          theme: {
            colors: { primary: { main: "blue" } },
            typography: {
              fontSize: "14px",
              code: {
                fontSize: "13px",
              },
            },
          },
          lazyRendering: true,
          // scrollYOffset: 150,
        }}
      />
    </>
  );
};

export default Blog;
