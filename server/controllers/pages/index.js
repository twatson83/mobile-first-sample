/**
 * Renders home page.
 * @param {Object} req
 * @param {Object} res
 */
export function getHome(req, res) {
    res.sendFile(__dirname + '/index.html');
}