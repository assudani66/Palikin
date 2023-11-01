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
        <div className="w-[200px] h-[200px] bg-slate-400">
            <p onClick={() => setOpenModal(false)}>X</p>
            <h1>Upload image</h1>
            <input type="file" accept="image/* video/*" className="" onChange={(e) => setMedia(e.target.files[0])}/>
            <button onClick={(e) => submitHandler(e)}>Upload</button>
        </div>
    )
}