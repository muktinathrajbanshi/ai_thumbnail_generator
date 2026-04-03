import SoftBackdrop from "../components/SoftBackdrop";

const MyGeneration = () => {
  return (
    <>
     <SoftBackdrop /> 
     <div className="mt-32 min-h-screen px-6 md:px-16 lg:px-24 xl:px-32">
      {/* Header  */}
      <div>
        <h1>My Generation</h1>
        <p>View and manage all your AI-generated thumbnails</p>
      </div>
     </div>
    </>
  )
}

export default MyGeneration;
