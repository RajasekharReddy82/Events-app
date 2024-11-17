export interface MediaItem {
  id: number;
  title: string;
  type: "photo" | "video";
  url: string;
  fullUrl: string;
  videoUrl?: string;
  category: string;
}

export interface IGalleryTypes {
  asset_folder: string;
  asset_id: number;
  bytes: number;
  created_at: string;
  display_name: string;
  format: string;
  height: number;
  public_id: string;
  resource_type: string;
  secure_url: string;
  type: string;
  url: string;
  version: number;
  width: number;
}
