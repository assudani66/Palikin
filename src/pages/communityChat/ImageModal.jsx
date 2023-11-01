import { uploadMedia } from "./UploadMedia";

export const ImageModal = ({media, setMedia, setMediaUrl, setOpenModal}) => {
    
    const submitHandler = async (event) => {
        event.preventDefault();
        try {
          if (media) {
            const res = await uploadMedia(media);
            setMediaUrl(res?.url)
            setOpenModal(false)
          }
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-300/50 z-50">
            <div className="w-80 h-60 bg-slate-400 p-4 rounded-lg text-white relative">
                <button onClick={() => setOpenModal(false)} className="absolute top-4 right-4 text-[30px] cursor-pointer">&#10005;</button>
                <h1 className="text-[30px] font-bold mb-4">Upload image</h1>
                <input type="file" accept="image/* video/*" className="border p-2 rounded w-full mb-4" onChange={(e) => setMedia(e.target.files[0])}/>
                <button onClick={(e) => submitHandler(e)} className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">Upload</button>
            </div>
        </div>
    )
}