import './index.css'

const HistoryItems = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-container">
      <div className="application-details">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="image" alt="domain logo" />
        <p className="application-name">{title}</p>
        <p className="application-url">{domainUrl}</p>
        <button
          className="delete-button"
          type="button"
          onClick={onDelete}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItems
