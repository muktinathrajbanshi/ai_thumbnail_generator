import type { ThumbnailStyle } from "../assets/assets"

const StyleSelector = ({value, onChange, isOpen, setIsOpen} : 
    {value: ThumbnailStyle; onChange: (style: ThumbnailStyle) => void; 
    isOpen: boolean; setIsOpen: (open: boolean) => void}) => {

        const styleDescriptions: Record<ThumbnailStyle, string> = {
            "Bold & Graphic" : "High contrast, bold typography, striking visuals",
            "Minimalist" : "Clean, simple, lots of white space",
            "Photorealistic" : "Photo-based, natural looking",
            "Illustrated" : "Hand-drawn, artistic, creative",
            "Tech/Futuristic" : "Modern, sleek, tech-inspired",


        }

  return (
    <div className="relative space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">Thumbnail Style</label>

        <button>
            <div className="space-y-1">
                {}
            </div>
        </button>


    </div>
  )
}

export default StyleSelector
