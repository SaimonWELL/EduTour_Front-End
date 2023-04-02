export type Tags = {
    [key: string]: string;
  }
  
 export const tags: Tags = {
    '1': 'Очное',
    '2': 'Школьнику',
    '3': 'Студенту'
  }
  
  export type Events = {
    [key: string]: string;
  }
  
 export const events: Events = {
    '1': 'Школа магистранта',
    '2': 'Олимпиада для школьников',
    '3': 'День открытых дверей',
    '4': 'Открытые лекции'
  };
  
  export type EventsImgs = {
    [key: string]: string;
  }
  
 export const events_imgs: EventsImgs = {
    '1': 'https://www.sut.ru/new_site/images/index_block/1598434086.png',
    '2': 'https://www.tadviser.ru/images/thumb/1/16/06-spbgut.jpg/840px-06-spbgut.jpg',
    '3': 'https://www.sut.ru/new_site/images/stud_banner/1610367366.jpg',
    '4': 'https://tadviser.ru/images/0/07/%D0%A1%D0%9F%D0%B1%D0%93%D0%A3%D0%A2.jpg'
  };
  
  export type EventsTags = {
    [key: string]: string[];
  }
  
export const events_tags: EventsTags = {
    '1': ['1', '3'],
    '2': ['1', '2'],
    '3': ['1', '2', '3'],
    '4': ['3', '2'],
  };