import React from 'react'
import PropTypes from 'prop-types'
import styles from './Issue.module.css'

function Issue(props) {
  const {title,user, number,created_at,}= props.issue
  const formattedDate = new Date(created_at)

  return (
    <div className={styles.issue}>
      <div>
        <h4><a href="#issue">{title}</a></h4>
        {props.issue.title}
      </div>
      <div>
      <h4>{props.issue.labels.name}</h4>
      </div>
      <div className = {styles.issueMeta}>
        #{number} opened at {formattedDate.toLocaleString()} by <a href={user.html_url}>{user.login}</a>
      </div>
    </div>
  )
}

Issue.propTypes = {
  issue: PropTypes.object
}



export default Issue
