"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const node_child_process_1 = require("node:child_process");
function requestToEnv(request) {
    if (request.url == undefined) {
        throw new Error('URL is undefined');
    }
    const url = new URL(request.url, `http://${request.headers.host}`);
    return {
        PATH_INFO: url.pathname,
        QUERY_STRING: url.searchParams.toString(),
        CONTENT_TYPE: request.headers['content-type'],
        REQUEST_METHOD: request.method,
    };
}
function stdoutToResponse(stdout, response) {
    let isHeaderEnded = false;
    stdout.on('data', (data) => {
        if (isHeaderEnded) {
            response.write(data);
            return;
        }
        const dataStr = data.toString('utf-8');
        const [headers, ...body] = data.split('\r\n\r\n');
        headers.split('\r\n').forEach((line) => {
            const [key, value] = line.split(': ');
            response.setHeader(key, value);
        });
        if (body.length > 0) {
            isHeaderEnded = true;
            response.write(body.join('\r\n\r\n'));
        }
        stdout.on('end', () => response.end());
    });
}
(0, node_http_1.createServer)((request, response) => {
    const requestEnv = requestToEnv(request);
    const env = Object.assign(Object.assign({}, requestEnv), { GIT_HTTP_EXPORT_ALL: '', GIT_PROJECT_ROOT: `/home/elies/git-remote-repos` });
    const backend = (0, node_child_process_1.spawn)('git-http-backend', { env });
    request.pipe(backend.stdin);
    stdoutToResponse(backend.stdout, response);
}).listen(3000);
//# sourceMappingURL=server.mjs.map