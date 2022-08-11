import { IConfig } from '../types'
import fs from 'fs'

let BUILD_NUMBER: string | null = fs.readFileSync('.git/HEAD').toString().trim()

if (BUILD_NUMBER?.indexOf(':') === -1) {
  BUILD_NUMBER
} else {
  try {
    BUILD_NUMBER = fs
      .readFileSync('.git/' + BUILD_NUMBER?.substring(5))
      .toString()
      .trim()
      .substring(0, 7)
  } catch (e) {
    BUILD_NUMBER = null
  }
}

const config: IConfig = {
  BUILD_NUMBER,
  BUILD_VERSION: '0.1.2',
  githubToken: '',
  name: 'DJS Template',
  bot: {
    sharding: false,
    options: {
      intents: [130815],
      allowedMentions: { parse: ['users', 'roles'], repliedUser: false }
    },
    token: '',
    owners: [],
    prefix: '!',
    cooldown: 2000
  },
  report: {
    type: 'webhook',
    webhook: {
      url: ''
    },
    text: {
      guildID: '',
      channelID: ''
    }
  },
  logger: {
    level: 'chat',
    dev: false
  }
}

export default config
