import songslist from './songslist.js'
const Playlist=(()=>{
    const songs=songslist;
    const cpi=0;
    const currentsong=new Audio(songs[cpi].url);
    const playlistelements=document.querySelector('.playlist')
    const init=()=>{
        console.log("Hello from spotify!");
        console.log(songs);
        render();
    };
    const render=()=>{
        let markup='';
        songs.forEach((song)=>{
            markup+=`
            <li class="playlist_song">
            <span class="song_name">${song.id}.</span>
                <span class="song_name">${song.title}</span>
                <span class="song_artist">${song.Artist}</span>
                <span class="song_duration">${song.time}</span>
            </li>
            `;
        })
        playlistelements.innerHTML=markup;
    };
    return{
        init,
    };
})();

export default Playlist;