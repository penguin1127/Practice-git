import React from "react";
import postsDB from "../data/postsDB";
import playerDB from "../data/playerDB";
import mercenaryDB from "../data/mercenaryDB";
import matchPostDB from "../data/matchPostDB";
import Footer from "../components/common/Footer";
import TeamList from "../components/team/TeamList";
import PlayerList from "../components/player/PlayerList";
import MatchPostList from "../components/match/MatchPostList";
import MercenaryList from "../components/mercenary/MercenaryList";
import FilterBar from "../components/common/FilterBar"; // 공통 필터 컴포넌트

function MainPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* 배너 섹션 */}
      <section className="bg-blue-500 text-white py-16 text-center banner">
        <h2 className="text-4xl font-bold mb-4">조기축구, 함께 즐기세요!</h2>
        <p className="text-lg mb-6">지금 바로 팀을 모집하고 경기를 시작하세요!</p>
      </section>

      {/* 용병 목록 */}
      <section className="container mx-auto py-6 px-4 flex-grow">
        <h3 className="text-2xl font-bold mb-4">용병 목록</h3>
        <MercenaryList mercenaries={mercenaryDB.mercenaries} />
      </section>

      <hr className="border-t-2 border-gray-300 my-8" />

      {/* 조기축구 팀 목록 */}
      <section className="container mx-auto py-6 px-4 flex-grow">
        <h3 className="text-2xl font-bold mb-4">조기축구 팀 목록</h3>
        <TeamList teams={postsDB} />
      </section>

      <hr className="border-t-2 border-gray-300 my-8" />

      {/* 선수 목록 */}
      <section className="container mx-auto py-6 px-4 flex-grow">
        <h3 className="text-2xl font-bold mb-4">선수 목록 (개인 지원)</h3>
        <PlayerList players={playerDB.players} />
      </section>

      <hr className="border-t-2 border-gray-300 my-8" />

      {/* 경기 모집 게시판 */}
      <section className="container mx-auto py-6 px-4 flex-grow">
        <h3 className="text-2xl font-bold mb-4">경기 모집 게시판</h3>
        <MatchPostList matches={matchPostDB.matches} />
      </section>

      <Footer />
    </div>
  );
}

export default MainPage;