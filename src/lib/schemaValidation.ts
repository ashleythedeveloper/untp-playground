import addFormats from "ajv-formats";
import Ajv2020 from "ajv/dist/2020";

const ajv = new Ajv2020({
  allErrors: true,
  strict: false,
  validateFormats: false,
});
addFormats(ajv);

const schemaCache = new Map<string, any>();

const SCHEMA_URLS = {
  DigitalProductPassport:
    "https://jargon.sh/user/unece/DigitalProductPassport/v/0.5.0/artefacts/jsonSchemas/DigitalProductPassport.json?class=DigitalProductPassport",
  DigitalConformityCredential:
    "https://jargon.sh/user/unece/ConformityCredential/v/0.5.0/artefacts/jsonSchemas/DigitalConformityCredential.json?class=DigitalConformityCredential",
  DigitalTraceabilityEvent:
    "https://jargon.sh/user/unece/traceabilityEvents/v/0.5.0/artefacts/jsonSchemas/DigitalTraceabilityEvent.json?class=DigitalTraceabilityEvent",
  DigitalFacilityRecord:
    "https://jargon.sh/user/unece/DigitalFacilityRecord/v/0.5.0/artefacts/jsonSchemas/DigitalFacilityRecord.json?class=DigitalFacilityRecord",
  DigitalIdentityAnchor:
    "https://jargon.sh/user/unece/DigitalIdentityAnchor/v/0.2.1/artefacts/jsonSchemas/DigitalIdentityAnchor.json?class=DigitalIdentityAnchor",
};

export async function validateCredentialSchema(credential: any): Promise<{
  valid: boolean;
  errors?: any[];
}> {
  try {
    const credentialType = credential.type.find((t: string) =>
      Object.keys(SCHEMA_URLS).includes(t)
    );

    if (!credentialType) {
      throw new Error("Unsupported credential type");
    }

    const schemaUrl = SCHEMA_URLS[credentialType as keyof typeof SCHEMA_URLS];

    if (!schemaCache.has(schemaUrl)) {
      const proxyUrl = `/api/schema?url=${encodeURIComponent(schemaUrl)}`;
      const schemaResponse = await fetch(proxyUrl);

      if (!schemaResponse.ok) {
        throw new Error(`Failed to fetch schema: ${schemaResponse.statusText}`);
      }

      const schema = await schemaResponse.json();
      schemaCache.set(schemaUrl, schema);
    }

    const schema = schemaCache.get(schemaUrl);
    const validate = ajv.compile(schema);
    const isValid = validate(credential);
    const errors = validate.errors || [];

    console.log("errors", errors);

    // Check if all errors are additionalProperties
    const onlyAdditionalPropertiesErrors = errors.every(
      (error) => error.keyword === "additionalProperties"
    );

    return {
      valid: isValid || onlyAdditionalPropertiesErrors,
      errors: errors,
    };
  } catch (error) {
    console.log("Schema validation error:", error);
    throw error;
  }
}
