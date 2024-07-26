import PagePadding from "@/components/PagePadding";
import React from "react";
import Category from "./components/Category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import PlayListCaroiusel from "@/components/PlayListCaroiusel";
import SongListCarousel from "@/components/SongListCaroiusel";

const page = async () => {
  // const playlistArray = await getAllPlaylist();
  // const songListTop10 = await getSongListTop10();

  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt-20"></div>
      <PlayListCaroiusel
        playlistArray={playlistArray}
        title="새 앨범 및 싱글"
      />
      <div className="mt-20"></div>
      <SongListCarousel songlistTop10={songListTop10} title="새 앨범 및 싱글" />
    </PagePadding>
  );
};

export default page;
