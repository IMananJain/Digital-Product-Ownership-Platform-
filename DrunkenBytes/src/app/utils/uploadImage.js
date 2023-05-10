import baseURL from "@/app/constants/baseURL";

export const uploadImage = async (file, name, folder)=>{
    const formData = new FormData();
    formData.append("image", file);
    const result = await fetch(`${baseURL}/image/upload-image?name=${name}&folder=${folder}`,
    {
      method:"POST",
      body: formData,
      headers:{
        // "Content-Type": 'multipart/form-data'
      },
      credentials: "include"
    })
    const resultData = await result.json();
    return {
      "success": 1,
      "file": {
        "url": `${baseURL}${resultData.data.url}`
      }
    }
}

export const deleteImage = async (name, folder)=>{
  const result = await fetch(`${baseURL}/image/delete-image?name=${name}&folder=${folder}`,
  {
    method:"DELETE",
    credentials: "include"
  })
  const resultData = await result.json();
  return resultData;
}