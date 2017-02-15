// @flow
/**
 * Renders home page.
 * @param {Object} req
 * @param {Object} res
 */
export function getHome(req : Object, res: Object) : void {
    res.sendFile(__dirname + '/index.html');
}