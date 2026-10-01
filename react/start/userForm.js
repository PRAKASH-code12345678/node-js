function userForm(req, resp) {
    resp.write(`
           <h1>My Web Page</h1>
    <p>This is a simple web page created using HTML.</p>
    <input type="text" placeholder="Enter your name">
    <button type="button">Submit</button>`)
}
module.exports = userForm;