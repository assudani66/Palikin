import React from 'react'

export const Profile = () => {

  const profileInfo = {
    firstName: "Levi",
    lastName: "Ackerman",
    username: "levi",
    bio: "Shinzou wo Sasageyo",
    profilePic: "https://i.postimg.cc/rFjPz2Pk/levi.jpg",
    qrCode: "https://i.postimg.cc/VNfGLdz1/qr-one.png",
    twitterUrl: "https://example.com/levi",
    instaUrl: "https://example.com/igLevi"
  }

  return (
    <div className="mt-[-40px]">
      <div className="flex flex-col justify-center items-center">
        <img src={profileInfo.profilePic} alt="profile" className="w-24 h-24 rounded-full"/>
        <img src={profileInfo.qrCode} alt="qr" />
        <h1 className="font-bold">@{profileInfo.username}</h1>
      </div>
      <div className="ml-[30px] mt-[20px]">
        <h1 className="font-bold text-24">{profileInfo.firstName} {profileInfo.lastName}</h1>
        <p className="italic font-bold">{profileInfo.bio}</p>
      </div>
      <div>
        <div className="ml-[-60px] mt-[20px] flex justify-around items-center">
          <span className="flex">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_19_533)">
              <path d="M17 0C12.3866 0 11.8065 0.02125 9.99388 0.102C8.18125 0.187 6.94662 0.47175 5.865 0.8925C4.73045 1.31924 3.70279 1.98863 2.85388 2.85388C1.98916 3.70323 1.31985 4.73076 0.8925 5.865C0.47175 6.9445 0.184875 8.18125 0.102 9.9875C0.02125 11.8044 0 12.3824 0 17.0021C0 21.6176 0.02125 22.1956 0.102 24.0083C0.187 25.8188 0.47175 27.0534 0.8925 28.135C1.32812 29.2528 1.90825 30.2005 2.85388 31.1461C3.79738 32.0917 4.74513 32.674 5.86287 33.1075C6.94663 33.5283 8.17913 33.8151 9.98963 33.898C11.8044 33.9787 12.3824 34 17 34C21.6176 34 22.1935 33.9787 24.0083 33.898C25.8166 33.813 27.0555 33.5283 28.1371 33.1075C29.2709 32.6805 30.2979 32.0112 31.1461 31.1461C32.0917 30.2005 32.6719 29.2528 33.1075 28.135C33.5261 27.0534 33.813 25.8188 33.898 24.0083C33.9787 22.1956 34 21.6176 34 17C34 12.3824 33.9787 11.8044 33.898 9.98963C33.813 8.18125 33.5261 6.9445 33.1075 5.865C32.6802 4.73073 32.0109 3.70319 31.1461 2.85388C30.2975 1.98831 29.2697 1.31887 28.135 0.8925C27.0513 0.47175 25.8145 0.184875 24.0061 0.102C22.1914 0.02125 21.6155 0 16.9958 0H17.0021H17ZM15.4764 3.06425H17.0021C21.5411 3.06425 22.0787 3.07913 23.8701 3.162C25.5276 3.23638 26.4286 3.51475 27.0279 3.74638C27.8205 4.0545 28.3879 4.42425 28.9829 5.01925C29.5779 5.61425 29.9455 6.1795 30.2536 6.97425C30.4874 7.57137 30.7636 8.47238 30.838 10.1299C30.9209 11.9213 30.9379 12.4589 30.9379 16.9958C30.9379 21.5326 30.9209 22.0724 30.838 23.8637C30.7636 25.5212 30.4853 26.4201 30.2536 27.0194C29.9811 27.7575 29.5461 28.4249 28.9807 28.9722C28.3857 29.5672 27.8205 29.9349 27.0258 30.243C26.4308 30.4768 25.5297 30.753 23.8701 30.8295C22.0787 30.9103 21.5411 30.9294 17.0021 30.9294C12.4631 30.9294 11.9234 30.9103 10.132 30.8295C8.4745 30.753 7.57562 30.4768 6.97638 30.243C6.23794 29.9708 5.56989 29.5366 5.02137 28.9722C4.4556 28.4241 4.01991 27.756 3.74638 27.0173C3.51475 26.4201 3.23638 25.5191 3.162 23.8616C3.08125 22.0702 3.06425 21.5326 3.06425 16.9915C3.06425 12.4525 3.08125 11.917 3.162 10.1256C3.2385 8.46812 3.51475 7.56713 3.7485 6.96788C4.05662 6.17525 4.42637 5.60787 5.02137 5.01288C5.61637 4.41787 6.18162 4.05025 6.97638 3.74213C7.57562 3.50838 8.4745 3.23213 10.132 3.15563C11.7003 3.08337 12.308 3.06213 15.4764 3.06V3.06425ZM26.0759 5.88625C25.808 5.88625 25.5427 5.93902 25.2952 6.04154C25.0477 6.14406 24.8228 6.29432 24.6334 6.48375C24.4439 6.67318 24.2937 6.89807 24.1912 7.14558C24.0886 7.39308 24.0359 7.65835 24.0359 7.92625C24.0359 8.19415 24.0886 8.45942 24.1912 8.70692C24.2937 8.95443 24.4439 9.17932 24.6334 9.36875C24.8228 9.55818 25.0477 9.70844 25.2952 9.81096C25.5427 9.91348 25.808 9.96625 26.0759 9.96625C26.6169 9.96625 27.1358 9.75132 27.5184 9.36875C27.9009 8.98617 28.1159 8.46729 28.1159 7.92625C28.1159 7.38521 27.9009 6.86633 27.5184 6.48375C27.1358 6.10118 26.6169 5.88625 26.0759 5.88625ZM17.0021 8.2705C15.8442 8.25243 14.6941 8.46491 13.6191 8.89555C12.544 9.32619 11.5653 9.9664 10.7401 10.7789C9.9148 11.5914 9.2594 12.56 8.81204 13.6282C8.36468 14.6964 8.13429 15.8429 8.13429 17.0011C8.13429 18.1592 8.36468 19.3057 8.81204 20.3739C9.2594 21.4422 9.9148 22.4107 10.7401 23.2232C11.5653 24.0357 12.544 24.6759 13.6191 25.1066C14.6941 25.5372 15.8442 25.7497 17.0021 25.7316C19.294 25.6959 21.48 24.7603 23.0881 23.1269C24.6962 21.4935 25.5975 19.2932 25.5975 17.0011C25.5975 14.7089 24.6962 12.5086 23.0881 10.8752C21.48 9.24181 19.294 8.30626 17.0021 8.2705ZM17.0021 11.3326C18.5052 11.3326 19.9467 11.9297 21.0096 12.9926C22.0724 14.0554 22.6695 15.4969 22.6695 17C22.6695 18.5031 22.0724 19.9446 21.0096 21.0074C19.9467 22.0703 18.5052 22.6674 17.0021 22.6674C15.499 22.6674 14.0575 22.0703 12.9947 21.0074C11.9318 19.9446 11.3348 18.5031 11.3348 17C11.3348 15.4969 11.9318 14.0554 12.9947 12.9926C14.0575 11.9297 15.499 11.3326 17.0021 11.3326Z" fill="black"/>
              </g>
              <defs>
              <clipPath id="clip0_19_533">
              <rect width="34" height="34" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <h1 className="ml-[10px] font-bold text-24">@{profileInfo.username}</h1>
          </span>
          <button className="bg-blue-500 px-2 py-1 text-white rounded-[5px]">Follow</button>
        </div>
        <div className="ml-[-60px] mt-[20px] flex justify-around items-center">
          <span className="flex">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7498 14.722L30.5087 2.125H27.9587L18.6193 13.0624L11.1563 2.125H2.55005L13.8338 18.666L2.55005 31.875H5.10005L14.9643 20.3235L22.8459 31.875H31.4522L19.7498 14.722ZM16.2584 18.8105L15.1152 17.1636L6.01805 4.05875H9.93442L17.2742 14.6349L18.4174 16.2818L27.9608 30.0305H24.0444L16.2584 18.8105Z" fill="black"/>
            </svg>
            <h1 className="ml-[10px] font-bold">@{profileInfo.username}</h1>
          </span>
          <button className="bg-blue-500 px-2 py-1 text-white rounded-[5px]">Follow</button>
        </div>
      </div>
    </div>
  )
}
