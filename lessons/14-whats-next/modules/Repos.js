import React from 'react'
import { browserHistory } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  //渲染后注入回调
  componentDidMount() {
    this.context.router.setRouteLeaveHook(
      this.props.route, 
      this.routerWillLeave
    )
  },
  routerWillLeave(nextLocation) {
    // 返回 false 会继续停留当前页面，
    // 否则，返回一个字符串，会显示给用户，让其自己决定
    return '确认要离开？';
  },

  handleSubmit(event) {
    event.preventDefault()
    const userName = event.target.elements[0].value
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    this.context.router.push(path)
    //或者使用
    //browserHistory.push(path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li><NavLink to="/repos/a1">点击重定向&lt;Redirect&gt;</NavLink></li>
          <li><NavLink to="/repos/a2">点击重定向回调方法</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
