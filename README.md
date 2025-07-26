# SWEN3165 Quiz #3

Artillery documentation https://artillery.io/docs/

# The auth service

Install dependencies with `npm install`

This project sets up a demo service, defined in the `auth` folder. Start it:

```
npm start
```

This service exposes two endpoints:

### GET /authenticate
If the provided username and password are the same, returns status (200 OK) and a JSON response with `userId` and `sessionToken`.

e.g. `curl -v http://localhost:9876/authenticate?username=smith&password=smith`
OR enter the following URL in your browser: http://localhost:9876/authenticate?username=smith&password=smith 
will return

```
(200 OK)
{
    "sessionToken": "session_4137",
    "userId": "user_smith"
}
```
The generated `sessionToken` is added to an in-memory list and can then be used with the `/session/keep-alive` endpoint.

If the username and password are not the same, we get back a `401 Unauthorized`.

e.g. `curl -v http://localhost:9876/authenticate?username=john&password=smith`
OR enter the following URL in your browser: http://localhost:9876/authenticate?username=john&password=smith

### GET /session/keep-alive
If the session exists, echos back the provided `sessionToken` with a (200 OK) response code.

e.g. `curl -v http://localhost:9876/session/keep-alive?sessionToken=session_4137`
OR enter the following URL in your browser: http://localhost:9876/session/keep-alive?sessionToken=session_4137
returns
```
(200 OK)
{
    "sessionToken": "session_4137"
}
```

If the session does not exist, we get back a `401 Unauthorized`

# Instructions

Create test scenarios to load test the two endpoints for the various responses (outputs) that they give. You will be assessed for the quality of the tests that you write.

### HINT
* Call the /authenticate endpoint, and capture the `sessionToken` returned
* Call the /session/keep-alive endpoint with the captured `sessionToken`
* capture - Set this to capture values from the response body of a request and store those in variables.
* Taken from https://www.artillery.io/docs/reference/engines/http