import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaCard(props) {
  return (
    <div className="card">
      <Link to={`/watchlist/${props.media.id}`} >
        <h3>{props.media.fields.title}</h3>
        <img src={props.media.fields.poster} alt={props.media.fields.title} />
      </Link>
    </div>
  )
}
