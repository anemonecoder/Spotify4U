function getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q) ) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
}
var params = getHashParams();
export const access_token = params.access_token;
export const checkState = params.state;
