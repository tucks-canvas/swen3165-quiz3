<!-- 

Name: Josiah-John Green.
Course: Software Testing.
Course Code: SWEN3165.
Quiz: #3.

-->

# Test Overview:

1. Ran for 3 minutes with 1,800 virtual users

2. Tested 3 scenarios: valid auth flow (31.5%), invalid credentials (33.4%), invalid tokens (35.1%)

```Total requests: 2,368 (200: 1,136, 401: 1,232)```

# Key Metrics:

A. Performance:

    1. Average response time: 2.3ms (both 200/401 responses)

    2. 95% of responses under 5ms

    3. Peak throughput: 25 requests/sec

B. Success Rates:

    1. 100% success for valid auth flows (200 status)

    2. Correct 401 responses for all invalid cases

    3. 0 failed virtual users

C. System Behavior:

    1. Consistent performance during 120s stress phase

    2. Maximum response time spike: 130ms (likely GC pause)

    3. Memory usage grew linearly with sessions

# Findings:

    1. The auth service handles ~20 requests/sec with sub-5ms latency

    2. Session token validation is as performant as authentication

    3. No errors detected under sustained load

# Recommendations:

    1. Add rate limiting to prevent brute force attacks

    2. Implement session expiration (current tokens persist indefinitely)

    3. Monitor memory growth during extended operation

```Conclusion: The service meets performance requirements for the tested load level, demonstrating both correctness and stability. Scaling tests to higher loads would be the next logical step.```