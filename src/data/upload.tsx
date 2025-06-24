

"use client";



import { Button } from "@/components/ui/button";
import { uploadAllFakeData } from "@/firebase/uploadData";
import { useState } from "react";

export default function UploadPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  async function handleUpload() {
    setLoading(true);
    const result = await uploadAllFakeData();
    setStatus(result.message);
    setLoading(false);
  }

  return (
    <div className="p-6">
     
      <Button onClick={handleUpload} disabled={loading}>
        {loading ? "جارٍ الرفع..." : "رفع البيانات"}
      </Button>
      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
