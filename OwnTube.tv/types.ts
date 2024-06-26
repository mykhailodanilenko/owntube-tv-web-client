export enum SOURCES {
  PEERTUBE = "peertube2.cpy.re",
  REBELLION = "tube.rebellion.global",
  TEST_DATA = "Test Data",
}

export enum STORAGE {
  DATASOURCE = "data_source",
  VIEW_HISTORY = "view_history",
}

export enum ROUTES {
  INDEX = "index",
  SETTINGS = "settings",
  VIDEO = "video",
}

export interface Category {
  label: string;
  id: number;
}

export interface Video {
  id: number;
  name: string;
  category: Category;
  thumbnailPath: string;
  thumbnailUrl?: string;
  description?: string | null;
}

export interface VideoCategory extends Category {
  videos: Video[];
}
