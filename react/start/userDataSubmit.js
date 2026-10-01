function userDataSubmit(req, resp) {
    resp.write(`
    <h1>Data Submitted</h1>
    <p>Your data has been submitted successfully.</p>`);
}
module.exports = userDataSubmit;