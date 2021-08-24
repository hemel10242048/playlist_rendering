import songslist from './songslist.js'
const Playlist=(()=>{
    const songs=songslist;
    const cpi=6;
    const currentsong=new Audio(songs[cpi].url);
    const playlistelements=document.querySelector('.playlist')
    const init=()=>{
        console.log("Hello from spotify!");
        console.log(songs);
        currentsong.play()
        render();
    };
    const render=()=>{
        let markup='';
        songs.forEach((song,index)=>{
            markup+=`
            <li class="playlist_song ${index==cpi?'playlist_active':''}">
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
