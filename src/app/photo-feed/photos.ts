import { StaticImageData } from 'next/image';
import photo1 from '../../../public/photos/IMG_1908.jpeg';
import photo2 from '../../../public/photos/IMG_1920.jpeg';
import photo3 from '../../../public/photos/IMG_1972.jpeg';
import photo4 from '../../../public/photos/IMG_1998.jpeg';
import photo5 from '../../../public/photos/IMG_1999.jpeg';

export type Photo = {
  id: string;
  name: string;
  src: StaticImageData
}

export const photos: Photo[] = [
  {
    id: '1',
    name: 'First Photo',
    src: photo1
  },
  {
    id: '2',
    name: 'Second Photo',
    src: photo2
  },
  {
    id: '3',
    name: 'Third Photo',
    src: photo3
  },
  {
    id: '4',
    name: 'Forth Photo',
    src: photo4
  },
  {
    id: '5',
    name: 'Fifth Photo',
    src: photo5
  },
]