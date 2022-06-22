import React, {useEffect,useState} from 'react'
import Issue from './Issue'
import styles from './IssueList.module.css'

function IssueList() {
  const [issue,setIssue] = useState([])
  const getIssue = () => {
    fetch('https://api.github.com/repos/facebook/create-react-app/issues')
        .then(res => res.json())
        .then(data => {
            setIssue(data)
        })
      }
      useEffect(() => {
        getIssue()
    }, [])

    

  return (
    <div className={styles.issueList}>
      {
        issue.map(issue => {
          return <Issue key={issue.id} issue={issue} />
        })
      }
    </div>
  )
}

export default IssueList