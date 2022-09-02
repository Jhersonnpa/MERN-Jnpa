import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dbdcovz1j",
  api_key: "398932177727613",
  api_secret: "PD30D42GzUVlJgm7v8ZSV5BICSA",
});

export const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: "posts",
  });
};

export const deleteImage = async (id) => {
    return await cloudinary.uploader.destroy(id);
}
