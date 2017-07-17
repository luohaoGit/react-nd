import React, { Component } from 'react'
import NavLink from './NavLink'
import styles from './index.scss'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div style={{height:'1.2rem'}}></div>
        <div className={styles.root}>
          <NavLink
            pathUrl="/"
            icoName={"i-zhuye42un"}
            active={styles.navOne}
            linkName="Todo"
            onlyActiveOnIndex
          />
          <NavLink
            pathUrl="/coupon"
            icoName="i-youhui42un"
            active={styles.navThree}
            linkName="one"
          />
          <NavLink
            pathUrl="/tour"
            icoName="i-zhoubian42un"
            active={styles.navFour}
            linkName="two"
          />
          <NavLink
            pathUrl="/user"
            icoName="i-wode42un"
            active={styles.navFive}
            linkName="three"
          />
        </div>
      </div>
    )
  }
}

