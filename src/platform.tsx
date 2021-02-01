import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { LoginManager, ELoginType } from '@qn-pandora/app-sdk'
import visualizationConfigForm from '!!raw-loader!./form.xml'

const div = document.createElement('div')
document.body.append(div)

async function init() {
  console.log(visualizationConfigForm)
  if (!IS_ENV_PRODUCTION) {
    global['__Pandora__SetupAppPlatform']()
    console.log('__Pandora__ConfigForm', global['__Pandora__ConfigForm']({
      configForm: visualizationConfigForm,
    }))
  }
  const App = () => {
    return global['__Pandora__ConfigForm']({
      configForm: visualizationConfigForm,
    })
  }
  const loginManager = new LoginManager(ELoginType.PANDORA)
  await loginManager.login({
    username: USERNAME,
    password: PASSWORD
  })
  console.log('App:::', App)
  if (App) {
    ReactDOM.render(<App></App>, div)
  }
}

init()
