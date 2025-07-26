module.exports = {
    beforeScenario: (userContext, events, done) => {
        userContext.vars.$loopCount = Math.floor(Math.random() * 10000);
        done();
    }
};