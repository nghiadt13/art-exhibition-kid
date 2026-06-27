export interface Exhibition {
  id: string;
  title: string;
  description: string;
  artist: string;
  imageUrl: string;
  year: number;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateExhibitionDto {
  title: string;
  description: string;
  artist: string;
  imageUrl: string;
  year: number;
  category: string;
}

export interface UpdateExhibitionDto extends Partial<CreateExhibitionDto> {}
