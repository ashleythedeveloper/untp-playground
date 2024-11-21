# Requirements

A simple UNTP "playground" where users can find sample credentials for them to drop into their own verifiers and, conversely, can drop their own issued credentials and get a test report which, when all mandatory ticks are green, can be used as evidence for the implemetation register.

- Ability to download test credential secured with an enveloping proof
- Ability to drop a set of credentials (secured using enveloping proof or embedded proof) (keep this dnd area visable) - If enveloping proof decode the credential secured by the enveloping proof. - Auto detect the credentials type based on UNTP credential types (DigitalProductPassport, DigitalConformityCredential, DigitalFacilityRecord, DigitalIdentityAnchor, DigitalTraceabilityEvent) from type array - Auto detect the data model version using the link in the context array
  Once credentials have been uploaded, show a preset list of test steps for each credential type:
  -Fore each credential type: - Show a collapsable child element with the credential type name /version that contains the test steps for that specify credential. - Show the status of each test step, spinnier for in progress, somthing for pending, green tick for success, gray mark for missing credential, red cross for failure. If the child is collaopsed the current status should be shown in the parent element. - Attempt to verify the credential - Validate the credential against the corrisponding UNTP schema (auto detect the right veraion based on the context link, allow user to modify the versionafter the fact, if they do re run the schema test) - As each step is completed update the ui in real time - If error, allow user to click show results or detailed view where right side draw opens with detailed feedback of what went wrong. - If a credential is missing, show a gray mark - If all steps pass, full screenanimation of confetti exploding and text, your UNTP compliant!

Use the following to verify the credentials:
"href": "https://vckit.untp.showthething.com/agent/routeVerificationCredential",
"hreflang": ["en"],
"headers": {
"Authorization": "Bearer test123",
"Content-Type": "application/json"
}
example payload:
{
"credential": {
"@context": [
"https://www.w3.org/ns/credentials/v2",
"https://vocabulary.uncefact.org/untp/dpp/0.5.0/"
],
"type": "EnvelopedVerifiableCredential",
"id": "data:application/vc-ld+jwt,eyJhbGciOi...."
},
"fetchRemoteContexts": true,
"policies": {
"credentialStatus": true
}
}

Decoded credential secured by enveloping proof:
{
"@context": [
"https://www.w3.org/ns/credentials/v2",
"https://vocabulary.uncefact.org/untp/dpp/0.5.0/"
],
"type": [
"DigitalProductPassport",
"VerifiableCredential"
],
....
}

Download example credential can be fount here: public/credentials/dpp.json

When adding V0 components ensure you use npx schadcn@latest add X, schadcn-ui is deprecated....
