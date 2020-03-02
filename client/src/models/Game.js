export const Players = [
    { Name: 'Bernie', Score: 0, isDealer: false}
];

export const MyCards = [];

export const PictureDesk = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQh_bwBd27QZrL89N6S7Ete2-BInmIUcLiUX5-NhvFFbCmMy_f6',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpSHiNXMR0QzBIH9UPja7ahAf6o5fxWaDNwCyJnsxva2XYvhW6',
    'https://i.ytimg.com/vi/bzZEH_5OuIs/maxresdefault.jpg'

];

export const CaptionsDesk = [
    'For me, math class is like watching a foreign movie without subtitles.',
    'Mybe if we tell people the brain is an app, they will start using it.',
    'When nothing goes right, go left.',
    'A cop pulled me over and told me “Papers”, so I said “Scissors, I win!” and drove off.',
    'Mm: Why is everything on the floor? Me: Gravity!'

];

export let CurrentPicture = "";

export const CardsInPlayer = [];

export function  Init(){
    MyCards.push(CaptionsDesk[0])
    MyCards.push(CaptionsDesk[1])

    CurrentPicture = PictureDeck[0];
}