import { useSearchParams } from "react-router-dom";
import { yt_html } from "../assets/assets"

const YtPreview = () => {

  const [searchParams] = useSearchParams()

  const thumbnail_url = searchParams.get("thumbnail_url")
  const title = searchParams.get("title")

  return (
    <div>
      
    </div>
  )
}

export default YtPreview;
