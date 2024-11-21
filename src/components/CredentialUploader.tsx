"use client";

import { Card } from "@/components/ui/card";
import { jwtDecode } from "jwt-decode";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";

export function CredentialUploader({
  onCredentialUpload,
}: {
  onCredentialUpload: (credential: any) => void;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = async (e) => {
          try {
            const text = e.target?.result as string;
            let json;

            // Check if the text is a JWT (base64 encoded string)
            if (text.split(".").length === 3) {
              try {
                json = jwtDecode(text);
              } catch (jwtError) {
                console.log("Error decoding JWT:", jwtError);
                toast.error("Invalid JWT format");
                return;
              }
            } else {
              // Try parsing as regular JSON
              try {
                json = JSON.parse(text);
              } catch (jsonError) {
                console.log("Error parsing JSON:", jsonError);
                toast.error("Invalid JSON format");
                return;
              }
            }

            onCredentialUpload(json);
          } catch (error) {
            console.log("Error processing credential:", error);
            toast.error("Failed to process credential");
          }
        };
        reader.readAsText(file);
      });
    },
    [onCredentialUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/json": [".json"],
      "text/plain": [".txt", ".jwt"],
    },
  });

  return (
    <Card
      {...getRootProps()}
      className="h-full p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors flex items-center justify-center"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-center">Drop the credentials here...</p>
      ) : (
        <p className="text-center">
          Drag and drop credentials here, or click to select files
        </p>
      )}
    </Card>
  );
}
