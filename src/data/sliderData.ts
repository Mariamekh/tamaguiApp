export interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export const slides: Slide[] = [
  {
    id: '1',
    title: 'Spin & Win Big Jackpots!',
    subtitle: 'Tap to Start Gambling',
    image:
      'https://media.discordapp.net/attachments/1304891721183793254/1393536431615508480/mariamekh_A_whimsical_digital_illustration_of_a_glowing_fantasy_5acce7bf-34f3-4bd1-b064-23af3600fab0.png?ex=6873876f&is=687235ef&hm=55c5eb45dbcaf9daabd0e929e692ed955ad2d93a2367b81e14a73a2a66825500&=&format=webp&quality=lossless&width=1100&height=616',
    cta: 'Play Now',
  },
  {
    id: '2',
    title: 'Hit the Poker Tables!',
    subtitle: 'Join the Action',
    image:
      'https://media.discordapp.net/attachments/1304891721183793254/1393537694721769472/mariamekh_A_whimsical_digital_illustration_of_a_glowing_fantasy_13e61dbb-2c09-4acc-a73f-dcb1d7e93f57.png?ex=6873889d&is=6872371d&hm=b8b9f5a5f065b2dfb459cae17394e84813c422c4ac870e7c3bb87da86a273ab5&=&format=webp&quality=lossless&width=1100&height=616',
    cta: 'Join Now',
  },
].filter(slide => slide !== undefined);
