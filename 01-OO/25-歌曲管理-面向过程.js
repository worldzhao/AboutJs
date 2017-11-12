var songList = [{
    name: 'Summer',
    author: '久石让'
}, {
    name: '萤火虫之舞',
    author: '石进'
}];

//增删查改

//增
songList.push({
    name: '小溪之歌',
    author: '石进'
});

//console.log(songList);

//删
for (var i = 0; i < songList.length; i++) {
    if (songList[i].name == 'Summer') {
        songList.splice(i, 1);
    }
}

//console.log(songList);
//查
for (var i = 0; i < songList.length; i++) {
    if (songList[i].name == "小溪之歌") {
        console.log(songList[i]);
    }
}

//改
for (var i = 0; i < songList.length; i++) {
    if (songList[i].name == "小溪之歌") {
        songList[i].author = "赵志文";

    }
}
//console.log(songList);