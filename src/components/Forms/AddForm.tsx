import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/lib/firebase/firebase";
import { ProjectFormData, Parts, Project } from "@/types/project";

interface AddFormProps {
  initialData?: ProjectFormData;
  onSubmit?: (data: ProjectFormData) => Promise<void>;
  isEditing?: boolean;
}

const emptyFormState: ProjectFormData = {
  Youtube: "",
  Description: "",
  Parts: {
    RAM: "",
    Cooling: "",
    Case: "",
    Motherboard: "",
    PSU: "",
    GPU: "",
    Storage: "",
    CPU: "",
  },
  Title: "",
  Photos: "",
  Image: "",
  Builders: [""],
};

export default function AddForm({
  initialData,
  onSubmit,
  isEditing = false,
}: AddFormProps) {
  const [formData, setFormData] = useState<ProjectFormData>(
    initialData || emptyFormState,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    formData.Image || "",
  );
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      // Handle nested Parts object
      const [parent, child] = name.split(".");
      if (parent === "Parts") {
        setFormData((prev: ProjectFormData) => ({
          ...prev,
          Parts: {
            ...prev.Parts,
            [child]: value,
          },
        }));
      }
    } else {
      setFormData((prev: ProjectFormData) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleBuilderChange = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      Builders: prev.Builders.map((builder, i) =>
        i === index ? value : builder,
      ),
    }));
  };

  const addBuilder = () => {
    setFormData((prev) => ({
      ...prev,
      Builders: [...prev.Builders, ""],
    }));
  };

  const removeBuilder = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      Builders: prev.Builders.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      let imageUrl = formData.Image;

      if (selectedImage) {
        imageUrl = await uploadImage(selectedImage);
      }

      // Filter out empty builders
      const cleanedData = {
        ...formData,
        Image: imageUrl,
        Builders: formData.Builders.filter((builder) => builder.trim() !== ""),
      };

      if (onSubmit) {
        await onSubmit(cleanedData);
      } else {
        const docRef = await addDoc(collection(db, "Projects"), cleanedData);
        console.log("Document written with ID: ", docRef.id);
      }

      setSuccess(true);
      if (!isEditing) {
        setFormData(emptyFormState);
        setSelectedImage(null);
        setImagePreview("");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "An error occurred");
      console.error("Error adding document: ", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError("Image must be less than 5MB");
        return;
      }

      setSelectedImage(file);
      console.log(file); //REMOVE

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileName = `${Date.now()}-${file.name}`;
    const storageRef = ref(storage, `project-images/${fileName}`);

    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Failed to upload image");
    }
  };

  return (
    <div className="mx-auto max-w-4xl p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="Title" className="block text-sm font-medium">
                Title
              </label>
              <input
                type="text"
                id="Title"
                name="Title"
                value={formData.Title}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="Description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border p-2"
                rows={4}
                required
              />
            </div>

            <div>
              <label htmlFor="Youtube" className="block text-sm font-medium">
                YouTube Link
              </label>
              <input
                type="url"
                id="Youtube"
                name="Youtube"
                value={formData.Youtube}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="Photos" className="block text-sm font-medium">
                Additional Photos URLs
              </label>
              <input
                type="text"
                id="Photos"
                name="Photos"
                value={formData.Photos}
                onChange={handleChange}
                className="mt-1 w-full rounded-md border p-2"
                placeholder="Url to photo folder"
                required
              />
            </div>

            <div>
              <label htmlFor="Image" className="block text-sm font-medium">
                Main Image
              </label>
              <div className="mt-1 space-y-2">
                <input
                  type="file"
                  id="Image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
                />
                {imagePreview && (
                  <div className="mt-2">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-auto max-w-xs rounded"
                    />
                  </div>
                )}
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="h-2.5 w-full rounded-full bg-gray-200">
                    <div
                      className="h-2.5 rounded-full bg-blue-600"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Parts Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">PC Parts</h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(formData.Parts).map((part) => (
              <div key={part} className="text-m block font-medium">
                <div>
                  <label htmlFor={part} className="block text-sm font-medium">
                    {part}
                  </label>
                  <input
                    type="text"
                    id={part}
                    name={`Parts.${part}`}
                    value={formData.Parts[part as keyof Parts]}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border p-2"
                    required
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Builders Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Builders</h2>
          {formData.Builders.map((builder, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={builder}
                onChange={(e) => handleBuilderChange(index, e.target.value)}
                className="flex-1 rounded-md border p-2"
                placeholder="Builder name"
                required
              />
              {formData.Builders.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeBuilder(index)}
                  className="rounded-md bg-red-500 px-3 py-2 text-white"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addBuilder}
            className="rounded-md bg-green-500 px-4 py-2 text-white"
          >
            Add Builder
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-blue-500 p-3 text-white disabled:bg-blue-300"
        >
          {isSubmitting
            ? "Submitting..."
            : isEditing
              ? "Update Project"
              : "Submit Project"}
        </button>

        {error && <div className="mt-2 text-red-500">{error}</div>}

        {success && (
          <div className="mt-2 text-green-500">
            {isEditing
              ? "Project updated successfully!"
              : "Project added successfully!"}
          </div>
        )}
      </form>
    </div>
  );
}
