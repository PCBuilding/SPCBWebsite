export interface Parts {
    RAM: string;
    Cooling: string;
    Case: string;
    Motherboard: string;
    PSU: string;
    GPU: string;
    Storage: string;
    CPU: string;
  }
  
  export interface ProjectFormData {
    Youtube: string;
    Description: string;
    Parts: Parts;
    Title: string;
    Photos: string;
    Image: string;
    Builders: string[];
  }
  
  export interface Project extends ProjectFormData {
    id: string;
  }

