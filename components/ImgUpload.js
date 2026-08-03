"use client";

import { useState } from "react";
import axios from "axios";
import { UploadCloud, Image as ImageIcon, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ImgUpload({ user }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setMessage(null);
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);
    setMessage(null);

    const formData = new FormData();
    formData.append("image", image, `${user?.username || "user"}.jpg`);

    try {
      const res = await axios.post(
        "http://localhost:8000/accounts/upload-image/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res.data);
      setMessage({ type: "success", text: "Profile image uploaded successfully!" });
    } catch (err) {
      console.error(err);
      setMessage({ type: "error", text: "Upload failed. Please check server connection." });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <UploadCloud className="h-5 w-5 text-cyan-400" />
        <h3 className="text-lg font-bold text-white">Update Avatar Image</h3>
      </div>

      <div className="relative rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 p-6 text-center transition hover:border-cyan-500/50 hover:bg-slate-900/90 group">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="absolute inset-0 z-20 h-full w-full cursor-pointer opacity-0"
        />

        <div className="flex flex-col items-center justify-center space-y-3">
          {preview ? (
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-cyan-400 shadow-xl shadow-cyan-500/20">
              <img src={preview} alt="Avatar preview" className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition group-hover:scale-105">
              <ImageIcon className="h-8 w-8" />
            </div>
          )}

          <div>
            <p className="text-sm font-semibold text-white">
              {image ? image.name : "Click or drag an image here to upload"}
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Supports PNG, JPG, JPEG up to 5MB
            </p>
          </div>
        </div>
      </div>

      {message && (
        <div
          className={`flex items-center gap-2 rounded-xl p-3 text-xs font-medium ${
            message.type === "success"
              ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
              : "border border-rose-500/30 bg-rose-500/10 text-rose-300"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="h-4 w-4 shrink-0" />
          ) : (
            <AlertCircle className="h-4 w-4 shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {image && (
        <button
          className="btn-prm flex items-center justify-center gap-2 py-3"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Uploading Image...</span>
            </>
          ) : (
            <>
              <UploadCloud className="h-4 w-4" />
              <span>Save & Upload Profile Image</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}