import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';

interface Parts {
  RAM: string;
  Cooling: string;
  Case: string;
  Motherboard: string;
  PSU: string;
  GPU: string;
  Storage: string;
  CPU: string;
}

interface ProjectFormData {
  Youtube: string;
  Description: string;
  Parts: Parts;
  Title: string;
  Photos: string;
  Image: string;
  Builders: string[];
}

const initialFormState: ProjectFormData = {
  Youtube: '',
  Description: '',
  Parts: {
    RAM: '',
    Cooling: '',
    Case: '',
    Motherboard: '',
    PSU: '',
    GPU: '',
    Storage: '',
    CPU: ''
  },
  Title: '',
  Photos: '',
  Image: '',
  Builders: ['']
};

export default function ProjectForm() {
  const [formData, setFormData] = useState<ProjectFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      // Handle nested Parts object
      const [parent, child] = name.split('.');
      if (parent === 'Parts') {
        setFormData((prev: ProjectFormData) => ({
          ...prev,
          Parts: {
            ...prev.Parts,
            [child]: value
          }
        }));
      }
    } else {
      setFormData((prev: ProjectFormData) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleBuilderChange = (index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      Builders: prev.Builders.map((builder, i) => (i === index ? value : builder))
    }));
  };

  const addBuilder = () => {
    setFormData(prev => ({
      ...prev,
      Builders: [...prev.Builders, '']
    }));
  };

  const removeBuilder = (index: number) => {
    setFormData(prev => ({
      ...prev,
      Builders: prev.Builders.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Filter out empty builders
      const cleanedData = {
        ...formData,
        Builders: formData.Builders.filter(builder => builder.trim() !== '')
      };

      const docRef = await addDoc(collection(db, "Projects"), cleanedData);
      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
      setFormData(initialFormState);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
      console.error("Error adding document: ", e);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Basic Information</h2>
          
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
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="Description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
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
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="Image" className="block text-sm font-medium">
              Main Image URL
            </label>
            <input
              type="url"
              id="Image"
              name="Image"
              value={formData.Image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
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
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Comma-separated URLs"
              required
            />
          </div>
        </div>

        {/* Parts Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">PC Parts</h2>
          {Object.keys(formData.Parts).map((part) => (
            <div key={part}>
              <label htmlFor={part} className="block text-sm font-medium">
                {part}
              </label>
              <input
                type="text"
                id={part}
                name={`Parts.${part}`}
                value={formData.Parts[part as keyof Parts]}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          ))}
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
                className="flex-1 p-2 border rounded-md"
                placeholder="Builder name"
                required
              />
              {formData.Builders.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeBuilder(index)}
                  className="px-3 py-2 bg-red-500 text-white rounded-md"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addBuilder}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Add Builder
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Project'}
        </button>

        {error && (
          <div className="text-red-500 mt-2">{error}</div>
        )}

        {success && (
          <div className="text-green-500 mt-2">Project added successfully!</div>
        )}
      </form>
    </div>
  );
}