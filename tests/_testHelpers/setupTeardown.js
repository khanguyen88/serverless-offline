import { dirname, resolve } from 'node:path'
import process, { env } from 'node:process'
import { fileURLToPath } from 'node:url'
import { execaNode } from 'execa'

let serverlessProcess

const __dirname = dirname(fileURLToPath(import.meta.url))

const serverlessPath = resolve(
  __dirname,
  '../../node_modules/serverless/bin/serverless',
)

const shouldPrintOfflineOutput = env.PRINT_OFFLINE_OUTPUT

export async function setup(options) {
  const { args = [], env: optionsEnv, servicePath } = options

  serverlessProcess = execaNode(serverlessPath, ['offline', 'start', ...args], {
    cwd: servicePath,
    env: optionsEnv,
  })

  await new Promise((res, reject) => {
    let stdData = ''

    serverlessProcess.on('close', (code) => {
      if (code) {
        console.error(`Output: ${stdData}`)
        reject(new Error('serverless offline crashed'))
      } else {
        reject(new Error('serverless offline ended prematurely'))
      }
    })

    serverlessProcess.stderr.on('data', (data) => {
      if (shouldPrintOfflineOutput) process._rawDebug(String(data))
      stdData += data
      if (String(data).includes('Server ready:')) {
        res()
      }
    })

    serverlessProcess.stdout.on('data', (data) => {
      if (shouldPrintOfflineOutput) process._rawDebug(String(data))
      stdData += data
      if (String(data).includes('Server ready:')) {
        res()
      }
    })
  })

  // TODO FIXME
  // temporary "wait" for websocket tests, this should be fixed in the code and then be removed
  await new Promise((res) => {
    setTimeout(res, 1000)
  })
}

export async function teardown() {
  serverlessProcess.cancel()

  try {
    await serverlessProcess
  } catch {
    //
  }
}
