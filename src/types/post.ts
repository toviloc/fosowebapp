export interface Post {
  id: string;
  avatar: string;
  producer: string;
  header: string;
  container: [
    {
      content: [
        {
          type: string;
          url?: string;
          placeHolder?: string;
          note?: string;
          header?: string;
          text?: string;
          listTop?: [{ listText?: string; meaning?: string }];
          list?: string[];
          endText?: string;
          container?: [{ header?: string; text?: string }];
          textList?: string[];
        }
      ];
    }
  ];
  card: {
    tag: string;
    title: string;
    date: string;
    readingTime: string;
    linkUrl: string;
    linkText: string;
    imgUrl: string;
  };
}
