import { createServer } from 'node:http'
import { spawn } from 'node:child_process'

function requestToEnv(request: IncomingMessage): NodeJS.ProcessEnv {
    if (request.url == undefined) {
        throw new Error('URL is undefined')
    }
    const url = new URL(request.url, `http://${request.headers.host}`)

    return {
        PATH_INFO: url.pathname,
        QUERY_STRING: url.searchParams.toString(),
        CONTENT_TYPE: request.headers['content-type'],
        REQUEST_METHOD: request.method,
    }
}


createServer((request, response) => {
    const requestEnv = requestToEnv(request)
    const env = {
        ...requestEnv,
        GIT_HTTP_EXPORT_ALL: '',
        GIT_PROJECT_ROOT: `/home/elies/Programming/Follow-along-projex/git-http-server`,
    };

    const backend = spawn('git-http-backend', { env })
    request.pipe(backend.stdin)
    stdoutToResponse(backend.stdout, response)
}).listen(3000)
