import React, { useEffect, useState } from 'react';
import { getAccessToken } from '../../utils/AuthSpotify';
import { dataBase } from '../../assets/DataBase';
import fs from 'fs'

interface Album {
  id: string;
  name: string;
  image: string;
}

interface AlbumSpotify {
  id: string;
  name: string;
  images: { url: string; }[];
}

const bands = ['Deftones', 'Pearl Jam', 'Soundgarden', 'Kyuss', 'Queens of the Stone Age', 'Nine Inch Nails', 'Nirvana', 'Toundra', 
'The Mars Volta', 'The Beatles', 'The Doors', 'Pink Floyd', 'Mogwai', 'Rammstein', 'Tom Waits', 'Tool', 
'A Perfect Circle', 'Arctic Monkeys', 'Low', 'Sigur Ros', 'Idles', 'King Crimson', 'Mark Lanegan', 'Yawning Man', 'The Stooges'];

const AlbumList: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>(dataBase);

  useEffect(() => {
    const fetchAlbums = async () => {
      
        const accessToken = await getAccessToken();

        const albumDataPromises = bands.map(async (band) => {
          const response = await fetch(`https://api.spotify.com/v1/search?q=${band}&type=album`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await response.json();
          const items = data.albums.items;
          console.log(data)
          return items.map((item: AlbumSpotify) => ({
            id: item.id,
            name: item.name,
            image: item.images[1]?.url, 
          }));
        });

        const albumData = await Promise.all(albumDataPromises);
        const allAlbums = albumData.flat(); 

        setAlbums(allAlbums);
      
    };

    fetchAlbums();
  
  }, []);

  return (
    <div className="album-list flex flex-wrap justify-items-center justify-center">
      {albums.map((album) => (
        <div key={album.id} className="album">
          <img src={album.image} alt={album.name} />
          <p>{album.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;
