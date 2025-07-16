const VERSION = '3.1.1'

export default function generateTypes(contentmodel: object): OpenAPISpecification {
  const specification = {
    openapi: VERSION,
    info: {
      title: 'Contentful Space API',
    },
  }

  return specification
}

/** @see {@link https://spec.openapis.org/oas/latest.html#x4-8-1-1-fixed-fields} */
interface OpenAPISpecification {
  /**
   * This string MUST be the version number of the OpenAPI Specification that the OpenAPI Document
   * uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI Document. This is
   * not related to the API info.version string.
   */
  openapi: string

  /**
   * Provides metadata about the API. The metadata MAY be used by tooling as required.
   *
   * @see {@link https://spec.openapis.org/oas/latest.html#info-object}
   */
  info: {
    /** The title of the API. */
    title: string
  }
}
