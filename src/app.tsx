import React, { Component } from 'react'
import { Menu } from 'antd'
import { Redirect, Route, Switch, BrowserRouter, Link } from 'react-router-dom'
import './global/styles/style.less'
import Overview from './modules/Overview'
import Dashboard from './modules/Dashboard'

interface IAppProps {
  context: {
    appName: string
    basePath: string
  }
}

export default class App extends Component<IAppProps, {}> {
  render() {
    const {
      context: { basePath }
    } = this.props
    return (
      <BrowserRouter basename={basePath}>
        <Menu mode="horizontal" defaultSelectedKeys={['overview']}>
          <Menu.Item key="overview">
            <Link to="overview">overview</Link>
          </Menu.Item>
          <Menu.Item key="dashboard">
            <Link to="dashboard">dashboard</Link>
          </Menu.Item>
        </Menu>
        <Switch>
          <Route exact path="/">
            <Redirect to="/overview" />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}
