import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'

const artifactsDir = path.resolve('.artifacts')
const stableName = 'rsalgo-dev.tgz'
const stablePath = path.join(artifactsDir, stableName)

fs.mkdirSync(artifactsDir, { recursive: true })

const packOutput = execFileSync(
  'npm',
  [
    'pack',
    '--json',
    '--ignore-scripts',
    '--pack-destination',
    artifactsDir,
  ],
  {
    encoding: 'utf8',
  }
)

const parsed = JSON.parse(packOutput)
const packedFilename = parsed?.[0]?.filename

if (!packedFilename) {
  throw new Error('npm pack did not return a filename')
}

const packedPath = path.join(artifactsDir, packedFilename)

if (fs.existsSync(stablePath)) {
  fs.rmSync(stablePath)
}

fs.copyFileSync(packedPath, stablePath)

if (packedPath !== stablePath && fs.existsSync(packedPath)) {
  fs.rmSync(packedPath)
}

console.info(`Created ${stablePath}`)
