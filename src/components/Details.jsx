import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { URL, headers } from "../services"

export default function Details() {
  const [media, setMedia] = useState({})
  const [streaming, setStreaming] = useState("")
  const { id } = useParams()

  useEffect(() => {
    const fetchMedia = async () => {
      const res = await axios.get(`${URL}/${id}`, { headers })
      console.log(res)
      setMedia(res.data)
      console.log(media)
      // setStreaming(
      //   if ({ media.fields.netflixOrHulu } == 1) {
      //     return "Available on Netflix"
      //   } else if ({ media.fields.netflixOrHulu }) {
      //     return
      //   }
      // )
      if (media.fields.netflixOrHulu === "1") {
        setStreaming("Available on Netflix")
      } else if (media.fields.netflixOrHulu === "2") {
        setStreaming("Available on Hulu")
      }
    }
    fetchMedia()
  }, [])


  return (
    <div>
      <img src={media.fields?.poster} />
      <h2>{media.fields?.title}</h2>
      <p>{media.fields?.year}</p>
      <p>{media.fields?.genre}</p>
      <p>{streaming}</p>
      <button>See More</button>
    </div>
  )
}
