var songList = [{
    name: 'Summer',
    author: '久石让'
}, {
    name: '萤火虫之舞',
    author: '石进'
}];

//增删查改

//增
function addSong(obj) {
    songList.push(obj);
}


//查
function selectSong(songName) {
    for (var i = 0; i < songList.length; i++) {
        if (songList[i].name == songName) {
            return songList[i];
        }
    }
}

//删
function removeSong(songName) {
    var song = selectSong(songName);
    var index = songList.indexOf(song);
    songList.splice(index, 1);
}


//改
function editSong(songName, author) {
    var song = selectSong(songName);
    song.author = author;
}



addSong({
    name: '演员',
    author: '薛之谦'
});

removeSong('Summer');

//console.log(selectSong('演员'));

editSong('演员', '赵志文');

console.log(songList);