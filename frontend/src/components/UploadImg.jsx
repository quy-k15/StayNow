import React, { useState } from "react";
import { createHotel } from "../../api/hotelApi";

const UploadImage = () => {
    const [hotelName , setHotelName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating]= useState("");
    const [selectedFile, setSelectedFile]= useState(null);
  const handleUpload = async (e) => {
    e.preventDefault();
    if(!selectedFile){
        alert("Vui lòng chọn ảnh");
        return;
    }
    const formData = new FormData();
    formData.append("name", hotelName);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("rating", rating);
    formData.append("image", selectedFile);
    try {
        const result = await createHotel(formData);
        console.log("Upload thành công", result);
        alert("Tải lên thành công!");
    } catch(err){
        alert("Lỗi khi tải ảnh lên!");
        console.log(err);
    }
  };
  return(
     <form onSubmit={handleUpload}>
      <div>
        <label>Tên khách sạn:</label>
        <input type="text" value={hotelName} onChange={(e) => setHotelName(e.target.value)} />
      </div>
      <div>
        <label>Địa chỉ:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Mô tả:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Xếp hạng:</label>
        <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
      </div>
      <div>
        <label>Chọn ảnh:</label>
        <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      </div>
      <button type="submit">Tải lên</button>
    </form>
  )
};
export default UploadImage;
