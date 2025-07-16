#!/bin/bash

# Generate typescript types from the Open API spec using `openapi-typescript`.

space_id="zrihl5w7b3ma"
environment_id="master"
content_file="contentful-export.json"

CONTENTFUL_JSON=$(contentful space export --skip-content --skip-roles --space-id=$space_id --environment-id=$environment_id --content-file=$content_file)

# echo "hej+$CONTENTFUL_JSON"

# Generate openapi specifications from the Contentful JSON exports

# @repo/contentful-openapi
